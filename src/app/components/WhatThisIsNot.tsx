"use client";

import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

const ITEMS = [
  {
    id: 0,
    title: "Held Silence",
    description: "Silence is not suggested or symbolic. It is structurally and culturally held.",
    images: [
      "/moat.png"
    ]
  },
  {
    id: 1,
    title: "Anonymity by Design",
    description: "Identity is optional. Guests may choose to remain unseen, unengaged, and uninterrupted.",
    images: [
      "/moat2.png"
    ]
  },
  {
    id: 2,
    title: "Deep Sensory Withdrawal",
    description: "Dark rooms offer total light isolation with no facilitation or narrative. Only conditions. Only time.",
    images: [
      "/moat3.png"
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
      <div className="w-full px-4 md:px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Moat</h3>
          <p className="text-[#e7dfd3] font-body text-[15px] max-w-full">
            The Silent Club optional experiences are difficult to<br/> replicate because it removes what most places rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ITEMS.map((item, index) => (
            <div key={item.id} className={forceHover ? 'force-hover' : ''}>
              <CarouselCard
                title={item.title}
                description={item.description}
                images={item.images}
                className="rounded-lg"
                titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                overlayColor="gold-solid"
                overlayHeight={45}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
