"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion (0.5x speed)
    }
  }, []);

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover z-0"
        style={{
          transform: 'translate(-50%, -50%) scale(1.2)',
        }}
      >
        <source src="/drone.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-earth-950/60 via-earth-950/50 to-earth-950/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hidden">
        <h1 className="text-5xl md:text-7xl font-serif text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Silence reveals direction.
        </h1>
        <p className="text-lg md:text-xl text-[#e7dfd3] mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
          A physical environment designed to reduce interference<br />so attention can settle and clarity can emerge.
        </p>
        <button className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-lg font-bold hover:bg-gold-500 hover:text-earth-950 transition-colors uppercase tracking-wider text-sm">
          Book Now
        </button>
      </div>
    </section>
  );
}
