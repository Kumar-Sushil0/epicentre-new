"use client";

import Link from "next/link";

export default function ServicesOffering() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-earth-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* For Individuals Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
             Daily Cycle
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Guided self-reflection for clarity and emotional balance
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Support with personal goals, transitions, and life decisions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Mindful tools to manage stress and inner noise
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Somatic and thought-based practices for grounding
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Safe confidential space for honest exploration
                </p>
              </div>
            </div>

            <Link 
              href="/test"
              className="mt-8 w-full bg-gold-600 hover:bg-gold-500 text-earth-950 py-3 px-6 rounded-md text-center font-medium transition-colors uppercase tracking-wider text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
             Buy now
            </Link>
          </div>

          {/* For Professionals Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekly Cycle
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Clarity in career direction, priorities, and decision-making
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Leadership presence, confidence, and communication skills
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Stress regulation and sustainable performance tools
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Alignment of personal values with professional goals
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Confidential, one-on-one reflective coaching support
                </p>
              </div>
            </div>

            <Link 
              href="/test"
              className="mt-8 w-full bg-gold-600 hover:bg-gold-500 text-earth-950 py-3 px-6 rounded-md text-center font-medium transition-colors uppercase tracking-wider text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Buy Now
            </Link>
          </div>

          {/* For Corporate Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Conscious leadership and people management frameworks
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Emotional intelligence and resilience at work
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Clarity-driven decision-making in complex environments
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Team alignment, focus, and well-being support
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#C5A065" strokeWidth="1.5"/>
                    <path d="M6 10L9 13L14 7" stroke="#C5A065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Confidential coaching for leaders and senior professionals
                </p>
              </div>
            </div>

            <Link 
              href="/test"
              className="mt-8 w-full bg-gold-600 hover:bg-gold-500 text-earth-950 py-3 px-6 rounded-md text-center font-medium transition-colors uppercase tracking-wider text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Buy Now
            </Link>
          </div>

        </div>
    </section>
  );
}
