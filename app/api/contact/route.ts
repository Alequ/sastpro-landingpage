import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, enquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message || !enquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Map enquiry types to readable labels
    const enquiryTypeLabels: Record<string, string> = {
      general: "General Enquiry",
      quote: "Request a Quote",
      support: "Technical Support",
      emergency: "Emergency Callout",
      partnership: "Partnership Enquiry",
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "SAS Transition Contact Form <onboarding@resend.dev>", // Replace with your verified domain
      to: ["efix66@gmail.com"], // Email address to receive contact form submissions
      subject: `New Contact Form Submission: ${
        enquiryTypeLabels[enquiryType] || enquiryType
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #D0B970; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            ${
              company
                ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>`
                : ""
            }
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${
              phone
                ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>`
                : ""
            }
            <p style="margin: 10px 0;"><strong>Enquiry Type:</strong> ${
              enquiryTypeLabels[enquiryType] || enquiryType
            }</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; border-bottom: 2px solid #D0B970; padding-bottom: 5px;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the SAS Transition contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
