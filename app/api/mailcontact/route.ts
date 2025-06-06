// app/api/mailcontact/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const {
      name, jobTitle, companyName, email, phone, country,
      message, utm_source, utm_medium, utm_campaign, type = "register"
    } = await req.json()

    // 1. Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const html = `
      <h1>New Enquiry Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong> ${message}</p>
      <hr>
      <h2>UTM Info</h2>
      <p>Source: ${utm_source}</p>
      <p>Medium: ${utm_medium}</p>
      <p>Campaign: ${utm_campaign}</p>
    `

    await transporter.sendMail({
      from: `"Enquiry" <${process.env.EMAIL_USER}>`,
      // to: "avalasandeep89@gmail.com",
        to: "info@futureproptechsummit.com, digital.maxpo@gmail.com,",
      subject: "New Enquiry - Future Proptech Summit",
      html,
    })

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
        type:"register"
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error submitting form:", err)
    return NextResponse.json({ success: false, message: "Submission failed" }, { status: 500 })
  }
}
