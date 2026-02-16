"use client";

import { useState } from 'react';

export default function Location() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section className="py-8 bg-earth-900 flex items-center" id="location">
      <div className="w-full px-4 md:px-16">
        <div className="mb-8">
           <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Location</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Container */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.783030855364!2d74.78720287466037!3d18.265765276909015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc379b944e039bd%3A0x665288b2ca5e25f!2sEPiCENTRE%20a%20sanctuary%20built%20for%20transformation.!5e0!3m2!1sen!2sin!4v1770715751426!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)'
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Location Info Section */}
          <div className="w-full md:w-1/2 flex items-center h-[300px]">
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 w-full h-full flex items-center">
              <div className="space-y-6 text-earth-200">
                <p className="text-2xl font-semibold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Bhigwan, Maharashtra.</p>
                <div className="space-y-3 text-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-gold-500">•</span>
                    <p>2.5 hours from Pune.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold-500">•</span>
                    <p>5.5 hours from Mumbai.</p>
                  </div>
                  <p className="pt-3 border-t border-earth-700/50">Accessed by Taxi, Bus & Train - From Mumbai, Pune, Baramati</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Postal Address & Phone */}
        <div className="mt-8 text-center">
          <p className="text-gold-500 font-body text-sm">
            The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104. | Phone: +91 98903 22494
          </p>
        </div>
      </div>
    </section>
  );
}
