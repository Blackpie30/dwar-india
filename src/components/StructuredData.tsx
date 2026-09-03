import React from "react";

export const StructuredData: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dwarindia.com/#localbusiness",
    name: "DWAR INDIA",
    legalName: "DWAR INDIA",
    alternateName: "Dwar India Natural Stone & Chokhat Fabrication",
    url: "https://dwarindia.com",
    logo: "https://dwarindia.com/icon",
    image: "https://dwarindia.com/opengraph-image",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs.",
    founder: {
      "@type": "Person",
      name: "Mahendra Kumar Saini",
      jobTitle: "Proprietor & Managing Director",
    },
    taxID: "08UBJPS6187Q1ZX",
    telephone: ["+919828123281", "+917852873116"],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Cheque",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Industrial Area, Suket & Ramganjmandi Belt",
        addressLocality: "Kota",
        addressRegion: "Rajasthan",
        postalCode: "326517",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Quarry Corridor",
        addressLocality: "Bijoliya",
        addressRegion: "Rajasthan",
        postalCode: "311602",
        addressCountry: "IN",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.6473,
      longitude: 75.9529,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [
      "https://instagram.com/dwar_india_official",
      "https://wa.me/919828123281",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Natural Stone Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Natural Stone Door Frames (Chokhats)",
            description:
              "Machine-cut single and double Paitam stone door frames, 100% termite proof, zero swelling.",
            material: "Natural Kota Limestone / Bijoliya Sandstone",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Original Kota Stone Flooring Slabs",
            description:
              "High-density naturally cool flooring slabs in mirror polish, honed, and rough finishes.",
            material: "Kota Stone Limestone",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Bijoliya Heavy Roofing Pati Slabs",
            description:
              "High flexural strength sandstone slabs for verandahs, pergolas, and roof spans.",
            material: "Bijoliya Quartzitic Sandstone",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dwarindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stone Collection",
        item: "https://dwarindia.com/#products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Chokhat Anatomy & Construction",
        item: "https://dwarindia.com/#craftsmanship",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Factory Credentials & Contact",
        item: "https://dwarindia.com/#credentials",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
