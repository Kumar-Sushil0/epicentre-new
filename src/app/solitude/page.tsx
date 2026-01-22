import Header from "../components/Header";
import Footer from "../components/Footer";
import SolitudeHero from "../components/solitude/SolitudeHero";
import SolitudePhilosophy from "../components/solitude/SolitudePhilosophy";
import SolitudePractice from "../components/solitude/SolitudePractice";

export default function SolitudePage() {
  const practices = [
    {
      number: "01",
      category: "Focus",
      title: "Angling",
      description:
        "Repetition and still attention. A meditative practice of patience and presence by the water's edge. Let the rhythm of the cast soothe the restless mind.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
      imageAlt: "Moody shot of a simple wooden fishing rod resting by a misty water's edge",
      buttonText: "Read Guide",
      buttonIcon: "arrow_forward",
      imagePosition: "left" as const,
    },
    {
      number: "02",
      category: "Observe",
      title: "Bird Watching",
      description:
        "Looking without pursuit. Soft observation of local wildlife in their natural habitat. Train your eye to notice the subtle movements of life around you.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
      imageAlt: "Soft focus close up of a small bird perched on a branch in natural light",
      buttonText: "View Species Map",
      buttonIcon: "map",
      imagePosition: "right" as const,
    },
    {
      number: "03",
      category: "Wonder",
      title: "Star Gazing",
      description:
        "Observation without urgency. Reconnecting with the cosmos under our clear, protected night skies. Feel the scale of the universe in silence.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
      imageAlt: "Dark high contrast image of a starry night sky silhouette over trees",
      buttonText: "Night Sky Guide",
      buttonIcon: "star",
      imagePosition: "left" as const,
    },
    {
      number: "04",
      category: "Wander",
      title: "Forest Walks",
      description:
        "Walking without destination or goal. Let your feet guide you through the ancient woods, breathing in the earth and finding your own pace.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
      imageAlt: "Atmospheric shot of a narrow dirt path winding through tall dark pine trees",
      buttonText: "Explore Trails",
      buttonIcon: "directions_walk",
      imagePosition: "right" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <SolitudeHero />
      <SolitudePhilosophy />
      <div className="flex flex-1 flex-col bg-earth-900 px-4 lg:px-20 py-10 gap-32 pb-40">
        {practices.map((practice, index) => (
          <SolitudePractice key={index} {...practice} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
