import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "PCOS Care — A better way to understand your PCOS journey",
    template: "%s · PCOS Care",
  },
  description:
    "Cycle tracking, symptom awareness, movement and personal support in one thoughtful wellness experience.",
  openGraph: {
    title: "PCOS Care",
    description:
      "Understand your body. Build healthier habits. Get the support you need.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#F5F1EA] text-[#1F2421] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
