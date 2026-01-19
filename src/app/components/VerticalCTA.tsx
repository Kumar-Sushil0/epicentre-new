"use client";

import { useState } from "react";
import DevelopmentTimeline from "./DevelopmentTimeline";

export default function VerticalCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#6B3410] hover:bg-[#5A2A0E] transition-colors rounded-l-lg shadow-lg cursor-pointer"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        <div className="px-3 py-3 text-white font-semibold text-[8px] uppercase tracking-wider">
          EVENT CALENDAR
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-black rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Development Timeline Component */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">Event Calendar</h2>
              <DevelopmentTimeline />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
