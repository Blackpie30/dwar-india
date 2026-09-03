"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { IntroDwarPortal } from "@/components/IntroDwarPortal";
import { Hero3D } from "@/components/Hero3D";
import { ProductVault } from "@/components/ProductVault";
import { Craftsmanship } from "@/components/Craftsmanship";
import { GsapStoneTimeline } from "@/components/GsapStoneTimeline";
import { StoneStackShowcase } from "@/components/StoneStackShowcase";
import { CorporateTrust } from "@/components/CorporateTrust";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArchitecturalScrollHero } from "@/components/ArchitecturalScrollHero";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[#C9BFB2] selection:text-[#121110]">
        {/* Scroll Progress Bar at the top */}
        <ScrollProgress />

        {/* Custom Precision Soft Stone Cursor */}
        <CustomCursor />

        {/* 0. Fullscreen Pinned Intro Portal: "THE DWAR , TO , YOUR , DREAMS" */}
        <IntroDwarPortal />

        {/* Luxury Brand Header */}
        <Navbar />

        {/* 1. Immersive 3D Hero Section */}
        <Hero3D />

        {/* Semantic Breadcrumbs Bar */}
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/50 backdrop-blur-sm">
          <Breadcrumbs />
        </div>

        {/* 2. React Bits ScrollExpand Architectural Feature */}
        <ArchitecturalScrollHero />

        {/* 3. Stone Vault Product Showcase */}
        <ProductVault />

        {/* 4. Craftsmanship & Chokhat Anatomy */}
        <Craftsmanship />

        {/* 5. GSAP Motion Fabrication Timeline with React Bits BorderGlow */}
        <GsapStoneTimeline />

        {/* 6. React Bits Pro Scroll Stack Card Pinning */}
        <StoneStackShowcase />

        {/* 7. Corporate Credentials & Legal Trust */}
        <CorporateTrust />

        {/* Architectural Luxury Footer */}
        <Footer />

        {/* Direct Floating WhatsApp Concierge */}
        <FloatingWhatsApp />
      </main>
    </SmoothScroll>
  );
}
