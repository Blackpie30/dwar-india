"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ZoomIn,
  CheckCircle,
  X,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import ThreeDTextReveal from "@/components/ui/3d-text-reveal";

export interface ProductItem {
  id: string;
  name: string;
  category: "chokhat" | "kota" | "bijoliya" | "heritage";
  tagline: string;
  description: string;
  finishes: string[];
  specs: {
    durability: string;
    thickness: string;
    maintenance: string;
    weatherResistance: string;
  };
  applications: string[];
  colorHex: string;
  textureGradient: string;
  quarryOrigin: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "stone-chokhats",
    name: "Natural Stone Door Frames (Chokhats)",
    category: "chokhat",
    tagline: "Solid stone frames for main doors, bedrooms & windows",
    description:
      "Unlike wooden frames that get damaged by termites or swell in the rainy season, our natural stone Chokhats last forever. Cut precisely with diamond saws so doors open and close smoothly without jamming.",
    finishes: [
      "Single Door Groove (Single Paitam)",
      "Double Door + Net Mesh Groove (Double Paitam)",
      "Smooth Rounded Edge (Bullnose)",
      "Modern Beveled Edge (Chamfer)",
    ],
    specs: {
      durability: "100+ Years (Lifetime)",
      thickness: '3.5" to 12" Custom Widths',
      maintenance: "Zero Maintenance",
      weatherResistance: "100% Water & Termite Proof",
    },
    applications: [
      "Main Entrance Doorways",
      "Bedroom & Bathroom Doors",
      "French Windows & Balconies",
      "Heavy Teakwood Door Support",
    ],
    colorHex: "#C5BCB1",
    textureGradient: "from-[#C5BCB1] via-[#B9ADA2] to-[#938275]",
    quarryOrigin: "Factory Hub: Suket & Bijoliya, Rajasthan",
  },
  {
    id: "kota-stone-slabs",
    name: "Original Kota Stone Flooring Slabs",
    category: "kota",
    tagline: "Naturally cool, heavy-duty flooring limestone",
    description:
      "Direct from Kota quarries. Kota stone stays naturally cool during harsh summers, handles high foot traffic without scratching, and gives a clean, polished luxury finish to any building.",
    finishes: [
      "Mirror High-Gloss Polish",
      "Satin Smooth Matte Finish",
      "Natural Rough Grip (Non-Slip)",
      "Antique River-Washed",
    ],
    specs: {
      durability: "Extremely Heavy Load Bearing",
      thickness: "18mm to 45mm Thickness",
      maintenance: "Easy to clean with water",
      weatherResistance: "Zero Staining & Scratch Proof",
    },
    applications: [
      "Living Rooms, Bedrooms & Halls",
      "Commercial Offices & Plazas",
      "Staircases & Steps",
      "Corridors & Garden Pathways",
    ],
    colorHex: "#C9BFB2",
    textureGradient: "from-[#E4E2DC] via-[#C9BFB2] to-[#B9ADA2]",
    quarryOrigin: "Direct Quarries: Suket & Ramganjmandi",
  },
  {
    id: "bijoliya-pati-slabs",
    name: "Bijoliya Heavy Roofing Pati & Beams",
    category: "bijoliya",
    tagline: "High-strength stone slabs for roofs, verandahs & boundaries",
    description:
      "Extra-strong quartzitic sandstone quarried in Bijoliya. Used for traditional high-load roofing spans, verandah pergolas, and outdoor boundary walls that never crack or weaken.",
    finishes: [
      "Natural Rough Split",
      "Smooth Calibrated Surface",
      "Hammered Anti-Slip Grip",
      "Hand-Chiseled Edges",
    ],
    specs: {
      durability: "Super High Flexural Strength",
      thickness: "25mm to 75mm Heavy Gauge",
      maintenance: "Zero Maintenance Needed",
      weatherResistance: "100% Sun & Rain Proof",
    },
    applications: [
      "Roofing Pati & Verandah Spans",
      "Garden Pergolas & Car Porches",
      "Boundary Wall Stone Cladding",
      "Heavy Driveway Paving",
    ],
    colorHex: "#B9ADA2",
    textureGradient: "from-[#B9ADA2] via-[#938275] to-[#5C4F44]",
    quarryOrigin: "Mines: Bijoliya, Bhilwara Corridor",
  },
  {
    id: "heritage-facade-stone",
    name: "Heritage Umber & Chocolate Elevation Stone",
    category: "heritage",
    tagline: "Rich earthen stone for front house elevation & designs",
    description:
      "Natural deep chocolate and maroon sandstone that gives homes an authentic palace-like look. Completely acid-resistant and colourfast — it never fades under bright sunlight.",
    finishes: [
      "Hand-Carved Stone Designs",
      "Modern Fluted Ribbed Panels",
      "Smooth Diamond Cut Finish",
      "Traditional Jali Lattice Work",
    ],
    specs: {
      durability: "Weatherproof Colorfast",
      thickness: "20mm to 50mm Custom Slabs",
      maintenance: "Zero Color Fading",
      weatherResistance: "Resists Acid Rain & Heat",
    },
    applications: [
      "Front House Elevation & Facades",
      "Courtyard Decorative Pillars",
      "Outdoor Water Features",
      "Balcony Cornices & Borders",
    ],
    colorHex: "#938275",
    textureGradient: "from-[#938275] via-[#6B5E53] to-[#3B342D]",
    quarryOrigin: "Mandana & Bundi Stone Basin",
  },
];

