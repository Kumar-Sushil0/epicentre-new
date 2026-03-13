"use client";

import { useState } from 'react';
import AdminProtectedRoute from '../components/AdminProtectedRoute';

type DdView =
  | 'review-queue'
  | 'all-members'
  | 'waitlist'
  | 'visit-schedule'
  | 'wallet-monitor'
  | 'cohort-stats';

export default function AdminDdDashboardPage() {
  const [activeView, setActiveView] = useState<DdView>('review-queue');

  return (
    <AdminProtectedRoute>
      <div className="min-h-screen bg-earth-950 text-earth-100">
        <main className="p-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-9 bg-gold-500" />
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-earth-400">
                D.D. Dashboard
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-normal text-gold-500"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Design Your Day
            </h1>
            <p className="mt-3 text-sm text-earth-400 max-w-xl">
              Internal operator view for the Silent Club-style D.D. flow – tuned
              for reviewing applications, watching capacity, and keeping the
              atmosphere coherent.
            </p>
          </div>

          {/* Compact overview strip inspired by /admin/dashboard stats */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-earth-900/70 border border-gold-500/30 rounded-xl px-3 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-earth-400 uppercase tracking-[0.18em] text-[0.55rem]">
                  In Queue
                </span>
                <span className="material-symbols-outlined text-gold-400 text-sm">
                  pending_actions
                </span>
              </div>
              <p className="text-earth-100 text-base font-semibold">3</p>
            </div>
            <div className="bg-earth-900/70 border border-emerald-500/30 rounded-xl px-3 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-earth-400 uppercase tracking-[0.18em] text-[0.55rem]">
                  Confirmed
                </span>
                <span className="material-symbols-outlined text-emerald-400 text-sm">
                  check_circle
                </span>
              </div>
              <p className="text-earth-100 text-base font-semibold">18</p>
            </div>
            <div className="bg-earth-900/70 border border-amber-500/30 rounded-xl px-3 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-earth-400 uppercase tracking-[0.18em] text-[0.55rem]">
                  Capacity
                </span>
                <span className="material-symbols-outlined text-amber-400 text-sm">
                  hotel_class
                </span>
              </div>
              <p className="text-earth-100 text-base font-semibold">72%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Internal DD sidebar (from HTML flow) */}
          <aside className="w-full lg:w-60 flex-shrink-0 bg-earth-900/80 border border-gold-500/20 rounded-2xl p-4 space-y-5">
            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Applications
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveView('review-queue')}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg border transition-all ${
                    activeView === 'review-queue'
                      ? 'bg-gold-500/15 border-gold-500/60 text-gold-300'
                      : 'border-transparent text-earth-300 hover:bg-earth-800/60'
                  }`}
                >
                  <span className="text-[0.75rem]">◈</span>
                  <span className="flex-1 text-left">Review Queue</span>
                  <span className="px-1.5 py-0.5 rounded-sm text-[0.58rem] bg-gold-500/20 text-gold-200">
                    3
                  </span>
                </button>
                <button
                  onClick={() => setActiveView('all-members')}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-all ${
                    activeView === 'all-members'
                      ? 'bg-earth-800/80 text-earth-100 border border-gold-500/30'
                      : 'text-earth-300 hover:bg-earth-800/60'
                  }`}
                >
                  <span className="text-[0.75rem]">○</span>
                  <span className="flex-1 text-left">All Members</span>
                </button>
                <button
                  onClick={() => setActiveView('waitlist')}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-all ${
                    activeView === 'waitlist'
                      ? 'bg-earth-800/80 text-earth-100 border border-amber-500/40'
                      : 'text-earth-300 hover:bg-earth-800/60'
                  }`}
                >
                  <span className="text-[0.75rem]">◇</span>
                  <span className="flex-1 text-left">Waitlist</span>
                  <span className="px-1.5 py-0.5 rounded-sm text-[0.58rem] bg-earth-800 text-earth-400">
                    1
                  </span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Operations
              </div>
              <div className="space-y-1 text-xs">
                <button
                  onClick={() => setActiveView('visit-schedule')}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeView === 'visit-schedule'
                      ? 'bg-earth-800/80 text-earth-100 border border-gold-500/40'
                      : 'text-earth-300 hover:bg-earth-800/60'
                  }`}
                >
                  <span className="text-[0.75rem]">◻</span>
                  <span className="flex-1 text-left">Visit Schedule</span>
                </button>
                <button
                  onClick={() => setActiveView('wallet-monitor')}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeView === 'wallet-monitor'
                      ? 'bg-earth-800/80 text-earth-100 border border-gold-500/40'
                      : 'text-earth-300 hover:bg-earth-800/60'
                  }`}
                >
                  <span className="text-[0.75rem]">▽</span>
                  <span className="flex-1 text-left">Wallet Monitor</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Overview
              </div>
              <button
                onClick={() => setActiveView('cohort-stats')}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-all ${
                  activeView === 'cohort-stats'
                    ? 'bg-earth-800/80 text-earth-100 border border-gold-500/40'
                    : 'text-earth-300 hover:bg-earth-800/60'
                }`}
              >
                <span className="text-[0.75rem]">◈</span>
                <span className="flex-1 text-left">Cohort Stats</span>
              </button>
            </div>
          </aside>

          {/* Main view area – swaps based on activeView */}
          <section className="flex-1 space-y-6">
            {activeView === 'review-queue' && (
              <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      <span className="w-1 h-1 rounded-full bg-gold-500" />
                      <span>Queue · 01 / 03</span>
                    </div>
                    <h2
                      className="text-2xl text-gold-500 mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Arjun Mehta
                    </h2>
                    <p className="text-xs text-earth-500">
                      Received 9 March 2026 · 2026 Cohort
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/40 text-[0.65rem] tracking-[0.18em] uppercase text-gold-400">
                      Pending Review
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-earth-800 text-[0.65rem] tracking-[0.18em] uppercase text-earth-300">
                      Silent, self-directed
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 text-sm">
                  <div>
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                      Email
                    </div>
                    <div className="text-earth-100">arjun@mehta.co</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-1">
                      Cohort applied
                    </div>
                    <div className="text-earth-100">
                      Post-Exit Founders · 2026
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6 text-sm">
                  {[
                    'What chapter are you currently between?',
                    'What would uninterrupted attention allow you to confront?',
                    'Are you comfortable with extended silence?',
                    'Are you seeking withdrawal or structured inquiry?',
                    'What would make this visit meaningful?',
                  ].map((question, i) => (
                    <div
                      key={question}
                      className="border-b border-white/5 pb-4 last:border-0"
                    >
                      <div className="text-[0.65rem] tracking-[0.14em] uppercase text-gold-400 mb-2">
                        {String(i + 1).padStart(2, '0')} — {question}
                      </div>
                      <p className="text-sm text-earth-200 italic leading-relaxed">
                        Placeholder answer mirroring the narrative tone from the
                        original prototype.
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-4 mb-6">
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-gold-400 mb-3">
                    Alignment Criteria — D.D. Checklist
                  </div>
                  <div className="space-y-3">
                    {[
                      'Applicant is between a significant chapter — not avoiding re-entry',
                      'Response demonstrates comfort with self-directed, unstructured time',
                      'No indication of requiring facilitation, guidance, or social structure',
                      'No content-extraction or performance intent evident in responses',
                      'Responses demonstrate that the applicant read and understood the protocol',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-earth-200"
                      >
                        <div className="mt-0.5 w-4 h-4 border border-gold-500/60 rounded-sm" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[0.65rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
                    D.D. Notes (optional)
                  </div>
                  <textarea
                    className="w-full bg-earth-900/60 border border-gold-500/25 rounded-lg px-3 py-2 text-sm text-earth-100 resize-none min-h-[80px] outline-none focus:border-gold-500"
                    placeholder="Private notes — not shared with applicant."
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gold-500 text-[0.72rem] tracking-[0.14em] uppercase text-gold-400 hover:bg-gold-500/10">
                    Approve &amp; Send Invite →
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-amber-500/60 text-[0.72rem] tracking-[0.14em] uppercase text-amber-400 hover:bg-amber-500/5">
                    Move to Waitlist
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-red-500/60 text-[0.72rem] tracking-[0.14em] uppercase text-red-400 hover:bg-red-500/5">
                    Decline
                  </button>
                </div>
              </div>
            )}

            {activeView === 'all-members' && (
              <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2
                      className="text-2xl text-earth-100 mb-1"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      All D.D. Members
                    </h2>
                    <p className="text-sm text-earth-400">
                      Lightweight table inspired by the main dashboard&apos;s
                      bookings view.
                    </p>
                  </div>
                  <button className="text-gold-400 text-xs uppercase tracking-[0.18em] flex items-center gap-1">
                    Export
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gold-500/20 text-[0.7rem] uppercase tracking-[0.18em] text-earth-500">
                        <th className="text-left py-3 px-3">Name</th>
                        <th className="text-left py-3 px-3">Cohort</th>
                        <th className="text-left py-3 px-3">Chapter</th>
                        <th className="text-left py-3 px-3">Mode</th>
                        <th className="text-right py-3 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: 'Arjun Mehta',
                          cohort: 'Post-Exit · 2026',
                          chapter: 'Between ventures',
                          mode: 'Silent',
                          status: 'In Residence',
                        },
                        {
                          name: 'Leena Rao',
                          cohort: 'Deep Work · 2025',
                          chapter: 'Returning to craft',
                          mode: 'Structured',
                          status: 'Departed',
                        },
                        {
                          name: 'Devansh Jain',
                          cohort: 'Winter Quiet · 2026',
                          chapter: 'Pre-transition',
                          mode: 'Silent',
                          status: 'Booked',
                        },
                      ].map((row) => (
                        <tr
                          key={row.name}
                          className="border-b border-gold-500/10 last:border-0 hover:bg-earth-800/40 transition-colors"
                        >
                          <td className="py-3 px-3 text-earth-100 font-medium">
                            {row.name}
                          </td>
                          <td className="py-3 px-3 text-earth-300">
                            {row.cohort}
                          </td>
                          <td className="py-3 px-3 text-earth-300">
                            {row.chapter}
                          </td>
                          <td className="py-3 px-3 text-earth-300">
                            {row.mode}
                          </td>
                          <td className="py-3 px-3 text-right">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeView === 'waitlist' && (
              <div className="bg-earth-900/70 border border-amber-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className="text-2xl text-amber-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Waitlist
                  </h2>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-amber-300 inline-flex items-center gap-1">
                    Gentle no&apos;s
                    <span className="w-1 h-1 rounded-full bg-amber-300" />
                  </span>
                </div>
                <p className="text-sm text-earth-300 mb-4 max-w-lg">
                  Applicants who are &quot;almost&quot; aligned with the
                  protocol, or who would be better held in a future cohort.
                  This is not a holding pen for indecision — it is an intentional
                  delay.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Soft no — not this chapter', 'Strong yes, wrong timing'].map(
                    (label) => (
                      <div
                        key={label}
                        className="border border-amber-500/30 rounded-xl p-4 bg-earth-950/40"
                      >
                        <div className="text-[0.7rem] uppercase tracking-[0.18em] text-amber-400 mb-1">
                          Pattern
                        </div>
                        <p className="text-sm text-earth-100 mb-3">{label}</p>
                        <p className="text-xs text-earth-400">
                          Small notes on why this pattern belongs here, so
                          future reviewers keep the bar coherent.
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {activeView === 'visit-schedule' && (
              <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className="text-2xl text-earth-100"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Visit Schedule
                  </h2>
                  <button className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-gold-400">
                    Open calendar
                    <span className="material-symbols-outlined text-sm">
                      calendar_month
                    </span>
                  </button>
                </div>
                <p className="text-sm text-earth-400 mb-4">
                  A thin overlay on top of the main resort calendar, filtered
                  only to D.D. bookings so the silence doesn&apos;t get diluted
                  by weddings and offsites.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Today
                    </div>
                    <p className="text-earth-100">2 arrivals · 1 departure</p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      This week
                    </div>
                    <p className="text-earth-100">5 active stays</p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Blackout windows
                    </div>
                    <p className="text-earth-100">3 days blocked for reset</p>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'wallet-monitor' && (
              <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className="text-2xl text-earth-100"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Wallet Monitor
                  </h2>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-emerald-400">
                    Healthy
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>
                <p className="text-sm text-earth-400 mb-4">
                  Quick sense-check on whether the D.D. programme is holding its
                  own without turning into a revenue-maximising engine.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Monthly intake
                    </div>
                    <p className="text-earth-100">₹3.2L</p>
                    <p className="text-[0.7rem] text-emerald-400 mt-1">
                      +8.4% vs last month
                    </p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Scholarships
                    </div>
                    <p className="text-earth-100">18% of nights</p>
                    <p className="text-[0.7rem] text-earth-400 mt-1">
                      Target band: 15–25%
                    </p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Drift risk
                    </div>
                    <p className="text-earth-100">Low</p>
                    <p className="text-[0.7rem] text-earth-400 mt-1">
                      Few high-paying edge-cases in queue.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'cohort-stats' && (
              <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className="text-2xl text-earth-100"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Cohort Stats
                  </h2>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-earth-400">
                    Atmosphere dashboard
                    <span className="material-symbols-outlined text-sm">
                      analytics
                    </span>
                  </span>
                </div>
                <p className="text-sm text-earth-400 mb-6 max-w-xl">
                  Not numbers for a board deck — just enough signal to know if
                  the silent, self-directed quality of the space is holding.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Chapter mix
                    </div>
                    <p className="text-earth-100">60% Between · 40% Emerging</p>
                    <p className="text-[0.7rem] text-earth-400 mt-1">
                      Healthy bias toward liminal chapters.
                    </p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Silence comfort
                    </div>
                    <p className="text-earth-100">4.6 / 5</p>
                    <p className="text-[0.7rem] text-earth-400 mt-1">
                      Post-stay reflection forms.
                    </p>
                  </div>
                  <div className="border border-gold-500/20 rounded-xl p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-earth-500 mb-1">
                      Inquiry vs withdrawal
                    </div>
                    <p className="text-earth-100">35% Inquiry · 65% Withdrawal</p>
                    <p className="text-[0.7rem] text-earth-400 mt-1">
                      Keeps the vibe more retreat than residency.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
        </main>
      </div>
    </AdminProtectedRoute>
  );
}

