"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DesignYourDay from "../components/DesignYourDay";

function DesignYourStayInner() {
  const searchParams = useSearchParams();
  const cycle = searchParams.get("cycle") || undefined;
  const accommodation = searchParams.get("accommodation") || undefined;
  const price = searchParams.get("price") || undefined;
  const quantity = searchParams.get("quantity") || undefined;

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100">
      <section className="pt-8 md:pt-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-2xl md:text-3xl font-normal text-gold-500 text-center"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Design Your Stay at The Silent Club
          </h1>
        </div>
      </section>

      <DesignYourDay
        cycle={cycle}
        accommodation={accommodation}
        price={price}
        quantity={quantity}
      />
    </main>
  );
}

export default function DesignYourStayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-earth-950 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <DesignYourStayInner />
    </Suspense>
  );
}

