"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BetweenChapters from "./components/BetweenChapters";
import Philosophy from "./components/Philosophy";
import WhatThisIsNot from "./components/WhatThisIsNot";
import DiningVariant from "./components/DiningVariant";
import Location from "./components/Location";
import Footer from "./components/Footer";
import DesignedDeliberately from "./components/DesignedDeliberately";
import VoidAndFormats from "./components/VoidAndFormats";
import AboutAttentionCycle from "./components/about/AboutAttentionCycle";
import RequestConversation from "./components/RequestConversation";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  // While checking auth, render nothing to avoid flash
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-earth-900">
        <div className="text-gold-400 text-xl">Loading...</div>
      </div>
    );
  }

  // Authenticated users get redirected above, this only renders for guests
  if (isAuthenticated) return null;

  return (
    <main>
      <Header />
      <Hero />
      <BetweenChapters />
      
      <DesignedDeliberately />
      <VoidAndFormats />
      <AboutAttentionCycle />
      <DiningVariant />
      <Location />
      <RequestConversation />
      <Footer />
    </main>
  );
}
