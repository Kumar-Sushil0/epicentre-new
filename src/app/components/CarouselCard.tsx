"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface CarouselCardProps {
    title: string;
    description: string;
    images: string[];
    className?: string;
    icon?: string;
    category?: string;
    price?: string;
    userCount?: string | number;
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
}: CarouselCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return; // Pause on hover
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    return (
        <div
            className={`group relative h-[450px] rounded-xl overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Content (Revealed on Hover) */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-end p-8 pb-10">

                {/* Header: Icon/Category + Price/Count */}
                <div className="flex items-center justify-between mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 w-full text-earth-950">
                    {(icon || category) && (
                        <div className="flex items-center gap-2">
                            {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
                            {category && <span className="text-xs uppercase tracking-widest font-body font-bold">{category}</span>}
                        </div>
                    )}

                    {(price || userCount) && (
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-earth-900/80">
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

                <h4 className="text-xl font-bold text-earth-950 mb-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {title}
                </h4>
                <p className="text-earth-900 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 font-medium font-body whitespace-pre-line">
                    {description}
                </p>
            </div>

            {/* Foreground Image Layer (Carousel) */}
            <div className="absolute inset-0 z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-[40%] bg-earth-900">
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

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

                {/* Title Overlay (Initially Visible) */}
                <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">

                    {/* Header: Icon/Category + Price/Count (White/Gold) */}
                    <div className="flex items-center justify-between mb-2 w-full">
                        {(icon || category) && (
                            <div className="flex items-center gap-2 text-gold-500">
                                {icon && <span className="material-symbols-outlined text-lg drop-shadow-md">{icon}</span>}
                                {category && <span className="text-xs uppercase tracking-widest font-body drop-shadow-md">{category}</span>}
                            </div>
                        )}

                        {(price || userCount) && (
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-earth-300 drop-shadow-md">
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

                    <h4 className="text-2xl font-bold text-white font-serif drop-shadow-md">{title}</h4>
                </div>

                {/* Dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0 z-20">
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
}
