import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      companyName,
      jobTitle,
      message,
    } = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "mail.maxpo.ae",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Future Proptech Summit-Speaker" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_USER, // Change to the recipient email
      subject: "New Speaker- Future Proptech Summit",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${companyName}
        Job Title: ${jobTitle}
        Message: ${message}
      `,
    };

    const thankYouHtml = ThankYouEmailHandler({ name });

    const thankYouMailOptions = {
      from: `"Future Proptech Summit-Speaker" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for submitting your details -Future Proptech Summit",
      html: thankYouHtml,
    };

    await transporter.sendMail(thankYouMailOptions);
    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
