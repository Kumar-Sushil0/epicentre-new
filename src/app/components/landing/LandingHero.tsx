"use client";

import { useEffect, useRef, useState } from "react";

export default function LandingHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/hero.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Top Shadow for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0" aria-label="The Silent Club Bhigwan Estate">
        {videos.map((src, index) => (
          <video
            key={index}
            ref={index === currentVideoIndex ? videoRef : null}
            autoPlay
            loop
            muted
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
            aria-label="Estate landscape and nature views"
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
        

          <div className="space-y-3 md:space-y-4 text-earth-100 font-body">
            <p className="text-lg md:text-2xl font-normal leading-relaxed">
              A private estate designed to protect attention for people between chapters of life.
            </p>
          </div>
        </div>
      </div>
         
   
    </section>
  );
}
