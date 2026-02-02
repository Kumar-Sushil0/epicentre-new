"use client";

import { useEffect, useMemo, useState } from "react";

export default function VenueCategoryNav() {
  const categories = useMemo(
    () => [
      { id: "collective", label: "Collective" },
      { id: "intimate", label: "Intimate" },
      { id: "physical", label: "Physical" },
      { id: "creative", label: "Creative" },
      { id: "living", label: "Living" },
      { id: "nature", label: "Nature" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(categories[0]?.id ?? "collective");

  useEffect(() => {
    const ids = new Set(categories.map((c) => c.id));

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.has(hash)) setActiveId(hash);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, [categories]);

  useEffect(() => {
    const ids = new Set(categories.map((c) => c.id));
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!ids.has(id)) continue;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav className="sticky top-[64px] z-40 bg-earth-950/95 backdrop-blur border-b border-earth-700 shadow-xl overflow-x-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10">
        <div className="flex whitespace-nowrap min-w-full sm:justify-center">
          {categories.map((category) => {
            const isActive = activeId === category.id;
            return (
              <a
                key={category.id}
                className={`group flex items-center justify-center border-b-2 py-4 px-6 transition-all ${
                  isActive
                    ? "border-gold-500"
                    : "border-transparent hover:border-gold-500"
                }`}
                href={`#${category.id}`}
                onClick={() => setActiveId(category.id)}
              >
                <span
                  className={`text-sm font-bold tracking-wide font-body transition-colors ${
                    isActive
                      ? "text-gold-500"
                      : "text-earth-300 group-hover:text-earth-50"
                  }`}
                >
                  {category.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
