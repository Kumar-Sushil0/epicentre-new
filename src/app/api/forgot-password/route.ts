import { NextRequest, NextResponse } from "next/server";
import { sendOTPEmail } from "@/utils/nodemailer";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Here you would typically validate that the email exists in your user database.
    // For this example, we'll skip that.

    const otp = generateOTP();
    // Here you would typically save the OTP to your database, associated with the user's email and an expiry time.
    // For this example, we'll just log it.
    console.log(`Generated OTP for password reset for ${email}: ${otp}`);

    await sendOTPEmail(
      email,
      otp,
      "Your EPiCentre Password Reset OTP",
      "Your OTP for resetting your password is:"
    );

    return NextResponse.json({ message: "Password reset OTP sent successfully" });
  } catch (error) {
    console.error("Error sending password reset OTP:", error);
    return NextResponse.json(
      { error: "Failed to send password reset OTP" },
      { status: 500 }
    );
  }
}
