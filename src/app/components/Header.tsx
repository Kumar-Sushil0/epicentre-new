"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
                  <Link href="/rooms" onClick={() => setIsMenuOpen(false)} className="menu-btn" style={isActive("/rooms") ? { color: 'white' } : {}}>
                    Stays
                  </Link>
                  <Link href="/venue" onClick={() => setIsMenuOpen(false)} className="menu-btn" style={isActive("/venue") ? { color: 'white' } : {}}>
                    Venue
                  </Link>
                  <div className="menu-btn experiences-dropdown" style={isExperiencesActive ? { color: 'white' } : {}}>
                    Experiences
                    <div className="experiences-submenu">
                      <Link href="/wellness" onClick={() => setIsMenuOpen(false)} className="submenu-item" style={isActive("/wellness") ? { color: 'white' } : {}}>
                        Wellness
                      </Link>
                      <Link href="/experiences" onClick={() => setIsMenuOpen(false)} className="submenu-item" style={isActive("/experiences") ? { color: 'white' } : {}}>
                        Activities
                      </Link>
                      <Link href="/solitude" onClick={() => setIsMenuOpen(false)} className="submenu-item" style={isActive("/solitude") ? { color: 'white' } : {}}>
                        Solitude
                      </Link>
                      <Link href="/expression" onClick={() => setIsMenuOpen(false)} className="submenu-item" style={isActive("/expression") ? { color: 'white' } : {}}>
                        Expression
                      </Link>
                      <Link href="/residency" onClick={() => setIsMenuOpen(false)} className="submenu-item" style={isActive("/residency") ? { color: 'white' } : {}}>
                        Residency
                      </Link>
                    </div>
                  </div>
                  <Link href="/events" className="menu-btn" onClick={() => setIsMenuOpen(false)} style={isActive("/events") ? { color: 'white' } : {}}>
                    Events
                  </Link>
                  <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="menu-btn" style={isActive("/about-us") ? { color: 'white' } : {}}>
                    About
                  </Link>
                  <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className="menu-btn" style={isActive("/blogs") ? { color: 'white' } : {}}>
                    Blogs
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="menu-btn" style={isActive("/faq") ? { color: 'white' } : {}}>
                    FAQ
                  </Link>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 60" height={60} width={750} overflow="visible" className="menu-outline">
                    <rect strokeWidth={2} fill="transparent" height={60} width={750} y={0} x={0} pathLength={100} className="menu-rect" />
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
          <h3 className="text-sm font-medium text-gold-500 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
          <nav>
            <Link
              href="/rooms"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/rooms") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              Stays
            </Link>
            <Link
              href="/venue"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/venue") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              Venue
            </Link>
            <div className="mb-1">
              <div className={`block px-4 py-3 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isExperiencesActive ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}>
                <h4 className="text-xs font-medium text-gold-500 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Experiences
                </h4>
              </div>
              <div className="ml-4 mt-1">
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
                    className={`block px-3 py-1 text-sm transition-all ${
                      isActive(item.path) ? "text-white" : "text-earth-300 hover:text-gold-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/events") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              Events
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/about-us") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              About
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/blogs") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-base hover:bg-gold-500/10 rounded-lg transition-all ${
                isActive("/faq") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
              }`}
            >
              FAQ
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
