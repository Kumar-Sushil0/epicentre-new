"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center">
        {/* Popup Modal */}
        <div className="relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(83, 83, 83, 0.8)' }}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 z-10 text-white text-2xl font-bold hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            ×
          </button>

          <div className="flex">
            {/* Left Side - Form */}
            <div className="flex-1 p-12 flex flex-col justify-center">
              {/* Logo/Title */}
              <div className="text-center mb-4">
                <div className="relative h-16 w-48 mx-auto mb-2">
                  <Image
                    src="/logo.svg"
                    alt="EpiCentre Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Call to Action */}
              <p className="text-white text-center mb-8 text-sm uppercase">
                ENLIST TO RECIEVE EXCLUSIVE UPDATES
              </p>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="text-white text-sm uppercase mb-2 block">
                    NAME
                  </label>
                  <div className="border-b border-white"></div>
                  <input
                    type="text"
                    className="w-full bg-transparent text-white mt-2 focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-white text-sm uppercase mb-2 block">
                    EMAIL
                  </label>
                  <div className="border-b border-white"></div>
                  <input
                    type="email"
                    className="w-full bg-transparent text-white mt-2 focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Contact Number Field */}
                <div>
                  <label className="text-white text-sm uppercase mb-2 block">
                    CONTACT NUMBER
                  </label>
                  <div className="border-b border-white"></div>
                  <input
                    type="tel"
                    className="w-full bg-transparent text-white mt-2 focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Subscribe Button */}
              <button className="w-full mt-8 px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
                SUBSCRIBE
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 relative min-h-[500px] hidden md:block pr-8 pt-8 pb-8">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  src="/banner.png"
                  alt="Building"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
