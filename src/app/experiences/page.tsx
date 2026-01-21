"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Image from "next/image";

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      title: "Cooking",
      description: "Shared preparation when time and group readiness align.\n\nSlow, collective, and unhurried.",
    },
    {
      id: 2,
      title: "Pottery",
      description: "Working with material at its natural pace.\n\nTactile, grounding, and outcome-free.",
    },
    {
      id: 3,
      title: "Paint",
      description: "Visual expression shaped by light, mood, and space.\n\nEntered when conditions support it.",
    },
    {
      id: 4,
      title: "Movie Screening",
      description: "Thematic films chosen for the moment.\n\nWatched without urgency or discussion pressure.",
    },
    {
      id: 5,
      title: "Lake Camping",
      description: "Early, ethical observation based on conditions.\n\nPresence over pursuit.",
    },
    {
      id: 6,
      title: "Wildlife & Birding",
      description: "Quiet observation of natural rhythms.\n\nRespectful, patient, and condition-dependent.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Context-dependent experiences Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
              Context-dependent experiences at EPiCENTRE
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Experiences at EPiCentre happen only when conditions are right.
              </p>
              <p>
                They depend on light, weather, season, group readiness, and timing — not schedules.
              </p>
              <p className="font-semibold text-black">
                Nothing here is promised or produced.
              </p>
              <p>
                When conditions don't align, the experience simply doesn't happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="experience-flip-card"
                style={{ perspective: '1000px', aspectRatio: '320/256' }}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side - Image with Title */}
                  <div className="flip-card-front relative w-full h-full">
                    <Image
                      src="/banner.png"
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                        {experience.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back Side - Information */}
                  <div className="flip-card-back w-full h-full">
                    <div className="p-6 flex flex-col justify-center h-full">
                      <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'serif' }}>
                        {experience.title}
                      </h3>
                      <ul className="text-sm text-white leading-relaxed space-y-2 list-disc list-inside">
                        {experience.description.split('\n\n').map((point, idx) => (
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
