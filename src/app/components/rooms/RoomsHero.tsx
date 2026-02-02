"use client";

import { useEffect, useRef } from "react";

export default function RoomsHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion (0.5x speed)
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
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
        <source src="/room.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl border-l-2 border-gold-500/50 pl-8 md:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8 drop-shadow-2xl" style={{ fontFamily: 'Trirong, serif' }}>
            The Philosophy of <br />
            <span className="italic text-gold-500">Rest & Restore</span>
          </h1>
          <p className="text-earth-300/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl font-body">
            Rest here is functional, not performative. The spaces are shaped to quiet the nervous system.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em] text-earth-300">Scroll</span>
        <span className="material-symbols-outlined text-earth-300 text-2xl">arrow_downward</span>
      </div>
    </section>
  );
}
