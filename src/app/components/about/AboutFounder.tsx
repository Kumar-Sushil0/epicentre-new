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
                className="w-full h-full bg-cover bg-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZOEKWmjgKFOkfsPjj_aJHFC0Bjn_v5WN5Nng74n129Ce6jboBTXjxSdOARLMaBAWEc-Exg7BfVZ4TFNXdnUKQw5jqkMy3kLQgevLP8Kebo41TWXQkYm2_VOK7KyTMOvh0pWu63aCQFvLgKlydThsbs6b4cIIKD0v3cZ9zxBVc4VzftdGIg1f_0S3YYSD6rbjcKNGoWtoW6Z-IblTLkeGLm3yylMdb6wPxUbUed2-Lrg4yw-gtA07vdSJrC_Rdchc8SOrcWA1ETkct')",
                }}
              ></div>
            </div>
          </div>
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-gold-500 text-lg font-medium mb-1 font-body">Founder & Lead Practitioner</h3>
              <h2 className="text-earth-50 text-4xl md:text-5xl font-bold mb-6">Neel Kothari</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-gold-500/50 to-transparent mb-6"></div>
            </div>
            <div className="space-y-6 text-earth-50/70 font-body text-base md:text-lg leading-relaxed">
              <p>
                <span className="text-gold-500 text-4xl float-left mr-2 mt-[-10px] font-display">"</span>
                My journey began not in wellness, but in the rigorous study of decision systems. I became fascinated by how our environments silently architect our choices, often before we are even aware of them.
              </p>
              <p>
                EPiCentre is the physical manifestation of that inquiry. It is an exploration into how a space can be stripped of 'signals'—the social cues that force us to perform—leaving only the raw, unfiltered self. It is a behavioral environment crafted for those brave enough to sit with their own thoughts.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-2 text-gold-500/80">
                <span className="material-symbols-outlined">psychology</span>
                <span className="text-sm font-medium uppercase tracking-wider">Behavioral Architecture Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
