"use client";

import { useState, useEffect } from "react";
import DatePicker from "./DatePicker";

type CheckoutStep = "form" | "confirmation";

interface CyclesCheckoutProps {
  selectedCycle: {
    label: string;
    accommodationType: "dorm" | "room";
    priceLabel: string;
  };
  questions: string[];
  answers: number[];
}

export default function CyclesCheckout({
  selectedCycle,
  questions,
  answers,
}: CyclesCheckoutProps) {
  const [step, setStep] = useState<CheckoutStep>("form");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedRanges, setBookedRanges] = useState<
    { checkIn: string | Date; checkOut: string | Date }[]
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const formatDate = (date: Date | null) => {
    if (!date) return "Select date";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/cycle-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cycleLabel: selectedCycle.label,
          accommodationType: selectedCycle.accommodationType,
          priceLabel: selectedCycle.priceLabel,
          checkIn: checkIn?.toISOString(),
          checkOut: checkOut?.toISOString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
          questions: questions,
          answers: answers,
        }),
      });

      if (response.ok) {
        setStep("confirmation");
      } else {
        const error = await response.json();
        alert(error.error || "Failed to submit booking request");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const params = new URLSearchParams({
          cycleLabel: selectedCycle.label,
          accommodationType: selectedCycle.accommodationType,
        });
        const res = await fetch(`/api/cycle-availability?${params.toString()}`);
        if (!res.ok) return;
        const data = await res.json();
        setBookedRanges(data.bookedRanges || []);
      } catch (error) {
        console.error("Error fetching availability", error);
      }
    };

    fetchAvailability();
  }, [selectedCycle.label, selectedCycle.accommodationType]);

  return (
    <div className="mt-6 md:mt-8 max-w-7xl mx-auto">
      {step === "form" ? (
        <div className="space-y-4">
          {/* Booking Summary Card - Compact */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500 text-lg">receipt_long</span>
              <h3
                className="text-base md:text-lg font-normal text-gold-500"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Booking Summary
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-500 text-base">event</span>
                <div>
                  <p className="text-[10px] text-earth-400">Cycle Type</p>
                  <p className="text-xs text-earth-100 font-medium">{selectedCycle.label}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-500 text-base">bed</span>
                <div>
                  <p className="text-[10px] text-earth-400">Accommodation</p>
                  <p className="text-xs text-earth-100 font-medium">
                    {selectedCycle.accommodationType === "dorm" ? "Shared Dorm" : "Private Room"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-500 text-base">payments</span>
                <div>
                  <p className="text-[10px] text-earth-400">Price</p>
                  <p className="text-xs text-gold-500 font-medium">{selectedCycle.priceLabel}</p>
                </div>
              </div>
            </div>

            {answers.some((a) => a.trim() !== "") && (
              <div className="hidden pt-6 mt-6 border-t border-earth-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-gold-500 text-lg">chat</span>
                  <p className="text-sm text-earth-400 font-medium">Your Responses</p>
                </div>
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                  {answers.map((answer, idx) =>
                    answer.trim() ? (
                      <div key={idx} className="bg-earth-900/50 rounded-lg p-3">
                        <p className="text-xs text-earth-500 mb-1.5">
                          {questions[idx]}
                        </p>
                        <p className="text-sm text-earth-100 leading-relaxed">{answer}</p>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Date Selection & Contact Form - Compact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Date Picker */}
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-gold-500 text-lg">calendar_month</span>
                <h3
                  className="text-base font-normal text-gold-500"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Select Dates
                </h3>
              </div>
              <DatePicker
                checkIn={checkIn}
                checkOut={checkOut}
                onCheckInChange={setCheckIn}
                onCheckOutChange={setCheckOut}
                onClose={() => {}}
                variant="inline"
                unavailableRanges={bookedRanges}
              />
            </div>

            {/* Contact Form */}
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-gold-500 text-lg">person</span>
                <h3
                  className="text-base font-normal text-gold-500"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Contact Details
                </h3>
              </div>

              <p className="text-earth-300 text-xs mb-3 leading-relaxed">
                Share your details and we'll confirm availability and payment details.
              </p>

              <form
                className="space-y-3"
                onSubmit={handleSubmit}
              >
                <div className="space-y-1">
                  <label className="block text-xs text-earth-300 font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-earth-300 font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-earth-300 font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-earth-300 font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Additional Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special requirements?"
                    className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-gold-500 hover:bg-gold-400 text-earth-950 text-sm font-medium rounded-lg py-2.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  {!isSubmitting && (
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 md:p-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border-2 border-green-500/40">
              <span className="material-symbols-outlined text-green-400 text-2xl">check_circle</span>
            </div>
            
            <h3
              className="text-xl md:text-2xl font-normal text-gold-500"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Request Received
            </h3>
            
            <p className="text-earth-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              We've recorded your booking preferences. A member of the team will review availability and share payment and confirmation details with you shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setStep("form")}
                className="px-5 py-2.5 border border-gold-500/50 text-gold-500 text-sm rounded-lg hover:bg-gold-500/10 transition-all duration-300"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Make Another Booking
              </button>
              <a
                href="/"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-earth-950 text-sm rounded-lg transition-all duration-300 font-medium"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

