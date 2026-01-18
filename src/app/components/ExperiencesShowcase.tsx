"use client";

import { useState } from "react";

export default function ExperiencesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;

  const experiences = [
    {
      id: 1,
      title: "EXPERIENCE 01",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
    {
      id: 2,
      title: "EXPERIENCE 02",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
    {
      id: 3,
      title: "EXPERIENCE 03",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
    {
      id: 4,
      title: "EXPERIENCE 04",
      description: loremIpsum,
      image: "/banner.jpg",
      imagePosition: "left" as const,
    },
  ];

  const currentExperience = experiences[currentIndex];
  const slides = [1, 2, 3]; // 3 image slides per carousel

  const goToSlide = (index: number) => {
    setCarouselSlide(index);
  };

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setCarouselSlide(0);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    setCarouselSlide(0);
  };

  const goToExperience = (index: number) => {
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
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        {currentExperience.title}
      </h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {currentExperience.description}
      </p>
      <button className="w-fit px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors">
        LEARN MORE
      </button>
    </div>
  );

  return (
    <section className="w-full bg-white">
      {/* EXPERIENCES Heading */}
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold text-black uppercase">EXPERIENCES</h1>
      </div>

      {/* Main Content */}
      <div className="flex min-h-[500px] items-center">
        {currentExperience.imagePosition === "left" ? (
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

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-8 pb-12">
        {/* Previous Button */}
        <button
          onClick={prevExperience}
          className="w-12 h-12 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-all flex items-center justify-center"
          aria-label="Previous experience"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Experience Dots Indicator */}
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

        {/* Next Button */}
        <button
          onClick={nextExperience}
          className="w-12 h-12 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-all flex items-center justify-center"
          aria-label="Next experience"
        >
          <svg
            className="w-6 h-6"
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
