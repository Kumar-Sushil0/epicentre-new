import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Philosophy from "./components/Philosophy";
import WhatThisIsNot from "./components/WhatThisIsNot";
import EPiCentreDifference from "./components/EPiCentreDifference";
import Accommodation from "./components/Accommodation";
import DiningVariant from "./components/DiningVariant";
import Experiences from "./components/Experiences";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Philosophy />

      <WhatThisIsNot />

      <Accommodation />

      <DiningVariant />
      <Experiences />
      <Location />
      <Footer />
    </main>
  );
}
