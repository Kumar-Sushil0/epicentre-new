"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesOffering from "./ServicesOffering";
import CyclesCheckout from "./CyclesCheckout";

type Step = 1 | 2 | 3;

export default function Questionnaire() {
  const [step, setStep] = useState<Step>(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", ""]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<{
    label: string;
    accommodationType: 'dorm' | 'room';
    priceLabel: string;
  } | null>(null);

  const questions = [
    "What chapter are you currently between?",
    "What would uninterrupted attention allow you to confront?",
    "Are you comfortable with extended silence?",
    "Are you seeking withdrawal or structured inquiry?",
    "What would make this visit meaningful?",
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[questionIndex] = value;
      return copy;
    });
  };

  return (
    <section className="min-h-screen flex items-center py-12 md:py-16 px-4 md:px-16 bg-earth-950">
      <Link
        href="/"
        className="fixed top-4 left-4 z-20 text-earth-500 hover:text-gold-500 text-xl md:text-2xl"
        aria-label="Close and return to homepage"
      >
        ×
      </Link>
      <div className="w-full max-w-5xl mx-auto">
        {/* Step 1: Intro (previously InviteIntro on homepage) */}
        {step === 1 && (
          <div className="w-full max-w-3xl mx-auto text-center space-y-4">
            <h2
              className="text-2xl md:text-3xl font-normal text-gold-500 mb-2"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Before you Explore Access
            </h2>
            <p className="text-[#e7dfd3] text-base md:text-lg font-body">
              The Silent Club is a structured environment for uninterrupted attention.
            </p>
            <p className="text-[#e7dfd3] text-base md:text-lg font-body">
              There are no programs, no hosts, and no instruction.
              <br />
              The environment holds silence. You decide how to use it.
            </p>
            <p className="text-[#e7dfd3] text-base md:text-lg font-body">
              Most visitors arrive between chapters — after completing something significant and before beginning the next.
            </p>
            <p className="text-[#e7dfd3] text-base md:text-lg font-body">
              If that moment resonates with you, continue.
            </p>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 inline-flex items-center gap-2 text-base md:text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 border-2 border-gold-500 rounded-lg px-5 md:px-6 py-2.5 md:py-3 bg-earth-950/50 backdrop-blur-sm transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Questions */}
        {step === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2 text-[#e7dfd3] text-sm md:text-base font-body mb-4">
              <p className="font-medium text-gold-500">
                {String(questionIndex + 1).padStart(2, "0")}/{String(questions.length).padStart(2, "0")} —{" "}
                <span className="text-[#e7dfd3]">
                  {questions[questionIndex]}
                </span>
              </p>
            </div>

            <div className="space-y-4 text-[#e7dfd3] text-sm md:text-base font-body">
              <textarea
                value={answers[questionIndex]}
                onChange={(e) => handleAnswerChange(e.target.value)}
                rows={4}
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[#e7dfd3] text-sm md:text-base font-body focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
              />
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  if (questionIndex > 0) {
                    setQuestionIndex(questionIndex - 1);
                  } else {
                    setStep(1);
                  }
                }}
                className="text-xs md:text-sm text-earth-400 hover:text-gold-500 underline"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => {
                  if (questionIndex < questions.length - 1) {
                    setQuestionIndex(questionIndex + 1);
                  } else {
                    setStep(3);
                  }
                }}
                className="inline-flex items-center gap-1 text-sm md:text-base font-normal text-gold-500 hover:text-gold-400 transition-colors"
              >
                {questionIndex < questions.length - 1
                  ? "Next question →"
                  : "View Silent Cycles →"}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Silent Cycles + checkout */}
        {step === 3 && (
          <div className="space-y-10">
            {/* When no card selected yet, show Silent Cycles.
                After a card click, hide cycles and show checkout only. */}
            {!showCheckout ? (
              <ServicesOffering
                onCycleSelect={(selection) => {
                  setSelectedCycle(selection);
                  setShowCheckout(true);
                }}
              />
            ) : (
              selectedCycle && (
                <CyclesCheckout
                  selectedCycle={selectedCycle}
                  questions={questions}
                  answers={answers}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

