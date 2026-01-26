"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEventCalendar } from "../contexts/EventCalendarContext";

export default function Header() {
  const pathname = usePathname();
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const { openCalendar } = useEventCalendar();

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
            src="/Untitled.png"
            alt="EPiCentre Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <button
            onClick={openCalendar}
            className="text-sm font-medium transition-colors text-earth-300 hover:text-gold-400"
          >
            Event Calendar
          </button>
          <Link
            className={`text-sm font-medium transition-colors ${isActive("/rooms") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/rooms"
          >
            Stays
          </Link>

          {/* Activities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsActivitiesOpen(true)}
            onMouseLeave={() => setIsActivitiesOpen(false)}
          >
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive("/wellness") || isActive("/experiences") || isActive("/solitude") || isActive("/expression") || isActive("/residency")
                ? "text-gold-500 font-bold"
                : "text-earth-300 hover:text-gold-400"
                }`}
            >
              Activities
              <span className={`material-symbols-outlined text-xs transition-transform ${isActivitiesOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-earth-900/95 backdrop-blur-md border border-earth-700 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isActivitiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
            >
              <Link
                href="/wellness"
                className={`block px-4 py-3 text-sm transition-colors ${isActive("/wellness")
                  ? "text-gold-500 font-bold bg-earth-800/50"
                  : "text-earth-300 hover:text-gold-400 hover:bg-earth-800/30"
                  }`}
              >
                Wellness
              </Link>
              <Link
                href="/experiences"
                className={`block px-4 py-3 text-sm transition-colors ${isActive("/experiences")
                  ? "text-gold-500 font-bold bg-earth-800/50"
                  : "text-earth-300 hover:text-gold-400 hover:bg-earth-800/30"
                  }`}
              >
                Experiences
              </Link>
              <Link
                href="/solitude"
                className={`block px-4 py-3 text-sm transition-colors ${isActive("/solitude")
                  ? "text-gold-500 font-bold bg-earth-800/50"
                  : "text-earth-300 hover:text-gold-400 hover:bg-earth-800/30"
                  }`}
              >
                Solitude
              </Link>
              <Link
                href="/expression"
                className={`block px-4 py-3 text-sm transition-colors ${isActive("/expression")
                  ? "text-gold-500 font-bold bg-earth-800/50"
                  : "text-earth-300 hover:text-gold-400 hover:bg-earth-800/30"
                  }`}
              >
                Expression
              </Link>
              <Link
                href="/residency"
                className={`block px-4 py-3 text-sm transition-colors ${isActive("/residency")
                  ? "text-gold-500 font-bold bg-earth-800/50"
                  : "text-earth-300 hover:text-gold-400 hover:bg-earth-800/30"
                  }`}
              >
                Residency
              </Link>
            </div>
          </div>

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

          <Link
            className={`text-sm font-medium transition-colors ${isActive("/about-us") ? "text-gold-500 font-bold" : "text-earth-300 hover:text-gold-400"
              }`}
            href="/about-us"
          >
            About Us
          </Link>
        </nav>
        <button className="md:hidden text-earth-100 hover:text-gold-400 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
