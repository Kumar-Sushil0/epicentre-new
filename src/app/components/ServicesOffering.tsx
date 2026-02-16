"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServicesOffering() {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');

  return (
    <section id="cycles-section" className="relative py-24 px-6 md:px-16 bg-earth-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-8 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Cycles
        </h2>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
            <button
              onClick={() => setAccommodationType('dorm')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'dorm'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Dorm
            </button>
            <button
              onClick={() => setAccommodationType('room')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'room'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Private Room
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Day Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for short-duration recalibration and focused decision clarity.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">9AM–2PM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Includes 1 meal</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              ₹1,000
            </div>
          </div>

          {/* Weekend Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for structured withdrawal with optional experimental interaction.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">2 nights / 3 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Meals Included </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              {accommodationType === 'dorm' ? '₹10,000' : '₹15,000'}
            </div>
          </div>

          {/* Weekday Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for uninterrupted deep work or identity reset.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">4 nights / 5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Meals Included</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">No event overlap</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              {accommodationType === 'dorm' ? '₹20,000' : '₹30,000'}
            </div>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="text-center space-y-4 mb-8">
          <p className="text-earth-300 text-sm leading-relaxed max-w-full mx-auto">
            This space is not suited for high-stimulus gatherings.
            Access depends on alignment with the nature of the estate.
            Scale, urgency, or money do not override intent.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-earth-950 px-8 py-4 rounded-md font-semibold transition-all duration-300 uppercase tracking-wider text-sm"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Request Conversation
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
