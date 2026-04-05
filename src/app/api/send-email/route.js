import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      if (process.env.NODE_ENV !== 'production') {
        console.error("RESEND_API_KEY is missing in environment variables!");
      }
      return NextResponse.json({ 
        success: false,
        error: "Server configuration error. Contact support."
      }, { status: 500 });
    }

    const { name, email, phone, service } = await req.json();

    if (!name || !phone || !service) {
      return NextResponse.json({ 
        success: false, 
        error: "Missing required fields: Name, Phone, and Treatment" 
      }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Clinic Notifications <onboarding@resend.dev>", // Replace with verified domain in prod
      to: ["jeevankart.in@gmail.com"], // Replace with clinic owner email
      replyTo: email || undefined,
      subject: `New Consultation Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0c4a6e; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Consultation Request</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> ${email || "Not provided"}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Requested Treatment:</strong> ${service}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <footer style="margin-top: 30px; font-size: 12px; color: #94a3b8;">
            Action Required: Please follow up with this patient as soon as possible.
          </footer>
        </div>
      `,
    });

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error("Resend API Error:", error);
      }
      return NextResponse.json({ 
        success: false, 
        error: "Failed to establish email connection" 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("API Route Error:", err);
    }
    return NextResponse.json({ 
      success: false, 
      error: "Internal Server Error" 
    }, { status: 500 });
  }
}
