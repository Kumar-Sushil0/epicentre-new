'use client';

import { useState } from 'react';

interface PhilosophyItem {
  title: string;
  description: string;
}

export default function AboutPhilosophy() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const philosophies: PhilosophyItem[] = [
    {
      title: "Why Silence",
      description: "Most environments amplify input.\nSilence reduces distortion.\nClear thinking requires signal control.",
    },
    {
      title: "Why Membership",
      description: "Attention requires cultural coherence.\nLimited membership preserves density,\nprotects anonymity, and prevents drift.",
    },
    {
      title: "Why Bhigwan",
      description: "Distance matters.\nFar enough to interrupt routine.\nClose enough to remain accessible.",
    },
    {
      title: "Why Sequencing",
      description: "Cohorts shape culture.\nEach year centers a specific life-stage group\nto preserve depth and clarity of intent.",
    }
  ];

  const icons = ['volume_off', 'groups', 'landscape', 'science'];

  const toggleDropdown = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-earth-950 border-b border-earth-800" id="philosophy">
      <div className="w-full px-4 md:px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-normal mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Why This Structure</h3>
          <p className="text-[#e7dfd3] font-body text-[15px] max-w-full">
            These decisions exist to protect cognitive sovereignty.
          </p>
        </div>

        {/* Dropdown Bars */}
        <div className="space-y-6">
          {philosophies.map((philosophy, index) => (
            <div key={index}>
              {/* Dropdown Header */}
              <div
                className={`flex items-center gap-4 cursor-pointer ${expandedIndex === index ? 'mb-6' : 'mb-0'}`}
                onClick={() => toggleDropdown(index)}
              >
                <h2 className="text-2xl font-normal text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {String(index + 1).padStart(2, '0')}. {philosophy.title}
                </h2>
                <div className="h-px bg-earth-700 flex-grow"></div>
                <span className="material-symbols-outlined text-gold-500 text-3xl">{icons[index]}</span>
                <button className="text-gold-500 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {expandedIndex === index ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </div>

              {/* Dropdown Content */}
              {expandedIndex === index && (
                <div className="mb-8">
                  <p className="text-earth-300 text-base leading-relaxed whitespace-pre-line">
                    {philosophy.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}