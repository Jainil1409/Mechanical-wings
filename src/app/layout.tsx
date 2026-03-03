import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mechanical Wings Air Condition | AC Sales, Service & Repair in Ahmedabad",
  description:
    "Expert AC installation, repair & maintenance services in Ahmedabad. Authorized dealer for Daikin, Mitsubishi, Blue Star, Carrier & more. Call +91 7801929198 for free consultation.",
  keywords:
    "AC repair Ahmedabad, AC installation, Split AC service, VRF system, Daikin AC, Blue Star AC, Mitsubishi AC, HVAC services Gujarat",
  authors: [{ name: "Mechanical Wings Air Condition" }],
  openGraph: {
    title: "Mechanical Wings Air Condition | AC Sales & Service Ahmedabad",
    description:
      "Professional AC installation, repair & AMC services. 13+ brand partners. 10+ years experience.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
