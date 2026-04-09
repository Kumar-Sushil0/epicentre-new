"use client";

export const dynamic = "force-dynamic";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import QuestionSlider from "../components/QuestionSlider";

const CALL_QUESTIONS = [
  "When nothing is expected of you—do you know what to do with your time?",
  "Without noise, distraction, or input—do you move closer to yourself… or away?",
  "If left completely alone with your thoughts—would you stay, or reach for escape?",
];

type Step = 0 | 1 | 2 | 3 | 4;

function BookACallInner() {
  const searchParams = useSearchParams();
  const cycle = searchParams.get("cycle");
  const accommodation = searchParams.get("accommodation");
  const price = searchParams.get("price");
  const quantity = searchParams.get("quantity");
  const dates = searchParams.get("dates");

  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<number[]>([5, 5, 5]);
  const [bestTime, setBestTime] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleAnswer = (idx: number, val: number) => {
    const updated = [...answers]; updated[idx] = val; setAnswers(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
      const res = await fetch(`${apiBase}/call-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone,
          cycleLabel: cycle,
          bestTime,
          questions: CALL_QUESTIONS,
          answers,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        toast.error((err as { error?: string }).error || "Request failed");
        return;
      }
      setConfirmed(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const stepLabels = ["Question 1 of 3", "Question 2 of 3", "Question 3 of 3", "Availability", "Your details"];

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">

        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-normal text-earth-50 mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Request an Invite
          </h1>
          <p className="text-xs text-earth-500">Not everyone who reaches here is meant to enter.</p>
        </div>

        {!confirmed && (
          <>
            <p className="text-center text-xs text-earth-500 uppercase tracking-widest mb-6">{stepLabels[step]}</p>
          </>
        )}

        {/* CONFIRMED */}
        {confirmed ? (
          <div className="text-center space-y-5 py-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 mx-auto">
              <span className="material-symbols-outlined text-gold-400 text-2xl">mark_email_read</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-normal text-earth-50" style={{ fontFamily: "Cormorant Garamond, serif" }}>Request received</h3>
              <p className="text-sm text-earth-400 leading-relaxed">
                A confirmation has been sent to <span className="text-earth-200">{email}</span>. We'll be in touch.
              </p>
              <p className="text-xs text-earth-600">Check your spam if you don't see it.</p>
            </div>
            <a href="/" className="inline-block text-xs tracking-widest uppercase text-gold-400 hover:text-gold-300 border border-gold-500/40 rounded-lg px-5 py-2.5 hover:bg-gold-500/10 transition-colors">
              Return home
            </a>
          </div>

        /* QUESTIONS */
        ) : step <= 2 ? (
          <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-6 space-y-5">
            <p className="text-sm text-gold-500 text-center">Answer honestly. It matters.</p>
            <p className="text-sm text-earth-300 leading-relaxed text-center">
              <span className="text-gold-500 mr-1">{String(step + 1).padStart(2, "0")}.</span>
              {CALL_QUESTIONS[step]}
            </p>
            <div className="py-2">
              <QuestionSlider value={answers[step]} onChange={(val) => handleAnswer(step, val)} />
            </div>
            <button type="button"
              onClick={() => setStep((s) => (s + 1) as Step)}
              className="w-full py-3 rounded-lg text-sm font-medium transition-colors bg-gold-500 text-earth-950 hover:bg-gold-400">
              Continue →
            </button>
          </div>

        /* AVAILABILITY */
        ) : step === 3 ? (
          <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-6 space-y-4">
            <p className="text-sm text-earth-300 text-center">When will be the best time to reach out to you?</p>
            <textarea
              rows={3}
              placeholder="e.g. Weekday mornings, after 6pm, weekends..."
              value={bestTime}
              onChange={e => setBestTime(e.target.value)}
              className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-sm text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
            />
            <button type="button" disabled={!bestTime.trim()}
              onClick={() => setStep(4)}
              className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
                bestTime.trim() ? "bg-gold-500 text-earth-950 hover:bg-gold-400" : "bg-earth-800 text-earth-600 cursor-not-allowed"
              }`}>
              Continue →
            </button>
            <button type="button" onClick={() => setStep(2)} className="w-full text-xs text-earth-600 hover:text-earth-400 transition-colors">← Back</button>
          </div>

        /* DETAILS */
        ) : (
          <div className="bg-earth-900/60 border border-earth-800 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-lg font-normal text-earth-50 mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>Your details</h3>
              <p className="text-xs text-earth-500">We'll use these to confirm the call.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input required type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-sm text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
              <input required type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-sm text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
              <input type="tel" placeholder="Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)}
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-sm text-earth-100 placeholder:text-earth-600 focus:outline-none focus:border-gold-500/50 transition-colors" />
              <button type="submit" disabled={submitting}
                className="w-full py-3 rounded-lg text-sm font-medium bg-gold-500 hover:bg-gold-400 text-earth-950 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                {submitting ? "Submitting..." : "Confirm →"}
              </button>
            </form>
            <button type="button" onClick={() => setStep(3)} className="w-full text-xs text-earth-600 hover:text-earth-400 transition-colors">← Back</button>
          </div>
        )}

        {!confirmed && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {[0,1,2,3,4].map(s => (
              <div key={s} className={`rounded-full transition-all duration-300 ${
                s === step ? "w-6 h-2 bg-gold-500" : s < step ? "w-2 h-2 bg-gold-500/60" : "w-2 h-2 bg-earth-700"
              }`} />
            ))}
          </div>
        )}
      </div>
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
