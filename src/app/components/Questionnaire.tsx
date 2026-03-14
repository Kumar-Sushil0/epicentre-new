'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ServicesOffering from "./ServicesOffering";
import CyclesCheckout from "./CyclesCheckout";
import LoginForm from "./LoginForm";
import { api, endpoints } from "@/utils/api";
import { useAuth } from "@/app/context/AuthContext";

type Step = 1 | 2 | 3 | 4;

interface QuestionnaireIntroProps {
  onContinue: () => void;
}

function QuestionnaireIntro({ onContinue }: QuestionnaireIntroProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center space-y-4">
      <h2
        className="text-2xl md:text-3xl font-normal text-gold-500 mb-2"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Before you Explore Access
      </h2>
      <p className="text-[#e7dfd3] text-base md:text-lg font-body">
        The Silent Club is a structured environment for uninterrupted
        attention.
      </p>
      <p className="text-[#e7dfd3] text-base md:text-lg font-body">
        There are no programs, no hosts, and no instruction.
        <br />
        The environment holds silence. You decide how to use it.
      </p>
      <p className="text-[#e7dfd3] text-base md:text-lg font-body">
        Most visitors arrive between chapters — after completing something
        significant and before beginning the next.
      </p>
      <p className="text-[#e7dfd3] text-base md:text-lg font-body">
        If that moment resonates with you, continue.
      </p>

      <button
        type="button"
        onClick={onContinue}
        className="mt-4 inline-flex items-center gap-2 text-base md:text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 border-2 border-gold-500 rounded-lg px-5 md:px-6 py-2.5 md:py-3 bg-earth-950/50 backdrop-blur-sm transition-colors"
      >
        Continue →
      </button>
    </div>
  );
}

