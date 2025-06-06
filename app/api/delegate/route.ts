import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      jobTitle,
      companyName,
      email,
      phone,
      country,
      message,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    // 1. Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Proptech - Delegate" <${process.env.EMAIL_USER}>`,
      to: "info@futureproptechsummit.com, digital.maxpo@gmail.com",
          // to: "avalasandeep89@gmail.com",
      subject: "New Delegate - Proptech",
      html: `
        <h1>New Delegate Registration</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <h2>UTM Tracking</h2>
        <p><strong>Source:</strong> ${utm_source || "N/A"}</p>
        <p><strong>Medium:</strong> ${utm_medium || "N/A"}</p>
        <p><strong>Campaign:</strong> ${utm_campaign || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 2. Log to Google Sheets (Apps Script Web App)
 const sheetResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        jobTitle,
        companyName,
        email,
        phone,
        country,
        message,
        utm_source,
        utm_medium,
        utm_campaign,
        type: "delegate",
      }),
    })

    if (!sheetResponse.ok) {
      console.error("Failed to log to Google Sheets");
    }

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully and email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting delegate form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit booking or send email." },
      { status: 500 }
    );
  }
}
