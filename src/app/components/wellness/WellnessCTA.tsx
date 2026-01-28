import Link from "next/link";

export default function WellnessCTA() {
  return (
    <section className="py-20 border-t border-white/5 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="material-symbols-outlined text-gold-500/50 text-4xl">north</span>
        <h2 className="text-2xl text-gold-500 font-medium" style={{ fontFamily: 'Trirong, serif' }}>Ready to disconnect?</h2>
        <div className="flex gap-8 items-center justify-center mt-4">
          <Link
            href="/"
            className="text-earth-300/70 hover:text-earth-50 text-sm font-medium transition-colors flex items-center gap-2 group font-body"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Home
          </Link>
          <Link
            href="/bookings"
            className="text-gold-500 hover:text-gold-400 text-sm font-bold uppercase tracking-wide border-b border-gold-500/30 hover:border-gold-500 pb-1 transition-all font-body"
          >
            Explore Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
