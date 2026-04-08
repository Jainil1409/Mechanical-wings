/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const maxDuration = 30; // 30 seconds to allow SMTP to finish

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

    const mailOptionsCustomer = {
      from: `"Mechanical Wings" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Invoice for your AC Services - Mechanical Wings (#${paymentId})`,
      text: `Hello ${customerName},\n\nThank you for choosing Mechanical Wings! Your payment has been successfully processed.\n\nPlease find your officially generated invoice attached as a PDF document.\n\nKeep this invoice for your records. If you have any questions, feel free to contact us at +91 78019 29198.\n\nBest regards,\nThe Mechanical Wings Team`,
      attachments: [
        {
          filename: `Invoice_${paymentId}.pdf`,
          content: Buffer.from(pdfData.split(',')[1] || pdfData, 'base64'),
          contentType: 'application/pdf',
        }
      ]
    };

    const mailOptionsAdmin = {
      from: `"Mechanical Wings Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Booking Received! - Payment #${paymentId}`,
      text: `Hello Admin,\n\nA new booking has been received!\n\nCustomer: ${customerName}\nEmail: ${customerEmail}\nPayment ID: ${paymentId}\n\nPlease find the generated invoice attached containing all the booked services and the total amount.\n\nBest regards,\nMechanical Wings Auto-Mailer`,
      attachments: [
        {
          filename: `Invoice_${paymentId}.pdf`,
          content: Buffer.from(pdfData.split(',')[1] || pdfData, 'base64'),
          contentType: 'application/pdf',
        }
      ]
    };

    // Send both emails
    await transporter.sendMail(mailOptionsCustomer);
    await transporter.sendMail(mailOptionsAdmin);

    return NextResponse.json({ success: true, message: "Invoice sent successfully" });
  } catch (error: any) {
    console.error("Error sending invoice email:", error);
    return NextResponse.json({ error: error.message || "Failed to send invoice" }, { status: 500 });
  }
}
