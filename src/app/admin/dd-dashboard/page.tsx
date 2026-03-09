'use client';

import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

export default function AdminDdDashboardPage() {
  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <AdminSidebar />
      <AdminHeader />

      <main className="ml-64 pt-20 p-8">
        <div className="mb-8">
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
            Review Queue
          </h1>
          <p className="mt-3 text-sm text-earth-400 max-w-xl">
            A React reconstruction of the D.D. review dashboard from
            `silent-club-complete-flow.html`.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Internal DD sidebar (from HTML flow) */}
          <aside className="w-60 flex-shrink-0 bg-earth-900/80 border border-gold-500/20 rounded-2xl p-4 space-y-5">
            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Applications
              </div>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gold-500/10 border border-gold-500/40 text-gold-400">
                  <span className="text-[0.75rem]">◈</span>
                  <span className="flex-1 text-left">Review Queue</span>
                  <span className="px-1.5 py-0.5 rounded-sm text-[0.58rem] bg-gold-500/20 text-gold-300">
                    1
                  </span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg text-earth-300 hover:bg-earth-800/60">
                  <span className="text-[0.75rem]">○</span>
                  <span className="flex-1 text-left">All Members</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg text-earth-300 hover:bg-earth-800/60">
                  <span className="text-[0.75rem]">◇</span>
                  <span className="flex-1 text-left">Waitlist</span>
                  <span className="px-1.5 py-0.5 rounded-sm text-[0.58rem] bg-earth-800 text-earth-400">
                    0
                  </span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Operations
              </div>
              <div className="space-y-1 text-xs">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-earth-300 hover:bg-earth-800/60">
                  <span className="text-[0.75rem]">◻</span>
                  <span className="flex-1 text-left">Visit Schedule</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-earth-300 hover:bg-earth-800/60">
                  <span className="text-[0.75rem]">▽</span>
                  <span className="flex-1 text-left">Wallet Monitor</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-earth-500 mb-2">
                Overview
              </div>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg text-earth-300 hover:bg-earth-800/60">
                <span className="text-[0.75rem]">◈</span>
                <span className="flex-1 text-left">Cohort Stats</span>
              </button>
            </div>
          </aside>

          {/* Main DD review card */}
          <section className="flex-1">
            <div className="bg-earth-900/70 border border-gold-500/25 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
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
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/40 text-[0.65rem] tracking-[0.18em] uppercase text-gold-400">
                  Pending Review
                </span>
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
                      {/* Placeholder answer text from the HTML flow */}
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
          </section>
        </div>
      </main>
    </div>
  );
}

