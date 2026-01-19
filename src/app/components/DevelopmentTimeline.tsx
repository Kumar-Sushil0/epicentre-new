"use client";

import { useRef, useState } from "react";

interface TimelineZone {
  name: string;
  date: string;
  content?: string;
}

interface TimelineQuarter {
  month: string;
  year: string;
  phase: string;
  zones: TimelineZone[];
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const zoneTemplates = [
  { name: "Main Building", content: "The main building serves as the central hub of the development, featuring state-of-the-art facilities and modern architectural design. It includes administrative offices, meeting rooms, and common areas designed for collaboration and productivity." },
  { name: "Main Garden", content: "A beautifully landscaped garden space that provides a serene environment for relaxation and outdoor activities. The garden features native plants, walking paths, and seating areas for community gatherings and events." },
  { name: "Outdoor Gym & Decks", content: "An expansive outdoor fitness area equipped with modern exercise equipment and multiple deck levels. This space offers panoramic views and is designed for year-round use with covered areas and weather-resistant equipment." },
  { name: "Regeneration Zones", content: "Dedicated spaces for wellness and recovery, featuring meditation areas, quiet zones, and natural elements. These zones are designed to promote mental and physical regeneration through carefully curated environments." },
  { name: "Multi Event Hall", content: "A versatile event space capable of hosting various gatherings, from conferences and workshops to celebrations. The hall features flexible layouts, advanced audio-visual systems, and can accommodate large groups with ease." },
  { name: "Soul Site", content: "A spiritual and contemplative space designed for reflection and inner peace. The Soul Site features tranquil surroundings, meditation facilities, and areas for spiritual practices and personal growth activities." },
  { name: "Welcome Lounge", content: "An inviting reception area that serves as the first point of contact for visitors. The lounge features comfortable seating, refreshment stations, and information displays, creating a warm and welcoming atmosphere for all guests." },
  { name: "Sports Courts", content: "Multi-purpose sports facilities including basketball, tennis, and volleyball courts. These courts are designed with professional-grade surfaces and lighting, suitable for both recreational play and competitive events." },
  { name: "Animals, Hydroponic, Garage", content: "An integrated facility combining animal care areas, hydroponic growing systems, and vehicle storage. This innovative space supports sustainable practices through advanced hydroponic technology while providing proper accommodations for animals and secure parking." },
  { name: "Recovery Lab", content: "A specialized facility focused on physical and mental recovery. The lab includes therapy equipment, relaxation pods, and wellness technologies designed to support rehabilitation and recovery processes for residents and visitors." },
  { name: "Hobby Studio & Creative Lab", content: "A vibrant creative space equipped with tools and materials for various artistic pursuits. The studio supports painting, sculpting, crafting, and other creative activities, providing an inspiring environment for artistic expression and hobby development." },
  { name: "Recording Room", content: "A professional-grade recording studio with acoustic treatment and high-quality audio equipment. This space is designed for music production, podcasting, voice-over work, and other audio recording needs, featuring soundproofing and modern recording technology." },
  { name: "Cabins", content: "Charming accommodation units designed for comfort and tranquility. Each cabin features modern amenities while maintaining a connection with nature, offering a peaceful retreat experience for guests seeking a unique stay." },
  { name: "Restaurant", content: "A full-service dining establishment offering a diverse menu of locally-sourced and international cuisine. The restaurant features both indoor and outdoor seating, a bar area, and can host private events and celebrations." },
  { name: "Jogging Loop", content: "A scenic running and walking trail that winds through the property, offering varying terrain and beautiful views. The loop is designed with proper lighting, distance markers, and rest areas, making it suitable for runners and walkers of all fitness levels." },
  { name: "Wellness Center", content: "A comprehensive wellness facility offering various health and fitness services. The center includes spa treatments, fitness classes, and wellness consultations in a serene and modern environment." },
  { name: "Library & Study Hall", content: "A quiet space for reading, studying, and research. The library features an extensive collection of books, comfortable seating areas, and study rooms for individual or group work." },
  { name: "Community Kitchen", content: "A shared kitchen space designed for community cooking and culinary workshops. The kitchen is fully equipped with modern appliances and can accommodate cooking classes and group meal preparation." },
  { name: "Art Gallery", content: "An exhibition space showcasing local and international artwork. The gallery features rotating exhibitions, artist talks, and provides a platform for creative expression and cultural exchange." },
  { name: "Workshop Space", content: "A versatile workshop area equipped with tools and equipment for various hands-on projects. The space supports woodworking, metalworking, and other craft activities." },
  { name: "Swimming Pool", content: "An Olympic-sized swimming pool with modern filtration systems and poolside amenities. The facility includes changing rooms, sun decks, and is designed for both recreational swimming and competitive training." },
  { name: "Tennis Courts", content: "Professional-grade tennis courts with proper lighting for evening play. The courts feature high-quality surfaces and are suitable for both casual play and tournament events." },
  { name: "Meditation Pavilion", content: "A serene outdoor structure designed for meditation and mindfulness practices. The pavilion offers a peaceful retreat with natural surroundings and comfortable seating for group or individual meditation sessions." },
  { name: "Children's Play Area", content: "A safe and engaging play space designed for children of all ages. The area includes age-appropriate equipment, soft surfaces, and shaded areas for comfortable play throughout the day." },
];

const phases = [
  "Foundation Phase", "Expansion Phase", "Welcome Phase", "Activity Phase",
  "Creative Phase", "Hospitality Phase", "Final Phase", "Enhancement Phase",
  "Integration Phase", "Optimization Phase", "Completion Phase", "Launch Phase"
];

const generateTimelineData = (): TimelineQuarter[] => {
  const data: TimelineQuarter[] = [];
  let zoneIndex = 0;
  
  // Generate data for all months from Jan 2026 to Dec 2026
  for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
    const month = months[monthIdx];
    const year = 2026;
    const phaseIndex = data.length % phases.length;
    
    // Generate 1-3 zones per month
    const numZones = Math.floor(Math.random() * 3) + 1;
    const zones: TimelineZone[] = [];
    
    for (let i = 0; i < numZones; i++) {
      const template = zoneTemplates[zoneIndex % zoneTemplates.length];
      const day = Math.floor(Math.random() * 28) + 1; // Random day 1-28
      const fullMonthName = monthNames[monthIdx];
      
      zones.push({
        name: template.name,
        date: `${fullMonthName} ${day}, ${year}`,
        content: template.content
      });
      zoneIndex++;
    }
    
    data.push({
      month,
      year: year.toString(),
      phase: phases[phaseIndex],
      zones
    });
  }
  
