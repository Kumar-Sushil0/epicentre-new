"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";
import FAQHero from "../components/faq/FAQHero";
import FAQPhilosophy from "../components/faq/FAQPhilosophy";
import RequestConversation from "../components/RequestConversation";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // BEFORE YOU BOOK
  {
    id: "is-for-me",
    question: "Is The Silent Club for me?",
    answer: "If you are seeking guidance, therapy, social immersion, or constant interaction — no.\n\nIf you are capable of remaining self-directed in silence — likely yes.",
    category: "BEFORE YOU BOOK"
  },
  {
    id: "prior-experience",
    question: "Do I need prior experience with meditation or retreats?",
    answer: "No.\n\nYou need only the ability to manage your own time without instruction.",
    category: "BEFORE YOU BOOK"
  },
  {
    id: "guidance",
    question: "Will someone guide me during my stay?",
    answer: "No.\n\nThe environment is structured. You navigate it.",
    category: "BEFORE YOU BOOK"
  },
  {
    id: "social-experience",
    question: "Is this a social experience?",
    answer: "Silence is the default condition.\n\nConversation is minimal and intentional.",
    category: "BEFORE YOU BOOK"
  },
  {
    id: "minimum-stay",
    question: "What is the minimum stay?",
    answer: "You may book a Day Cycle (no overnight) or stay up to three months, subject to availability.",
    category: "BEFORE YOU BOOK"
  },

  // BOOKING & PAYMENTS
  {
    id: "payments",
    question: "How do payments work?",
    answer: "50% advance confirms your booking.\n\nRemaining 50% is due before or at check-in.",
    category: "BOOKING & PAYMENTS"
  },
  {
    id: "price-changes",
    question: "Will future price changes affect my booking?",
    answer: "No. Confirmed bookings are protected.",
    category: "BOOKING & PAYMENTS"
  },
  {
    id: "cancellation",
    question: "What is the cancellation policy?",
    answer: "Cancellations are non-refundable.\n\nRescheduling may be allowed depending on notice and availability.",
    category: "BOOKING & PAYMENTS"
  },
  {
    id: "floods-restrictions",
    question: "What happens during floods or government restrictions?",
    answer: "No refunds are issued.\n\nRescheduling may be accommodated.\n\nThe Silent Club assumes no liability for external events.",
    category: "BOOKING & PAYMENTS"
  },

  // ARRIVAL & ORIENTATION
  {
    id: "checkin-checkout",
    question: "What are check-in and check-out times?",
    answer: "Check-in: 12:00 PM\nCheck-out: 11:00 AM",
    category: "ARRIVAL & ORIENTATION"
  },
  {
    id: "early-late",
    question: "Is early check-in or late check-out allowed?",
    answer: "Subject to availability and additional charges.",
    category: "ARRIVAL & ORIENTATION"
  },
  {
    id: "orientation",
    question: "Is there an orientation?",
    answer: "Yes.\n\nA mandatory 10-minute orientation at check-in to explain structure and boundaries.",
    category: "ARRIVAL & ORIENTATION"
  },

  // DURING YOUR STAY
  {
    id: "silence-mandatory",
    question: "Is silence mandatory?",
    answer: "Silence is not enforced.\n\nQuiet behavior is expected.\n\nWeekdays (Mon–Thu):\nInteraction is limited to a 10 PM – 11 PM window.\n\nWeekends / Event Days:\nConversation is permitted but must remain slow and considerate.",
    category: "DURING YOUR STAY"
  },
  {
    id: "phones-allowed",
    question: "Can I use my phone?",
    answer: "Yes.\n\nPhones are allowed, including in dorms.\n\nCalls must be taken in designated areas and kept brief.\n\nSpeakers are not allowed.\n\nHeadphones are permitted.",
    category: "DURING YOUR STAY"
  },
  {
    id: "laptops",
    question: "Is laptop use allowed?",
    answer: "Yes, but it is discouraged unless essential.\n\nWi-Fi speed: approximately 30 Mbps.",
    category: "DURING YOUR STAY"
  },
  {
    id: "meals-included",
    question: "Are meals included?",
    answer: "Food packages may be included depending on your cycle.\n\nMeal times are fixed.\n\nKitchen access is permitted. Guests must clean all utensils used.",
    category: "DURING YOUR STAY"
  },
  {
    id: "alcohol-smoking",
    question: "Is alcohol or smoking allowed?",
    answer: "Alcohol and drugs are strictly prohibited.\n\nSmoking is allowed only in designated areas.\n\nGuests under the influence will be asked to leave without refund.",
    category: "DURING YOUR STAY"
  },
  {
    id: "what-to-bring",
    question: "What should I bring?",
    answer: "Comfortable clothing.\n\nMinimal belongings.\n\nEssential medication.\n\nAvoid strong perfumes or fragrances.",
    category: "DURING YOUR STAY"
  },

  // ACCOMMODATION & FACILITIES
  {
    id: "accommodation-types",
    question: "What types of accommodation are available?",
    answer: "Private rooms, shared dorms, minimalist tents, and common indoor spaces.\n\nDorms are mixed-gender unless otherwise requested and available.",
    category: "ACCOMMODATION & FACILITIES"
  },
  {
    id: "lockers",
    question: "Are lockers provided?",
    answer: "Yes.\n\nThe Silent Club is not responsible for loss or damage.",
    category: "ACCOMMODATION & FACILITIES"
  },
  {
    id: "hot-water",
    question: "Is hot water available?",
    answer: "Yes.",
    category: "ACCOMMODATION & FACILITIES"
  },
  {
    id: "power-backup",
    question: "Is there power backup?",
    answer: "Yes. Inverter backup for up to 2 hours.",
    category: "ACCOMMODATION & FACILITIES"
  },
  {
    id: "parking",
    question: "Is parking available?",
    answer: "Yes.\n\nVehicle safety remains the owner's responsibility.",
    category: "ACCOMMODATION & FACILITIES"
  },

  // SAFETY & SECURITY
  {
    id: "property-security",
    question: "Is the property secured?",
    answer: "Yes. The estate is gated.\n\nCCTV operates in common areas only.",
    category: "SAFETY & SECURITY"
  },
  {
    id: "staff-availability",
    question: "Is staff available?",
    answer: "Yes. On-site 24/7.\n\nEmergency contact details are provided at check-in.",
    category: "SAFETY & SECURITY"
  },
  {
    id: "medical-facilities",
    question: "Are medical facilities nearby?",
    answer: "Basic first aid is available.\n\nNearest hospitals:\nBhigwan — 10 km\nBaramati — 30 km\nPune — 100 km",
    category: "SAFETY & SECURITY"
  },
  {
    id: "government-id",
    question: "Is government ID required?",
    answer: "Yes. ID verification is mandatory.\n\nMinimum age: 16 years.\n\nMinors must be accompanied by guardians.",
    category: "SAFETY & SECURITY"
  },

  // EVENTS & GROUP USE
  {
    id: "group-events",
    question: "Can I host a group or event?",
    answer: "Yes.\n\nAll events are screened for alignment.\n\nThe Silent Club reserves the right to decline based on intent.",
    category: "EVENTS & GROUP USE"
  },
  {
    id: "security-deposit",
    question: "Is a security deposit required?",
    answer: "Yes.\n\n₹25,000 for half-day events.\n₹50,000 for overnight events.",
    category: "EVENTS & GROUP USE"
  },
  {
    id: "noise-cutoff",
    question: "What is the noise cutoff time?",
    answer: "10:00 PM, as per local regulations.",
    category: "EVENTS & GROUP USE"
  },
  {
    id: "activity-supervision",
    question: "Are physical activities supervised?",
    answer: "No.\n\nGuests sign a liability waiver.\n\nSelf-declared fitness is mandatory.",
    category: "EVENTS & GROUP USE"
  },
  {
    id: "disturbance",
    question: "What happens if someone disturbs the environment?",
    answer: "A warning is issued.\n\nRepeated disturbance results in removal without refund.",
    category: "EVENTS & GROUP USE"
  },

  // LONG STAYS & EXTENSIONS
  {
    id: "long-stay-discounts",
    question: "Are long-stay discounts available?",
    answer: "Yes, subject to discussion.",
    category: "LONG STAYS & EXTENSIONS"
  },
  {
    id: "extend-stay",
    question: "Can I extend my stay?",
    answer: "If capacity allows.",
    category: "LONG STAYS & EXTENSIONS"
  },
  {
    id: "early-departure",
    question: "Is there a refund for early departure?",
    answer: "No.",
    category: "LONG STAYS & EXTENSIONS"
  },
  {
    id: "property-damage",
    question: "How is property damage handled?",
    answer: "Charged at full replacement cost.",
    category: "LONG STAYS & EXTENSIONS"
  }
];

