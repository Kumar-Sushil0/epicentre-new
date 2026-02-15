"use client";

import { useEffect, useRef } from "react";

export default function WellnessHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion (0.5x speed)
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Top Shadow for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
      
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
        <source src="/gym.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-16">
        <div className="w-full border-l-2 border-gold-500/50 pl-8 md:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
           
            <span className="italic text-gold-500"> Stability Before Insight</span>
          </h1>
          <p className="text-earth-300/80 text-xl md:text-2xl font-light leading-relaxed font-body">
            Always-available practices that support the body and nervous system.<br />
            Unscheduled. Untracked.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-earth-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-earth-300 text-2xl">arrow_downward</span>
        </div>
      </div>
    </section>
  );
}
