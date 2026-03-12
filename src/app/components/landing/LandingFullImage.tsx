"use client";

import { useState, useEffect } from 'react';

const carouselImages = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
  '/banner/4.png',
  '/banner/5.png',
  '/banner/6.png',
  'https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Residency/1.png',
  'https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Residency/3.png',
  'https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Residency/7.png',
];

export default function LandingFullImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4500); // Rotate every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Image carousel with crossfade */}
      <div className="absolute inset-0 bg-earth-800">
        {carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`The Silent Club Bhigwan Estate ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              zIndex: currentIndex === index ? 1 : 0,
            }}
            onError={(e) => {
              // Fallback to gradient if image doesn't load
              e.currentTarget.style.display = 'none';
            }}
          />
        ))}
        {/* Gradient overlay for visual consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/30 to-transparent" style={{ zIndex: 2 }}></div>
      </div>
      
      {/* Optional caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-earth-950/80 to-transparent" style={{ zIndex: 3 }}>
        <p className="text-earth-300 text-sm md:text-base font-body text-center">
          Estate landscape, wildlife, and architecture
        </p>
      </div>
    </section>
  );
}
