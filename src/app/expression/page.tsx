"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function ExpressionPage() {
  const expressionPractices = [
    {
      id: 1,
      title: "Language Play",
      description: "Exploring words and meaning through narrative and participation.\n\nCurious, open-ended, and non-evaluative.",
    },
    {
      id: 2,
      title: "Finding Voice",
      description: "Practicing expression before recording or final performance.\n\nLow-pressure, attentive, and unfinished.",
    },
    {
      id: 3,
      title: "Artist In Reflection",
      description: "Work experienced in a small group.\n\nSeen and felt without critique.",
    },
    {
      id: 4,
      title: "The Writer Says",
      description: "Writers reading evolving work aloud.\n\nListening for resonance, not feedback.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Facilitated, work-in-progress spaces Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Facilitated, work-in-progress spaces at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Expression at EPiCentre is about sharing unfinished work without judgment.
              </p>
              <p>
                It focuses on process, presence, and discovery — not performance or approval.
              </p>
              <p>
                You participate as much or as little as feels right.
              </p>
              <p className="font-semibold text-black">
                Nothing needs to be explained, defended, or completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expression Practices Cards */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-6" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {expressionPractices.map((practice) => (
              <Link
                key={practice.id}
                href={`/expression/details?id=${practice.id}`}
                className="w-full expression-flip-card cursor-pointer"
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
