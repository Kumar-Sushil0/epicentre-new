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
          {/* 01 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">landscape</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Environment</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">bolt</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Motivation</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    Behavior follows structure. The estate is designed so that conditions produce the outcome&mdash;you do not need discipline or effort to maintain the silence. It is already maintained for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">remove_circle</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Reduction</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">all_inclusive</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Abundance</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    Clarity requires removal. Excess fragments attention. The estate offers less deliberately&mdash;fewer amenities, fewer interactions, fewer demands&mdash;because more would undermine the purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">handshake</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Agreement</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">gavel</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Enforcement</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    Silence works through consent. No rules are imposed. Every member applies knowing the protocol. The environment is maintained because everyone who is here chose to be here under these terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">visibility</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Observation</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">school</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Instruction</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    Nothing is interpreted for you. You notice what you notice. You decide what to do with it. No one will tell you what your clarity means or what your next chapter should be.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">account_tree</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Structure</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">person</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Personality</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    The system holds the space, not the individual. No single person dominates the environment. The protocol is consistent regardless of who is present.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div className="group relative h-64 border border-earth-700 bg-earth-950/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
              <div className="mb-4 flex items-center gap-4 opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">schedule</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Pace</span>
                </div>
                <span className="text-gold-500 text-xl">&gt;</span>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-gold-500 text-4xl">priority_high</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-200">Urgency</span>
                </div>
              </div>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-50/70 text-sm leading-relaxed">
                    Thinking stabilises with time. Urgency distorts judgment. The estate is designed around slow days&mdash;not as a preference, but as a structural requirement for the kind of thinking most members are here to do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}