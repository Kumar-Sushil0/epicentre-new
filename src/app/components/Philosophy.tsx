export default function Philosophy() {
  return (
    <section className="py-24 min-h-[100vh] bg-gold-500 flex items-center" id="philosophy">
      <div className="max-w-5xl mx-auto px-[30px] text-center">

        <div className="relative py-8">
          <span className="material-symbols-outlined text-[#261B14]/10 text-6xl absolute top-0 left-0 -translate-x-4 -translate-y-4">
            format_quote
          </span>
          <p className="text-[15px] leading-loose text-[#261B14] relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="text-[#261B14]" style={{ fontFamily: 'Outfit, sans-serif' }}>"The Silent Club exists to reduce interference. In a world optimized for noise, speed, and performance, <br />this is a space designed for stillness, self-observation, and clarity.</span>
            <br />
            <span style={{ fontFamily: 'Outfit, sans-serif' }}>Nothing here is trying to improve you. The conditions make it easier to see."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
