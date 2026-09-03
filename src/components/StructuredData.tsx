import React from "react";

export const StructuredData: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": "https://dwarindia.com/#localbusiness",
    name: "DWAR INDIA",
    legalName: "DWAR INDIA",
    alternateName: [
      "Dwar India Natural Stone",
      "Dwar India Stone Door Frames",
      "Dwar India Chokhat Fabrication",
    ],
    url: "https://dwarindia.com",
    logo: "https://dwarindia.com/icon",
    image: [
      "https://dwarindia.com/opengraph-image",
      "https://dwarindia.com/twitter-image",
    ],
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and heavy Bijoliya roofing slabs. Delivered across India.",
    founder: {
      "@type": "Person",
      name: "Mahendra Kumar Saini",
      jobTitle: "Proprietor & Managing Director",
    },
    taxID: "08UBJPS6187Q1ZX",
    telephone: ["+919828123281", "+917852873116"],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Cheque, RTGS",
    areaServed: [
      "Rajasthan",
      "Gujarat",
      "Maharashtra",
      "Delhi NCR",
      "Uttar Pradesh",
      "Madhya Pradesh",
      "Punjab",
      "Haryana",
      "Karnataka",
      "Telangana",
    ],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://instagram.com/dwar_india_official",
      "https://wa.me/919828123281",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Natural Stone Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Natural Stone Door Frames (Chokhats)",
            description:
              "Machine-cut single and double Paitam stone door frames, 100% termite proof, zero monsoon swelling.",
            material: "Natural Kota Limestone & Bijoliya Sandstone",
            category: "Building Materials > Door Frames",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "DWAR INDIA",
              },
            },
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
            category: "Building Materials > Flooring Slabs",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "DWAR INDIA",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Bijoliya Heavy Roofing Pati Slabs",
            description:
              "High flexural strength quartzitic sandstone slabs for verandahs, pergolas, and roof spans.",
            material: "Bijoliya Quartzitic Sandstone",
            category: "Building Materials > Roofing Slabs",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "DWAR INDIA",
              },
            },
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why choose a Natural Stone Chokhat over wood or UPVC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike wood, natural stone door frames (Chokhats) are 100% immune to termite infestations, never rot from floor moisture, and will never expand or jam during monsoon seasons. They easily last 100+ years.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Single Paitam and Double Paitam Chokhats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Paitam is the machine-cut rebate groove that holds the door. Single Paitam has one groove for a single door shutter. Double Paitam has two parallel grooves allowing both a main wooden door and an insect/mosquito mesh door on the same frame.",
        },
      },
      {
        "@type": "Question",
        name: "Can standard hinges and doors be fixed into stone Chokhats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Holes are drilled into the stone frame using standard masonry bits, and nylon rawl plugs or SS screws are used to secure standard brass, SS, or antique hinges tightly.",
        },
      },
      {
        "@type": "Question",
        name: "How does Kota Stone flooring compare to tiles or marble?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kota Stone is a high-density natural limestone with remarkable thermal properties—it stays naturally cool underfoot in hot summers and can be repolished decades later to look brand new.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver truckloads directly to construction sites across India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We dispatch truckload orders directly from Suket (Kota) and Bijoliya (Bhilwara) manufacturing plants with official GST billing and reliable pan-India logistics.",
        },
      },
    ],
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
        name: "Fabrication Journey",
        item: "https://dwarindia.com/#fabrication-journey",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "FAQ & Guide",
        item: "https://dwarindia.com/#faq",
      },
      {
        "@type": "ListItem",
        position: 6,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
