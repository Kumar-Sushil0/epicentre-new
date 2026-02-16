import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailUser = "yodd@lifeidesign.games";
const emailPass = "ybab ykuo rjfy ttah";
const recipientEmail = "hello@thesilent.club";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingType, name, email, phone, message } = body;

    // Validate required fields
    if (!bookingType || !name || !email || !phone) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Check if email is configured
    if (!emailUser || !emailPass) {
      console.warn("Email not configured. Booking request data:", body);
      return NextResponse.json(
        { message: "Booking request submitted successfully" },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Map booking type to readable name
    const bookingTypeNames: { [key: string]: string } = {
      cycle: "Cycle Booking",
      membership: "Membership",
      "full-estate": "Full Estate Booking"
    };

    const bookingTypeName = bookingTypeNames[bookingType] || bookingType;

    // Email content
    const mailOptions = {
      from: `"The Silent Club Booking Request" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Booking Request: ${bookingTypeName} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: #d4af37; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">The Silent Club</h1>
            <p style="margin: 5px 0 0 0; color: #cccccc;">Booking Request</p>
          </div>
          
          <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #1a1a1a; margin-top: 0;">New Booking Request</h2>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #d4af37; border-radius: 5px;">
              <p style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: bold;">${bookingTypeName}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Name:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Email:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">
                <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Phone:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">
                <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
              </p>
            </div>
            
            ${message ? `
            <div style="margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Message:</strong></p>
              <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; color: #1a1a1a; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            ` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">This email was sent from The Silent Club booking request form</p>
            <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
Booking Request - The Silent Club

Booking Type: ${bookingTypeName}
Name: ${name}
Email: ${email}
Phone: ${phone}

${message ? `Message:\n${message}` : ''}

---
Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Booking request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Failed to submit booking request" },
      { status: 500 }
    );
  }
}
