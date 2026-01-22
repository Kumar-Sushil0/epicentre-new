"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-950/90 backdrop-blur-md border-b border-earth-700 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="EPiCentre Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/wellness">
            Wellness
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/expression">
            Expression
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/rooms">
            Rooms
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/solitude">
            Solitude
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/residency">
            Residency
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/experiences">
            Experiences
          </Link>
          <Link className="text-sm font-medium text-earth-300 hover:text-gold-400 transition-colors" href="/venue">
            Venue
          </Link>
        </nav>
        <Link
          href="/bookings"
          className="hidden md:flex bg-gold-500 hover:bg-gold-400 text-earth-950 text-sm font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
        >
          Book Now
        </Link>
        <button className="md:hidden text-earth-100 hover:text-gold-400 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
