import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { serviceSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "Services", url: "https://thesilent.club/services" }
]);

export const metadata: Metadata = {
  title: "Services | The Silent Club",
  description: "Explore our three core services: Solitude as a Service for self-directed silence, Experiment as a Service for testing ideas without pressure, and Residency as a Service for multi-day immersions around high-stakes questions.",
  keywords: ["silent retreat services", "solitude practice", "creative residency", "deep work programs", "mindfulness services", "structured silence", "retreat programs"],
  alternates: {
    canonical: "https://thesilent.club/services",
  },
  openGraph: {
    title: "Services | The Silent Club",
    description: "Solitude, Experiment, and Residency programs designed for structured silence and deep work.",
    url: "https://thesilent.club/services",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "The Silent Club Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | The Silent Club",
    description: "Solitude, Experiment, and Residency programs designed for structured silence and deep work.",
    images: ["/og.jpeg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbs} />
      {children}
    </>
  );
}
