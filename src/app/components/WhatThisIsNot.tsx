"use client";

import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

const ITEMS = [
  {
    id: 0,
    title: "Designed Silence",
    description: "Sound, movement, and activity are intentionally shaped so attention can settle.",
    images: [
      "/room.webp"
    ]
  },
  {
    id: 1,
    title: "Non-Performative Space",
    description: "There is no pressure to speak, share, or present an identity. Presence is enough.",
    images: [
      "/room2.webp"
    ]
  },
  {
    id: 2,
    title: "Environment-Led Experience",
    description: "Architecture, land, and rhythm do the work. There is no programming layer.",
    images: [
      "/room3.webp"
    ]
  },
];

export default function WhatThisIsNot() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [forceHover, setForceHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setForceHover(true);
            
            // Remove forced hover state after 1.5 seconds
            setTimeout(() => {
              setForceHover(false);
            }, 1500);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-8 min-h-[100vh] bg-earth-900 flex items-center">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Moat</h3>
          <p className="text-earth-300 font-body text-[15px] max-w-full">
            What makes The Silent Club distinct is not what happens here,<br/> but how the environment is held.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ITEMS.map((item, index) => (
            <div key={item.id} className={forceHover ? 'force-hover' : ''}>
              <CarouselCard
                title={item.title}
                description={item.description}
                images={item.images}
                className="rounded-lg !aspect-[5/4]"
                titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                overlayColor="gold-solid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
