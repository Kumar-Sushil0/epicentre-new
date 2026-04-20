"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const offerItems = [
  "Full estate access — every space, indoors and out, is yours for the duration",
  "Up to 20 people — intimate by design, never a crowd",
  "Silence as the default — your audience arrives already open, already present",
  "No competing noise — one event at a time, always",
  "All logistics handled — you focus on the vision, we handle everything else",
  "Vendor network available — AV, permits, catering, travel — all coordinated if needed",
];

const mediums = [
  "Music",
  "Visual Art",
  "Film",
  "Photography",
  "Performance",
  "Writing",
  "Facilitation",
  "Food",
  "Movement",
  "Sound",
  "Craft",
  "Other",
];

export default function CreatorPage() {
  const [selectedMediums, setSelectedMediums] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    vision: "",
    audience: "",
    previous: "",
    when: "",
  });

  const toggleMedium = (medium: string) => {
    setSelectedMediums((prev) =>
      prev.includes(medium) ? prev.filter((item) => item !== medium) : [...prev, medium],
    );
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.vision.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">
      <SiteHeader active="events" />

      <section className="relative overflow-hidden border-b border-[#2a1f17] bg-[#160f0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(197,160,101,0.05)_0%,transparent_60%)]" />
        <div className="relative grid gap-12 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-[56px] md:py-20">
          <div>
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[#7a6048]">
              Experience Creators
            </p>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,4.4rem)] font-light leading-[0.98] tracking-[-0.02em]">
              The estate is
              <br />a blank canvas.
              <br />
              <em className="text-[#c5a065]">On weekends.</em>
            </h1>
            <span className="mt-6 inline-block border border-[#3a2a1f] px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#8a6e42]">
              Creative Collaboration
            </span>
          </div>
          <div className="self-end">
            <p className="font-serif text-[clamp(1rem,1.5vw,1.2rem)] font-light leading-[1.75] text-[#b09070]">
              The right space. The right silence.{" "}
              <em className="text-[#e8d5b0]">An audience that arrived already open.</em> Tell us
              what you&apos;re imagining and we&apos;ll figure out the rest together.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#2a1f17] md:grid-cols-2">
        <div className="space-y-10 bg-[#0f0b08] px-6 py-12 md:px-[56px] md:py-16">
          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              What the estate offers <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-light text-[#e8d5b0]">
              Everything a creator needs. Nothing they don&apos;t.
            </h2>

            <div className="border-y border-[#2a1f17]">
              {offerItems.map((item) => {
                const [title, detail] = item.split(" — ");
                return (
                  <div
                    key={item}
                    className="flex gap-3 border-b border-[#2a1f17] py-3.5 last:border-b-0"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-[#8a6e42]" />
                    <p className="text-sm leading-7 text-[#b09070]">
                      <span className="text-[#e8d5b0]">{title}</span>
                      {detail ? ` — ${detail}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-[#3a2a1f] pt-5">
              <p className="font-serif text-[1.05rem] italic leading-[1.65] text-[#7a6048]">
                &quot;We have never hosted the same thing twice. That is the point.&quot;
              </p>
            </div>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              Get in touch directly <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-light text-[#e8d5b0]">
              Rather talk first?
            </h2>

            <div className="space-y-3">
              <a
                href="mailto:hello@thesilent.club"
                className="flex items-center gap-4 border border-[#3a2a1f] p-3 transition-colors hover:border-[#8a6e42]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a2a1f] text-sm">
                  ✉
                </span>
                <span>
                  <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                    Email
                  </span>
                  <span className="text-sm text-[#b09070]">hello@thesilent.club</span>
                </span>
              </a>
              <a
                href="https://wa.me/919890322494"
                className="flex items-center gap-4 border border-[#3a2a1f] p-3 transition-colors hover:border-[#8a6e42]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a2a1f] text-sm">
                  ◎
                </span>
                <span>
                  <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                    WhatsApp
                  </span>
                  <span className="text-sm text-[#b09070]">+91 98903 22494</span>
                </span>
              </a>
            </div>
          </section>
        </div>

        <div className="bg-[#160f0a] px-6 py-12 md:px-[56px] md:py-16">
          <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
            Tell us <span className="h-px flex-1 bg-[#2a1f17]" />
          </p>
          <h2 className="mb-1.5 font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-light text-[#e8d5b0]">
            What are you imagining?
          </h2>
          <p className="mb-7 text-sm leading-6 text-[#7a6048]">
            Not a brief. Not a proposal. Just tell us what you see when you close your eyes and
            picture it happening here.
          </p>

          {!submitted ? (
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  Your name and what you make *
                </label>
                <input
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Name — and what you do, in your own words"
                  className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
                <p className="font-serif text-xs italic leading-5 text-[#7a6048]">
                  Not your bio. Not your title. Just how you&apos;d describe yourself to someone
                  who asked.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  Email *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="email@example.com"
                  className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
              </div>

              <div>
                <p className="mb-2 text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  Your medium
                </p>
                <div className="grid gap-1.5 sm:grid-cols-2 md:grid-cols-3">
                  {mediums.map((medium) => {
                    const selected = selectedMediums.includes(medium);
                    return (
                      <button
                        key={medium}
                        type="button"
                        onClick={() => toggleMedium(medium)}
                        className={`flex items-center gap-2 border p-2.5 text-left transition-colors ${
                          selected
                            ? "border-[#8a6e42] bg-[rgba(197,160,101,0.06)]"
                            : "border-[#3a2a1f] bg-[#1c1410] hover:border-[#8a6e42]"
                        }`}
                      >
                        <span
                          className={`flex h-3 w-3 items-center justify-center border ${
                            selected
                              ? "border-[#c5a065] bg-[rgba(197,160,101,0.15)]"
                              : "border-[#3a2a1f]"
                          }`}
                        >
                          {selected ? <span className="h-1 w-1 bg-[#c5a065]" /> : null}
                        </span>
                        <span className="text-xs text-[#b09070]">{medium}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  What are you imagining here? *
                </label>
                <textarea
                  rows={5}
                  value={form.vision}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, vision: event.target.value }))
                  }
                  placeholder="Not a brief. Just what you see when you close your eyes and picture it happening at The Silent Club."
                  className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  Who is this for?
                </label>
                <textarea
                  rows={3}
                  value={form.audience}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, audience: event.target.value }))
                  }
                  placeholder="Who would you bring? Describe them, not the number."
                  className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
                <p className="font-serif text-xs italic leading-5 text-[#7a6048]">
                  The kind of people, not how many.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  Have you done something like this before?
                </label>
                <textarea
                  rows={2}
                  value={form.previous}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, previous: event.target.value }))
                  }
                  placeholder="If yes, tell us. If no — even better."
                  className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">
                  When are you thinking?
                </label>
                <input
                  value={form.when}
                  onChange={(event) => setForm((prev) => ({ ...prev, when: event.target.value }))}
                  placeholder="Rough timeframe. We'll work around you."
                  className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#c5a065] px-7 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a]"
                >
                  Start the conversation
                </button>
                <p className="mt-2 font-serif text-[0.68rem] italic text-[#7a6048]">
                  We respond within 48 hours. No templates. An actual reply.
                </p>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center">
              <h3 className="mb-3 font-serif text-4xl font-light text-[#e8d5b0]">Received.</h3>
              <p className="mx-auto max-w-md text-sm leading-7 text-[#7a6048]">
                We&apos;ve read what you&apos;re imagining. We&apos;ll be in touch within 48 hours
                — not with a template, but with a real response to what you wrote.
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

