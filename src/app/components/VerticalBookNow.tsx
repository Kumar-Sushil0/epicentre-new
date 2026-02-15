"use client";

import Link from "next/link";

export default function VerticalBookNow() {
  return (
    <Link
      href="/bookings"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gold-600 hover:bg-gold-500 text-earth-950 py-2 px-5 rounded-bl-lg rounded-tl-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
      style={{ 
        writingMode: 'vertical-rl',
        textOrientation: 'mixed'
      }}
    >
      <span 
        className="text-xs font-semibold tracking-wider uppercase"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Book Now
      </span>
    </Link>
  );
}
