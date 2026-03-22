import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Ensure these are set in .env.local
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const CONTACT_TO = process.env.CONTACT_TO || "kuirjuach9@gmail.com";

if (!GMAIL_USER || !GMAIL_PASS) {
  console.warn("GMAIL_USER and GMAIL_PASS are required for contact email delivery.");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, message } = data;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!GMAIL_USER || !GMAIL_PASS) {
      return NextResponse.json({
        error:
          "Email service is not configured. Set GMAIL_USER and GMAIL_PASS in .env.local",
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${fullName} <${email}>`,
      to: CONTACT_TO,
      subject: `New Contact Request from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
