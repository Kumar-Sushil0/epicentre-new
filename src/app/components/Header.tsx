"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Global state to persist menu across page changes
let globalMenuState = false;
const menuStateListeners: ((state: boolean) => void)[] = [];

const setGlobalMenuState = (state: boolean) => {
  globalMenuState = state;
  menuStateListeners.forEach(listener => listener(state));
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(globalMenuState);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync with global menu state
  useEffect(() => {
    const listener = (state: boolean) => setIsMenuOpen(state);
    menuStateListeners.push(listener);

    return () => {
      const index = menuStateListeners.indexOf(listener);
      if (index > -1) {
        menuStateListeners.splice(index, 1);
      }
    };
  }, []);

  // Update global state when local state changes
  useEffect(() => {
    setGlobalMenuState(isMenuOpen);
  }, [isMenuOpen]);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0f0b08] backdrop-blur-sm border-b border-earth-800/50' : 'bg-transparent'}`}>
        <div className="w-full px-16 py-8 h-[30px] flex items-center justify-between relative">

          {/* LEFT: Logo */}
          <Link href="/" className="h-[56px] w-40 flex items-center justify-center z-10">
            <Image
              src="/Untitled.png"
              alt="EPiCentre Logo"
              width={200}
              height={75}
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Hamburger Button */}
          <div className="hamburger-wrapper z-50 relative lg:hidden">
            <label className="hamburger-label" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg viewBox="0 0 32 32" className={`hamburger-svg ${isMenuOpen ? 'checked' : ''}`}>
                <path d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" className="line line-top-bottom" />
                <path d="M7 16 27 16" className="line" />
              </svg>
            </label>
          </div>

          {/* RIGHT: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link 
                href="/venue" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/venue") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                Estate
              </Link>
              <Link 
                href="/test" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/test") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
               Experiences
              </Link>
              <Link 
                href="/stories" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/stories") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                Stories
              </Link>
              <Link 
                href="/events" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/events") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                Events
              </Link>
              <Link 
                href="/about-us" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/about-us") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                About
              </Link>
              <Link 
                href="/blogs" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/blogs") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                Blogs
              </Link>
              <Link 
                href="/faq" 
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive("/faq") ? "text-white" : "text-gold-500 hover:text-[#e7dfd3]"
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>
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
              href="/venue"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/venue") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              Venue
            </Link>
            <Link
              href="/test"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/test") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              Services
            </Link>
            <Link
              href="/stories"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/stories") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              Stories
            </Link>
            <Link
              href="/events"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/events") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              Events
            </Link>
            <Link
              href="/about-us"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/about-us") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              About
            </Link>
            <Link
              href="/blogs"
              className={`block px-4 py-3 mb-1 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/blogs") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
                }`}
            >
              Blogs
            </Link>
            <Link
              href="/faq"
              className={`block px-4 py-3 text-base hover:bg-gold-500/10 rounded-lg transition-all ${isActive("/faq") ? "text-white bg-gold-500/20" : "text-[#e7dfd3] hover:text-gold-500"
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
