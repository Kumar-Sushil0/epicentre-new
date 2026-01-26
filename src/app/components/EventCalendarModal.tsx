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
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="bg-earth-900 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={closeCalendar}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-earth-800 hover:bg-earth-700 text-earth-100 hover:text-gold-500 transition-all border border-earth-700 hover:border-gold-500"
                    aria-label="Close modal"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Timeline Content */}
                <div>
                    <div className="p-6 pb-0">
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={() => {
                                    const timeline = document.querySelector('[data-timeline-scroll]') as HTMLDivElement;
                                    if (timeline) {
                                        timeline.scrollBy({ left: -300, behavior: 'smooth' });
                                    }
                                }}
                                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 hover:border-gold-500 transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <svg
                                    className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform"
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
                            <h2 className="text-2xl font-bold text-earth-50 font-display">
                                Event Calendar
                            </h2>
                            <button
                                onClick={() => {
                                    const timeline = document.querySelector('[data-timeline-scroll]') as HTMLDivElement;
                                    if (timeline) {
                                        timeline.scrollBy({ left: 300, behavior: 'smooth' });
                                    }
                                }}
                                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 hover:border-gold-500 transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <svg
                                    className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform"
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
                    </div>
                    <DevelopmentTimeline />
                </div>
            </div>
        </div>
    );
}
