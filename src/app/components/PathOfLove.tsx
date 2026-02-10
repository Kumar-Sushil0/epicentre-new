"use client";

import React from 'react';

const PathOfLove = () => {
  return (
    <section className="bg-earth-900 text-earth-100 py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gold-500" style={{ fontFamily: 'Playfair Display, serif' }}>
          Path Of Love
        </h1>
        <div className="flex items-center justify-center gap-6 my-6 text-lg text-earth-300">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gold-500">calendar_today</span>
            <span>01 Jul 2026</span>
          </div>
          <span>-</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gold-500">calendar_today</span>
            <span>05 Jul 2026</span>
          </div>
        </div>
        <p className="text-xl text-earth-200 mb-12" style={{ fontFamily: 'Outfit, sans-serif' }}>
          A course in conscious relating & intimacy.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-12 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-gold-500 text-earth-950 font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-all hover:bg-gold-600 hover:shadow-lg">
            Enquire Now
          </button>
          <button className="w-full sm:w-auto bg-earth-800 text-gold-500 font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-all hover:bg-earth-700 border border-gold-500/50">
            Book Now
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-24">
        <div className="bg-earth-800/50 rounded-2xl p-10 mb-16 border border-earth-700/50">
          <h2 className="text-3xl font-bold text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Why this course:
          </h2>
          <ul className="space-y-4 text-lg text-earth-200 list-disc list-inside">
            <li>Do your relationships feel superficial, stuck in repetitive patterns, or lacking the depth you crave?</li>
            <li>Many of us long for genuine connection but find ourselves trapped in old conditioning, hiding our truth, fearing rejection, playing roles instead of being real.</li>
            <li>'Path of Love' offers a transformative journey to break these patterns and rediscover your natural ability to connect authentically.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gold-500 mb-6 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What you'll experience:
          </h2>
          <ul className="space-y-6 text-lg text-earth-200 text-center max-w-4xl mx-auto">
            <li>
              Powerful communication techniques that shift you from head to heart, transforming how you relate to others at the deepest level. A safe, judgment-free container where vulnerability is celebrated and authentic sharing becomes possible, perhaps for the first time in your life.
            </li>
            <li>
              All of this unfolds in the serene beauty of a Himalayan valley, where nature supports your heart's opening.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PathOfLove;
