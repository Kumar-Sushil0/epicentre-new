'use client';

import Link from "next/link";

interface RequestConversationProps {
  message?: string;
  pageName?: string;
}

export default function RequestConversation(_props: RequestConversationProps) {
  return (
    <section className="min-h-[40vh] flex items-center justify-center py-8 px-4 md:px-16 bg-earth-950">
      <div className="text-center space-y-3">
        <Link
          href="/cycles"
          className="inline-block text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-6 py-2"
        >
          Explore Accessmbership →
        </Link>
        {/* Bottom Notice */}
        <div className="text-center">
          <p className="text-earth-300 text-xs md:text-sm leading-snug max-w-full mx-auto px-4">
            For those who can remain self-directed.
          </p>
        </div>
      </div>
    </section>
  );
}
