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
      title: "Why This Structure",
      description:
        "These decisions exist to protect what the estate calls cognitive sovereignty, the condition in which your attention belongs entirely to you.",
    },
    {
      title: "Why Silence",
      description:
        "Most environments amplify input. Silence reduces distortion. Clear thinking requires signal control. The estate is built on this principle.",
    },
    {
      title: "Why Club",
      description:
        "Attention requires cultural coherence. Limited membership preserves the density of the environment, protects the anonymity of members, and prevents cultural drift. When the room changes every day, the environment cannot stabilize. Membership solves this.",
    },
    {
      title: "Why Bhigwan",
      description:
        "Distance matters. Bhigwan is far enough from Pune and Mumbai to interrupt routine, and close enough to remain accessible. The location is not incidental, it is a design decision.",
    },
    {
      title: "Why Sequencing by Cohort",
      description:
        "Cohorts shape culture. Each annual cohort centres a specific life-stage group so that the shared context among members remains deep and the clarity of intent is preserved. Mixing life stages dilutes both.",
    },
  ];

  const icons = ['account_tree', 'volume_off', 'groups', 'landscape', 'science'];

  const toggleDropdown = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-earth-950 border-b border-earth-800" id="philosophy">
      <div className="w-full px-4 md:px-16">
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