"use client";

const MembershipRenewal = () => {
  return (
    <section className="w-full px-6 md:px-10 pb-12 text-earth-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-amber-500/60 bg-amber-500/10 px-3 py-1 rounded-full mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-amber-100">
            Renewal Due
          </span>
        </div>

        {/* Heading + copy */}
        <h2
          className="text-3xl md:text-4xl font-normal text-earth-50 mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Your 2026 membership expires soon.
        </h2>

        <p className="text-sm md:text-[0.9rem] text-earth-200 mb-3">
          Renewal is not automatic. Each year is reviewed independently.
        </p>
        <p className="text-sm md:text-[0.9rem] text-earth-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Continuation depends on behavioural alignment with the estate&apos;s protocol — not
          status, wealth, or industry. D.D. will contact you before the renewal date.
        </p>

        {/* Details card */}
        <div className="rounded-2xl border border-gold-500/25 bg-earth-900/80 p-6 md:p-7 max-w-3xl mx-auto mb-8 text-left">
          <h3 className="text-[0.9rem] tracking-[0.1em] uppercase text-earth-200 mb-4 text-center">
            Membership Summary
          </h3>
          <div className="divide-y divide-white/5 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">
                Current membership
              </span>
              <span className="text-earth-100 text-[0.86rem]">
                2026 — Post-Exit Founders
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">Expiry</span>
              <span className="text-earth-100 text-[0.86rem]">
                31 March 2027
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">2027 cohort</span>
              <span className="text-earth-100 text-[0.86rem]">
                To be announced
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-earth-400 text-[0.86rem]">
                Alignment review
              </span>
              <span className="text-earth-100 text-[0.86rem]">
                Initiated by D.D.
              </span>
            </div>
          </div>
        </div>

        {/* Back CTA */}
        <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-gold-500 text-[0.8rem] tracking-[0.14em] uppercase text-gold-300 hover:bg-gold-500/10">
          Back to My Membership →
        </button>
      </div>
    </section>
  );
};

export default MembershipRenewal;

