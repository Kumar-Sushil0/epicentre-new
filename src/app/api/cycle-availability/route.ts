import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cycleLabel = searchParams.get("cycleLabel");
    const accommodationType = searchParams.get("accommodationType");

    if (!cycleLabel || !accommodationType) {
      return NextResponse.json(
        { error: "Missing cycleLabel or accommodationType" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const bookings = await db
      .collection("bookings")
      .find({
        cycleLabel,
        accommodationType,
        status: { $ne: "cancelled" },
      })
      .project({ checkIn: 1, checkOut: 1, _id: 0 })
      .toArray();

    return NextResponse.json({
      bookedRanges: bookings.map((b) => ({
        checkIn: b.checkIn,
        checkOut: b.checkOut,
      })),
    });
  } catch (error) {
    console.error("Error fetching availability", error);
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 }
    );
  }
}

