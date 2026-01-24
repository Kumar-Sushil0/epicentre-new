"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface WellnessCardProps {
  title: string;
  description: string;
  category: string;
  icon: string;
  images: string[];
  imageAlt: string;
  aspectRatio: "4/5" | "wide" | "farm";
  spanColumns?: number;
  isFarmCard?: boolean;
  href?: string;
}

export default function WellnessCard({
  title,
  description,
  category,
  icon,
  images,
  imageAlt,
  aspectRatio,
  spanColumns,
  isFarmCard,
  href,
}: WellnessCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const aspectClass =
    aspectRatio === "4/5"
      ? "aspect-[4/5]"
      : aspectRatio === "wide"
      ? "aspect-[16/10] md:aspect-[2/1.33] lg:aspect-[2/1.25]"
      : "aspect-[16/9] lg:aspect-[4/3]";

  const getColSpanClass = () => {
    if (!spanColumns) return "";
    if (spanColumns === 2) return "md:col-span-2";
    if (spanColumns === 3) return "md:col-span-2 lg:col-span-3";
    return "";
  };
  
  const colSpanClass = getColSpanClass();

  if (isFarmCard) {
    const FarmCardContent = (
      <div className="group flex flex-col gap-4 relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 bg-white/5 rounded-xl p-0 lg:pr-8 overflow-hidden cursor-pointer">
        <div className={`${aspectClass} w-full overflow-hidden relative`}>
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
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
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
        <div className="flex flex-col gap-4 p-6 lg:p-0">
          <div className="flex items-center gap-2 text-gold-500">
            <span className="material-symbols-outlined text-lg">{icon}</span>
            <span className="text-xs uppercase tracking-widest font-body">{category}</span>
          </div>
          <h3 className="text-3xl lg:text-4xl text-earth-50 font-medium">{title}</h3>
          <p className="text-earth-300/60 leading-relaxed text-base max-w-md font-body">{description}</p>
          <div className="pt-4">
            <button className="text-earth-50 border-b border-gold-500/50 hover:border-gold-500 pb-1 text-sm font-medium transition-colors font-body">
              Read about our harvest
            </button>
          </div>
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} className={colSpanClass}>
          {FarmCardContent}
        </Link>
      );
    }
    return <div className={colSpanClass}>{FarmCardContent}</div>;
  }

  const RegularCardContent = (
    <div className="group flex flex-col gap-4 relative cursor-pointer">
      <div className={`${aspectClass} w-full overflow-hidden rounded-lg bg-earth-800 relative`}>
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
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent"></div>
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
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gold-500">
          <span className="material-symbols-outlined text-lg">{icon}</span>
          <span className="text-xs uppercase tracking-widest font-body">{category}</span>
        </div>
        <h3 className="text-2xl text-earth-50 font-medium">{title}</h3>
        <p className="text-earth-300/60 leading-relaxed text-sm font-body">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={colSpanClass}>
        {RegularCardContent}
      </Link>
    );
  }
  return <div className={colSpanClass}>{RegularCardContent}</div>;
}
