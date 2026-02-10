"use client";

import { useState } from 'react';

const teamImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
];

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <section className="py-16 bg-earth-900">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Meet Our Team
            </h2>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              We are a collective of creators, thinkers, and facilitators united by a shared vision of transformation through silence and intentional living.
            </p>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              Our team brings together expertise in architecture, wellness, culinary arts, and hospitality to craft experiences that nurture deep connection and personal growth.
            </p>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              Each member contributes their unique perspective to creating a sanctuary where meaningful conversations emerge from shared silence.
            </p>
            
            
          </div>

          {/* Right Side - Image Slider */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
              {/* Image */}
              <img
                src={teamImages[currentSlide]}
                alt={`Team member ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))' }}
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center text-earth-950 transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center text-earth-950 transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-gold-500 w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
