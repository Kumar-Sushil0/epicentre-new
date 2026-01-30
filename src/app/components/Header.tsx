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
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
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
        <div className="w-full px-4 py-8 h-[30px] flex items-center justify-between">

          {/* LEFT: Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-colors"
            aria-label="Open Menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

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
            className="hidden md:inline-flex items-center justify-center bg-transparent  text-gold-500 hover:bg-gold-500 hover:text-earth-950 font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all"
          >
            Book Now
          </Link>
          {/* Mobile Booking Icon (if needed for small screens instead of full button) */}
          <Link
            href="/bookings"
            className="md:hidden flex items-center justify-center w-10 h-10 text-gold-500 border border-gold-500 rounded-full"
          >
            <span className="material-symbols-outlined text-xl">calendar_month</span>
          </Link>
        </div>
      </header>

      {/* OVERLAY & SIDEBAR */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 bg-earth-950 border-r border-earth-800 z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-earth-800/50">
          <span className="text-earth-300 font-serif text-lg italic tracking-wider">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gold-500 hover:text-red-400 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
          <Link href="/" className={`block text-2xl font-serif font-light ${isActive("/") ? "text-gold-500 italic" : "text-earth-100 hover:text-gold-400"}`}>
            Home
          </Link>
          <Link href="/about-us" className={`block text-2xl font-serif font-light ${isActive("/about-us") ? "text-gold-500 italic" : "text-earth-100 hover:text-gold-400"}`}>
            About Us
          </Link>
          <button onClick={openCalendar} className="block text-left text-2xl font-serif font-light text-earth-100 hover:text-gold-400 w-full">
            Events
          </button>

          <Link href="/rooms" className={`block text-2xl font-serif font-light ${isActive("/rooms") ? "text-gold-500 italic" : "text-earth-100 hover:text-gold-400"}`}>
            Stays
          </Link>

          <Link href="/venue" className={`block text-2xl font-serif font-light ${isActive("/venue") ? "text-gold-500 italic" : "text-earth-100 hover:text-gold-400"}`}>
            Venue
          </Link>

          {/* Collapsible Experiences */}
          <div className="border-t border-earth-800/50 pt-6 mt-4">
            <button
              onClick={() => setIsExperiencesOpen(!isExperiencesOpen)}
              className={`w-full flex items-center justify-between text-2xl font-serif font-light mb-4 ${isExperiencesActive ? "text-gold-500" : "text-earth-100"}`}
            >
              Experiences
              <span className={`material-symbols-outlined transition-transform duration-300 ${isExperiencesOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>

            <div className={`space-y-4 pl-4 border-l border-earth-800 transition-all duration-300 overflow-hidden ${isExperiencesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <Link href="/wellness" className={`block text-lg font-body ${isActive("/wellness") ? "text-gold-500" : "text-earth-300 hover:text-earth-100"}`}>Wellness</Link>
              <Link href="/experiences" className={`block text-lg font-body ${isActive("/experiences") ? "text-gold-500" : "text-earth-300 hover:text-earth-100"}`}>Activities</Link>
              <Link href="/solitude" className={`block text-lg font-body ${isActive("/solitude") ? "text-gold-500" : "text-earth-300 hover:text-earth-100"}`}>Solitude</Link>
              <Link href="/expression" className={`block text-lg font-body ${isActive("/expression") ? "text-gold-500" : "text-earth-300 hover:text-earth-100"}`}>Expression</Link>
              <Link href="/residency" className={`block text-lg font-body ${isActive("/residency") ? "text-gold-500" : "text-earth-300 hover:text-earth-100"}`}>Residency</Link>
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-earth-800 bg-earth-900/50">
          <Link href="/bookings" className="block w-full text-center bg-gold-500 text-earth-950 font-bold py-3 rounded-lg hover:bg-gold-400 uppercase tracking-wider">
            Book Your Stay
          </Link>
        </div>
      </aside>
    </>
  );
}
