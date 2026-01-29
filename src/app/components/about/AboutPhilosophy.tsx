'use client';

import { useState } from 'react';

type TabKey = 1 | 2 | 3 | 4;

interface ContentItem {
  title: string;
  items: string[];
  closing: string;
}

export default function AboutPhilosophy() {
  const [activeTab, setActiveTab] = useState<TabKey>(1);

  const content: Record<TabKey, ContentItem> = {
    1: {
      title: "Why Silence",
      items: [
        "Silence is functional, not aesthetic",
        "Fewer external signals reveal internal patterns",
        "Thought slows, perception sharpens",
        "Decisions surface without pressure"
      ],
      closing: "Silence is used as a design material."
    },
    2: {
      title: "Why Bhigwan",
      items: [
        "Open land with long horizons",
        "Seasonal rhythm shaped by water, wind, and migration",
        "Naturally low stimulation",
        "Time moves slower without being managed"
      ],
      closing: "The landscape holds silence on its own."
    },
    3: {
      title: "Why a Club",
      items: [
        "Entry is voluntary and self-selected",
        "Shared norms protect the space",
        "No audiences, no performances",
        "Belonging is defined by how the space is held"
      ],
      closing: "A club works through agreement, not enforcement."
    },
    4: {
      title: "Why We Experiment",
      items: [
        "The Silent Club is not a fixed model",
        "Spaces and formats are tested carefully",
        "Anything that creates noise is removed",
        "Nothing stays unless it earns its place"
      ],
      closing: "Experimentation is environmental, not personal."
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-earth-950 border-b border-earth-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-earth-50/70 font-body text-lg leading-relaxed max-w-4xl mx-auto">
           
          </div>
        </div>
        
        <div className="p-10 max-w-4xl mx-auto relative">
          <h3 className="text-gold-500 text-xl italic mb-6 max-w-2xl mx-auto px-8" style={{ fontFamily: 'Trirong, serif' }}>{content[activeTab].title}</h3>
           <div className="flex items-center gap-4 pt-4 max-w-2xl mx-auto px-8">
              <button 
                onClick={() => setActiveTab(1)}
                className={`font-display text-2xl transition-colors ${activeTab === 1 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
              >
                01
              </button>
              <div className="h-px w-16 bg-gold-500/20"></div>
              <button 
                onClick={() => setActiveTab(2)}
                className={`font-display text-2xl transition-colors ${activeTab === 2 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
              >
                02
              </button>
              <div className="h-px w-16 bg-gold-500/20"></div>
              <button 
                onClick={() => setActiveTab(3)}
                className={`font-display text-2xl transition-colors ${activeTab === 3 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
              >
                03
              </button>
              <div className="h-px w-16 bg-gold-500/20"></div>
              <button 
                onClick={() => setActiveTab(4)}
                className={`font-display text-2xl transition-colors ${activeTab === 4 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
              >
                04
              </button>
            </div>
          <div className="space-y-6">
            <ul className="space-y-4 text-earth-50/80 text-lg font-body font-light leading-relaxed mb-8 max-w-2xl mx-auto px-8">
              {content[activeTab].items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold-500 text-sm mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gold-500/80 italic text-xl font-light mb-4 max-w-2xl mx-auto px-8">
              {content[activeTab].closing}
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}