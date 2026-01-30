"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- Types ---
type Category = "stay" | "solitude" | "expression";

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
];

export default function BookingsPage() {
  const [cart, setCart] = useState<string[]>([]);
  // Use a Record to track which categories are open. Default all open.
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    stay: true,
    solitude: true,
    expression: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
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

  // Group items
  const sections = [
    { id: "stay", title: "01. The Stay", subtitle: "Select your accommodation", items: BOOKING_ITEMS.filter(i => i.category === "stay") },
    { id: "solitude", title: "02. Solitude", subtitle: "Quiet activities", items: BOOKING_ITEMS.filter(i => i.category === "solitude") },
    { id: "expression", title: "03. Expression", subtitle: "Creative outlets", items: BOOKING_ITEMS.filter(i => i.category === "expression") },
  ];

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100 flex flex-col">
      <Header />

      <div className="flex-grow pt-[72px] flex flex-col lg:flex-row relative">

        {/* LEFT SIDEBAR (Sticky Summary) */}
        <aside className="lg:w-[380px] lg:h-[calc(100vh-72px)] lg:sticky lg:top-[72px] bg-earth-900 border-r border-earth-800 flex flex-col z-30 shadow-2xl shrink-0">
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
              // Sidebar Items
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

        {/* RIGHT CONTENT (Minimal Table List) */}
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

            <div className="space-y-6">
              {sections.map((section) => {
                const isOpen = openSections[section.id];
                return (
                  <div key={section.id} className="border border-earth-800 rounded-lg bg-earth-900/20 overflow-hidden">
                    {/* Accordion Header */}
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

                    {/* Accordion Content (Table Rows) */}
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="border-t border-earth-800/50">
                        {section.items.map((item) => {
                          const isSelected = isInCart(item.id);
                          return (
                            <div
                              key={item.id}
                              onClick={() => toggleItem(item.id)} // Making whole row clickable for better UX
                              className={`group flex items-center gap-4 p-4 border-b border-earth-800/30 last:border-0 hover:bg-earth-900/60 cursor-pointer transition-colors ${isSelected ? 'bg-earth-900/80' : ''}`}
                            >
                              {/* Image Thumbnail */}
                              <div className="relative w-16 h-16 rounded overflow-hidden shrink-0 bg-earth-900 border border-earth-800/50">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className={`object-cover transition-opacity ${isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                                />
                                {isSelected && (
                                  <div className="absolute inset-0 bg-gold-500/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gold-500 text-lg drop-shadow-md">check_circle</span>
                                  </div>
                                )}
                              </div>

                              {/* Info */}
                              <div className="grow min-w-0 flex flex-col justify-center">
                                <div className="flex items-baseline gap-3 mb-1">
                                  <h3 className={`text-base font-medium truncate ${isSelected ? 'text-gold-500' : 'text-earth-100'}`}>{item.name}</h3>
                                  <span className="text-xs text-earth-400 font-normal hidden sm:inline-block">{item.priceDisplay}</span>
                                </div>
                                {/* Optional: Tiny description or hiding it as per request "minimal" */}
                                <p className="text-xs text-earth-300/50 truncate pr-4">{item.description}</p>
                                <span className="text-xs text-earth-400 font-normal sm:hidden mt-1">{item.priceDisplay}</span>
                              </div>

                              {/* Action Button */}
                              <div className="shrink-0 pl-2">
                                <button
                                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isSelected
                                      ? "bg-gold-500 border-gold-500 text-earth-950"
                                      : "border-earth-600 text-earth-600 group-hover:border-gold-500 group-hover:text-gold-500"
                                    }`}
                                >
                                  <span className="material-symbols-outlined text-sm font-bold">
                                    {isSelected ? "check" : "add"}
                                  </span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
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
