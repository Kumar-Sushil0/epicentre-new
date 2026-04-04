"use client";

export const dynamic = "force-dynamic";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CallDateTimePicker from "../components/CallDateTimePicker";
import toast from "react-hot-toast";

const CALL_QUESTIONS = [
  "When nothing is expected of you—do you know what to do with your time?",
  "Without noise, distraction, or input—do you move closer to yourself… or away?",
  "If left completely alone with your thoughts—would you stay, or reach for escape?",
];

function BookACallInner() {
  const searchParams = useSearchParams();
  const cycle = searchParams.get("cycle");
  const accommodation = searchParams.get("accommodation");
  const price = searchParams.get("price");
  const quantity = searchParams.get("quantity");
  const dates = searchParams.get("dates");

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

  const dateTimeComplete =
    callDateTime.date != null && callDateTime.time != null;
  const allQuestionsAnswered = answers.every((a) => a !== "");
  const canBook = dateTimeComplete && allQuestionsAnswered;

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canBook) return;
    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
      await fetch(`${apiBase}/call-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          cycleLabel: cycle,
          callDate: callDateTime.date?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
          callTime: callDateTime.time,
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
    <main className="min-h-screen bg-earth-950 text-earth-100 flex flex-col">
      <section className="flex-1 px-4 md:px-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">

          {/* Page header */}
          <div>
            <h1 className="text-xl md:text-2xl font-normal text-earth-50" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Request an Invite
            </h1>
            <p className="text-[0.8rem] text-earth-400 mt-0.5">
              Not everyone who reaches here is meant to enter.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Left — Date + time picker */}
            <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-4">
              <CallDateTimePicker value={callDateTime} onChange={setCallDateTime} />
            </div>

            {/* Right — cycle pill + questions + CTA */}
            <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-4 flex flex-col gap-3">

              {/* Booking summary */}
              {cycle && (
                <div className="border border-gold-500/30 bg-gold-500/5 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gold-500/20">
                    <span className="material-symbols-outlined text-gold-400 text-[1rem]">event_available</span>
                    <p className="text-[0.65rem] tracking-[0.14em] uppercase text-earth-500">Your Selection</p>
                  </div>
                  <div className="divide-y divide-earth-800/60 text-[0.82rem]">
                    <div className="flex justify-between px-4 py-2">
                      <span className="text-earth-400">Cycle</span>
                      <span className="text-gold-300">{cycle}</span>
                    </div>
                    {dates && (
                      <div className="flex justify-between px-4 py-2">
                        <span className="text-earth-400">Dates</span>
                        <span className="text-earth-200 text-right">
                          {dates.split(",").map(d => new Date(`${d}T00:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })).join(", ")}
                        </span>
                      </div>
                    )}
                    {accommodation && (
                      <div className="flex justify-between px-4 py-2">
                        <span className="text-earth-400">Accommodation</span>
                        <span className="text-earth-200">{accommodation === "dorm" ? "Shared Dorm" : "Private Room"}</span>
                      </div>
                    )}
                    {quantity && (
                      <div className="flex justify-between px-4 py-2">
                        <span className="text-earth-400">Guests</span>
                        <span className="text-earth-200">{quantity}</span>
                      </div>
                    )}
                    {(() => {
                      const rawMatch = (price || "").match(/₹([\d,]+)/);
                      const baseNum = rawMatch ? parseInt(rawMatch[1].replace(/,/g, ""), 10) : null;
                      const gst = baseNum ? Math.round(baseNum * 0.18) : null;
                      const total = baseNum && gst ? baseNum + gst : null;
                      const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");
                      if (!baseNum) return price ? (
                        <div className="flex justify-between px-4 py-2">
                          <span className="text-earth-400">Price</span>
                          <span className="text-gold-300">{price}</span>
                        </div>
                      ) : null;
                      return (
                        <>
                          <div className="flex justify-between px-4 py-2">
                            <span className="text-earth-400">Base rate</span>
                            <span className="text-gold-300">{fmt(baseNum)}</span>
                          </div>
                          <div className="flex justify-between px-4 py-2">
                            <span className="text-earth-400">GST (18%)</span>
                            <span className="text-earth-300">{fmt(gst!)}</span>
                          </div>
                          <div className="flex justify-between px-4 py-2.5 bg-gold-500/5">
                            <span className="text-earth-200 font-medium">Total Amount</span>
                            <span className="text-gold-400 font-semibold">{fmt(total!)}</span>
                          </div>
                          <div className="px-4 py-1.5">
                            <p className="text-earth-600 text-[0.68rem]">Incl. all taxes · Subject to confirmation</p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* 3 questions */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gold-500">Answer honestly. It matters.</p>
                </div>
                {CALL_QUESTIONS.map((q, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <label className="text-[0.78rem] text-earth-400 leading-relaxed block">
                      <span className="text-gold-500">{String(idx + 1).padStart(2, "0")}.</span> {q}
                    </label>
                    <div className="flex gap-2">
                      {["Yes","Can Try","No"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleAnswer(idx, opt)}
                          className={`flex-1 py-2 rounded-lg text-[0.8rem] border transition-colors ${
                            answers[idx] === opt
                              ? "bg-gold-500/20 border-gold-500 text-gold-300"
                              : "bg-earth-950/60 border-earth-700 text-earth-400 hover:border-earth-500"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA — opens modal */}
              <div className="space-y-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (!callDateTime.date) {
                      toast.error("Pick a date for your call first.");
                      return;
                    }
                    if (!callDateTime.time) {
                      toast.error("Select a time slot to continue.");
                      return;
                    }
                    const unanswered = answers.findIndex((a) => a === "");
                    if (unanswered !== -1) {
                      toast.error("Please answer all 3 questions before proceeding.");
                      return;
                    }
                    setModalStep("form");
                    setShowModal(true);
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase border rounded-lg transition-colors cursor-pointer ${
                    canBook
                      ? "border-gold-500 text-gold-400 hover:bg-gold-500/10"
                      : "border-earth-700 text-earth-600 bg-earth-900/50"
                  }`}
                >
                  Request an Invite →
                </button>
                <p className="text-center text-[0.72rem] text-grey-100">
                  A short conversation decides if this is for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
