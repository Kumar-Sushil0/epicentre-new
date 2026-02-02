import type { Metadata } from "next";
import "./globals.css";
import { EventCalendarProvider } from "./contexts/EventCalendarContext";
import EventCalendarModal from "./components/EventCalendarModal";
import SmoothScroll from "./components/SmoothScroll";

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
      <body className="bg-earth-900 text-earth-100 antialiased">
        <SmoothScroll />
        <EventCalendarProvider>
          {children}
          <EventCalendarModal />
        </EventCalendarProvider>
      </body>
    </html>
  );
}
