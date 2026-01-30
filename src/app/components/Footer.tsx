"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-earth-950 text-earth-300 border-t border-earth-800">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">

        {/* FAQ Section */}
        <div className="grid md:grid-cols-12 gap-10 mb-20 pb-16 border-b border-earth-800/50">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-serif text-earth-100 mb-4 font-normal">Common Questions</h3>
            <p className="text-earth-300/60 font-body text-sm leading-relaxed">
              Curiosities about our way of life. If you have more, reach out.
            </p>
          </div>
          <div className="md:col-span-8 space-y-4">
            <details className="group bg-earth-900/50 rounded-lg border border-earth-800 open:bg-earth-900 transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-earth-100 hover:text-gold-500 transition-colors">
                Is there WiFi?
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-earth-300 group-hover:text-gold-500">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-earth-300/70 font-body leading-relaxed border-t border-earth-800/50 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-1 duration-200">
                We encourage a digital detox. WiFi is available only in the reception area for emergencies, but we recommend disconnecting to fully experience the retreat.
              </div>
            </details>
            <details className="group bg-earth-900/50 rounded-lg border border-earth-800 open:bg-earth-900 transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-earth-100 hover:text-gold-500 transition-colors">
                Can I bring my pet?
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-earth-300 group-hover:text-gold-500">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-earth-300/70 font-body leading-relaxed border-t border-earth-800/50 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-1 duration-200">
                While we love animals, to maintain the quietude and protect local wildlife, we currently do not allow pets.
              </div>
            </details>
            <details className="group bg-earth-900/50 rounded-lg border border-earth-800 open:bg-earth-900 transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-earth-100 hover:text-gold-500 transition-colors">
                Is alcohol served?
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-earth-300 group-hover:text-gold-500">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-earth-300/70 font-body leading-relaxed border-t border-earth-800/50 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-1 duration-200">
                No, EPiCentre is an alcohol-free and smoke-free zone to promote clarity and health.
              </div>
            </details>
          </div>
        </div>

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-earth-800/50 pb-20">

          {/* Brand & Address */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative h-16 w-56 -ml-2">
              <Image
                src="/Untitled.png"
                alt="EPiCentre Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="space-y-6">
              <a
                href="https://maps.google.com/?q=Bird+Sanctuary+Kumbhargaon+Bhigwan+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm font-medium group"
              >
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">location_on</span>
                View on Google Maps
              </a>
              <div className="text-sm text-earth-300/70 font-body leading-loose">
                <p>Near Bird Sanctuary, Kumbhargaon</p>
                <p>Bhigwan, Maharashtra - 413104</p>
              </div>
            </div>
          </div>

          {/* Links Section 1: Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-earth-100 font-bold mb-6 text-sm tracking-wide uppercase">Explore</h4>
            <ul className="space-y-4 text-sm text-earth-300/70 font-body">
              <li><Link href="/about-us" className="hover:text-gold-500 transition-colors block py-0.5">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-gold-500 transition-colors block py-0.5">Stays</Link></li>
              <li><Link href="/venue" className="hover:text-gold-500 transition-colors block py-0.5">Venue</Link></li>
              <li><Link href="/stories" className="hover:text-gold-500 transition-colors block py-0.5">Stories</Link></li>
            </ul>
          </div>

          {/* Links Section 2: Experiences */}
          <div className="lg:col-span-3">
            <h4 className="text-earth-100 font-bold mb-6 text-sm tracking-wide uppercase">Experiences</h4>
            <ul className="space-y-4 text-sm text-earth-300/70 font-body">
              <li><Link href="/wellness" className="hover:text-gold-500 transition-colors block py-0.5">Wellness</Link></li>
              <li><Link href="/experiences" className="hover:text-gold-500 transition-colors block py-0.5">Activities</Link></li>
              <li><Link href="/solitude" className="hover:text-gold-500 transition-colors block py-0.5">Solitude</Link></li>
              <li><Link href="/expression" className="hover:text-gold-500 transition-colors block py-0.5">Expression</Link></li>
              <li><Link href="/residency" className="hover:text-gold-500 transition-colors block py-0.5">Residency</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-earth-100 font-bold mb-6 text-sm tracking-wide uppercase">Connect</h4>
            <ul className="space-y-4 text-sm text-earth-300/70 font-body">
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-lg text-earth-400 group-hover:text-gold-500 transition-colors">mail</span>
                <a href="mailto:yodd@lifeidesign.games" className="hover:text-earth-100 transition-colors">yodd@lifeidesign.games</a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-lg text-earth-400 group-hover:text-gold-500 transition-colors">call</span>
                <a href="tel:+919890322494" className="hover:text-earth-100 transition-colors">+91 98903 22494</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-earth-300 hover:bg-earth-800 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-earth-300 hover:bg-earth-800 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-300 group" aria-label="YouTube">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Full Width Centered Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h4 className="text-earth-100 font-bold mb-3 text-lg">Join our newsletter</h4>
          <p className="text-sm text-earth-300/60 mb-6 font-body">Receive quiet updates on retreats and seasonal stories. No noise.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              className="bg-earth-950 border border-earth-800 rounded px-4 py-3 text-sm text-earth-100 focus:outline-none focus:border-gold-500/50 w-full placeholder-earth-700/50 transition-colors"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-gold-500 hover:bg-gold-400 text-earth-950 px-8 py-3 rounded text-sm font-bold transition-all hover:shadow-lg hover:shadow-gold-500/20 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-earth-800/50 text-xs text-earth-300/40 font-body gap-4">
          <div>© {new Date().getFullYear()} EPiCentre Retreats. All rights reserved.</div>
          <div className="flex gap-6">
            <a className="hover:text-earth-100 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-earth-100 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-earth-100 transition-colors" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
