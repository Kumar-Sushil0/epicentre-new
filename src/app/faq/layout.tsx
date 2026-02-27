import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/utils/structuredData";
import { faqData } from "./faqData";

const faqSchema = generateFAQSchema(faqData);
const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "FAQ", url: "https://thesilent.club/faq" }
]);

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | The Silent Club",
  description: "Find answers to common questions about The Silent Club, our services, booking process, accommodation, facilities, volunteer programs, and what to expect during your stay at our private estate.",
  keywords: ["silent retreat faq", "retreat questions", "booking information", "accommodation details", "volunteer faq", "retreat guidelines", "what to expect"],
  alternates: {
    canonical: "https://thesilent.club/faq",
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions | The Silent Club",
    description: "Find answers to common questions about The Silent Club and our services.",
    url: "https://thesilent.club/faq",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "The Silent Club FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | The Silent Club",
    description: "Find answers to common questions about The Silent Club and our services.",
    images: ["/og.jpeg"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbs} />
      {children}
    </>
  );
}
