"use client";

import Link from "next/link";

export default function InviteIntro() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-16 bg-earth-950">
      <div className="w-full max-w-3xl mx-auto text-center space-y-4">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-2"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Before you Explore Access
        </h2>
        <p className="text-[#e7dfd3] text-base md:text-lg font-body">
          The Silent Club is a structured environment for uninterrupted attention.
        </p>
        <p className="text-[#e7dfd3] text-base md:text-lg font-body">
          There are no programs, no hosts, and no instruction.<br />
          The environment holds silence. You decide how to use it.
        </p>
        <p className="text-[#e7dfd3] text-base md:text-lg font-body">
          Most visitors arrive between chapters — after completing something significant and before beginning the next.
        </p>
        <p className="text-[#e7dfd3] text-base md:text-lg font-body">
          If that moment resonates with you, continue.
        </p>

        <Link
          href="/cycles"
          className="mt-4 inline-flex items-center gap-2 text-base md:text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 border-2 border-gold-500 rounded-lg px-5 md:px-6 py-2.5 md:py-3 bg-earth-950/50 backdrop-blur-sm transition-colors"
        >
          Continue →
        </Link>
      </div>
    </section>
  );
}

