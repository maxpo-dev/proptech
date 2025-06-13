import { InternalEmailHandler } from "@/app/components/emailHandlers/InternalEmail";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";
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
        body: JSON.stringify({ ...body, type: "participants" }), 
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
      host: "mail.maxpo.ae",
      port: 465,
      secure: true ,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

      const internalEmailHtml=InternalEmailHandler({ formType: "Participant", formData: body });
    const mailOptions = {
      from: `"Future Proptech Summit-Participant" <${process.env.EMAIL_USER}>`,
      // to: "avalasandeep89@gmail.com",
         to: process.env.TO_USER,
      subject: "New Participant - Future Proptech Summit",
      html: internalEmailHtml,
      // attachments: [
      //   {
      //     filename: "ParticipantSubmission.xlsx",
      //     content: excelBuffer,
      //   },
      // ],
    };
        const thankYouHtml=ThankYouEmailHandler({name})
    
        const thankYouMailOptions = {
          from: `"Future Proptech Summit" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Thank you for submitting your details -Future Proptech Summit",
          html: thankYouHtml,
        };
    
        await transporter.sendMail(thankYouMailOptions);

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 });
  }
}
