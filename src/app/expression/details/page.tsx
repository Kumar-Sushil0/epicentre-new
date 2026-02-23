"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExpressionDetailsHero from "../../components/expression/details/ExpressionDetailsHero";
import ExpressionDetailsPhilosophy from "../../components/expression/details/ExpressionDetailsPhilosophy";
import ExpressionDetailsInfo from "../../components/expression/details/ExpressionDetailsInfo";
import ExpressionDetailsContent from "../../components/expression/details/ExpressionDetailsContent";
import ExpressionDetailsBooking from "../../components/expression/details/ExpressionDetailsBooking";

const expressionPractices = {
  "process-experiments": {
    title: "Process Experiments",
    subtitle: "Testing how you work, not what you produce.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
    infoItems: [
      { icon: "psychology", title: "Core Focus", description: "Examining method, rhythm, and sequence before committing to outcomes." },
      { icon: "science", title: "What This Is", description: "A temporary container to observe how work unfolds under reduced interference." },
      { icon: "groups", title: "Suitable For", description: "Creators examining work methods • Decision-makers testing process" },
      { icon: "cancel", title: "What It Is Not", description: "Not productivity training • Not performance optimization" },
      { icon: "emoji_events", title: "Outcome", description: "Clearer sense of personal working rhythm • Reduced urge to multitask" },
      { icon: "inventory_2", title: "What You Receive", description: "Quiet workspaces • Optional facilitation • Minimal tools" },
    ],
    includedItems: [
      { title: "Quiet workspaces", description: "Dedicated spaces with time blocks held without interruption." },
      { title: "Optional facilitation", description: "Boundary definition with minimal tools and materials." },
      { title: "Silence as default", description: "No templates, frameworks, or optimization systems." },
      { title: "Flexible configuration", description: "Solo or small-group setups based on experiment needs." },
      { title: "Process observation", description: "Focus on method and rhythm, not output or results." },
      { title: "Duration flexibility", description: "Fixed duration agreed in advance with intentional pacing." },
    ],
    kitItems: [
      { item: "Basic Work Surface", purpose: "Minimal setup for process observation" },
      { item: "Time Tracking Sheet", purpose: "Optional rhythm documentation" },
      { item: "Process Journal", purpose: "Method reflection and notes" },
      { item: "Silence Protocol Card", purpose: "Boundary reminders" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Setup & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Process Orientation & Boundary Setting" },
          { time: "16:00–18:00", activity: "Initial Work Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection Time" },
        ],
      },
      {
        day: 2,
        title: "Method Observation",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Work Block 1" },
          { time: "11:30–13:00", activity: "Work Block 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Work Block 3" },
          { time: "16:30–18:00", activity: "Process Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Rhythm Testing",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Work Session" },
          { time: "11:30–13:00", activity: "Rhythm Adjustment" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Work" },
          { time: "16:30–18:00", activity: "Pattern Observation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Deep Work Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Work Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Refinement" },
          { time: "16:30–18:00", activity: "Integration Work" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Completion",
        schedule: [
          { time: "06:30–07:30", activity: "Final Work Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Process Design Team",
    facilitatorRole: "Method Architects",
  },
  "the-writer-says": {
    title: "Writing Experiments",
    subtitle: "Listening for resonance, not feedback.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
    infoItems: [
      { icon: "edit_note", title: "Core Focus", description: "Vocalizing work-in-progress without explanation or defense." },
      { icon: "record_voice_over", title: "What This Is", description: "A facilitated session where sharing evolving work is primary." },
      { icon: "groups", title: "Suitable For", description: "Writers testing drafts • Those seeking resonance over feedback" },
      { icon: "cancel", title: "What It Is Not", description: "Not a critique workshop • Not feedback-driven" },
      { icon: "emoji_events", title: "Outcome", description: "Clearer sense of narrative voice • Understanding of rhythm" },
      { icon: "inventory_2", title: "What You Receive", description: "Analog writing tools • Quiet revision zones" },
    ],
    includedItems: [
      { title: "Analog writing tools", description: "Typewriters, heavy-stock paper, and fountain pens." },
      { title: "Sustenance provided", description: "Unlimited espresso, herbal teas, and light pastries." },
      { title: "Quiet revision zones", description: "Sound-dampened nooks for private work between readings." },
      { title: "Structured read slots", description: "15-minute slots per person with resonant silence after." },
      { title: "Small cohort size", description: "Limited to 8-10 people for intimacy and time." },
      { title: "No critique format", description: "Listeners listen. No feedback loop. Internal resonance." },
    ],
    kitItems: [
      { item: "Writing Implements", purpose: "Analog tools for draft work" },
      { item: "Heavy-Stock Paper", purpose: "Quality material for writing" },
      { item: "Read Slot Timer", purpose: "15-minute structured sessions" },
      { item: "Silence Protocol", purpose: "No preamble, no critique" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Settling",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Welcome" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Orientation & Space Familiarization" },
          { time: "16:00–17:30", activity: "Writing Session 1" },
          { time: "18:00–19:00", activity: "Gentle Movement" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Evening Writing" },
        ],
      },
      {
        day: 2,
        title: "Voice & Rhythm",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Writing Session 2" },
          { time: "11:30–13:00", activity: "Read Aloud Circle 1" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Revision Time" },
          { time: "16:30–18:00", activity: "Writing Session 3" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Resonance Testing",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Writing Session 4" },
          { time: "11:30–13:00", activity: "Read Aloud Circle 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Silent Revision" },
          { time: "16:30–18:00", activity: "Writing Session 5" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Deep Writing",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Writing Block" },
          { time: "11:30–13:00", activity: "Read Aloud Circle 3" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Personal Writing Time" },
          { time: "16:30–18:00", activity: "Final Revisions" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Completion & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Writing Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Closing Circle" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "$85",
    sessionDates: [
      { date: "Saturday, Oct 28", time: "1:00 PM - 5:00 PM", spots: "4 spots left", available: true },
      { date: "Sunday, Nov 12", time: "9:00 AM - 1:00 PM", available: true },
    ],
    facilitatorName: "Elena Vance",
    facilitatorRole: "Poet & Editor",
  },
};

function ExpressionDetailsPageContent() {
  const searchParams = useSearchParams();
  const practiceId = searchParams.get("id") || "the-writer-says";
  const practice = expressionPractices[practiceId as keyof typeof expressionPractices] || expressionPractices["the-writer-says"];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <ExpressionDetailsHero title={practice.title} subtitle={practice.subtitle} image={practice.image} />
      <ExpressionDetailsPhilosophy />
      <ExpressionDetailsInfo infoItems={practice.infoItems} />
      <section className="px-4 md:px-16 py-16 bg-earth-950">
        <div className="w-full flex flex-col lg:flex-row gap-16">
          <ExpressionDetailsContent includedItems={practice.includedItems} kitItems={practice.kitItems} itinerary={practice.itinerary} />
          <ExpressionDetailsBooking price={practice.price} sessionDates={practice.sessionDates} facilitatorName={practice.facilitatorName} facilitatorRole={practice.facilitatorRole} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function ExpressionDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-earth-900 flex items-center justify-center text-earth-50">Loading...</div>}>
      <ExpressionDetailsPageContent />
    </Suspense>
  );
}
