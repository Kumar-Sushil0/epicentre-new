export default function AboutPrinciples() {
  return (
    <section className="py-24 px-4 md:px-16 bg-earth-900 relative">
      <div className="w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-gold-500 text-3xl font-display" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Structural Logic
          </h2>
          <p className="text-earth-50/70 text-base md:text-lg mt-3 max-w-3xl">
            The estate is governed by six design decisions. Each exists for a specific reason.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">01</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Environment &gt; Motivation
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              Behavior follows structure. The estate is designed so that conditions produce the outcome&mdash;you do not need discipline or effort to maintain the silence. It is already maintained for you.
            </p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">02</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Reduction &gt; Abundance
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              Clarity requires removal. Excess fragments attention. The estate offers less deliberately&mdash;fewer amenities, fewer interactions, fewer demands&mdash;because more would undermine the purpose.
            </p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">03</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Agreement &gt; Enforcement
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              Silence works through consent. No rules are imposed. Every member applies knowing the protocol. The environment is maintained because everyone who is here chose to be here under these terms.
            </p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">04</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Observation &gt; Instruction
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              Nothing is interpreted for you. You notice what you notice. You decide what to do with it. No one will tell you what your clarity means or what your next chapter should be.
            </p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">05</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Structure &gt; Personality
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              The system holds the space, not the individual. No single person dominates the environment. The protocol is consistent regardless of who is present.
            </p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">06</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Pace &gt; Urgency
            </h4>
            <p className="text-earth-50/70 text-sm leading-relaxed">
              Thinking stabilises with time. Urgency distorts judgment. The estate is designed around slow days&mdash;not as a preference, but as a structural requirement for the kind of thinking most members are here to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}