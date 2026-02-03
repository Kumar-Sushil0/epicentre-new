"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CarouselCardProps {
    title: string;
    description: string;
    images: string[];
    className?: string;
    icon?: string;
    category?: string;
    price?: string;
    userCount?: string | number;
    href?: string;
    titleSize?: string;
    titlePosition?: { left?: string; bottom?: string; right?: string };
    overlayColor?: 'gold-gradient' | 'gold-solid' | 'default';
}

export default function CarouselCard({
    title,
    description,
    images,
    className = "",
    icon,
    category,
    price,
    userCount,
    href,
    titleSize,
    titlePosition,
    overlayColor = 'default',
}: CarouselCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
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
            className={`group relative aspect-[5/6] overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl rounded-[10px] ${className} ${href ? 'cursor-pointer' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Foreground Image Layer (Carousel) */}
            <div className="absolute inset-0 z-10 bg-earth-900">
                {/* Images */}
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    >
                        <Image
                            src={src}
                            alt={`${title} - ${index + 1}`}
                            fill
                            className="object-cover"
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
                        bottom: titlePosition?.bottom || '1.5rem',
                        left: titlePosition?.left || '2rem',
                        right: titlePosition?.right || '2rem'
                    }}
                >

                    {/* Header: Price/Count only (no category here) */}
                    <div className="flex items-center justify-between mb-0 w-full">
                        {icon && (
                            <div className="flex items-center gap-2 text-gold-500">
                                <span className="material-symbols-outlined text-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>{icon}</span>
                            </div>
                        )}

                        {(price || userCount) && (
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-earth-300" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                                {userCount && (
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">group</span>
                                        <span>{userCount}</span>
                                    </div>
                                )}
                                {price && <span>{price}</span>}
                            </div>
                        )}
                    </div>

                    <h4 className="text-[21px] font-normal text-[#e7dfd3] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontSize: titleSize, textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>{title}</h4>
                    
                    {/* Know More Button - Always visible if href is provided */}
                    {href && (
                        <div className="mb-3">
                            <button className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-gold-500 text-gold-500 rounded-lg text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-colors duration-300">
                                Know More
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    )}
                    
                    {/* Description and Category - Revealed on Hover using grid approach */}
                    <div className={`grid transition-all duration-500 ease-in-out ${shouldShowHoverState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="border-t border-gold-500/30 pt-4">
                                {/* Category tag - appears on hover */}
                                {category && (
                                    <div className="mb-3">
                                        <span className="text-xs uppercase tracking-widest font-body text-gold-500 font-bold" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                                            {category}
                                        </span>
                                    </div>
                                )}
                                {/* Description */}
                                <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed font-body" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
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
