"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api, endpoints } from "@/utils/api";
import LoginForm from "../components/LoginForm";
import Dashboard from "../components/Dashboard";

const QUESTIONS = [
  "What chapter are you currently between?",
  "What would uninterrupted attention allow you to confront?",
  "Are you comfortable with extended silence?",
  "Are you seeking withdrawal or structured inquiry?",
  "What would make this visit meaningful?",
];

// Pre-auth flow: login | intro | questions | signup | submitted
type PageView = "login" | "intro" | "questions" | "signup" | "submitted";

export default function DashboardPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const [view, setView] = useState<PageView>("login");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", ""]);
  const [submitting, setSubmitting] = useState(false);

  // Returning authenticated users skip everything
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setView("submitted"); // will render Dashboard below
    }
  }, [isAuthenticated, isLoading]);

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[questionIndex] = value;
      return copy;
    });
  };

  const handleQuestionNext = () => {
    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      // All questions answered — show signup form
      setView("signup");
    }
  };

  // Called after OTP verified (new signup complete)
  const handleSignupVerified = async () => {
    setSubmitting(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        await api.post(
          endpoints.application.submit,
          { questions: QUESTIONS, answers },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
    } catch (e) {
      console.error("Application submit error:", e);
    } finally {
      setSubmitting(false);
      setView("submitted");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Authenticated returning user
  if (isAuthenticated && view !== "submitted") {
    return (
      <div className="fixed inset-0">
        <Dashboard />
      </div>
    );
  }

  // --- Intro screen ---
  if (view === "intro") {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
            Before you enter
          </h2>
          <p className="text-[#e7dfd3] text-base md:text-lg">
            The Silent Club is a structured environment for uninterrupted attention.
          </p>
          <p className="text-[#e7dfd3] text-base md:text-lg">
            There are no programs, no hosts, and no instruction.<br />
            The environment holds silence. You decide how to use it.
          </p>
          <p className="text-[#e7dfd3] text-base md:text-lg">
            Most visitors arrive between chapters — after completing something significant and before beginning the next.
          </p>
          <p className="text-[#e7dfd3] text-base md:text-lg">
            If that moment resonates with you, continue.
          </p>
          <div className="flex flex-col items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setView("questions")}
              className="inline-flex items-center gap-2 text-base font-normal text-gold-500 hover:text-gold-400 border-2 border-gold-500 hover:border-gold-400 rounded-lg px-6 py-3 bg-earth-950/50 transition-colors"
            >
              Continue →
            </button>
            <button
              type="button"
              onClick={() => setView("login")}
              className="text-sm text-earth-400 hover:text-gold-500 underline"
            >
              ← Back to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Questions screen ---
  if (view === "questions") {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl space-y-6">
          <p className="text-sm font-medium text-gold-500">
            {String(questionIndex + 1).padStart(2, "0")}/{String(QUESTIONS.length).padStart(2, "0")} —{" "}
            <span className="text-[#e7dfd3]">{QUESTIONS[questionIndex]}</span>
          </p>
          <textarea
            value={answers[questionIndex]}
            onChange={(e) => handleAnswerChange(e.target.value)}
            rows={4}
            className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[#e7dfd3] text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-vertical"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => questionIndex > 0 ? setQuestionIndex((i) => i - 1) : setView("intro")}
              className="text-sm text-earth-400 hover:text-gold-500 underline"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleQuestionNext}
              className="text-sm font-normal text-gold-500 hover:text-gold-400 transition-colors"
            >
              {questionIndex < QUESTIONS.length - 1 ? "Next →" : "Continue to sign up →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Signup form (after questions) ---
  if (view === "signup") {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-4">
          <p className="text-center text-sm text-earth-400">
            Almost there — create your account to submit your application.
          </p>
          <LoginForm
            initialView="signup"
            onSignupVerified={handleSignupVerified}
            onBack={() => setView("questions")}
          />
        </div>
      </div>
    );
  }

  // --- Submitted confirmation ---
  if (view === "submitted") {
    if (isAuthenticated) return (
      <div className="fixed inset-0">
        <Dashboard />
      </div>
    );
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
        <div className="w-full max-w-xl text-center space-y-4">
          {submitting ? (
            <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto" />
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
                Application received
              </h2>
              <p className="text-[#e7dfd3] text-sm md:text-base">
                Thank you. Your application is now in the review queue. You&apos;ll hear back within 7 days.
              </p>
              <p className="text-earth-500 text-xs">Until then, there&apos;s nothing else you need to do.</p>
            </>
          )}
        </div>
      </div>
    );
  }

  // --- Default: Login screen ---
  return (
    <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
      <LoginForm
        onSignupClick={() => setView("intro")}
        onAuthComplete={() => { /* context re-renders, useEffect handles it */ }}
      />
    </div>
  );
}
