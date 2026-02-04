"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";
import FAQHero from "../components/faq/FAQHero";
import FAQPhilosophy from "../components/faq/FAQPhilosophy";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // STAY, BOOKING & DAILY LIVING
  // Booking & Payments
  {
    id: "minimum-stay",
    question: "What is the minimum stay?",
    answer: "You can book a day stay (no overnight) or stay up to 3 months. Tent stays may be adjusted if events require relocation.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "payments",
    question: "How do payments work?",
    answer: "50% advance is required at booking. The remaining 50% must be paid before check-in, on arrival.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "price-changes",
    question: "Will price changes affect my booking?",
    answer: "No. Confirmed bookings are not affected by future price changes.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "floods-restrictions",
    question: "What happens during floods or government restrictions?",
    answer: "No refunds are issued. Rescheduling is allowed. The Silent Club assumes no liability.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Check-in, Check-out & Arrival
  {
    id: "checkin-checkout",
    question: "What are the check-in and check-out times?",
    answer: "Check-in: 12:00 PM\nCheck-out: 11:00 AM",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "early-late",
    question: "Is early check-in or late check-out allowed?",
    answer: "Yes, subject to availability and charged extra.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "latest-arrival",
    question: "What is the latest arrival time?",
    answer: "10:00 PM. Late arrivals require prior coordination with the property manager.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "orientation",
    question: "Is there an arrival orientation?",
    answer: "Yes. A mandatory 10-minute orientation at check-in.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Accommodation Options
  {
    id: "accommodation-types",
    question: "What types of accommodation are available?",
    answer: "Private rooms, shared dorms, tents, and common indoor spaces.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "mixed-dorms",
    question: "Are dorms mixed-gender?",
    answer: "Yes. Dorms are mixed-gender.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "women-dorms",
    question: "Are women-only dorms available?",
    answer: "Yes, on request and subject to availability.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Dorm Rules & Shared Spaces
  {
    id: "dorm-quiet-hours",
    question: "What are dorm quiet hours?",
    answer: "5:00 AM – 11:00 AM\n2:00 PM – 6:00 PM\nOutside these hours, only polite, low-volume conversation is allowed.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "lockers",
    question: "Are lockers provided?",
    answer: "Yes. The Silent Club is not responsible for loss or damage.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "lights-off",
    question: "Is there a fixed lights-off time?",
    answer: "Yes. Personal reading lights are allowed.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Food, Meals & Kitchen Use
  {
    id: "food-included",
    question: "Is food included in the stay price?",
    answer: "No. Food packages are charged separately.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "meal-times",
    question: "Are meal times fixed?",
    answer: "Yes. Meals are served at fixed times.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "cooking",
    question: "Can I cook my own food?",
    answer: "Yes. Kitchen access is allowed.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "cleaning",
    question: "Do I need to clean after cooking or eating?",
    answer: "Yes. Guests must clean all utensils, plates, cups, and glasses they use.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Facilities & Utilities
  {
    id: "hot-water",
    question: "Is hot water available?",
    answer: "Yes.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "power-backup",
    question: "Is there power backup?",
    answer: "Yes. Inverter backup for up to 2 hours.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "laundry",
    question: "Is laundry service available?",
    answer: "Yes, at an additional cost.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Clothing, Fragrance & Comfort
  {
    id: "clothing-guidelines",
    question: "Is there a clothing guideline?",
    answer: "Solid colors preferred. No branding or prints. Maximum: 5 outfits, 1 pair of shoes, 1 pair of chappals.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "fragrances",
    question: "Are perfumes or strong fragrances allowed?",
    answer: "No. Avoid strong perfumes, soaps, or shampoos.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  
  // Parking & Vehicle Safety
  {
    id: "parking",
    question: "Is parking available?",
    answer: "Yes, on-site parking is available.",
    category: "STAY, BOOKING & DAILY LIVING"
  },
  {
    id: "vehicle-safety",
    question: "Who is responsible for vehicle safety?",
    answer: "Vehicle safety is the owner's responsibility.",
    category: "STAY, BOOKING & DAILY LIVING"
  },

  // SILENCE, CONDUCT & SAFETY
  // Silence & Quiet Hours
  {
    id: "silence-mandatory",
    question: "Is silence mandatory?",
    answer: "Silence is not enforced, but quiet behaviour is expected.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "weekday-silence",
    question: "What are the silence rules during the week?",
    answer: "Monday–Thursday: Quiet all day. Interaction allowed only 10:00 PM – 11:00 PM.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "weekend-silence",
    question: "What about weekends or event days?",
    answer: "Friday–Sunday / Events: Talking is allowed but must be slow and considerate.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Phone, Calls & Music Use
  {
    id: "phones-allowed",
    question: "Are phones allowed?",
    answer: "Yes, including in dorms.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "calls-where",
    question: "Where are calls allowed?",
    answer: "Only on discussion decks and tree houses. Calls must be short, quiet, and essential.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "work-calls",
    question: "Are work calls or meetings allowed?",
    answer: "Only if essential, and only in designated areas.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "speakers",
    question: "Are speakers allowed?",
    answer: "No.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "headphones",
    question: "Are headphones allowed?",
    answer: "Yes.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Work, Laptops & Internet
  {
    id: "laptops",
    question: "Is laptop use allowed?",
    answer: "Yes, but discouraged.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "internet-speed",
    question: "What is the internet speed?",
    answer: "30 Mbps (Jio).",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Guest Behaviour & Enforcement
  {
    id: "disturbance",
    question: "What happens if someone disturbs the environment?",
    answer: "A warning is issued first. Repeated disturbance results in removal with no refund.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Staff Presence & On-Site Support
  {
    id: "staff-availability",
    question: "Is staff available on-site?",
    answer: "Yes. Staff is present 24/7.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "night-staff",
    question: "How do I reach staff at night?",
    answer: "Via the provided contact number or at the servant quarters.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Security & Surveillance
  {
    id: "property-security",
    question: "Is the property secured?",
    answer: "Yes. The property is gated.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "cctv",
    question: "Is CCTV installed?",
    answer: "Yes. CCTV with motion detectors in all common areas.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Medical Support & Emergency Care
  {
    id: "medical-support",
    question: "Is medical support available?",
    answer: "Basic first aid only.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "hospitals",
    question: "Nearest hospitals?",
    answer: "Bhigwan – 10 km\nBaramati – 30 km\nPune – 100 km",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Identity, Age & Visitor Access
  {
    id: "government-id",
    question: "Is government ID required?",
    answer: "Yes. ID is verified and digitally retained.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "minimum-age",
    question: "Minimum age to stay?",
    answer: "16 years. Minors allowed only with guardians.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "day-visitors",
    question: "Can visitors come during the day?",
    answer: "Yes. Maximum 2–4 hours, common areas only.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  
  // Environment, Weather & Wildlife
  {
    id: "dangerous-animals",
    question: "Are there dangerous animals on-site?",
    answer: "No. Only domestic animals (cats, dogs, cows, buffaloes, sheep). No snakes. Active agriculture for 10+ years.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "restricted-areas",
    question: "Are there restricted areas?",
    answer: "Yes. D.D's Den is strictly off-limits.",
    category: "SILENCE, CONDUCT & SAFETY"
  },
  {
    id: "monsoon-restrictions",
    question: "Are there monsoon movement restrictions?",
    answer: "No. Temporary tents may be relocated if required.",
    category: "SILENCE, CONDUCT & SAFETY"
  },

  // EVENTS, GROUPS & LONG STAYS
  // Group Stays & Event Booking
  {
    id: "group-events",
    question: "Can I host an event or group stay?",
    answer: "Yes. Group size allowed: 2 to 50 people.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "booking-options",
    question: "What can be booked?",
    answer: "One room, one building, or the entire property.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Event Eligibility & Screening
  {
    id: "event-screening",
    question: "Are events screened?",
    answer: "Yes. All events are reviewed.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "event-decline",
    question: "Can the club decline an event?",
    answer: "Yes, based on intent.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Security Deposit & Noise Limits
  {
    id: "security-deposit",
    question: "Is a security deposit required?",
    answer: "₹25,000 for half-day events\n₹50,000 for overnight events",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "noise-cutoff",
    question: "What is the noise cutoff time?",
    answer: "10:00 PM, as per government regulations.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // External Participants & Branding
  {
    id: "external-participants",
    question: "Can non-staying participants attend events?",
    answer: "Yes.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "same-rules",
    question: "Do they follow the same rules?",
    answer: "Yes.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "event-branding",
    question: "Is event branding allowed?",
    answer: "Only after confirmation.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Photography, Recording & Content Use
  {
    id: "content-ownership",
    question: "Who owns event photos and videos?",
    answer: "The event host owns all content.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "club-documentation",
    question: "Can The Silent Club document events?",
    answer: "Yes, with prior notification (permission not required).",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Liability, Risk & Waivers
  {
    id: "liability-waiver",
    question: "Do guests sign a liability waiver?",
    answer: "Yes.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "activity-supervision",
    question: "Are physical activities supervised?",
    answer: "No supervision. Waiver and self-declared fitness are mandatory.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Long Stays & Repeat Visits
  {
    id: "long-stay-discounts",
    question: "Are long-stay discounts available?",
    answer: "Yes.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "periodic-review",
    question: "Is there a periodic review during long stays?",
    answer: "No.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "belongings-storage",
    question: "Can belongings be left on-site during breaks?",
    answer: "Yes.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  
  // Early Exit, Damage & Rule Breach
  {
    id: "early-departure",
    question: "Is there a refund for early departure?",
    answer: "No.",
    category: "EVENTS, GROUPS & LONG STAYS"
  },
  {
    id: "property-damage",
    question: "How is property damage handled?",
    answer: "Charged at full replacement cost.",
    category: "EVENTS, GROUPS & LONG STAYS"
  }
];

const categories = ["All", "STAY, BOOKING & DAILY LIVING", "SILENCE, CONDUCT & SAFETY", "EVENTS, GROUPS & LONG STAYS"];

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
      <FAQHero />
      <FAQPhilosophy />
      
      {/* Category Filter */}
      <section className="py-12 px-4 md:px-10 border-b border-earth-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
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

      <Footer />
    </div>
  );
}