"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function VenuePage() {
  const [showAll, setShowAll] = useState(false);
  const loremIpsum = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA`;
  
  const totalCards = 12;
  const initialCards = 6;
  const cardsToShow = showAll ? totalCards : initialCards;

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Venue Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Heading */}
          <h1 className="text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
            VENUE
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-black mb-8 leading-relaxed">
            {loremIpsum}
          </p>

          {/* Download Brochure Button */}
          <button className="px-8 py-3 border-2 border-[#D4A574] bg-transparent text-black uppercase font-medium hover:bg-[#D4A574] hover:text-white transition-colors">
            DOWNLOAD BROCHURE
          </button>
        </div>
      </section>

      {/* Venue Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="bg-white p-12">
            {/* Twelve Cards - 3 Column Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-7xl mx-auto" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {Array.from({ length: cardsToShow }).map((_, index) => (
                <div
                  key={index}
                  className="w-full venue-flip-card"
                  style={{ perspective: '1000px', aspectRatio: '320/256' }}
                >
                  <div className="flip-card-inner w-full h-full">
                    {/* Front Side - Image with Title */}
                    <div className="flip-card-front relative w-full h-full">
                      <Image
                        src="/banner.png"
                        alt={`Venue ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                          Venue {index + 1}
                        </h3>
                      </div>
                    </div>
                    {/* Back Side - Information */}
                    <div className="flip-card-back w-full h-full">
                      <h3 className="text-2xl font-bold mb-4">Venue {index + 1}</h3>
                      <p className="text-sm text-center">
                        {loremIpsum.substring(0, 100)}...
                      </p>
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
            
            {/* View Details Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
