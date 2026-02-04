'use client';

import { useState, useEffect, useRef } from 'react';
import CarouselCard from '../CarouselCard';

interface PhilosophyItem {
  title: string;
  description: string;
  items: string[];
  image: string;
}

function PhilosophyCard({ title, description, items, image }: PhilosophyItem) {
  // Format items as a bullet list with line breaks
  const formattedDescription = items.map(item => `• ${item}`).join('\n');

  return (
    <div className="block">
      <CarouselCard
        title={title}
        description={formattedDescription}
        images={[image]}
        className="rounded-lg"
        overlayColor="gold-solid"
        overlayHeight={50}
        showBorderLine={false}
      />
    </div>
  );
}

export default function AboutPhilosophy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const philosophies: PhilosophyItem[] = [
   
    
     {
      title: "Why Silence",
      description: "Silence is functional, not aesthetic",
      items: [
        "Silence is functional, not aesthetic",
        "Fewer external signals reveal patterns",
        "Thought slows, perception sharpens",
        "Decisions surface without pressure"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T"
    },
    {
      title: "Why a Club",
      description: "Entry is voluntary and self-selected",
      items: [
        "Entry is voluntary and self-selected",
        "Shared norms protect the space",
        "No audiences, no performances",
        "Belonging is defined by how the space is held"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb"
    },
    {
      title: "Why Bhigwan",
      description: "Open land with long horizons",
      items: [
        "Open land with long horizons",
        "Seasonal rhythm shaped by water",
        "Naturally low stimulation",
        "Time moves slower here"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd"
    },
    {
      title: "Why We Experiment",
      description: "The Silent Club is not a fixed model",
      items: [
        "The Silent Club is not a fixed model",
        "Spaces and formats are tested carefully",
        "Anything that creates noise is removed",
        "Nothing stays unless it earns its place"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR"
    }
  ];

  // Create infinite loop by duplicating items
  const duplicatedPhilosophies = [...philosophies, ...philosophies];

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to 0 when we reach the original array length (for infinite effect)
        return next >= philosophies.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [philosophies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? philosophies.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === philosophies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 min-h-[100vh] bg-earth-950 border-b border-earth-800 flex items-center" id="philosophy">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>The 4 why’s Behind The Silent Club</h3>
          <p className="text-[#e7dfd3] font-body text-[15px] max-w-full">
            These choices were not symbolic.<br/>They were made to protect attention.
          </p>
        </div>
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                willChange: "transform",
              }}
            >
              {duplicatedPhilosophies.map((philosophy, index) => (
                <div
                  key={`${philosophy.title}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - 4rem) / 3)`,
                    flexShrink: 0,
                  }}
                >
                  <PhilosophyCard
                    title={philosophy.title}
                    description={philosophy.description}
                    items={philosophy.items}
                    image={philosophy.image}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {philosophies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-1 rounded-full transition-all ${index === currentIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}