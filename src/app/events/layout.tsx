import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "Events", url: "https://thesilent.club/events" }
]);

export const metadata: Metadata = {
  title: "Events & Programs | The Silent Club",
  description: "Discover upcoming events, workshops, and programs at The Silent Club. Join structured silence sessions, creative residencies, and transformative experiences designed for deep work and personal growth.",
  keywords: ["silent retreat events", "mindfulness workshops", "meditation programs", "creative residency", "wellness events", "retreat calendar", "upcoming programs"],
  alternates: {
    canonical: "https://thesilent.club/events",
  },
  openGraph: {
    title: "Events & Programs | The Silent Club",
    description: "Discover upcoming events, workshops, and programs designed for structured silence and deep work.",
    url: "https://thesilent.club/events",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "The Silent Club Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Programs | The Silent Club",
    description: "Discover upcoming events, workshops, and programs designed for structured silence and deep work.",
    images: ["/og.jpeg"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={breadcrumbs} />
      {children}
    </>
  );
}
