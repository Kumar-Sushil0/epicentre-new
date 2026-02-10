import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Philosophy from "./components/Philosophy";
import OurPhilosophy from "./components/OurPhilosophy";
import WhatThisIsNot from "./components/WhatThisIsNot";
import EPiCentreDifference from "./components/EPiCentreDifference";
import Accommodation from "./components/Accommodation";
import ImageCarousel from "./components/ImageCarousel";
import DiningVariant from "./components/DiningVariant";
import Experiences from "./components/Experiences";
import Location from "./components/Location";
import Footer from "./components/Footer";
import PathOfLove from "./components/PathOfLove";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Philosophy />
      <OurPhilosophy />
      <PathOfLove />

      <WhatThisIsNot />

      <Accommodation />
      <ImageCarousel />

      <DiningVariant />
      <Experiences />
      <Location />
      <Reviews />
      <Footer />
    </main>
  );
}
