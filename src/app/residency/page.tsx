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
    },
    {
      category: "Psychology",
      title: "Risk & Attention Residency",
      description: "Understanding how we allocate our most precious resource—attention—in high-stakes environments and digital noise.",
    },
    {
      category: "Wellness",
      title: "Tech Sabbatical Lite",
      description: "A gentle re-entry into the physical world. 3 days of analog interaction, paper maps, and mechanical watches.",
    },
    {
      category: "Knowledge Management",
      title: "Second-Brain Deconstruction",
      description: "Review your digital archives. What stays, what goes? An audit of your personal knowledge management systems.",
    },
    {
      category: "Movement",
      title: "Dance Movement Signature",
      description: "Finding your unique kinetic language through guided improvisation and spatial awareness exercises.",
    },
    {
      category: "Performance Arts",
      title: "Theater of the Inverse",
      description: "Exploring roles and narratives by doing the exact opposite of your natural inclination in a safe, dramatic setting.",
    },
    {
      category: "Creativity",
      title: "Artist in Making",
      description: "A residency for non-artists to rediscover the tactile joy of creation without the pressure of an end product.",
    },
    {
      category: "Sustainability",
      title: "Off-Grid Life",
      description: "Practical skills in water management, solar cooking, and composting within a high-comfort off-grid facility.",
    },
    {
      category: "Urban Studies",
      title: "Contemplating Leaving Cities",
      description: "An honest inquiry into rural living, modern homesteading, and the future of community outside urban centers.",
    },
    {
      category: "Literature",
      title: "Silent Writing Residency",
      description: "No workshops, no feedback, no critique. Just 7 days of shared silence and 8 hours of daily writing time.",
    },
    {
      category: "History",
      title: "Reading Excerpts from History",
      description: "A guided exploration of primary sources to find parallels between past transitions and our current era.",
    },
    {
      category: "Systemic Thinking",
      title: "Life Systems Residency",
      description: "Designing personal systems for health, finance, and learning that work with your biology rather than against it.",
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <ResidencyHero />
      <ResidencyPhilosophy />
      <ResidencyGrid residencies={residencies} />
      <ResidencySelection />
      <Footer />
    </main>
  );
}
