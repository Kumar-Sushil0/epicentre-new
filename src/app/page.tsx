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
import ServicesOffering from "./components/ServicesOffering";
import Location from "./components/Location";
import Footer from "./components/Footer";
import PathOfLove from "./components/PathOfLove";
import Reviews from "./components/Reviews";
import DesignedDeliberately from "./components/DesignedDeliberately";
import VoidAndFormats from "./components/VoidAndFormats";
import CycleInquiryForm from "./components/CycleInquiryForm";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Philosophy />
      <DesignedDeliberately />
      <VoidAndFormats />
      
      <WhatThisIsNot />
      <DiningVariant />
      <Location />
      <ServicesOffering />
      <CycleInquiryForm />
     
      <Footer />
    </main>
  );
}
