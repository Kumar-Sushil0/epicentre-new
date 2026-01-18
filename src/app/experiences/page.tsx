"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function ExperiencesPage() {
  const loremIpsum = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA`;

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Experiences Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Heading */}
          <h1 className="text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
            EXPERIENCES
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

      {/* Experience 01 Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="bg-black p-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              EXPERIENCE 01
            </h2>

            {/* Description */}
            <p className="text-base text-white mb-12 leading-relaxed">
              {loremIpsum}
            </p>

            {/* Three Cards */}
            <div className="flex justify-center gap-4 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flip-card-container"
                >
                  <div className="flip-card-inner">
                    {/* Front Side - Image */}
                    <div className="flip-card-front relative">
                      <Image
                        src="/banner.png"
                        alt={`Experience ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Back Side - Information */}
                    <div className="flip-card-back">
                      <h3 className="text-2xl font-bold mb-4">Experience {index + 1}</h3>
                      <p className="text-sm text-center">
                        {loremIpsum.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View Details Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience 02 Section - Opposite Colors */}
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="bg-white p-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-black mb-6">
              EXPERIENCE 02
            </h2>

            {/* Description */}
            <p className="text-base text-black mb-12 leading-relaxed">
              {loremIpsum}
            </p>

            {/* Three Cards */}
            <div className="flex justify-center gap-4 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flip-card-container"
                >
                  <div className="flip-card-inner">
                    {/* Front Side - Image */}
                    <div className="flip-card-front relative">
                      <Image
                        src="/banner.png"
                        alt={`Experience ${index + 4}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Back Side - Information */}
                    <div className="flip-card-back">
                      <h3 className="text-2xl font-bold mb-4">Experience {index + 4}</h3>
                      <p className="text-sm text-center">
                        {loremIpsum.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View Details Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience 03 Section - Black Background */}
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="bg-black p-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              EXPERIENCE 03
            </h2>

            {/* Description */}
            <p className="text-base text-white mb-12 leading-relaxed">
              {loremIpsum}
            </p>

            {/* Three Cards */}
            <div className="flex justify-center gap-4 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flip-card-container"
                >
                  <div className="flip-card-inner">
                    {/* Front Side - Image */}
                    <div className="flip-card-front relative">
                      <Image
                        src="/banner.png"
                        alt={`Experience ${index + 7}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Back Side - Information */}
                    <div className="flip-card-back">
                      <h3 className="text-2xl font-bold mb-4">Experience {index + 7}</h3>
                      <p className="text-sm text-center">
                        {loremIpsum.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View Details Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience 04 Section - White Background */}
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="bg-white p-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-black mb-6">
              EXPERIENCE 04
            </h2>

            {/* Description */}
            <p className="text-base text-black mb-12 leading-relaxed">
              {loremIpsum}
            </p>

            {/* Three Cards */}
            <div className="flex justify-center gap-4 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flip-card-container"
                >
                  <div className="flip-card-inner">
                    {/* Front Side - Image */}
                    <div className="flip-card-front relative">
                      <Image
                        src="/banner.png"
                        alt={`Experience ${index + 10}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Back Side - Information */}
                    <div className="flip-card-back">
                      <h3 className="text-2xl font-bold mb-4">Experience {index + 10}</h3>
                      <p className="text-sm text-center">
                        {loremIpsum.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
