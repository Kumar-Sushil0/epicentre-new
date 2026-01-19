"use client";

import { useState, useEffect, useRef } from "react";

export default function DiningShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;

  const dinings = [
    {
      id: 1,
      title: "DINING 01",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
    {
      id: 2,
      title: "DINING 02",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
  ];

  const currentDining = dinings[currentIndex];
  const slides = [1, 2, 3]; // 3 image slides per carousel
  const SLIDE_DURATION = 3000; // 3 seconds per slide

  // Use refs to track current values in the interval
  const currentSlideRef = useRef(0);
  const currentDiningRef = useRef(0);

  // Auto-advance carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      currentSlideRef.current += 1;

      // If we've gone through all slides
      if (currentSlideRef.current >= slides.length) {
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
  }, [dinings.length, slides.length]);

  // Sync refs when user manually changes dining
  useEffect(() => {
    currentDiningRef.current = currentIndex;
    currentSlideRef.current = carouselSlide;
  }, [currentIndex, carouselSlide]);

  const goToSlide = (index: number) => {
    setCarouselSlide(index);
  };

  const goToDining = (index: number) => {
    setCurrentIndex(index);
    setCarouselSlide(0);
  };

  const imageCarousel = (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
        {/* Placeholder for image */}
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <span className="text-gray-500">Image Carousel</span>
        </div>

        {/* Carousel Dots Indicator (Bottom Center) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
          {slides.map((_, index) => (
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
    <div className="flex flex-col justify-center px-12 py-16">
      <h2 className="text-5xl font-bold text-white mb-6">
        {currentDining.title}
      </h2>
      <p className="text-lg text-white mb-8 leading-relaxed">
        {currentDining.description}
      </p>
      <button className="w-fit px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors">
        LEARN MORE
      </button>
    </div>
  );

  return (
    <section className="w-full bg-black">
      {/* DINING Heading */}
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold text-white uppercase">DINING</h1>
      </div>

      {/* Main Content */}
      <div className="flex min-h-[500px] items-center">
        {currentDining.imagePosition === "left" ? (
          <>
            <div className="w-1/2 flex items-center">{imageCarousel}</div>
            <div className="w-1/2 flex items-center">{textContent}</div>
          </>
        ) : (
          <>
            <div className="w-1/2 flex items-center">{textContent}</div>
            <div className="w-1/2 flex items-center">{imageCarousel}</div>
          </>
        )}
      </div>

      {/* Dining Indicators */}
      <div className="flex items-center justify-center pb-12">
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
