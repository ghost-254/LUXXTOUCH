// layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientModalSetup from "@/components/ClientModalSetup";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "Lux",
  description: "Online Massage Booking Service. Luxx Touch is an online massage booking service in Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
        <ClientModalSetup /> {/* Include the client component */}
        <div id="__next">{children}</div>
        </main>
        <Footer/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
