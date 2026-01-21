import Header from "./components/Header";
import BannerCarousel from "./components/BannerCarousel";
import ReasonOfExistence from "./components/ReasonOfExistence";
import WhatThisIsNot from "./components/WhatThisIsNot";
import BookingWidget from "./components/BookingWidget";
import UniqueBenefits from "./components/UniqueBenefits";
import BookWithIrada from "./components/BookWithIrada";
import RoomShowcase from "./components/RoomShowcase";
import DiningShowcase from "./components/DiningShowcase";
import ExperiencesShowcase from "./components/ExperiencesShowcase";
import Gallery from "./components/Gallery";
import HowToGetHere from "./components/HowToGetHere";
import FAQ from "./components/FAQ";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/NewsletterPopup";
import VerticalCTA from "./components/VerticalCTA";

export default function Home() {
  return (
    <main className="relative">
      <VerticalCTA />
      <NewsletterPopup />
      <BannerCarousel />
      <Header />
      <ReasonOfExistence />
      <WhatThisIsNot />
      <BookingWidget />
      <UniqueBenefits />
      <Stories />
      <BookWithIrada />
      <RoomShowcase />
      <DiningShowcase />
      <ExperiencesShowcase />
      <Gallery />
      <HowToGetHere />
      <FAQ />
      <Footer />
    </main>
  );
}
