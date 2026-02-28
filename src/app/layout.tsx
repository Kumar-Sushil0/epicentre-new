import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthContext";
import SmoothScroll from "./components/SmoothScroll";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import VerticalBookNow from "./components/VerticalBookNow";
import NewsletterPopup from "./components/NewsletterPopup";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/utils/structuredData";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "The Silent Club | Private Estate for Structured Silence & Deep Work",
  description: "Experience structured silence at our private estate in India. Designed for deep work, decision clarity, and personal transformation through intentional solitude and mindfulness practices.",
  keywords: ["silent retreat", "deep work", "meditation retreat", "solitude", "mindfulness", "private estate", "India retreat", "structured silence", "decision clarity"],
  authors: [{ name: "The Silent Club" }],
  manifest: '/manifest.json',
  openGraph: {
    title: "The Silent Club | Silence as a Service",
    description: "A private estate designed for structured silence, deep work, and decision clarity.",
    url: "https://thesilent.club",
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
    title: "The Silent Club | Silence as a Service",
    description: "A private estate designed for structured silence, deep work, and decision clarity.",
    images: ["/og.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lidbucketnew.s3.ap-south-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className="bg-earth-900 text-earth-100 antialiased">
        <AuthProvider>
          <ShopProvider>
            <SmoothScroll />
            {children}
            <NewsletterPopup />


          </ShopProvider>
        </AuthProvider>
        <GoogleAnalytics gaId="G-75RHKV8F97" />
      </body>
    </html>
  );
}
