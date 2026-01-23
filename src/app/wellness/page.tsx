import Header from "../components/Header";
import Footer from "../components/Footer";
import WellnessIntro from "../components/wellness/WellnessIntro";
import WellnessGrid from "../components/wellness/WellnessGrid";
import WellnessCTA from "../components/wellness/WellnessCTA";

export default function WellnessPage() {
  const practices = [
    {
      title: "Physical Training",
      description: "Movement on your own terms. A fully equipped space for self-paced exertion, devoid of mirrors and metrics.",
      category: "Self-Paced",
      icon: "fitness_center",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
      imageAlt: "Person lifting weights in a dark moody gym setting",
      aspectRatio: "4/5" as const,
      href: "/wellness",
    },
    {
      title: "Kayaking & Cycling",
      description: "Dissolve into the landscape. Equipment provided, destination undefined. Let the fog guide your morning journey across the stillness.",
      category: "Outdoor",
      icon: "kayaking",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
      imageAlt: "Misty lake landscape with a lone kayak floating on calm water",
      aspectRatio: "wide" as const,
      spanColumns: 2,
      href: "/wellness",
    },
    {
      title: "Yoga & Meditation",
      description: "Silence is the only guide. A low-light sanctuary designed for turning inward and reconnecting with your breath.",
      category: "Mindfulness",
      icon: "self_improvement",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
      imageAlt: "Silhouette of a person meditating in a dimly lit room with candles",
      aspectRatio: "4/5" as const,
      href: "/wellness",
    },
    {
      title: "Board Games",
      description: "Analog connection. Tactile pieces, wooden boards, and slow evenings spent in good company or solitary strategy.",
      category: "Leisure",
      icon: "casino",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpLgNIXCBBA7cPpXwO9csLOqZrHsSadnHbb7Q-s24LEXvnrtHwATVxM-rgQthaw7HXT23Wv2Vj4M0QHf7vMXlnFxVR_3527JHh44DEYoHmp9RAiTjj5UKVQsSpgDXnPAtpKFwBRYkq1brPYGQAyalnn8lw1Ew3ezLh9zoRAIiS58I2gC8YpIP3e3Vx-QSnJvTJzmVneD0Kah0f9YnTcUovk_mk9mNLTdZ2PEgiloIzz1gOrdmvtvnxrXR2idxdg2P4IVZ0jM6IqpKT",
      imageAlt: "Close up of wooden chess pieces on a board in warm light",
      aspectRatio: "4/5" as const,
      href: "/wellness",
    },
    {
      title: "Pet Friendly",
      description: "Companions welcome. Because true recovery is often found in the quiet presence of a loyal friend.",
      category: "Companionship",
      icon: "pets",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tpwiek3PonA5i87JcVQ0JysCYWwZeYKjPR00nuxAGlqkrb3Oc2Y76BPK5eoukMAJQpiiOpUXSye5KD7z0KrMUhR-VAei7QNfxuEafVCYyoPl2zI3KEil0UkwjxK_l6FhAUKIbZzxXgqDkWh-X6LW5Zh9V0fgppjnWfzsEE9CipCUk-lGo482Uh8fF2rqUczpWgg0hGFp7hIyQClItjfCzoXHDeU1kPzuo9ZBkjj7S1RucpxI27X9fAKm_lGvr_ZxX4o8cU_In7QQ",
      imageAlt: "A dog sleeping peacefully on a rug near a fireplace",
      aspectRatio: "4/5" as const,
      href: "/wellness",
    },
    {
      title: "A Day at a Farm",
      description: "Ground yourself. Hands in the earth, connecting with the cycle of growth. Experience the raw texture of life through our on-site sustainable farming practices. No theory, just touch.",
      category: "Grounding",
      icon: "agriculture",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWhITh0xZYsAlerv6-wQYlJ2lGDb2fA_wBAeP-_GMQIbFan5_10uwImDJBEYxv89qG40jiKmPooOPAuK9VNy0byJTjkmF4qhQWNpG_rIZyaiWljPgYyplu6QhWi4ITpQrmDn--uGE-0y86G3XGlnTx0Szqsk_LMFKI1PoC37grwx7PFmwsXeweFG5cInow3VbwMtmjiHmOpbL1EBaeG9-Ix3LzkGgpXcwBPNvDZuavErPWW1u3mWa2a3qiqIcBhHnodWXLlg5povz0",
      imageAlt: "Hands holding fresh soil and a small plant seedling",
      aspectRatio: "farm" as const,
      spanColumns: 3,
      isFarmCard: true,
      href: "/wellness",
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <div className="flex-grow">
        <WellnessIntro />
        <section className="px-4 md:px-10 pb-24 max-w-[1280px] mx-auto">
          <WellnessGrid practices={practices} />
        </section>
        <WellnessCTA />
      </div>
      <Footer />
    </main>
  );
}
