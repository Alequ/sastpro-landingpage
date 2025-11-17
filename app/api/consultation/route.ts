import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, enquiryType, location, message } =
      body;

    // Validate required fields
    if (!name || !email || !enquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Map enquiry types to readable labels
    const enquiryTypeLabels: Record<string, string> = {
      "construction-installation": "Construction & Installation",
      "commissioning-testing": "Commissioning & Testing",
      "maintenance-operations": "Maintenance & Operations",
      "authorised-personnel": "Authorised Personnel & Labour",
      "safety-compliance": "Safety & Compliance",
      "engineering-design": "Engineering & Design",
      "digital-solutions-sastpro": "Digital Solutions – SASTpro",
      "training-development": "Training & Development – SASTacademy",
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "SAS Transition Consultation Form <webadmin@sastransition.com>", 
      to: ["consultation@sastransition.com"], // Email address to receive consultation form submissions
      subject: `New Consultation Request: ${
        enquiryTypeLabels[enquiryType] || enquiryType
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #D0B970; padding-bottom: 10px;">
            New Consultation Request
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
            <p style="margin: 10px 0;"><strong>Consultation Type:</strong> ${
              enquiryTypeLabels[enquiryType] || enquiryType
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
            <h3 style="color: #333; margin-bottom: 10px;">Message / Scope Details:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
          `
              : ""
          }
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Consultation request sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
