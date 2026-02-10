"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CarouselCardProps {
    title: string;
    hoverTitle?: string;
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
    overlayHeight?: number;
    showBorderLine?: boolean;
    socialIcons?: Array<{
        href: string;
        icon: 'linkedin' | 'website';
        label: string;
    }>;
    showActions?: boolean;
    onAddToCart?: () => void;
    onToggleWishlist?: () => void;
    isInWishlist?: boolean;
}

export default function CarouselCard({
    title,
    hoverTitle,
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
    overlayHeight = 30,
    showBorderLine = true,
    socialIcons,
    showActions = false,
    onAddToCart,
    onToggleWishlist,
    isInWishlist = false,
}: CarouselCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isForceHovered, setIsForceHovered] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

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
    }, [isHovered, isForceHovered, description, category, hoverTitle, socialIcons]);

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
            className={`group relative aspect-[25/24] overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl rounded-[10px] ${className} ${href ? 'cursor-pointer' : ''}`}
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

                {/* Action Buttons - Top Right */}
                {showActions && (
                    <div className="absolute top-4 right-4 z-30 flex gap-2">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleWishlist?.();
                            }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isInWishlist 
                                    ? 'bg-gold-500 text-earth-950' 
                                    : 'bg-black/50 text-white hover:bg-black/70'
                            }`}
                            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            <span className={`material-symbols-outlined text-2xl ${isInWishlist ? 'filled' : ''}`}>
                                {isInWishlist ? 'favorite' : 'favorite_border'}
                            </span>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onAddToCart?.();
                            }}
                            className="w-10 h-10 bg-black/50 text-white hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
                            aria-label="Add to cart"
                        >
                            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                        </button>
                    </div>
                )}

                {/* Gold Background Overlay - Dynamic height based on content */}
                {overlayColor === 'gold-solid' && (
                    <div
                        className={`absolute left-0 right-0 bottom-0 bg-gold-500 rounded-b-[10px] transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            zIndex: 15,
                            top: 'auto',
                            height: shouldShowHoverState ? `${contentHeight + 32}px` : '0px', // +32px for top/bottom padding
                        }}
                    />
                )}

                {/* Title Overlay (Initially Visible) */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        bottom: titlePosition?.bottom || '1.5rem',
                        left: titlePosition?.left || '2rem',
                        right: titlePosition?.right || '2rem',
                        zIndex: 20
                    }}
                >

                    {/* Header: Price/Count only on hover */}
                    <div className="flex items-center justify-between mb-0 w-full">
                        {icon && (
                            <div className="flex items-center gap-2 text-gold-500">
                                <span className="material-symbols-outlined text-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>{icon}</span>
                            </div>
                        )}

                        {(price || userCount) && shouldShowHoverState && (
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

                    {/* Non-hover title and button */}
                    {!shouldShowHoverState && (
                        <>
                            <h4 className="text-[21px] font-normal mb-2 text-[#e7dfd3]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: titleSize, textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>{title}</h4>

                            {/* Know More Button - Always visible if href is provided */}
                            {href && (
                                <div className="mb-3">
                                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-gold-500 text-gold-500 rounded-lg text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-colors duration-300">
                                        Know More
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {/* Description and Category - Revealed on Hover using grid approach */}
                    <div className={`grid transition-all duration-700 ease-in-out ${shouldShowHoverState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div ref={contentRef} className={`${showBorderLine && overlayColor !== 'gold-solid' ? 'border-t border-gold-500/30 pt-4' : ''}`}>
                                {/* Title with Social Icons - appears on hover for gold-solid cards */}
                                {overlayColor === 'gold-solid' && (
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-[21px] font-normal text-earth-900" style={{ fontFamily: 'Outfit, sans-serif', fontSize: titleSize }}>{hoverTitle || title}</h4>
                                        {socialIcons && (
                                            <div className="flex gap-3">
                                                {socialIcons.map((social, index) => (
                                                    <a 
                                                        key={index}
                                                        href={social.href} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-earth-900 hover:text-earth-700 transition-colors"
                                                        aria-label={social.label}
                                                    >
                                                        {social.icon === 'linkedin' ? (
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                                            </svg>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                {/* Category tag - appears on hover */}
                                {category && (
                                    <div className="mb-3">
                                        <span className={`text-xs uppercase tracking-widest font-body font-bold ${overlayColor === 'gold-solid' ? 'text-earth-900' : 'text-gold-500'}`} style={{ textShadow: overlayColor === 'gold-solid' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                                            {category}
                                        </span>
                                    </div>
                                )}
                                {/* Description */}
                                <p className={`text-sm md:text-base leading-relaxed font-body ${overlayColor === 'gold-solid' ? 'text-earth-800' : 'text-[#e7dfd3]'}`} style={{ textShadow: overlayColor === 'gold-solid' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)', whiteSpace: 'pre-line' }}>
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