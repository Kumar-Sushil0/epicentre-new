"use client";

import { useRef, useState } from "react";

interface TimelineZone {
  name: string;
  preciseDate: string; // Format: "January 27, 2026"
  description: string;
}

interface TimelineMonth {
  month: string; // Format: "Jan"
  year: string;
  zones: TimelineZone[];
}

const timelineData: TimelineMonth[] = [
  {
    month: "Jan",
    year: "2026",
    zones: [
      {
        name: "Main Building",
        preciseDate: "January 27, 2026",
        description: "The main building serves as the central hub of the development, featuring state-of-the-art facilities and modern architectural design. It includes administrative offices, meeting rooms, and common areas designed for collaboration and productivity.",
      },
    ],
  },
  {
    month: "Feb",
    year: "2026",
    zones: [
      {
        name: "Main Garden",
        preciseDate: "February 23, 2026",
        description: "A beautifully landscaped garden space that provides a serene environment for relaxation and outdoor activities. The garden features native plants, walking paths, and seating areas for community gatherings.",
      },
    ],
  },
  {
    month: "Mar",
    year: "2026",
    zones: [
      {
        name: "Outdoor Gym & Decks",
        preciseDate: "March 23, 2026",
        description: "An outdoor fitness facility equipped with modern exercise equipment and spacious deck areas. Designed for health and wellness activities, offering both covered and open-air workout spaces.",
      },
      {
        name: "Regeneration Zones",
        preciseDate: "March 1, 2026",
        description: "Dedicated spaces for rest, recovery, and mental rejuvenation. These zones are designed with natural elements and quiet environments to support personal well-being and reflection.",
      },
      {
        name: "Silent Retreat Workshop",
        preciseDate: "March 26, 2026",
        description: "A three-day immersive workshop focused on mindfulness, meditation, and inner stillness. Participants will engage in guided silence practices, contemplative walks, and group reflection sessions in a supportive environment.",
      },
      {
        name: "Deep Work Residency",
        preciseDate: "March 15, 2026",
        description: "A week-long intensive program for focused creative and professional work. Participants receive dedicated workspace, minimal distractions, and structured silence periods to support deep concentration and meaningful progress on complex projects.",
      },
    ],
  },
  {
    month: "Apr",
    year: "2026",
    zones: [
      {
        name: "Multi Event Hall",
        preciseDate: "April 15, 2026",
        description: "A versatile event space capable of hosting various gatherings, workshops, and community events. The hall features flexible layouts and modern amenities to accommodate different event types.",
      },
    ],
  },
  {
    month: "May",
    year: "2026",
    zones: [
      {
        name: "Soul Site",
        preciseDate: "May 10, 2026",
        description: "A contemplative space designed for spiritual practices, meditation, and personal reflection. This area provides a peaceful retreat for individuals seeking quiet and introspection.",
      },
    ],
  },
  {
    month: "Jun",
    year: "2026",
    zones: [
      {
        name: "Welcome Lounge",
        preciseDate: "June 5, 2026",
        description: "A welcoming reception area that serves as the first point of contact for visitors. The lounge features comfortable seating, information displays, and a warm, inviting atmosphere.",
      },
    ],
  },
  {
    month: "Jul",
    year: "2026",
    zones: [
      {
        name: "Sports Courts",
        preciseDate: "July 20, 2026",
        description: "Multi-purpose sports facilities designed for various athletic activities. The courts are equipped with proper surfaces and equipment to support a range of sports and recreational activities.",
      },
    ],
  },
  {
    month: "Aug",
    year: "2026",
    zones: [
      {
        name: "Animals, Hydroponic, Garage",
        preciseDate: "August 12, 2026",
        description: "A comprehensive facility housing animal care areas, hydroponic growing systems, and storage garage. This integrated space supports sustainable practices and operational needs.",
      },
    ],
  },
  {
    month: "Sep",
    year: "2026",
    zones: [
      {
        name: "Recovery Lab",
        preciseDate: "September 8, 2026",
        description: "A specialized facility focused on physical recovery and rehabilitation. The lab includes equipment and spaces designed to support healing and wellness programs.",
      },
    ],
  },
  {
    month: "Oct",
    year: "2026",
    zones: [
      {
        name: "Hobby Studio & Creative Lab",
        preciseDate: "October 18, 2026",
        description: "Dedicated creative spaces for artistic pursuits, hobbies, and innovation. These studios provide tools, materials, and environments that inspire creativity and hands-on learning.",
      },
    ],
  },
  {
    month: "Nov",
    year: "2026",
    zones: [
      {
        name: "Recording Room",
        preciseDate: "November 3, 2026",
        description: "A professional recording facility equipped with modern audio equipment. Designed for music production, podcasting, and other audio-related creative projects.",
      },
    ],
  },
  {
    month: "Dec",
    year: "2026",
    zones: [
      {
        name: "Cabins",
        preciseDate: "December 15, 2026",
        description: "Comfortable accommodation units designed for extended stays. The cabins offer a blend of modern amenities and natural surroundings, providing a peaceful retreat experience.",
      },
    ],
  },
  {
    month: "Jan",
    year: "2027",
    zones: [
      {
        name: "Restaurant",
        preciseDate: "January 22, 2027",
        description: "A dining facility offering quality meals in a welcoming atmosphere. The restaurant features locally sourced ingredients and a menu designed to support health and wellness.",
      },
    ],
  },
  {
    month: "Feb",
    year: "2027",
    zones: [
      {
        name: "Jogging Loop",
        preciseDate: "February 14, 2027",
        description: "A scenic running and walking path that winds through the property. The loop is designed to provide a safe and enjoyable route for exercise and outdoor recreation.",
      },
    ],
  },
];