const categories = ["All", "BEFORE YOU BOOK", "BOOKING & PAYMENTS", "ARRIVAL & ORIENTATION", "DURING YOUR STAY", "ACCOMMODATION & FACILITIES", "SAFETY & SECURITY", "EVENTS & GROUP USE", "LONG STAYS & EXTENSIONS"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-earth-950">
      <Header />
      
      {/* Page Title */}
      <section className="pt-16 pb-4 px-4 md:px-16 text-center border-b border-earth-800">
        <h1 className="text-4xl md:text-5xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-earth-300 text-lg max-w-2xl mx-auto">
          Find answers to common questions about The Silent Club
        </p>
      </section>
     
      {/* Category Filter */}
      <section className="pt-0 pb-8 px-4 md:px-16 border-b border-earth-800 ">
        <div className="w-full mt-16">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-gold-500 text-earth-950'
                    : 'bg-earth-900 text-earth-300 hover:bg-earth-800 hover:text-gold-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 md:px-16">
        <div className="w-full">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center p-8 bg-earth-900/30 rounded-lg border border-earth-800">
            <h3 className="text-2xl font-medium text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Still have questions?
            </h3>
            <p className="text-earth-300/70 mb-6 leading-relaxed">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yodd@lifeidesign.games"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-earth-950 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Send us an email
              </a>
              <a
                href="https://wa.me/919890322494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-earth-800 hover:bg-earth-700 text-earth-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-earth-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      <RequestConversation />
      <Footer />
    </div>
  );
}