import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, company, interest, message } = data;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const interestLabels: Record<string, string> = {
      "3d-spi": "3D Solder Paste Inspection",
      aoi: "Automated Optical Inspection",
      conformal: "Conformal Coating Inspection",
      video: "Digital Video Inspection",
      metrology: "3D Industrial Metrology",
      jetting: "Jetting Valves",
      service: "Service & Support",
      other: "Other",
    };

    const interestLabel = interestLabels[interest] || interest;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1d4ed8, #1e40af); padding: 32px 40px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .header p { color: #bfdbfe; margin: 6px 0 0; font-size: 14px; }
    .body { padding: 32px 40px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; }
    .field:last-of-type { border-bottom: none; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111827; }
    .message-box { background: #f9fafb; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 0 4px 4px 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f9fafb; padding: 20px 40px; border-top: 1px solid #e5e7eb; }
    .footer p { margin: 0; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>solderpasteinspection.com — ASC International</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${firstName} ${lastName}</div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
      ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ""}
      <div class="field">
        <div class="label">Interested In</div>
        <div class="value">${interestLabel}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
    </div>
    <div class="footer">
      <p>Reply directly to this email to respond to ${firstName} at ${email}</p>
    </div>
  </div>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"ASC International Website" <${smtpUser}>`,
      to: "info@ascinternational.com",
      replyTo: email,
      subject: `Website Inquiry: ${interestLabel} — ${firstName} ${lastName} at ${company}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
