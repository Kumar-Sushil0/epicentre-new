"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is EPiCentre?",
      answer: "EPiCentre is a place designed for those who need fewer distractions, not more advice. It's a space to step away from constant input and observe yourself clearly — without fixing, pushing, or instruction. Just time, space, and quiet support to think straight again."
    },
    {
      question: "Is this a resort or luxury stay?",
      answer: "No. EPiCentre is not a resort, luxury stay, wellness program, or retreat with schedules. It's a non-performative space designed for quiet reflection and intentional living. Nothing here is designed to entertain or impress."
    },
    {
      question: "What should I expect during my stay?",
      answer: "Expect an environment-led experience where architecture, land, and natural rhythm do the work. There are no forced schedules, activities, or expectations. You can participate in what feels relevant, or simply observe, reflect, and settle into the space."
    },
    {
      question: "Are there activities or programs?",
      answer: "Activities emerge contextually — shaped by place, time, and mood. They're entered when relevant and ignored when not. There's no programming designed to fill time. The environment itself provides the structure."
    },
    {
      question: "What are the accommodation options?",
      answer: "We offer private rooms for quiet stays, shared dorms for low-key group stays, tents for those who prefer proximity to land and sky, and a community hall for shared time and reflection. All spaces are simple, comfortable, and distraction-free."
    },
    {
      question: "What about food?",
      answer: "We offer simple, home-style vegetarian meals, light salads and smoothies, occasional outdoor barbeque, woodstove pizza made in small batches, and carefully prepared sushi. Food is part of the shared experience, not a service to be consumed."
    },
    {
      question: "How do I get there?",
      answer: "EPiCentre is located in India's Wine Country, set away from urban noise. Exact location details and detailed directions are shared after reservation confirmation to maintain the quiet, intentional nature of the space. We can assist with transportation arrangements from airports or railway stations."
    },
    {
      question: "What should I bring?",
      answer: "Bring what you need for comfort and quiet reflection. The space is intentionally minimal, so focus on essentials. We recommend comfortable clothing, items for personal reflection, and an openness to step away from constant input."
    },
    {
      question: "Is there Wi-Fi or connectivity?",
      answer: "Connectivity is intentionally limited to support the low-stimulation environment. This is by design, not accident. The space encourages disconnection from constant input to allow for clearer observation and reflection."
    },
    {
      question: "Can I book for groups or events?",
      answer: "Yes. We welcome groups seeking quiet space for leadership retreats, creative work, or collective reflection. The community hall and shared spaces accommodate groups without hierarchy or theatrics. Contact us to discuss group arrangements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* FAQ Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-4" style={{ fontFamily: 'serif' }}>
            FAQ
          </h1>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Common questions about EPiCentre, our approach, and what to expect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all hover:bg-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <h3 className="text-lg font-semibold text-white pr-8" style={{ fontFamily: 'serif' }}>
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-base text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-base text-white/70 mb-6">
            Still have questions?
          </p>
          <a
            href="/bookings"
            className="inline-block px-8 py-3 border-2 border-white bg-transparent text-white uppercase font-semibold hover:bg-white hover:text-black transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
