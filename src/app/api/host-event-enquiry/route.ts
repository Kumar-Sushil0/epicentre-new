import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, vision } = body;

    if (!name || !email || !vision) {
      return NextResponse.json(
        { error: "Name, email, and event vision are required" },
        { status: 400 }
      );
    }

    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
    const response = await fetch(`${apiBase}/host-event/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source: "thesilentclub-hostevent-form",
      }),
      cache: "no-store",
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: payload?.error || "Failed to submit host event enquiry" },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json(
      { message: payload?.message || "Host event enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing host event enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit host event enquiry" },
      { status: 500 }
    );
  }
}
