import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, vision, mediums, audience, previous, when } = body;

    if (!name || !email || !vision) {
      return NextResponse.json(
        { error: "Name, email, and vision are required" },
        { status: 400 }
      );
    }

    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
    const response = await fetch(`${apiBase}/creator/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        vision,
        mediums: Array.isArray(mediums) ? mediums : [],
        audience: audience || "",
        previous: previous || "",
        when: when || "",
        source: "thesilentclub-creator-form",
      }),
      cache: "no-store",
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: payload?.error || "Failed to submit creator inquiry" },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json(
      { message: payload?.message || "Creator inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing creator inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit creator inquiry" },
      { status: 500 }
    );
  }
}
