"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  title: string;
  description: string;
  time: string;
  icon: string;
  images: string[];
  imageAlt: string;
  aspectRatio: "4/3" | "3/4" | "video";
  href?: string;
}

export default function ExperienceCard({ title, description, time, icon, images, imageAlt, aspectRatio, href }: ExperienceCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const aspectClass =
    aspectRatio === "4/3" ? "aspect-[4/3]" : aspectRatio === "3/4" ? "aspect-[3/4]" : "aspect-video";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const CardContent = (
    <>
      <div className="relative w-full overflow-hidden rounded-xl bg-earth-800 mb-4 shadow-2xl">
        <div className={`w-full ${aspectClass} relative`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                alt={`${imageAlt} - Image ${index + 1}`}
                src={image}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
          ))}
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 to-transparent opacity-60 z-10"></div>
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-earth-900/80 hover:bg-earth-900 text-earth-100 hover:text-gold-500 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm border border-earth-700 hover:border-gold-500 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-xl leading-none">chevron_left</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentSlide((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-earth-900/80 hover:bg-earth-900 text-earth-100 hover:text-gold-500 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm border border-earth-700 hover:border-gold-500 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-xl leading-none">chevron_right</span>
              </button>
            </>
          )}
          {/* Navigation Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-gold-500 text-sm">{icon}</span>
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest font-body">{time}</span>
        </div>
        <h3 className="text-earth-50 text-2xl font-medium font-display group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-earth-300 text-base font-body">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group cursor-pointer block">
        {CardContent}
      </Link>
    );
  }

  return <div className="group cursor-pointer">{CardContent}</div>;
}
