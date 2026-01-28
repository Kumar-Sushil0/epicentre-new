"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExpressionDetailsHero from "../../components/expression/details/ExpressionDetailsHero";
import ExpressionDetailsContent from "../../components/expression/details/ExpressionDetailsContent";
import ExpressionDetailsBooking from "../../components/expression/details/ExpressionDetailsBooking";
import ExpressionDetailsTestimonials from "../../components/expression/details/ExpressionDetailsTestimonials";

const expressionPractices: Record<
  string,
  {
    title: string;
    subtitle: string;
    image: string;
    intro: string;
    whatItIs: string;
    howItWorks: Array<{ title: string; description: string }>;
    whatWeProvide: Array<{ title: string; description: string }>;
    designConstraints: Array<{ icon: string; title: string; description: string }>;
    price: string;
    sessionDates: Array<{ date: string; time: string; spots?: string; available: boolean }>;
    facilitatorName: string;
    facilitatorRole: string;
    testimonials: Array<{ quote: string; author: string; role: string }>;
    images: Array<{ src: string; alt: string; label: string }>;
  }
> = {
  "process-experiments": {
    title: "Process Experiments",
    subtitle: "Testing how you work, not what you produce.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
    intro:
      "Process Experiments are designed for people who want to examine method, rhythm, and sequence before committing to outcomes. The focus is not productivity. It is understanding the structure that produces results. Nothing here needs to be finished.",
    whatItIs:
      "A Process Experiment is a temporary container to observe how work unfolds under reduced interference. Attention, pacing, fatigue, and decision flow are treated as variables. You are not here to perform. You are here to notice.",
    howItWorks: [
      {
        title: "Open Process Experiment",
        description: "Participants pay to enter and experience a method-in-progress. Participants are not observers. They are part of the test.",
      },
      {
        title: "Closed Process Experiment",
        description: "The creator pays for space, food, and stay. Participants may be self-invited collaborators, members of The Silent Club community, or anonymous participants.",
      },
      {
        title: "Solo or Small-Group Configuration",
        description: "Fixed duration agreed in advance. Entry and exit kept deliberate. Breaks and pauses encouraged. Repetition over intensity.",
      },
    ],
    whatWeProvide: [
      {
        title: "Quiet Workspaces",
        description: "Quiet workspaces and shared zones with time blocks held without interruption.",
      },
      {
        title: "Optional Facilitation",
        description: "Optional facilitation to define boundaries with minimal tools, surfaces, and materials.",
      },
      {
        title: "Silence as Default",
        description: "Silence as a default condition. No templates. No productivity frameworks. No optimization systems.",
      },
    ],
    designConstraints: [
      {
        icon: "block",
        title: "No Productivity Targets",
        description: "No productivity targets or KPIs. No comparison between participants.",
      },
      {
        icon: "volume_off",
        title: "No Performance Sharing",
        description: "No performance sharing by default. No external input unless requested.",
      },
    ],
    price: "Variable",
    sessionDates: [
      { date: "Contact for scheduling", time: "Flexible duration", available: true },
    ],
    facilitatorName: "Process Design Team",
    facilitatorRole: "Method Architects",
    testimonials: [
      {
        quote: "A clearer sense of personal working rhythm. Reduced urge to multitask or over-optimize. Awareness of where energy leaks.",
        author: "Typical Participant",
        role: "Process Explorer",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
        alt: "Process experimentation workspace",
        label: "The Lab",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Method testing in progress",
        label: "Process",
      },
    ],
  },
  "material-experiments": {
    title: "Material Experiments",
    subtitle: "Testing unfinished work, not final output.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
    intro:
      "Material Experiments are designed for creators who want to work with raw, incomplete, or unstable material before it becomes fixed. The focus is not polish. It is discovering what the work wants to become. Nothing here needs to be resolved.",
    whatItIs:
      "A Material Experiment is a temporary container for engaging with work-in-progress under reduced noise and expectation. Drafts, fragments, gestures, sounds, movements, and ideas are explored without pressure to conclude. You are not here to present. You are here to stay with the work.",
    howItWorks: [
      {
        title: "Open Material Experiment",
        description: "Participants pay to experience work-in-progress as it is. Participants are not critics. They are witnesses to process.",
      },
      {
        title: "Closed Material Experiment",
        description: "The creator pays for space, food, and stay. Participants may be trusted collaborators, Silent Club community members, or anonymous observers.",
      },
      {
        title: "Solo or Small-Group Configuration",
        description: "Duration agreed in advance. Repetition encouraged over refinement. Pauses treated as part of the process. Entry and exit kept intentional.",
      },
    ],
    whatWeProvide: [
      {
        title: "Configured Spaces",
        description: "Configured spaces for making, testing, or holding work with flexible use of rooms and environments.",
      },
      {
        title: "Optional Facilitation",
        description: "Optional facilitation to protect boundaries with basic materials and surfaces.",
      },
      {
        title: "Silence as Stabilizing Condition",
        description: "No critique structures. No feedback frameworks. No pressure to explain intent.",
      },
    ],
    designConstraints: [
      {
        icon: "block",
        title: "No Demand for Completion",
        description: "No evaluation or advice by default. No comparison between materials.",
      },
      {
        icon: "no_photography",
        title: "No Recording Unless Requested",
        description: "These constraints protect creative risk and allow material to exist unfinished.",
      },
    ],
    price: "Variable",
    sessionDates: [
      { date: "Contact for scheduling", time: "Flexible duration", available: true },
    ],
    facilitatorName: "Material Design Team",
    facilitatorRole: "Process Facilitators",
    testimonials: [
      {
        quote: "Greater tolerance for unfinished states. Unexpected clarity through repetition. Reduced urgency to decide or finalize. A deeper relationship with the material.",
        author: "Typical Participant",
        role: "Material Explorer",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
        alt: "Material experimentation workspace",
        label: "The Lab",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Unfinished material in progress",
        label: "Process",
      },
    ],
  },
  "the-writer-says": {
    title: "The Writer Says",
    subtitle: "Listening for resonance, not feedback.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
    intro:
      "A dedicated circle for writers to vocalize their work-in-progress. We strip away the need to explain, defend, or polish. Here, the only goal is to hear how the words land in the air.",
    whatItIs:
      '"The Writer Says" is a facilitated session where sharing evolving work is the primary act. It is not a workshop for critique. It is a sounding board—literally. Writers take turns reading aloud, allowing the rhythm, cadence, and stumble of their own voice to reveal what needs to happen next in the manuscript.',
    howItWorks: [
      {
        title: "The Block",
        description: "A focused half-day session (4 hours) designed to break through stagnation.",
      },
      {
        title: "The Cohort",
        description: "Limited to 8-10 people to ensure intimacy and sufficient time for every voice.",
      },
      {
        title: "The Format",
        description: "15-minute read slots per person, followed by 5 minutes of resonant silence. No applause, no comments.",
      },
    ],
    whatWeProvide: [
      {
        title: "Analog Tools",
        description: "Typewriters, heavy-stock paper, and fountain pens for draft work.",
      },
      {
        title: "Sustenance",
        description: "Unlimited espresso, herbal teas, and light pastries.",
      },
      {
        title: "Quiet Zones",
        description: "Sound-dampened nooks for private revision between readings.",
      },
    ],
    designConstraints: [
      {
        icon: "do_not_touch",
        title: "No Preamble",
        description: "Do not explain what we are about to hear. Let the work stand.",
      },
      {
        icon: "volume_off",
        title: "No Critique",
        description: "Listeners listen. There is no feedback loop. The resonance is internal.",
      },
    ],
    price: "$85",
    sessionDates: [
      { date: "Saturday, Oct 28", time: "1:00 PM - 5:00 PM", spots: "4 spots left", available: true },
      { date: "Sunday, Nov 12", time: "9:00 AM - 1:00 PM", available: true },
      { date: "Thursday, Nov 16", time: "6:00 PM - 10:00 PM", available: true },
    ],
    facilitatorName: "Elena Vance",
    facilitatorRole: "Poet & Editor",
    testimonials: [
      {
        quote:
          "I came expecting a workshop. I found a temple of silence. For the first time in years, I could actually hear my own narrative voice.",
        author: "Marcus T.",
        role: "Novelist",
      },
      {
        quote:
          "The constraint of 'no explanation' is liberating. It forced my writing to do the heavy lifting, rather than my excuses.",
        author: "Sarah J.",
        role: "Screenwriter",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
        alt: "Atmospheric studio space",
        label: "The Studio",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Notes and scribbles",
        label: "Process",
      },
    ],
  },
  "material-experiments": {
    title: "Material Experiments",
    subtitle: "Testing unfinished work, not final output.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
    intro:
      "Material Experiments are designed for creators who want to work with raw, incomplete, or unstable material before it becomes fixed. The focus is not polish. It is discovering what the work wants to become. Nothing here needs to be resolved.",
    whatItIs:
      "A Material Experiment is a temporary container for engaging with work-in-progress under reduced noise and expectation. Drafts, fragments, gestures, sounds, movements, and ideas are explored without pressure to conclude. You are not here to present. You are here to stay with the work.",
    howItWorks: [
      {
        title: "Who This Experiment Serves",
        description: "Artists shaping early material, musicians exploring sound or structure, writers working with drafts or fragments, performers developing form before rehearsal, and creators unsure what their work is becoming. Works best when the material feels fragile, unfinished, or undefined.",
      },
      {
        title: "What Is Being Tested",
        description: "What holds attention within the material. Where resistance, excitement, or collapse appears. How form shifts with time, silence, or repetition. Assumptions about readiness, clarity, or completion. The material is unstable by design. That instability is the signal.",
      },
      {
        title: "Open Material Experiment",
        description: "Participants pay to experience work-in-progress as it is. This works when witnessing unfinished work has value, presence itself shapes the material, and others benefit from being inside emergence. Participants are not critics. They are witnesses to process.",
      },
      {
        title: "Closed Material Experiment",
        description: "The creator pays for space, food, and stay (if required). Participants may be trusted collaborators, Silent Club community members, or anonymous, silent observers. This works when material is highly sensitive, observation matters more than response, and privacy protects creative risk.",
      },
      {
        title: "How It Works",
        description: "Solo or small-group configuration. Duration agreed in advance. Repetition encouraged over refinement. Pauses treated as part of the process. Entry and exit kept intentional. The work sets the pace.",
      },
    ],
    whatWeProvide: [
      {
        title: "Configured Spaces",
        description: "Configured spaces for making, testing, or holding work with flexible use of rooms and environments.",
      },
      {
        title: "Optional Facilitation",
        description: "Optional facilitation to protect boundaries with basic materials and surfaces.",
      },
      {
        title: "Silence as Stabilizing Condition",
        description: "Silence as a stabilizing condition. No critique structures. No feedback frameworks. No pressure to explain intent.",
      },
    ],
    designConstraints: [
      {
        icon: "block",
        title: "No Demand for Completion",
        description: "No demand for completion. No evaluation or advice by default. No comparison between materials.",
      },
      {
        icon: "videocam_off",
        title: "No Recording by Default",
        description: "No recording unless explicitly requested. These constraints protect creative risk.",
      },
    ],
    price: "Variable",
    sessionDates: [
      { date: "Contact for scheduling", time: "Flexible duration", available: true },
    ],
    facilitatorName: "Silent Club Team",
    facilitatorRole: "Process Facilitators",
    testimonials: [
      {
        quote:
          "Greater tolerance for unfinished states. Unexpected clarity through repetition. Reduced urgency to decide or finalize. A deeper relationship with the material.",
        author: "Typical Participant",
        role: "Creator",
      },
      {
        quote:
          "This is not a showcase. Not a critique session. Not a rehearsal for performance. Not production-focused work. If polish is the goal, this is not the right container.",
        author: "Material Experiments Guide",
        role: "Facilitator",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Work-in-progress materials",
        label: "Raw Material",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        alt: "Creative experimentation space",
        label: "Process",
      },
    ],
  },
  "audience-experiments": {
    title: "Audience Experiments",
    subtitle: "Testing how work lands, without feedback loops.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
    intro:
      "Audience Experiments are designed for creators who need to observe attention, perception, and response without performance pressure or evaluation. The focus is not approval. It is exposure under controlled conditions. Nothing here needs to be explained.",
    whatItIs:
      "An Audience Experiment is a temporary container where work-in-progress is encountered by others in silence or restraint. Attention is treated as the signal. Feedback, interpretation, and reaction are deliberately reduced. You are not here to impress. You are here to observe.",
    howItWorks: [
      {
        title: "Who This Experiment Serves",
        description: "Performers testing material before public release, speakers exploring pacing and presence, musicians observing attention without applause, theatre-makers testing form without reaction, and creators unsure how their work is being received. Works best when the gap between imagined and real response matters.",
      },
      {
        title: "What Is Being Tested",
        description: "What holds attention over time. Where attention drifts or collapses. The effect of silence, distance, or anonymity. Assumptions about audience reaction. Opinion is not collected. Attention is observed.",
      },
      {
        title: "Open Audience Experiment",
        description: "Participants pay to be present with work-in-progress. This works when witnessing unfinished work has value, attention itself is part of the experiment, and presence benefits both creator and participant. Participants are not critics. They are holders of attention.",
      },
      {
        title: "Closed Audience Experiment",
        description: "The creator pays for space, food, and stay (if required). Participants may be self-invited guests, Silent Club community members, or anonymous, non-interactive presence. This works when unfiltered attention is required, anonymity protects the work, and observation matters more than dialogue.",
      },
      {
        title: "How It Works",
        description: "Solo or small-group presentation. Fixed duration agreed in advance. No interruption during sessions. Response, if any, occurs later or not at all. The experiment ends when time ends.",
      },
    ],
    whatWeProvide: [
      {
        title: "Configured Spaces",
        description: "Configured viewing or listening spaces with clearly defined participation boundaries.",
      },
      {
        title: "Optional Facilitation",
        description: "Optional facilitation to hold silence with controlled entry and exit.",
      },
      {
        title: "No Default Feedback",
        description: "No default feedback mechanisms. Attention is curated. Reaction is not.",
      },
    ],
    designConstraints: [
      {
        icon: "volume_off",
        title: "No Applause or Commentary",
        description: "No applause, commentary, or discussion during sessions. No critique or advice by default.",
      },
      {
        icon: "videocam_off",
        title: "No Recording by Default",
        description: "No recording unless explicitly requested. No obligation to explain intent or context. These constraints protect signal integrity.",
      },
    ],
    price: "Variable",
    sessionDates: [
      { date: "Contact for scheduling", time: "Flexible duration", available: true },
    ],
    facilitatorName: "Silent Club Team",
    facilitatorRole: "Attention Facilitators",
    testimonials: [
      {
        quote:
          "Clearer sense of what truly holds attention. Reduced anxiety around unfinished work. Unexpected effects of silence and distance. Difference between imagined and actual response.",
        author: "Typical Participant",
        role: "Creator",
      },
      {
        quote:
          "This is not a performance. Not a showcase. Not a demo or launch. Not a feedback session. If validation is the goal, this is not the right container.",
        author: "Audience Experiments Guide",
        role: "Facilitator",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        alt: "Audience space for observation",
        label: "The Space",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        alt: "Attention observation in practice",
        label: "Observation",
      },
    ],
  },
  "system-experiments": {
    title: "System Experiments",
    subtitle: "Testing conditions, not individuals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
    intro:
      "System Experiments are designed for people exploring rules, structures, environments, and constraints rather than personal performance. The focus is not behavior change. It is understanding how conditions shape behavior. Nothing here is personal.",
    whatItIs:
      "A System Experiment is a temporary container where variables such as space, rhythm, rules, and absence are adjusted to observe their effects. The system is the subject. People move inside it. You are not here to improve anyone. You are here to observe what emerges.",
    howItWorks: [
      {
        title: "Who This Experiment Serves",
        description: "Researchers studying behavior, perception, or attention. Founders testing operating models or decision systems. Educators experimenting with learning environments. Designers exploring constraint-led systems. Thinkers working on long-horizon or meta-questions. Works best when insight depends on conditions, not instruction.",
      },
      {
        title: "What Is Being Tested",
        description: "How rules and constraints influence behavior. Effects of pace, silence, or absence. Interaction between environment and choice. Assumptions about control, freedom, and agency. Individuals are not optimized. The system is examined.",
      },
      {
        title: "Open System Experiment",
        description: "Participants pay to enter and experience a system in action. This works when the system itself is transferable, participation reveals patterns, and learning comes from being inside the structure. Participants are not subjects. They are components of the system.",
      },
      {
        title: "Closed System Experiment",
        description: "The creator pays for space, food, and stay (if required). Participants may be selected collaborators, Silent Club community members, or anonymous participants with defined roles. This works when controlled variables are required, observation matters more than interaction, and integrity of the system must be protected.",
      },
      {
        title: "How It Works",
        description: "Solo or multi-participant configurations. Duration defined by experimental need. Entry, exit, and roles agreed in advance. Observation prioritized over intervention. The experiment concludes when the system cycle completes.",
      },
    ],
    whatWeProvide: [
      {
        title: "Configurable Environments",
        description: "Configurable environments and zones with adjustable rules, rhythms, and constraints.",
      },
      {
        title: "Optional Facilitation",
        description: "Optional facilitation to hold structure with clear boundaries for participation and operational discretion.",
      },
      {
        title: "System Stability",
        description: "The system is held steady. Variables are adjusted deliberately.",
      },
    ],
    designConstraints: [
      {
        icon: "block",
        title: "No Coaching or Correction",
        description: "No coaching or behavior correction. No personal evaluation. No outcome promises.",
      },
      {
        icon: "lock",
        title: "No Mid-Cycle Modification",
        description: "No modification mid-cycle unless predefined. These constraints protect systemic insight.",
      },
    ],
    price: "Variable",
    sessionDates: [
      { date: "Contact for scheduling", time: "Flexible duration", available: true },
    ],
    facilitatorName: "Silent Club Team",
    facilitatorRole: "System Architects",
    testimonials: [
      {
        quote:
          "Unexpected effects of simple constraints. How quickly behavior adapts to structure. Reduced reliance on motivation or instruction. Clearer insight into agency and choice.",
        author: "Typical Participant",
        role: "Researcher",
      },
      {
        quote:
          "This is not a training program. Not a retreat. Not a group therapy space. Not a personal development intervention. If the goal is self-improvement, this is not the right container.",
        author: "System Experiments Guide",
        role: "Facilitator",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
        alt: "System experiment environment",
        label: "The System",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
        alt: "Observation in practice",
        label: "Observation",
      },
    ],
  },
};

function ExpressionDetailsPageContent() {
  const searchParams = useSearchParams();
  const practiceId = searchParams.get("id") || "the-writer-says";
  const practice = expressionPractices[practiceId] || expressionPractices["the-writer-says"];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <ExpressionDetailsHero title={practice.title} subtitle={practice.subtitle} image={practice.image} />
      <section className="relative bg-earth-900 pb-24 -mt-20 z-30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ExpressionDetailsContent
              intro={practice.intro}
              whatItIs={practice.whatItIs}
              howItWorks={practice.howItWorks}
              whatWeProvide={practice.whatWeProvide}
              designConstraints={practice.designConstraints}
            />
            <ExpressionDetailsBooking
              price={practice.price}
              sessionDates={practice.sessionDates}
              facilitatorName={practice.facilitatorName}
              facilitatorRole={practice.facilitatorRole}
            />
          </div>
        </div>
      </section>
      <ExpressionDetailsTestimonials testimonials={practice.testimonials} images={practice.images} />
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
