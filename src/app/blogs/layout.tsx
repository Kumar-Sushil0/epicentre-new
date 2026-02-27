import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/utils/structuredData";

const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://thesilent.club" },
  { name: "Blog", url: "https://thesilent.club/blogs" }
]);

export const metadata: Metadata = {
  title: "Blog & Insights | The Silent Club",
  description: "Read articles, insights, and stories about structured silence, deep work, mindfulness practices, and intentional living. Explore our philosophy and learn from experiences at The Silent Club.",
  keywords: ["silent retreat blog", "mindfulness articles", "deep work insights", "meditation blog", "solitude writing", "intentional living", "silence philosophy"],
  alternates: {
    canonical: "https://thesilent.club/blogs",
  },
  openGraph: {
    title: "Blog & Insights | The Silent Club",
    description: "Read articles and insights about structured silence, deep work, and intentional living.",
    url: "https://thesilent.club/blogs",
    siteName: "The Silent Club",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "The Silent Club Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | The Silent Club",
    description: "Read articles and insights about structured silence, deep work, and intentional living.",
    images: ["/og.jpeg"],
  },
};

export default function BlogsLayout({
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
