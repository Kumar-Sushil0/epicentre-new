"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RoomShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const rooms = [
    {
      id: 1,
      title: "Rooms",
      description: "Private spaces for rest and quiet stays.\n\nSimple, comfortable, and distraction-free.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 2,
      title: "Dorms",
      description: "Shared sleeping spaces for low-key group stays.\n\nDesigned for coexistence without noise or pressure.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 3,
      title: "Tents",
      description: "Outdoor sleeping for those who prefer proximity to land and sky.\n\nBasic, weather-aware, and intentionally minimal.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
    {
      id: 4,
      title: "Community Hall",
      description: "An open indoor space for shared time, movement, or reflection.\n\nFlexible, uncluttered, and purpose-neutral.",
      images: ["/banner.png", "/banner.png", "/banner.png"],
      imagePosition: "left" as const,
    },
  ];

  const currentRoom = rooms[currentIndex];
  const currentImages = currentRoom.images;
  const SLIDE_DURATION = 3000; // 3 seconds per slide

  // Use refs to track current values in the interval
  const currentSlideRef = useRef(0);
  const currentRoomRef = useRef(0);

  // Auto-advance carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      currentSlideRef.current += 1;

      // If we've gone through all slides for current room
      if (currentSlideRef.current >= currentImages.length) {
        // Reset slide and move to next room
        currentSlideRef.current = 0;
        currentRoomRef.current = (currentRoomRef.current + 1) % rooms.length;

        setCarouselSlide(0);
        setCurrentIndex(currentRoomRef.current);
      } else {
        setCarouselSlide(currentSlideRef.current);
      }
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentImages.length, rooms.length]);

  // Sync refs when user manually changes room
  useEffect(() => {
    currentRoomRef.current = currentIndex;
    currentSlideRef.current = carouselSlide;
  }, [currentIndex, carouselSlide]);

  // Reset slide when room changes
  useEffect(() => {
    setCarouselSlide(0);
    currentSlideRef.current = 0;
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCarouselSlide(index);
  };

  const goToRoom = (index: number) => {
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
              alt={`${currentRoom.title} ${index + 1}`}
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
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
        {currentRoom.title}
      </h2>
      <div className="text-base text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
        {currentRoom.description}
      </div>
      <Link 
        href="/rooms"
        className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors inline-block"
      >
        LEARN MORE
      </Link>
    </div>
  );

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {currentRoom.imagePosition === "left" ? (
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

      {/* Navigation Controls */}
      <div className="flex items-center justify-center pt-16">
        {/* Room Indicators */}
        <div className="flex gap-3">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => goToRoom(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                ? "bg-gray-900 w-10"
                : "bg-gray-400 hover:bg-gray-600"
                }`}
              aria-label={`Go to ${rooms[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
