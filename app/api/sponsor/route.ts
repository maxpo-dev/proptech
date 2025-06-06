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
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Proptech - ${type}" <${process.env.EMAIL_USER}>`,
      // to: "avalasandeep89@gmail.com",
         to: "info@futureproptechsummit.com, digital.maxpo@gmail.com,",
      subject: `New ${type} - Proptech`,
      html: `
        <h1>New ${type} Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <h2>UTM Parameters</h2>
        <p><strong>Source:</strong> ${utm_source || "N/A"}</p>
        <p><strong>Medium:</strong> ${utm_medium || "N/A"}</p>
        <p><strong>Campaign:</strong> ${utm_campaign || "N/A"}</p>
      `,
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
