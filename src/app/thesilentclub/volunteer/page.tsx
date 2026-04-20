"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">
      <SiteHeader active="events" />

      <section className="relative overflow-hidden border-b border-[#2a1f17] bg-[#160f0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(197,160,101,0.04)_0%,transparent_60%)]" />
        <div className="relative grid gap-12 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-[56px] md:py-20">
          <div>
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[#7a6048]">Volunteer</p>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[0.95] tracking-[-0.02em]">
              Work here.
              <br />
              <em className="text-[#c5a065]">Live here.</em>
              <br />
              Think here.
            </h1>
            <span className="mt-6 inline-block border border-[#3a2a1f] px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#8a6e42]">
              Minimum 3 months
            </span>
          </div>
          <div className="self-end">
            <p className="font-serif text-[0.95rem] leading-[1.85] text-[#b09070]">
              This is not an internship. There is no syllabus, no performance review, no
              certificate at the end.{" "}
              <em className="text-[#e8d5b0]">
                You contribute to what makes this place possible, and in return, you get to live
                inside it.
              </em>{" "}
              That exchange is the whole arrangement.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#2a1f17] md:grid-cols-2">
        <div className="space-y-10 bg-[#0f0b08] px-6 py-12 md:px-[56px] md:py-16">
          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              What you receive <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-light text-[#e8d5b0]">
              The exchange
            </h2>
            <div className="border-y border-[#2a1f17]">
              {[
                "Food and accommodation for the full duration of your volunteer period",
                "Full access to the estate, all spaces, all activities, and all meals",
                "An immersive experience inside a practice of silence and intentional living",
                "Time. Unstructured, protected time to think, create, and be",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-[#2a1f17] py-3.5 last:border-b-0">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[#8a6e42]" />
                  <p className="text-sm leading-7 text-[#b09070]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              What you contribute <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-light text-[#e8d5b0]">
              Volunteer roles
            </h2>
            <div className="grid gap-px border border-[#2a1f17] bg-[#2a1f17] md:grid-cols-2">
              {[
                ["Facility Management", "Keeping the estate running quietly and without friction."],
                ["Vendor Communication", "Coordinating with external suppliers and service providers."],
                ["Guest Hospitality", "Ensuring members arrive and settle in without needing to ask for anything."],
                ["Content & Documentation", "Capturing what happens here in words, photographs, or film."],
              ].map(([name, desc]) => (
                <div key={name} className="bg-[#160f0a] p-5">
                  <p className="mb-1 font-serif text-base text-[#e8d5b0]">{name}</p>
                  <p className="text-xs leading-5 text-[#7a6048]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              Questions <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-light text-[#e8d5b0]">
              Get in touch
            </h2>
            <div className="space-y-3">
              <a className="contact-item" href="mailto:hello@thesilent.club">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a2a1f] text-sm">✉</span>
                <span>
                  <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Email</span>
                  <span className="text-sm text-[#b09070]">hello@thesilent.club</span>
                </span>
              </a>
              <a className="contact-item" href="https://wa.me/919890322494">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a2a1f] text-sm">◎</span>
                <span>
                  <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">WhatsApp</span>
                  <span className="text-sm text-[#b09070]">+91 98903 22494</span>
                </span>
              </a>
            </div>
          </section>
        </div>

        <div className="bg-[#160f0a] px-6 py-12 md:px-[56px] md:py-16">
          <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
            Apply <span className="h-px flex-1 bg-[#2a1f17]" />
          </p>
          <h2 className="mb-7 font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-light text-[#e8d5b0]">
            Volunteer application
          </h2>
          {!showSuccess ? (
            <div className="space-y-4" id="volForm">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Full name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                    className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none placeholder:text-[#7a6048]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
                    className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none placeholder:text-[#7a6048]"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Phone number *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Current location *</label>
                  <input type="text" placeholder="City, Country" className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Preferred duration *</label>
                  <select className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none">
                    <option value="">Select duration</option>
                    <option>3 months</option>
                    <option>3-6 months</option>
                    <option>6 months</option>
                    <option>6 months or more</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">When can you start? *</label>
                  <input type="text" placeholder="e.g., Immediately, After June 2026" className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Relevant skills *</label>
                <textarea rows={3} placeholder="e.g., Gardening, cooking, maintenance, hospitality, content creation, photography..." className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Previous experience</label>
                <textarea rows={3} placeholder="Any relevant volunteer or work experience..." className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Why do you want to volunteer here? *</label>
                <textarea rows={4} placeholder="Tell us what draws you to The Silent Club and what you hope to contribute and gain from this experience..." onChange={(e) => setFormData((s) => ({ ...s, why: e.target.value }))} className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none placeholder:text-[#7a6048]" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">Attach CV / Resume</label>
                <label className="flex cursor-pointer items-center gap-3 border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-3">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={onFileChange} />
                  <span className="bg-[#8a6e42] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-[#0f0b08]">Choose file</span>
                  <span className="text-xs text-[#7a6048]">{fileName}</span>
                </label>
                <p className="text-[0.62rem] text-[#7a6048]">Accepted formats: PDF, DOC, DOCX - Max 5MB</p>
              </div>

              <div>
                <button className="bg-[#c5a065] px-7 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a]" onClick={submitForm}>
                  Submit Application →
                </button>
                <p className="mt-2 font-serif text-[0.68rem] italic text-[#7a6048]">
                  We review all applications within 72 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center" id="formSuccess">
              <h3 className="mb-3 font-serif text-4xl font-light text-[#e8d5b0]">Application received.</h3>
              <p className="mx-auto max-w-md text-sm leading-7 text-[#7a6048]">
                Thank you for applying. We review every application carefully and will be in touch
                within 72 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />

      <div
        className={`fixed inset-0 z-[9000] items-center justify-center bg-[rgba(15,11,8,.88)] p-6 backdrop-blur ${openInviteModal ? "flex" : "hidden"}`}
        onClick={(e) => e.currentTarget === e.target && setOpenInviteModal(false)}
      >
        <div className="relative w-full max-w-[480px] border border-[#3a2a1f] bg-[#160f0a] p-11">
          <button className="absolute right-5 top-3 text-xl text-[#7a6048]" onClick={() => setOpenInviteModal(false)}>×</button>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6048", marginBottom: 12 }}>Request Invite</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", fontWeight: 300, color: "#e8d5b0", marginBottom: 6 }}>Two questions.<br />No pitch.</div>
          <p style={{ fontSize: "0.82rem", color: "#7a6048", lineHeight: 1.65, marginBottom: 22 }}>We respond within 72 hours.</p>
          <button style={{ width: "100%", background: "#c5a065", color: "#0f0b08", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: 12, border: "none", cursor: "pointer" }}>Submit →</button>
        </div>
      </div>
    </main>
  );
}

