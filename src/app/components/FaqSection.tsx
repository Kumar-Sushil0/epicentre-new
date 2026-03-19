"use client";

import { useState } from "react";
import Link from "next/link";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  showViewAll?: boolean;
}

export default function FaqSection({
  items,
  title = "Frequently Asked Questions",
  showViewAll = true,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 md:px-16 bg-earth-900 border-t border-earth-800">
      <div className="w-full">
        <div className="flex items-end justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl font-normal text-gold-500"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {title}
          </h2>
          {showViewAll && (
            <Link
              href="/faq"
              className="text-earth-400 text-sm hover:text-gold-500 transition-colors"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              View all →
            </Link>
          )}
        </div>

        <div className="space-y-0 divide-y divide-earth-800">
          {items.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="text-earth-200 text-base group-hover:text-gold-500 transition-colors"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {item.question}
                </span>
                <span className="material-symbols-outlined text-gold-500 text-xl shrink-0">
                  {openIndex === i ? "remove" : "add"}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5 pr-8">
                  <p className="text-earth-400 text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
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
