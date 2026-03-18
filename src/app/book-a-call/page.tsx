"use client";

export const dynamic = "force-dynamic";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallDateTimePicker from "../components/CallDateTimePicker";

const CALL_QUESTIONS = [
  "What are you stepping away from, or stepping toward?",
  "What would make this visit meaningful for you?",
  "Is there anything we should know before the call?",
];

function BookACallInner() {
  const searchParams = useSearchParams();
  const cycle = searchParams.get("cycle");
  const accommodation = searchParams.get("accommodation");
  const price = searchParams.get("price");

  const [callDateTime, setCallDateTime] = useState<{ date: Date | null; time: string | null }>({ date: null, time: null });
  const [answers, setAnswers] = useState(["", "", ""]);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<"form" | "confirmed">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleAnswer = (idx: number, val: string) => {
    setAnswers((prev) => { const c = [...prev]; c[idx] = val; return c; });
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/cycle-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cycleLabel: cycle,
          accommodationType: accommodation,
          priceLabel: price,
          callDate: callDateTime.date?.toISOString(),
          callTime: callDateTime.time,
          name, email, phone,
          questions: CALL_QUESTIONS,
          answers,
        }),
      });
      setModalStep("confirmed");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100">
      <Header />
      <section className="px-4 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Page header */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-normal text-earth-50" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Book a Call
            </h1>
            <p className="text-[0.9rem] text-earth-400">
              A short conversation to understand where you are and whether this is the right moment.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left — Date + time picker */}
            <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-400 text-[1.2rem]">calendar_month</span>
                <h2 className="text-[0.85rem] tracking-[0.1em] uppercase text-earth-300">Preferred date & time</h2>
              </div>
              <CallDateTimePicker value={callDateTime} onChange={setCallDateTime} />
            </div>

            {/* Right — cycle pill + questions + CTA */}
            <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-6 space-y-5 flex flex-col">

              {/* Cycle pill */}
              {cycle && (
                <div className="flex items-start gap-3 border border-gold-500/30 bg-gold-500/5 rounded-xl px-4 py-3">
                  <span className="material-symbols-outlined text-gold-400 text-[1.1rem] mt-0.5">event_available</span>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.14em] uppercase text-earth-500 mb-0.5">Selected cycle</p>
                    <p className="text-[0.95rem] text-gold-300 leading-snug">
                      {cycle}
                      {accommodation && <span className="text-earth-400 ml-2">· {accommodation === "dorm" ? "Shared Dorm" : "Private Room"}</span>}
                    </p>
                    {price && <p className="text-[0.78rem] text-earth-500 mt-0.5">{price}</p>}
                  </div>
                </div>
              )}

              {/* 3 questions */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold-400 text-[1.2rem]">chat</span>
                  <h2 className="text-[0.85rem] tracking-[0.1em] uppercase text-earth-300">A few questions</h2>
                </div>
                {CALL_QUESTIONS.map((q, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <label className="text-[0.78rem] text-earth-400 leading-relaxed block">
                      {String(idx + 1).padStart(2, "0")}. {q}
                    </label>
                    <textarea
                      rows={2}
                      value={answers[idx]}
                      onChange={(e) => handleAnswer(idx, e.target.value)}
                      placeholder="Your answer..."
                      className="w-full bg-earth-950/60 border border-earth-700 rounded-lg px-4 py-2.5 text-[0.85rem] text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    />
                  </div>
                ))}
              </div>

              {/* CTA — opens modal */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setModalStep("form"); setShowModal(true); }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase border border-gold-500 text-gold-400 hover:bg-gold-500/10 rounded-lg transition-colors"
                >
                  Book a Call →
                </button>
                <p className="text-center text-[0.72rem] text-earth-600">
                  No commitment. The call is a conversation, not a sales process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md bg-earth-950 border border-earth-800 rounded-2xl p-7 shadow-2xl">

            {modalStep === "form" ? (
              <>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-normal text-earth-50" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                      Your details
                    </h3>
                    <p className="text-[0.8rem] text-earth-500 mt-1">We'll use these to confirm the call.</p>
                  </div>
                  <button type="button" onClick={() => setShowModal(false)} className="text-earth-500 hover:text-earth-200 transition-colors">
                    <span className="material-symbols-outlined text-[1.3rem]">close</span>
                  </button>
                </div>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <input required type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[0.85rem] text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
                  <input required type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[0.85rem] text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
                  <input type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[0.85rem] text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
                  <button type="submit" disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase bg-gold-500 hover:bg-gold-400 text-earth-950 font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    {submitting ? "Submitting..." : "Confirm →"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-5 py-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 mx-auto">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">mark_email_read</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-earth-50" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    Meeting scheduled
                  </h3>
                  <p className="text-[0.85rem] text-earth-400 leading-relaxed">
                    A meeting link with D.D. has been sent to{" "}
                    <span className="text-earth-200">{email}</span>.
                  </p>
                  <p className="text-[0.75rem] text-earth-600">Check your spam if you don't see it.</p>
                </div>
                <a href="/" className="inline-block text-[0.78rem] tracking-[0.12em] uppercase text-gold-400 hover:text-gold-300 border border-gold-500/40 rounded-lg px-5 py-2.5 hover:bg-gold-500/10 transition-colors">
                  Return home
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default function BookACallPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-earth-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookACallInner />
    </Suspense>
  );
}
