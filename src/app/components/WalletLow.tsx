"use client";

import type { WalletLowProps } from "./WalletLow.types";

const formatAmount = (value: number | string) => {
  if (typeof value === "number") {
    return `₹${value.toLocaleString("en-IN")}`;
  }
  return value;
};

const WalletLow = ({
  currentBalance,
  requiredForNextCycle,
  onTopUp,
  onBack,
}: WalletLowProps) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 pb-16 text-earth-100">
      <div className="max-w-xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-amber-500/60 bg-amber-500/10 px-3 py-1 rounded-full mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-amber-100">
            Wallet Low
          </span>
        </div>

        {/* Heading & copy */}
        <h2
          className="text-2xl md:text-3xl font-normal text-earth-50 mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Your wallet needs topping up.
        </h2>

        <p className="text-[0.9rem] text-earth-200 mb-2">
          Your current balance is insufficient to book this cycle.
        </p>
        <p className="text-[0.82rem] text-earth-400 mb-6 leading-relaxed">
          Top up your wallet to continue. Your membership remains active — only
          the visit balance needs replenishing.
        </p>

        {/* Summary card */}
        <div className="rounded-2xl border border-gold-500/25 bg-earth-900/80 text-left p-5 md:p-6 mb-6">
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-earth-400 text-[0.86rem]">
              Current balance
            </span>
            <span className="text-earth-100 text-[0.86rem]">
              {formatAmount(currentBalance)}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-earth-400 text-[0.86rem]">
              Required for next cycle
            </span>
            <span className="text-earth-100 text-[0.86rem]">
              {formatAmount(requiredForNextCycle)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onTopUp}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-gold-500 text-[0.8rem] tracking-[0.14em] uppercase text-gold-300 hover:bg-gold-500/10 mb-3"
        >
          Top Up Wallet →
        </button>

        <button
          type="button"
          onClick={onBack}
          className="text-[0.8rem] tracking-[0.12em] uppercase text-earth-400 hover:text-earth-100"
        >
          ← Back to membership
        </button>
      </div>
    </section>
  );
};

export default WalletLow;

