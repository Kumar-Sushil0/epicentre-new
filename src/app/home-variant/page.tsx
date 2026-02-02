import Header from "../components/Header";
import HeroVariant from "../components/HeroVariant";
import BookingForm from "../components/BookingForm";
import PhilosophyVariant from "../components/PhilosophyVariant";
import WhatThisIsNotVariant from "../components/WhatThisIsNotVariant";
import EPiCentreDifferenceVariant from "../components/EPiCentreDifferenceVariant";
import AccommodationVariant from "../components/AccommodationVariant";
import DiningVariant from "../components/DiningVariant";
import Experiences from "../components/Experiences";
import Location from "../components/Location";
import FooterVariant from "../components/FooterVariant";

export default function HomeVariant() {
  return (
    <main className=" ">
      <Header />
      <HeroVariant />
      <PhilosophyVariant />
      <BookingForm />
      <WhatThisIsNotVariant />
      <EPiCentreDifferenceVariant />
      <AccommodationVariant />
      <DiningVariant />
      <Experiences />
      <Location />
      <FooterVariant />
    </main>
  );
}
