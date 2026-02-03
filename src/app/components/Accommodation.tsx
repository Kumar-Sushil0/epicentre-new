"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Accommodation() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at first real item (after clones)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      id: 0,
      title: "Private Rooms",
      description: "For complete withdrawal and uninterrupted rest.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMEXUIh--EZP5fQBMot7ipsmQCI4w60rUmtgCRCv8ONulpWU6j4OW3PA4o0KwMtwDejXpiV3FqTXgT7nqoXoF607AHGqURe06tVE0AJJHiBNB4j2SnpOgEZPJF0pxIiDKFCMCXMgJNvaxTOEUvwCFdufEX0U71Q97lChwn8BYapAJ7AhXcZyouXA-0N-z17ZVe2XJLlN_HlI52GtQDyehXMU8BVLZgXkkHX6im_VJfSbOxCGyWsr8TyrlTTsuVxyxPSqfBw9r4Y8h",
    },
    {
      id: 1,
      title: "Dorms",
      description: "Quiet coexistence with clear boundaries. No expectation of interaction.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_dFvHyP31JXbQRtNiZIUI94-8e_c0QShxJv1rmygbtridAA9K46Xa3QhUDB7a44eMqsv-s9HFVkx-o6wpN6WzGZo0WpEzDa285WmpQTAGbCzD1Tp-F9gThsXPoSRToC8oFd7uJnGoyIN_Sjm91MvJl0esPwg3ZmjulH3thRT0IQP81wmV2KshhQQAGu7dlmLU4FCvPYpIMWQcOHr_ot6fmFNikZK7soyC-7hY7XhmrrJeGaYljsrGvN5Ph4Zg71ul-P1-OCwhmPEl",
    },
    {
      id: 2,
      title: "Community Hall",
      description: "A shared multi use indoor space for co-living and stillness. Held in common.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo",
    },
    {
      id: 3,
      title: "Tents",
      description: "Minimal shelter close to land and weather. Simplicity over insulation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cp533rD2hQD7h4B-RpKKREBmm3s8x90hpO9pcXHR7Jj_t5Irxlyz92Hrm5LmCpp-_4wiRrD2igTCEBlSvWz9ZSIXh9rLXb5yANk7rWHOHLz7TfkkJfecRmovPUNnrruP-zbpoMFSueAEVvahR4K9I0KbmDplWZyocDTz6ebvHgdNgJ00Jidrk0zs5VuMdNEcRv3opfOO2ADL-3hlSX4BDN7SxBx8qQ3cpIgZhFKbikP7rtaljp_bYwXVa4ZIQrkl0QVmO7YJ4Dfg",
    },
  ];

  // Create infinite items: [clone-end, clone-end, ...real items..., clone-start, clone-start]
  const infiniteItems = [
    ...items.slice(-2), // Last 2 items as clones at start
    ...items,           // Real items
    ...items.slice(0, 2) // First 2 items as clones at end
  ];

  const totalItems = items.length;
  const cardWidth = 55; // 55% width
  const gap = 8; // 2rem gap

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Handle transition end for seamless infinite loop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      
      // Reset position for infinite loop
      if (currentIndex >= totalItems + 2) {
        // At end clones, jump to real start
        setCurrentIndex(2);
        carousel.style.transition = 'none';
        carousel.style.transform = getTransform(2);
        // Force reflow
        carousel.offsetHeight;
        carousel.style.transition = 'transform 0.5s ease';
      } else if (currentIndex < 2) {
        // At start clones, jump to real end
        setCurrentIndex(totalItems + 1);
        carousel.style.transition = 'none';
        carousel.style.transform = getTransform(totalItems + 1);
        // Force reflow
        carousel.offsetHeight;
        carousel.style.transition = 'transform 0.5s ease';
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, totalItems]);

  const getTransform = (index = currentIndex) => {
    // Simple centering: move each slide by its full width + gap, then offset to center
    const slideWidth = 65; // 65% width
    const gapRem = 2; // 2rem gap (gap-8 = 2rem)
    
    // Move by index slides, then center the current slide
    const slideOffset = index * slideWidth; // Move by slide widths
    const gapOffset = index * gapRem; // Account for gaps in rem
    const centerOffset = 50 - (slideWidth / 2); // Center the 65% width slide (50% - 32.5% = 17.5%)
    
    return `translateX(calc(-${slideOffset}% - ${gapOffset}rem + ${centerOffset}%))`;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleDotClick = (dotIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(dotIndex + 2); // +2 because real items start at index 2
  };

  // Get current real item index for dots
  const getCurrentRealIndex = () => {
    if (currentIndex < 2) return totalItems + currentIndex - 2;
    if (currentIndex >= totalItems + 2) return currentIndex - totalItems - 2;
    return currentIndex - 2;
  };

  return (
    <section className="py-8 min-h-[100vh] bg-[#261B14] border-t border-earth-700 flex items-center" id="accommodation">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Stay</h3>
          <p className="text-[#e7dfd3] font-body text-[15px] max-w-full">
             Rest here is functional, not indulgent.<br />
            Each stay option offers a different degree of privacy, proximity, and withdrawal.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div
              ref={carouselRef}
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform(),
                willChange: "transform",
              }}
            >
              {infiniteItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[65%] group cursor-pointer"
                  onClick={() => handleDotClick(item.id)}
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-earth-700">
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
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>{item.title}</h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed mt-2 border-t border-gold-500/30 pt-4">
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
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === getCurrentRealIndex() ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
