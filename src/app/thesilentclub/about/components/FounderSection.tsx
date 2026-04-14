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
              href="https://www.linkedin.com/in/digenrvarma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
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
