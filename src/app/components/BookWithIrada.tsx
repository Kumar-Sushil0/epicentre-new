"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookWithIrada() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/banner.jpg",
      text: {
        line1: "Take it easy -",
        line2: "cancel till 12pm",
        line3: "the day before."
      }
    },
    {
      id: 2,
      image: "/banner.jpg",
      text: {
        line1: "Take it easy -",
        line2: "cancel till 12pm",
        line3: "the day before."
      }
    },
    {
      id: 3,
      image: "/banner.jpg",
      text: {
        line1: "Take it easy -",
        line2: "cancel till 12pm",
        line3: "the day before."
      }
    },
    {
      id: 4,
      image: "/banner.jpg",
      text: {
        line1: "Take it easy -",
        line2: "cancel till 12pm",
        line3: "the day before."
      }
    },
    {
      id: 5,
      image: "/banner.jpg",
      text: {
        line1: "Take it easy -",
        line2: "cancel till 12pm",
        line3: "the day before."
      }
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-[#F5F5F0] py-12 relative">
      {/* Decorative curved element at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#6B3410] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image Carousel */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
                  <p className="text-4xl md:text-5xl font-light mb-2">{slide.text.line1}</p>
                  <p className="text-4xl md:text-5xl font-light mb-2">{slide.text.line2}</p>
                  <p className="text-4xl md:text-5xl font-light">{slide.text.line3}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-all flex items-center justify-center"
              aria-label="Previous slide"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-all flex items-center justify-center"
              aria-label="Next slide"
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

            {/* Carousel Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-[#6B3410] w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Information Section */}
          <div className="flex flex-col justify-center px-4 md:px-8 py-8">
            <p className="text-xs uppercase tracking-wider text-black mb-2">SKIP THE MIDDLEMEN</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">Book With Irada</h2>
            <p className="text-xs uppercase tracking-wider text-black mb-6">VALID ALL YEAR</p>

            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Did you know that when you book direct on{" "}
                <a href="https://hotelirada.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  hotelirada.com
                </a>{" "}
                you can get access to insider perks and the best rates?
              </p>
              <p>
                A round of aperol spritz at Rosso, our very own time well spent tote,{" "}
                <strong>free cancellation up to 24 hours prior to check-in</strong> and a half hour slot at Irada Racquet Club - it is definitely worth booking your stay on{" "}
                <a href="https://hotelirada.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  hotelirada.com
                </a>
                .
              </p>
            </div>

            <button className="border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 w-fit hover:bg-black hover:text-white transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
