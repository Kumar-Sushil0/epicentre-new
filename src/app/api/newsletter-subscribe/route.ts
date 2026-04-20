import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/utils/nodemailer";

const fromEmail = process.env.LIDEMAIL;
const ddRecipient = process.env.NEWSLETTER_DD_EMAIL || "hello@thesilent.club";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    if (!transporter || !fromEmail) {
      console.warn("Newsletter email transporter not configured. Email:", email);
      return NextResponse.json(
        { message: "Subscription captured, but email service is not configured." },
        { status: 200 },
      );
    }

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const subscriberMail = {
      from: `"The Silent Club" <${fromEmail}>`,
      to: email,
      subject: "You are subscribed — The Silent Club",
      text: `You are now subscribed to The Silent Club.

We will share occasional updates on cycles, residencies, and reflections on silence and attention.

No spam. Unsubscribe anytime by replying to this email.

— The Silent Club
Bhigwan, Maharashtra`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background: #0f0b08; color: #e8d5b0; border: 1px solid #2a1f17;">
          <div style="padding: 28px 28px 8px;">
            <div style="font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #8a6e42; margin-bottom: 12px;">The Silent Club</div>
            <h1 style="margin: 0 0 12px; font-weight: 300; font-size: 34px; line-height: 1.1; color: #e8d5b0;">You are subscribed.</h1>
            <p style="margin: 0 0 18px; font-family: Arial, sans-serif; color: #b09070; line-height: 1.7; font-size: 14px;">
              We will share occasional updates on cycles, residencies, and reflections on silence and attention.
            </p>
            <p style="margin: 0 0 20px; font-family: Arial, sans-serif; color: #7a6048; font-size: 12px;">
              No spam. Unsubscribe anytime by replying to this email.
            </p>
          </div>
          <div style="border-top: 1px solid #2a1f17; padding: 14px 28px; font-family: Arial, sans-serif; color: #7a6048; font-size: 12px;">
            The Silent Club · Bhigwan, Maharashtra
          </div>
        </div>
      `,
    };

    const ddMail = {
      from: `"The Silent Club" <${fromEmail}>`,
      to: ddRecipient,
      replyTo: email,
      subject: `Newsletter signup: ${email}`,
      text: `New newsletter subscription received.

Email: ${email}
Submitted: ${submittedAt}
Source: Homepage newsletter popup`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #f8f8f8; border: 1px solid #ddd;">
          <div style="background: #1a120b; color: #c5a065; padding: 18px 22px;">
            <h2 style="margin: 0; font-size: 18px;">New Newsletter Subscription</h2>
          </div>
          <div style="padding: 18px 22px;">
            <p style="margin: 0 0 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 10px;"><strong>Submitted:</strong> ${submittedAt}</p>
            <p style="margin: 0;"><strong>Source:</strong> Homepage newsletter popup</p>
          </div>
        </div>
      `,
    };

    await Promise.all([transporter.sendMail(subscriberMail), transporter.sendMail(ddMail)]);

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }
}

