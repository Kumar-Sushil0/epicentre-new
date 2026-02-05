"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface StoriesCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author?: string;
  date?: string;
  badge?: string;
  href?: string;
}

export default function StoriesCard({ title, description, image, imageAlt, author, date, badge, href }: StoriesCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isForceHovered, setIsForceHovered] = useState(false);

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

        {/* Gold Background Overlay - Bottom portion only, full coverage on sides and bottom */}
        <div
          className={`absolute left-0 right-0 bottom-0 bg-gold-500 rounded-b-[10px] transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'opacity-100' : 'opacity-0'}`}
          style={{
            zIndex: 15,
            top: 'auto',
            minHeight: shouldShowHoverState ? '65%' : '0%'
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
          {/* Badge */}
          {badge && !shouldShowHoverState && (
            <div className="mb-3">
              <span className="inline-block bg-gold-500/90 text-earth-950 text-xs font-bold px-3 py-1 rounded-full backdrop-blur">
                {badge}
              </span>
            </div>
          )}

          <h4 className={`text-[21px] font-normal mb-2 ${shouldShowHoverState ? 'opacity-0' : 'text-[#e7dfd3]'}`} style={{ fontFamily: 'Outfit, sans-serif', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
            {title}
          </h4>

          {/* Description - Revealed on Hover using grid approach */}
          <div className={`grid transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="border-t border-gold-500/30 pt-4">
                {/* Title with hover state - appears on hover for gold background */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[21px] font-normal text-earth-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {title}
                  </h4>
                </div>

                {/* Badge on hover */}
                {badge && (
                  <div className="mb-3">
                    <span className="inline-block bg-earth-900/20 text-earth-900 text-xs font-bold px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Author/Date info on hover */}
                {(author || date) && (
                  <div className="flex items-center gap-4 text-earth-800 text-xs font-mono mb-4">
                    {author && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">person</span> {author}
                      </span>
                    )}
                    {date && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">calendar_today</span> {date}
                      </span>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed font-body text-earth-800" style={{ whiteSpace: 'pre-line' }}>
                  {description}
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
