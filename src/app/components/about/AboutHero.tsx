export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/30 via-transparent to-earth-950 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgtoMMPZz88PXkDYrxvHVR6uCSwqNqDnob4jaoXODBFLGl2UsdhfJ4s__nqrXImhLMN4QUasNvlWzk9Yo_824P4d9lIvSn1WbjbbWb28HQs30tbEHbQGS_MuR1epNrsedDPULlE6AaZ45m5He654JaT49FOV-G_q2QjNTxPSVrimly9bjXTZ01TiOoTicoKoqMBOqEzGfSDPcspcYTtn2f9nvsAvItSPnGcZhvCVsFO9kjJPBy1OdqHj_PbY0RZq_5hkBecKLlEATa')"
          }}
        ></div>
      </div>
      <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
        <div className="mb-6 flex justify-center">
          <span className="h-16 w-px bg-gold-500/60 block"></span>
        </div>
        <h1 className="text-gold-500 text-5xl md:text-7xl font-display font-medium leading-tight tracking-tight mb-8 drop-shadow-xl" style={{ fontFamily: 'Trirong, serif' }}>
          A physical environment designed to <br className="hidden md:block"/>
          <span className="italic">reduce interference</span>
        </h1>
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-earth-50/50 animate-bounce text-3xl">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}