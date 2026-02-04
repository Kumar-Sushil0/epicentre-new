import Header from "../components/Header";
import Footer from "../components/Footer";
import ResidencyHero from "../components/residency/ResidencyHero";
import ResidencyPhilosophy from "../components/residency/ResidencyPhilosophy";
import ResidencyGrid from "../components/residency/ResidencyGrid";
import ResidencySelection from "../components/residency/ResidencySelection";

export default function ResidencyPage() {
  const residencies = [
    {
      category: "Future Studies",
      title: "AI Sense-Making Residency",
      description: "A 5-day retreat to navigate the existential and practical shifts of the machine age through shared dialogue and deep reading.",
      speakers: ["Dr. Maya Chen", "Prof. Raj Malhotra"],
      checkIn: "Fri, Feb 15 Noon",
      checkOut: "Sun, Feb 17 Noon",
      href: "/residency/details?id=ai-sense-making",
    },
    {
      category: "Psychology",
      title: "Risk & Attention Residency",
      description: "Understanding how we allocate our most precious resource—attention—in high-stakes environments and digital noise.",
      speakers: ["Dr. Sarah Thompson", "Marcus Wei"],
      checkIn: "Fri, Mar 5 Noon",
      checkOut: "Sun, Mar 7 Noon",
      href: "/residency/details?id=risk-attention",
    },
    {
      category: "Wellness",
      title: "Tech Sabbatical Lite",
      description: "A gentle re-entry into the physical world. 3 days of analog interaction, paper maps, and mechanical watches.",
      speakers: ["Elena Rodriguez", "James Park"],
      checkIn: "Fri, Mar 12 Noon",
      checkOut: "Sun, Mar 14 Noon",
      href: "/residency/details?id=tech-sabbatical",
    },
    {
      category: "Knowledge Management",
      title: "Digital Brain Audit",
      description: "Review your digital archives. What stays, what goes? An audit of your personal knowledge management systems.",
      speakers: ["Tiago Forte", "Anne-Laure Le Cunff"],
      checkIn: "Fri, Apr 2 Noon",
      checkOut: "Sun, Apr 4 Noon",
      href: "/residency/details?id=second-brain",
    },
    {
      category: "Movement",
      title: "Dance Movement Signature",
      description: "Finding your unique kinetic language through guided improvisation and spatial awareness exercises.",
      speakers: ["Aisha Patel", "Carlos Mendes"],
      checkIn: "Fri, Apr 18 Noon",
      checkOut: "Sun, Apr 20 Noon",
      href: "/residency/details?id=dance-movement",
    },
    {
      category: "Performance Arts",
      title: "Theater of the Inverse",
      description: "Exploring roles and narratives by doing the exact opposite of your natural inclination in a safe, dramatic setting.",
      speakers: ["Sofia Bergman", "Kenji Yamamoto"],
      checkIn: "Fri, May 3 Noon",
      checkOut: "Sun, May 5 Noon",
      href: "/residency/details?id=theater-inverse",
    },
    {
      category: "Creativity",
      title: "Artist in Making",
      description: "A residency for non-artists to rediscover the tactile joy of creation without the pressure of an end product.",
      speakers: ["Lucia Marquez", "David Kim"],
      checkIn: "Fri, May 20 Noon",
      checkOut: "Sun, May 22 Noon",
      href: "/residency/details?id=artist-making",
    },
    {
      category: "Sustainability",
      title: "Off-Grid Life",
      description: "Practical skills in water management, solar cooking, and composting within a high-comfort off-grid facility.",
      speakers: ["Nina Schmidt", "Raj Krishnan"],
      checkIn: "Fri, Jun 8 Noon",
      checkOut: "Sun, Jun 10 Noon",
      href: "/residency/details?id=off-grid-life",
    },
    {
      category: "Urban Studies",
      title: "Leaving Cities",
      description: "An honest inquiry into rural living, modern homesteading, and the future of community outside urban centers.",
      speakers: ["Emily Foster", "Tom Anderson"],
      checkIn: "Fri, Jun 25 Noon",
      checkOut: "Sun, Jun 27 Noon",
      href: "/residency/details?id=leaving-cities",
    },
    {
      category: "Literature",
      title: "Silent Writing Residency",
      description: "No workshops, no feedback, no critique. Just 7 days of shared silence and 8 hours of daily writing time.",
      speakers: ["Maya Angelou Jr.", "Haruki Murakami"],
      checkIn: "Fri, Jul 10 Noon",
      checkOut: "Sun, Jul 12 Noon",
      href: "/residency/details?id=silent-writing",
    },
    {
      category: "History",
      title: "History Excerpts",
      description: "A guided exploration of primary sources to find parallels between past transitions and our current era.",
      speakers: ["Dr. Robert Hughes", "Prof. Li Wei"],
      checkIn: "Fri, Aug 5 Noon",
      checkOut: "Sun, Aug 7 Noon",
      href: "/residency/details?id=reading-history",
    },
    {
      category: "Systemic Thinking",
      title: "Life Design Residency",
      description: "Designing personal systems for health, finance, and learning that work with your biology rather than against it.",
      speakers: ["James Clear", "Dr. Andrew Huberman"],
      checkIn: "Fri, Aug 22 Noon",
      checkOut: "Sun, Aug 24 Noon",
      href: "/residency/details?id=life-systems",
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100  ">
      <Header />
      <ResidencyHero />
      <ResidencyPhilosophy />
      <ResidencyGrid residencies={residencies} />
      
      <Footer />
    </main>
  );
}
