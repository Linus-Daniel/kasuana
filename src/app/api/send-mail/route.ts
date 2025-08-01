import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const type = formData.get("type") as string;

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    if (type === "vendor") {
      // Handle vendor application
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.VENDOR_EMAIL_RECIPIENT || process.env.EMAIL_USER,
        subject: "New Vendor Application",
        html: `
          <h1>New Vendor Application</h1>
          <p><strong>Full Name:</strong> ${formData.get("fullName")}</p>
          <p><strong>Phone:</strong> ${formData.get("phone")}</p>
          <p><strong>Institution:</strong> ${
            formData.get("institution") || "Not provided"
          }</p>
          <p><strong>Business Name:</strong> ${formData.get("businessName")}</p>
          <p><strong>Business Type:</strong> ${formData.get("businessType")}</p>
        `,
        attachments: formData.get("flyer")
          ? [
              {
                filename: (formData.get("flyer") as File).name,
                content: Buffer.from(
                  await (formData.get("flyer") as File).arrayBuffer()
                ),
              },
            ]
          : [],
      };

      await transporter.sendMail(mailOptions);
    } else if (type === "contact") {
      // Handle contact form
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL_RECIPIENT || process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        html: `
          <h1>New Contact Message</h1>
          <p><strong>Name:</strong> ${formData.get("name")}</p>
          <p><strong>Email:</strong> ${formData.get("email")}</p>
          <p><strong>Message:</strong> ${formData.get("message")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
