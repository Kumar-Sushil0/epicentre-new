"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const includedItems = [
  {
    label: "Full estate access",
    value: "all rooms, dorms, decks, shared spaces and outdoor areas",
  },
  {
    label: "Up to 20 people",
    value: "private rooms and shared dorms, your combination",
  },
  {
    label: "All meals",
    value: "satvik kitchen, the pantry, outdoor kitchen. 24-hour access",
  },
  {
    label: "All activities and gear",
    value: "birds, boats, cycles, gym, pool, contrast therapy",
  },
  {
    label: "Silent compact optional",
    value: "we can design the experience around silence or not. Your call",
  },
  {
    label: "On-ground support",
    value: "estate team present throughout. Nothing goes unnoticed",
  },
];

const vendorOptions = [
  "Audio-visual equipment and setup",
  "Event management on ground",
  "Tour and travel logistics",
  "Outside catering and bar setup",
  "Liquor permit",
  "Bulk boat bookings",
  "Safari and wildlife rides",
  "Activity gear and equipment",
  "Government permissions and licensing",
  "Security arrangements",
];

const typeOptions = [
  "Corporate offsite",
  "Creative retreat",
  "Workshop or facilitation",
  "Music or performance event",
  "Art installation or exhibition",
  "Film or photography project",
  "Private celebration",
  "Team building",
  "Other",
];

const budgetOptions = [
  "Rs. 1,00,000 – 1,50,000",
  "Rs. 1,50,000 – 2,50,000",
  "Rs. 2,50,000 – 5,00,000",
  "Rs. 5,00,000+",
  "Flexible / Let's discuss",
];

const dayOptions = ["Weekday (Mon-Thu)", "Weekend (Fri-Sun)", "Both / Flexible"];

