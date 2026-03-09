"use client";

import { useState } from "react";
import MembershipRenewal from "./MembershipRenewal";
import WalletLow from "./WalletLow";
import ApplicationReceived from "./ApplicationReceived";
import InviteConfirmed from "./InviteConfirmed";

type TabKey = "book" | "history" | "membership" | "notifications";

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

  const openTopup = () => setIsTopupOpen(true);
  const closeTopup = () => {
    setIsTopupOpen(false);
    setSelectedTopup(null);
  };

  const handleTopupSelect = (value: number | "custom") => {
    setSelectedTopup(value);
  };

  const handleConfirmTopup = () => {
    // In the prototype this would update wallet state and notifications.
    // For now we just close the modal to mirror the flow visually.
    closeTopup();
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

        <button
          onClick={openTopup}
          className="inline-flex items-center justify-center px-4 py-2 text-[0.72rem] tracking-[0.14em] uppercase rounded-md border border-gold-500 text-gold-400 hover:bg-gold-500/10"
        >
          + Top Up Wallet
        </button>
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
            ₹1,00,000
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
          <p className="text-[0.8rem] text-earth-400 mb-4">
            Select a cycle. Date selection follows.
          </p>

          {/* Cycle grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              {
                name: "Day Cycle",
                desc: "Short recalibration. Immediate correction.",
                price: "₹1,000 · Up to 4 hrs",
              },
              {
                name: "Weekend Cycle",
                desc: "Structured withdrawal. Two nights.",
                price: "₹10,000 · 2 nights / 3 days",
              },
              {
                name: "Weekday Cycle",
                desc: "Extended silence. Deep sustained work.",
                price: "₹20,000 · 4 nights / 5 days",
              },
              {
                name: "Full Cycle",
                desc: "Complete environmental control.",
                price: "₹1,00,000 / night",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="cursor-pointer rounded-xl border border-gold-500/20 bg-earth-900/70 px-4 py-5 text-center hover:border-gold-500/50 hover:bg-gold-500/5 transition-colors"
              >
                <div
                  className="mb-1 text-lg text-gold-400"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {c.name}
                </div>
                <div className="mb-2 text-[0.7rem] text-earth-400">
                  {c.desc}
                </div>
                <div className="text-[0.8rem] text-earth-100">{c.price}</div>
              </div>
            ))}
          </div>

          {/* Placeholder booking panel */}
          <div className="rounded-2xl border border-gold-500/15 bg-earth-900/70 p-5">
            <p className="text-[0.8rem] text-earth-400">
              Calendar selection and confirmation details from the prototype can
              be wired here. For now this area mirrors the layout but remains
              static.
            </p>
          </div>
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
    </div>
  );
};

export default Dashboard;

