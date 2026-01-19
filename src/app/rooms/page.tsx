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
      
      {/* Reserve Rooms Section */}
      <section className="w-full bg-white py-16">
        {/* Header Section */}
        <div className="text-center mb-12 px-8">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
            RESERVE ROOMS
          </h1>
          <p className="text-base text-black max-w-3xl mx-auto">
            {loremIpsum}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="w-[45%]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
            <div className="w-[55%] flex flex-col gap-8">
              {/* DORMS Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  DORMS
                </h2>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Alternate Layout - Reversed */}
        <div className="max-w-7xl mx-auto px-8 mt-16">
          <div className="flex gap-8 items-center">
            {/* Left Column - Content */}
            <div className="w-[55%] flex flex-col gap-8">
              {/* ROOMS Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  ROOMS
                </h2>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="w-[45%]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-8 mt-16">
          <div className="flex gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="w-[45%]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
            <div className="w-[55%] flex flex-col gap-8">
              {/* TENTS Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  TENTS
                </h2>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* COMMUNITY HALL Section - Content Left, Image Right */}
        <div className="max-w-7xl mx-auto px-8 mt-16">
          <div className="flex gap-8 items-center">
            {/* Left Column - Content */}
            <div className="w-[55%] flex flex-col gap-8">
              {/* COMMUNITY HALL Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  COMMUNITY HALL
                </h2>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="w-[45%]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-8 mt-16">
          <div className="flex gap-8 items-center">
            {/* Left Column - Image Carousel */}
            <div className="w-[45%]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
            <div className="w-[55%] flex flex-col gap-8">
              {/* FULL VILLA Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  FULL VILLA
                </h2>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
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
