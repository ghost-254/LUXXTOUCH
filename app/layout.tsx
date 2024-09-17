// layout.tsx

import type { Metadata } from "next";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientModalSetup from "@/components/ClientModalSetup";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics"

export const metadata: Metadata = {
  title: "Lux Touch",
  description: "Best Online Massage Booking Service in Kenya and East Africa. Lux is an online massage booking service in Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics />
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          <ClientModalSetup /> {/* Include the client component */}
          <div id="__next">{children}</div>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
