"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

type GalleryCategory = "ALL" | "ROOMS" | "DINING" | "EXPERIENCES" | "VENUE" | "WELLNESS";

interface GalleryItem {
  id: number;
  category: GalleryCategory;
  image: string;
  title: string;
  aspectRatio: "tall" | "wide" | "square";
  description?: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = ["ALL", "ROOMS", "DINING", "EXPERIENCES", "VENUE", "WELLNESS"];

  const loremIpsum = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA`;

  // Generate gallery items with varied aspect ratios for masonry layout
  const galleryItems: GalleryItem[] = [
    { id: 1, category: "EXPERIENCES", image: "/banner.png", title: "Quiet Gatherings", aspectRatio: "tall", description: "Small groups sharing space without spectacle.\n\nTime-led, not agenda-led." },
    { id: 2, category: "EXPERIENCES", image: "/banner.png", title: "Shared Evenings", aspectRatio: "square", description: "Slow nights shaped by conversation, food, or silence.\n\nNothing staged, nothing rushed." },
    { id: 3, category: "EXPERIENCES", image: "/banner.png", title: "Live Expression", aspectRatio: "wide", description: "Music, movement, and voice in their unfinished forms.\n\nExperienced without performance pressure." },
    { id: 4, category: "EXPERIENCES", image: "/banner.png", title: "Marking Moments", aspectRatio: "tall", description: "Simple celebrations held with intention.\n\nFocused on presence, not production." },
    { id: 5, category: "EXPERIENCES", image: "/banner.png", title: "Film & Reflection", aspectRatio: "square", description: "Thoughtful screenings chosen for context.\n\nWatched, then left to settle." },
    { id: 6, category: "DINING", image: "/banner.png", title: "Food in Process", aspectRatio: "wide", description: "Cooking as shared attention, not service.\n\nSlow preparation, shared tables." },
    { id: 7, category: "EXPERIENCES", image: "/banner.png", title: "Material Play", aspectRatio: "tall", description: "Working with clay and hands.\n\nTactile, grounding, outcome-free." },
    { id: 8, category: "EXPERIENCES", image: "/banner.png", title: "Seasonal Living", aspectRatio: "square", description: "Time spent outdoors, shaped by weather and rhythm.\n\nLight structure, open days." },
    { id: 9, category: "VENUE", image: "/banner.png", title: "Leadership in Quiet", aspectRatio: "wide", description: "Groups stepping away from noise to think clearly.\n\nNo hierarchy, no theatrics." },
    { id: 10, category: "EXPERIENCES", image: "/banner.png", title: "Art in Formation", aspectRatio: "tall", description: "Creative work mid-process.\n\nSeen without critique or completion." },
  ];

  const filteredItems = activeCategory === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Calculate dynamic height and flex ratios based on number of items
  const itemCount = filteredItems.length;
  const isAllCategory = activeCategory === "ALL";
  const gridHeight = isAllCategory ? 2000 : Math.min(2000, Math.max(800, itemCount * 200));
  
  // Adjust flex ratios for filtered categories (smaller ratios = smaller items)
  const getFlexRatios = (column: number) => {
    if (isAllCategory) {
      // Original ratios for "ALL" category
      if (column === 0) return [2.2, 1.32, 2.2]; // Left: Tall, Short, Tall
      if (column === 1) return [1.76, 1.76, 2.2]; // Middle: Square, Square, Tall
      return [0.88, 4.4, 1.32]; // Right: Small, Very Tall, Short
    } else {
      // Smaller ratios for filtered categories
      if (column === 0) return [1.4, 0.9, 1.4]; // Left: Tall, Short, Tall
      if (column === 1) return [1.2, 1.2, 1.4]; // Middle: Square, Square, Tall
      return [0.6, 2.8, 0.9]; // Right: Small, Very Tall, Short
    }
  };

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Gallery Header Section */}
      <section className="w-full bg-[#F5F5F0] py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
            GALLERY
          </h1>
          <p className="text-base text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            {loremIpsum}
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="w-full bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-bold uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white border-2 border-black"
                    : "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Layout */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-gray-200 p-4">
            <div className="grid grid-cols-3 gap-4" style={{ height: `${gridHeight}px` }}>
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                {filteredItems.filter((_, index) => index % 3 === 0).map((item, colIndex) => {
                  const flexRatios = getFlexRatios(0);
                  const flexRatio = flexRatios[colIndex % flexRatios.length] || flexRatios[0];
                  return (
                    <div
                      key={item.id}
                      className="relative bg-black border-2 border-black overflow-hidden cursor-pointer group min-h-0"
                      style={{ flex: flexRatio }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                            {item.title}
                          </h3>
                          <p className="text-xs text-white/90 uppercase tracking-wider">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-4">
                {filteredItems.filter((_, index) => index % 3 === 1).map((item, colIndex) => {
                  const flexRatios = getFlexRatios(1);
                  const flexRatio = flexRatios[colIndex % flexRatios.length] || flexRatios[0];
                  return (
                    <div
                      key={item.id}
                      className="relative bg-black border-2 border-black overflow-hidden cursor-pointer group min-h-0"
                      style={{ flex: flexRatio }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                            {item.title}
                          </h3>
                          <p className="text-xs text-white/90 uppercase tracking-wider">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {filteredItems.filter((_, index) => index % 3 === 2).map((item, colIndex) => {
                  const flexRatios = getFlexRatios(2);
                  const flexRatio = flexRatios[colIndex % flexRatios.length] || flexRatios[0];
                  return (
                    <div
                      key={item.id}
                      className="relative bg-black border-2 border-black overflow-hidden cursor-pointer group min-h-0"
                      style={{ flex: flexRatio }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                            {item.title}
                          </h3>
                          <p className="text-xs text-white/90 uppercase tracking-wider">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center max-w-2xl px-4">
              <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-base text-white/90 mb-2 leading-relaxed whitespace-pre-line">
                  {selectedImage.description}
                </p>
              )}
              <p className="text-sm text-white/80 uppercase tracking-wider">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
