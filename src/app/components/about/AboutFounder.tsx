export default function AboutFounder() {
  return (
    <section className="py-20 px-6 bg-earth-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gold-500/10 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: "url('/dd.jpeg')",
                }}
              ></div>
            </div>
          </div>
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-gold-500 text-lg font-medium mb-1 font-body">Founder & Experience Architect — The Silent Club</h3>
              <h2 className="text-earth-50 text-4xl md:text-5xl font-bold mb-6">Digen Varma</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-gold-500/50 to-transparent mb-6"></div>
            </div>
            <div className="space-y-6 text-earth-50/70 font-body text-base md:text-lg leading-relaxed">
              <p>

                Digen's work is centered on a single inquiry: How environments shape attention, and how attention shapes choice.
              </p>

              <p>
                With a background in systems thinking, design, and decision-making, his approach avoids motivation, advice, or optimization. Instead, he focuses on designing experiences where interference is reduced and clarity can surface on its own.
              </p>
              <p className="whitespace-pre-line">
                The Silent Club is a physical expression of that work.{"\n"}
                Not a method to follow, but a space to enter.{"\n"}
                Digen's role is not to guide or instruct.{"\n"}
                It is to design and protect the integrity of the experience.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-2 text-gold-500/80">
                <span className="material-symbols-outlined">psychology</span>
                <span className="text-sm font-medium uppercase tracking-wider">Behavioral Architecture · Decision Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
