export default function WhatThisIsNot() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12" style={{ fontFamily: 'serif' }}>
            What this is not
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-gray-700 leading-relaxed text-center mb-12">
            <strong className="text-black">EPiCentre</strong> is not:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pt-2">
                A resort or luxury stay
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pt-2">
                A wellness program
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pt-2">
                A retreat with schedules and activities
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pt-2">
                A place for parties or loud socialising
              </p>
            </div>
          </div>
          
          <div className="text-center p-8 bg-black rounded-lg">
            <p className="text-lg text-white leading-relaxed">
              Nothing here is designed to entertain or impress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
