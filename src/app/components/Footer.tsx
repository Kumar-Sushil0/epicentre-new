"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-earth-950 text-earth-300 border-t border-earth-800">
      <div className="w-full px-4 md:px-16 pt-12 pb-12">

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-8 md:gap-12 lg:gap-6 mb-8">

          {/* Brand & Address */}
          <div className="lg:col-span-3 space-y-8">
            <div className="-ml-2">
              <div className="relative h-16 w-56">
                <Image
                  src="/the-silent-club-logo.png"
                  alt="The Silent Club Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm mt-2 ml-2"><span className="text-gold-500">Bhigwan, Maharashtra</span></p>
            </div>
            <div className="text-sm text-[#e7dfd3] font-body leading-loose">
              <p>The Silent Club is a registered trademark of Silent Tourism Foundation.</p>

             
              
            </div>
          </div>

          {/* Mobile: 2-column layout for Explore and Have Questions */}
          <div className="grid grid-cols-2 gap-6 md:hidden col-span-1">
            {/* Links Section 1: Explore */}
            <div>
              <h4 className="text-[#e7dfd3] font-bold mb-4 text-sm tracking-wide uppercase">Explore</h4>
              <ul className="space-y-3 text-sm text-[#e7dfd3] font-body">
                <li><Link href="/about-us" className="hover:text-gold-500 transition-colors block py-0.5">About Us</Link></li>
                <li><Link href="/venue" className="hover:text-gold-500 transition-colors block py-0.5">Estate</Link></li>
                <li><Link href="/services" className="hover:text-gold-500 transition-colors block py-0.5">Services</Link></li>
                <li><Link href="/stories" className="hover:text-gold-500 transition-colors block py-0.5">Stories</Link></li>
              </ul>
            </div>

            {/* Links Section 2: Have Questions? */}
            <div>
              <h4 className="text-[#e7dfd3] font-bold mb-4 text-sm tracking-wide uppercase">Questions?</h4>
              <ul className="space-y-3 text-sm text-[#e7dfd3] font-body">
                <li><Link href="/blogs" className="hover:text-gold-500 transition-colors block py-0.5">Blogs</Link></li>
                <li><Link href="/events" className="hover:text-gold-500 transition-colors block py-0.5">Events</Link></li>
                <li><Link href="/faq" className="hover:text-gold-500 transition-colors block py-0.5">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-gold-500 transition-colors block py-0.5">Work as a Volunteer</Link></li>
              </ul>
            </div>
          </div>

          {/* Desktop: Original layout for Explore */}
          <div className="hidden md:block lg:col-span-2">
            <h4 className="text-[#e7dfd3] font-bold mb-6 text-sm tracking-wide uppercase">Explore</h4>
            <ul className="space-y-4 text-sm text-[#e7dfd3] font-body">
              <li><Link href="/about-us" className="hover:text-gold-500 transition-colors block py-0.5">About Us</Link></li>
              
              <li><Link href="/venue" className="hover:text-gold-500 transition-colors block py-0.5">Estate</Link></li>
              <li><Link href="/services" className="hover:text-gold-500 transition-colors block py-0.5">Services</Link></li>
              
              <li><Link href="/stories" className="hover:text-gold-500 transition-colors block py-0.5">Stories</Link></li>
            </ul>
          </div>

          {/* Desktop: Original layout for Have Questions? */}
          <div className="hidden md:block lg:col-span-2">
            <h4 className="text-[#e7dfd3] font-bold mb-6 text-sm tracking-wide uppercase">Have Questions?</h4>
            <ul className="space-y-4 text-sm text-[#e7dfd3] font-body">
              <li><Link href="/blogs" className="hover:text-gold-500 transition-colors block py-0.5">Blogs</Link></li>
              <li><Link href="/events" className="hover:text-gold-500 transition-colors block py-0.5">Events</Link></li>
             
              <li><Link href="/faq" className="hover:text-gold-500 transition-colors block py-0.5">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold-500 transition-colors block py-0.5">Work as Volunteer</Link></li>
            </ul>
          </div>

          {/* Combined Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-12">
            {/* Contact Section */}
            <div>
              <h4 className="text-[#e7dfd3] font-bold mb-6 text-sm tracking-wide uppercase">Connect</h4>
              <ul className="grid grid-cols-2 md:flex md:flex-col gap-4 text-sm text-[#e7dfd3] font-body">
                <li className="flex items-center gap-3 group">
                  <span className="material-symbols-outlined text-lg text-earth-400 group-hover:text-gold-500 transition-colors">mail</span>
                  <a href="mailto:hello@thesilent.club" className="hover:text-[#e7dfd3] transition-colors">hello@thesilent.club</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 text-earth-400 group-hover:text-gold-500 transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a href="https://wa.me/919890322494" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">+91 98903 22494</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="material-symbols-outlined text-lg text-earth-400 group-hover:text-gold-500 transition-colors">location_on</span>
                  <a href="https://maps.google.com/?q=Bird+Sanctuary+Kumbhargaon+Bhigwan+Maharashtra" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7dfd3] transition-colors">Google Map Location </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 text-earth-400 group-hover:text-gold-500 transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a href="https://instagram.com/thesilent.club" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">@thesilent.club</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-earth-950 border-2 border-earth-700 rounded px-4 py-3 text-sm text-earth-100 focus:outline-none focus:border-gold-500 flex-1 placeholder-earth-400 transition-colors"
                    placeholder="Your email address"
                    type="email"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-earth-950 px-6 py-3 rounded text-sm font-bold transition-all hover:shadow-lg hover:shadow-gold-500/20 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="text-center py-3 px-4 bg-gold-500/10 border border-gold-500/30 rounded">
                  <p className="text-gold-500 text-sm font-medium">
                    ✓ Thank you for subscribing!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#e7dfd3] font-body gap-4">
          <div>© {new Date().getFullYear()} The Silent Club. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
            <Link href="/sitemap-page" className="hover:text-gold-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}