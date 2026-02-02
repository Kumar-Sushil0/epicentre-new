"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

// --- Types ---
type Category = "stay" | "solitude" | "expression" | "wellness" | "activities" | "residency" | "dining";

interface BookingItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  image: string;
  priceDisplay: string;
}

// --- Data ---
const BOOKING_ITEMS: BookingItem[] = [
  // STAY
  {
    id: "private-suite",
    category: "stay",
    name: "Private Suite",
    description: "A secluded haven with en-suite bath and meditation corner.",
    price: 240,
    priceDisplay: "$240 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4c2esblA2WTSLGnJggkH8HcbsHqpD55k1MjTL3IU0qt07Xs0eHzpHSY2LVkEaAPuI97qDKpLqA4S35v5t4riOcz3QjaMWKWwm_Lrmde8eomWn_XjRaF0H9R3mJPESdh4HFSBtryt57pIA642QoDopq0O4EtjIgjNtwHfy8aRJqVZgbCDEPiMlrTF9hHWA6Ffw1SHYiExGfLptuWMJVXRis9LVo6cHMlDBhiAXRteyM5LRVm1JpiAXW6leqTvko8i4EvPHqDuhVkCD",
  },
  {
    id: "sanctuary-dorm",
    category: "stay",
    name: "Sanctuary Dorm",
    description: "Shared space designed for community and quiet connection.",
    price: 85,
    priceDisplay: "$85 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK51VTYsLiSPPEo4h3qzXLiuZJfL0WpGzAgs0lcGxEaAbGIJkCJlwdwcjYEQ2HHIaoOmaykU0h5lKwRw3RDlKHlhILkWYmGHjigcVlYYKB9gMdR8r7DfkhlhAZA1sQ41_C0DrozY4AAXgSoYmt6kX_hXMKP5tOHqSKZ0G4BmaygCCZVXcLK7yBxZrkNpIeFWs1SSWfYm7yqQLXLglBkotXfEwUz0FBbEn86-fVtB2E3QxiBvdim_z8fjYJf8RRZVqFRtPGUCAPRqki",
  },
  {
    id: "nature-tent",
    category: "stay",
    name: "Nature Tent",
    description: "Immerse yourself in nature. Premium canvas tents.",
    price: 120,
    priceDisplay: "$120 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKiorJYxFK27x8_8uE97ChYGYGujzlbm6leUe4xRKRk9AdqfnEZydtKMvVGBwJSStOGlefCmx9Y6h_T4FmaRMyHubdNpGq0D7hGrw9-fW4OCbKj-SuwwwOIXbAo4fJRlyqqv0JHzK3GmV-KbdO_dK64qPUtxBEfiFD4Hxu0C7IskU4YbhBiaTRVhkWCF00NtchDafnvgiNYkTgriv4pXLiQkMnF0ThShROuc00riNixgOkVojPbKb7Fs2vD1ntD4FYjk0f8p0aGx7V",
  },
  // WELLNESS
  {
    id: "ayurveda-massage",
    category: "wellness",
    name: "Ayurvedic Massage",
    description: "Traditional healing massage.",
    price: 90,
    priceDisplay: "$90 / session",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "yoga-session",
    category: "wellness",
    name: "Private Yoga",
    description: "One-on-one yoga alignment.",
    price: 50,
    priceDisplay: "$50 / session",
    image: "https://images.unsplash.com/photo-1599447421416-64135deaa2fa?auto=format&fit=crop&w=1000&q=80",
  },
  // ACTIVITIES (EXPERIENCES)
  {
    id: "farm-tour",
    category: "activities",
    name: "Organic Farm Tour",
    description: "Learn about permaculture.",
    price: 30,
    priceDisplay: "$30 / tour",
    image: "https://images.unsplash.com/photo-1625246333195-5512a125ff79?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cooking-class",
    category: "activities",
    name: "Satvik Cooking",
    description: "Cook with fresh ingredients.",
    price: 65,
    priceDisplay: "$65 / class",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1000&q=80",
  },
  // SOLITUDE
  {
    id: "silent-walk",
    category: "solitude",
    name: "Guided Silent Walk",
    description: "A 2-hour guided walk through the bird sanctuary.",
    price: 40,
    priceDisplay: "$40 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0wWXU4xS6BdtUrmYdwyCzigduYrRYr-qCYXeK0zWlrvNOLsM3FMEGXX8kTmkhLnks7DhZDzfT0COpi6rQCM_50M_63Se2dqYtm2z5KZqH2e5PbTMNfNtN74k82J77cRkCQfiKirrMuhx6bzxc_e4GDhi0ZNhTobudsMGNM3bLJyFiXVsDOFZk5AyyP-hWPuyZoIAMhxXIkUZq3gxz5TS_aOMt8ZEVZ6t_6gP9caHyNF0-frTThfwxUiN5XqPvklltRv3_VRAtAx",
  },
  {
    id: "meditation-cave",
    category: "solitude",
    name: "Meditation Cave Access",
    description: "Exclusive 4-hour access to the underground chamber.",
    price: 60,
    priceDisplay: "$60 / block",
    image: "/noise2.png",
  },
  {
    id: "dark-retreat",
    category: "solitude",
    name: "Dark Retreat Experience",
    description: "A profound experience of complete darkness for 24 hours.",
    price: 150,
    priceDisplay: "$150 / day",
    image: "/noise.png",
  },
  // EXPRESSION
  {
    id: "clay-modeling",
    category: "expression",
    name: "Clay & Earth Workshop",
    description: "Work with local soil and clay.",
    price: 55,
    priceDisplay: "$55 / session",
    image: "/noise2.png",
  },
  {
    id: "painting-silence",
    category: "expression",
    name: "Painting in Silence",
    description: "Open-air painting session by the lake.",
    price: 70,
    priceDisplay: "$70 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtoMMPZz88PXkDYrxvHVR6uCSwqNqDnob4jaoXODBFLGl2UsdhfJ4s__nqrXImhLMN4QUasNvlWzk9Yo_824P4d9lIvSn1WbjbbWb28HQs30tbEHbQGS_MuR1epNrsedDPULlE6AaZ45m5He654JaT49FOV-G_q2QjNTxPSVrimly9bjXTZ01TiOoTicoKoqMBOqEzGfSDPcspcYTtn2f9nvsAvItSPnGcZhvCVsFO9kjJPBy1OdqHj_PbY0RZq_5hkBecKLlEATa",
  },
  {
    id: "voice-release",
    category: "expression",
    name: "Primal Voice Release",
    description: "A guided session to use sound/voice as a tool.",
    price: 45,
    priceDisplay: "$45 / session",
    image: "/noise.png",
  },
  // RESIDENCY
  {
    id: "writers-residency",
    category: "residency",
    name: "Writer's Residency",
    description: "7-day package for writers.",
    price: 800,
    priceDisplay: "$800 / week",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "artist-residency",
    category: "residency",
    name: "Artist's Studio",
    description: "Studio space and stay.",
    price: 850,
    priceDisplay: "$850 / week",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
  },
  // DINING
  {
    id: "satvik-meal",
    category: "dining",
    name: "Satvik Home Meals",
    description: "Daily vegetarian plans.",
    price: 25,
    priceDisplay: "$25 / day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2",
  },
  {
    id: "fresh-juice-pass",
    category: "dining",
    name: "Fresh Juice Pass",
    description: "Access to fresh juices daily.",
    price: 15,
    priceDisplay: "$15 / day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5",
  },
  {
    id: "weekend-bbq",
    category: "dining",
    name: "Weekend Barbeque",
    description: "Special event access.",
    price: 40,
    priceDisplay: "$40 / event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d",
  },
];

