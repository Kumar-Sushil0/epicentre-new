export default function ReasonOfExistence() {
  return (
    <section className="w-full bg-[#F5F5F0] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-[#D4A574] rounded-full mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12" style={{ fontFamily: 'serif' }}>
            Reason Of Existence
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Visual Element */}
          <div className="relative">
            <div className="w-full h-[400px] bg-gradient-to-br from-[#D4A574]/20 to-[#6B3410]/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 border-4 border-[#D4A574] rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl font-light text-[#6B3410]">∞</span>
                </div>
                <p className="text-sm uppercase tracking-wider text-gray-600">Continuity</p>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              <strong className="text-black">EPiCentre</strong> exists because many people don't need more advice — they need fewer distractions.
            </p>
            <p>
              It's a place to step away from constant input and observe yourself clearly.
            </p>
            <div className="pl-6 border-l-4 border-[#D4A574] my-6">
              <p className="font-semibold text-black mb-2">No fixing. No pushing. No instruction.</p>
            </div>
            <p>
              Just time, space, and quiet support to think straight again.
            </p>
            <p className="text-gray-600 italic">
              People usually come here when they're at a pause point — unsure, tired, or rethinking direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
