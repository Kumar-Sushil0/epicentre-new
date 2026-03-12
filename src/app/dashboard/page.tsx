"use client";

import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main>
        <div className="min-h-screen bg-earth-900 pt-10 md:pt-16">
          <Dashboard />
        </div>
      </main>
    </ProtectedRoute>
  );
}
