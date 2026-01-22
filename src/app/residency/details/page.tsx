import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResidencyDetailsHero from "../../components/residency/details/ResidencyDetailsHero";
import ResidencyOverview from "../../components/residency/details/ResidencyOverview";
import ResidencyPractitioner from "../../components/residency/details/ResidencyPractitioner";
import ResidencySchedule from "../../components/residency/details/ResidencySchedule";
import ResidencyInclusions from "../../components/residency/details/ResidencyInclusions";
import ResidencyPricing from "../../components/residency/details/ResidencyPricing";
import ResidencyLocation from "../../components/residency/details/ResidencyLocation";
import ResidencyBookingForm from "../../components/residency/details/ResidencyBookingForm";
import ResidencyMobileBooking from "../../components/residency/details/ResidencyMobileBooking";

export default function ResidencyDetailsPage() {
  return (
    <main className="bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <ResidencyDetailsHero />
      <div className="bg-earth-900 min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-20">
              <ResidencyOverview />
              <ResidencyPractitioner />
              <ResidencySchedule />
              <ResidencyInclusions />
              <ResidencyPricing />
              <ResidencyLocation />
            </div>
            <ResidencyBookingForm />
          </div>
        </div>
      </div>
      <ResidencyMobileBooking />
      <Footer />
    </main>
  );
}
