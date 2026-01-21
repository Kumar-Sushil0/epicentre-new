"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function VenuePage() {
  const [showAll, setShowAll] = useState(false);
  
  const venues = [
    { id: 1, name: "Design Dome", size: "2000 sqft", capacity: "50 ppl", description: "A large, flexible indoor space for gathering and focus.\n\nUsed for group work, quiet events, reflection, and shared stillness." },
    { id: 2, name: "Lazy Lounge", size: "3000 sqft", capacity: "80 ppl", description: "An open space to slow down and linger.\n\nReading, resting, light conversation, and doing nothing in particular." },
    { id: 3, name: "Front Lawn", size: "6000 sqft", capacity: "100 ppl", description: "An open outdoor area for movement and rest.\n\nInformal play, sunlight, and time under trees." },
    { id: 4, name: "Courtyard", size: "4000 sqft", capacity: "80 ppl", description: "The central connective space of EPiCENTRE.\n\nMovement, orientation, and natural crossings." },
    { id: 5, name: "Tree Houses", size: "100 sqft", capacity: "1 ppl X 3", description: "Small, elevated spaces for one person at a time.\n\nReading, painting, thinking, or drifting quietly." },
    { id: 6, name: "Zen Garden", size: "100 sqft", capacity: "1 ppl", description: "A compact space for focused stillness.\n\nUsed for calm engagement and creative flow." },
    { id: 7, name: "Discussion Decks", size: "100 sqft", capacity: "2 ppl X 3", description: "Small outdoor decks for two people.\n\nQuiet conversations with privacy and openness." },
    { id: 8, name: "Reflection Corner", size: "100 sqft", capacity: "1 band", description: "An intimate stone space under trees.\n\nUsed for reflection or small, quiet performances." },
    { id: 9, name: "Sports Courts", size: "5000 sqft", capacity: "50 ppl", description: "Open courts for physical play and team movement.\n\nCompetitive or casual, depending on the group." },
    { id: 10, name: "Buzzer Zone", size: "2000 sqft", capacity: "20 ppl", description: "An outdoor functional workout area.\n\nStrength, endurance, and physical exertion." },
    { id: 11, name: "Contrast & Recovery", size: "2000 sqft", capacity: "10 ppl", description: "A dedicated space for physical recovery.\n\nHot, cold, rest, and nervous system reset." },
    { id: 12, name: "Tru Man's Wall", size: "2000 sqft", capacity: "100 ppl", description: "A large open wall and stage area.\n\nUsed for art, sound, contemplation, and expression." },
    { id: 13, name: "Compact Rooms", size: "200 sqft X 4 rooms", capacity: "8 ppl", description: "Private rooms designed for rest and solitude.\n\nQuiet, contained, and distraction-free." },
    { id: 14, name: "Spacious Dorms", size: "500 sqft X 2 dorms", capacity: "10 ppl", description: "Shared sleeping spaces with open views.\n\nSuitable for self-study, rest, and quiet coexistence." },
    { id: 15, name: "Cabins", size: "1000 sqft", capacity: "4 ppl X 4 cabins", description: "Independent living spaces set slightly apart.\n\nUsed for longer stays and deeper withdrawal." },
    { id: 16, name: "Restaurant", size: "2000 sqft", capacity: "30 ppl", description: "A communal dining space with long tables.\n\nFood shared slowly, without hierarchy." },
    { id: 17, name: "Fireplace", size: "500 sqft", capacity: "20 ppl", description: "A small gathering space around fire.\n\nConversation, warmth, and informal rituals." },
    { id: 18, name: "Open outdoor Kitchen", size: "500 sqft", capacity: "50 ppl", description: "A shared cooking space under open sky.\n\nCommunity cooking, slow preparation, and shared meals." },
    { id: 19, name: "Self Serve Pantry", size: "200 sqft", capacity: "20 ppl", description: "A simple kitchen for independent use.\n\nEveryday food, easy access, no service layer." },
    { id: 20, name: "On the Edge", size: "500 sqft", capacity: "10 ppl", description: "An outdoor gallery-like space overlooking the land.\n\nUsed for viewing, pause, and quiet contemplation." },
    { id: 21, name: "Casual Catch-up Loft", size: "300 sqft", capacity: "20 ppl", description: "A small outdoor loft for low-key interaction.\n\nBoard games, meditation, or quiet time together." },
    { id: 22, name: "Farm", size: "5 acre", capacity: "100 ppl", description: "Open agricultural land worked by hand.\n\nSeeding, harvesting, and direct contact with soil." },
    { id: 23, name: "Animal Shed", size: "2000 sqft", capacity: "10 ppl", description: "A shared space with farm animals.\n\nObservation, care, and calm presence." },
    { id: 24, name: "Entry Gate", size: "5000 sqft", capacity: "50 ppl", description: "The threshold into EPiCENTRE.\n\nA symbolic pause before entering the space." },
    { id: 25, name: "Identity Cemetery", size: "2000 sqft", capacity: "30 tomb stone", description: "A designated area for symbolic closure.\n\nLetting go of old identities and marking new beginnings." },
  ];
  
  const totalCards = venues.length;
  const initialCards = 6;
  const cardsToShow = showAll ? totalCards : initialCards;

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Spaces at EPiCENTRE Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Spaces at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                The spaces at EPiCentre are designed to support different states of attention — alone, together, moving, or still.
              </p>
              <p>
                Each space is simple, flexible, and purpose-neutral.
              </p>
              <p>
                They are not themed or programmed.
              </p>
              <p>
                Capacity is listed only to clarify use, not to define it.
              </p>
              <p className="font-semibold text-black">
                How the space is used depends on context, group size, and intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Spaces Cards */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-4 mb-8" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {venues.slice(0, cardsToShow).map((venue) => (
              <div
                key={venue.id}
                className="w-full venue-flip-card"
                style={{ perspective: '1000px', aspectRatio: '320/256' }}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side - Image with Title */}
                  <div className="flip-card-front relative w-full h-full">
                    <Image
                      src="/banner.png"
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                        {venue.name}
                      </h3>
                      <p className="text-sm text-white/90">
                        {venue.size} • {venue.capacity}
                      </p>
                    </div>
                  </div>
                  {/* Back Side - Information */}
                  <div className="flip-card-back w-full h-full">
                    <div className="p-6 flex flex-col justify-center h-full">
                      <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'serif' }}>
                        {venue.name}
                      </h3>
                      <p className="text-xs text-white/80 mb-4">
                        {venue.size} • {venue.capacity}
                      </p>
                      <ul className="text-sm text-white leading-relaxed space-y-2 list-disc list-inside">
                        {venue.description.split('\n\n').map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase"
              >
                VIEW MORE
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
