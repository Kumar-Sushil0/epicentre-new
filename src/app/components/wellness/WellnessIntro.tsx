export default function WellnessIntro() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-10 flex justify-center">
      <div className="max-w-5xl text-center flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gold-500 leading-[1.1]" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Always-available practices that support the body and nervous system.
        </h1>
        <div className="h-px w-24 bg-gold-500/40 my-2"></div>
        <div className="space-y-2 text-lg md:text-xl text-earth-300/70 font-light max-w-3xl leading-relaxed font-body">
          <p>
            No instruction. No goals.
          </p>
          <p>
            Movement, rest, and recovery happen at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
}
