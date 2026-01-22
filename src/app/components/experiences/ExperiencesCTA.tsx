import Link from "next/link";

export default function ExperiencesCTA() {
  return (
    <div className="mt-32 mb-16 flex justify-center text-center">
      <div className="max-w-2xl">
        <span className="material-symbols-outlined text-gold-500 text-4xl mb-6">wb_twilight</span>
        <p className="text-3xl md:text-4xl text-earth-50 italic font-display leading-snug">
          "The most profound experiences are those we never planned for."
        </p>
        <div className="mt-8">
          <Link
            href="/bookings"
            className="inline-flex items-center gap-2 text-gold-500 font-bold hover:text-earth-50 transition-colors border-b border-gold-500 pb-1"
          >
            View Availability Calendar
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
