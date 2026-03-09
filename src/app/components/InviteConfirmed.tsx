"use client";

import type { InviteConfirmedProps } from "./InviteConfirmed.types";

const InviteConfirmed = ({ from, subject, body, onReviewPayment }: InviteConfirmedProps) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 pb-16 text-earth-100">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold-500/60 bg-gold-500/10 px-3 py-1 rounded-full mb-6">
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-200">
            Invite Confirmed
          </span>
        </div>

        {/* Heading & copy */}
        <h2
          className="text-2xl md:text-3xl font-normal text-earth-50 mb-3"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          You have been invited.
        </h2>

        <p className="text-[0.9rem] text-earth-200 mb-1">
          D.D. has reviewed your application and confirmed your alignment with the estate&apos;s protocol.
        </p>
        <p className="text-[0.85rem] text-earth-300 mb-8">
          Your membership spot in the 2026 Post-Exit Founders cohort is reserved for 7 days pending payment.
        </p>

        {/* Email card */}
        <div className="rounded-2xl border border-gold-500/25 bg-earth-900/80 text-left p-5 md:p-6 mb-6">
          <h3 className="text-[0.9rem] tracking-[0.1em] uppercase text-earth-200 mb-4">
            Email received
          </h3>

          <div className="space-y-3 text-[0.8rem] leading-relaxed text-earth-300">
            <p>
              <span className="text-earth-200 font-medium">From:</span> {from}
            </p>
            <p>
              <span className="text-earth-200 font-medium">Subject:</span> {subject}
            </p>
            <p className="mt-2 whitespace-pre-line">{body}</p>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onReviewPayment}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-gold-500 text-[0.8rem] tracking-[0.14em] uppercase text-gold-300 hover:bg-gold-500/10"
        >
          Review &amp; Complete Payment →
        </button>
      </div>
    </section>
  );
};

export default InviteConfirmed;

