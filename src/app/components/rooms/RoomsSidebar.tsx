"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function RoomsSidebar() {
  const items = useMemo(
    () => [
      { id: "private-rooms", label: "Private Rooms" },
      { id: "dark-rooms", label: "Dark Rooms" },
      { id: "shared-dorms", label: "Shared Dorms" },
      { id: "minimalist-tents", label: "Minimalist Tents" },
      { id: "community-hall", label: "Community Hall" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "private-rooms");

  useEffect(() => {
    const ids = new Set(items.map((i) => i.id));

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.has(hash)) setActiveId(hash);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, [items]);

  useEffect(() => {
    const ids = new Set(items.map((i) => i.id));
    const sections = items
      .map((i) => document.getElementById(i.id))
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
        // Account for fixed header + some breathing room
        root: null,
        rootMargin: "-96px 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden lg:block lg:col-span-3 relative">
      <div className="sticky top-32 flex flex-col gap-8 pr-8 border-r border-earth-700/30 min-h-[50vh]">
        <div className="flex flex-col gap-2">
          <h1 className="text-gold-500 text-2xl font-medium leading-tight mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Accommodations</h1>
        </div>
        <nav className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={[
                  "group flex items-center justify-between p-3 rounded-lg transition-all border-l-2",
                  isActive
                    ? "border-gold-500 bg-earth-700/10 text-earth-50"
                    : "border-transparent hover:border-gold-500/50 text-earth-300 hover:text-earth-50 hover:bg-earth-700/20",
                ].join(" ")}
              >
                <span className={`text-base font-medium ${isActive ? "text-earth-50" : ""}`}>{item.label}</span>
                <span
                  className={[
                    "material-symbols-outlined text-gold-500 text-sm transition-opacity",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  ].join(" ")}
                >
                  arrow_forward
                </span>
              </a>
            );
          })}
        </nav>

      </div>
    </aside>
  );
}
