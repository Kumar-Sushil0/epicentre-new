import Link from "next/link";

export default function VoidAndFormats() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full max-w-5xl mx-auto">
       

        {/* Experience copy */}
        <div className="mb-12 md:mb-16">

        <h2
            className="text-center text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-6 "
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            How It Works
          </h2>


          <div className="max-w-5xl mx-auto text-center text-earth-300 text-base md:text-lg leading-relaxed space-y-3 md:space-y-4">
            <p>
              There is no schedule when you arrive. No one is waiting to guide you.<br/> The estate simply removes everything that has been competing for your attention.
            </p>
            <p className="md:whitespace-nowrap">
              You step into a low-stimulation environment. External roles pause. Input reduces. Attention stabilizes.
            </p>
            <p>
              From that stability, decisions surface.
              Nothing is interpreted for you.
              <br/>
              Silence is not the goal.
              Silence is the condition.
              Clarity emerges.
            </p>
           
          </div>
        </div>

        {/* Formats */}
        <div className="space-y-6">
         
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Solitude */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  self_improvement
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Solitude as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  Self-directed silence for deep work and decision space.
                </p>
              </div>
            </Link>

            {/* Experiments */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  science
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Experiments as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  Controlled sessions for testing ideas without public pressure.
                </p>
              </div>
            </Link>

            {/* Residency */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  school
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Residency as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  Small-group immersion around a single high-stakes question.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
