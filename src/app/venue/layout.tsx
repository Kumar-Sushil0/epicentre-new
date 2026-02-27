import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { localBusinessSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "Estate", url: "https://thesilent.club/venue" }
]);

export const metadata: Metadata = {
  title: "Estate & Venue | The Silent Club",
  description: "Explore our private estate featuring wildlife areas, accommodation options, dining spaces, practice facilities, assembly halls, and symbolic architecture. Designed for silence, solitude, and intentional living.",
  keywords: ["silent retreat venue", "private estate India", "retreat facilities", "meditation spaces", "yoga retreat venue", "wellness estate", "nature retreat"],
  alternates: {
    canonical: "https://thesilent.club/venue",
  },
  openGraph: {
    title: "Estate & Venue | The Silent Club",
    description: "Explore our private estate designed for structured silence and deep work.",
    url: "https://thesilent.club/venue",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "The Silent Club Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate & Venue | The Silent Club",
    description: "Explore our private estate designed for structured silence and deep work.",
    images: ["/og.jpeg"],
  },
};

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbs} />
      {children}
    </>
  );
}
