import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, companyName, jobTitle, message } = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@futureproptechsummit.com, digital.maxpo@gmail.com", // Change to the recipient email
      subject: "New Speaker Registration",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${companyName}
        Job Title: ${jobTitle}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
