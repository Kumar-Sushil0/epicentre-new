"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/drone.mp4",
    "/boat.mp4",
    "/angling.mp4",
    "/star.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 4000); // Change video every 4 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background with Crossfade */}
      <div className="absolute inset-0 z-0">
        {videos.map((src, index) => (
          <video
            key={index}
            ref={index === currentVideoIndex ? videoRef : null}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: 'translate(-50%, -50%) scale(1.2)',
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-earth-950/60 via-earth-950/50 to-earth-950/70" />
      
      <div className="relative z-10 text-center px-16 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-serif text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Silence reveals direction.
        </h1>
        <p className="text-lg md:text-xl text-[#e7dfd3] mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
          A void designed for introspection.
        </p>
        <button className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-lg font-bold hover:bg-gold-500 hover:text-earth-950 transition-colors uppercase tracking-wider text-sm hidden">
          Book Now
        </button>
      </div>
    </section>
  );
}
