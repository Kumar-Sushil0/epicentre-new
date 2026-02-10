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
          <p className="text-earth-300 font-body text-[15px] max-w-full">
                 
    A long, quiet drive through country roads.
    Reaching here feels unhurried, not exhausting.
 <br/>   
    You arrive sooner than you expect.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Container */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
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

          {/* Dropdowns Section */}
          <div className="w-full md:w-1/2">
            <h4 className="text-xl font-semibold mb-4 text-earth-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Click for more details:
            </h4>

            <div className="space-y-4">
              {/* By Plane Dropdown */}
              <div className="border-b border-earth-700">
                <button
                  onClick={() => toggleDropdown('plane')}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-gold-500 transition-colors"
                >
                  <span className="text-lg font-body text-earth-200">By Plane</span>
                  <span className={`material-symbols-outlined text-earth-400 transition-transform ${openDropdown === 'plane' ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openDropdown === 'plane' && (
                  <div className="pb-6 px-4 space-y-3 font-body text-sm text-earth-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">flight</span>
                        <span>Nearest Airport: Pune International Airport</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">85 km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">directions_car</span>
                        <span>From Pune Airport by Car</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">2 Hours</span>
                    </div>
                    <p className="italic text-xs text-earth-500 mt-2">We can arrange airport pickup upon request.</p>
                  </div>
                )}
              </div>

              {/* By Train Dropdown */}
              <div className="border-b border-earth-700">
                <button
                  onClick={() => toggleDropdown('train')}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-gold-500 transition-colors"
                >
                  <span className="text-lg font-body text-earth-200">By Train</span>
                  <span className={`material-symbols-outlined text-earth-400 transition-transform ${openDropdown === 'train' ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openDropdown === 'train' && (
                  <div className="pb-6 px-4 space-y-3 font-body text-sm text-earth-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">train</span>
                        <span>Pune Railway Station</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">2.5 Hours by Car</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">train</span>
                        <span>Daund Railway Station</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">1.5 Hours by Car</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">train</span>
                        <span>Baramati Railway Station</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">45 Mins by Car</span>
                    </div>
                    <p className="italic text-xs text-earth-500 mt-2">Closest Railway Stations: Pune, Daund, or Baramati.</p>
                  </div>
                )}
              </div>

              {/* By Bus Dropdown */}
              <div className="border-b border-earth-700">
                <button
                  onClick={() => toggleDropdown('bus')}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-gold-500 transition-colors"
                >
                  <span className="text-lg font-body text-earth-200">By Bus</span>
                  <span className={`material-symbols-outlined text-earth-400 transition-transform ${openDropdown === 'bus' ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openDropdown === 'bus' && (
                  <div className="pb-6 px-4 space-y-3 font-body text-sm text-earth-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">directions_bus</span>
                        <span>From Pune (Swargate)</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">3.5 Hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">directions_bus</span>
                        <span>From Baramati</span>
                      </div>
                      <span className="font-bold text-[#e7dfd3]">1 Hour</span>
                    </div>
                    <p className="italic text-xs text-earth-500 mt-2">State-run buses available via Saswad and Jejuri routes.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Postal Address */}
        <div className="mt-8 text-center">
          <span className="text-gold-500 font-body text-sm">Our Postal Address : The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104.</span>
        </div>
      </div>
    </section>
  );
}
