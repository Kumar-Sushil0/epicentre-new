"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatThisIsNotVariant() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      id: 0,
      title: "Not a Luxury Resort",
      description: "This is a self-held space. Comfort exists, service theatrics do not.",
      icon: "do_not_disturb_on",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL",
      badge: "Self-Held",
    },
    {
      id: 1,
      title: "Not for Parties",
      description: "Loud celebrations break the shared agreement of quiet.",
      icon: "volume_off",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL",
      badge: "Quiet Zone",
    },
    {
      id: 2,
      title: "No Room Service",
      description: "Meals are shared in common spaces, at agreed times.",
      icon: "restaurant_menu",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL",
      badge: "Shared Meals",
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
            <h3 className="text-3xl font-bold mb-6 text-earth-50">What this is not</h3>
            <p className="text-earth-300 mb-8 font-body">
              Clear boundaries protect the culture inside. We are intentional about what does not belong here.
            </p>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    currentSlide === index
                      ? "border-gold-500 bg-earth-900/80 shadow-lg"
                      : "border-earth-700 bg-earth-900/50 hover:border-gold-500/30"
                  }`}
                >
                  <span className="material-symbols-outlined text-gold-500 mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-earth-100">{item.title}</h4>
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
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
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
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
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
