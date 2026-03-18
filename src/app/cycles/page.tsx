"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesOffering from "../components/ServicesOffering";

export default function CyclesPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100">
      <Header />
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
      <Footer />
    </main>
  );
}
