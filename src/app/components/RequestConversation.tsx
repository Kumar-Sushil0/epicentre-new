'use client';

import Link from "next/link";

export default function RequestConversation() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center py-16 px-4 md:px-16 bg-earth-950">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-earth-300 text-base md:text-lg font-body">
          You don't need more information.
        </p>
        <p className="text-earth-300 text-base md:text-lg mb-5 font-body">
          You need fewer distractions.
        </p>
        
        <Link
          href="/cycles"
          className="inline-block text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-8 py-3"
        >
          Choose Your Depth →
        </Link>
      </div>
    </section>
  );
}