interface QuestionnaireQuestionsProps {
  questions: string[];
  answers: string[];
  questionIndex: number;
  onAnswerChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

function QuestionnaireQuestions({
  questions,
  answers,
  questionIndex,
  onAnswerChange,
  onBack,
  onNext,
}: QuestionnaireQuestionsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-2 text-[#e7dfd3] text-sm md:text-base font-body mb-4">
        <p className="font-medium text-gold-500">
          {String(questionIndex + 1).padStart(2, "0")}/
          {String(questions.length).padStart(2, "0")} —{" "}
          <span className="text-[#e7dfd3]">{questions[questionIndex]}</span>
        </p>
      </div>

      <div className="space-y-4 text-[#e7dfd3] text-sm md:text-base font-body">
        <textarea
          value={answers[questionIndex]}
          onChange={(e) => onAnswerChange(e.target.value)}
          rows={4}
          className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-[#e7dfd3] text-sm md:text-base font-body focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
        />
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="text-xs md:text-sm text-earth-400 hover:text-gold-500 underline"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-1 text-sm md:text-base font-normal text-gold-500 hover:text-gold-400 transition-colors"
        >
          {questionIndex < questions.length - 1
            ? "Next question →"
            : "View Silent Cycles →"}
        </button>
      </div>
    </div>
  );
}

interface QuestionnaireCyclesProps {
  questions: string[];
  answers: string[];
  showCheckout: boolean;
  selectedCycle: {
    label: string;
    accommodationType: 'dorm' | 'room';
    priceLabel: string;
  } | null;
  onSelectCycle: (cycle: {
    label: string;
    accommodationType: 'dorm' | 'room';
    priceLabel: string;
  }) => void;
}

function QuestionnaireCycles({
  questions,
  answers,
  showCheckout,
  selectedCycle,
  onSelectCycle,
}: QuestionnaireCyclesProps) {
  return (
    <div className="space-y-10">
      {/* When no card selected yet, show Silent Cycles.
          After a card click, hide cycles and show checkout only. */}
      {!showCheckout ? (
        <ServicesOffering onCycleSelect={onSelectCycle} />
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
  );
}

interface QuestionnaireSignupProps {
  onSignedUp: () => void;
}

function QuestionnaireSignup({ onSignedUp }: QuestionnaireSignupProps) {
  return (
    <div className="flex justify-center">
      <LoginForm
        initialView="signup"
        signupOnly
        onAuthComplete={onSignedUp}
      />
    </div>
  );
}

const APPLICATION_SUBMITTED_STATUSES = ['pending', 'approved', 'waitlisted', 'rejected'];

export default function Questionnaire() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", ""]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<{
    label: string;
    accommodationType: "dorm" | "room";
    priceLabel: string;
  } | null>(null);
  const [applicationStatus, setApplicationStatus] = useState<string | undefined>(
    user?.applicationStatus,
  );
  const [isMembershipPaying, setIsMembershipPaying] = useState(false);
  const [membershipPaid, setMembershipPaid] = useState(false);
  const [membershipError, setMembershipError] = useState<string | null>(null);

  // If user is logged in and has already submitted an application, show completion view only.
  // Refetch /auth/me when token exists so we have fresh applicationStatus (e.g. after submit or return visit).
  useEffect(() => {
    if (isLoading) return;
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) return;
    let cancelled = false;
    api.get<{ user: { applicationStatus?: string } }>(endpoints.auth.me, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((me) => {
        if (cancelled || !me.user) return;
        const status = me.user.applicationStatus;
        if (status) {
          setApplicationStatus(status);
          if (APPLICATION_SUBMITTED_STATUSES.includes(status)) {
            setStep(4);
          }
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [isLoading]);

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

  const handleQuestionsBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((index) => index - 1);
    } else {
      setStep(1);
    }
  };

  const handleQuestionsNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((index) => index + 1);
    } else {
      // Last question: if already logged in, submit application and show confirmation (skip signup)
      if (isAuthenticated) {
        handleApplicationSubmit();
      } else {
        setStep(3);
      }
    }
  };

  const handleApplicationSubmit = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      try {
        await api.post(
          endpoints.application.submit,
          {
            questions,
            answers,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setApplicationStatus("pending");
      } catch (error) {
        // Silent fail for now; the UI still shows "application submitted"
        console.error("Error submitting D.D. application:", error);
      }
    }

    setStep(4);
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
        {step === 1 && (
          <QuestionnaireIntro onContinue={() => setStep(2)} />
        )}

        {step === 2 && (
          <QuestionnaireQuestions
            questions={questions}
            answers={answers}
            questionIndex={questionIndex}
            onAnswerChange={handleAnswerChange}
            onBack={handleQuestionsBack}
            onNext={handleQuestionsNext}
          />
        )}

        {step === 3 && (
          <QuestionnaireSignup onSignedUp={handleApplicationSubmit} />
        )}

        {step === 4 && (
          <>
            {applicationStatus === "approved" ? (
              <div className="max-w-xl mx-auto text-center space-y-5">
                <h2
                  className="text-2xl md:text-3xl font-normal text-gold-500 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Membership enrollment
                </h2>
                <p className="text-[#e7dfd3] text-sm md:text-base font-body">
                  Your application has been approved. To activate your membership and fund your visit wallet,
                  complete the membership enrollment below.
                </p>
                <div className="mt-4 bg-earth-900 border border-gold-500/40 rounded-2xl px-6 py-5 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[0.75rem] uppercase tracking-[0.16em] text-earth-400">
                        Annual membership
                      </div>
                      <div className="text-sm text-earth-200">
                        The Silent Club — membership and visit wallet
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg md:text-xl text-gold-400">
                        ₹1,00,000
                      </div>
                      <div className="text-[0.7rem] text-earth-500">
                        One-time enrollment
                      </div>
                    </div>
                  </div>
                  <p className="text-[0.8rem] text-earth-400">
                    This payment is a simulation and does not process a real charge.
                    On confirmation, ₹1,00,000 will be added to your wallet balance.
                  </p>
                  {membershipError && (
                    <p className="text-xs text-red-400">{membershipError}</p>
                  )}
                  <button
                    type="button"
                    disabled={isMembershipPaying || membershipPaid}
                    onClick={async () => {
                      setMembershipError(null);
                      const token =
                        typeof window !== "undefined"
                          ? window.localStorage.getItem("token")
                          : null;
                      if (!token) {
                        setMembershipError("Please sign in again to complete enrollment.");
                        return;
                      }
                      try {
                        setIsMembershipPaying(true);
                        await api.post(
                          endpoints.wallet.topup,
                          {
                            amount: 100000,
                            label: "Membership enrollment",
                            reference: "dd-membership-initial",
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          },
                        );
                        setMembershipPaid(true);
                      } catch (error) {
                        console.error("Failed to simulate membership payment", error);
                        setMembershipError("Unable to complete enrollment. Please try again.");
                      } finally {
                        setIsMembershipPaying(false);
                      }
                    }}
                    className="mt-2 inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2.5 rounded-lg bg-gold-500 text-earth-950 text-sm md:text-base font-medium hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {membershipPaid
                      ? "Membership funded — check your dashboard"
                      : isMembershipPaying
                      ? "Processing…"
                      : "Confirm membership and fund wallet"}
                  </button>
                  {membershipPaid && (
                    <div className="mt-3 space-y-2">
                      <p className="text-[0.78rem] text-earth-400">
                        Your wallet has been funded with ₹1,00,000. You can view and use this balance from your dashboard.
                      </p>
                      <button
                        type="button"
                        onClick={() => router.push("/dashboard")}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gold-500/70 text-xs md:text-sm uppercase tracking-[0.16em] text-gold-300 hover:bg-gold-500/10 transition-colors"
                      >
                        Continue to dashboard
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="max-w-xl mx-auto text-center space-y-4">
                <h2
                  className="text-2xl md:text-3xl font-normal text-gold-500 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Application received
                </h2>
                <p className="text-[#e7dfd3] text-sm md:text-base font-body">
                  Thank you for taking the time to answer the D.D. questions and
                  create your account.
                </p>
                <p className="text-[#e7dfd3] text-sm md:text-base font-body">
                  Your application is now in the review queue. You&apos;ll receive
                  an email once a decision has been made—usually within 7 days.
                </p>
                <p className="text-earth-500 text-xs md:text-sm font-body">
                  Until then, there&apos;s nothing else you need to do.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

