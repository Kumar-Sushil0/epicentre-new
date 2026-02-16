import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import WhatThisIsNot from "./components/WhatThisIsNot";
import DiningVariant from "./components/DiningVariant";
import ServicesOffering from "./components/ServicesOffering";
import Location from "./components/Location";
import Footer from "./components/Footer";
import DesignedDeliberately from "./components/DesignedDeliberately";
import VoidAndFormats from "./components/VoidAndFormats";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Philosophy />
      <DesignedDeliberately />
      <VoidAndFormats />
      

      <DiningVariant/>
      <Location />
      <ServicesOffering />
     
      <Footer />
    </main>
  );
}
