export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgtoMMPZz88PXkDYrxvHVR6uCSwqNqDnob4jaoXODBFLGl2UsdhfJ4s__nqrXImhLMN4QUasNvlWzk9Yo_824P4d9lIvSn1WbjbbWb28HQs30tbEHbQGS_MuR1epNrsedDPULlE6AaZ45m5He654JaT49FOV-G_q2QjNTxPSVrimly9bjXTZ01TiOoTicoKoqMBOqEzGfSDPcspcYTtn2f9nvsAvItSPnGcZhvCVsFO9kjJPBy1OdqHj_PbY0RZq_5hkBecKLlEATa')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/30 via-transparent to-earth-950 z-10"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        <div className="mb-6 flex justify-center">
          <span className="h-16 w-[1px] bg-gold-500/60 block"></span>
        </div>
        <h1 className="text-earth-50 text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6 drop-shadow-xl">
          The Story of <span className="text-gold-500 italic">EPiCentre</span>
        </h1>
        <h2 className="text-earth-50/90 text-lg md:text-xl font-body font-light tracking-wide uppercase opacity-90 mb-10">
          Silence in the Bhigwan Landscape
        </h2>
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-earth-50/50 animate-bounce text-3xl">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}
