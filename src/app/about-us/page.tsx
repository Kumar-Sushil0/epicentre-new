import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "About Us", url: "https://thesilent.club/about-us" }
]);

export const metadata: Metadata = {
  title: "About Us | The Silent Club",
  description: "Discover the philosophy, principles, and vision behind The Silent Club. Learn about our approach to structured silence, intentional solitude, and creating environments for deep work and personal transformation.",
  keywords: ["about silent club", "philosophy", "mindfulness principles", "retreat philosophy", "intentional solitude", "structured silence approach"],
  alternates: {
    canonical: "https://thesilent.club/about-us",
  },
  openGraph: {
    title: "About Us | The Silent Club",
    description: "Discover the philosophy, principles, and vision behind The Silent Club.",
    url: "https://thesilent.club/about-us",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "About The Silent Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | The Silent Club",
    description: "Discover the philosophy, principles, and vision behind The Silent Club.",
    images: ["/og.jpeg"],
  },
};
import AboutPhilosophyQuote from "../components/about/AboutPhilosophyQuote";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutFounder from "../components/about/AboutFounder";
import PrinciplesAndEnvironment from "../components/about/PrinciplesAndEnvironment";
import AboutCollective from "../components/about/AboutCollective";
import AboutVision from "../components/about/AboutVision";
import AboutArchitecture from "../components/about/AboutArchitecture";
import AboutPrinciples from "../components/about/AboutPrinciples";
import AboutTriad from "../components/about/AboutTriad";
import BuiltEnvironment from "../components/about/BuiltEnvironment";
import WhoThisIsFor from "../components/about/WhoThisIsFor";
import TeamSection from "../components/TeamSection";
import OurPhilosophy from "../components/OurPhilosophy";
import LivingRoom from '../components/about/LivingRoom';
import RequestConversation from "../components/RequestConversation";

import IconStrip from "../components/IconStrip";

export default function AboutUsPage() {
  return (
    <>
      <StructuredData data={breadcrumbs} />
      <main
        className="flex-grow flex flex-col w-full overflow-x-hidden bg-fixed"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0wWXU4xS6BdtUrmYdwyCzigduYrRYr-qCYXeK0zWlrvNOLsM3FMEGXX8kTmkhLnks7DhZDzfT0COpi6rQCM_50M_63Se2dqYtm2z5KZqH2e5PbTMNfNtN74k82J77cRkCQfiKirrMuhx6bzxc_e4GDhi0ZNhTobudsMGNM3bLJyFiXVsDOFZk5AyyP-hWPuyZoIAMhxXIkUZq3gxz5TS_aOMt8ZEVZ6t_6gP9caHyNF0-frTThfwxUiN5XqPvklltRv3_VRAtAx')",
        }}
      >
      <Header />
      <AboutHero />
      
      <OurPhilosophy />
      <AboutPrinciples />
      <AboutPhilosophy />
      <LivingRoom />
      
      
      <AboutCollective />
      
      <AboutFounder />
      
      
      
      
      
      
 
      <RequestConversation />
      <Footer />
      </main>
    </>
  );
}