"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import ServicesOffering from "../components/ServicesOffering";

export default function CyclesPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-earth-950 text-earth-100">
      <Link
        href="/"
        className="fixed top-5 right-5 z-50 text-earth-300 hover:text-gold-500 transition-colors"
        aria-label="Back to home"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <div className="pt-8">
        <ServicesOffering
          onCycleSelect={(selection) => {
            const params = new URLSearchParams({
              cycle: selection.label,
              accommodation: selection.accommodationType,
              price: selection.priceLabel,
            });
            router.push(`/book-a-call?${params.toString()}`);
          }}
        />
      </div>
    </main>
  );
}
