const steps = [
  {
    number: "01",
    title: "Request invitation.",
  },
  {
    number: "02",
    title: "Schedule a Silent Club Exploration Call.",
  },
  {
    number: "03",
    title: "If aligned, schedule your visit.",
  },
];

export default function LandingInvitationProcess() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-16 bg-earth-950">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-normal text-gold-500 mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            INVITATION PROCESS
          </h2>
          <p className="text-earth-300 text-base md:text-lg font-body">
            Access to the estate begins with a short exploration conversation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile, shown between steps on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-px bg-gold-500/30"></div>
              )}
              
              <div className="relative text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-earth-900 border border-gold-500/50 mb-4">
                  <span
                    className="text-xl font-normal text-gold-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {step.number}
                  </span>
                </div>
                
                {/* Step Title */}
                <h3
                  className="text-lg md:text-xl font-normal text-earth-100"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Step {index + 1}: {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