export default function BookingsPage() {
  const [cart, setCart] = useState<string[]>([]);
  // Open states for all accordions (top level and nested)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    stay: true,
    experiences: true,
    dining: true,
    wellness: false,
    activities: false,
    solitude: false,
    expression: false,
    residency: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isInCart = (id: string) => cart.includes(id);

  const toggleItem = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, id) => {
      const item = BOOKING_ITEMS.find((i) => i.id === id);
      return total + (item ? item.price : 0);
    }, 0);
  };

  const selectedItemsDetails = cart.map(id => BOOKING_ITEMS.find(i => i.id === id)).filter(Boolean) as BookingItem[];

  // Structure Definition
  const structure = [
    {
      id: "stay",
      title: "01. The Stay",
      subtitle: "Select your accommodation",
      type: "flat",
      items: BOOKING_ITEMS.filter(i => i.category === "stay")
    },
    {
      id: "experiences",
      title: "02. Experiences",
      subtitle: "Curate your journey",
      type: "nested",
      subSections: [
        { id: "wellness", title: "Wellness", items: BOOKING_ITEMS.filter(i => i.category === "wellness") },
        { id: "activities", title: "Activities", items: BOOKING_ITEMS.filter(i => i.category === "activities") },
        { id: "solitude", title: "Solitude", items: BOOKING_ITEMS.filter(i => i.category === "solitude") },
        { id: "expression", title: "Expression", items: BOOKING_ITEMS.filter(i => i.category === "expression") },
        { id: "residency", title: "Residency", items: BOOKING_ITEMS.filter(i => i.category === "residency") },
      ]
    }, // Add Dining here
    {
      id: "dining",
      title: "03. Dining",
      subtitle: "Nourishment plans",
      type: "flat",
      items: BOOKING_ITEMS.filter(i => i.category === "dining")
    }
  ];

  // Helper to render a list of items
  const renderItems = (items: BookingItem[]) => (
    <div className="border-t border-earth-800/50">
      {items.map((item) => {
        const isSelected = isInCart(item.id);
        return (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`group flex items-center p-4 border-b border-earth-800/30 last:border-0 hover:bg-earth-900/60 cursor-pointer transition-all duration-200 relative overflow-hidden ${isSelected ? 'bg-earth-900/90 border-l-[3px] border-l-gold-500' : 'border-l-[3px] border-l-transparent'}`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Title & Price */}
            <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between min-w-0 mr-4 gap-1 sm:gap-4 relative z-10 pl-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {isSelected && <span className="material-symbols-outlined text-gold-500 text-sm">check_circle</span>}
                  <h3 className={`text-base font-medium truncate transition-colors ${isSelected ? 'text-gold-500' : 'text-earth-100 group-hover:text-gold-200'}`}>{item.name}</h3>
                </div>
                {/* Re-introducing a tiny description for context if user wants "book shit" properly, they need info */}
                <p className="text-xs text-earth-400 truncate max-w-[200px] sm:max-w-xs">{item.description}</p>
              </div>
              <span className={`text-sm font-mono whitespace-nowrap transition-colors ${isSelected ? 'text-gold-500 font-bold' : 'text-earth-400 group-hover:text-gold-400'}`}>{item.priceDisplay}</span>
            </div>

            {/* Action Button */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shrink-0 relative z-10 ${isSelected
                ? "bg-gold-500 border-gold-500 text-earth-950 shadow-[0_0_15px_rgba(197,160,101,0.4)] scale-105"
                : "border-earth-700 text-earth-500 group-hover:border-gold-500 group-hover:text-gold-500 bg-earth-950/50 hover:bg-earth-900"
                }`}
            >
              <span className="material-symbols-outlined text-lg font-bold">
                {isSelected ? "remove" : "add"}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100 flex flex-col">
      <Header />

      <div className="flex-grow pt-[72px] flex flex-col lg:flex-row-reverse relative">

        {/* RIGHT SIDEBAR (Summary) */}
        <aside className="lg:w-[380px] lg:h-[calc(100vh-72px)] lg:sticky lg:top-[72px] bg-earth-900 border-b lg:border-b-0 lg:border-l border-earth-800 flex flex-col z-30 shadow-2xl shrink-0">
          <div className="p-6 border-b border-earth-800 bg-earth-900 z-10">
            <h2 className="text-xl font-serif text-gold-500 mb-1" style={{ fontFamily: 'Trirong, serif' }}>Your Retreat</h2>
            <p className="text-earth-300/60 text-xs font-body">Review selected items.</p>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar-hide">
            {cart.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-earth-800/50 rounded-lg">
                <p className="text-earth-300/40 text-sm">No items selected.</p>
              </div>
            ) : (
              selectedItemsDetails.map((item) => (
                <div key={item.id} className="group flex justify-between items-center bg-earth-950/50 border border-earth-800/50 rounded p-3 hover:border-gold-500/20 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="relative w-8 h-8 rounded bg-earth-900 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover opacity-80" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-earth-100 truncate">{item.name}</p>
                      <p className="text-xs text-earth-400">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gold-500">${item.price}</span>
                    <button onClick={() => toggleItem(item.id)} className="text-earth-500 hover:text-red-400 transition-colors">
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-earth-800 bg-earth-900 mt-auto">
            <div className="flex justify-between items-end mb-4">
              <span className="text-earth-300 text-sm">Total</span>
              <span className="text-2xl font-serif text-gold-500">${calculateTotal()}</span>
            </div>
            <button
              className="w-full bg-gold-500 text-earth-950 font-bold py-3.5 rounded hover:bg-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
              disabled={cart.length === 0}
            >
              Proceed
            </button>
          </div>
        </aside>

        {/* LEFT CONTENT */}
        <div className="flex-grow bg-earth-950">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">

            <div className="mb-16">
              <h1 className="text-3xl md:text-5xl text-earth-100 font-serif mb-4" style={{ fontFamily: 'Trirong, serif' }}>
                Design Your <span className="italic text-gold-500">Silence</span>
              </h1>
              <p className="text-earth-300/60 font-body text-sm max-w-xl leading-relaxed">
                Build your schedule efficiently. Select what calls to you.
              </p>
            </div>

            <div className="mb-12">
              <BookingForm />
            </div>

            <div className="space-y-6">
              {structure.map((section) => {
                const isOpen = openSections[section.id];
                return (
                  <div key={section.id} className="border border-earth-800 rounded-lg bg-earth-900/20 overflow-hidden">
                    {/* Top Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 hover:bg-earth-900/40 transition-colors text-left"
                    >
                      <div>
                        <h2 className="text-xl font-serif text-earth-50" style={{ fontFamily: 'Trirong, serif' }}>{section.title}</h2>
                        <p className="text-xs text-earth-300/50 mt-1 font-body">{section.subtitle}</p>
                      </div>
                      <span className={`material-symbols-outlined text-earth-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Top Section Content */}
                    <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>

                      {/* FLAT LIST */}
                      {section.type === 'flat' && section.items && renderItems(section.items)}

                      {/* NESTED LIST */}
                      {section.type === 'nested' && section.subSections && (
                        <div className="border-t border-earth-800/50 bg-earth-950/20">
                          {section.subSections.map((sub, idx) => {
                            const isSubOpen = openSections[sub.id];
                            return (
                              <div key={sub.id} className={`border-b border-earth-800/30 last:border-0`}>
                                <button
                                  onClick={() => toggleSection(sub.id)}
                                  className="w-full flex items-center justify-between py-4 px-6 hover:bg-earth-900/40 transition-colors"
                                >
                                  <span className="text-base text-earth-200 font-medium">{sub.title}</span>
                                  <span className={`material-symbols-outlined text-earth-500 text-sm transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`}>
                                    expand_more
                                  </span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${isSubOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                  {renderItems(sub.items)}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
