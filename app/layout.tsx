import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NavigationPremium } from "@/components/NavigationPremium";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIGIFLOW - Agence Acquisition Client | Google Ads & Meta Ads - ROI x4 Garanti",
  description: "Spécialiste acquisition client avec Google Ads, Meta Ads, SEO & Landing Pages. ROI x4 minimum garanti ou remboursé. 2 projets disponibles septembre 2025.",
  keywords: "acquisition client, Google Ads, Meta Ads, Facebook Ads, Instagram Ads, ROI garanti, agence marketing, landing pages, SEO acquisition, Marseille, France",
  authors: [{ name: "DIGIFLOW Agency" }],
  creator: "DIGIFLOW",
  publisher: "DIGIFLOW",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digiflow-agency.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIGIFLOW - Multipliez vos clients par 4. ROI x4 Garanti.",
    description: "Agence spécialisée acquisition client : Google Ads, Meta Ads, Landing Pages optimisées. ROI x4 minimum garanti ou remboursé. Disponibilités limitées.",
    url: "https://digiflow-agency.fr",
    siteName: "DIGIFLOW",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DIGIFLOW - Agence d'Acquisition Digitale",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIFLOW - Acquisition Client ROI x4 Garanti",
    description: "Google Ads, Meta Ads & Landing Pages. ROI x4 minimum garanti ou remboursé.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        <Preloader />
        <AnimatedCursor />
        <NavigationPremium />
        <main className="pt-20">
          {children}
        </main>
        <CalendlyProvider />
      </body>
    </html>
  );
}
