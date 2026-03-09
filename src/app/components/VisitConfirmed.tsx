"use client";

import type { VisitConfirmedProps } from "./VisitConfirmed.types";

const VisitConfirmed = ({
  cycle,
  arrival,
  location,
  whatToBring,
  protocolReminder,
  onBack,
}: VisitConfirmedProps) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 pb-16 text-earth-100">
      <div className="max-w-xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 rounded-full mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-emerald-100">
            Visit Confirmed
          </span>
        </div>

        {/* Heading & copy */}
        <h2
          className="text-2xl md:text-3xl font-normal text-earth-50 mb-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Your visit is confirmed.
        </h2>

        <p className="text-[0.9rem] text-earth-300 mb-6">
          Details have been sent to your email.
        </p>

        {/* Details card */}
        <div className="rounded-2xl border border-gold-500/25 bg-earth-900/80 text-left p-5 md:p-6 mb-6">
          <h3 className="text-[0.9rem] tracking-[0.1em] uppercase text-earth-200 mb-4">
            Visit Details
          </h3>
          <div className="divide-y divide-white/5 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">Cycle</span>
              <span className="text-earth-100 text-[0.86rem]">{cycle}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">Arrival</span>
              <span className="text-earth-100 text-[0.86rem]">
                {arrival || "—"}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">Location</span>
              <span className="text-earth-100 text-[0.86rem]">{location}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">
                What to bring
              </span>
              <span className="text-earth-100 text-[0.86rem] text-right">
                {whatToBring}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">
                Protocol reminder
              </span>
              <span className="text-earth-100 text-[0.86rem] text-right">
                {protocolReminder}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onBack}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-gold-500 text-[0.8rem] tracking-[0.14em] uppercase text-gold-300 hover:bg-gold-500/10"
        >
          Back to My Membership →
        </button>
      </div>
    </section>
  );
};

export default VisitConfirmed;

