"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/banner.jpg",
      alt: "EpiCentre Resort",
    },
    {
      id: 2,
      image: "/banner.jpg",
      alt: "EpiCentre Resort",
    },
    {
      id: 3,
      image: "/banner.jpg",
      alt: "EpiCentre Resort",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Carousel Dots Indicator (Bottom Center) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Circular Button (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-40">
        <button
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center"
          aria-label="Carousel control"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
