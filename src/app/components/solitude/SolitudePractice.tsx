"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SolitudePracticeProps {
  number: string;
  category: string;
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  buttonText: string;
  buttonIcon: string;
  imagePosition?: "left" | "right";
  practiceId: string;
}

export default function SolitudePractice({
  number,
  category,
  title,
  description,
  images,
  imageAlt,
  buttonText,
  buttonIcon,
  imagePosition = "right",
  practiceId,
}: SolitudePracticeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isImageLeft = imagePosition === "left";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <article className="flex flex-col max-w-[1200px] mx-auto w-full group">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Image Side */}
        <div className={`w-full lg:w-[60%] ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10"></div>
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
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
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
                    onClick={() => setCurrentSlide(index)}
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
        {/* Text Side */}
        <div className={`flex flex-1 flex-col gap-6 ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
          <div className="flex flex-col gap-3 border-l-2 border-gold-500/30 pl-6">
            <span className="text-gold-500 text-xs font-bold tracking-[0.15em] uppercase">
              {number}. {category}
            </span>
            <h2 className="text-gold-500 text-4xl font-bold leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
            <p className="text-earth-50/70 text-lg font-light leading-relaxed font-body">{description}</p>
          </div>
          <div className="pl-6">
            <Link
              href={`/solitude/details?id=${practiceId}`}
              className="flex items-center gap-2 text-gold-500 hover:text-earth-50 transition-colors duration-300 group/btn w-fit"
            >
              <span className="text-sm font-bold tracking-wider uppercase border-b border-transparent group-hover/btn:border-earth-50 pb-0.5">
                {buttonText}
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                {buttonIcon}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
