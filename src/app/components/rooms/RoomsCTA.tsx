export default function RoomsCTA() {
  return (
    <>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-earth-700 to-transparent"></div>
      {/* Bottom CTA */}
      <section className="flex flex-col items-center justify-center text-center py-10 gap-6">
        <h2 className="text-gold-500 text-3xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>Not sure which space fits you?</h2>
        <p className="text-earth-300 max-w-md font-body">Entry support is available to help you choose based on how you want to spend your time here.</p>
        <a href="/contact" className="bg-earth-100 text-earth-950 hover:bg-gold-500 hover:text-earth-950 transition-all duration-300 px-8 py-3 rounded-lg font-bold">
          Contact
        </a>
      </section>
      {/* Quotes */}
      <div className="flex flex-col items-center justify-center text-center py-10 gap-6 border-t border-earth-700">
        <p className="text-earth-50/70 text-lg md:text-xl font-display italic max-w-2xl">
          "Silence begins when nothing asks for your attention."
        </p>
        <p className="text-earth-50/70 text-lg md:text-xl font-display italic max-w-2xl">
          "Silence is not the absence of noise, but the beginning of listening."
        </p>
      </div>
    </>
  );
}
