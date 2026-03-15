"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { api, endpoints } from "@/utils/api";
import MembershipRenewal from "./MembershipRenewal";
import WalletLow from "./WalletLow";
import ApplicationReceived from "./ApplicationReceived";
import InviteConfirmed from "./InviteConfirmed";
import BookCycle from "./BookCycle";

type TabKey = "book" | "history" | "membership" | "notifications";
type SectionKey = "membership" | "profile" | "settings";

const Dashboard = () => {
  // Toggle these booleans to force specific full-screen views from the prototype
  const SHOW_APPLICATION_RECEIVED = false;
  const SHOW_INVITE_CONFIRMED = false;

  const [activeTab, setActiveTab] = useState<TabKey>("book");
  const [isTopupOpen, setIsTopupOpen] = useState(false);
  const [selectedTopup, setSelectedTopup] = useState<number | "custom" | null>(
    null
  );
  const [showRenewalView, setShowRenewalView] = useState(false);
  const [showWalletLowView, setShowWalletLowView] = useState(true);
  const [activeSection, setActiveSection] =
    useState<SectionKey>("membership");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [walletMembershipYear, setWalletMembershipYear] = useState<number | null>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  // Load wallet snapshot for the logged-in user
  const loadWallet = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : null;
      if (!token) return;

      const result = await api.get<{ wallet: { balance: number; membershipYear?: number } }>(
        endpoints.wallet.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (result?.wallet) {
        setWalletBalance(result.wallet.balance);
        if (typeof result.wallet.membershipYear === "number") {
          setWalletMembershipYear(result.wallet.membershipYear);
        }
      }
    } catch (error) {
      console.error("Failed to load wallet snapshot", error);
    }
  };

  useEffect(() => {
    void loadWallet();
  }, []);

  const openTopup = () => setIsTopupOpen(true);
  const closeTopup = () => {
    setIsTopupOpen(false);
    setSelectedTopup(null);
  };

  const handleTopupSelect = (value: number | "custom") => {
    setSelectedTopup(value);
  };

  const handleConfirmTopup = async () => {
    try {
      if (selectedTopup == null || selectedTopup === "custom") {
        return;
      }

      const token =
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : null;
      if (!token) return;

      await api.post(
        endpoints.wallet.topup,
        { amount: selectedTopup },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await loadWallet();
    } catch (error) {
      console.error("Failed to top up wallet", error);
    } finally {
      closeTopup();
    }
  };

  // Force-show "Application Received" screen when flag is true
  if (SHOW_APPLICATION_RECEIVED) {
    return (
      <div className="relative w-full px-6 md:px-10 pb-16 text-earth-100">
        <ApplicationReceived
          applicantEmail="arjun@mehta.co"
          subject="Your application — The Silent Club 2026"
          from="hello@thesilent.club"
          body={
            "Your application has been received. D.D. reviews each submission personally against a defined alignment checklist. You will be contacted within 7 days with a decision."
          }
        />
      </div>
    );
  }

  // Force-show "Invite Confirmed" screen when flag is true
  if (SHOW_INVITE_CONFIRMED) {
    return (
      <div className="relative w-full px-6 md:px-10 pb-16 text-earth-100">
        <InviteConfirmed
          from="hello@thesilent.club"
          subject="Your invitation — The Silent Club 2026"
          body={
            "Your application has been reviewed. You are aligned.\n\nAnnual membership: ₹1,00,000. This funds your membership and your visit wallet — all cycle visits are deducted from this balance.\n\nYour spot is held for 7 days. After that, it returns to the waitlist."
          }
        />
      </div>
    );
  }

  if (showWalletLowView) {
    return (
      <div className="relative w-full px-6 md:px-10 pb-16 text-earth-100">
        <WalletLow
          currentBalance={0}
          requiredForNextCycle={10000}
          onTopUp={() => {
            setShowWalletLowView(false);
            openTopup();
          }}
          onBack={() => setShowWalletLowView(false)}
        />
      </div>
    );
  }

  if (showRenewalView) {
    return (
      <div className="relative w-full px-6 md:px-10 pb-16 text-earth-100">
        <button
          onClick={() => setShowRenewalView(false)}
          className="mb-4 text-[0.8rem] tracking-[0.12em] uppercase text-earth-400 hover:text-earth-100"
        >
          ← Back to My Membership
        </button>
        <MembershipRenewal />
      </div>
    );
  }

  return (
    <div className="relative w-full px-6 md:px-10 pb-16 text-earth-100">

      {/* Profile section */}
      {activeSection === "profile" && (
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1
                className="text-4xl md:text-5xl font-normal text-earth-50"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Profile
              </h1>
              <p className="mt-2 text-[0.85rem] text-earth-400">
                A high‑level view of who you are inside the estate.
              </p>
            </div>
          </div>

          {/* Hero Identity Card - Full Width */}
          <div className="relative rounded-3xl border border-gold-500/30 bg-gradient-to-br from-earth-900/90 via-earth-900/70 to-earth-950/90 p-8 md:p-10 shadow-2xl overflow-hidden group hover:border-gold-500/50 transition-all duration-300">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(217, 179, 108) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />
            </div>

            <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Large Avatar with Gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gold-500/60 bg-gradient-to-br from-earth-900 via-earth-950 to-earth-900 text-gold-300 text-4xl md:text-5xl font-medium shadow-2xl ring-4 ring-gold-500/10"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {(user?.name || "M").charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Identity Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-normal text-earth-50 mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {user?.name || "Member"}
                  </h2>
                  <div className="flex items-center gap-2 text-[0.9rem] text-earth-300 mb-3">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold-400">
                      mail
                    </span>
                    <span>{user?.email || "hello@thesilent.club"}</span>
                  </div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/40 shadow-lg">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                    <span className="text-[0.75rem] tracking-[0.14em] uppercase text-emerald-300 font-medium">
                      Active Member · 2026 Cohort
                    </span>
                  </div>
                </div>

                {/* Membership Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-earth-800/50">
                  <div className="group/item">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[1.2rem] text-gold-400 group-hover/item:scale-110 transition-transform">
                        calendar_month
                      </span>
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500">
                        Member since
                      </div>
                    </div>
                <div className="text-[0.95rem] text-earth-100 font-medium">
                  {user?.memberSince
                    ? new Date(user.memberSince).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "9 March 2026"}
                </div>
                  </div>
                  <div className="group/item">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[1.2rem] text-gold-400 group-hover/item:scale-110 transition-transform">
                        verified
                      </span>
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500">
                        Alignment review
                      </div>
                    </div>
                    <div className="text-[0.95rem] text-earth-100 font-medium">
                      {user?.alignmentReviewDate
                        ? new Date(user.alignmentReviewDate).toLocaleDateString(
                            "en-IN",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )
                        : "March 2027"}
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[1.2rem] text-gold-400 group-hover/item:scale-110 transition-transform">
                        groups
                      </span>
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500">
                        Cohort
                      </div>
                    </div>
                    <div className="text-[0.95rem] text-earth-100 font-medium">
                      {user?.cohortLabel || "Post‑Exit Founders · 2026"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Themes */}
            <div className="relative mt-8 pt-6 border-t border-earth-800/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[1.2rem] text-gold-400">
                  label
                </span>
                <div className="text-[0.75rem] tracking-[0.16em] uppercase text-earth-400">
                  Working themes
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {(user?.workingThemes && user.workingThemes.length > 0
                  ? user.workingThemes
                  : ["Recovery from scale", "Deep work cycles", "Designing next chapter"]
                ).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-gold-500/50 bg-gradient-to-r from-gold-500/10 to-gold-500/5 px-4 py-2 text-[0.8rem] text-gold-200 shadow-md hover:shadow-lg hover:border-gold-500/70 hover:bg-gold-500/15 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Preferences & Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Edges & Preferences Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-900/80 to-earth-950/80 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-gold-400">
                    tune
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Edges & Preferences
                </h2>
              </div>
              
              <p className="text-[0.85rem] text-earth-400 mb-6 leading-relaxed">
                These cues help the estate team shape cycles and contact in a way that protects your attention.
              </p>

              <div className="space-y-5">
                <div className="group/pref p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/pref:scale-110 transition-transform">
                      volume_off
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Noise tolerance
                      </div>
                      <p className="text-[0.9rem] text-earth-200 leading-relaxed">
                        {user?.noiseTolerance ||
                          "Prefers quiet zones, low footfall, and predictable patterns."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/pref p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/pref:scale-110 transition-transform">
                      schedule
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Ideal work window
                      </div>
                      <p className="text-[0.9rem] text-earth-200 leading-relaxed">
                        {user?.idealWorkWindow ||
                          "09:00 – 13:00, 16:00 – 19:00. Minimal interruptions."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/pref p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/pref:scale-110 transition-transform">
                      notifications
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Contact preferences
                      </div>
                      <p className="text-[0.9rem] text-earth-200 leading-relaxed">
                        {user?.contactPreferences ||
                          "Email only, no calls unless urgent and estate‑related."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Notice Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-950/90 to-earth-900/70 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-earth-800/50 border border-earth-700 group-hover:bg-earth-800/70 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-earth-400">
                    info
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Profile Management
                </h2>
              </div>

              <div className="flex-1 flex items-center">
                <p className="text-[0.9rem] text-earth-400 leading-relaxed">
                  Profile editing and deeper configuration will be surfaced in a dedicated account area. For now, this view is a read‑only snapshot of your membership context.
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 pt-6 border-t border-earth-800/50">
                <div className="flex items-center gap-2 text-[0.75rem] text-earth-500">
                  <span className="material-symbols-outlined text-[1rem]">
                    lock
                  </span>
                  <span className="tracking-[0.08em] uppercase">Read-only view</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings section */}
      {activeSection === "settings" && (
        <div className="space-y-8">
          {/* Settings Header */}
          <div className="flex flex-col gap-3">
            <h1
              className="text-3xl md:text-4xl font-normal text-earth-50"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Settings
            </h1>
            <p className="text-[0.9rem] text-earth-400 leading-relaxed max-w-2xl">
              Configure your preferences, notifications, and account settings. Fine-grained controls will be enabled as services are connected.
            </p>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notifications Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-900/80 to-earth-950/80 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-gold-400 group-hover:scale-110 transition-transform">
                    notifications_active
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Notifications
                </h2>
              </div>
              
              <p className="text-[0.85rem] text-earth-400 mb-6 leading-relaxed">
                Control how and when you receive updates about your membership, bookings, and estate news.
              </p>

              <div className="space-y-4">
                <div className="group/notif p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/notif:scale-110 transition-transform">
                      mail
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500">
                          Membership & wallet emails
                        </div>
                        <span className="px-2 py-0.5 rounded-full border border-gold-500/40 text-[0.65rem] tracking-[0.12em] uppercase text-gold-300">
                          On
                        </span>
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Renewal reminders, wallet low alerts, and booking confirmations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/notif p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-earth-400 mt-0.5 group-hover/notif:scale-110 transition-transform">
                      campaign
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500">
                          Occasional announcements
                        </div>
                        <span className="px-2 py-0.5 rounded-full border border-earth-700 text-[0.65rem] tracking-[0.12em] uppercase text-earth-400">
                          Off
                        </span>
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        New cycles, experiments, or residency formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Security Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-900/80 to-earth-950/80 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-gold-400 group-hover:scale-110 transition-transform">
                    shield
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Privacy & Security
                </h2>
              </div>
              
              <p className="text-[0.85rem] text-earth-400 mb-6 leading-relaxed">
                Manage your data privacy preferences and account security settings.
              </p>

              <div className="space-y-4">
                <div className="group/privacy p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/privacy:scale-110 transition-transform">
                      lock
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Data protection
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Your profile and preferences are encrypted and never shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/privacy p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/privacy:scale-110 transition-transform">
                      password
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Authentication
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Secure login via email verification. Two-factor authentication coming soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-900/80 to-earth-950/80 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-gold-400 group-hover:scale-110 transition-transform">
                    tune
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Preferences
                </h2>
              </div>
              
              <p className="text-[0.85rem] text-earth-400 mb-6 leading-relaxed">
                Customize your experience with display, communication, and booking preferences.
              </p>

              <div className="space-y-4">
                <div className="group/pref p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/pref:scale-110 transition-transform">
                      palette
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Display settings
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Theme, typography, and visual density options for your dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/pref p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/pref:scale-110 transition-transform">
                      calendar_month
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Booking defaults
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Set preferred times, spaces, and default cycle durations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Management Card */}
            <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-900/80 to-earth-950/80 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem] text-gold-400 group-hover:scale-110 transition-transform">
                    manage_accounts
                  </span>
                </div>
                <h2 className="text-xl text-earth-100 font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Account Management
                </h2>
              </div>
              
              <p className="text-[0.85rem] text-earth-400 mb-6 leading-relaxed">
                Manage your membership details, billing information, and account status.
              </p>

              <div className="space-y-4">
                <div className="group/account p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/account:scale-110 transition-transform">
                      credit_card
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Billing & payments
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        View invoices, update payment methods, and manage wallet top-ups.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group/account p-4 rounded-xl bg-earth-950/50 border border-earth-800/50 hover:border-earth-700 hover:bg-earth-950/70 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[1.3rem] text-gold-400 mt-0.5 group-hover/account:scale-110 transition-transform">
                      person_edit
                    </span>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-earth-500 mb-2">
                        Profile editing
                      </div>
                      <p className="text-[0.85rem] text-earth-200 leading-relaxed">
                        Update your personal information, working themes, and preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Notice */}
          <div className="rounded-2xl border border-earth-800 bg-gradient-to-br from-earth-950/90 to-earth-900/70 p-8 shadow-xl hover:border-earth-700 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-earth-800/50 border border-earth-700 group-hover:bg-earth-800/70 transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-[1.4rem] text-earth-400">
                  info
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-earth-100 font-medium mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Settings Configuration
                </h3>
                <p className="text-[0.9rem] text-earth-400 leading-relaxed mb-4">
                  Fine-grained settings and real toggles will be wired once the notification service and account management systems are connected. For now this reflects the planned structure and available options.
                </p>
                <div className="flex items-center gap-2 text-[0.75rem] text-earth-500">
                  <span className="material-symbols-outlined text-[1rem]">
                    construction
                  </span>
                  <span className="tracking-[0.08em] uppercase">Configuration in progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Membership section (default) */}
      {activeSection === "membership" && (
        <>
      {/* Membership header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 border border-gold-500/40 px-3 py-1 text-[0.62rem] tracking-[0.16em] uppercase text-gold-400 rounded-full">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Active Member · 2026
          </div>
          <h1
            className="mt-3 text-3xl md:text-4xl font-normal text-earth-50"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            My Membership
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openTopup}
            className="inline-flex items-center justify-center px-4 py-2 text-[0.72rem] tracking-[0.14em] uppercase rounded-md border border-gold-500 text-gold-400 hover:bg-gold-500/10"
          >
            + Top Up Wallet
          </button>
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen((open) => !open)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-700 bg-earth-950/90 text-earth-100 hover:border-gold-500 hover:text-gold-300 shadow-lg transition-all duration-200"
              aria-label="Open profile menu"
            >
              <span className="text-sm font-medium">
                {(user?.name || "M").charAt(0).toUpperCase()}
              </span>
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-earth-800 bg-earth-950/95 backdrop-blur-xl shadow-2xl py-3 text-[0.75rem] z-50">
                {/* User Info Section */}
                <div className="px-4 pb-3 mb-3 border-b border-earth-800/60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-500/60 bg-gradient-to-br from-earth-900 to-earth-950 text-gold-300 text-lg font-medium shadow-lg">
                      {(user?.name || "M").charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-earth-50 truncate">
                        {user?.name || "Member"}
                      </p>
                      <p className="text-[0.7rem] text-earth-400 truncate">
                        {user?.email || "hello@thesilent.club"}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[0.65rem] tracking-[0.12em] uppercase text-emerald-300 font-medium">
                      Active · 2026
                    </span>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="px-2 mb-2">
                  {[
                    { key: "profile", label: "Profile", icon: "person" },
                    { key: "membership", label: "Membership", icon: "card_membership" },
                    { key: "settings", label: "Settings", icon: "settings" },
                  ].map((item) => {
                    const isActive = activeSection === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setActiveSection(item.key as SectionKey);
                          setIsProfileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.8rem] tracking-[0.08em] transition-all duration-200 ${
                          isActive
                            ? "text-gold-300 bg-gold-500/15 border border-gold-500/30 shadow-sm"
                            : "text-earth-300 hover:text-earth-50 hover:bg-earth-900/60 border border-transparent"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[1.2rem]">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-2 border-t border-earth-800/60" />

                {/* Logout */}
                <div className="px-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.8rem] tracking-[0.08em] text-earth-300 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[1.2rem]">
                      logout
                    </span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wallet low / renewal banners (static for now) */}
      <div className="space-y-3 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border border-gold-500/30 bg-gold-500/5 px-4 py-3 rounded-xl">
          <div>
            <h4 className="text-[0.8rem] tracking-[0.08em] uppercase text-earth-50 mb-1">
              Membership renewal due
            </h4>
            <p className="text-[0.78rem] text-earth-400">
              Your 2026 membership expires in 30 days. Renew to continue access.
            </p>
          </div>
          <button
            onClick={() => setShowRenewalView(true)}
            className="inline-flex items-center justify-center px-3 py-1.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-md border border-gold-500 text-gold-400 hover:bg-gold-500/10"
          >
            Renew →
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 border border-amber-500/40 bg-amber-500/10 px-4 py-3 rounded-xl">
          <p className="text-[0.8rem] text-amber-100">
            ⚠ Wallet below ₹10,000. Top up to continue booking visits.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowWalletLowView(true)}
              className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-md border border-amber-400 text-amber-200 hover:bg-amber-400/10"
            >
              View Wallet Screen →
            </button>
            <button
              onClick={openTopup}
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-md border border-amber-400 text-amber-200 hover:bg-amber-400/10"
            >
              Top Up →
            </button>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-gold-500/30 bg-earth-900/70 p-5">
          <span className="block text-[0.62rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
            Wallet Balance
          </span>
          <div
            className="text-3xl text-gold-400"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {walletBalance != null
              ? `₹${walletBalance.toLocaleString("en-IN")}`
              : "₹0"}
          </div>
          <div className="mt-3 h-[3px] w-full bg-earth-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>
        </div>

        <div className="rounded-2xl border border-gold-500/15 bg-earth-900/60 p-5">
          <span className="block text-[0.62rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
            Membership Year
          </span>
          <div
            className="text-3xl text-gold-400"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            2026
          </div>
          <p className="mt-1 text-[0.72rem] text-earth-500">
            Renews March 2027
          </p>
        </div>

        <div className="rounded-2xl border border-gold-500/15 bg-earth-900/60 p-5">
          <span className="block text-[0.62rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
            Visits This Year
          </span>
          <div
            className="text-3xl text-gold-400"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            0
          </div>
          <p className="mt-1 text-[0.72rem] text-earth-500">No visits yet</p>
        </div>

        <div className="rounded-2xl border border-gold-500/15 bg-earth-900/60 p-5">
          <span className="block text-[0.62rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
            Total Spent
          </span>
          <div
            className="text-3xl text-gold-400"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ₹0
          </div>
          <p className="mt-1 text-[0.72rem] text-earth-500">From wallet</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gold-500/15 mb-6 flex gap-2 overflow-x-auto">
        {[
          { key: "book", label: "Book a Visit" },
          { key: "history", label: "Visit History" },
          { key: "membership", label: "Membership Details" },
          { key: "notifications", label: "Notifications" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as TabKey)}
            className={`px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-gold-500 text-gold-400"
                : "border-transparent text-earth-500 hover:text-earth-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "book" && (
        <div>
          <BookCycle />
        </div>
      )}

      {activeTab === "history" && (
        <div>
          <div className="rounded-2xl border border-gold-500/15 bg-earth-900/70 p-5">
            <div className="divide-y divide-white/5 text-sm">
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-earth-100">
                    Membership payment — Wallet funded
                  </div>
                  <div className="text-[0.75rem] text-earth-500">
                    9 March 2026
                  </div>
                </div>
                <div className="text-sm text-emerald-400 font-medium">
                  +₹1,00,000
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[0.8rem] text-earth-500">
            No visits booked yet. Book a cycle to get started.
          </p>
        </div>
      )}

      {activeTab === "membership" && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold-500/20 bg-earth-900/70 p-5">
            <h2 className="mb-4 text-[0.9rem] tracking-[0.08em] uppercase text-earth-200">
              Membership Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Status
                </div>
                <span className="inline-flex items-center px-2 py-1 border border-emerald-500/50 rounded-full text-[0.65rem] tracking-[0.16em] uppercase text-emerald-300">
                  Active
                </span>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Cohort
                </div>
                <div className="text-earth-100">
                  Post-Exit Founders · 2026
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Member since
                </div>
                <div className="text-earth-100">9 March 2026</div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Valid until
                </div>
                <div className="text-earth-100">March 2027</div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Alignment review
                </div>
                <div className="text-earth-100">March 2027</div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                  Access type
                </div>
                <div className="text-earth-100">All cycles</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gold-500/20 bg-earth-900/70 p-5">
            <h2 className="mb-4 text-[0.9rem] tracking-[0.08em] uppercase text-earth-200">
              Wallet Structure
            </h2>
            <p className="mb-4 text-[0.82rem] text-earth-400 leading-relaxed">
              Your annual membership payment funds a single wallet. Every visit
              cycle is deducted at the applicable rate. When your balance is
              insufficient to book a cycle, you will be prompted to top up.
            </p>
            <div className="divide-y divide-white/5 text-sm">
              {[
                ["Day Cycle", "₹1,000"],
                ["Weekend Cycle", "₹10,000"],
                ["Weekday Cycle", "₹20,000"],
                ["Full Cycle", "₹1,00,000 / night"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-earth-400 text-[0.86rem]">
                    {label}
                  </span>
                  <span className="text-earth-100 text-[0.86rem]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "notifications" && (
        <div className="rounded-2xl border border-gold-500/20 bg-earth-900/70 p-5">
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-sm text-earth-100">
                  Payment confirmed — wallet funded
                </div>
                <div className="text-[0.75rem] text-earth-500">
                  9 March 2026
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gold-400" />
              <div>
                <div className="text-sm text-earth-100">
                  Welcome to the 2026 cohort
                </div>
                <div className="text-[0.75rem] text-earth-500">
                  9 March 2026 · Membership active
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Up modal */}
      {isTopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="max-w-md w-full rounded-2xl border border-gold-500/30 bg-earth-950/95 p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3
                  className="text-xl text-gold-400 mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Top Up Wallet
                </h3>
                <p className="text-[0.82rem] text-earth-400">
                  Select an amount to add to your visit balance.
                </p>
              </div>
              <button
                onClick={closeTopup}
                className="text-earth-500 hover:text-gold-400 text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                {
                  value: 25000,
                  label: "₹25,000",
                  sub: "~2 Weekend Cycles",
                },
                {
                  value: 50000,
                  label: "₹50,000",
                  sub: "~2 Weekday Cycles",
                },
                {
                  value: 100000,
                  label: "₹1,00,000",
                  sub: "Full replenishment",
                },
                {
                  value: "custom" as const,
                  label: "Custom",
                  sub: "Enter amount",
                },
              ].map((opt) => {
                const isSelected = selectedTopup === opt.value;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => handleTopupSelect(opt.value)}
                    className={`text-left border rounded-lg px-3 py-3 text-[0.8rem] transition-colors ${
                      isSelected
                        ? "border-gold-500 bg-gold-500/15 text-earth-50"
                        : "border-gold-500/25 bg-earth-900 text-earth-200 hover:border-gold-500/60 hover:bg-gold-500/5"
                    }`}
                  >
                    <div
                      className="text-lg text-gold-400 mb-1"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {opt.label}
                    </div>
                    <div className="text-[0.7rem] text-earth-400">
                      {opt.sub}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleConfirmTopup}
                disabled={selectedTopup == null}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-[0.74rem] tracking-[0.14em] uppercase rounded-md border border-gold-500 text-gold-300 hover:bg-gold-500/10 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Confirm Top Up →
              </button>
              <button
                type="button"
                onClick={closeTopup}
                className="text-[0.74rem] tracking-[0.12em] uppercase text-earth-400 hover:text-earth-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default Dashboard;

