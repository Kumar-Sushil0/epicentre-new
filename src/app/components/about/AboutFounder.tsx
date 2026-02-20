"use client";

export default function AboutFounder() {
  return (
    <section className="py-32 px-4 md:px-16 bg-earth-900 border-b border-earth-800">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

          {/* Text Side - Updated content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 lg:pt-0">
            <h2 className="text-3xl font-normal mb-8 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The Conductor of Conditions
            </h2>
            <div className=" text-earth-300/80 font-body text-lg leading-relaxed max-w-2xl">
              <p>
                I did not build this to teach silence.
              </p>

              <p>
                I built it because I couldn't think clearly in the environments I was succeeding in.
              </p>

              <p>
                Too much input. Too much performance. Too many inherited roles.
              </p>

              <p>
                At some point I realized clarity does not come from more strategy.
              </p>

              <p>
                It comes from subtracting interference.
              </p>

              <p>
                So I began designing environments instead of chasing motivation.
              </p>

              <p>
                The Silent Club is the result.
              </p>

              <p>
                My role is not to advise you.
              </p>

              <p>
                It is to protect the conditions where you can hear yourself think.
              </p>

              <p>
                I am not a guide. I am not a guru.
              </p>

              <p>
                I maintain structure. You do the deciding.
              </p>

              <p className="text-earth-100 font-normal pt-4">
                If this idea unsettles you, good.<br />
                We should talk.
              </p>
            </div>
          </div>

          {/* Image Side - Now with CarouselCard behavior */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 contrast-[1.1]"
                style={{
                  backgroundImage: "url('/dd.jpeg')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Gold Background Overlay - Slides up from bottom like CarouselCard */}
              <div className="absolute left-0 right-0 bottom-0 bg-gold-500 h-[30%] transition-all duration-700 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ zIndex: 15 }}>
              </div>

              {/* Social Icons - Extreme right of image, side by side */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-3 transition-all duration-700 opacity-0 group-hover:opacity-100">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-earth-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-earth-700 transition-colors"
                  aria-label="Personal Website"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
              </div>

              {/* Name and Designation - Name always visible, designation only on hover */}
              <div className="absolute bottom-6 left-6 z-20">
                <h2 className="text-3xl font-normal mb-2 transition-colors duration-700 group-hover:text-earth-900 text-[#e7dfd3]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  D.D
                </h2>
                <p className="text-xs font-normal tracking-widest uppercase transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:text-earth-900 text-earth-300">
                
                Founder <br/>
                Liberation Designer<br/>
                Life System Architect
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}