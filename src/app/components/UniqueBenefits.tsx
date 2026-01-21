export default function UniqueBenefits() {
  return (
    <section className="w-full bg-[#F5F5F0] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-16 text-center" style={{ fontFamily: 'serif' }}>
          Unique Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Designed Silence
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Low-stimulation by intent, not accident.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Non-Performative Space
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              No pressure to participate, share, or optimise.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#D4A574] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Environment-Led Experience
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Architecture, land, and rhythm do the work — not programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
