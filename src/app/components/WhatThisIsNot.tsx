"use client";

import React from "react";
import CarouselCard from "./CarouselCard";

const ITEMS = [
  {
    id: 0,
    title: "Designed Silence",
    description: "Sound, movement, and activity are intentionally shaped so attention can settle.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80", // foggy forest
      "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"  // quiet lake
    ]
  },
  {
    id: 1,
    title: "Non-Performative Space",
    description: "There is no pressure to speak, share, or present an identity. Presence is enough.",
    images: [
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      "https://images.unsplash.com/photo-1516962248409-5038089598bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // minimal interior
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"  // empty chair
    ]
  },
  {
    id: 2,
    title: "Environment-Led Experience",
    description: "Architecture, land, and rhythm do the work. There is no programming layer.",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // modern architecture wood
      "https://images.unsplash.com/photo-1620338009756-1bf2095207fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"  // stone wall detail
    ]
  },
];

export default function WhatThisIsNot() {
  return (
    <section className="py-20 min-h-[100vh] bg-earth-900 flex items-center">
      <div className="w-full px-20">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-2 text-gold-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>Our Moat</h3>
          <p className="text-earth-300 font-body text-lg max-w-full">
            What makes The Silent Club distinct is not what happens here, but how the environment is held.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <CarouselCard
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
