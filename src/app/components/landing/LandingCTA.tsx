import Link from "next/link";

export default function LandingCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-earth-900">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-4"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          REQUEST INVITATION
        </h2>
        
        <p className="text-earth-100 text-base md:text-lg font-body leading-relaxed max-w-2xl mx-auto">
          If the Silent Club resonates with you, schedule a short exploration conversation.
        </p>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-earth-950 bg-gold-500 hover:bg-gold-400 transition-all duration-300 text-base md:text-lg font-normal rounded-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Request Invitation →
          </Link>
        </div>
      </div>
    </section>
  );
}
