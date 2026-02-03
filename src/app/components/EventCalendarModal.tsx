"use client";

import { useEffect, useRef } from "react";
import { useEventCalendar } from "../contexts/EventCalendarContext";
import DevelopmentTimeline from "./experiences/DevelopmentTimeline";

export default function EventCalendarModal() {
    const { isOpen, closeCalendar } = useEventCalendar();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeCalendar();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeCalendar]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-earth-950 via-earth-900 to-earth-800">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)`
                }} />
            </div>
            
            <div
                ref={modalRef}
                className="w-full h-full overflow-y-auto relative flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Enhanced Close Button */}
                <button
                    onClick={closeCalendar}
                    className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-earth-800/80 hover:bg-earth-700/90 text-earth-300 hover:text-gold-400 transition-all duration-300 border border-earth-600/50 hover:border-gold-500/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
                    aria-label="Close modal"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Main Content Container */}
                <div className="w-full max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        
                        {/* Title with Navigation Arrows */}
                        <div className="flex items-center justify-center gap-8 mb-4">
                            <button
                                onClick={() => {
                                    const timeline = document.querySelector('[data-timeline-scroll]') as HTMLDivElement;
                                    if (timeline) {
                                        timeline.scrollBy({ left: -300, behavior: 'smooth' });
                                    }
                                }}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 hover:from-gold-500/20 hover:to-gold-600/20 border border-gold-500/30 hover:border-gold-400 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
                                aria-label="Scroll left"
                            >
                                <svg
                                    className="w-5 h-5 text-gold-500 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            
                            <h1 className="text-4xl md:text-5xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Event Calendar
                            </h1>
                            
                            <button
                                onClick={() => {
                                    const timeline = document.querySelector('[data-timeline-scroll]') as HTMLDivElement;
                                    if (timeline) {
                                        timeline.scrollBy({ left: 300, behavior: 'smooth' });
                                    }
                                }}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 hover:from-gold-500/20 hover:to-gold-600/20 border border-gold-500/30 hover:border-gold-400 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
                                aria-label="Scroll right"
                            >
                                <svg
                                    className="w-5 h-5 text-gold-500 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                        
                        <p className="text-earth-300 text-lg font-body max-w-2xl mx-auto leading-relaxed">
                            Discover upcoming experiences, workshops, and gatherings at The Silent Club
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/50 via-transparent to-earth-900/50 pointer-events-none z-10 rounded-2xl"></div>
                        <div className="bg-earth-800/30 backdrop-blur-sm rounded-2xl border border-earth-700/50 shadow-2xl overflow-hidden min-h-[300px]">
                            <DevelopmentTimeline />
                        </div>
                    </div>

                    {/* Footer */}
                   
                    </div>
                </div>
            </div>
      
    );
}
