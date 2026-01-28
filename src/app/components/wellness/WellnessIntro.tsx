export default function WellnessIntro() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-10 flex justify-center">
      <div className="max-w-5xl text-center flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gold-500 leading-[1.1]" style={{ fontFamily: 'Trirong, serif' }}>
          Always-available practices at <span className="italic">The Silent Club</span>
        </h1>
        <div className="h-px w-24 bg-gold-500/40 my-2"></div>
        <div className="space-y-2 text-lg md:text-xl text-earth-300/70 font-light max-w-3xl leading-relaxed font-body">
          <p>
            Wellness here is not a program or a routine.
          </p>
          <p>
            These are simple ways to move, rest, and recover without instruction or goals.
          </p>
          <p>
            You engage when it feels right.
          </p>
          <p>
            You stop when it doesn't.
          </p>
        </div>
      </div>
    </section>
  );
}
