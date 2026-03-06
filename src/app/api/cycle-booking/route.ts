import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      cycleLabel,
      accommodationType,
      priceLabel,
      checkIn,
      checkOut,
      name,
      email,
      phone,
      notes,
      questions,
      answers,
    } = body;

    if (!cycleLabel || !accommodationType || !checkIn || !checkOut || !name || !email) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Check for overlapping bookings for same cycle + accommodation type
    const overlapping = await db.collection("bookings").findOne({
      cycleLabel,
      accommodationType,
      status: { $ne: "cancelled" },
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    });

    if (overlapping) {
      return NextResponse.json(
        { error: "These dates are already booked for this accommodation type." },
        { status: 409 }
      );
    }

    await db.collection("bookings").insertOne({
      cycleLabel,
      accommodationType,
      priceLabel,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      name,
      email,
      phone,
      notes,
      questions,
      answers,
      status: "pending",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error creating booking", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailUser = "yodd@lifeidesign.games";
const emailPass = "ybab ykuo rjfy ttah";
const recipientEmail = "hello@thesilent.club";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      cycleLabel, 
      accommodationType, 
      priceLabel, 
      checkIn, 
      checkOut,
      name, 
      email, 
      phone, 
      notes,
      questions,
      answers 
    } = body;

    // Validate required fields
    if (!cycleLabel || !accommodationType || !name || !email || !phone) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Check if email is configured
    if (!emailUser || !emailPass) {
      console.warn("Email not configured. Cycle booking data:", body);
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

    // Format dates
    const formatDate = (dateString: string | null) => {
      if (!dateString) return "Not selected";
      const date = new Date(dateString);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    // Build responses section if available
    let responsesHTML = '';
    let responsesText = '';
    
    if (answers && answers.length > 0 && questions && questions.length > 0) {
      const validResponses = answers
        .map((answer: string, idx: number) => ({ answer, question: questions[idx], idx }))
        .filter((item: { answer: string }) => item.answer && item.answer.trim() !== '');
      
      if (validResponses.length > 0) {
        responsesHTML = `
          <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #d4af37; border-radius: 5px;">
            <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 16px;">Pre-Booking Responses</h3>
            ${validResponses.map((item: { question: string; answer: string; idx: number }) => `
              <div style="margin: 15px 0;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: bold;">Q${item.idx + 1}: ${item.question}</p>
                <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 14px; line-height: 1.6;">${item.answer}</p>
              </div>
            `).join('')}
          </div>
        `;
        
        responsesText = `\n\nPre-Booking Responses:\n${validResponses.map((item: { question: string; answer: string; idx: number }) => 
          `Q${item.idx + 1}: ${item.question}\nA: ${item.answer}`
        ).join('\n\n')}`;
      }
    }

    // Email content
    const mailOptions = {
      from: `"The Silent Club Cycle Booking" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Cycle Booking Request: ${cycleLabel} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: #d4af37; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">The Silent Club</h1>
            <p style="margin: 5px 0 0 0; color: #cccccc;">Silent Cycle Booking Request</p>
          </div>
          
          <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #1a1a1a; margin-top: 0;">New Cycle Booking Request</h2>
            
            <div style="margin: 20px 0; padding: 20px; background-color: #d4af37; border-radius: 5px;">
              <p style="margin: 0; color: #1a1a1a; font-size: 20px; font-weight: bold;">${cycleLabel}</p>
              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px;">${accommodationType === "dorm" ? "Shared Dorm" : "Private Room"}</p>
              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 18px; font-weight: bold;">${priceLabel}</p>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="margin: 0; color: #666; font-size: 13px;"><strong>Check-in:</strong></p>
                  <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 15px;">${formatDate(checkIn)}</p>
                </div>
                <div>
                  <p style="margin: 0; color: #666; font-size: 13px;"><strong>Check-out:</strong></p>
                  <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 15px;">${formatDate(checkOut)}</p>
                </div>
              </div>
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
            
            ${notes ? `
            <div style="margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Additional Notes:</strong></p>
              <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; color: #1a1a1a; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${notes}</div>
            </div>
            ` : ''}

            ${responsesHTML}
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">This email was sent from The Silent Club cycle booking form</p>
            <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
Silent Cycle Booking Request - The Silent Club

BOOKING DETAILS
Cycle Type: ${cycleLabel}
Accommodation: ${accommodationType === "dorm" ? "Shared Dorm" : "Private Room"}
Price: ${priceLabel}

DATES
Check-in: ${formatDate(checkIn)}
Check-out: ${formatDate(checkOut)}

CONTACT INFORMATION
Name: ${name}
Email: ${email}
Phone: ${phone}

${notes ? `ADDITIONAL NOTES:\n${notes}\n` : ''}
${responsesText}

---
Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Cycle booking request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing cycle booking request:", error);
    return NextResponse.json(
      { error: "Failed to submit cycle booking request" },
      { status: 500 }
    );
  }
}
