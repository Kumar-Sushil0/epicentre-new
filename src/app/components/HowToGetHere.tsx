"use client";

import Image from "next/image";

export default function HowToGetHere() {
  return (
    <section className="w-full bg-white py-20">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black uppercase" style={{ fontFamily: 'serif' }}>
          HOW TO GET HERE?
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-8 items-center">
          {/* Left Column: Image (55-60% width) */}
          <div className="w-[58%]">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src="/banner.png"
                alt="EPiCentre Location"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content (40-45% width) */}
          <div className="w-[42%] flex flex-col gap-6 justify-center">
            <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Location & Directions
            </h2>
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                EPiCentre is located in India's Wine Country, set away from urban noise and designed for quiet reflection.
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-black mb-1">By Road</h3>
                  <p className="text-sm">
                    Accessible via well-maintained roads. Detailed directions will be provided upon booking confirmation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Nearest Airport</h3>
                  <p className="text-sm">
                    Approximately 2-3 hours drive from the nearest major airport. We can assist with transportation arrangements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Railway Station</h3>
                  <p className="text-sm">
                    Nearest railway station is within 1-2 hours. Local transport can be arranged.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mt-4">
                Exact location details and detailed directions are shared after reservation confirmation to maintain the quiet, intentional nature of the space.
              </p>
            </div>
            <button className="w-fit px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
              GET DIRECTIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
