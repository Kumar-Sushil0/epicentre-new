import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResidencyDetailsHero from "../../components/residency/details/ResidencyDetailsHero";
import ResidencyDetailsPhilosophy from "../../components/residency/details/ResidencyDetailsPhilosophy";
import ResidencyDetailsInfo from "../../components/residency/details/ResidencyDetailsInfo";
import ResidencyDetailsContent from "../../components/residency/details/ResidencyDetailsContent";
import ResidencyBookingForm from "../../components/residency/details/ResidencyBookingForm";
import ResidencyMobileBooking from "../../components/residency/details/ResidencyMobileBooking";
import Image from "next/image";

export default function ResidencyDetailsPage() {
  const practitioners = [
    {
      name: "Neel Kothari",
      role: "Lead Practitioner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL",
      bio: "With over two decades of experience in Vipassana and somatic healing, Neel brings a grounded, non-dogmatic approach to silence. His sessions focus on 'active stillness'—teaching residents how to observe the mind without engaging with its chaos.",
      specialties: ["Meditation", "Somatic Work", "Breath"],
      socialMedia: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/neelkothari", icon: "work" },
        { platform: "Instagram", url: "https://instagram.com/neelkothari", icon: "photo_camera" },
        { platform: "Website", url: "https://neelkothari.com", icon: "language" },
      ],
    },
    {
      name: "Sarah Mitchell",
      role: "Movement Facilitator",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL",
      bio: "A certified yoga therapist and embodiment coach, Sarah specializes in gentle movement practices that reconnect body and breath. Her approach emphasizes listening over performing, helping residents find ease in their physical form.",
      specialties: ["Yoga Therapy", "Embodiment", "Gentle Movement"],
      socialMedia: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/sarahmitchell", icon: "work" },
        { platform: "Instagram", url: "https://instagram.com/sarahmitchell", icon: "photo_camera" },
        { platform: "Website", url: "https://sarahmitchell.com", icon: "language" },
      ],
    },
  ];

  const infoItems = [
    {
      icon: "psychology",
      title: "Core Tension",
      description: "Modern life trains constant reaction. Immediate replies. Continuous movement. Shortened attention spans. Residency demands the opposite. Stillness. Waiting. Environmental reading. It exposes impatience quickly.",
    },
    {
      icon: "landscape",
      title: "What This Environment Changes",
      description: "The Silent Club removes distraction. No constant conversation. No crowd noise. No social performance. Long water horizons. Slow wind. Shifting light. Silence turns practice into cognitive training.",
    },
    {
      icon: "groups",
      title: "Suitable For",
      description: "Individuals seeking patience training • Decision-makers needing cognitive reset • Beginners willing to learn independently • Those comfortable with extended quiet",
    },
    {
      icon: "cancel",
      title: "What It Is Not",
      description: "Not a retreat • Not guided tours • Not competitive • Not entertainment • Transformation is secondary. Remaining present is primary.",
    },
    {
      icon: "emoji_events",
      title: "Outcome",
      description: "Improved tolerance for stillness • Increased environmental awareness • Reduced compulsive stimulation • Foundational competence • Not excitement. Calibration.",
    },
    {
      icon: "inventory_2",
      title: "What You Receive",
      description: "Shared curated digital library • Step-by-step orientation guide • Essential tools • Suggested silent daily rhythm • Access to designated zones • Expert practitioners on-site.",
    },
  ];

  const includedItems = [
    {
      title: "Expert-guided meditation sessions",
      description: "Daily sessions with experienced practitioners.",
    },
    {
      title: "Personalized practice feedback",
      description: "One-on-one guidance tailored to your journey.",
    },
    {
      title: "Structured silent immersion",
      description: "Carefully designed silence protocols and practices.",
    },
    {
      title: "Movement and breath work",
      description: "Gentle somatic practices to support stillness.",
    },
    {
      title: "Access to meditation spaces",
      description: "Indoor and outdoor zones for practice.",
    },
    {
      title: "Integration support materials",
      description: "Resources for continuing practice after residency.",
    },
  ];

  const kitItems = [
    { item: "Meditation Cushion & Mat", purpose: "Comfortable seated practice" },
    { item: "Practice Journal", purpose: "Reflection and integration" },
    { item: "Breath Work Guide", purpose: "Self-directed practice reference" },
    { item: "Silence Protocol Card", purpose: "Daily practice reminders" },
    { item: "Movement Props (Blocks, Strap)", purpose: "Supported gentle movement" },
    { item: "Audio Practice Files", purpose: "Guided sessions for personal use" },
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Orientation",
      schedule: [
        { time: "11:00–13:00", activity: "Check-in & Welcome" },
        { time: "13:00–14:00", activity: "Lunch" },
        { time: "14:00–16:00", activity: "Orientation Session with Practitioners" },
        { time: "16:00–17:30", activity: "Introduction to Meditation Practice" },
        { time: "18:00–19:00", activity: "Gentle Movement Session" },
        { time: "19:00–20:00", activity: "Dinner" },
        { time: "20:30–21:00", activity: "Evening Sit with Guidance" },
      ],
    },
    {
      day: 2,
      title: "Foundation Building",
      schedule: [
        { time: "06:30–07:30", activity: "Morning Meditation (Guided)" },
        { time: "08:00–09:00", activity: "Breakfast" },
        { time: "09:30–11:00", activity: "Theory: Foundations of Practice" },
        { time: "11:30–13:00", activity: "Practical Session with Feedback" },
        { time: "13:00–14:00", activity: "Lunch" },
        { time: "14:30–16:00", activity: "Breath Work Workshop" },
        { time: "16:30–18:00", activity: "Self-Directed Practice Time" },
        { time: "19:00–20:00", activity: "Dinner" },
        { time: "20:30–21:00", activity: "Evening Reflection Circle" },
      ],
    },
    {
      day: 3,
      title: "Deepening Practice",
      schedule: [
        { time: "06:30–07:30", activity: "Silent Morning Sit" },
        { time: "08:00–09:00", activity: "Breakfast" },
        { time: "09:30–11:00", activity: "Extended Meditation Session" },
        { time: "11:30–13:00", activity: "Movement Practice" },
        { time: "13:00–14:00", activity: "Lunch" },
        { time: "14:30–16:00", activity: "One-on-One Practitioner Sessions" },
        { time: "16:30–18:00", activity: "Self-Directed Practice" },
        { time: "19:00–20:00", activity: "Dinner" },
        { time: "20:30–21:00", activity: "Silent Evening Sit" },
      ],
    },
    {
      day: 4,
      title: "Immersion & Integration",
      schedule: [
        { time: "06:30–07:30", activity: "Morning Practice" },
        { time: "08:00–09:00", activity: "Breakfast" },
        { time: "09:30–11:00", activity: "Deep Practice Block" },
        { time: "11:30–13:00", activity: "Somatic Integration Session" },
        { time: "13:00–14:00", activity: "Lunch" },
        { time: "14:30–16:00", activity: "Personal Practice Time" },
        { time: "16:30–18:00", activity: "Integration Workshop" },
        { time: "19:00–20:00", activity: "Dinner" },
        { time: "20:30–21:00", activity: "Closing Circle Preparation" },
      ],
    },
    {
      day: 5,
      title: "Completion & Departure",
      schedule: [
        { time: "06:30–07:30", activity: "Final Morning Sit" },
        { time: "08:00–09:00", activity: "Breakfast" },
        { time: "09:30–10:30", activity: "Closing Circle & Integration" },
        { time: "11:00–12:00", activity: "Personal Reflection & Checkout" },
        { time: "By 13:00", activity: "Departure" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <ResidencyDetailsHero />
      <ResidencyDetailsPhilosophy />

      {/* Practitioners Section - Above Info Grid */}
      <section className="px-4 md:px-16 py-12 bg-earth-900">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-8">
            <span className="h-px w-8 bg-gold-500"></span>
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Your Guides</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {practitioners.map((practitioner, index) => (
              <div key={index} className="bg-earth-800 rounded-xl overflow-hidden border border-earth-700 shadow-lg flex flex-col">
                <div className="relative h-64">
                  <Image
                    alt={practitioner.name}
                    src={practitioner.image}
                    fill
                    className="object-cover grayscale-20 sepia-10"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-earth-50 mb-1">{practitioner.name}</h3>
                    <p className="text-gold-500 text-sm font-medium mb-4 uppercase tracking-wider">{practitioner.role}</p>
                    <p className="text-earth-300 font-body mb-6 leading-relaxed text-sm">
                      {practitioner.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {practitioner.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs font-bold bg-earth-900 border border-earth-700 px-3 py-1 rounded text-earth-300">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  {practitioner.socialMedia && practitioner.socialMedia.length > 0 && (
                    <div className="flex gap-3 pt-4 border-t border-earth-700">
                      {practitioner.socialMedia.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-earth-400 hover:text-gold-500 transition-colors"
                          aria-label={social.platform}
                        >
                          {social.platform === 'LinkedIn' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          )}
                          {social.platform === 'Instagram' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          )}
                          {social.platform === 'Website' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResidencyDetailsInfo infoItems={infoItems} />
      <section className="px-4 md:px-16 py-16 bg-earth-950">
        <div className="w-full flex flex-col lg:flex-row gap-16">
          <ResidencyDetailsContent
            practitioners={practitioners}
            includedItems={includedItems}
            kitItems={kitItems}
            itinerary={itinerary}
          />
          <ResidencyBookingForm />
        </div>
      </section>
      <ResidencyMobileBooking />
      <Footer />
    </main>
  );
}
