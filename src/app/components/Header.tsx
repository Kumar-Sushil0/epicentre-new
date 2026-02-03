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



  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const isExperiencesActive = isActive("/wellness") || isActive("/experiences") || isActive("/solitude") || isActive("/expression") || isActive("/residency");

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0f0b08] backdrop-blur-sm border-b border-earth-800/50' : 'bg-transparent'}`}>
        <div className="w-full px-16 py-8 h-[30px] flex items-center justify-between relative">

          {/* LEFT: Animated Hamburger Button */}
          <div className="hamburger-wrapper z-50 relative">
            <label className="hamburger-label" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg viewBox="0 0 32 32" className={`hamburger-svg ${isMenuOpen ? 'checked' : ''}`}>
                <path d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" className="line line-top-bottom" />
                <path d="M7 16 27 16" className="line" />
              </svg>
            </label>

            {/* Desktop Menu - Horizontal bar to the left of hamburger */}
            <div className={`menu-wrapper ${isMenuOpen ? 'visible' : ''}`}>
              <div className="menu-nav">
                <div className="menu-container">
                  <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="menu-btn">
                    About
                  </Link>
                  <button onClick={() => { openCalendar(); setIsMenuOpen(false); }} className="menu-btn">
                    Events
                  </button>
                  <Link href="/rooms" onClick={() => setIsMenuOpen(false)} className="menu-btn">
                    Stays
                  </Link>
                  <Link href="/venue" onClick={() => setIsMenuOpen(false)} className="menu-btn">
                    Venue
                  </Link>
                  <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className="menu-btn">
                    Blogs
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="menu-btn">
                    FAQ
                  </Link>
                  <div className="menu-btn experiences-dropdown">
                    Experiences
                    <div className="experiences-submenu">
                      <Link href="/wellness" onClick={() => setIsMenuOpen(false)} className="submenu-item">
                        Wellness
                      </Link>
                      <Link href="/experiences" onClick={() => setIsMenuOpen(false)} className="submenu-item">
                        Activities
                      </Link>
                      <Link href="/solitude" onClick={() => setIsMenuOpen(false)} className="submenu-item">
                        Solitude
                      </Link>
                      <Link href="/expression" onClick={() => setIsMenuOpen(false)} className="submenu-item">
                        Expression
                      </Link>
                      <Link href="/residency" onClick={() => setIsMenuOpen(false)} className="submenu-item">
                        Residency
                      </Link>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 60" height={60} width={600} overflow="visible" className="menu-outline">
                    <rect strokeWidth={2} fill="transparent" height={60} width={600} y={0} x={0} pathLength={100} className="menu-rect" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 h-[56px] w-40 flex items-center justify-center">
            <Image
              src="/Untitled.png"
              alt="EPiCentre Logo"
              width={200}
              height={75}
              className="object-contain"
              priority
            />
          </Link>

          {/* RIGHT: Booking CTA */}
          <Link
            href="/bookings"
            className="hidden md:inline-flex items-center justify-center bg-transparent text-gold-500 hover:text-[#e7dfd3] font-bold py-2 rounded-full text-sm uppercase tracking-wider transition-colors"
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

      {/* Mobile Menu - Backdrop */}
      {isMenuOpen && (
        <div
          className="mobile-backdrop visible"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Sidebar from right */}
      <aside className={`mobile-sidebar ${isMenuOpen ? 'visible' : ''}`}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-gold-500/20">
          <h3 className="text-sm font-medium text-gold-500 uppercase tracking-wider" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Menu
          </h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <nav className="space-y-1">
            <Link
              href="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              About
            </Link>
            <button
              onClick={() => { openCalendar(); setIsMenuOpen(false); }}
              className="w-full text-left block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              Events
            </button>
            <Link
              href="/rooms"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              Stays
            </Link>
            <Link
              href="/venue"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              Venue
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              Blogs
            </Link>

            <div className="px-4 py-3">
              <h4 className="text-xs font-medium text-gold-500 uppercase tracking-wider mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Experiences
              </h4>
              <div className="space-y-1">
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
                    className="block px-3 py-2 text-sm text-earth-300 hover:text-gold-500 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base text-white hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
