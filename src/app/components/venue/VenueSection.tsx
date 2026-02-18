import VenueCard from "./VenueCard";
import { useRef } from "react";

interface Venue {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  area: string;
  capacity: string;
  badge?: string;
  href?: string;
}

interface VenueSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  venues: Venue[];
  expanded: boolean;
  onToggle: () => void;
  introText?: string;
  usedFor?: string[];
  closingText?: string;
  viewMode?: 'grid' | 'carousel';
  onViewModeChange?: (mode: 'grid' | 'carousel') => void;
  carouselIndex?: number;
  onCarouselIndexChange?: (index: number) => void;
}

export default function VenueSection({ 
  id, 
  number, 
  title, 
  subtitle, 
  icon, 
  venues, 
  expanded, 
  onToggle, 
  introText, 
  usedFor, 
  closingText,
  viewMode = 'grid',
  onViewModeChange,
  carouselIndex = 0,
  onCarouselIndexChange
}: VenueSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, venues.length - 3);
  
  return (
    <section className="scroll-mt-32" id={id}>
      <div 
        className={`flex items-center gap-4 cursor-pointer ${expanded ? 'mb-2' : ''}`} 
        onClick={onToggle}
      >
        <h2 className="text-3xl font-normal text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {number} — {title} : {subtitle}
        </h2>
        {!expanded && (
          <>
            <div className="h-[1px] bg-earth-700 flex-grow"></div>
            <span className="material-symbols-outlined text-gold-500 text-3xl">{icon}</span>
          </>
        )}
        <button className="text-gold-500 hover:text-gold-400 transition-colors">
          <span className="material-symbols-outlined text-3xl">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
        {expanded && onViewModeChange && (
          <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700 ml-auto">
            <button
              onClick={(e) => { e.stopPropagation(); onViewModeChange('carousel'); }}
              className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                viewMode === 'carousel'
                  ? 'bg-gold-500 text-earth-900'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
            >
              <span className="material-symbols-outlined text-xl">view_carousel</span>
              <span className="text-sm font-normal">Carousel</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onViewModeChange('grid'); }}
              className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                viewMode === 'grid'
                  ? 'bg-gold-500 text-earth-900'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
            >
              <span className="material-symbols-outlined text-xl">grid_view</span>
              <span className="text-sm font-normal">Grid</span>
            </button>
          </div>
        )}
      </div>
      {expanded && (
        <>
          {/* Introductory Text */}
          {(introText || usedFor || closingText) && (
            <div className="mb-8 space-y-4">
              {introText && (
                <p className="text-earth-300 text-base leading-relaxed">
                  {introText}
                </p>
              )}
              {usedFor && usedFor.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {usedFor.map((item, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm"
                    >
                      #{item}
                    </span>
                  ))}
                </div>
              )}
              {closingText && (
                <p className="text-earth-300 text-base italic border-t border-earth-700 pt-4 mt-4">
                  {closingText}
                </p>
              )}
            </div>
          )}
          
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, index) => (
                <VenueCard key={index} {...venue} />
              ))}
            </div>
          )}

          {/* Carousel View */}
          {viewMode === 'carousel' && (
            <div className="relative">
              <div
                ref={carouselRef}
                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <div
                  className="flex gap-8 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${carouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                    willChange: "transform",
                  }}
                >
                  {venues.map((venue, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{
                        width: `calc((100% - 4rem) / 3)`,
                        flexShrink: 0,
                      }}
                    >
                      <VenueCard {...venue} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {onCarouselIndexChange && (
                <>
                  <button
                    onClick={() => onCarouselIndexChange(carouselIndex === 0 ? maxIndex : carouselIndex - 1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                    aria-label="Previous"
                  >
                    <span className="material-symbols-outlined text-2xl">chevron_left</span>
                  </button>
                  <button
                    onClick={() => onCarouselIndexChange(carouselIndex === maxIndex ? 0 : carouselIndex + 1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                    aria-label="Next"
                  >
                    <span className="material-symbols-outlined text-2xl">chevron_right</span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-8">
                    {venues.length > 2 && Array.from({ length: maxIndex + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => onCarouselIndexChange(index)}
                        className={`w-2 h-1 rounded-full transition-all ${
                          index === carouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}
