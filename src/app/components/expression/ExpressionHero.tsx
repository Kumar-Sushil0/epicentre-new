export default function ExpressionHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/60 via-earth-950/40 to-earth-950 z-10"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl pt-20">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-[1px] bg-gold-500/60 mb-2"></div>
          <h1 className="text-gold-500 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-xl" style={{ fontFamily: 'Trirong, serif' }}>
            Facilitated sandboxes for unfinished work.
          </h1>
          <div className="space-y-3 text-earth-50/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-body drop-shadow-md">
            <p>
              The Silent Club offers controlled environments to test ideas, formats, and signals<br/>
              before they are ready for the public.
            </p>
            <p>
              No performance.
            </p>
            <p>
              No critique.
            </p>
            <p>
              No requirement for resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
