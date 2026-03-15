"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import ServicesOffering from "./ServicesOffering";
import DatePicker from "./DatePicker";

type BookScreen = "select" | "checkout" | "confirmed";

interface SelectedCycle {
  label: string;
  accommodationType: "dorm" | "room";
  priceLabel: string;
}

export default function BookCycle() {
  const { user } = useAuth();
  const [screen, setScreen] = useState<BookScreen>("select");
  const [cycle, setCycle] = useState<SelectedCycle | null>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookedRanges, setBookedRanges] = useState<
    { checkIn: string | Date; checkOut: string | Date }[]
  >([]);

  useEffect(() => {
    if (!cycle) return;
    const load = async () => {
      try {
        const p = new URLSearchParams({
          cycleLabel: cycle.label,
          accommodationType: cycle.accommodationType,
        });
        const res = await fetch(`/api/cycle-availability?${p.toString()}`);
        if (!res.ok) return;
        const data = await res.json();
        setBookedRanges(data.bookedRanges || []);
      } catch (e) {
        console.error("Availability fetch error", e);
      }
    };
    void load();
  }, [cycle]);

  const handleSelect = (selection: SelectedCycle) => {
    setCycle(selection);
    setCheckIn(null);
    setCheckOut(null);
    setError("");
    setScreen("checkout");
  };

  const handleSubmit = async () => {
    if (!checkIn || !checkOut || !user || !cycle) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/cycle-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cycleLabel: cycle.label,
          accommodationType: cycle.accommodationType,
          priceLabel: cycle.priceLabel,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          name: user.name,
          email: user.email,
          phone,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setScreen("confirmed");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setScreen("select");
    setCycle(null);
    setCheckIn(null);
    setCheckOut(null);
    setPhone("");
    setNotes("");
    setError("");
  };

  // ── SCREEN: Select ──────────────────────────────────────────────────────────
  if (screen === "select") {
    return <ServicesOffering onCycleSelect={handleSelect} />;
  }

  // ── SCREEN: Checkout ────────────────────────────────────────────────────────
  if (screen === "checkout" && cycle) {
    return (
      <div className="space-y-4 py-2">
        {/* Back nav */}
        <button
          type="button"
          onClick={() => setScreen("select")}
          className="text-[0.75rem] tracking-[0.12em] uppercase text-earth-400 hover:text-gold-500 transition-colors"
        >
          ← Back to cycles
        </button>

        {/* Summary */}
        <div className="bg-earth-800/40 border border-earth-700/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-gold-500 text-lg">receipt_long</span>
            <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
              Booking Summary
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold-500 text-base">event</span>
              <div>
                <p className="text-[10px] text-earth-400">Cycle</p>
                <p className="text-xs text-earth-100 font-medium">{cycle.label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold-500 text-base">bed</span>
              <div>
                <p className="text-[10px] text-earth-400">Accommodation</p>
                <p className="text-xs text-earth-100 font-medium">
                  {cycle.accommodationType === "dorm" ? "Shared Dorm" : "Private Room"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold-500 text-base">payments</span>
              <div>
                <p className="text-[10px] text-earth-400">Price</p>
                <p className="text-xs text-gold-500 font-medium">{cycle.priceLabel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Date + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-earth-800/40 border border-earth-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500 text-lg">calendar_month</span>
              <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
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

          <div className="bg-earth-800/40 border border-earth-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500 text-lg">person</span>
              <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
                Contact Details
              </h3>
            </div>
            <p className="text-earth-300 text-xs mb-3">
              We&apos;ll confirm availability and share payment details with you.
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-earth-300 mb-1">Full Name</label>
                <input type="text" value={user?.name || ""} readOnly
                  className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-400 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-xs text-earth-300 mb-1">Email</label>
                <input type="email" value={user?.email || ""} readOnly
                  className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-400 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-xs text-earth-300 mb-1">Phone</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-xs text-earth-300 mb-1">Notes (optional)</label>
                <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requirements?"
                  className="w-full bg-earth-900/70 border border-earth-700/70 rounded-lg px-3 py-2 text-xs text-earth-100 placeholder:text-earth-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all resize-none" />
              </div>
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button type="button" disabled={loading || !checkIn || !checkOut} onClick={handleSubmit}
                className="w-full bg-gold-500 hover:bg-gold-400 text-earth-950 text-sm font-medium rounded-lg py-2.5 flex items-center justify-center gap-2 group disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                style={{ fontFamily: "Outfit, sans-serif" }}>
                {loading ? "Submitting…" : "Submit Booking Request"}
                {!loading && <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── SCREEN: Confirmed ───────────────────────────────────────────────────────
  return (
    <div className="py-4 max-w-2xl mx-auto">
      <div className="bg-earth-800/40 border border-earth-700/50 rounded-lg p-6 md:p-8 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border-2 border-green-500/40">
          <span className="material-symbols-outlined text-green-400 text-2xl">check_circle</span>
        </div>
        <h3 className="text-xl font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
          Request Received
        </h3>
        <p className="text-earth-300 text-sm leading-relaxed">
          The estate team will confirm availability and share payment details at{" "}
          <span className="text-earth-100">{user?.email}</span>.
        </p>
        <button type="button" onClick={reset}
          className="px-5 py-2.5 border border-gold-500/50 text-gold-500 text-sm rounded-lg hover:bg-gold-500/10 transition-all"
          style={{ fontFamily: "Outfit, sans-serif" }}>
          Book Another Cycle
        </button>
      </div>
    </div>
  );
}
