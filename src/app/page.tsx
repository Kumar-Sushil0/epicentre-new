import Header from "./components/Header";
import BannerCarousel from "./components/BannerCarousel";
import RoomShowcase from "./components/RoomShowcase";
import DiningShowcase from "./components/DiningShowcase";
import ExperiencesShowcase from "./components/ExperiencesShowcase";
import Gallery from "./components/Gallery";
import HowToGetHere from "./components/HowToGetHere";
import FAQ from "./components/FAQ";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/NewsletterPopup";

export default function Home() {
  return (
    <main className="relative">
      <NewsletterPopup />
      <BannerCarousel />
      <Header />
      <RoomShowcase />
      <DiningShowcase />
      <ExperiencesShowcase />
      <Gallery />
      <HowToGetHere />
      <FAQ />
      <Stories />
      <Footer />
    </main>
  );
}
