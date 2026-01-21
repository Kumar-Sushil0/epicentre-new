"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperiencesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Wellness",
      description: "Gentle practices that support the body and nervous system.\n\nSelf-paced, optional, and non-instructional.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 2,
      title: "Experience",
      description: "Context-driven activities shaped by place, time, and mood.\n\nEntered when relevant, ignored when not.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 3,
      title: "Solitude",
      description: "Time alone without tasks or expectations.\n\nSpace to observe, reflect, and settle.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 4,
      title: "Expression",
      description: "Quiet containers for voice, movement, or making.\n\nShared without performance or evaluation.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 5,
      title: "Residency",
      description: "Multi-day immersions around a single theme.\n\nDesigned for depth, not consumption.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
  ];

  const currentExperience = experiences[currentIndex];
  const currentImages = currentExperience.images;
  const SLIDE_DURATION = 3000; // 3 seconds per slide

  // Use refs to track current values in the interval
  const currentSlideRef = useRef(0);
  const currentExperienceRef = useRef(0);

  // Auto-advance carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      currentSlideRef.current += 1;

      // If we've gone through all slides for current experience
      if (currentSlideRef.current >= currentImages.length) {
        // Reset slide and move to next experience
        currentSlideRef.current = 0;
        currentExperienceRef.current = (currentExperienceRef.current + 1) % experiences.length;

        setCarouselSlide(0);
        setCurrentIndex(currentExperienceRef.current);
      } else {
        setCarouselSlide(currentSlideRef.current);
      }
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentImages.length, experiences.length]);

  // Sync refs when user manually changes experience
  useEffect(() => {
    currentExperienceRef.current = currentIndex;
    currentSlideRef.current = carouselSlide;
  }, [currentIndex, carouselSlide]);

  // Reset slide when experience changes
  useEffect(() => {
    setCarouselSlide(0);
    currentSlideRef.current = 0;
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCarouselSlide(index);
  };

  const goToExperience = (index: number) => {
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
              alt={`${currentExperience.title} ${index + 1}`}
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
                ? "bg-[#6B3410] w-8"
                : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Circular Button (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-40">
          <button
            className="w-12 h-12 rounded-full bg-white/80 hover:bg-white transition-all flex items-center justify-center"
            aria-label="Carousel control"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
        {currentExperience.title}
      </h2>
      <div className="text-base text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
        {currentExperience.description}
      </div>
      <Link 
        href="/experiences"
        className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors inline-block"
      >
        LEARN MORE
      </Link>
    </div>
  );

  return (
    <section className="w-full bg-[#F5F5F0] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {currentExperience.imagePosition === "left" ? (
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

      {/* Experience Indicators */}
      <div className="flex items-center justify-center pt-16">
        <div className="flex gap-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToExperience(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                ? "bg-gray-900 w-10"
                : "bg-gray-400 hover:bg-gray-600"
                }`}
              aria-label={`Go to ${experiences[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
