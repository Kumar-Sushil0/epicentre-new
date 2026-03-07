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
    subtitle: "How you work, not what you produce.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Most people optimize for output without examining the process that generates it. Process Experiments are structured explorations of how you actually work not how you believe you work, and not how you have been told to work. Over a defined period at the estate, you design and run small personal experiments: changing the sequence of your thinking, the tools you use, the time of day you make decisions, the conditions under which you write or plan. The results are not reported. They are noticed." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club removes the pressure to produce outcomes while the experiment is running. Without a deadline, a deliverable, or an audience, the process becomes the entire object of attention. You begin to notice what conditions you actually require as opposed to what you have habituated to. Members consistently report that the first clear discovery is how much of their process was shaped by other people's systems, not their own." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a documented personal process map not prescribed, but observed. The discoveries are specific: when your thinking is sharpest, under what conditions decisions deteriorate, which inputs are generative and which are merely habitual. These are not insights arrived at through reflection alone. They are evidence, accumulated quietly over days." },
      { icon: "groups", title: "Suitable For", description: "Founders and operators redesigning how they work after an exit or transition • Individuals whose current process was built for a context that no longer exists • Those who have achieved results but cannot clearly identify what produced them • Anyone preparing to work differently in their next chapter" },
      { icon: "cancel", title: "What It Is Not", description: "Not a productivity course • Not a systems design workshop • Not coached or facilitated • Not benchmarked against external frameworks • There are no templates to complete here." },
      { icon: "inventory_2", title: "What You Receive", description: "Printed Process Experiment design framework • Blank field notebook for observation logging • Access to estate work environments (indoor and outdoor) • Physical carry kit • Suggested daily rhythm for running experiments across a stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Printed experiment framework", description: "" },
      { title: "Field notebook", description: "" },
      { title: "Access to all estate work environments", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Field notebook (estate-provided)", purpose: "Observation log — not a journal" },
      { item: "Process framework guide (printed)", purpose: "Structural reference without instruction" },
      { item: "Timer (no notifications)", purpose: "Session boundary — not urgency" },
      { item: "Single writing instrument", purpose: "Constraint reduces decision fatigue" },
      { item: "Personal reference materials if relevant", purpose: "Bring only what the experiment requires" },
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
  "material-experiments": {
    title: "Material Experiments",
    subtitle: "What the hands discover, the mind remembers.",
    image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Experiments/material.png",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Material Experiments are structured engagements with physical making working with materials that have no screen, no undo function, and no audience. Clay, wood, paper, ink, fabric, stone. The specific material is less important than the relationship it creates: one where the maker must respond to resistance, adjust to feedback that arrives through the hands, and make decisions in real time without the option of revision. This is thinking through making. The output is secondary to what the process surfaces." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club removes the ambient noise that makes material work feel indulgent or impractical. Without the pressure to justify how you are spending your time, the hands move differently. Attention narrows to the immediate physical problem of how the clay responds to pressure, where the grain runs in the wood, how the ink behaves on different surfaces. Members report that the first hour of material work produces more genuine cognitive rest than any other activity at the estate." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a recalibrated relationship to process and imperfection. Material work produces tolerance for iteration in a way that intellectual work rarely does because the material itself refuses to be forced. Members carry this tolerance back into their thinking. Decisions become less fraught. Iteration becomes less costly. The willingness to begin without knowing the outcome increases." },
      { icon: "groups", title: "Suitable For", description: "Individuals who have been entirely screen-based for an extended period • Those who process ideas more effectively through making than through writing • Members seeking cognitive rest that requires physical engagement • Anyone for whom imperfection has become a professional liability rather than a tool" },
      { icon: "cancel", title: "What It Is Not", description: "Not an art class • Not craft therapy • Not skill-building instruction • Not exhibition or performance • There is no output to be assessed here." },
      { icon: "inventory_2", title: "What You Receive", description: "Access to estate material workspace and available materials • Printed material experiment brief • Field notebook for process observation • Physical carry kit • Suggested session rhythm by stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Access to material workspace", description: "" },
      { title: "Core materials (clay, paper, ink, basic woodworking)", description: "" },
      { title: "Printed experiment brief", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Work apron or protective clothing", purpose: "Material work is not clean" },
      { item: "Field notebook", purpose: "Observation of the process, not the product" },
      { item: "Personal materials (optional)", purpose: "Bring what you are already drawn to working with" },
      { item: "Printed experiment brief (estate-provided)", purpose: "Starting constraint not instruction" },
      { item: "Camera or sketchbook (optional)", purpose: "For those who document process rather than product" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Material Workspace Orientation" },
          { time: "16:00–18:00", activity: "Initial Material Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection" },
        ],
      },
      {
        day: 2,
        title: "Making & Observation",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Material Session 1" },
          { time: "11:30–13:00", activity: "Material Session 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Observation & Notes" },
          { time: "16:30–18:00", activity: "Open Making" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Material Session" },
          { time: "11:30–13:00", activity: "Extended Material Session" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Making" },
          { time: "16:30–18:00", activity: "Process Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Making Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Material Refinement" },
          { time: "16:30–18:00", activity: "Integration & Notes" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Making Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Material Practice Team",
    facilitatorRole: "Space & Materials",
  },
  "narrative-experiments": {
    title: "Narrative Experiments",
    subtitle: "The story you are telling has a structure. Find it.",
    image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Experiments/narrative.png",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Narrative Experiments are structured engagements with the stories you carry about who you are, what you have built, what you have left behind, and what comes next. These are not therapeutic exercises. They are cognitive ones. The way you narrate your own history determines the options you perceive in your future. If the narrative is inherited, compressed, or inaccurate, the options it generates will be limited accordingly. The experiment is to examine the story with enough distance to see its structure and to test whether it holds." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club removes the social mirrors that normally reinforce your narrative without examination. Without colleagues, family, or professional context present, the story you tell about yourself becomes temporarily unstable, not destabilising, but available for revision. Members report that the most significant shifts at the estate happen not through new information but through the re-examination of information they already held. The silence creates the distance required to see what proximity normally obscures." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a cleaner narrative one you have chosen rather than inherited. This is not a rebranding exercise. It is a structural one. The narrative that emerges from the experiment will be more accurate, more useful, and more genuinely yours than the one you arrived with. Decisions made from a cleaner narrative are less conflicted and more durable." },
      { icon: "groups", title: "Suitable For", description: "Individuals at identity inflection points post-exit, post-role, post-transition • Those whose self-narrative was built for a chapter that has ended • Members preparing to communicate a new direction to others • Anyone for whom the story of the past is limiting the design of the next chapter" },
      { icon: "cancel", title: "What It Is Not", description: "Not a writing workshop • Not storytelling coaching • Not therapy or counselling • Not personal branding • There is no narrative to perform here." },
      { icon: "inventory_2", title: "What You Receive", description: "Printed Narrative Experiment framework • Field notebook for written exploration • Access to estate writing environments (indoor and outdoor) • Physical carry kit • Suggested daily rhythm across a stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Printed narrative framework", description: "" },
      { title: "Field notebook", description: "" },
      { title: "Access to all estate writing environments", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Field notebook (estate-provided)", purpose: "Primary thinking instrument for the experiment" },
      { item: "Narrative framework guide (printed)", purpose: "Structural reference not a script" },
      { item: "Personal writing instrument", purpose: "One pen constraint aids focus" },
      { item: "Relevant personal documents (optional)", purpose: "Only what the examination requires" },
      { item: "Timer (no notifications)", purpose: "Session boundaries without urgency" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Narrative Framework Orientation" },
          { time: "16:00–18:00", activity: "Initial Writing Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection" },
        ],
      },
      {
        day: 2,
        title: "Structure & Observation",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Narrative Session 1" },
          { time: "11:30–13:00", activity: "Narrative Session 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Observation & Notes" },
          { time: "16:30–18:00", activity: "Open Writing" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Narrative Session" },
          { time: "11:30–13:00", activity: "Extended Narrative Session" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Exploration" },
          { time: "16:30–18:00", activity: "Structure Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Narrative Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Narrative Refinement" },
          { time: "16:30–18:00", activity: "Integration & Notes" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Narrative Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Narrative Practice Team",
    facilitatorRole: "Framework & Space",
  },
  "performance-experiments": {
    title: "Performance Experiments",
    subtitle: "What changes when no one is watching.",
    image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Experiments/performace.png",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Performance Experiments are structured engagements with creative expression music, voice, movement, spoken word, improvisation conducted entirely without an audience. The experiment is not about quality of output. It is about what changes in the body and mind when performance pressure is removed. Most people have never experienced creative expression outside of a social context. This is the first condition the experiment establishes. What remains when there is nothing to prove and no one to prove it to is the material the experiment works with." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club removes the evaluative gaze before the experiment begins. The estate provides private acoustic and open-air spaces where members work with sound, voice, or movement in full privacy. Without the anticipation of being heard or seen, inhibition decreases and genuine expression increases. Members who have not engaged with creative practice in years report that the first session is uncomfortable and the second is clarifying. The discomfort is informative; it reveals where performance anxiety has been substituting for actual engagement." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a recalibrated relationship to expression and audience. The discoveries are personal: where your inhibition lives, what it has been costing you, and what becomes available when it is removed even temporarily. Members report that the experiment changes how they communicate professionally, not because they become more performative, but because they become less defended." },
      { icon: "groups", title: "Suitable For", description: "Individuals who have abandoned creative practice under professional pressure • Those for whom communication has become entirely functional and performance-oriented • Members curious about what expression looks like without social consequence • Anyone for whom the gap between internal experience and external expression has grown too wide" },
      { icon: "cancel", title: "What It Is Not", description: "Not a music lesson or vocal coaching • Not improvisation training • Not theatre or performance art • Not group activity • There is no audience here. Not even a hidden one." },
      { icon: "inventory_2", title: "What You Receive", description: "Access to estate private acoustic and open-air expression spaces • Printed Performance Experiment brief • Basic instrument access (where available) • Physical carry kit • Suggested session rhythm across a stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Private expression space access", description: "" },
      { title: "Basic instruments (guitar, percussion, available on request)", description: "" },
      { title: "Printed experiment brief", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Personal instrument (if applicable)", purpose: "Bring what you already have a relationship with" },
      { item: "Printed experiment brief (estate-provided)", purpose: "Starting constraint not instruction" },
      { item: "Field notebook", purpose: "For observation after sessions, not during" },
      { item: "Comfortable, unrestricted clothing", purpose: "Movement and expression require physical ease" },
      { item: "Recording device (optional)", purpose: "For members who document process — no obligation to review" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Expression Space Orientation" },
          { time: "16:00–18:00", activity: "Initial Expression Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection" },
        ],
      },
      {
        day: 2,
        title: "Exploration & Observation",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Expression Session 1" },
          { time: "11:30–13:00", activity: "Expression Session 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Observation & Notes" },
          { time: "16:30–18:00", activity: "Open Practice" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Expression Session" },
          { time: "11:30–13:00", activity: "Extended Expression Session" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Practice" },
          { time: "16:30–18:00", activity: "Session Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Expression Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Expression Refinement" },
          { time: "16:30–18:00", activity: "Integration & Notes" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Expression Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Expression Practice Team",
    facilitatorRole: "Space & Access",
  },
  "media-experiments": {
    title: "Media Experiments",
    subtitle: "What you consume shapes what you can produce.",
    image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Experiments/media.png",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Media Experiments are structured explorations of your relationship with technology, input, and attention management conducted under controlled conditions. The experiment design varies by member: a defined period of complete digital absence, a structured reintroduction of specific media types, an examination of which inputs are generative and which are merely habitual, or a deliberate engagement with new media formats—immersive audio, long-form reading, spatial computing—in an environment with no competing stimuli. The estate provides the conditions. The member designs the experiment." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club reduces ambient media load to near zero before any experiment begins. The baseline condition of the estate, no WiFi in common areas, no ambient audio, no news feed means that even members who choose not to run a formal experiment are already in a significantly different media environment than they arrived from. For those running structured experiments, the estate provides access to curated media environments: a long-form reading library, immersive audio setups, and guided access to extended reality equipment for members exploring those formats." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a documented map of your actual media dependency—not the version you have rationalised, but the one the experiment revealed. Members consistently discover that the inputs they believed were essential are fewer than expected, and that the ones genuinely worth protecting are more specific than they assumed. The result is not digital minimalism as ideology. It is media intentionality as practice." },
      { icon: "groups", title: "Suitable For", description: "Individuals whose attention has been fragmented by sustained high-volume media consumption • Those exploring new media formats—immersive, spatial, or extended reality—without hype or pressure • Members seeking to redesign their information environment for the next chapter • Anyone whose relationship with media has become reactive rather than deliberate" },
      { icon: "cancel", title: "What It Is Not", description: "Not a digital detox programme • Not a technology critique • Not an anti-media ideological position • Not facilitated or coached • There is no prescribed relationship with technology here." },
      { icon: "inventory_2", title: "What You Receive", description: "Printed Media Experiment design framework • Access to estate long-form reading library • Access to immersive audio setup • Extended reality equipment access (where available) • Physical carry kit • Suggested experiment rhythm across a stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Access to reading library", description: "" },
      { title: "Immersive audio setup access", description: "" },
      { title: "Printed experiment framework", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Printed experiment framework (estate-provided)", purpose: "Design your experiment before arrival if possible" },
      { item: "Selected long-form reading material", purpose: "Physical books preferred — no backlit screens" },
      { item: "Field notebook", purpose: "Observation log — track what you notice about input and output" },
      { item: "Noise-isolating headphones (optional)", purpose: "For structured immersive audio sessions" },
      { item: "Personal media restrictions (self-defined)", purpose: "Bring your own rules — the estate enforces nothing" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Media Experiment Framework Orientation" },
          { time: "16:00–18:00", activity: "Initial Experiment Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection" },
        ],
      },
      {
        day: 2,
        title: "Observation & Design",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Experiment Session 1" },
          { time: "11:30–13:00", activity: "Experiment Session 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Observation & Notes" },
          { time: "16:30–18:00", activity: "Open Experiment Time" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Experiment Session" },
          { time: "11:30–13:00", activity: "Extended Experiment Session" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Experiment" },
          { time: "16:30–18:00", activity: "Dependency Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Experiment Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Experiment Refinement" },
          { time: "16:30–18:00", activity: "Integration & Notes" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Experiment Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Media Practice Team",
    facilitatorRole: "Conditions & Access",
  },
  "movement-experiments": {
    title: "Movement Experiments",
    subtitle: "The body is a thinking instrument. Treat it accordingly.",
    image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Experiments/movement.png",
    infoItems: [
      { icon: "psychology", title: "Core Frame", description: "Movement Experiments are structured explorations of how physical movement affects cognitive state—not as fitness, but as a deliberate instrument of thinking. The experiment tests a specific question that the member brings: Does my thinking change when I move first and then write? Does a particular kind of movement—slow, fast, repetitive, improvisational—produce different qualities of thought? The estate provides open space, trail access, and an unstructured movement environment. The member designs the protocol. The movement is the laboratory." },
      { icon: "landscape", title: "What This Environment Changes", description: "The Silent Club removes the fitness-performance context before any movement begins. Without a tracker, a trainer, or a goal, the body moves differently—more slowly, more curiously, more in response to internal signal than external demand. Members who arrive with a fixed movement practice often report that the absence of performance pressure reveals how much of their routine was shaped by anxiety rather than physiology. Movement at the estate begins to serve the thinking rather than substituting for it." },
      { icon: "emoji_events", title: "Outcome", description: "You leave with a documented relationship between specific movement types and cognitive output—of your own, observed under controlled conditions. The discoveries are practical: which movement states precede your clearest thinking, which deplete it, and how to design physical practice as a deliberate cognitive tool rather than a health obligation. Members report that this is the experiment they were least expecting to find useful and most frequently described as the most durable change from their stay." },
      { icon: "groups", title: "Suitable For", description: "Individuals who sense a connection between physical state and thinking quality but have never examined it deliberately • Those whose movement practice has become performative or anxiety-driven • Members interested in somatic approaches to cognitive performance • Anyone for whom the body has been a source of noise rather than signal" },
      { icon: "cancel", title: "What It Is Not", description: "Not a fitness programme • Not yoga, dance, or movement therapy • Not coached or instructed • Not performance-oriented • There are no correct movements here." },
      { icon: "inventory_2", title: "What You Receive", description: "Printed Movement Experiment design framework • Field notebook for post-session observation • Access to all estate movement environments—open space, trail, water • Physical carry kit • Suggested experiment rhythm across a stay cycle" },
    ],
    includedItems: [
      { title: "Accommodation (Room / Dorm / Tent)", description: "" },
      { title: "Three daily meals", description: "" },
      { title: "Access to all movement environments", description: "" },
      { title: "Printed experiment framework", description: "" },
      { title: "Field notebook", description: "" },
      { title: "Full estate access for duration of stay", description: "" },
    ],
    kitItems: [
      { item: "Comfortable, unrestricted clothing", purpose: "Movement that is not constrained by what you are wearing" },
      { item: "Footwear for varied terrain", purpose: "Experiment design may require trail, grass, or water-adjacent movement" },
      { item: "Field notebook (estate-provided)", purpose: "Post-session observation — not during-session logging" },
      { item: "Water bottle", purpose: "Extended movement sessions in Bhigwan heat require sustained hydration" },
      { item: "Movement experiment framework (printed)", purpose: "The protocol you bring or design on arrival" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in & Space Setup" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:00–16:00", activity: "Movement Framework Orientation" },
          { time: "16:00–18:00", activity: "Initial Movement Session" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Reflection" },
        ],
      },
      {
        day: 2,
        title: "Observation & Protocol",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Movement Session 1" },
          { time: "11:30–13:00", activity: "Movement Session 2" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Process Observation & Notes" },
          { time: "16:30–18:00", activity: "Open Movement" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Movement Session" },
          { time: "11:30–13:00", activity: "Extended Movement Session" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Movement" },
          { time: "16:30–18:00", activity: "Cognitive-Movement Documentation" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Stillness" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Movement Block" },
          { time: "11:30–13:00", activity: "Sustained Practice" },
          { time: "13:00–14:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Protocol Refinement" },
          { time: "16:30–18:00", activity: "Integration & Notes" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Movement Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Process Review & Documentation" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    price: "Variable",
    sessionDates: [{ date: "Contact for scheduling", time: "Flexible duration", available: true }],
    facilitatorName: "Movement Practice Team",
    facilitatorRole: "Space & Protocol",
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
