"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function WellnessPage() {
  const wellnessPractices = [
    {
      id: 1,
      title: "Physical Training",
      description: "Quiet, self-paced movement for strength and circulation.\n\nNo goals, no programs, no correction.",
    },
    {
      id: 2,
      title: "Kayaking & Cycling",
      description: "Light movement through land and water.\n\nUsed when energy allows, left when it doesn't.",
    },
    {
      id: 3,
      title: "Yoga & Meditation",
      description: "Simple practices to settle the nervous system.\n\nInformal, self-led, and unstructured.",
    },
    {
      id: 4,
      title: "Board Games",
      description: "Low-stimulus games for casual engagement.\n\nNon-competitive and easy to step away from.",
    },
    {
      id: 5,
      title: "Pet Friendly",
      description: "Shared presence with animals.\n\nGrounding, uncomplicated, and naturally calming.",
    },
    {
      id: 6,
      title: "A Day at a Farm",
      description: "Optional engagement with land and routine.\n\nSlow, tactile, and without expectation.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Always-available practices Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Always-available practices at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Wellness at EPiCentre is not a program or a schedule.
              </p>
              <p>
                It's a set of simple, always-available ways to move, rest, and reset — without instruction, commitment, or goals.
              </p>
              <p>
                These practices are part of the environment.
              </p>
              <p>
                You engage when it feels right, leave when it doesn't, and return without needing to explain.
              </p>
              <p className="font-semibold text-black">
                Nothing here is designed to improve you.
              </p>
              <p>
                It's designed to let your body settle and recalibrate on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Practices Cards */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessPractices.map((practice) => (
              <div
                key={practice.id}
                className="wellness-flip-card"
                style={{ perspective: '1000px', aspectRatio: '320/256' }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
