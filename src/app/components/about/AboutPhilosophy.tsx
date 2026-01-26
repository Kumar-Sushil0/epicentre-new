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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-gold-500 font-body text-xs tracking-[0.2em] uppercase mb-4 block">Core Inquiry</span>
            <h2 className="text-earth-50 text-4xl font-display font-medium mb-8">The System Behind the Space</h2>
            <div className="space-y-4 text-earth-50/70 font-body text-sm leading-relaxed">
              <p>A behavioral system expressed as a place</p>
              <div>
                <p className="mb-2">Works through a simple loop:</p>
                <ul className="ml-4 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 text-sm mt-1">•</span>
                    <span>environment → attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 text-sm mt-1">•</span>
                    <span>attention → perception</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 text-sm mt-1">•</span>
                    <span>perception → choice</span>
                  </li>
                </ul>
              </div>
              <p>No coaching, frameworks, or programs</p>
              <p>Space, rhythm, constraint, and absence do the work</p>
              <div className="pt-2">
                <p className="text-earth-50 font-medium">This is not a retreat.</p>
                <p className="text-gold-500/80 italic text-lg">It is infrastructure for self-observation.</p>
              </div>
            </div>
          </div>
          <div className="bg-earth-900 p-10 border border-earth-700 rounded-lg">
            <h3 className="text-gold-500 text-xl font-display italic mb-6">{content[activeTab].title}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveTab(1)}
                  className={`font-display text-2xl transition-colors ${activeTab === 1 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
                >
                  01
                </button>
                <div className="h-px flex-grow bg-gold-500/20"></div>
                <button 
                  onClick={() => setActiveTab(2)}
                  className={`font-display text-2xl transition-colors ${activeTab === 2 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
                >
                  02
                </button>
                <div className="h-px flex-grow bg-gold-500/20"></div>
                <button 
                  onClick={() => setActiveTab(3)}
                  className={`font-display text-2xl transition-colors ${activeTab === 3 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
                >
                  03
                </button>
                <div className="h-px flex-grow bg-gold-500/20"></div>
                <button 
                  onClick={() => setActiveTab(4)}
                  className={`font-display text-2xl transition-colors ${activeTab === 4 ? 'text-gold-500' : 'text-earth-50/40 hover:text-earth-50/60'}`}
                >
                  04
                </button>
              </div>
              <ul className="space-y-4 text-earth-50/80 text-lg font-body font-light leading-relaxed mb-8">
                {content[activeTab].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold-500 text-sm mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gold-500/80 italic text-xl font-light mb-4">
                {content[activeTab].closing}
              </p>
              <div className="flex items-center justify-between pt-4 opacity-50">
                <span className="material-symbols-outlined text-gold-500">distance</span>
                <span className="material-symbols-outlined text-gold-500">arrow_forward</span>
                <span className="material-symbols-outlined text-gold-500">visibility</span>
                <span className="material-symbols-outlined text-gold-500">arrow_forward</span>
                <span className="material-symbols-outlined text-gold-500">ads_click</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}