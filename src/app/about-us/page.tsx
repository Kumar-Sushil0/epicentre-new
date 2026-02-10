import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
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

export default function AboutUsPage() {
  return (
    <main
      className="flex-grow flex flex-col w-full overflow-x-hidden bg-fixed"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0wWXU4xS6BdtUrmYdwyCzigduYrRYr-qCYXeK0zWlrvNOLsM3FMEGXX8kTmkhLnks7DhZDzfT0COpi6rQCM_50M_63Se2dqYtm2z5KZqH2e5PbTMNfNtN74k82J77cRkCQfiKirrMuhx6bzxc_e4GDhi0ZNhTobudsMGNM3bLJyFiXVsDOFZk5AyyP-hWPuyZoIAMhxXIkUZq3gxz5TS_aOMt8ZEVZ6t_6gP9caHyNF0-frTThfwxUiN5XqPvklltRv3_VRAtAx')",
      }}
    >
      <Header />
      <AboutHero />
      
      <AboutPhilosophy />
     
      
      <AboutFounder />
      <AboutPrinciples />
      
      
      
      <AboutCollective />
      <TeamSection />
 
      <Footer />
    </main>
  );
}