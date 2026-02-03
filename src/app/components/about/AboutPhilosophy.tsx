'use client';

import { useState } from 'react';

interface ContentItem {
  title: string;
  items: string[];
}

export default function AboutPhilosophy() {
  const [activeIndex, setActiveIndex] = useState(0);

  const content: ContentItem[] = [
    {
      title: "Why Silence",
      items: [
        "Silence is functional, not aesthetic",
        "Fewer external signals reveal patterns", 
        "Thought slows, perception sharpens",
        "Decisions surface without pressure"
      ]
    },
    {
      title: "Why Bhigwan",
      items: [
        "Open land with long horizons",
        "Seasonal rhythm shaped by water",
        "Naturally low stimulation", 
        "Time moves slower here"
      ]
    },
    {
      title: "Why a Club",
      items: [
        "Entry is voluntary and self-selected",
        "Shared norms protect the space",
        "No audiences, no performances",
        "Belonging is defined by how the space is held"
      ]
    },
    {
      title: "Why We Experiment",
      items: [
        "The Silent Club is not a fixed model",
        "Spaces and formats are tested carefully",
        "Anything that creates noise is removed",
        "Nothing stays unless it earns its place"
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-earth-950 border-b border-earth-800">
      <div className="max-w-7xl mx-auto">
        {/* Banner Layout */}
        <div className="flex flex-col lg:flex-row border border-earth-800 rounded-lg overflow-hidden bg-earth-900/30 relative">
          
          {/* Left Box - Titles */}
          <div className="lg:w-1/2 border-b lg:border-b-0 relative z-10">
            {content.map((item, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer transition-all duration-300 ${
                  index === content.length - 1 && activeIndex !== index ? 'border-b-0' : 'border-b border-earth-800'
                } ${
                  activeIndex === index 
                    ? 'border-t-2 border-l-2 border-b-2 border-gold-500 bg-transparent relative z-20' 
                    : 'hover:bg-earth-800/50'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  marginLeft: activeIndex === index ? '0' : '0',
                }}
              >
                <h3 className={`text-lg md:text-xl font-medium leading-tight transition-colors duration-300 ${
                  activeIndex === index ? 'text-gold-500' : 'text-earth-200'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Box - Active Content */}
          <div className="lg:w-1/2 py-4 pr-4 pl-6 border-t-2 border-r-2 border-b-2 border-gold-500 bg-transparent relative flex items-center">
            {/* Custom left border with gap */}
            <div 
              className="absolute left-0 top-0 w-px bg-gold-500"
              style={{
                height: `${(activeIndex) * 25}%`,
              }}
            />
            <div 
              className="absolute left-0 bottom-0 w-px bg-gold-500"
              style={{
                height: `${(3 - activeIndex) * 25}%`,
              }}
            />
            
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 w-full" key={activeIndex}>
              <ul className="space-y-3">
                {content[activeIndex].items.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 group">
                    <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 transition-colors duration-300"></span>
                    <span className="leading-relaxed font-light text-sm" style={{ color: '#e7dfd3' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}