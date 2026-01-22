"use client";

export default function Footer() {
  return (
    <footer className="bg-earth-950 text-earth-300 py-16 border-t border-earth-700">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-earth-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-gold-500 text-2xl">spa</span>
              <h2 className="text-xl font-bold tracking-tight text-earth-50">EPiCentre</h2>
            </div>
            <p className="text-sm text-earth-300/60 font-body leading-relaxed">
              A space for being, not doing. Reconnect with yourself in the embrace of nature.
            </p>
          </div>
          <div>
            <h3 className="text-earth-50 font-bold mb-6">Explore</h3>
            <ul className="space-y-3 text-sm text-earth-300/60 font-body">
              <li>
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Accommodation
                </a>
              </li>
              <li>
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Retreats
                </a>
              </li>
              <li>
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-earth-50 font-bold mb-6">Connect</h3>
            <ul className="space-y-3 text-sm text-earth-300/60 font-body">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">mail</span>
                hello@epicenter.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">call</span>
                +91 98765 43210
              </li>
              <li className="flex gap-4 mt-4">
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Instagram
                </a>
                <a className="hover:text-gold-500 transition-colors" href="#">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-earth-50 font-bold mb-6">Newsletter</h3>
            <p className="text-xs text-earth-300/50 mb-4 font-body">Receive quiet updates, no spam.</p>
            <div className="flex gap-2">
              <input
                className="bg-earth-900 border border-earth-700 rounded px-3 py-2 text-sm text-earth-100 focus:outline-none focus:border-gold-500 w-full placeholder-earth-600"
                placeholder="Your email"
                type="email"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-earth-950 px-4 py-2 rounded text-sm font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-earth-100/80 font-bold mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="group bg-earth-900 rounded-lg border border-earth-800 open:bg-earth-800 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-sm text-earth-100">
                Is there WiFi?
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gold-500">expand_more</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-earth-300/80 font-body border-t border-earth-800 pt-3">
                We encourage a digital detox. WiFi is available only in the reception area for emergencies, but we recommend disconnecting to fully experience the retreat.
              </div>
            </details>
            <details className="group bg-earth-900 rounded-lg border border-earth-800 open:bg-earth-800 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-sm text-earth-100">
                Can I bring my pet?
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gold-500">expand_more</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-earth-300/80 font-body border-t border-earth-800 pt-3">
                While we love animals, to maintain the quietude and protect local wildlife, we currently do not allow pets.
              </div>
            </details>
            <details className="group bg-earth-900 rounded-lg border border-earth-800 open:bg-earth-800 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-sm text-earth-100">
                Is alcohol served?
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gold-500">expand_more</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-earth-300/80 font-body border-t border-earth-800 pt-3">
                No, EPiCentre is an alcohol-free and smoke-free zone to promote clarity and health.
              </div>
            </details>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-earth-800 text-xs text-earth-300/40 font-body">
          © 2023 EPiCentre Retreats. All rights reserved.{" "}
          <a className="underline hover:text-earth-100 ml-2" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
