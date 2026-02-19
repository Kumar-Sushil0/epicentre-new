"use client";

import { useState } from "react";

const whatsappNumber = '919890322494'; // WhatsApp number with country code
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ServicesOffering() {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');

  return (
    <section id="cycles-section" className="relative py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <h2 className="text-3xl font-normal text-gold-500 mb-4 text-center uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
           Silent Cycles
        </h2>
        <p className="text-earth-300 text-lg text-center mb-12">
          Choose the depth of your withdrawal.
        </p>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          
          {/* Day Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
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

            <div className="text-gold-500 text-lg font-normal mt-auto">
              ₹1,000
            </div>
          </div>

          {/* Weekend Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-normal mt-auto">
              {accommodationType === 'dorm' ? '₹10,000' : '₹15,000'}
            </div>
          </div>

          {/* Weekday Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for uninterrupted deep work.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">4 nights / 5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Sacred silence</span>
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

            <div className="text-gold-500 text-lg font-normal mt-auto">
              {accommodationType === 'dorm' ? '₹20,000' : '₹30,000'}
            </div>
          </div>

        </div>

        {/* All cycles include estate access */}
        <div className="text-center mt-8 mb-8">
          <p className="text-earth-300 text-sm">
            All cycles include estate access
          </p>
        </div>

        {/* Bottom Notice */}
        <div className="text-center space-y-4 mb-8">
          <p className="text-earth-300 text-sm leading-relaxed max-w-full mx-auto">
            This space is not suited for high-stimulus gatherings.
            Access depends on alignment with the nature of the estate.
            Scale, urgency, or money do not override intent.
          </p>
        </div>

        {/* Request Conversation Button */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-6 py-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Request Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
