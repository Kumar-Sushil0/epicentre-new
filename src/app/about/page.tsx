"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-[#F5F5F0] py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-8" style={{ fontFamily: 'serif' }}>
            About EPiCentre
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A place designed for those who need fewer distractions, not more advice.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/banner.png"
                alt="EPiCentre Philosophy"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right: Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Our Philosophy
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  EPiCentre exists because many people don't need more advice — they need fewer distractions.
                </p>
                <p>
                  It's a place to step away from constant input and observe yourself clearly. No fixing. No pushing. No instruction.
                </p>
                <p>
                  Just time, space, and quiet support to think straight again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Reversed */}
      <section className="w-full bg-[#F5F5F0] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Our Approach
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  We believe in environment-led experiences. Architecture, land, and rhythm do the work — not programming.
                </p>
                <p>
                  Every space is designed with intentional silence. Low-stimulation by intent, not accident.
                </p>
                <p>
                  There's no pressure to participate, share, or optimise. This is a non-performative space.
                </p>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/banner.png"
                alt="EPiCentre Approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center" style={{ fontFamily: 'serif' }}>
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'serif' }}>
                Intentional Design
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Every element is placed with purpose. Nothing is accidental.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'serif' }}>
                Respectful Space
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A place where you can be without expectation or performance.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'serif' }}>
                Natural Rhythm
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Time moves with the land, not against it. No forced schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-[#F5F5F0] py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 text-center" style={{ fontFamily: 'serif' }}>
            The Story
          </h2>
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              People usually come here when they're at a pause point — unsure, tired, or rethinking direction.
            </p>
            <p>
              EPiCentre was born from the recognition that in a world of constant input, what's often needed is not more information, but less noise.
            </p>
            <p>
              We created a space where architecture, land, and natural rhythm do the work. Where you can observe yourself clearly without the pressure to fix, improve, or perform.
            </p>
            <p>
              This isn't a resort, a wellness program, or a retreat with schedules. It's simply a place designed for quiet support — for thinking straight again.
            </p>
          </div>
        </div>
      </section>

      {/* Location Context */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="flex flex-col justify-center px-4 md:px-8 py-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                India's Wine Country
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  Set in India's Wine Country, EPiCentre is intentionally placed away from urban noise and distraction.
                </p>
                <p>
                  The landscape itself becomes part of the experience — rolling vineyards, quiet mornings, and evenings that settle naturally.
                </p>
                <p>
                  Here, the environment leads. The architecture responds to the land, and the rhythm follows the seasons, not the clock.
                </p>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/banner.png"
                alt="India's Wine Country"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>
            Experience EPiCentre
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            If you're at a pause point, unsure, tired, or rethinking direction — this space is designed for you.
          </p>
          <a
            href="/bookings"
            className="inline-block px-8 py-3 border-2 border-white bg-transparent text-white uppercase font-semibold hover:bg-white hover:text-black transition-colors"
          >
            RESERVE YOUR STAY
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
