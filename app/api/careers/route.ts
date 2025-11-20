import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// File validation constants (must match client-side)
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const MAX_FILES = 1;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

// Rate limiting - In-memory store (resets on server restart)
// For production, consider using Redis or a database
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 submissions per hour per IP

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60 * 60 * 1000); // Clean every hour

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    // First request or time window expired
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    // Rate limit exceeded
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000); // seconds
    return { allowed: false, retryAfter };
  }

  // Increment count
  entry.count++;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    const rateLimitCheck = checkRateLimit(ip);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${Math.ceil(
            (rateLimitCheck.retryAfter || 0) / 60
          )} minutes.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": rateLimitCheck.retryAfter?.toString() || "3600",
          },
        }
      );
    }

    // Parse FormData instead of JSON
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const trade = formData.get("trade") as string;
    const region = formData.get("region") as string;
    const location = formData.get("location") as string | null;
    const message = formData.get("message") as string | null;
    const website = formData.get("website") as string | null; // Honeypot
    const consent = formData.get("consent") as string;

    // Honeypot check - if filled, it's a bot (reject silently)
    if (website && website.trim() !== "") {
      console.log(`Bot detected from IP: ${ip} - honeypot filled`);
      // Return success to not alert the bot, but don't send email
      return NextResponse.json(
        { message: "Application sent successfully" },
        { status: 200 }
      );
    }

    // GDPR Consent check
    if (consent !== "true") {
      return NextResponse.json(
        { error: "You must consent to the privacy policy" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !trade || !region) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Extract and validate files
    const files = formData.getAll("files") as File[];
    const attachments = [];

    // Check if at least one file is uploaded (now required)
    if (files.length === 0 || !files[0] || !(files[0] instanceof File) || files[0].size === 0) {
      return NextResponse.json(
        { error: "Please upload a file (CV, cover letter, or certifications)" },
        { status: 400 }
      );
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_FILES} file allowed` },
        { status: 400 }
      );
    }

    // Process each file
    for (const file of files) {
      if (!(file instanceof File)) continue;

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File ${file.name} exceeds 3MB limit` },
          { status: 400 }
        );
      }

      // Validate file type by extension
      const fileExtension = file.name
        .substring(file.name.lastIndexOf("."))
        .toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        return NextResponse.json(
          { error: `File ${file.name} has invalid type. Only PDF, DOC, DOCX allowed` },
          { status: 400 }
        );
      }

      // Validate MIME type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: `File ${file.name} has invalid MIME type` },
          { status: 400 }
        );
      }

      // Convert file to base64 for Resend
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Content = buffer.toString("base64");

      attachments.push({
        filename: file.name,
        content: base64Content,
      });
    }

    // Map trade/discipline values to readable labels
    const tradeLabels: Record<string, string> = {
      "electrical-mechanical": "Electrical & Mechanical Technicians",
      "hv-lv": "HV/LV Authorised Persons & Engineers",
      commissioning: "Commissioning Engineers (Electrical, Mechanical, C&I)",
      "qa-qc": "QA/QC Inspectors & Technical Leads",
      "project-management": "Project Supervisors, Site Managers & Coordinators",
      "safety-compliance": "Safety, Compliance & Permit Personnel",
      "digital-support": "SASTpro Digital Support & System Specialists",
    };

    // Map region values to readable labels
    const regionLabels: Record<string, string> = {
      uk: "UK",
      europe: "Europe",
      usa: "USA",
      global: "Global",
    };

    // Send email using Resend
    const emailPayload: any = {
      from: "SAS Transition Careers <webadmin@sastransition.com>", // Use your verified domain
      to: ["Recruitment@sastransition.com"], // Email address to receive career applications
      subject: `New Career Application: ${tradeLabels[trade] || trade}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #D0B970; padding-bottom: 10px;">
            New Career Application
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; font-size: 18px; margin-bottom: 10px;">Applicant Information:</h3>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${
              phone
                ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>`
                : ""
            }
            <p style="margin: 10px 0;"><strong>Trade/Discipline:</strong> ${
              tradeLabels[trade] || trade
            }</p>
            <p style="margin: 10px 0;"><strong>Preferred Region:</strong> ${
              regionLabels[region] || region
            }</p>
            ${
              location
                ? `<p style="margin: 10px 0;"><strong>Location:</strong> ${location}</p>`
                : ""
            }
          </div>

          ${
            message
              ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; border-bottom: 2px solid #D0B970; padding-bottom: 5px;">Message / Availability:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          `
              : ""
          }

          ${
            attachments.length > 0
              ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; border-bottom: 2px solid #D0B970; padding-bottom: 5px;">Attached Document:</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              ${attachments
                .map(
                  (att) =>
                    `<li style="margin: 5px 0;">${att.filename} (${(
                      Buffer.from(att.content, "base64").length /
                      1024 /
                      1024
                    ).toFixed(2)} MB)</li>`
                )
                .join("")}
            </ul>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the SAS Transition careers application form.</p>
          </div>
        </div>
      `,
    };

    // Add attachments if any files were uploaded
    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Application sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Careers form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
