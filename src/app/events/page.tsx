"use client";

import Header from "../components/Header";
import DevelopmentTimeline from "../components/experiences/DevelopmentTimeline";

export default function EventsPage() {
    return (
        <>
            <Header />
            <div className="fixed inset-0 z-40 h-screen w-screen" style={{ backgroundColor: '#1a120b' }}>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)`
                    }} />
                </div>
                
                <div className="w-full h-full overflow-y-auto relative flex flex-col items-center justify-center">
                    {/* Main Content Container */}
                    <div className="w-full max-w-7xl mx-auto px-6">
                        {/* Header Section */}
                        <div className="text-center mb-6">
                            
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
                            <div className="overflow-hidden min-h-[300px]">
                                <DevelopmentTimeline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}