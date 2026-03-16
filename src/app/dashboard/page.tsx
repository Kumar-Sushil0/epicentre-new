"use client";

import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/Dashboard";
import Questionnaire from "../components/Questionnaire";

export default function DashboardPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-earth-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="fixed inset-0">
        <Dashboard />
      </div>
    );
  }

  return <Questionnaire />;
}
