"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-950/90 backdrop-blur-md border-b border-earth-700 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center -ml-6 -my-4 relative h-[72px] w-52">
          <Image
            src="/untitled.png"
            alt="EPiCentre Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/about-us") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/rooms") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/rooms"
          >
            Rooms
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/wellness") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/wellness"
          >
            Wellness
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/experiences") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/experiences"
          >
            Experiences
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/solitude") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/solitude"
          >
            Solitude
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/expression") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/expression"
          >
            Expression
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/residency") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/residency"
          >
            Residency
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/venue") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/venue"
          >
            Venue
          </Link>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/stories") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/stories"
          >
            Stories
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
