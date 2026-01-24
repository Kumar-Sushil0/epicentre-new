"use client";

import { useState, useEffect, useRef } from "react";
import DevelopmentTimeline from "./experiences/DevelopmentTimeline";

interface VerticalStickyButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function VerticalStickyButton({
  text,
  onClick,
  href,
  className = "",
}: VerticalStickyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // If href is provided, navigate normally
      window.location.href = href;
    } else {
      // Default: open timeline modal
      setIsModalOpen(true);
    }
  };

  const buttonClasses = `
    fixed right-0 top-1/2 -translate-y-1/2 z-50
    bg-earth-900/95 text-earth-50 
    px-2 py-2 
    rounded-l-lg 
    shadow-md shadow-black/20
    border-l border-gold-500/40
    hover:border-gold-500
    hover:bg-earth-800
    transition-all duration-300
    cursor-pointer
    group
    ${className}
  `;

  const buttonStyle = {
    writingMode: "vertical-rl" as const,
    textOrientation: "mixed" as const,
  };

  return (
    <>
      <div className={buttonClasses} style={buttonStyle} onClick={handleButtonClick}>
        <span className="font-medium tracking-wider text-[10px] uppercase whitespace-nowrap">
          {text}
        </span>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-earth-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-earth-800 hover:bg-earth-700 text-earth-100 hover:text-gold-500 transition-all border border-earth-700 hover:border-gold-500"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Timeline Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-earth-50 mb-6 font-display text-center">
                Event Calendar
              </h2>
              <DevelopmentTimeline />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
