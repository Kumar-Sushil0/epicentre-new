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

    const otp = generateOTP();
    // Here you would typically save the OTP to your database, associated with the user's email.
    // For this example, we'll just log it.
    console.log(`Generated OTP for ${email}: ${otp}`);

    await sendOTPEmail(
      email,
      otp,
      "Your EPiCentre Sign Up OTP",
      "Your OTP for signing up is:"
    );

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
