"use client";

import { useSearchParams } from "next/navigation";
import DesignYourDay from "../components/DesignYourDay";

export default function DesignYourStayPage() {
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

