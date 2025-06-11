import { InternalEmailHandler } from "@/app/components/emailHandlers/InternalEmail";
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
      host: "mail.maxpo.ae",
      port: 465,
      secure: true ,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const internalEmailHtml=InternalEmailHandler({ formType: "Delegate", formData: body });

    const mailOptions = {
      from: `"Proptech - Delegate" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_USER,
          // to: "avalasandeep89@gmail.com",
      subject: "New Delegate - Proptech",
      html: internalEmailHtml,
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