  return data;
};

const timelineData = generateTimelineData();

export default function DevelopmentTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedZones, setExpandedZones] = useState<Set<string>>(new Set());
  
  const toggleZone = (zoneKey: string) => {
    setExpandedZones(prev => {
      const newSet = new Set(prev);
      if (newSet.has(zoneKey)) {
        newSet.delete(zoneKey);
      } else {
        newSet.add(zoneKey);
      }
      return newSet;
    });
  };

  // Redistribute zones so no period has more than 3 items
  const redistributedPeriods: TimelineQuarter[] = [];
  let overflow: TimelineZone[] = [];
  
  timelineData.forEach((period, index) => {
    // Add overflow from previous period
    const allZones = [...overflow, ...period.zones];
    overflow = [];
    
    // If more than 3 zones, keep 3 and move rest to overflow
    if (allZones.length > 3) {
      redistributedPeriods.push({
        ...period,
        zones: allZones.slice(0, 3),
      });
      overflow = allZones.slice(3);
    } else {
      redistributedPeriods.push({
        ...period,
        zones: allZones,
      });
    }
  });
  
  // If there's still overflow at the end, add it to the last period
  if (overflow.length > 0 && redistributedPeriods.length > 0) {
    const lastPeriod = redistributedPeriods[redistributedPeriods.length - 1];
    lastPeriod.zones = [...lastPeriod.zones, ...overflow];
  }
  
  const splitPeriods = redistributedPeriods;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-2">
      <div className="relative">
        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="inline-flex gap-8 min-w-full px-4 items-start">
            {splitPeriods.map((period, index) => (
              <>
                {/* Period Column */}
                <div key={`${period.year}-${period.month}-${index}`} className="shrink-0 w-56">
                  <div className="sticky top-0 bg-background/95 backdrop-blur-sm py-3 mb-4 border-b-2 border-[#00e87b]/30">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold text-[#00e87b]">
                        {period.month} {period.year}
                      </h4>
                      {/* Arrow next to title (except after last one) */}
                      {index < splitPeriods.length - 1 && (
                        <svg
                          className="w-10 h-6 text-[#00e87b] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 40 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2 12h30m0 0l-6-6m6 6l-6 6"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {period.zones.map((zone, zoneIndex) => {
                      const zoneKey = `${period.year}-${period.month}-${zoneIndex}`;
                      const isExpanded = expandedZones.has(zoneKey);
                      return (
                        <div
                          key={zoneIndex}
                          className="group relative pl-6 pb-4 border-l-2 border-[#00e87b]/30 hover:border-[#00e87b] transition-all duration-300"
                        >
                          <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#00e87b] ring-4 ring-background group-hover:scale-150 transition-transform" />
                          <div className="bg-foreground/5 group-hover:bg-[#00e87b]/10 rounded-lg p-3 border border-foreground/10 group-hover:border-[#00e87b]/50 transition-all duration-300">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex-1">
                                <p className="text-sm font-medium">{zone.name}</p>
                                <p className="text-xs text-foreground/60 mt-0.5">{zone.date}</p>
                              </div>
                              <button
                                onClick={() => toggleZone(zoneKey)}
                                className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#00e87b]/20 transition-colors"
                                aria-label={isExpanded ? "Collapse" : "Expand"}
                              >
                                <svg
                                  className={`w-4 h-4 text-[#00e87b] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                            </div>
                            {isExpanded && zone.content && (
                              <div className="mt-3 pt-3 border-t border-foreground/10">
                                <p className="text-xs text-foreground/70 leading-relaxed">
                                  {zone.content}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollLeft}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#00e87b]/10 hover:bg-[#00e87b]/20 border-2 border-[#00e87b]/30 hover:border-[#00e87b] transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-[#00e87b] group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#00e87b]/10 hover:bg-[#00e87b]/20 border-2 border-[#00e87b]/30 hover:border-[#00e87b] transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-[#00e87b] group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
