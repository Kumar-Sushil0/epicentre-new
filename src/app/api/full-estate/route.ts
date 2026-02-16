import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailUser = "yodd@lifeidesign.games";
const emailPass = "ybab ykuo rjfy ttah";
const recipientEmail = "hello@thesilent.club";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      purpose, 
      concept, 
      alignment, 
      amplifiedSound, 
      participants, 
      preferredDates,
      confirmed,
      name,
      phone,
      email,
      organization
    } = body;

    // Validate required fields
    if (!purpose || !concept || !alignment || !participants || !preferredDates || !name || !phone || !email) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!confirmed) {
      return NextResponse.json(
        { error: "Please confirm your event aligns with low-noise, high-attention conditions" },
        { status: 400 }
      );
    }

    // Check if email is configured
    if (!emailUser || !emailPass) {
      console.warn("Email not configured. Full estate form data:", body);
      return NextResponse.json(
        { message: "Full estate request submitted successfully" },
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

    // Email content
    const mailOptions = {
      from: `"The Silent Club Full Estate Request" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Full Estate Request: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: #d4af37; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">The Silent Club</h1>
            <p style="margin: 5px 0 0 0; color: #cccccc;">Full Estate Request</p>
          </div>
          
          <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #1a1a1a; margin-top: 0;">New Full Estate Booking Request</h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="color: #1a1a1a; margin-top: 0;">Event Details</h3>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Purpose of Gathering:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${purpose}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Core Concept:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${concept}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Why The Silent Club:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${alignment}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Amplified Sound/Branding/Media:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${amplifiedSound}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Expected Participants:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">${participants}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Preferred Dates:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${preferredDates}</p>
              </div>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="color: #1a1a1a; margin-top: 0;">Contact Information</h3>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Name:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">${name}</p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Phone:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">
                  <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                </p>
              </div>
              
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Email:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              ${organization ? `
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Organization:</strong></p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">${organization}</p>
              </div>
              ` : ''}
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #d4af37; border-radius: 5px;">
              <p style="margin: 0; color: #1a1a1a; font-weight: bold;">✓ Confirmed: Event will operate within low-noise, high-attention conditions</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">This email was sent from The Silent Club full estate request form</p>
            <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
Full Estate Request - The Silent Club

EVENT DETAILS
--------------
Purpose of Gathering:
${purpose}

Core Concept:
${concept}

Why The Silent Club:
${alignment}

Amplified Sound/Branding/Media:
${amplifiedSound}

Expected Participants: ${participants}

Preferred Dates:
${preferredDates}

CONTACT INFORMATION
-------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
${organization ? `Organization: ${organization}` : ''}

CONFIRMATION
------------
✓ Event will operate within low-noise, high-attention conditions

---
Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Full estate request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing full estate request:", error);
    return NextResponse.json(
      { error: "Failed to submit request" },
      { status: 500 }
    );
  }
}
