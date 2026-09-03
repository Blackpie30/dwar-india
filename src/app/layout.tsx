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
    default: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs Manufacturer",
    template: "%s | DWAR INDIA",
  },
  description:
    "Official Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and high-load Bijoliya roofing slabs. Direct factory dispatch with GST billing across India.",
  keywords: [
    "Dwar India",
    "Stone Chokhat",
    "Stone Door Frame",
    "Stone Chokhat Price",
    "Single Paitam Chokhat",
    "Double Paitam Chokhat",
    "Kota Stone Flooring Slabs",
    "Original Suket Kota Stone",
    "Bijoliya Sandstone Slabs",
    "Bijoliya Roofing Pati",
    "Natural Stone Door Frames Rajasthan",
    "Bai Chokhat",
    "Paya Chokhat",
    "Utranga Chokhat",
    "Mahendra Kumar Saini",
    "Rajasthan Stone Factory",
    "Termite Proof Door Frames",
  ],
  authors: [{ name: "Mahendra Kumar Saini", url: "https://dwarindia.com" }],
  creator: "DWAR INDIA",
  publisher: "DWAR INDIA",
  category: "Building Materials & Architectural Stone Fabrication",
  classification: "Natural Stone Manufacturer & Wholesaler",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "https://dwarindia.com",
      "hi-IN": "https://dwarindia.com",
    },
  },
  openGraph: {
    title: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs. 100+ years lifespan.",
    url: "https://dwarindia.com",
    siteName: "DWAR INDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dwar India - Architectural Natural Stone Door Frames & Slabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DWAR INDIA | Natural Stone Door Frames (Chokhats) & Slabs",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs.",
    creator: "@dwar_india_official",
    images: ["/twitter-image"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Kota, Rajasthan, India",
    "geo.position": "24.6473;75.9529",
    ICBM: "24.6473, 75.9529",
  },
  verification: {
    google: "google91a3b16830da3737",
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
