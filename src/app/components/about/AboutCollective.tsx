'use client';

import { useState, useEffect, useRef } from 'react';
import CarouselCard from '../CarouselCard';

interface CollectiveMember {
  id: number;
  quarter: string;
  name: string;
  image: string;
  focus: string;
  approach: string;
}

function MemberCard({ member }: { member: CollectiveMember }) {
  const formattedDescription = `${member.focus}\n${member.approach}`;
  const titleWithQuarter = `${member.name} ${member.quarter}`;

  const socialIcons = [
    {
      href: "#",
      icon: 'linkedin' as const,
      label: "LinkedIn Profile"
    },
    {
      href: "#",
      icon: 'website' as const,
      label: "Personal Website"
    }
  ];

  return (
    <div className="block">
      <CarouselCard
        title={member.name}
        hoverTitle={titleWithQuarter}
        description={formattedDescription}
        images={[member.image]}
        className="rounded-lg"
        overlayColor="gold-solid"
        overlayHeight={50}
        showBorderLine={false}
        titleSize="24px"
        socialIcons={socialIcons}
      />
    </div>
  );
}

export default function AboutCollective() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const collectiveMembers: CollectiveMember[] = [
    {
      id: 1,
      quarter: "Q 1",
      name: "Abhishek Banerjee",
      image: "/person1.jpg",
      focus: "Exploring how reduced input reshapes creative decision-making. Hosting closed experiments in silence, material, and time.",
      approach: ""
    },
    {
      id: 2,
      quarter: "Q 2",
      name: "Nikhita Tribewal",
      image: "/person2.jpg",
      focus: "Exploring how reduced input reshapes creative decision-making. Hosting closed experiments in silence, material, and time.",
      approach: ""
    },
    {
      id: 3,
      quarter: "Q 3",
      name: "Mohsin Memon",
      image: "/person3.jpg",
      focus: "Investigating how limits shape decision-making.",
      approach: "Using spatial restriction, time boxes, and rule subtraction as creative tools."
    },
    {
      id: 4,
      quarter: "Q 4",
      name: "Keatan Jadhav",
      image: "/person4.jpg",
      focus: "Exploring what remains when expression is slowed.",
      approach: "Holding small, invitation-only sessions around writing, form, and restraint."
    }
  ];

  // Create infinite loop by duplicating items
  const duplicatedMembers = [...collectiveMembers, ...collectiveMembers];

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return; // Pause when hovered
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to 0 when we reach the original array length (for infinite effect)
        return next >= collectiveMembers.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [collectiveMembers.length, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? collectiveMembers.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === collectiveMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 min-h-[100vh] bg-earth-900 border-b border-earth-800 flex items-center" id="collective">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Collective #001</h3>
          <div className="text-[#e7dfd3] font-body text-[15px] max-w-full space-y-3">
            <p>A rotating group of four creatives who steward the space across one year.Each quarter is held by one voice. The collective shapes the theme, rhythm, and experiments of that time.Each member holds one quarter. During that period, they are given full access, logistical support, and a protected sandbox to explore a shared theme.The Silent Club supports execution. The Collective defines direction.</p>
          </div>
        </div>
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                willChange: "transform",
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - 4rem) / 3)`,
                    flexShrink: 0,
                  }}
                >
                  <MemberCard member={member} />
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
            {collectiveMembers.map((_, index) => (
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