
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-earth-900 pt-24">
        <Dashboard />
      </div>
      <Footer />
    </main>
  );
}
