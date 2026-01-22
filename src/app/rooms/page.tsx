import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomsSidebar from "../components/rooms/RoomsSidebar";
import RoomsIntro from "../components/rooms/RoomsIntro";
import RoomSection from "../components/rooms/RoomSection";
import RoomsCTA from "../components/rooms/RoomsCTA";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <div className="layout-container flex h-full grow flex-col px-4 py-8 lg:px-12 lg:py-16 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          <RoomsSidebar />

          {/* Main Scrollable Content */}
          <main className="lg:col-span-9 flex flex-col gap-24 lg:gap-40 pb-20">
            <RoomsIntro />

            {/* Private Rooms */}
            <RoomSection
              id="private-rooms"
              number="01"
              category="Sanctuary"
              title="The Private Sanctuary"
              description="A secluded haven designed for absolute solitude. Features an en-suite rain shower, panoramic forest views, and organic cotton linens. A strict tech-free policy ensures mental clarity from the moment you step inside."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc"
              imageAlt="Luxury dark bedroom with large window overlooking misty forest"
              imagePosition="left"
              features={[
                { icon: "king_bed", text: "King-size organic mattress" },
                { icon: "wifi_off", text: "Digital detox zone" },
                { icon: "shower", text: "Rain shower en-suite" },
                { icon: "deck", text: "Private meditation deck" },
              ]}
              buttons={[
                { text: "Check Availability", href: "/bookings", variant: "secondary" },
                { text: "View Floorplan", href: "#", variant: "secondary" },
              ]}
              badge={{ text: "Gallery", position: "bottom-left" }}
            />

            {/* Shared Dorms */}
            <RoomSection
              id="shared-dorms"
              number="02"
              category="Community"
              title="The Shared Dorm"
              description="Community and privacy in balance. Our dorms feature solid walnut bunks with heavy velvet privacy curtains, individual reading lights, and lockable storage for your essentials. Connect with fellow travelers in a space of shared silence."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0MrUgxtI24ctYnNVK7t_0ipeTTqmWsJCLm5cpM9SR9eaqccitEqKNUHpiTcRy5_Reud0UU-OZvZFRwaKjCVFUxCCcr5x80ezOMsIk6ZYNAp5-rcQc65w_rIijqQ2xI_DTUrmhpSLXFkH-PJ7tC7F1e1CzGWzy00PXwmWLXC-UqJ9bg6TQfqN1eqg1OkF_v17JlAL4MB-EajLCUR26TuPjjyYiFzsiW8GD6zQrVwkgD66Kefyszm0kHtCfGkNkqLkrYKMViUchwie"
              imageAlt="Cozy wooden bunk beds in a dimly lit rustic room"
              imagePosition="right"
              specialFeatures={[
                { icon: "curtains", title: "Privacy Curtains", description: "Heavy velvet for complete light blockage." },
                { icon: "shelves", title: "Secure Storage", description: "Large lockers for luggage and valuables." },
              ]}
              buttons={[{ text: "Check Availability", href: "/bookings", variant: "primary" }]}
            />

            {/* Minimalist Tents */}
            <RoomSection
              id="minimalist-tents"
              number="03"
              category="Nature"
              title="Minimalist Tents"
              description="Immerse yourself completely in the elements. Our elevated canvas tents offer the raw sounds of nature with just enough comfort. Heated blankets, lantern lighting, and a private fire pit create a primal yet cozy atmosphere."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuATOA-7cEFkRwrPfO1Yi_GsWajtQm9kjP7vPcdoMkklExVYKXq1iHwHSN46TT9UzGXZ2GSvZNBTB1p-eMuuUvXuyuTueNOFBENS8jqs4my9pGxB5vcyr7x9voKTIRePCWmgmZr5a4WBdtkSTU9GmvHrQnQEscuZ9JMvgYXNAi22rrvPBBd93C8N_mao7s6WAkTydpuvYyx_ygEtCYiiCq2O0dMsBGO3LlMAosUfSCTq_BUAbUojIr8PTfDo-3Pec-w-I7ddy4UoeU12"
              imageAlt="Illuminated tent camping under a starry night sky in forest"
              imagePosition="left"
              features={[
                { icon: "forest", text: "Deep forest location" },
                { icon: "fireplace", text: "Private fire pit & firewood" },
                { icon: "light_mode", text: "Battery lantern lighting" },
              ]}
              featuresStyle="list"
              buttons={[{ text: "Check Availability", href: "/bookings", variant: "secondary" }]}
              badge={{ text: "Seasonal", position: "top-right" }}
            />

            {/* Community Hall */}
            <RoomSection
              id="community-hall"
              number="04"
              category="Gathering"
              title="The Community Hall"
              description="A shared space for reflection, reading, and silent tea ceremonies. The Hall features a massive stone fireplace, a curated library of wellness literature, and comfortable seating nooks. *Not for sleeping accommodations.*"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo"
              imageAlt="Warm interior with fireplace and comfortable armchairs"
              imagePosition="right"
              highlightBox={{
                title: "Tea Ceremony Daily",
                description: "Join us every morning at 7:00 AM for a silent herbal tea tasting session.",
                linkText: "View Schedule",
                linkHref: "#",
              }}
            />

            <RoomsCTA />
          </main>
        </div>
      </div>
      <Footer />
    </main>
  );
}
