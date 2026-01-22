export default function RoomsCTA() {
  return (
    <>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-earth-700 to-transparent"></div>
      {/* Bottom CTA */}
      <section className="flex flex-col items-center justify-center text-center py-10 gap-6">
        <span className="material-symbols-outlined text-gold-500 text-5xl">diamond</span>
        <h2 className="text-earth-50 text-3xl font-serif">Not sure which room suits you?</h2>
        <p className="text-earth-300 max-w-md font-body">Our concierge team can help tailor your retreat experience based on your specific wellness goals.</p>
        <button className="bg-earth-100 text-earth-950 hover:bg-gold-500 hover:text-earth-950 transition-all duration-300 px-8 py-3 rounded-lg font-bold">
          Contact Concierge
        </button>
      </section>
    </>
  );
}
