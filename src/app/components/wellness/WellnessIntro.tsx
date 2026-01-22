export default function WellnessIntro() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-10 flex justify-center">
      <div className="max-w-4xl text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-earth-50 leading-[1.1]">
          Always-available practices at <span className="italic text-gold-500/90">EPiCENTRE</span>
        </h1>
        <div className="h-px w-24 bg-gold-500/40 my-2"></div>
        <p className="text-lg md:text-xl text-earth-300/70 font-light max-w-2xl leading-relaxed font-body">
          A space for recovery without goals. No instructors. Just you and the rhythm of the place. We invite you to engage with silence on your own terms.
        </p>
      </div>
    </section>
  );
}
