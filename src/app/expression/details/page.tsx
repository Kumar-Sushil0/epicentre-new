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
  "language-play": {
    title: "Language Play",
    subtitle: "Experimenting with the structure and sound of words.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
    intro:
      "A space for linguistic experimentation where grammar rules are suggestions, not laws. Break free from conventional structures to discover new rhythms and meanings.",
    whatItIs:
      "Language Play is an exploratory workshop where participants deconstruct and reconstruct language. Through exercises in syntax manipulation, sound poetry, and constraint-based writing, we discover what words can do when freed from their usual contexts.",
    howItWorks: [
      {
        title: "The Session",
        description: "A 3-hour intensive workshop with structured exercises and free exploration time.",
      },
      {
        title: "The Group",
        description: "Small groups of 6-8 participants to ensure individual attention and collaborative energy.",
      },
      {
        title: "The Method",
        description: "Guided exercises followed by individual experimentation and optional sharing.",
      },
    ],
    whatWeProvide: [
      {
        title: "Writing Materials",
        description: "Various papers, pens, and tools for physical and digital experimentation.",
      },
      {
        title: "Reference Library",
        description: "Curated collection of experimental literature and linguistic theory.",
      },
      {
        title: "Recording Equipment",
        description: "For capturing spoken word experiments and sound poetry.",
      },
    ],
    designConstraints: [
      {
        icon: "edit_note",
        title: "No Judgement",
        description: "All experiments are valid. There are no 'wrong' ways to play with language.",
      },
      {
        icon: "auto_awesome",
        title: "Embrace the Absurd",
        description: "The most interesting discoveries come from pushing boundaries.",
      },
    ],
    price: "$75",
    sessionDates: [
      { date: "Friday, Nov 3", time: "2:00 PM - 5:00 PM", spots: "2 spots left", available: true },
      { date: "Saturday, Nov 18", time: "10:00 AM - 1:00 PM", available: true },
    ],
    facilitatorName: "Dr. Maya Chen",
    facilitatorRole: "Linguist & Poet",
    testimonials: [
      {
        quote: "I discovered a new voice I didn't know I had. The constraints actually set me free.",
        author: "Alex R.",
        role: "Fiction Writer",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Scattered letters and notes",
        label: "Experimentation",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        alt: "Creative workspace",
        label: "Process",
      },
    ],
  },
  "finding-voice": {
    title: "Finding Voice",
    subtitle: "Discovering the authentic timber of your personal narrative.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
    intro:
      "Vocal exercises designed to unlock your inner resonance. This practice helps you find and strengthen the authentic voice that carries your personal narrative.",
    whatItIs:
      "Finding Voice combines vocal training with narrative exploration. Through breathing exercises, vocal warm-ups, and guided storytelling, participants discover the unique timbre and rhythm of their authentic voice.",
    howItWorks: [
      {
        title: "The Session",
        description: "A 2.5-hour workshop combining vocal exercises with narrative work.",
      },
      {
        title: "The Group",
        description: "Intimate groups of 5-7 participants for personalized attention.",
      },
      {
        title: "The Process",
        description: "Warm-up exercises, individual voice work, and group resonance practices.",
      },
    ],
    whatWeProvide: [
      {
        title: "Vocal Training Space",
        description: "Acoustically treated room designed for voice work and listening.",
      },
      {
        title: "Recording Setup",
        description: "Professional equipment to capture and review your voice.",
      },
      {
        title: "Guided Materials",
        description: "Exercises and prompts for continued practice.",
      },
    ],
    designConstraints: [
      {
        icon: "mic_external_on",
        title: "No Comparison",
        description: "Your voice is unique. We focus on authenticity, not imitation.",
      },
      {
        icon: "hearing",
        title: "Active Listening",
        description: "We listen to understand, not to critique or judge.",
      },
    ],
    price: "$90",
    sessionDates: [
      { date: "Wednesday, Nov 8", time: "6:00 PM - 8:30 PM", spots: "3 spots left", available: true },
      { date: "Sunday, Nov 19", time: "2:00 PM - 4:30 PM", available: true },
    ],
    facilitatorName: "James Morrison",
    facilitatorRole: "Voice Coach & Storyteller",
    testimonials: [
      {
        quote: "I found my voice, literally. The exercises unlocked something I didn't know was there.",
        author: "Rachel K.",
        role: "Memoirist",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        alt: "Vocal training space",
        label: "The Studio",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        alt: "Voice work in progress",
        label: "Practice",
      },
    ],
  },
  "artist-in-reflection": {
    title: "Artist In Reflection",
    subtitle: "A space for deep introspection and mirror work.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
    intro:
      "Confront the self to deepen the artistic output. This practice uses mirror work, journaling, and guided introspection to explore the relationship between the artist and their art.",
    whatItIs:
      "Artist In Reflection is a contemplative practice that combines self-examination with artistic exploration. Through structured mirror work, reflective writing, and silent observation, participants explore how their inner landscape shapes their creative output.",
    howItWorks: [
      {
        title: "The Session",
        description: "A 4-hour intensive retreat combining guided exercises with silent reflection time.",
      },
      {
        title: "The Group",
        description: "Very small groups of 4-6 participants to maintain intimacy and focus.",
      },
      {
        title: "The Structure",
        description: "Alternating periods of guided work and independent reflection in private spaces.",
      },
    ],
    whatWeProvide: [
      {
        title: "Reflection Spaces",
        description: "Private rooms with mirrors and comfortable seating for individual work.",
      },
      {
        title: "Journaling Materials",
        description: "High-quality journals, pens, and prompts for deep reflection.",
      },
      {
        title: "Meditation Tools",
        description: "Cushions, blankets, and quiet spaces for contemplative practice.",
      },
    ],
    designConstraints: [
      {
        icon: "self_improvement",
        title: "No Sharing Required",
        description: "This is personal work. Sharing is optional and never required.",
      },
      {
        icon: "visibility_off",
        title: "Respect Privacy",
        description: "We honor each participant's need for solitude and introspection.",
      },
    ],
    price: "$100",
    sessionDates: [
      { date: "Saturday, Nov 11", time: "9:00 AM - 1:00 PM", spots: "1 spot left", available: true },
      { date: "Sunday, Nov 26", time: "2:00 PM - 6:00 PM", available: true },
    ],
    facilitatorName: "Dr. Anya Patel",
    facilitatorRole: "Art Therapist & Guide",
    testimonials: [
      {
        quote: "The most profound artistic breakthrough I've ever had. The mirror work was transformative.",
        author: "David L.",
        role: "Visual Artist",
      },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
        alt: "Reflection space",
        label: "The Space",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
        alt: "Contemplative practice",
        label: "Reflection",
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
