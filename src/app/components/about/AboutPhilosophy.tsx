'use client';

import { useState } from 'react';

interface PhilosophyItem {
  title: string;
  description: string;
}

export default function AboutPhilosophy() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const philosophies: PhilosophyItem[] = [
    {
      title: "Why Silence",
      description:
        "Most environments amplify input. More noise. More opinion. More interruption. Clarity does not survive in that.\nSilence is not absence. It is filtration. When signal is protected, thinking stabilizes.",
    },
    {
      title: "Why Club",
      description:
        "Attention is not only individual. It is cultural. The people around you shape what is normal.\nOpen environments dilute this. Constant turnover resets the room. A club preserves it. Same standards. Same understanding. No explanation required.",
    },
    {
      title: "Why Bhigwan",
      description:
        "Distance is part of the design. Far enough to interrupt routine. Close enough to not require escape.\nYou don't disappear to come here. You arrive differently.",
    },
    {
      title: "Why Open-Source Research",
      description:
        "This is not a finished system. It is being discovered.\nSilence does not produce the same outcome for everyone. What works cannot be assumed. It has to be observed.\nThe system stays open—not in code, but in experience. Each person who enters becomes part of that observation. What returns is not feedback. It is signal.",
    },
  ];

  const icons = ['account_tree', 'volume_off', 'groups', 'landscape', 'science'];

  const toggleDropdown = (index: number) => {
    setExpandedIndices(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="py-8 bg-earth-950 border-b border-earth-800" id="philosophy">
      <div className="w-full px-4 md:px-16">
        <div className="mb-6">
          <h2 className="text-3xl font-normal text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Why This Structure
          </h2>
          <p className="text-earth-300 text-base leading-relaxed mt-2 ">
            This is not a format. It is a response. To what breaks attention. To what fragments thinking. To what makes clarity unreliable.
          </p>
        </div>
        {/* Dropdown Bars */}
        <div className="space-y-6">
          {philosophies.map((philosophy, index) => (
            <div key={index}>
              {/* Dropdown Header */}
              <div
                className={`flex items-center gap-4 cursor-pointer ${expandedIndices.has(index) ? 'mb-6' : 'mb-0'}`}
                onClick={() => toggleDropdown(index)}
              >
                <h2 className="text-2xl font-normal text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {String(index + 1).padStart(2, '0')}. {philosophy.title}
                </h2>
                <div className="h-px bg-earth-700 flex-grow"></div>
                <span className="material-symbols-outlined text-gold-500 text-3xl">{icons[index]}</span>
                <button className="text-gold-500 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {expandedIndices.has(index) ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </div>

              {/* Dropdown Content */}
              {expandedIndices.has(index) && (
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