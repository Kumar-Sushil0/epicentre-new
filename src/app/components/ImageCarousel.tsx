"use client";

import { useState, useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
];

// Duplicate first 4 images at the end for infinite loop
const infiniteImages = [...images, ...images.slice(0, 4)];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset to beginning when reaching the duplicates
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Wait for transition to complete
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1050); // Re-enable transitions
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[280px] md:h-[350px] lg:h-[420px] overflow-hidden bg-earth-900">
      {/* Images Container */}
      <div 
        ref={containerRef}
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {infiniteImages.map((image, index) => (
          <div key={index} className="w-1/4 h-full flex-shrink-0">
            <img
              src={image}
              alt={`Gallery ${(index % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Next Arrow only */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  );
}
