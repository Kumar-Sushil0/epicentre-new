"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function DiningShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const dinings = [
    {
      id: 1,
      title: "Home Food",
      description: "Simple, home-style vegetarian meals.\n\nCooked to support steadiness and clarity.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "right" as const,
    },
    {
      id: 2,
      title: "Salads, Smoothies, Bowls",
      description: "Light, fresh options for warm days and clear minds.\n\nEasy on the body, easy on attention.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "right" as const,
    },
    {
      id: 3,
      title: "Barbeque",
      description: "Slow, outdoor cooking done occasionally.\n\nSocial, grounded, and unhurried.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "right" as const,
    },
    {
      id: 4,
      title: "Woodstove Pizza",
      description: "Made in small batches when the context fits.\n\nSimple ingredients, shared without rush.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "right" as const,
    },
    {
      id: 5,
      title: "Sushi",
      description: "Prepared selectively and with care.\n\nMinimal, precise, and not routine.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "right" as const,
    },
  ];

  const currentDining = dinings[currentIndex];
  const currentImages = currentDining.images;
  const SLIDE_DURATION = 3000; // 3 seconds per slide

  // Use refs to track current values in the interval
  const currentSlideRef = useRef(0);
  const currentDiningRef = useRef(0);

  // Auto-advance carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      currentSlideRef.current += 1;

      // If we've gone through all slides for current dining
      if (currentSlideRef.current >= currentImages.length) {
        // Reset slide and move to next dining
        currentSlideRef.current = 0;
        currentDiningRef.current = (currentDiningRef.current + 1) % dinings.length;

        setCarouselSlide(0);
        setCurrentIndex(currentDiningRef.current);
      } else {
        setCarouselSlide(currentSlideRef.current);
      }
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentImages.length, dinings.length]);

  // Sync refs when user manually changes dining
  useEffect(() => {
    currentDiningRef.current = currentIndex;
    currentSlideRef.current = carouselSlide;
  }, [currentIndex, carouselSlide]);

  // Reset slide when dining changes
  useEffect(() => {
    setCarouselSlide(0);
    currentSlideRef.current = 0;
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCarouselSlide(index);
  };

  const goToDining = (index: number) => {
    setCurrentIndex(index);
    setCarouselSlide(0);
  };

  const imageCarousel = (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
        {/* Image Carousel */}
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === carouselSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${currentDining.title} ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Carousel Dots Indicator (Bottom Center) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
          {currentImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === carouselSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Circular Button (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-40">
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
      </div>
    </div>
  );

  const textContent = (
    <div className="flex flex-col justify-center px-4 md:px-8 py-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {currentDining.title}
      </h2>
      <div className="text-base text-white mb-8 leading-relaxed whitespace-pre-line">
        {currentDining.description}
      </div>
      <button className="w-fit border-2 border-white bg-transparent text-white uppercase font-semibold px-8 py-3 hover:bg-white hover:text-black transition-colors">
        LEARN MORE
      </button>
    </div>
  );

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {currentDining.imagePosition === "left" ? (
            <>
              <div className="flex items-center">{imageCarousel}</div>
              <div className="flex items-center">{textContent}</div>
            </>
          ) : (
            <>
              <div className="flex items-center">{textContent}</div>
              <div className="flex items-center">{imageCarousel}</div>
            </>
          )}
        </div>
      </div>

      {/* Dining Indicators */}
      <div className="flex items-center justify-center pt-16">
        <div className="flex gap-3">
          {dinings.map((_, index) => (
            <button
              key={index}
              onClick={() => goToDining(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                ? "bg-white w-10"
                : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to ${dinings[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
