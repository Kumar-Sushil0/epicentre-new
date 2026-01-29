"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClosingSection from "../components/ClosingSection";

export default function BookingsPage() {
  const [selectedDates, setSelectedDates] = useState<{ start: number | null; end: number | null }>({ start: 12, end: 15 });
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState("October 2023");
  const [progress, setProgress] = useState(33);

  const rooms = [
    {
      id: "private-suite",
      name: "Private Suite",
      description: "A secluded haven with en-suite bath and meditation corner. Perfect for deep solitary reflection.",
      price: "$240 / night",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4c2esblA2WTSLGnJggkH8HcbsHqpD55k1MjTL3IU0qt07Xs0eHzpHSY2LVkEaAPuI97qDKpLqA4S35v5t4riOcz3QjaMWKWwm_Lrmde8eomWn_XjRaF0H9R3mJPESdh4HFSBtryt57pIA642QoDopq0O4EtjIgjNtwHfy8aRJqVZgbCDEPiMlrTF9hHWA6Ffw1SHYiExGfLptuWMJVXRis9LVo6cHMlDBhiAXRteyM5LRVm1JpiAXW6leqTvko8i4EvPHqDuhVkCD",
      features: [
        { icon: "king_bed", text: "King Size Bed" },
        { icon: "bathtub", text: "Private Bath" },
        { icon: "wifi", text: "High-Speed WiFi" },
      ],
    },
    {
      id: "sanctuary-dorm",
      name: "Sanctuary Dorm",
      description: "Shared space designed for community and quiet connection. Pod-style beds for privacy.",
      price: "$85 / night",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK51VTYsLiSPPEo4h3qzXLiuZJfL0WpGzAgs0lcGxEaAbGIJkCJlwdwcjYEQ2HHIaoOmaykU0h5lKwRw3RDlKHlhILkWYmGHjigcVlYYKB9gMdR8r7DfkhlhAZA1sQ41_C0DrozY4AAXgSoYmt6kX_hXMKP5tOHqSKZ0G4BmaygCCZVXcLK7yBxZrkNpIeFWs1SSWfYm7yqQLXLglBkotXfEwUz0FBbEn86-fVtB2E3QxiBvdim_z8fjYJf8RRZVqFRtPGUCAPRqki",
      features: [
        { icon: "single_bed", text: "Single Pod Bed" },
        { icon: "shower", text: "Shared Facilities" },
        { icon: "groups", text: "Community Lounge" },
      ],
    },
    {
      id: "nature-tent",
      name: "Nature Tent",
      description: "Immerse yourself in nature. Premium canvas tents with real beds and electricity.",
      price: "$120 / night",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKiorJYxFK27x8_8uE97ChYGYGujzlbm6leUe4xRKRk9AdqfnEZydtKMvVGBwJSStOGlefCmx9Y6h_T4FmaRMyHubdNpGq0D7hGrw9-fW4OCbKj-SuwwwOIXbAo4fJRlyqqv0JHzK3GmV-KbdO_dK64qPUtxBEfiFD4Hxu0C7IskU4YbhBiaTRVhkWCF00NtchDafnvgiNYkTgriv4pXLiQkMnF0ThShROuc00riNixgOkVojPbKb7Fs2vD1ntD4FYjk0f8p0aGx7V",
      features: [
        { icon: "bed", text: "Queen Bed" },
        { icon: "forest", text: "Forest View" },
        { icon: "lightbulb", text: "Electricity" },
      ],
    },
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleDateClick = (day: number) => {
    if (!selectedDates.start || day < selectedDates.start) {
      setSelectedDates({ start: day, end: null });
    } else if (selectedDates.start && !selectedDates.end) {
      setSelectedDates({ start: selectedDates.start, end: day });
    } else {
      setSelectedDates({ start: day, end: null });
    }
  };

  const isInRange = (day: number) => {
    if (!selectedDates.start || !selectedDates.end) return false;
    return day > selectedDates.start && day < selectedDates.end;
  };

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
    setProgress(66);
  };

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* LEFT SIDEBAR (Summary) */}
          <aside className="lg:col-span-4 lg:order-1 order-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Progress Card */}
              <div className="bg-earth-800 border border-earth-700 rounded-xl p-6 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-earth-50 mb-2">Your Retreat</h2>
                  <p className="text-earth-300 text-sm font-body">Review your sanctuary details.</p>
                </div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-earth-300">Booking Progress</span>
                    <span className="text-sm font-bold text-gold-500">{progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-earth-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                {/* Description List */}
                <div className="space-y-4 border-t border-earth-700 pt-5">
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-center group cursor-pointer hover:bg-white/5 p-2 rounded -mx-2 transition-colors">
                    <div>
                      <p className="text-xs text-earth-300 uppercase tracking-wide font-body">Dates</p>
                      <p className="text-earth-100 font-medium">
                        {selectedDates.start && selectedDates.end
                          ? `Oct ${selectedDates.start} - Oct ${selectedDates.end}`
                          : selectedDates.start
                            ? `Oct ${selectedDates.start}`
                            : "Select dates..."}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-earth-300 text-sm group-hover:text-gold-500">edit</span>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-center group cursor-pointer hover:bg-white/5 p-2 rounded -mx-2 transition-colors">
                    <div>
                      <p className="text-xs text-earth-300 uppercase tracking-wide font-body">Sanctuary</p>
                      <p className={`font-medium ${selectedRoom ? "text-earth-100" : "text-earth-100/50 italic"}`}>
                        {selectedRoom ? rooms.find((r) => r.id === selectedRoom)?.name : "Select a room..."}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-earth-300 text-sm group-hover:text-gold-500">edit</span>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-center group cursor-pointer hover:bg-white/5 p-2 rounded -mx-2 transition-colors">
                    <div>
                      <p className="text-xs text-earth-300 uppercase tracking-wide font-body">Guests</p>
                      <p className="text-earth-100 font-medium">1 Adult</p>
                    </div>
                    <span className="material-symbols-outlined text-earth-300 text-sm group-hover:text-gold-500">edit</span>
                  </div>
                </div>
                {/* Total */}
                <div className="mt-8 pt-6 border-t border-earth-700 flex justify-between items-baseline">
                  <span className="text-lg font-display text-earth-100">Total</span>
                  <span className="text-2xl font-bold text-gold-500">$0.00</span>
                </div>
              </div>
              {/* Help Box */}
              <div className="bg-earth-800/50 rounded-xl p-4 flex gap-4 items-start border border-earth-700/50">
                <span className="material-symbols-outlined text-earth-300">help</span>
                <div>
                  <p className="text-sm text-earth-100 font-medium mb-1">Need assistance?</p>
                  <p className="text-xs text-earth-300 leading-relaxed font-body">
                    Our concierge is available to help you plan your perfect stay.{" "}
                    <a className="underline hover:text-gold-500" href="#">
                      Contact us
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT (Steps) */}
          <div className="lg:col-span-8 lg:order-2 order-2 space-y-16 pb-20">
            {/* STEP 1: DATES */}
            <section className="scroll-mt-28" id="step-dates">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-500 text-earth-950 font-bold text-sm">1</div>
                <h2 className="text-2xl md:text-3xl font-bold text-earth-50">When will you arrive?</h2>
              </div>
              <div className="bg-earth-800 border border-earth-700 rounded-xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <button className="text-earth-300 hover:text-earth-100 transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <span className="text-lg font-medium tracking-wide text-earth-100">{currentMonth}</span>
                  <button className="text-earth-300 hover:text-earth-100 transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
                  {daysOfWeek.map((day) => (
                    <span key={day} className="text-xs text-earth-300 font-medium py-2 font-body">
                      {day}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-sm">
                  <div className="aspect-square"></div>
                  <div className="aspect-square"></div>
                  {calendarDays.map((day) => {
                    const isStart = day === selectedDates.start;
                    const isEnd = day === selectedDates.end;
                    const inRange = isInRange(day);
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`aspect-square flex items-center justify-center rounded-full transition-colors ${isStart || isEnd
                            ? "bg-gold-500 text-earth-950 font-bold shadow-[0_0_15px_rgba(197,160,101,0.3)]"
                            : inRange
                              ? "bg-gold-500/20 text-gold-500 font-medium"
                              : "text-earth-300/50 hover:text-earth-100 hover:bg-white/5"
                          }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* STEP 2: STAY TYPE */}
            <section className="scroll-mt-28" id="step-stay">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${selectedRoom ? "bg-gold-500 text-earth-950" : "bg-earth-700 text-earth-300"}`}>
                  2
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-earth-50">Choose your sanctuary</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`group bg-earth-800 border rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${selectedRoom === room.id ? "border-gold-500" : "border-earth-700 hover:border-gold-500/50"
                      } ${room.id === "nature-tent" ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        alt={room.name}
                        src={room.image}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-earth-800 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-earth-950/80 backdrop-blur text-earth-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {room.price}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-xl font-bold text-earth-100 mb-2">{room.name}</h3>
                      <p className="text-earth-300 text-sm mb-6 grow font-body">{room.description}</p>
                      <ul className="text-xs text-earth-300/80 mb-6 space-y-2">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">{feature.icon}</span>
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleRoomSelect(room.id)}
                        className={`w-full py-3 border font-medium rounded-lg transition-colors duration-300 ${selectedRoom === room.id
                            ? "border-gold-500 bg-gold-500 text-earth-950 hover:bg-gold-400"
                            : "border-earth-700 text-earth-300 hover:border-earth-100 hover:text-earth-100"
                          }`}
                      >
                        {selectedRoom === room.id ? "Selected" : `Select ${room.name.includes("Suite") ? "Room" : room.name.includes("Dorm") ? "Dorm" : "Tent"}`}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* STEP 3: GUEST DETAILS */}
            <section className="scroll-mt-28" id="step-guest">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-earth-700 text-earth-300 font-bold text-sm">3</div>
                <h2 className="text-2xl md:text-3xl font-bold text-earth-50">Guest Details</h2>
              </div>
              <div className="bg-earth-800 border border-earth-700 rounded-xl p-8">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-earth-300 font-body" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-earth-700 focus:border-gold-500 focus:ring-0 px-0 py-2 text-earth-100 placeholder-earth-100/20 transition-colors font-body"
                        id="firstName"
                        placeholder="e.g. Jane"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-earth-300 font-body" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-earth-700 focus:border-gold-500 focus:ring-0 px-0 py-2 text-earth-100 placeholder-earth-100/20 transition-colors font-body"
                        id="lastName"
                        placeholder="e.g. Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-earth-300 font-body" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-earth-700 focus:border-gold-500 focus:ring-0 px-0 py-2 text-earth-100 placeholder-earth-100/20 transition-colors font-body"
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-earth-300 font-body" htmlFor="special">
                      Dietary Requirements or Special Requests
                    </label>
                    <textarea
                      className="w-full bg-earth-950 border border-earth-700 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 p-3 text-earth-100 placeholder-earth-100/20 transition-colors font-body"
                      id="special"
                      placeholder="Let us know how we can make your stay comfortable..."
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      className="rounded border-earth-700 bg-earth-950 text-gold-500 focus:ring-offset-earth-900 focus:ring-gold-500"
                      id="terms"
                      type="checkbox"
                    />
                    <label className="text-sm text-earth-300 font-body" htmlFor="terms">
                      I agree to the{" "}
                      <a className="underline hover:text-earth-100" href="#">
                        Sanctuary Rules
                      </a>{" "}
                      and{" "}
                      <a className="underline hover:text-earth-100" href="#">
                        Cancellation Policy
                      </a>
                      .
                    </label>
                  </div>
                </form>
              </div>
            </section>

            {/* BOTTOM ACTIONS */}
            <div className="flex justify-end pt-6 border-t border-earth-700">
              <button
                onClick={() => setProgress(100)}
                className="bg-gold-500 hover:bg-gold-400 text-earth-950 font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <ClosingSection />
      <Footer />
    </main>
  );
}
