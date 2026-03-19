/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      customerName, 
      customerEmail, 
      customerPhone, 
      services, 
      totalAmount, 
      paymentId, 
      date, 
      address = "N/A"
    } = body;

    if (!customerEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or configured via env
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const servicesHtml = services.map((s: any) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">
          <strong>${s.name}</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">
          ₹${s.price}
        </td>
      </tr>
    `).join('');

    const mailOptions = {
      from: `"Mechanical Wings" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Invoice for your AC Services - Mechanical Wings (#${paymentId})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; }
            .container { max-w-[600px]; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px;}
            .header { background-color: #1e3a5f; color: #ffffff; padding: 30px; text-align: center; }
            .title { font-size: 24px; font-weight: bold; margin: 0; color: #f59e0b; }
            .subtitle { font-size: 16px; margin-top: 5px; opacity: 0.9; }
            .content { padding: 30px; color: #333333; }
            .details-box { background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 25px; }
            .details-text { margin: 5px 0; font-size: 14px; }
            .details-text strong { color: #1e3a5f; }
            .table { w-[100%]; width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .th { background-color: #1e3a5f; color: #ffffff; padding: 12px; text-align: left; font-size: 14px; text-transform: uppercase; }
            .th.right { text-align: right; }
            .total-row { font-size: 18px; font-weight: bold; color: #1e3a5f; }
            .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="title">Mechanical Wings</h1>
              <p class="subtitle">Payment Successful - Official Invoice</p>
            </div>
            
            <div class="content">
              <p style="font-size: 16px;">Hello <strong>${customerName}</strong>,</p>
              <p>Thank you for choosing Mechanical Wings! Your payment has been successfully processed. Below are the details of your service package.</p>
              
              <div class="details-box">
                <p class="details-text"><strong>Date:</strong> ${date}</p>
                <p class="details-text"><strong>Payment ID:</strong> ${paymentId}</p>
                <p class="details-text"><strong>Phone:</strong> ${customerPhone}</p>
                ${address && address !== "N/A" ? `<p class="details-text"><strong>Address:</strong> ${address}</p>` : ''}
              </div>

              <table class="table">
                <thead>
                  <tr>
                    <th class="th">Service Description</th>
                    <th class="th right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  ${servicesHtml}
                  <tr>
                    <td style="padding: 15px 12px; text-align: right; border-top: 2px solid #1e3a5f;"><strong>Total Amount Paid:</strong></td>
                    <td style="padding: 15px 12px; text-align: right; border-top: 2px solid #1e3a5f;" class="total-row">₹${totalAmount}</td>
                  </tr>
                </tbody>
              </table>
              
              <p>Keep this invoice for your records. If you have any questions, feel free to reply to this email or contact us at +91 78019 29198.</p>
              <p style="margin-top: 30px;">Best regards,<br><strong>The Mechanical Wings Team</strong></p>
            </div>
            
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Mechanical Wings. All rights reserved.</p>
              <p>Vasant Vihar, New Delhi | mechanicalwings3008@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Invoice sent successfully" });
  } catch (error: any) {
    console.error("Error sending invoice email:", error);
    return NextResponse.json({ error: error.message || "Failed to send invoice" }, { status: 500 });
  }
}
