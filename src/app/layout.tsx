import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dwarindia.com"),
  title: {
    default: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs",
    template: "%s | DWAR INDIA",
  },
  description:
    "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs. Delivered across India.",
  keywords: [
    "Dwar India",
    "Stone Chokhat",
    "Stone Door Frame",
    "Kota Stone Flooring",
    "Bijoliya Stone Slabs",
    "Natural Stone Door Frames",
    "Bai Chokhat",
    "Paya Chokhat",
    "Utranga Chokhat",
    "Single Paitam",
    "Double Paitam",
    "Mahendra Kumar Saini",
    "Rajasthan Stone Manufacturer",
  ],
  authors: [{ name: "Mahendra Kumar Saini", url: "https://dwarindia.com" }],
  creator: "DWAR INDIA",
  publisher: "DWAR INDIA",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs.",
    url: "https://dwarindia.com",
    siteName: "DWAR INDIA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs.",
    creator: "@dwar_india_official",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[#C9BFB2] selection:text-[#121110] min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
