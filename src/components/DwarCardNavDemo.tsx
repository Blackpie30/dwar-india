"use client";

import React from "react";
import { CardNav, CardNavItem } from "@/components/ui/CardNav";

export const DwarCardNav: React.FC = () => {
  const navItems: CardNavItem[] = [
    {
      label: "Products",
      bgColor: "#1C1A17",
      textColor: "#E4E2DC",
      links: [
        { label: "Stone Chokhats", href: "#products", ariaLabel: "Stone Door Frames" },
        { label: "Kota Slabs", href: "#products", ariaLabel: "Kota Stone Flooring" },
        { label: "Bijoliya Pati", href: "#products", ariaLabel: "Bijoliya Roofing Slabs" },
      ],
    },
    {
      label: "Anatomy",
      bgColor: "#28241F",
      textColor: "#E4E2DC",
      links: [
        { label: "Paya & Utranga", href: "#craftsmanship", ariaLabel: "Chokhat Parts" },
        { label: "Single/Double Paitam", href: "#craftsmanship", ariaLabel: "Rebate Grooves" },
        { label: "CNC Edge Moldings", href: "#craftsmanship", ariaLabel: "Edge Profiles" },
      ],
    },
    {
      label: "Direct Contact",
      bgColor: "#352F27",
      textColor: "#E4E2DC",
      links: [
        { label: "+91 98281 23281", href: "tel:+919828123281", ariaLabel: "Call Primary Hotline" },
        { label: "+91 78528 73116", href: "tel:+917852873116", ariaLabel: "Call Secondary Desk" },
        { label: "GST: 08UBJPS6187Q1ZX", href: "#credentials", ariaLabel: "GST Details" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4">
      <CardNav
        items={navItems}
        baseColor="var(--bg-card)"
        menuColor="var(--text-primary)"
        buttonText="Get WhatsApp Rates"
        ease="power3.out"
      />
    </div>
  );
};

export default DwarCardNav;
