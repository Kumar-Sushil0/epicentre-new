"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-earth-900">
        <div className="text-gold-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) return null;

  return (
    <main>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-earth-900">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}
