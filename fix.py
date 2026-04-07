import os
content = '''import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerEmail, paymentId, pdfData } = body;

    if (!customerEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!pdfData) {
      return NextResponse.json({ error: "pdfData is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: \"Mechanical Wings" <\>\,
      to: customerEmail,
      subject: \Invoice for your AC Services - Mechanical Wings (#\)\,
      text: \Hello \,\\n\\nThank you for choosing Mechanical Wings! Your payment has been successfully processed.\\n\\nPlease find your officially generated invoice attached as a PDF document.\\n\\nKeep this invoice for your records. If you have any questions, feel free to contact us at +91 78019 29198.\\n\\nBest regards,\\nThe Mechanical Wings Team\,
      attachments: [
        {
          filename: \Invoice_\.pdf\,
          content: Buffer.from(pdfData.replace(/^data:application\\/pdf;base64,/, ""), 'base64'),
          contentType: 'application/pdf',
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Invoice sent successfully" });
  } catch (error: any) {
    console.error("Error sending invoice email:", error);
    return NextResponse.json({ error: error.message || "Failed to send invoice" }, { status: 500 });
  }
}
'''
with open('src/app/api/send-invoice/route.ts', 'w') as f:
    f.write(content)