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
      utm_campaign 
    } = body

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content with UTM details included
    const mailOptions = {
      // from: process.env.EMAIL_USER,
      from: `"Proptech- Sponsor" <${process.env.EMAIL_USER}>`, // This shows 'proptech' in the header
      // to: "info@futureproptechsummit.com, digital.maxpo@gmail.com,",
        to: "info@futureproptechsummit.com, digital.maxpo@gmail.com,",
    
      subject: "New Sponsor - Proptech",
      html: `
        <h1>New Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <h2>UTM Parameters</h2>
        <p><strong>UTM Source:</strong> ${utm_source || "N/A"}</p>
        <p><strong>UTM Medium:</strong> ${utm_medium || "N/A"}</p>
        <p><strong>UTM Campaign:</strong> ${utm_campaign || "N/A"}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully and email sent!" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit booking or send email." },
      { status: 500 },
    )
  }
}
