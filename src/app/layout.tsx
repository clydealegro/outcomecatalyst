import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Outcome Catalyst",
  description: "Unified operating layer for investment firms and healthcare organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        {/* Spacer for fixed navbar */}
        <div className="h-16" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
