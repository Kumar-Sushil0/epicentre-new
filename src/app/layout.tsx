import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "./context/ShopContext";
import SmoothScroll from "./components/SmoothScroll";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "The Silent Club",
  description: "Silence Reveals Direction",
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
        <ShopProvider>
          <SmoothScroll />
          {children}
          <FloatingWhatsApp />
        </ShopProvider>
      </body>
    </html>
  );
}
