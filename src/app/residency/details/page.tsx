"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ResidencyDetailsContent() {
  const searchParams = useSearchParams();
  const residencyId = parseInt(searchParams.get("id") || "1");
  const [activeDay, setActiveDay] = useState("DAY 1");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [occupancyType, setOccupancyType] = useState("Single");

  const tabs = ["Overview", "Practitioners", "Schedule", "Inclusions", "Prices", "Location"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const residencyData: Record<number, any> = {
    1: {
      title: "Understanding AI's impact on thinking and identity",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "The AI Sense-Making Residency is a quiet container to examine how artificial intelligence is subtly reshaping thinking, attention, authorship, and trust. Rather than learning tools or debating futures, participants observe how AI already lives inside their cognitive habits — how it speeds thought, flattens nuance, and changes what feels \"original.\" The residency prioritises sense-making over understanding, and orientation over opinion.",
      whatItIsNot: [
        "Not an AI course",
        "Not a tool tutorial",
        "Not a futurist talk series",
        "Not a debate about good vs bad technology"
      ],
      whoIsFor: [
        "People who use AI but feel vaguely unsettled by it",
        "People who think for a living",
        "People noticing changes in how they write, decide, or trust themselves"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–10 participants",
        "Structure: light framing with long open thinking blocks",
        "Participation: full attendance required"
      ],
      howTimeIsUsed: "Time is intentionally unstructured. Days move between solo reflection, shared sense-making conversations, walks, meals, and long pauses. There is no attempt to fill silence or drive conclusions. Insight is allowed to surface indirectly.",
      facilitator: {
        name: "Ishan Rao",
        description: "Ishan works at the intersection of systems thinking, writing, and technological behaviour. He does not teach AI. His role in the residency is to hold questions steady, reduce explanatory noise, and prevent premature conclusions. He facilitates by listening closely, naming patterns when they emerge, and stepping back when they don't."
      },
      whatEPiCentreProvides: [
        "Quiet individual spaces",
        "Shared tables for diagrams and notes",
        "Pens, paper, and white surfaces",
        "Access to land and low-stimulation movement",
        "Simple, nourishing meals"
      ],
      designConstraints: [
        "No recording or content capture",
        "No live posting or publishing",
        "No instruction unless explicitly requested",
        "Speaking is optional; presence is sufficient"
      ],
      whatPeopleNotice: "Participants often report that their thinking becomes slower and more deliberate. The urge to optimise ideas decreases. Questions feel fewer, but more precise. These effects tend to show up days later, once participants return to normal environments.",
      practicalNotes: [
        "Phones: limited use during shared blocks",
        "Minimum stay strictly enforced",
        "Booking opens only for confirmed dates"
      ],
      checkIn: "March 20, 2026",
      checkOut: "March 22, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Solo Reflection Time" },
          { time: "7:00 PM", activity: "Shared Sense-Making Conversation" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Open Thinking Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walks & Movement" },
          { time: "4:00 PM", activity: "Shared Sense-Making Conversation" },
          { time: "6:00 PM", activity: "Long Pause / Solo Reflection" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Sense-Making Session" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    2: {
      title: "Observing impulse, volatility, and decision-making",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "The Risk & Attention Residency creates space to observe how attention, impulse, and risk-taking interact in everyday decision-making. Rather than improving focus or managing risk, participants examine how urgency forms, how avoidance operates, and how decisions are shaped under subtle pressure. The residency is about noticing patterns before trying to correct them.",
      whatItIsNot: [
        "Not a productivity program",
        "Not a focus bootcamp",
        "Not risk training or performance coaching",
        "Not behavioural correction"
      ],
      whoIsFor: [
        "People who feel mentally scattered without knowing why",
        "People making long-horizon decisions",
        "People curious about their relationship with uncertainty"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: light framing with extended open blocks",
        "Participation: full attendance only"
      ],
      howTimeIsUsed: "Time alternates between solo observation, shared conversations, silence, walking, and unstructured pauses. There is no attempt to optimise attention or suppress distraction. Patterns are allowed to surface through repetition and stillness.",
      facilitator: {
        name: "Neel Kothari",
        description: "Neel works with decision systems and behavioural environments. His role is not to interpret behaviour but to help participants notice when attention narrows, drifts, or spikes. He intervenes minimally, mostly to slow conversations and prevent premature framing."
      },
      whatEPiCentreProvides: [
        "Quiet personal spaces",
        "Shared thinking surfaces",
        "Writing materials",
        "Access to land for walking and pause",
        "Simple, grounding meals"
      ],
      designConstraints: [
        "No time-tracking or optimisation tools",
        "No recording or documentation during sessions",
        "No pressure to share insights",
        "Reflection happens privately before discussion"
      ],
      whatPeopleNotice: "Participants often become more aware of internal urgency, subtle avoidance, and how quickly decisions try to close. Many report a calmer relationship with uncertainty that continues after leaving.",
      practicalNotes: [
        "Phones: limited use during shared blocks",
        "Minimum stay strictly enforced",
        "Dates announced periodically"
      ],
      checkIn: "April 15, 2026",
      checkOut: "April 17, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Solo Observation" },
          { time: "7:00 PM", activity: "Shared Conversation" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Extended Open Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walking & Pause" },
          { time: "4:00 PM", activity: "Shared Conversation" },
          { time: "6:00 PM", activity: "Silence & Reflection" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Observation Session" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    3: {
      title: "Partial disconnection to surface patterns",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "Tech Sabbatical Lite is a partial disengagement from digital systems designed to surface habits, dependencies, and reflexes related to technology use. Rather than complete disconnection, the residency explores selective absence — noticing what changes when certain inputs are removed and others remain.",
      whatItIsNot: [
        "Not a digital detox",
        "Not anti-technology",
        "Not a discipline challenge",
        "Not a productivity reset"
      ],
      whoIsFor: [
        "People who feel overstimulated but functional",
        "People unsure which tools they actually need",
        "People curious about how technology shapes thought"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: light guidance with long open intervals",
        "Participation: full-stay required"
      ],
      howTimeIsUsed: "Days move slowly, with stretches of reduced input, walking, reading, writing, and quiet conversation. Participants choose which technologies to pause and observe the effects without judgment or correction.",
      facilitator: {
        name: "Aarav Mehta",
        description: "Aarav studies attention ecology and tool dependence. He does not prescribe rules around technology use. His role is to help participants notice secondary effects — restlessness, relief, boredom, clarity — as they arise."
      },
      whatEPiCentreProvides: [
        "Low-stimulation environments",
        "Writing and reading spaces",
        "Access to outdoor movement",
        "Simple, consistent meals",
        "Clear boundaries around shared time"
      ],
      designConstraints: [
        "No forced disconnection",
        "No optimisation frameworks",
        "No comparison between participants",
        "Technology choices remain personal"
      ],
      whatPeopleNotice: "Participants often report changes in restlessness, time perception, and internal narration. Many realise which tools matter less than assumed, and which absences feel unexpectedly heavy.",
      practicalNotes: [
        "Phones: partial disconnection by choice",
        "Minimum stay enforced",
        "Not suitable for urgent on-call roles"
      ],
      checkIn: "May 10, 2026",
      checkOut: "May 12, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Technology Choice & Observation" },
          { time: "7:00 PM", activity: "Quiet Conversation" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Reduced Input Stretch" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walking & Reading" },
          { time: "4:00 PM", activity: "Writing & Reflection" },
          { time: "6:00 PM", activity: "Quiet Conversation" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Observation & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    4: {
      title: "Rethinking knowledge capture and trust",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "Second-Brain Deconstruction examines how external knowledge systems — notes, apps, archives, prompts — shape trust, memory, and thinking. Instead of building better systems, participants dismantle existing ones to understand what they outsource, what they over-capture, and what they no longer hold internally.",
      whatItIsNot: [
        "Not a productivity or note-taking workshop",
        "Not a tools comparison",
        "Not a system-building sprint",
        "Not a knowledge management course"
      ],
      whoIsFor: [
        "People with extensive notes but little clarity",
        "People unsure what they actually know",
        "People questioning reliance on external memory"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–10 participants",
        "Structure: minimal inputs, long reflection blocks",
        "Participation: full attendance only"
      ],
      howTimeIsUsed: "Participants spend time reviewing, questioning, and selectively ignoring their existing systems. Shared conversations focus on patterns, not techniques. Silence and pauses are integral to the process.",
      facilitator: {
        name: "Ritu Malhotra",
        description: "Ritu works with writers and thinkers navigating information overload. She does not recommend tools or methods. Her role is to help participants sit with gaps, uncertainty, and the discomfort of not capturing everything."
      },
      whatEPiCentreProvides: [
        "Quiet review spaces",
        "Paper and physical surfaces",
        "Secure storage for devices during sessions",
        "Outdoor areas for pause and reset",
        "Simple, repetitive meals"
      ],
      designConstraints: [
        "No building new systems during the residency",
        "No live migration of notes",
        "No teaching of frameworks",
        "Reflection precedes any action"
      ],
      whatPeopleNotice: "Participants often experience relief from over-documentation and a renewed trust in internal memory. Many leave with fewer notes, but greater confidence in their thinking.",
      practicalNotes: [
        "Devices used only during designated windows",
        "Minimum stay strictly enforced",
        "Suitable for thinkers, writers, and operators"
      ],
      checkIn: "June 5, 2026",
      checkOut: "June 7, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "System Review & Questioning" },
          { time: "7:00 PM", activity: "Shared Conversation on Patterns" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Long Reflection Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Selective Ignoring Exercise" },
          { time: "4:00 PM", activity: "Shared Conversation" },
          { time: "6:00 PM", activity: "Silence & Pause" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Reflection & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    5: {
      title: "Embodied attention without performance",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A space to observe attention through movement. Uses the body as a sensing instrument, not a tool for expression. Explores how intention, hesitation, and rhythm arise. Movement is treated as inquiry, not display.",
      whatItIsNot: [
        "Not dance training",
        "Not choreography or technique",
        "Not performance or showcase",
        "Not expressive therapy"
      ],
      whoIsFor: [
        "People curious about embodied awareness",
        "People who think heavily and move lightly",
        "People wanting to reconnect body and attention"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–10 participants",
        "Structure: minimal framing with long movement blocks",
        "Participation: full attendance required"
      ],
      howTimeIsUsed: "Slow movement sessions, long pauses and rest, walking and grounding, optional shared reflection after movement.",
      facilitator: {
        name: "Kunal Deshmukh",
        description: "Works with somatic awareness and attention. Does not correct form or technique. Holds space by slowing pace and reducing instruction."
      },
      whatEPiCentreProvides: [
        "Open movement spaces",
        "Grounded indoor floors",
        "Quiet outdoor areas",
        "Simple, nourishing meals"
      ],
      designConstraints: [
        "No mirrors",
        "No music unless contextually required",
        "No correction or demonstration",
        "Stillness is always an option"
      ],
      whatPeopleNotice: "Increased body awareness, reduced self-consciousness, attention settling into physical sensation, movement becoming simpler and quieter.",
      practicalNotes: [
        "Phones discouraged during sessions",
        "Comfortable clothing required",
        "Minimum stay strictly enforced"
      ],
      checkIn: "July 20, 2026",
      checkOut: "July 22, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Slow Movement Session" },
          { time: "7:00 PM", activity: "Optional Shared Reflection" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Long Movement Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walking & Grounding" },
          { time: "4:00 PM", activity: "Long Pause & Rest" },
          { time: "6:00 PM", activity: "Slow Movement Session" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Movement & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    6: {
      title: "Exploring perspective through role and reversal",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "An exploration of perspective through role and reversal. Uses temporary roles to loosen fixed identity. Examines how meaning changes with position. Focuses on perception rather than performance.",
      whatItIsNot: [
        "Not acting training",
        "Not drama therapy",
        "Not storytelling or improv",
        "Not character development"
      ],
      whoIsFor: [
        "People stuck in strong opinions",
        "People curious about opposing viewpoints",
        "People interested in cognitive flexibility"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: light facilitation with open exploration",
        "Participation: full attendance only"
      ],
      howTimeIsUsed: "Role-based explorations, quiet reflection periods, group dialogues without critique, long pauses between shifts.",
      facilitator: {
        name: "Meera Kulkarni",
        description: "Background in narrative and perspective work. Does not assign meaning or interpretation. Intervenes only to slow or reframe."
      },
      whatEPiCentreProvides: [
        "Open indoor spaces",
        "Simple props when needed",
        "Writing materials",
        "Quiet zones for withdrawal"
      ],
      designConstraints: [
        "No performance pressure",
        "No audience mindset",
        "No interpretation during enactment",
        "Reflection happens after, not during"
      ],
      whatPeopleNotice: "Increased empathy, reduced attachment to fixed views, discomfort followed by clarity, new questions replacing old certainty.",
      practicalNotes: [
        "Participation is voluntary but encouraged",
        "Phones limited during shared blocks",
        "Minimum stay enforced"
      ],
      checkIn: "August 15, 2026",
      checkOut: "August 17, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Role-Based Exploration" },
          { time: "7:00 PM", activity: "Quiet Reflection Period" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Role Reversal Exploration" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Long Pause Between Shifts" },
          { time: "4:00 PM", activity: "Group Dialogue Without Critique" },
          { time: "6:00 PM", activity: "Quiet Reflection" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Exploration & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    7: {
      title: "Creative process without output pressure",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A container for staying with creative process. Focuses on unfinished work and uncertainty. Removes output, deadlines, and validation. Treats process itself as the practice.",
      whatItIsNot: [
        "Not a production residency",
        "Not a critique or feedback space",
        "Not portfolio development",
        "Not content creation"
      ],
      whoIsFor: [
        "Artists between projects",
        "Creators questioning direction or medium",
        "People tired of finishing for finishing's sake"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–10 participants",
        "Structure: long solo blocks with optional sharing",
        "Participation: full attendance required"
      ],
      howTimeIsUsed: "Individual creative work, sitting with unfinished pieces, silent stretches, optional shared reflection.",
      facilitator: {
        name: "Ananya Roy",
        description: "Works with creative identity and process. Does not direct or evaluate work. Supports staying with uncertainty."
      },
      whatEPiCentreProvides: [
        "Quiet workspaces",
        "Basic materials and surfaces",
        "Natural light and outdoor access",
        "Simple, repetitive meals"
      ],
      designConstraints: [
        "No deadlines",
        "No audience framing",
        "No requirement to complete anything",
        "Sharing is optional"
      ],
      whatPeopleNotice: "Reduced urgency to finish, increased trust in process, relief from performance pressure, reconnection with intrinsic motivation.",
      practicalNotes: [
        "Bring ongoing or unfinished work",
        "Devices optional, not central",
        "Minimum stay strictly enforced"
      ],
      checkIn: "September 10, 2026",
      checkOut: "September 12, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Individual Creative Work" },
          { time: "7:00 PM", activity: "Optional Shared Reflection" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Long Solo Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Sitting with Unfinished Pieces" },
          { time: "4:00 PM", activity: "Silent Stretch" },
          { time: "6:00 PM", activity: "Optional Shared Reflection" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Creative Work & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    8: {
      title: "Recalibrating relationship with infrastructure",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "An examination of dependence on modern infrastructure. Explores relationship with power, connectivity, and convenience. Uses temporary reduction of systems to surface habits. Focuses on perception, not endurance.",
      whatItIsNot: [
        "Not survival training",
        "Not ascetic living",
        "Not eco-activism",
        "Not hardship simulation"
      ],
      whoIsFor: [
        "People curious about simpler systems",
        "People feeling over-supported by automation",
        "People questioning urban dependency"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: contextual constraints with open time",
        "Participation: full stay required"
      ],
      howTimeIsUsed: "Daily routines with reduced automation, manual engagement with basic systems, walking, rest, and reflection, shared meals and conversations.",
      facilitator: {
        name: "Siddharth Naik",
        description: "Works with sustainable systems and living design. Does not romanticise hardship. Helps participants notice trade-offs."
      },
      whatEPiCentreProvides: [
        "Low-tech living environments",
        "Access to land and basic tools",
        "Shared cooking and chores",
        "Quiet spaces for rest"
      ],
      designConstraints: [
        "Limited connectivity",
        "Reduced electrical dependence",
        "No optimisation challenges",
        "Comfort balanced with constraint"
      ],
      whatPeopleNotice: "Increased awareness of energy use, slower pace of life, appreciation for simple systems, clearer relationship with convenience.",
      practicalNotes: [
        "Physical participation required",
        "Not suitable for urgent remote work",
        "Minimum stay strictly enforced"
      ],
      checkIn: "October 5, 2026",
      checkOut: "October 7, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Introduction to Reduced Systems" },
          { time: "7:00 PM", activity: "Shared Meal & Conversation" },
          { time: "8:30 PM", activity: "Rest & Reflection" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Daily Routines with Reduced Automation" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Manual Engagement with Basic Systems" },
          { time: "4:00 PM", activity: "Walking & Rest" },
          { time: "6:00 PM", activity: "Shared Meal & Conversation" },
          { time: "8:00 PM", activity: "Reflection" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Reflection & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    9: {
      title: "Long-horizon thinking about place and life",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A space to think clearly about place, density, and long-term living. Examines how cities shape identity, ambition, and nervous systems. Focuses on orientation, not decision-making. Allows the question to stay open without forcing an answer.",
      whatItIsNot: [
        "Not a relocation workshop",
        "Not anti-city advocacy",
        "Not rural evangelism",
        "Not a lifestyle decision sprint"
      ],
      whoIsFor: [
        "People feeling friction with urban life",
        "People questioning pace, cost, and density",
        "People sensing misalignment but lacking language"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: minimal framing with long reflective blocks",
        "Participation: full attendance required"
      ],
      howTimeIsUsed: "Solo reflection and writing, walking and observing land-scale rhythms, quiet group conversations, long pauses without resolution.",
      facilitator: {
        name: "Rahul Sen",
        description: "Works with place-based thinking and long-horizon planning. Does not recommend locations or paths. Helps participants articulate trade-offs rather than preferences."
      },
      whatEPiCentreProvides: [
        "Quiet indoor spaces",
        "Outdoor walking access",
        "Writing materials",
        "Simple, grounding meals"
      ],
      designConstraints: [
        "No decision pressure",
        "No comparison of lifestyles",
        "No planning tools or spreadsheets",
        "Questions are allowed to remain unresolved"
      ],
      whatPeopleNotice: "Reduced urgency to decide, clearer articulation of what matters, separation between fantasy and friction, a calmer relationship with uncertainty.",
      practicalNotes: [
        "Phones limited during shared blocks",
        "Writing encouraged but optional",
        "Minimum stay strictly enforced"
      ],
      checkIn: "November 10, 2026",
      checkOut: "November 12, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Solo Reflection & Writing" },
          { time: "7:00 PM", activity: "Quiet Group Conversation" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Long Reflective Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walking & Observing Land-Scale Rhythms" },
          { time: "4:00 PM", activity: "Quiet Group Conversation" },
          { time: "6:00 PM", activity: "Long Pause Without Resolution" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Reflection & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    10: {
      title: "Sustained writing without prompts or deadlines",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A container for sustained writing without prompts or deadlines. Emphasises continuity of attention over output. Silence is treated as a working condition. Writing is approached as presence, not production.",
      whatItIsNot: [
        "Not a writing workshop",
        "Not critique or feedback-based",
        "Not productivity-driven",
        "Not content creation for publishing"
      ],
      whoIsFor: [
        "Writers struggling with fragmentation",
        "Thinkers needing uninterrupted attention",
        "People wanting to rebuild a relationship with writing"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 6–10 participants",
        "Structure: silent blocks with minimal framing",
        "Participation: full attendance only"
      ],
      howTimeIsUsed: "Extended silent writing sessions, walking and rest between blocks, optional short check-ins, meals taken quietly or in low conversation.",
      facilitator: {
        name: "Devika Iyer",
        description: "Works with long-form writing processes. Does not assign prompts or targets. Protects silence and continuity of time."
      },
      whatEPiCentreProvides: [
        "Quiet writing spaces",
        "Natural light and outdoor access",
        "Basic writing materials",
        "Simple, repetitive meals"
      ],
      designConstraints: [
        "No sharing during writing blocks",
        "No deadlines or word counts",
        "Silence respected as default",
        "Feedback deferred beyond the residency"
      ],
      whatPeopleNotice: "Writing becomes steadier, reduced self-editing mid-flow, increased tolerance for unfinished work, attention lengthens naturally.",
      practicalNotes: [
        "Bring personal writing tools",
        "Devices allowed only during breaks",
        "Minimum stay strictly enforced"
      ],
      checkIn: "December 5, 2026",
      checkOut: "December 7, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Extended Silent Writing Session" },
          { time: "7:00 PM", activity: "Optional Short Check-in" },
          { time: "8:30 PM", activity: "Quiet Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Extended Silent Writing Session" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Walking & Rest" },
          { time: "4:00 PM", activity: "Extended Silent Writing Session" },
          { time: "6:00 PM", activity: "Optional Short Check-in" },
          { time: "8:00 PM", activity: "Quiet Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Writing Session & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    11: {
      title: "Perspective through time, not trends",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A slow engagement with historical texts across eras. Focuses on perspective rather than knowledge accumulation. Uses excerpts to stretch temporal awareness. Encourages comparison between past contexts and present assumptions.",
      whatItIsNot: [
        "Not a history course",
        "Not academic study",
        "Not chronological coverage",
        "Not interpretation or debate-led"
      ],
      whoIsFor: [
        "People trapped in present-moment thinking",
        "People curious about long arcs of change",
        "People seeking intellectual humility"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–12 participants",
        "Structure: reading, pause, and discussion cycles",
        "Participation: full attendance required"
      ],
      howTimeIsUsed: "Reading short historical excerpts, silent reflection, group conversations focused on perception, long pauses between texts.",
      facilitator: {
        name: "Arvind Rao",
        description: "Background in history and philosophy. Does not lecture or contextualise extensively. Helps keep attention on perspective shifts."
      },
      whatEPiCentreProvides: [
        "Curated excerpts",
        "Quiet reading spaces",
        "Writing materials",
        "Outdoor areas for pause"
      ],
      designConstraints: [
        "No note-taking for retention",
        "No debates or correctness framing",
        "No attempt to modernise texts",
        "Meaning allowed to emerge slowly"
      ],
      whatPeopleNotice: "Reduced present-bias, greater tolerance for ambiguity, perspective widening without overwhelm, fewer opinions, deeper questions.",
      practicalNotes: [
        "Reading done on-site only",
        "Devices limited during sessions",
        "Minimum stay strictly enforced"
      ],
      checkIn: "January 10, 2027",
      checkOut: "January 12, 2027",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Reading Short Historical Excerpts" },
          { time: "7:00 PM", activity: "Silent Reflection" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Reading, Pause, and Discussion Cycle" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Long Pause Between Texts" },
          { time: "4:00 PM", activity: "Group Conversations Focused on Perception" },
          { time: "6:00 PM", activity: "Silent Reflection" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Reading & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    12: {
      title: "Designing personal systems for intentional living",
      subtitle: "A multi-day immersion at EPiCentre",
      whatItIs: "A space to examine personal systems governing time, energy, and decision-making. Focuses on observing existing systems rather than building new ones. Encourages subtraction before optimisation. Treats systems as living, not fixed.",
      whatItIsNot: [
        "Not a productivity framework",
        "Not a life-hacking program",
        "Not system-building or tool adoption",
        "Not goal-setting or tracking"
      ],
      whoIsFor: [
        "People overwhelmed by self-designed systems",
        "People unsure which structures still serve them",
        "People wanting simplicity without collapse"
      ],
      residencyShape: [
        "Duration: 2 nights / 3 days",
        "Group size: 8–10 participants",
        "Structure: observation-first with light facilitation",
        "Participation: full attendance only"
      ],
      howTimeIsUsed: "Mapping existing systems, identifying friction and redundancy, silent reflection, optional group sense-making.",
      facilitator: {
        name: "Pranav Kulkarni",
        description: "Works with personal and organisational systems. Does not recommend tools or methods. Helps participants notice where systems resist reality."
      },
      whatEPiCentreProvides: [
        "Writing and mapping surfaces",
        "Quiet thinking spaces",
        "Outdoor areas for reset",
        "Simple, consistent meals"
      ],
      designConstraints: [
        "No creation of new systems",
        "No tool comparisons",
        "No optimisation challenges",
        "Subtraction prioritised over addition"
      ],
      whatPeopleNotice: "Relief from over-structuring, clearer sense of what matters, systems feeling lighter and more adaptable, increased trust in judgment.",
      practicalNotes: [
        "Bring awareness, not tools",
        "Devices used selectively",
        "Minimum stay strictly enforced"
      ],
      checkIn: "February 5, 2027",
      checkOut: "February 7, 2027",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Settling In" },
          { time: "4:00 PM", activity: "Opening Framing" },
          { time: "5:00 PM", activity: "Mapping Existing Systems" },
          { time: "7:00 PM", activity: "Optional Group Sense-Making" },
          { time: "8:30 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Identifying Friction and Redundancy" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Silent Reflection" },
          { time: "4:00 PM", activity: "Observation-First Session" },
          { time: "6:00 PM", activity: "Optional Group Sense-Making" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "10:00 AM", activity: "Final Reflection & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    }
  };

  const currentResidency = residencyData[residencyId] || residencyData[1];

  const scheduleData = currentResidency.schedule;

  const singleRate = 30000;
  const doubleRate = 40000;
  const nights = 2;
  const gstRate = 0.18;
  const selectedRate = occupancyType === "Single" ? singleRate : doubleRate;
  const subtotal = selectedRate * nights;
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return (
    <div className="relative min-h-screen bg-[#F5F5F0]">
      <Header />
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/banner.png"
          alt="Residency Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Title Section */}
      <section className="bg-[#F5F5F0] py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
            {currentResidency.title}
          </h1>
          <p className="text-base text-black mb-8 italic leading-relaxed">
            {currentResidency.subtitle}
          </p>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto text-left">
            <div className="space-y-3">
              <p className="text-base text-black">• Premium accommodation facilities</p>
              <p className="text-base text-black">• Exclusive access to private spaces</p>
              <p className="text-base text-black">• Personalized wellness programs</p>
            </div>
            <div className="space-y-3">
              <p className="text-base text-black">• Gourmet dining experiences</p>
              <p className="text-base text-black">• Curated cultural activities</p>
              <p className="text-base text-black">• Professional guidance and support</p>
            </div>
            <div className="space-y-3">
              <p className="text-base text-black">• Serene natural surroundings</p>
              <p className="text-base text-black">• State-of-the-art amenities</p>
              <p className="text-base text-black">• Transformative retreat experience</p>
            </div>
          </div>

          {/* Closing Text */}
          <p className="text-base text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience a journey of transformation and renewal in our carefully curated spaces designed for reflection, creativity, and personal growth.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black bg-transparent text-black uppercase font-medium hover:bg-black hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            DOWNLOAD BROCHURE
          </button>
        </div>
      </section>

      {/* Main Content Area - Split Layout */}
      <div className="flex gap-8 max-w-7xl mx-auto px-8 pb-16">
        {/* Left Column - Content */}
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b-2 border-gray-300 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab.toLowerCase())}
                className="pb-4 px-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* All Content Sections */}
          <div className="space-y-16">
            {/* Overview Section */}
            <div id="overview" className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  What This Residency Is
                </h2>
                <p className="text-base text-black mb-6 leading-relaxed">
                  {currentResidency.whatItIs}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  What It Is Not
                </h3>
                <ul className="space-y-2 text-base text-black">
                  {currentResidency.whatItIsNot.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Who This Is For
                </h3>
                <ul className="space-y-2 text-base text-black">
                  {currentResidency.whoIsFor.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Residency Shape
                </h3>
                <ul className="space-y-2 text-base text-black">
                  {currentResidency.residencyShape.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  How Time Is Used
                </h3>
                <p className="text-base text-black leading-relaxed">
                  {currentResidency.howTimeIsUsed}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  What People Usually Notice
                </h3>
                <p className="text-base text-black leading-relaxed">
                  {currentResidency.whatPeopleNotice}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Design Constraints
                </h3>
                <ul className="space-y-2 text-base text-black">
                  {currentResidency.designConstraints.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Practical Notes
                </h3>
                <ul className="space-y-2 text-base text-black">
                  {currentResidency.practicalNotes.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practitioners Section */}
            <div id="practitioners" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Facilitator
              </h2>
              <div className="flex gap-6">
                <div className="w-48 h-48 bg-gray-300 rounded-lg flex-shrink-0">
                  <Image
                    src="/banner.png"
                    alt="Facilitator"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'serif' }}>
                    {currentResidency.facilitator.name}
                  </h3>
                  <p className="text-base text-black mb-4 leading-relaxed">
                    {currentResidency.facilitator.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div id="schedule" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Schedule
              </h2>
              <div className="flex gap-4 mb-6">
                {["DAY 1", "DAY 2", "DAY 3"].map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-6 py-2 border-2 ${activeDay === day
                        ? "border-[#D4A574] bg-[#D4A574] text-white"
                        : "border-gray-300 text-black hover:border-gray-400"
                      } transition-colors`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {scheduleData[activeDay as keyof typeof scheduleData].map((item: { time: string; activity: string }, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-24 text-base text-black font-medium">{item.time}</div>
                    <div className="text-base text-black">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions Section */}
            <div id="inclusions" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                What EPiCentre Provides
              </h2>
              <ul className="space-y-3 text-base text-black">
                {currentResidency.whatEPiCentreProvides.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Prices Section */}
            <div id="prices" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Tranquility Rates
              </h2>
              <ul className="space-y-3 text-base text-black">
                <li>• INR 30,000 plus taxes per night for single occupancy</li>
                <li>• INR 40,000 plus taxes per night for double occupancy</li>
              </ul>
            </div>

            {/* Location Section */}
            <div id="location" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                How To Get There
              </h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Map View</p>
                  <a href="#" className="text-[#D4A574] underline text-sm">
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Fixed Booking Form */}
        <div className="w-96 flex-shrink-0">
          <div className="sticky top-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
              Book Your Retreat
            </h2>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Occupancy Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupancy"
                      value="Single"
                      checked={occupancyType === "Single"}
                      onChange={(e) => setOccupancyType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Single</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupancy"
                      value="Couple"
                      checked={occupancyType === "Couple"}
                      onChange={(e) => setOccupancyType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Couple</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Event Dates */}
            <div className="border-t border-gray-300 pt-4 mb-4">
              <div className="text-sm text-gray-600 mb-1">CHECK-IN</div>
              <div className="text-base text-black font-medium">{currentResidency.checkIn}</div>
              <div className="text-sm text-gray-600 mb-1 mt-4">CHECK-OUT</div>
              <div className="text-base text-black font-medium">{currentResidency.checkOut}</div>
            </div>

            {/* Pricing Summary */}
            <div className="border-t border-gray-300 pt-4 mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Rate (2 Nights)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>GST (18%)</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {occupancyType} Occupancy Rate + {nights} Nights + 18% GST
              </div>
              <div className="flex justify-between text-lg font-bold text-black pt-2 border-t border-gray-300">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full py-3 bg-[#D4A574] text-white rounded-lg font-medium hover:bg-[#B89564] transition-colors uppercase mb-4">
              PAY & BOOK RETREAT
            </button>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cancellation & Refunds Policy</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ResidencyDetailsPage() {
  return (
    <Suspense fallback={
      <div className="relative min-h-screen bg-[#F5F5F0]">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <p className="text-base text-black">Loading...</p>
        </div>
        <Footer />
      </div>
    }>
      <ResidencyDetailsContent />
    </Suspense>
  );
}
