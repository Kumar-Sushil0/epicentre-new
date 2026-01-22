export default function RoomsIntro() {
  return (
    <section className="flex flex-col gap-6 max-w-3xl">
      <div className="flex items-center gap-2 text-gold-500 uppercase tracking-widest text-xs font-bold">
        <span className="w-8 h-[1px] bg-gold-500"></span>
        The Philosophy
      </div>
      <h1 className="text-earth-50 text-5xl lg:text-7xl font-black leading-tight tracking-tight">
        Rest & <span className="text-gold-500 italic font-serif">Restore</span>
      </h1>
      <p className="text-earth-300 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl font-body">
        Reconnect with yourself in our distraction-free accommodations, designed for silence and deep rest. Experience the raw luxury of nature stripped of the unnecessary.
      </p>
    </section>
  );
}
