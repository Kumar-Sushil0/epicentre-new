import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";
import { EventCalendarProvider } from "./contexts/EventCalendarContext";
import EventCalendarModal from "./components/EventCalendarModal";

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "EPiCentre - Dark Earthy Home Page",
  description: "A sanctuary designed for silence, introspection, and a return to basics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${notoSans.variable} bg-earth-900 text-earth-100 font-display antialiased`}
      >
        <EventCalendarProvider>
          {children}
          <EventCalendarModal />
        </EventCalendarProvider>
      </body>
    </html>
  );
}
