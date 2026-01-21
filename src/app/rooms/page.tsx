"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

export default function RoomsPage() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const [currentSlide5, setCurrentSlide5] = useState(0);

  const carouselImages = [
    "/banner.jpg",
    "/banner.png",
    "/banner.jpg",
  ];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    const interval2 = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    const interval3 = setInterval(() => {
      setCurrentSlide3((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    const interval4 = setInterval(() => {
      setCurrentSlide4((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    const interval5 = setInterval(() => {
      setCurrentSlide5((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
    };
  }, [carouselImages.length]);

  const goToSlide1 = (index: number) => {
    setCurrentSlide1(index);
  };

  const goToSlide2 = (index: number) => {
    setCurrentSlide2(index);
  };

  const goToSlide3 = (index: number) => {
    setCurrentSlide3(index);
  };

  const goToSlide4 = (index: number) => {
    setCurrentSlide4(index);
  };

  const goToSlide5 = (index: number) => {
    setCurrentSlide5(index);
  };
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Places to Rest Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Places to rest at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Accommodation at EPiCentre is designed to support rest, quiet, and continuity of thought.
              </p>
              <p>
                Spaces are simple, functional, and free from unnecessary stimulation.
              </p>
              <p className="font-semibold text-black">
                Where you sleep is meant to hold you — not distract you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reserve Rooms Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'serif' }}>
            Reserve Rooms
          </h2>
        </div>
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="flex items-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide1 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Room image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide1(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide1
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              {/* DORMS Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  Dorms
                </h2>
                <ul className="text-base text-gray-700 mb-8 leading-relaxed space-y-1">
                  <li>• Shared sleeping spaces for quiet coexistence.</li>
                  <li>• Simple, open, and suited for low-key group stays.</li>
                </ul>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-gray-700">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Alternate Layout - Reversed */}
        <div className="max-w-7xl mx-auto px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              {/* ROOMS Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  Rooms
                </h2>
                <ul className="text-base text-gray-700 mb-8 leading-relaxed space-y-1">
                  <li>• Private spaces for rest and withdrawal.</li>
                  <li>• Quiet, contained, and distraction-free.</li>
                </ul>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-gray-700">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="flex items-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide2 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Room image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide2(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide2
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TENTS Section - Image Left, Content Right */}
        <div className="max-w-7xl mx-auto px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="flex items-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide3 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Tent image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide3(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide3
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              {/* TENTS Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  Tents
                </h2>
                <ul className="text-base text-gray-700 mb-8 leading-relaxed space-y-1">
                  <li>• Basic outdoor sleeping close to land and sky.</li>
                  <li>• Minimal, weather-aware, and intentionally uncomplicated.</li>
                </ul>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-gray-700">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* COMMUNITY HALL Section - Content Left, Image Right */}
        <div className="max-w-7xl mx-auto px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              {/* COMMUNITY HALL Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  Community Halls
                </h2>
                <ul className="text-base text-gray-700 mb-8 leading-relaxed space-y-1">
                  <li>• Large shared indoor spaces for rest or gathering.</li>
                  <li>• Flexible, uncluttered, and purpose-neutral.</li>
                </ul>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-gray-700">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="flex items-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide4 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Community Hall image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide4(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide4
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL VILLA Section - Image Left, Content Right */}
        <div className="max-w-7xl mx-auto px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="flex items-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide5 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Full Villa image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide5(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide5
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              {/* FULL VILLA Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  FULL VILLA
                </h2>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-gray-700">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit border-2 border-black bg-white text-black uppercase font-semibold px-8 py-3 hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
