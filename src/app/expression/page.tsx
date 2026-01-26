import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpressionHero from "../components/expression/ExpressionHero";
import ExpressionPhilosophy from "../components/expression/ExpressionPhilosophy";
import ExpressionPillars from "../components/expression/ExpressionPillars";
import ExpressionCTA from "../components/expression/ExpressionCTA";

export default function ExpressionPage() {
  const pillars = [
    {
      title: "Language Play",
      description: (
        <>
          Experimenting with the structure and sound of words.<br />
          Break free from grammatical constraints to find new rhythms.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
      imageAlt: "Close up of scattered vintage letters or notebook pages with scribbles",
      icon: "edit_note",
      href: "/expression/details?id=language-play",
    },
    {
      title: "Finding Voice",
      description: (
        <>
          Discovering the authentic timber of your personal narrative.<br />
          Vocal exercises designed to unlock your inner resonance.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
      imageAlt: "Abstract concept of a vintage microphone in a dark moody room",
      icon: "mic_external_on",
      href: "/expression/details?id=finding-voice",
    },
    {
      title: "Artist In Reflection",
      description: "A space for deep introspection and mirror work. Confront the self to deepen the artistic output.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
      imageAlt: "A moody reflection in a mirror or glass, artistic and contemplative",
      icon: "self_improvement",
      href: "/expression/details?id=artist-in-reflection",
    },
    {
      title: "The Writer Says",
      description: (
        <>
          Channeling thoughts through the rhythm of keys.<br />
          Focused sessions for drafting, editing, and finding flow.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
      imageAlt: "Close up of a vintage typewriter keys in warm light",
      icon: "history_edu",
      href: "/expression/details?id=the-writer-says",
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <ExpressionHero />
      <ExpressionPhilosophy />
      <ExpressionPillars pillars={pillars} />
      <ExpressionCTA />
      <Footer />
    </main>
  );
}
