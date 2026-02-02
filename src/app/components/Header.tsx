"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEventCalendar } from "../contexts/EventCalendarContext";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openCalendar } = useEventCalendar();

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const isExperiencesActive = isActive("/wellness") || isActive("/experiences") || isActive("/solitude") || isActive("/expression") || isActive("/residency");

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#111004]/90 backdrop-blur-sm border-b border-earth-800/50' : 'bg-transparent'}`}>
        <div className="w-full px-16 py-8 h-[30px] flex items-center justify-between relative">

          {/* LEFT: Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-10 h-10 flex items-center justify-start transition-colors z-50 relative ${isMenuOpen ? "text-gold-500" : "text-gold-500 hover:text-gold-400"}`}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* POPUP NAVIGATION MENU (Horizontal Row) */}
          {isMenuOpen && (
            <nav className="absolute top-1/2 -translate-y-1/2 left-[70px] bg-[#0a0a05]/90 backdrop-blur-xl border border-earth-800/60 rounded-full px-8 py-2 md:py-3 shadow-2xl z-50 flex items-center gap-6 md:gap-8 transform origin-left animate-in slide-in-from-left-4 fade-in duration-200">

              <Link href="/" onClick={() => setIsMenuOpen(false)} className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isActive("/") && pathname === "/" ? "text-gold-500 font-bold" : "text-earth-200 hover:text-gold-500"}`}>
                Home
              </Link>

              <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isActive("/about-us") ? "text-gold-500 font-bold" : "text-earth-200 hover:text-gold-500"}`}>
                About
              </Link>

              <button onClick={() => { openCalendar(); setIsMenuOpen(false); }} className="text-earth-200 hover:text-gold-500 text-sm md:text-base font-medium transition-colors whitespace-nowrap">
                Events
              </button>

              <Link href="/rooms" onClick={() => setIsMenuOpen(false)} className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isActive("/rooms") ? "text-gold-500 font-bold" : "text-earth-200 hover:text-gold-500"}`}>
                Stays
              </Link>

              <Link href="/venue" onClick={() => setIsMenuOpen(false)} className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isActive("/venue") ? "text-gold-500 font-bold" : "text-earth-200 hover:text-gold-500"}`}>
                Venue
              </Link>

              <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isActive("/blogs") ? "text-gold-500 font-bold" : "text-earth-200 hover:text-gold-500"}`}>
                Blogs
              </Link>

              {/* Experiences Dropdown */}
              <div className="relative group">
                <button className={`flex items-center gap-1 text-sm md:text-base font-medium transition-colors whitespace-nowrap ${isExperiencesActive ? "text-gold-500" : "text-earth-200 group-hover:text-gold-500"}`}>
                  Experiences
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 md:left-0 md:right-auto mt-4 w-48 bg-[#0a0a05]/95 backdrop-blur-xl border border-earth-800/60 rounded-xl p-2 hidden group-hover:block shadow-xl flex flex-col gap-1">
                  {[
                    { name: "Wellness", path: "/wellness" },
                    { name: "Activities", path: "/experiences" },
                    { name: "Solitude", path: "/solitude" },
                    { name: "Expression", path: "/expression" },
                    { name: "Residency", path: "/residency" }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-3 py-2 rounded-lg text-sm block transition-all ${isActive(item.path) ? "bg-earth-900/50 text-gold-500" : "text-earth-300 hover:text-earth-100 hover:bg-earth-900/50"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

            </nav>
          )}

          {/* CENTER: Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 h-[56px] w-32 flex items-center justify-center">
            <Image
              src="/Untitled.png"
              alt="EPiCentre Logo"
              width={160}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* RIGHT: Booking CTA */}
          <Link
            href="/bookings"
            className="hidden md:inline-flex items-center justify-center bg-transparent  text-gold-500 hover:bg-gold-500 hover:text-earth-950 font-bold py-2 rounded-full text-sm uppercase tracking-wider transition-all"
          >
            Book Now
          </Link>
          {/* Mobile Booking Icon */}
          <Link
            href="/bookings"
            className="md:hidden flex items-center justify-center w-10 h-10 text-gold-500 border border-gold-500 rounded-full"
          >
            <span className="material-symbols-outlined text-xl">calendar_month</span>
          </Link>
        </div>
      </header>

      {/* CLICK OUTSIDE OVERLAY (Invisible) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
