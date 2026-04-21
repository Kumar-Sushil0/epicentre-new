import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      location,
      availability,
      duration,
      skills,
      experience,
      motivation,
      cvFileName,
    } = body;

    if (!name || !email || !phone || !location || !availability || !duration || !skills || !motivation) {
      return NextResponse.json(
        { error: "Missing required volunteer application fields" },
        { status: 400 }
      );
    }

    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
    const response = await fetch(`${apiBase}/volunteer/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        availability,
        duration,
        skills,
        experience,
        motivation,
        cvFileName: cvFileName || null,
        source: "epicentre-contact-volunteer",
      }),
      cache: "no-store",
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: payload?.error || "Failed to submit volunteer application" },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json(
      { message: payload?.message || "Volunteer application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing volunteer form:", error);
    return NextResponse.json(
      { error: "Failed to submit volunteer application" },
      { status: 500 }
    );
  }
}
