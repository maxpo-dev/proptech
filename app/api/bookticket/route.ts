import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, designation, phone } = await req.json()

    const transporter = nodemailer.createTransport({
      host: "mail.maxpo.ae",
      port: 465,
      secure: true ,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_USER,
      subject: "New Visitor Ticket Booking",
      html: `
        <h2>Visitor Ticket Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: "Ticket booked successfully and email sent!" },
      { status: 200 }
    )
  } catch (err) {
    console.error("Booking error:", err)
    return NextResponse.json(
      { success: false, message: "Failed to book ticket or send email." },
      { status: 500 }
    )
  }
}