export const ProductVault: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [inspectItem, setInspectItem] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 sm:py-28 relative bg-[var(--bg-secondary)] overflow-hidden">
      {/* Subtle parallax glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#938275]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-[#938275]" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-secondary)]">
                Our Products
              </span>
            </div>

            <ThreeDTextReveal
              text="The Natural Stone Collection"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]"
              highlightWords={["Collection"]}
              stagger={0.025}
              duration={1.1}
              rotationX={85}
            />
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal mt-3 leading-relaxed">
              Explore our core products: Door frames (Chokhats) that never rot, Kota
              stone flooring that stays cool, and heavy Bijoliya roofing slabs.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm shrink-0">
            {[
              { id: "all", label: "All Products" },
              { id: "chokhat", label: "Door Frames" },
              { id: "kota", label: "Kota Flooring" },
              { id: "bijoliya", label: "Roofing Pati" },
              { id: "heritage", label: "Elevation Stone" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                  activeFilter === f.id
                    ? "bg-[#C9BFB2] text-[#121110] shadow-sm scale-[1.02]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Header tag and zoom trigger */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-semibold truncate">
                    {product.quarryOrigin}
                  </span>
                  <button
                    onClick={() => setInspectItem(product)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors shrink-0"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#938275]" />
                    Zoom Texture
                  </button>
                </div>

                {/* Texture Preview Banner */}
                <div
                  className={`w-full h-36 rounded-xl bg-gradient-to-r ${product.textureGradient} border border-[var(--border-subtle)] mb-6 relative overflow-hidden flex items-end p-4 shadow-inner group-hover:scale-[1.01] transition-transform duration-300`}
                >
                  <div className="absolute inset-0 noise-bg opacity-40"></div>
                  <div
                    className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-white/80 shadow-md"
                    style={{ backgroundColor: product.colorHex }}
                  ></div>
                  <span className="relative z-10 text-xs uppercase tracking-wider text-[#121110] font-black px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-sm shadow-sm">
                    {product.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[#938275] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] mb-6">
                  <div>
                    <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold">
                      Lifespan
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">
                      {product.specs.durability}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold">
                      Thickness Range
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">
                      {product.specs.thickness}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold">
                      Maintenance
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">
                      {product.specs.maintenance}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold">
                      Weather Proof
                    </div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {product.specs.weatherResistance}
                    </div>
                  </div>
                </div>

                {/* Available Finishes Badges */}
                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">
                    Available Types & Cuts:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="text-xs px-3 py-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/919828123281?text=${encodeURIComponent(`Namaste Mahendra ji, I want to know rates and availability for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-[var(--text-primary)] hover:text-[#938275] font-bold flex items-center gap-1.5 group/link"
                >
                  <MessageSquare className="w-4 h-4 text-[#938275]" />
                  Inquire Rates on WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
                </a>

                <button
                  onClick={() => setInspectItem(product)}
                  className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-all shrink-0"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {inspectItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[var(--bg-card)] border border-[var(--border-hover)] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setInspectItem(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-2">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase font-bold">
                  {inspectItem.quarryOrigin}
                </span>
              </div>

              <h3 className="text-2xl font-cinzel font-bold text-[var(--text-primary)] mb-1 leading-snug">
                {inspectItem.name}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                {inspectItem.tagline}
              </p>

              {/* Texture Banner */}
              <div
                className={`w-full h-44 rounded-xl bg-gradient-to-br ${inspectItem.textureGradient} border border-[var(--border-subtle)] mb-6 relative overflow-hidden flex items-center justify-center`}
              >
                <div className="absolute inset-0 noise-bg opacity-50"></div>
                <div className="relative z-10 text-center px-4">
                  <Sparkles className="w-6 h-6 text-[#121110] mx-auto mb-1.5" />
                  <p className="text-xs uppercase tracking-widest text-[#121110] font-black">
                    Machine Cut & Calibrated
                  </p>
                  <p className="text-xs text-[#121110]/80 mt-0.5 font-semibold">
                    100% Genuine Rajasthan Natural Stone
                  </p>
                </div>
              </div>

              {/* Applications List */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2.5">
                  Best Used For:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {inspectItem.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Modal Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => setInspectItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs uppercase tracking-wider font-bold border border-[var(--border-subtle)]"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/919828123281?text=${encodeURIComponent(`Namaste Mahendra ji, Please give me the best price for ${inspectItem.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#C9BFB2] text-[#121110] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Ask Rate on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
