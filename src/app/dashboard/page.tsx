"use client";

import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main>
        <Header />
        <div className="min-h-screen bg-earth-900 pt-24">
          <Dashboard />
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  );
}
