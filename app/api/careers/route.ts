import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, trade, region, location, message } = body;

    // Validate required fields
    if (!name || !email || !trade || !region) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
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
    const { data, error } = await resend.emails.send({
      from: "SAS Transition Careers <onboarding@resend.dev>", // Replace with your verified domain
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

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the SAS Transition careers application form.</p>
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
