"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function SolitudePage() {
  const solitudePractices = [
    {
      id: 1,
      title: "Angling",
      description: "Quiet waiting by the water.\n\nRepetition, patience, and still attention.",
    },
    {
      id: 2,
      title: "Bird Watching",
      description: "Observing life through stillness and detail.\n\nLooking without pursuit.",
    },
    {
      id: 3,
      title: "Star Gazing",
      description: "Night sky observation without urgency.\n\nNo equipment obsession, no interpretation required.",
    },
    {
      id: 4,
      title: "Forest Walks",
      description: "Slow movement through natural terrain.\n\nWalking without destination or goal.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Self-guided practices Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Self-guided practices at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Solitude at EPiCentre is time spent alone without instruction or expectation.
              </p>
              <p>
                It's designed to slow attention, reduce decision pressure, and allow perception to settle.
              </p>
              <p className="font-semibold text-black">
                Nothing here needs to be achieved.
              </p>
              <p>
                You move at your own pace and return when it feels right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solitude Practices Cards */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-6" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {solitudePractices.map((practice) => (
              <Link
                key={practice.id}
                href={`/solitude/details?id=${practice.id}`}
                className="w-full solitude-flip-card cursor-pointer"
                style={{ aspectRatio: '320/256' }}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side - Image with Title */}
                  <div className="flip-card-front relative w-full h-full">
                    <Image
                      src="/banner.png"
                      alt={practice.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                        {practice.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back Side - Information */}
                  <div className="flip-card-back w-full h-full">
                    <div className="p-6 flex flex-col justify-center h-full">
                      <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'serif' }}>
                        {practice.title}
                      </h3>
                      <ul className="text-sm text-white leading-relaxed space-y-2 list-disc list-inside">
                        {practice.description.split('\n\n').map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
