import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Page Not Found | The Silent Club",
  description: "The page you are looking for does not exist. Return to The Silent Club.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background gradient — matches homepage hero feel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-earth-950 via-earth-900 to-earth-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-earth-950/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl border-l-2 border-gold-500/50 pl-4 md:pl-8 lg:pl-12 py-4">
            <p
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-earth-800 leading-none tracking-tighter mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
              aria-hidden
            >
              404
            </p>
            <h1
              className="text-earth-100 text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              <span className="italic text-gold-500">This page is not here.</span>
            </h1>
            <p className="text-earth-300/90 text-lg md:text-xl font-light leading-relaxed font-body mb-10 max-w-xl">
              The link may be broken, or the page has been removed. Return to the estate.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300 text-base md:text-lg font-normal border-2 border-gold-500 rounded-lg px-5 md:px-6 py-2.5 md:py-3 bg-earth-950/50 backdrop-blur-sm"
            >
              Back to home
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
