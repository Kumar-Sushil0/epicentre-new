"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEventCalendar } from "../contexts/EventCalendarContext";

// Navigation images mapping
const navImages: Record<string, string> = {
  "/": "/banner.png",
  "/about-us": "/dd.jpeg",
  "/rooms": "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc",
  "/venue": "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8TvSF_6qQYT0sf1Z3QeDGPpedh3fFfoLu0xYEOVs4B-3yAdulyHspPVbw5A_jiNj8YyH-fB6Zrd1At6C_Dpr10Dp0zkPKpZNISmKy6obJPax1cVlyk35I9Je4qtWZQN9XhH-VmJMZXXGgG8x64v4oy9B3vkjNJhb-RZNqem3OaDqxOhIf3z7_TF48J-Km9ipy9oDRORSuxs3foTCuPvAU45bY8Co7UAqKqkWMEFchPTcX2tPhut34xCRmtQ0oyIjX5NCUmxRAaI0",
  "/blogs": "/person3.jpg",
  "/faq": "/person4.jpg",
  "/wellness": "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
  "/experiences": "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
  "/solitude": "https://lh3.googleusercontent.com/aida-public/AB6AXuA66C5-27IzMig79x6lBr8ASU7hB4sRgfqstGXIOge10DYYCaZZqMYVKBGNXicWrl63SDlJmI3KBFlPkI49dbmujXej7YmxpX22Bva1Qh06b8JwOHykLDYMv5QCoop-QznsDT4Qx8ETJYUSeUwwp9qu9Dbd1eLJhuIs9eqLaxLtAZlwrLtkC0t55ZWgHILOGZzRJ4yko3UQuwIe1fshdVQQsw58pM0Tni9l-HxFU_tW4JQffp-JPUF4aRp2-eH-hn1fdpw3tMz613lW",
  "/expression": "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
  "/residency": "https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz",
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [displayedImage, setDisplayedImage] = useState<string | null>(null);
  const [imageOpacity, setImageOpacity] = useState(1);
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
    setHoveredImage(null);
  }, [pathname]);

  // Set initial image to current page when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      setDisplayedImage(pathname);
      setImageOpacity(1);
    }
  }, [isMenuOpen, pathname]);

  // Handle image transitions with fade effect
  useEffect(() => {
    const targetImage = hoveredImage || pathname;
    
    if (targetImage !== displayedImage) {
      // Fade out
      setImageOpacity(0);
      
      // Wait for fade out, then change image and fade in
      const timer = setTimeout(() => {
        setDisplayedImage(targetImage);
        setImageOpacity(1);
      }, 200); // 200ms fade out duration
      
      return () => clearTimeout(timer);
    }
  }, [hoveredImage, pathname, displayedImage]);

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#111004]/90 backdrop-blur-sm border-b border-earth-800/50' : 'bg-transparent'}`}>
        <div className="w-full px-16 py-8 h-[30px] flex items-center justify-between relative">

          {/* LEFT: Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-10 h-10 flex items-center justify-start transition-colors z-50 relative cursor-pointer ${isMenuOpen ? "text-gold-500" : "text-gold-500 hover:text-gold-400"}`}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
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
            className="hidden md:inline-flex items-center justify-center bg-transparent text-gold-500 hover:text-gold-400 font-bold py-2 rounded-full text-sm uppercase tracking-wider transition-colors"
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

      {/* SIDEBAR OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside
        className={`fixed top-0 left-0 h-full w-[50vw] bg-[#0a0a05]/95 backdrop-blur-xl border-r border-earth-800/60 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-8 py-8 border-b border-earth-800/50">
            <h2 className="text-xl font-bold text-gold-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Close Menu"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-8 py-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredImage("/about-us")}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive("/about-us")
                      ? "bg-gold-500/10 text-gold-500 border-l-4 border-gold-500"
                      : "text-earth-200 hover:text-gold-500 hover:bg-earth-900/30"
                  }`}
                >
                  About
                </Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    openCalendar();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-earth-200 hover:text-gold-500 hover:bg-earth-900/30 transition-all"
                >
                  Events
                </button>
              </li>

              <li>
                <Link
                  href="/rooms"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredImage("/rooms")}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive("/rooms")
                      ? "bg-gold-500/10 text-gold-500 border-l-4 border-gold-500"
                      : "text-earth-200 hover:text-gold-500 hover:bg-earth-900/30"
                  }`}
                >
                  Stays
                </Link>
              </li>

              <li>
                <Link
                  href="/venue"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredImage("/venue")}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive("/venue")
                      ? "bg-gold-500/10 text-gold-500 border-l-4 border-gold-500"
                      : "text-earth-200 hover:text-gold-500 hover:bg-earth-900/30"
                  }`}
                >
                  Venue
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredImage("/blogs")}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive("/blogs")
                      ? "bg-gold-500/10 text-gold-500 border-l-4 border-gold-500"
                      : "text-earth-200 hover:text-gold-500 hover:bg-earth-900/30"
                  }`}
                >
                  Blogs
                </Link>
              </li>

              {/* Experiences Section - 3 Column Grid */}
              <li>
                <div className="px-4 py-3">
                  <h3 className="text-base font-medium text-gold-500 mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                     Experiences :-
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
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
                        onMouseEnter={() => setHoveredImage(item.path)}
                        onMouseLeave={() => setHoveredImage(null)}
                        className={`block px-2 py-1 text-sm transition-all ${
                          isActive(item.path)
                            ? "text-gold-500"
                            : "text-earth-300 hover:text-gold-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* FAQ Section */}
              <li>
                <Link
                  href="/faq"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredImage("/faq")}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive("/faq")
                      ? "bg-gold-500/10 text-gold-500 border-l-4 border-gold-500"
                      : "text-earth-200 hover:text-gold-500 hover:bg-earth-900/30"
                  }`}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* RIGHT SIDEBAR - IMAGE PREVIEW */}
      <aside
        className={`fixed top-0 right-0 h-full w-[50vw] bg-[#0a0a05]/95 backdrop-blur-xl border-l border-earth-800/60 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full items-center justify-center p-8">
          {displayedImage && navImages[displayedImage] ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={navImages[displayedImage]}
                  alt="Navigation preview"
                  fill
                  className="object-cover"
                  style={{
                    opacity: imageOpacity,
                    transition: 'opacity 200ms ease-in-out'
                  }}
                  sizes="50vw"
                  priority
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  style={{
                    opacity: imageOpacity,
                    transition: 'opacity 200ms ease-in-out'
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-earth-900/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-gold-500/50">image</span>
              </div>
              <p className="text-earth-400 text-lg" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Hover over menu items to preview
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
