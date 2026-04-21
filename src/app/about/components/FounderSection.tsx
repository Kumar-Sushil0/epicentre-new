export function FounderSection() {
  return (
    <section className="founder">
      <div className="founder-left">
        <div className="founder-card">
          <div className="founder-photo">
            <img src="/dd.jpeg" alt="Founder portrait" />
          </div>
          <div className="founder-photo-overlay" />
          <div className="founder-gold-rise" />
          <div className="founder-meta founder-meta-in-card">
            <div className="founder-tag">The Founder</div>
            <div className="founder-name">D.D</div>
            <div className="founder-title">Conductor of Conditions</div>
          </div>
          <div className="founder-socials">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                language
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="founder-right">
        <div className="founder-label">Why this exists</div>
        <div className="founder-statement">
          <p>There were thoughts I couldn't finish. Not because I lacked time, discipline, or motivation.</p>
          <p>
           I had tried all of it coaches,
            mentors, online courses, retreats, communities. <br/> Most of it made me more performative,
            not less. I was comparing myself to borrowed benchmarks, seeking validation from
            environments that required me to announce who I was so people could decide how much
            substance I deserved.
          </p>
          <p>
            What I didn't have was an environment where I didn't need to perform at all. <br/> No
            judgement. No validation required or offered. No one asking what I do.
          </p>
          <p>
            I just wanted to ghost my old life for a bit.<br/> Come back a little resolved, a little
            untangled, a little less on my mind  <br/>So I could be more present in the life I was
            returning to. Unfinished thinking takes up space like a thief.
          </p>
          <p>So I built the socket. I call it The Silent Club.</p>
        </div>
        <div className="founder-bridge">If any of this sounds familiar, this page is for you.</div>
      </div>
    </section>
  );
}
