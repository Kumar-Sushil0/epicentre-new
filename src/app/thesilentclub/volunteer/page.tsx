"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

export default function TheSilentClubVolunteerPage() {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    why: "",
  });

  useEffect(() => {
    document.body.style.overflow = openInviteModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openInviteModal]);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const submitForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.why.trim()) {
      alert("Please fill in your name, email and tell us why you want to volunteer.");
      return;
    }
    setShowSuccess(true);
  };

  return (
    <main>
      <style jsx global>{`
        :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--bg-4:#221814;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw;}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{font-size:16px;scroll-behavior:smooth;}
        body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;-webkit-font-smoothing:antialiased;}
        body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:0.4;}
        .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,0.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--rule);transition:background .2s;}
        .nav.scrolled{background:rgba(15,11,8,0.98);}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1400px;margin:0 auto;padding:0 var(--g);}
        .nav-brand{height:56px;width:160px;display:flex;align-items:center;justify-content:center;text-decoration:none;}
        .nav-links{display:flex;align-items:center;gap:32px;list-style:none;}
        .nav-links a{font-size:0.68rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);text-decoration:none;transition:color 0.2s;}
        .nav-links a:hover{color:var(--gold);}
        .nav-cta{font-size:0.65rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none;cursor:pointer;font-family:var(--sans);}
        .hero{padding-top:60px;min-height:50vh;display:flex;flex-direction:column;justify-content:flex-end;border-bottom:1px solid var(--rule);position:relative;overflow:hidden;background:var(--bg-2);}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 40%,rgba(197,160,101,0.04) 0%,transparent 60%);pointer-events:none;}
        .hero-inner{position:relative;z-index:2;padding:clamp(48px,6vw,80px) var(--g);display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end;}
        .hero-label{font-size:0.6rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;}
        .hero-heading{font-family:var(--serif);font-weight:300;font-size:clamp(2.4rem,5vw,4.8rem);line-height:0.95;letter-spacing:-0.02em;color:var(--gold-pale);margin-bottom:16px;}
        .hero-heading em{font-style:italic;color:var(--gold);}
        .hero-duration{font-size:0.6rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold-dim);border:1px solid var(--rule-2);display:inline-block;padding:4px 12px;}
        .hero-desc{font-size:0.9rem;line-height:1.85;color:var(--text-2);font-family:var(--serif);}
        .hero-desc em{font-style:italic;color:var(--gold-pale);}
        .main{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule);}
        .details{background:var(--bg);padding:clamp(48px,6vw,72px) var(--g);}
        .detail-block{margin-bottom:40px;}
        .detail-block:last-child{margin-bottom:0;}
        .detail-label,.form-label-top{font-size:0.6rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--text-3);margin-bottom:20px;display:flex;align-items:center;gap:12px;}
        .detail-label::after,.form-label-top::after{content:'';flex:1;height:1px;background:var(--rule);}
        .detail-heading,.form-heading{font-family:var(--serif);font-weight:300;font-size:clamp(1.4rem,2.2vw,2rem);color:var(--gold-pale);margin-bottom:16px;line-height:1.1;}
        .exchange-list{display:flex;flex-direction:column;}
        .exchange-item{display:flex;align-items:baseline;gap:16px;padding:14px 0;border-bottom:1px solid var(--rule);font-size:0.875rem;color:var(--text-2);}
        .exchange-item:first-child{border-top:1px solid var(--rule);}
        .exchange-dot{width:4px;height:4px;border-radius:50%;background:var(--gold-dim);flex-shrink:0;margin-top:7px;}
        .roles-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--rule);border:1px solid var(--rule);}
        .role-card{background:var(--bg-2);padding:18px 20px;}
        .role-card-name{font-family:var(--serif);font-size:1rem;color:var(--gold-pale);margin-bottom:4px;}
        .role-card-desc{font-size:0.72rem;color:var(--text-3);line-height:1.5;}
        .contact-block{display:flex;flex-direction:column;gap:12px;}
        .contact-item{display:flex;align-items:center;gap:16px;padding:14px 18px;border:1px solid var(--rule-2);text-decoration:none;}
        .contact-icon{width:36px;height:36px;border:1px solid var(--rule-2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.9rem;}
        .contact-label{font-size:0.58rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);}
        .contact-value{font-size:0.84rem;color:var(--text-2);}
        .form-wrap{background:var(--bg-2);padding:clamp(48px,6vw,72px) var(--g);}
        .form-heading{margin-bottom:28px;}
        .form{display:flex;flex-direction:column;gap:16px;}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .form-field{display:flex;flex-direction:column;gap:6px;}
        .form-field label{font-size:0.58rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);}
        .form-field input,.form-field textarea,.form-field select{background:var(--bg-3);border:1px solid var(--rule-2);padding:11px 14px;font-size:0.84rem;color:var(--gold-pale);outline:none;width:100%;}
        .file-upload{border:1px solid var(--rule-2);padding:12px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;background:var(--bg-3);}
        .file-upload input{display:none;}
        .file-upload-btn{font-size:0.58rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--bg);background:var(--gold-dim);padding:6px 12px;}
        .file-upload-name{font-size:0.78rem;color:var(--text-3);}
        .file-upload-note{font-size:0.6rem;color:var(--text-3);margin-top:4px;}
        .form-submit{background:var(--gold);color:var(--bg);font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;padding:14px 28px;border:none;cursor:pointer;margin-top:8px;}
        .form-submit-note{font-size:0.62rem;color:var(--text-3);font-family:var(--serif);font-style:italic;margin-top:6px;}
        .form-success{text-align:center;padding:48px 0;}
        .form-success-heading{font-family:var(--serif);font-size:2rem;color:var(--gold-pale);margin-bottom:12px;}
        .form-success-text{font-size:0.875rem;color:var(--text-3);line-height:1.7;max-width:320px;margin:0 auto;}
        .footer{background:var(--bg);border-top:1px solid var(--rule);}
        .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule);}
        .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px);}
        .footer-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);margin-bottom:4px;}
        .footer-tagline,.footer-copy,.footer-link,.footer-collab-text,.footer-col-label{color:var(--text-3);}
        .footer-collab-link{font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold-dim);background:none;border:none;}
        .footer-link{display:block;font-size:0.78rem;padding:3px 0;text-decoration:none;}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap;}
        .invite-modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px;}
        .invite-modal.show{display:flex;}
        .invite-modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative;}
        .invite-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem;cursor:pointer;}
        @media(max-width:860px){.nav-links{display:none}.hero-inner,.main{grid-template-columns:1fr}.roles-grid,.form-row{grid-template-columns:1fr}}
        @media(max-width:900px){.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:540px){.footer-top{grid-template-columns:1fr}}
      `}</style>

      <SiteHeader active="home" />

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">Volunteer</div>
            <h1 className="hero-heading">Work here.<br /><em>Live here.</em><br />Think here.</h1>
            <div className="hero-duration" style={{ marginTop: 20 }}>Minimum 3 months</div>
          </div>
          <div className="hero-right">
            <p className="hero-desc">This is not an internship. There is no syllabus, no performance review, no certificate at the end. <em>You contribute to what makes this place possible, and in return, you get to live inside it.</em> That exchange is the whole arrangement.</p>
          </div>
        </div>
      </section>

      <div className="main">
        <div className="details">
          <div className="detail-block">
            <div className="detail-label">What you receive</div>
            <h2 className="detail-heading">The exchange</h2>
            <div className="exchange-list">
              {[
                "Food and accommodation for the full duration of your volunteer period",
                "Full access to the estate, all spaces, all activities, and all meals",
                "An immersive experience inside a practice of silence and intentional living",
                "Time. Unstructured, protected time to think, create, and be",
              ].map((item) => (
                <div className="exchange-item" key={item}><div className="exchange-dot" />{item}</div>
              ))}
            </div>
          </div>

          <div className="detail-block">
            <div className="detail-label">What you contribute</div>
            <h2 className="detail-heading">Volunteer roles</h2>
            <div className="roles-grid">
              {[
                ["Facility Management", "Keeping the estate running quietly and without friction."],
                ["Vendor Communication", "Coordinating with external suppliers and service providers."],
                ["Guest Hospitality", "Ensuring members arrive and settle in without needing to ask for anything."],
                ["Content & Documentation", "Capturing what happens here in words, photographs, or film."],
              ].map(([name, desc]) => (
                <div className="role-card" key={name}>
                  <div className="role-card-name">{name}</div>
                  <div className="role-card-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-block">
            <div className="detail-label">Questions</div>
            <h2 className="detail-heading">Get in touch</h2>
            <div className="contact-block">
              <a className="contact-item" href="mailto:hello@thesilent.club">
                <div className="contact-icon">✉</div>
                <div><div className="contact-label">Email</div><div className="contact-value">hello@thesilent.club</div></div>
              </a>
              <a className="contact-item" href="https://wa.me/919890322494">
                <div className="contact-icon">◎</div>
                <div><div className="contact-label">WhatsApp</div><div className="contact-value">+91 98903 22494</div></div>
              </a>
            </div>
          </div>
        </div>

        <div className="form-wrap">
          <div className="form-label-top">Apply</div>
          <h2 className="form-heading">Volunteer application</h2>
          {!showSuccess ? (
            <div className="form" id="volForm">
              <div className="form-row">
                <div className="form-field"><label>Full name *</label><input type="text" placeholder="Your full name" onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))} /></div>
                <div className="form-field"><label>Email *</label><input type="email" placeholder="your@email.com" onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))} /></div>
              </div>
              <div className="form-row">
                <div className="form-field"><label>Phone number *</label><input type="tel" placeholder="+91 XXXXX XXXXX" /></div>
                <div className="form-field"><label>Current location *</label><input type="text" placeholder="City, Country" /></div>
              </div>
              <div className="form-row">
                <div className="form-field"><label>Preferred duration *</label><select><option value="">Select duration</option><option>3 months</option><option>3–6 months</option><option>6 months</option><option>6 months or more</option></select></div>
                <div className="form-field"><label>When can you start? *</label><input type="text" placeholder="e.g., Immediately, After June 2026" /></div>
              </div>
              <div className="form-field"><label>Relevant skills *</label><textarea rows={3} placeholder="e.g., Gardening, cooking, maintenance, hospitality, content creation, photography..." /></div>
              <div className="form-field"><label>Previous experience</label><textarea rows={3} placeholder="Any relevant volunteer or work experience..." /></div>
              <div className="form-field"><label>Why do you want to volunteer here? *</label><textarea rows={4} placeholder="Tell us what draws you to The Silent Club and what you hope to contribute and gain from this experience..." onChange={(e) => setFormData((s) => ({ ...s, why: e.target.value }))} /></div>
              <div className="form-field">
                <label>Attach CV / Résumé</label>
                <label className="file-upload">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={onFileChange} />
                  <div className="file-upload-btn">Choose file</div>
                  <div className="file-upload-name">{fileName}</div>
                </label>
                <div className="file-upload-note">Accepted formats: PDF, DOC, DOCX · Max 5MB</div>
              </div>
              <div>
                <button className="form-submit" onClick={submitForm}>Submit Application →</button>
                <div className="form-submit-note">We review all applications within 72 hours.</div>
              </div>
            </div>
          ) : (
            <div className="form-success show" id="formSuccess">
              <div className="form-success-heading">Application received.</div>
              <p className="form-success-text">Thank you for applying. We review every application carefully and will be in touch within 72 hours.</p>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-brand">The Silent Club</div>
            <div className="footer-tagline">Silence as a Service · Bhigwan, Pune</div>
            <div className="footer-collab">
              <p className="footer-collab-text">Artist, musician, or experience creator? Host an event here.</p>
              <button className="footer-collab-link">Collaborate with us →</button>
            </div>
          </div>
          <div className="footer-col"><div className="footer-col-label">Explore</div><a className="footer-link" href="/thesilentclub/home">Home</a><a className="footer-link" href="/thesilentclub/about">About</a><a className="footer-link" href="/thesilentclub/estate">The Estate</a><a className="footer-link" href="/thesilentclub/blogs">Journal</a><a className="footer-link" href="/thesilentclub/faq">FAQ</a></div>
          <div className="footer-col"><div className="footer-col-label">Stay</div><a className="footer-link" href="#">Silence Day Cycle</a><a className="footer-link" href="#">Residency Weekend</a><a className="footer-link" href="#">Solitude Weekday</a><a className="footer-link" href="#">Creation Full Estate</a></div>
          <div className="footer-col"><div className="footer-col-label">Connect</div><a className="footer-link" href="#">Instagram</a><a className="footer-link" href="#">Substack</a><a className="footer-link" href="#">Request Invite</a><a className="footer-link" href="/thesilentclub/volunteer">Work as Volunteer</a></div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 The Silent Club. All rights reserved.</div>
          <div className="footer-copy">The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</div>
          <div className="footer-copy">A registered initiative of Silent Tourism Foundation.</div>
        </div>
      </footer>

      <div className={`invite-modal ${openInviteModal ? "show" : ""}`} onClick={(e) => e.currentTarget === e.target && setOpenInviteModal(false)}>
        <div className="invite-modal-box">
          <button className="invite-x" onClick={() => setOpenInviteModal(false)}>×</button>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6048", marginBottom: 12 }}>Request Invite</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", fontWeight: 300, color: "#e8d5b0", marginBottom: 6 }}>Two questions.<br />No pitch.</div>
          <p style={{ fontSize: "0.82rem", color: "#7a6048", lineHeight: 1.65, marginBottom: 22 }}>We respond within 72 hours.</p>
          <button style={{ width: "100%", background: "#c5a065", color: "#0f0b08", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: 12, border: "none", cursor: "pointer" }}>Submit →</button>
        </div>
      </div>
    </main>
  );
}

