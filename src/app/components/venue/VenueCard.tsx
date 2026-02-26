"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface VenueCardProps {
  title: string;
  description: string;
  image: string | string[];
  imageAlt: string;
  badge?: string;
  href?: string;
  icon?: string;
  category?: string;
  area?: string;
  capacity?: string;
  objectPosition?: string;
}

// Helper function to parse description and extract tags
function parseDescription(description: string): { tags: string[], mainDescription: string } {
  const lines = description.split('\n\n');
  const tags: string[] = [];
  let mainDescription = '';
  
  lines.forEach((line, index) => {
    // Check for various tag patterns
    if (line.startsWith('Used for:') || line.startsWith('Everyday:') || 
        line.startsWith('Wed & Fri') || line.startsWith('As required:')) {
      // Extract tags from the line
      const tagText = line.replace(/^(Used for:|Everyday:|Wed & Fri\s*:|As required:)\s*/i, '').trim();
      const extractedTags = tagText.split('.').map(t => t.trim()).filter(t => t.length > 0);
      tags.push(...extractedTags);
    } else if (index === 0 || index === lines.length - 1) {
      // Keep first line and last line as main description with space separator
      if (mainDescription) mainDescription += ' ';
      mainDescription += line;
    }
  });
  
  return { tags, mainDescription };
}

export default function VenueCard({ title, description, image, imageAlt, badge, href, icon, category, area, capacity, objectPosition }: VenueCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isForceHovered, setIsForceHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // Parse description to extract tags
  const { tags, mainDescription } = parseDescription(description);

  // Convert image to array if it's a single string
  const images = Array.isArray(image) ? image : [image];

  useEffect(() => {
    // Check if parent has force-hover class
    const checkForceHover = () => {
      if (cardRef.current?.parentElement?.classList.contains('force-hover')) {
        setIsForceHovered(true);
      } else {
        setIsForceHovered(false);
      }
    };

    checkForceHover();

    // Use MutationObserver to watch for class changes on parent
    const observer = new MutationObserver(checkForceHover);
    if (cardRef.current?.parentElement) {
      observer.observe(cardRef.current.parentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => observer.disconnect();
  }, []);

  // Measure content height when hover state changes
  useEffect(() => {
    if (contentRef.current && shouldShowHoverState) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isHovered, isForceHovered, mainDescription, badge, tags]);

  const shouldShowHoverState = isHovered || isForceHovered;

  // Carousel effect for multiple images
  useEffect(() => {
    if (shouldShowHoverState) return; // Pause on hover or force hover
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [shouldShowHoverState, images.length]);

  const CardContent = (
    <div
      ref={cardRef}
      className={`group relative aspect-[25/20] overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl rounded-[10px] ${href ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Foreground Image Layer */}
      <div className="absolute inset-0 z-10 bg-earth-900">
        {/* Images - Carousel */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`${imageAlt} - ${index + 1}`}
              fill
              className="object-cover"
              style={objectPosition ? { objectPosition } : undefined}
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient Overlay - Black like Accommodation cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Title Overlay (Initially Visible) */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '1.5rem',
            left: '2rem',
            right: '2rem',
            zIndex: 20
          }}
        >
          {/* Icon - always visible at top */}
          {icon && (
            <div className="flex items-center gap-2 text-gold-500 mb-2">
              <span className="material-symbols-outlined text-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>{icon}</span>
            </div>
          )}

          {/* Title - always visible, with arrow only when not hovered */}
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-[21px] font-normal text-[#e7dfd3]" style={{ fontFamily: 'Outfit, sans-serif', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
              {title}
            </h4>
            {href && !shouldShowHoverState && (
              <span className="material-symbols-outlined text-gold-500 text-xl">arrow_forward</span>
            )}
          </div>

          {/* Description and Category - Revealed on Hover using grid approach */}
          <div className={`grid transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div ref={contentRef} className="border-t border-gold-500/30 pt-4">
                {/* Category tag - appears on hover */}
                {category && (
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-widest font-body font-bold text-gold-500" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                      {category}
                    </span>
                  </div>
                )}
                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed font-body text-[#e7dfd3]" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)', whiteSpace: 'pre-line' }}>
                  {mainDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots - only show if multiple images */}
        {images.length > 1 && (
          <div className={`absolute bottom-4 left-0 right-0 flex justify-center gap-2 transition-opacity duration-300 z-20 ${shouldShowHoverState ? 'opacity-0' : ''}`}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-gold-500 w-6" : "bg-white/40 hover:bg-white/80 w-1.5"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}