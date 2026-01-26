"use client";

import { useMemo, useState } from "react";

interface ExperiencesCategoryNavProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export default function ExperiencesCategoryNav({
  selectedTags,
  onTagsChange,
}: ExperiencesCategoryNavProps) {
  const categories = useMemo(
    () => [
      { id: "morning", label: "Morning" },
      { id: "afternoon", label: "Afternoon" },
      { id: "evening", label: "Evening" },
      { id: "night", label: "Night" },
    ],
    []
  );

  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onTagsChange(selectedTags.filter((t) => t !== tagId));
    } else {
      onTagsChange([...selectedTags, tagId]);
    }
  };

  return (
    <nav className="sticky top-[72px] z-40 bg-earth-950/95 backdrop-blur border-b border-earth-700 shadow-xl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const isSelected = selectedTags.includes(category.id);
            return (
              <button
                key={category.id}
                onClick={() => toggleTag(category.id)}
                className={`group flex items-center justify-center px-4 py-1.5 rounded-full transition-all ${
                  isSelected
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                    : "bg-earth-900/30 text-earth-400 border border-earth-700/30 hover:border-gold-500/30 hover:text-gold-400/70"
                }`}
              >
                <span className="text-xs font-medium tracking-wide font-body">
                  {category.label}
                </span>
              </button>
            );
          })}
          {selectedTags.length > 0 && (
            <button
              onClick={() => onTagsChange([])}
              className="text-xs text-earth-500 hover:text-earth-300 transition-colors px-2 py-1 underline underline-offset-2 decoration-2"
            >
              Clear all <span className="text-lg font-bold">×</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