export default function HostEventPage() {
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    affiliation: "",
    gatheringType: "",
    people: "",
    dates: "",
    dayPreference: "",
    budget: "",
    vision: "",
    previousExperience: "",
    notes: "",
  });

  const toggleVendor = (vendor: string) => {
    setSelectedVendors((prev) =>
      prev.includes(vendor) ? prev.filter((item) => item !== vendor) : [...prev, vendor],
    );
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.vision.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">
      <SiteHeader active="events" />

      <section className="relative overflow-hidden border-b border-[#2a1f17] bg-[#160f0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(197,160,101,0.04)_0%,transparent_60%)]" />
        <div className="relative grid gap-12 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-[56px] md:py-20">
          <div>
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[#7a6048]">Full Cycle</p>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4.8rem)] font-light leading-[0.95] tracking-[-0.02em]">
              Bring your
              <br />
              people.
              <br />
              <em className="text-[#c5a065]">We&apos;ll handle the rest.</em>
            </h1>
            <span className="mt-6 inline-block border border-[#3a2a1f] px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#8a6e42]">
              Full Estate Rental
            </span>
          </div>
          <div className="self-end">
            <p className="font-serif text-[0.95rem] leading-[1.85] text-[#b09070]">
              The entire Silent Club estate — seven acres, all spaces, all meals, up to 20 people
              — for 24 hours or more.{" "}
              <em className="text-[#e8d5b0]">
                You bring the intention. We build the conditions around it.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#2a1f17] md:grid-cols-2">
        <div className="space-y-10 bg-[#0f0b08] px-6 py-12 md:px-[56px] md:py-16">
          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              What&apos;s included <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.4rem,2vw,1.9rem)] font-light text-[#e8d5b0]">
              Everything. Nothing extra.
            </h2>
            <div className="border-y border-[#2a1f17]">
              {includedItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 border-b border-[#2a1f17] px-0 py-3 last:border-b-0"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-[#8a6e42]" />
                  <p className="text-sm leading-6 text-[#b09070]">
                    <span className="text-[#e8d5b0]">{item.label}</span> — {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              Pricing <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.4rem,2vw,1.9rem)] font-light text-[#e8d5b0]">
              Noon to noon. 24 hours.
            </h2>
            <div className="border border-[#3a2a1f] bg-[#1c1410] p-5">
              <div className="flex items-end justify-between border-b border-[#2a1f17] py-2">
                <div>
                  <p className="text-xs tracking-[0.08em] text-[#7a6048]">Weekday</p>
                  <p className="text-[0.65rem] text-[#7a6048]">Mon – Thu</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl text-[#c5a065]">Rs. 1,00,000</p>
                  <p className="text-[0.65rem] text-[#7a6048]">Per night · Taxes applicable</p>
                </div>
              </div>
              <div className="flex items-end justify-between py-2">
                <div>
                  <p className="text-xs tracking-[0.08em] text-[#7a6048]">Weekend</p>
                  <p className="text-[0.65rem] text-[#7a6048]">Fri – Sun</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl text-[#c5a065]">Rs. 1,20,000</p>
                  <p className="text-[0.65rem] text-[#7a6048]">Per night · Taxes applicable</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#7a6048]">
              Multi-night bookings available. Custom pricing for extended stays of 3 nights or
              more.
            </p>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              Vendor support <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2vw,1.9rem)] font-light text-[#e8d5b0]">
              We know who to call.
            </h2>
            <div className="border border-[#3a2a1f] bg-[#160f0a] p-4">
              <p className="font-serif text-[0.95rem] italic leading-7 text-[#b09070]">
                We have working relationships with trusted vendors across all categories. You
                don&apos;t need to figure it out alone — just tell us what you need and we&apos;ll
                coordinate everything.
              </p>
            </div>
          </section>

          <section>
            <p className="mb-5 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[#7a6048]">
              Talk to us first <span className="h-px flex-1 bg-[#2a1f17]" />
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2vw,1.9rem)] font-light text-[#e8d5b0]">
              Questions before the form?
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
            Enquiry <span className="h-px flex-1 bg-[#2a1f17]" />
          </p>
          <h2 className="mb-7 font-serif text-[clamp(1.4rem,2vw,1.9rem)] font-light text-[#e8d5b0]">
            Tell us what you&apos;re planning.
          </h2>

          {!submitted ? (
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Your name *"
                  value={formValues.name}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, name: value }))}
                  placeholder="Full name"
                />
                <Field
                  label="Email *"
                  type="email"
                  value={formValues.email}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, email: value }))}
                  placeholder="email@example.com"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Phone *"
                  value={formValues.phone}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, phone: value }))}
                  placeholder="+91 XXXXX XXXXX"
                />
                <Field
                  label="Organisation / Company"
                  value={formValues.organization}
                  onChange={(value) =>
                    setFormValues((prev) => ({ ...prev, organization: value }))
                  }
                  placeholder="Optional"
                />
              </div>

              <TextAreaField
                label="Are you organising this as part of a company, brand, or group?"
                value={formValues.affiliation}
                onChange={(value) => setFormValues((prev) => ({ ...prev, affiliation: value }))}
                placeholder="e.g. We are a 12-person product team at a startup, a creative collective, a friend group who met at a workshop... or just tell us who's coming."
                rows={2}
              />

              <SelectField
                label="Type of gathering *"
                value={formValues.gatheringType}
                onChange={(value) => setFormValues((prev) => ({ ...prev, gatheringType: value }))}
                options={typeOptions}
                placeholder="Select type"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Number of people *"
                  value={formValues.people}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, people: value }))}
                  placeholder="e.g. 12-15 people"
                />
                <Field
                  label="Preferred dates *"
                  value={formValues.dates}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, dates: value }))}
                  placeholder="e.g. July 2026"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <SelectField
                  label="Weekday or weekend?"
                  value={formValues.dayPreference}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, dayPreference: value }))}
                  options={dayOptions}
                  placeholder="Select preference"
                />
                <SelectField
                  label="Budget range"
                  value={formValues.budget}
                  onChange={(value) => setFormValues((prev) => ({ ...prev, budget: value }))}
                  options={budgetOptions}
                  placeholder="Select range"
                />
              </div>

              <TextAreaField
                label="What are you planning? *"
                value={formValues.vision}
                onChange={(value) => setFormValues((prev) => ({ ...prev, vision: value }))}
                placeholder="Tell us what you're imagining. What's the intention behind this gathering? What do you want people to feel or leave with? A paragraph is enough."
                rows={4}
              />

              <TextAreaField
                label="Have you done something like this before?"
                value={formValues.previousExperience}
                onChange={(value) =>
                  setFormValues((prev) => ({ ...prev, previousExperience: value }))
                }
                placeholder="Any context helps us understand what you're looking for..."
                rows={2}
              />

              <div>
                <p className="mb-3 text-[0.58rem] uppercase tracking-[0.18em] text-[#7a6048]">
                  Vendor support needed (select all that apply)
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  {vendorOptions.map((option) => {
                    const selected = selectedVendors.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleVendor(option)}
                        className={`flex items-center gap-3 border p-3 text-left transition-colors ${
                          selected
                            ? "border-[#8a6e42] bg-[rgba(197,160,101,0.06)]"
                            : "border-[#3a2a1f] bg-[#1c1410] hover:border-[#8a6e42]"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center border ${
                            selected
                              ? "border-[#c5a065] bg-[rgba(197,160,101,0.15)]"
                              : "border-[#3a2a1f]"
                          }`}
                        >
                          {selected ? <span className="h-1.5 w-1.5 bg-[#c5a065]" /> : null}
                        </span>
                        <span className="text-xs leading-5 text-[#b09070]">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <TextAreaField
                label="Anything else we should know?"
                value={formValues.notes}
                onChange={(value) => setFormValues((prev) => ({ ...prev, notes: value }))}
                placeholder="Dietary requirements, special setup, accessibility needs, or anything else..."
                rows={3}
              />

              <div>
                <button
                  type="submit"
                  className="bg-[#c5a065] px-7 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a]"
                >
                  Send enquiry
                </button>
                <p className="mt-2 font-serif text-[0.68rem] italic text-[#7a6048]">
                  We respond within 48 hours with availability and initial suggestions.
                </p>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center">
              <h3 className="mb-3 font-serif text-4xl font-light text-[#e8d5b0]">Received.</h3>
              <p className="mx-auto max-w-md text-sm leading-7 text-[#7a6048]">
                We will review your enquiry and come back within 48 hours with availability,
                initial thoughts, and suggestions on how we can shape this together.
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
      />
    </label>
  );
}

type TextAreaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

function TextAreaField({ label, value, onChange, placeholder, rows = 3 }: TextAreaFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm leading-6 text-[#e8d5b0] outline-none transition-colors placeholder:text-[#7a6048] focus:border-[#8a6e42]"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
};

function SelectField({ label, value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.58rem] uppercase tracking-[0.16em] text-[#7a6048]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer border border-[#3a2a1f] bg-[#1c1410] px-3.5 py-2.5 text-sm text-[#e8d5b0] outline-none transition-colors focus:border-[#8a6e42]"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

