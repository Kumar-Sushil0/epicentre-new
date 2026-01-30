import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpressionHero from "../components/expression/ExpressionHero";
import ExpressionPillars from "../components/expression/ExpressionPillars";
import ExpressionCTA from "../components/expression/ExpressionCTA";
import ClosingSection from "../components/ClosingSection";

export default function ExpressionPage() {
  const pillars = [
    {
      title: "Process Experiments",
      description: (
        <>
          Testing how you work, not what you produce.<br />
          Examine method, rhythm, and sequence before committing to outcomes.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
      imageAlt: "Process experimentation workspace with tools and materials",
      icon: "science",
      href: "/expression/details?id=process-experiments",
    },
    {
      title: "Material Experiments",
      description: (
        <>
          Testing unfinished work, not final output.<br />
          Engage with raw, incomplete material before it becomes fixed.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
      imageAlt: "Material experimentation workspace with unfinished work",
      icon: "construction",
      href: "/expression/details?id=material-experiments",
    },
    {
      title: "Material Experiments",
      description: (
        <>
          Testing unfinished work, not final output.<br />
          Designed for creators working with raw, incomplete, or unstable material.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
      imageAlt: "Work-in-progress materials and creative fragments",
      icon: "science",
      href: "/expression/details?id=material-experiments",
    },
    {
      title: "Audience Experiments",
      description: (
        <>
          Testing how work lands, without feedback loops.<br />
          Observe attention, perception, and response without performance pressure.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
      imageAlt: "Audience observing work-in-progress in contemplative silence",
      icon: "visibility",
      href: "/expression/details?id=audience-experiments",
    },
    {
      title: "System Experiments",
      description: (
        <>
          Testing conditions, not individuals.<br />
          Explore rules, structures, and constraints to understand how conditions shape behavior.
        </>
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
      imageAlt: "Structured environment for system observation and testing",
      icon: "settings_suggest",
      href: "/expression/details?id=system-experiments",
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
      <ExpressionPillars pillars={pillars} />
      <ClosingSection />
      <Footer />
    </main>
  );
}
