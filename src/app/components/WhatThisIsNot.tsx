"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatThisIsNot() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      id: 0,
      title: "Designed Silence",
      description: "Sound, movement, and activity are intentionally shaped so attention can settle.",
      icon: "volume_off",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      badge: "Silence",
    },
    {
      id: 1,
      title: "Non-Performative Space",
      description: "There is no pressure to speak, share, or present an identity. Presence is enough.",
      icon: "block",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      badge: "Space",
    },
    {
      id: 2,
      title: "Environment-Led Experience",
      description: "Architecture, land, and rhythm do the work. There is no programming layer.",
      icon: "landscape",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      badge: "Environment",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentSlide];

  return (
    <section className="py-20 bg-earth-800 border-y border-earth-700/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-500" style={{ fontFamily: 'Trirong, serif' }}>Difference</h3>
            <p className="text-earth-300 mb-8 font-body">
              What makes The Silent Club distinct is not what happens here, but how the environment is held.
            </p>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${currentSlide === index
                    ? "border-gold-500 bg-earth-900/80 shadow-lg"
                    : "border-earth-700 bg-earth-900/50 hover:border-gold-500/30"
                    }`}
                >
                  <span className="material-symbols-outlined text-gold-500 mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gold-500" style={{ fontFamily: 'Trirong, serif' }}>{item.title}</h4>
                    <p className="text-sm text-earth-300/80 font-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group border border-earth-700">
            {/* Carousel Images */}
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="bg-earth-900/90 text-gold-500 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm border border-earth-700">
                {currentItem.badge}
              </span>
            </div>
            {/* Carousel Dots */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

