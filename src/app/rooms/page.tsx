import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomsSidebar from "../components/rooms/RoomsSidebar";
import RoomsHero from "../components/rooms/RoomsHero";
import RoomSection from "../components/rooms/RoomSection";
import RoomsCTA from "../components/rooms/RoomsCTA";
import ClosingSection from "../components/ClosingSection";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-earth-900 text-earth-100  ">
      <Header />
      <RoomsHero />
      <div className="layout-container flex h-full grow flex-col px-4 py-8 lg:px-12 lg:py-16 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          <RoomsSidebar />

          {/* Main Scrollable Content */}
          <main className="lg:col-span-9 flex flex-col gap-24 lg:gap-40 pb-20">

            {/* Private Rooms */}
            <RoomSection
              id="private-rooms"
              number="01"
              category="Sanctuary"
              title="Private Room"
              description="A fully private space for withdrawal and rest. Designed to remove interruption and external signal."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc"
              imageAlt="Luxury dark bedroom with large window overlooking misty forest"
              imagePosition="left"
              features={[
                { icon: "king_bed", text: "King-size bed" },
                { icon: "desk", text: "Study & Stationery Corner" },
                { icon: "wifi_off", text: "Tech-free interior" },
                { icon: "deck", text: "Outdoor sit-out for stillness" },
              ]}
              featuresStyle="list"
              buttons={[
                { text: "Check Availability", href: "/bookings", variant: "secondary" },
              ]}
            />

            {/* Dark Rooms */}
            <RoomSection
              id="dark-rooms"
              number="02"
              category="Dark Room"
              title="Complete Darkness"
              description="A fully light-sealed space designed for extended stillness and sensory withdrawal. Used for deep rest, introspection, and uninterrupted self-observation."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc"
              imageAlt="Completely dark room with no light sources"
              imagePosition="right"
              features={[
                { icon: "dark_mode", text: "Total light isolation" },
                { icon: "bed", text: "Minimal interior with bed and seated space" },
                { icon: "wifi_off", text: "No devices, no external input" },
                { icon: "room_service", text: "Food delivered without visual contact" },
              ]}
              featuresStyle="list"
              buttons={[{ text: "Check Availability", href: "/bookings", variant: "secondary" }]}
            />

            {/* Shared Dorms */}
            <RoomSection
              id="shared-dorms"
              number="03"
              category="Community"
              title="Shared Dorm"
              description="Shared sleeping with clear boundaries. Built for quiet coexistence rather than interaction."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0MrUgxtI24ctYnNVK7t_0ipeTTqmWsJCLm5cpM9SR9eaqccitEqKNUHpiTcRy5_Reud0UU-OZvZFRwaKjCVFUxCCcr5x80ezOMsIk6ZYNAp5-rcQc65w_rIijqQ2xI_DTUrmhpSLXFkH-PJ7tC7F1e1CzGWzy00PXwmWLXC-UqJ9bg6TQfqN1eqg1OkF_v17JlAL4MB-EajLCUR26TuPjjyYiFzsiW8GD6zQrVwkgD66Kefyszm0kHtCfGkNkqLkrYKMViUchwie"
              imageAlt="Cozy wooden bunk beds in a dimly lit rustic room"
              imagePosition="right"
              features={[
                { icon: "desk", text: "Study Desk & Secure lockers" },
                { icon: "open_in_full", text: "Spacious & Open setting" },
                { icon: "bed", text: "Individual Sleeping beds" },
                { icon: "ac_unit", text: "Climate-controlled space" },
              ]}
              featuresStyle="list"
              buttons={[{ text: "Check Availability", href: "/bookings", variant: "primary" }]}
            />

            {/* Minimalist Tents */}
            <RoomSection
              id="minimalist-tents"
              number="05"
              category="Nature"
              title="Minimalist Tents"
              description="Sleeping closer to land and weather. Minimal shelter that prioritizes presence over comfort."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuATOA-7cEFkRwrPfO1Yi_GsWajtQm9kjP7vPcdoMkklExVYKXq1iHwHSN46TT9UzGXZ2GSvZNBTB1p-eMuuUvXuyuTueNOFBENS8jqs4my9pGxB5vcyr7x9voKTIRePCWmgmZr5a4WBdtkSTU9GmvHrQnQEscuZ9JMvgYXNAi22rrvPBBd93C8N_mao7s6WAkTydpuvYyx_ygEtCYiiCq2O0dMsBGO3LlMAosUfSCTq_BUAbUojIr8PTfDo-3Pec-w-I7ddy4UoeU12"
              imageAlt="Illuminated tent camping under a starry night sky in forest"
              imagePosition="left"
              features={[
                { icon: "forest", text: "Elevated canvas structured tent" },
                { icon: "wc", text: "Access to common bath & washrooms" },
                { icon: "fireplace", text: "Fire pit access" },
                { icon: "umbrella", text: "Natural weatherproofing" },
              ]}
              featuresStyle="list"
              buttons={[{ text: "Check Availability", href: "/bookings", variant: "secondary" }]}
            />

            {/* Community Hall */}
            <RoomSection
              id="community-hall"
              number="04"
              category="Gathering"
              title="Community Hall"
              description="A shared indoor space for reading, reflection, and quiet time. Not intended for sleeping."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo"
              imageAlt="Warm interior with fireplace and comfortable armchairs"
              imagePosition="right"
              features={[
                { icon: "roofing", text: "Covered and insulated structure" },
                { icon: "menu_book", text: "Reading and reflection space" },
                { icon: "wc", text: "Access to common bath & washrooms" },
                { icon: "self_improvement", text: "Quiet contemplation area" },
              ]}
              featuresStyle="list"
              buttons={[{ text: "View Schedule", href: "#", variant: "secondary" }]}
            />


          </main>
        </div>
      </div>
      <ClosingSection />
      <Footer />
    </main>
  );
}
