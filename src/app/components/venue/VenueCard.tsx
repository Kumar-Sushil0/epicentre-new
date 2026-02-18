"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface VenueCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  href?: string;
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

export default function VenueCard({ title, description, image, imageAlt, badge, href }: VenueCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isForceHovered, setIsForceHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // Parse description to extract tags
  const { tags, mainDescription } = parseDescription(description);

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

  const CardContent = (
    <div
      ref={cardRef}
      className={`group relative aspect-[25/24] overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl rounded-[10px] ${href ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Foreground Image Layer */}
      <div className="absolute inset-0 z-10 bg-earth-900">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay - Black like Accommodation cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Gold Background Overlay - Dynamic height based on content */}
        <div
          className={`absolute left-0 right-0 bottom-0 bg-gold-500 rounded-b-[10px] transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'opacity-100' : 'opacity-0'}`}
          style={{
            zIndex: 15,
            top: 'auto',
            height: shouldShowHoverState ? `${contentHeight + 32}px` : '0px', // +32px for top/bottom padding
          }}
        />

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
          {/* Non-hover content */}
          {!shouldShowHoverState && (
            <>
              {/* Badge */}
              {badge && (
                <div className="mb-3">
                  <span className="inline-block bg-gold-500/90 text-earth-950 text-xs font-bold px-3 py-1 rounded-full backdrop-blur">
                    {badge}
                  </span>
                </div>
              )}

              <h4 className="text-[21px] font-normal mb-2 text-[#e7dfd3]" style={{ fontFamily: 'Outfit, sans-serif', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                {title}
              </h4>
            </>
          )}

          {/* Description - Revealed on Hover using grid approach */}
          <div className={`grid transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div ref={contentRef}>
                {/* Title with hover state - appears on hover for gold background */}
                <div className="mb-3">
                  <h4 className="text-[21px] font-normal text-earth-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {title}
                  </h4>
                  
                  {/* Tags below title */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-1.5 py-0.5 bg-earth-900/10 border border-earth-900/20 rounded-full text-[10px] text-earth-800 whitespace-nowrap"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Badge on hover */}
                {badge && (
                  <div className="mb-3">
                    <span className="inline-block bg-earth-900/20 text-earth-900 text-xs font-bold px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm md:text-base leading-snug font-body text-earth-800">
                  {mainDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}