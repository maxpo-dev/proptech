import { InternalEmailHandler } from "@/app/components/emailHandlers/InternalEmail"
import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
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
      type = "sponsor",
    } = body

    const transporter = nodemailer.createTransport({
            host: "mail.maxpo.ae",
      port: 465,
      secure: true ,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

      const internalEmailHtml=InternalEmailHandler({ formType: "Sponsor", formData: body });
    await transporter.sendMail({
      from: `"Proptech - ${type}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_USER,
      subject: `New ${type} - Proptech`,
      html: internalEmailHtml,
    })

    // Send to Google Apps Script
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
        type: "sponsor",
      }),
    })

    return NextResponse.json({ success: true, message: "Submission successful!" }, { status: 200 })
  } catch (error) {
    console.error("Sponsor API Error:", error)
    return NextResponse.json({ success: false, message: "Submission failed." }, { status: 500 })
  }
}
