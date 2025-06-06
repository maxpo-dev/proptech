import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as XLSX from "xlsx";

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

    // Send to Google Apps Script
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const scriptResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, type: "participant" }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!scriptResponse.ok) {
        const errText = await scriptResponse.text();
        console.error("Google Script Error Response:", errText);
        throw new Error("Google Apps Script error");
      }
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
    }

    // Excel attachment
    const worksheet = XLSX.utils.json_to_sheet([
      {
        Name: name,
        "Job Title": jobTitle,
        "Company Name": companyName,
        Email: email,
        Phone: phone,
        Country: country,
        Message: message,
        "UTM Source": utm_source,
        "UTM Medium": utm_medium,
        "UTM Campaign": utm_campaign,
        Date: new Date().toLocaleString(),
      },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Participant");
    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Proptech Participant" <${process.env.EMAIL_USER}>`,
      // to: "avalasandeep89@gmail.com",
         to: "info@futureproptechsummit.com, digital.maxpo@gmail.com,",
      subject: "New Participant - Proptech",
      html: `
        <h1>New Participant Registration</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p><strong>UTM Source:</strong> ${utm_source}</p>
        <p><strong>UTM Medium:</strong> ${utm_medium}</p>
        <p><strong>UTM Campaign:</strong> ${utm_campaign}</p>
      `,
      // attachments: [
      //   {
      //     filename: "ParticipantSubmission.xlsx",
      //     content: excelBuffer,
      //   },
      // ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 });
  }
}
