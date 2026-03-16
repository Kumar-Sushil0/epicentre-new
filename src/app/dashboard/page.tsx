"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { api, endpoints } from "@/utils/api";
import LoginForm from "../components/LoginForm";
import Dashboard from "../components/Dashboard";
import QuestionSlider from "../components/QuestionSlider";

const QUESTIONS = [
  "Transitional Clarity | How clearly do you feel you are between chapters of life or work?",
  "Confrontation Readiness | How ready are you to face the thoughts that may emerge with uninterrupted attention?",
  "Silence Comfort | How comfortable are you with extended periods of silence?",
  "Mode of Engagement | Which direction are you leaning toward during your visit?",
  "Intentionality of Visit | How clearly defined is the purpose of your visit to the Silent Club?",
];

type PageView = "login" | "intro" | "questions" | "signup" | "submitted";

function DashboardInner() {
  const { isAuthenticated, isLoading } = useAuth();
  const searchParams = useSearchParams();
  const [view, setView] = useState<PageView>("login");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0, 0]);
  const [submitting, setSubmitting] = useState(false);

  // If coming from /login with ?signup=1, jump straight to intro
  useEffect(() => {
    if (searchParams.get("signup") === "1") {
      setView("intro");
    }
  }, [searchParams]);

  const handleAnswerChange = (value: number) => {
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
      setView("signup");
    }
  };

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

  if (isAuthenticated) {
    return (
      <div className="fixed inset-0">
        <Dashboard />
      </div>
    );
  }

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

  if (view === "questions") {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl space-y-8">
          <p className="text-sm font-medium text-gold-500">
            {String(questionIndex + 1).padStart(2, "0")}/{String(QUESTIONS.length).padStart(2, "0")} —{" "}
            <span className="text-[#e7dfd3]">{QUESTIONS[questionIndex]}</span>
          </p>
          <QuestionSlider
            value={answers[questionIndex]}
            onChange={handleAnswerChange}
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

  if (view === "submitted") {
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

  return (
    <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4">
      <LoginForm
        onSignupClick={() => setView("intro")}
        onAuthComplete={() => {}}
      />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-earth-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <DashboardInner />
    </Suspense>
  );
}
