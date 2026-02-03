'use client';

import { useState } from 'react';

type TabKey = 1 | 2 | 3 | 4;

interface ContentItem {
  title: string;
  items: string[];
}

export default function AboutPhilosophy() {
  const [activeTab, setActiveTab] = useState<TabKey>(1);

  const content: Record<TabKey, ContentItem> = {
    1: {
      title: "Why Silence",
      items: [
        "Silence is functional, not aesthetic",
        "Fewer external signals reveal patterns",
        "Thought slows, perception sharpens",
        "Decisions surface without pressure"
      ]
    },
    2: {
      title: "Why Bhigwan",
      items: [
        "Open land with long horizons",
        "Seasonal rhythm shaped by water",
        "Naturally low stimulation",
        "Time moves slower here"
      ]
    },
    3: {
      title: "Why a Club",
      items: [
        "Entry is voluntary and self-selected",
        "Shared norms protect the space",
        "No audiences, no performances",
        "Belonging is defined by how the space is held"
      ]
    },
    4: {
      title: "Why We Experiment",
      items: [
        "The Silent Club is not a fixed model",
        "Spaces and formats are tested carefully",
        "Anything that creates noise is removed",
        "Nothing stays unless it earns its place"
      ]
    }
  };

  return (
    <section className="relative py-32 px-6 md:px-12 bg-earth-950 border-b border-earth-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Navigation Column */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col justify-between lg:justify-start gap-4 lg:gap-8 border-b lg:border-b-0 lg:border-r border-earth-800 pb-8 lg:pb-0 lg:pr-8 overflow-x-auto lg:overflow-visible custom-scrollbar-hide">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setActiveTab(num as TabKey)}
                className={`text-left group flex items-center gap-4 transition-all duration-300 min-w-max pb-2 lg:pb-0 cursor-pointer ${activeTab === num ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className={`text-xl font-display ${activeTab === num ? 'text-gold-500' : 'text-earth-300'}`}>0{num}</span>
                <span className={`text-2xl font-serif hidden lg:block ${activeTab === num ? 'text-earth-100' : 'text-earth-300'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {content[num as TabKey].title}
                </span>
                <span className={`h-px w-8 bg-gold-500 block lg:hidden ${activeTab === num ? 'opacity-100' : 'opacity-0'}`}></span>
              </button>
            ))}
          </div>

          {/* Content Column */}
          <div className="lg:col-span-8 min-h-[300px]">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
              <h3 className="text-4xl md:text-5xl text-gold-500 font-serif italic mb-12 block lg:hidden" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {content[activeTab].title}
              </h3>

              <ul className="space-y-6 mb-16">
                {content[activeTab].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-5 group">
                    {/* Diamond Bullet Point */}
                    <span className="shrink-0 w-2.5 h-2.5 bg-gold-500 rotate-45 mt-3 group-hover:bg-gold-400 shadow-sm shadow-gold-500/20 transition-all duration-300"></span>
                    <span className="text-xl md:text-2xl font-light text-earth-100 font-body leading-relaxed">
                      {item}
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