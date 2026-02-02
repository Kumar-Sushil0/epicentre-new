"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Accommodation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 0,
      title: "Private Rooms",
      description: "For complete withdrawal and uninterrupted rest. Designed for those who need separation from all shared presence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMEXUIh--EZP5fQBMot7ipsmQCI4w60rUmtgCRCv8ONulpWU6j4OW3PA4o0KwMtwDejXpiV3FqTXgT7nqoXoF607AHGqURe06tVE0AJJHiBNB4j2SnpOgEZPJF0pxIiDKFCMCXMgJNvaxTOEUvwCFdufEX0U71Q97lChwn8BYapAJ7AhXcZyouXA-0N-z17ZVe2XJLlN_HlI52GtQDyehXMU8BVLZgXkkHX6im_VJfSbOxCGyWsr8TyrlTTsuVxyxPSqfBw9r4Y8h",
    },
    {
      id: 1,
      title: "Dorms",
      description: "Shared sleeping with clear boundaries. Quiet coexistence without expectation of interaction.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_dFvHyP31JXbQRtNiZIUI94-8e_c0QShxJv1rmygbtridAA9K46Xa3QhUDB7a44eMqsv-s9HFVkx-o6wpN6WzGZo0WpEzDa285WmpQTAGbCzD1Tp-F9gThsXPoSRToC8oFd7uJnGoyIN_Sjm91MvJl0esPwg3ZmjulH3thRT0IQP81wmV2KshhQQAGu7dlmLU4FCvPYpIMWQcOHr_ot6fmFNikZK7soyC-7hY7XhmrrJeGaYljsrGvN5Ph4Zg71ul-P1-OCwhmPEl",
    },
    {
      id: 2,
      title: "Tents",
      description: "Minimal shelter close to land and weather. For those who prefer simplicity over insulation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cp533rD2hQD7h4B-RpKKREBmm3s8x90hpO9pcXHR7Jj_t5Irxlyz92Hrm5LmCpp-_4wiRrD2igTCEBlSvWz9ZSIXh9rLXb5yANk7rWHOHLz7TfkkJfecRmovPUNnrruP-zbpoMFSueAEVvahR4K9I0KbmDplWZyocDTz6ebvHgdNgJ00Jidrk0zs5VuMdNEcRv3opfOO2ADL-3hlSX4BDN7SxBx8qQ3cpIgZhFKbikP7rtaljp_bYwXVa4ZIQrkl0QVmO7YJ4Dfg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 min-h-[100vh] bg-[#261B14] border-t border-earth-700 flex items-center" id="accommodation">
      <div className="w-full px-[30px]">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>Stays</h2>
          <p className="text-earth-300 max-w-2xl font-body">
            Places to rest are part of the system. Each option offers a different degree of privacy.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                willChange: "transform",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{
                    width: `calc((100% - 4rem) / 3)`,
                    flexShrink: 0,
                  }}
                  onClick={() => setCurrentIndex(item.id)}
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-earth-700">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>{item.title}</h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-earth-100 text-sm md:text-base leading-relaxed mt-2 border-t border-gold-500/30 pt-4">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/rooms" className="inline-block text-gold-500 border-b border-gold-500 pb-1 hover:text-earth-100 hover:border-earth-100 transition-colors uppercase tracking-widest text-xs font-bold">
            View All Options
          </Link>
        </div>
      </div>
    </section>
  );
}
