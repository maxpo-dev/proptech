// app/api/mailcontact/route.ts
import { InternalEmailHandler } from "@/app/components/emailHandlers/InternalEmail";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
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
      type = "register",
    } = await req.json();

    // 1. Send email
    const transporter = nodemailer.createTransport({
      host: "mail.maxpo.ae",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = InternalEmailHandler({
      formType: "Enquiry",
      formData: {
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
      },
    });

    await transporter.sendMail({
      from: `"Enquiry" <${process.env.EMAIL_USER}>`,
      // to: "avalasandeep89@gmail.com",
      to: process.env.TO_USER,
      subject: "New Enquiry - Future Proptech Summit",
      html,
    });

    // 2. Send to Google Apps Script (for Excel/Sheets logging)
    await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
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
        type: "register",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error submitting form:", err);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
