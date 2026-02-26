"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Top Shadow for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
      
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
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container px-4 md:px-16 max-w-7xl">
        <div className="max-w-6xl border-l-2 border-gold-500/50 pl-4 md:pl-8 lg:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-4xl md:text-7xl lg:text-8xl font-display font-normal leading-[1.1] tracking-tight mb-6 md:mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="italic text-gold-500">Silence as a Service.</span>
          </h1>
          <p className="text-earth-300/80 text-lg md:text-2xl font-light leading-relaxed w-full font-body mb-6 md:mb-8">
            A private estate designed for structured silence, deep work, and decision clarity.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 items-start">
          
            <Link
              href="/venue"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300 text-base md:text-lg font-normal border-2 border-gold-500 rounded-lg px-5 md:px-6 py-2.5 md:py-3 bg-earth-950/50 backdrop-blur-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              → View Estate
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-earth-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-earth-300 text-2xl">expand_more</span>
        </div>
      </div>
    </section>
  );
}
