import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "Contact", url: "https://thesilent.club/contact" }
]);

export const metadata: Metadata = {
  title: "Contact & Volunteer | The Silent Club",
  description: "Join The Silent Club as a volunteer. Minimum 3-month commitment includes food, accommodation, and full estate access. Work in facility management, hospitality, or content creation while experiencing structured silence.",
  keywords: ["volunteer opportunity", "retreat volunteer", "work exchange India", "volunteer program", "contact silent club", "retreat jobs", "mindfulness volunteer"],
  alternates: {
    canonical: "https://thesilent.club/contact",
  },
  openGraph: {
    title: "Contact & Volunteer | The Silent Club",
    description: "Join us as a volunteer and experience structured silence while contributing to our community.",
    url: "https://thesilent.club/contact",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact The Silent Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Volunteer | The Silent Club",
    description: "Join us as a volunteer and experience structured silence while contributing to our community.",
    images: ["/og.jpeg"],
  },
};

export default function ContactLayout({
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