export default function DevelopmentTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedZones, setExpandedZones] = useState<Set<string>>(new Set());

  const toggleZone = (zoneId: string) => {
    setExpandedZones((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(zoneId)) {
        newSet.delete(zoneId);
      } else {
        newSet.add(zoneId);
      }
      return newSet;
    });
  };

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
    <div className="w-full py-2">
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollContainerRef}
          data-timeline-scroll
          className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="inline-flex gap-8 min-w-full px-4 items-start">
            {timelineData.map((month, index) => (
              <div key={`${month.year}-${month.month}-${index}`} className="shrink-0 w-64">
                {/* Month Header */}
                <div className="sticky top-0 bg-transparent backdrop-blur-sm py-3 mb-4 border-b-2 border-gold-500">
                  <h4 className="text-xl font-bold text-gold-500 font-display">
                    {month.month} {month.year}
                  </h4>
                </div>
                {/* Zones */}
                <div className="space-y-4">
                  {month.zones.map((zone, zoneIndex) => {
                    const zoneId = `${month.year}-${month.month}-${zoneIndex}`;
                    const isExpanded = expandedZones.has(zoneId);
                    return (
                      <div
                        key={zoneIndex}
                        className="relative pl-6 pb-4 border-l-2 border-gold-500"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-gold-500 ring-4 ring-earth-900 transition-transform" />
                        {/* Zone Card */}
                        <div className="bg-transparent rounded-lg border border-earth-700/30 overflow-hidden transition-all duration-300">
                          <button
                            onClick={() => toggleZone(zoneId)}
                            className="w-full text-left p-3 hover:bg-earth-700/20 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-earth-50 font-display mb-1">
                                  {zone.name}
                                </h5>
                                <p className="text-sm text-earth-300/60 font-body">
                                  {zone.preciseDate}
                                </p>
                                {isExpanded && (
                                  <p className="text-sm text-earth-300/80 font-body leading-relaxed">
                                    {zone.description}
                                  </p>
                                )}
                              </div>
                              {/* Expand/Collapse Icon */}
                              <div className="shrink-0">
                                <svg
                                  className={`w-5 h-5 text-gold-500 transition-transform ${isExpanded ? "rotate-180" : ""
                                    }`}
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
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
