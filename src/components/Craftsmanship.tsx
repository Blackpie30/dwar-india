"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Check,
  X,
  Layers,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Flame,
  Bug,
  Droplets,
  Clock,
  Workflow,
  HelpCircle,
} from "lucide-react";
import ThreeDTextReveal from "@/components/ui/3d-text-reveal";

export const Craftsmanship: React.FC = () => {
  const [selectedJointTab, setSelectedJointTab] = useState<"single" | "double">(
    "double"
  );
  const [moldingIndex, setMoldingIndex] = useState<number>(1);

  const MOLDING_PROFILES = [
    {
      id: "flat-bevel",
      name: "45° Modern Beveled Edge",
      description: "Clean straight angled cut for modern apartments and minimalist houses.",
      idealFor: "Modern Living Rooms & Office Doors",
      radius: "Clean 45° Angle Cut",
    },
    {
      id: "half-bullnose",
      name: "Smooth Round Bullnose (Most Popular)",
      description: "Smooth curved outer edge that is very safe, chip-resistant, and comfortable to touch.",
      idealFor: "Main Entrance, Bedrooms & Bathrooms",
      radius: "Smooth Half-Round Curve",
    },
    {
      id: "full-round",
      name: "Full Cylindrical Round",
      description: "Complete semi-circle round edge giving a classic royal look to door entrances.",
      idealFor: "Villas, Bungalows & Verandah Entryways",
      radius: "Full 180° Curved Edge",
    },
    {
      id: "double-ogee",
      name: "Double Decorative Wave (Ogee)",
      description: "Decorative dual-curve step cut for grand main doors and luxury bungalows.",
      idealFor: "Grand Main Gateways & Luxury Residences",
      radius: "Double S-Curve Profile",
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#938275]" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-secondary)]">
              Anatomy & Construction
            </span>
          </div>

          <ThreeDTextReveal
            text="How a Stone Door Frame is Built"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]"
            highlightWords={["is", "Built"]}
            stagger={0.025}
            duration={1.1}
            rotationX={85}
          />

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed mt-3">
            A stone Chokhat consists of 4 solid interlocking stone pieces carved to
            perfection so your doors fit smoothly and stay strong forever.
          </p>
        </motion.div>

        {/* 1. Interactive Chokhat Anatomy Diagram & Rebate Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          {/* Visual Blueprint Diagram with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] mb-6">
              <span className="text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#938275]" />
                Door Groove (Paitam) Type:
              </span>
              <div className="flex gap-1.5 p-1 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <button
                  onClick={() => setSelectedJointTab("single")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedJointTab === "single"
                      ? "bg-[#C9BFB2] text-[#121110] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Single Door
                </button>
                <button
                  onClick={() => setSelectedJointTab("double")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedJointTab === "double"
                      ? "bg-[#C9BFB2] text-[#121110] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Door + Mosquito Mesh
                </button>
              </div>
            </div>

            {/* Interactive Blueprint Schematic */}
            <div className="w-full h-64 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] p-4 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 noise-bg opacity-30"></div>

              <svg viewBox="0 0 400 240" className="w-full h-full">
                <rect x="50" y="30" width="300" height="180" fill="none" stroke="#938275" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Left Side Pillar (Paya) */}
                <rect x="50" y="30" width="35" height="180" fill="#B9ADA2" stroke="#938275" strokeWidth="1.5" />
                {/* Right Side Pillar (Paya) */}
                <rect x="315" y="30" width="35" height="180" fill="#B9ADA2" stroke="#938275" strokeWidth="1.5" />
                {/* Top Beam (Utranga) */}
                <rect x="35" y="30" width="330" height="30" fill="#C5BCB1" stroke="#938275" strokeWidth="1.5" />
                {/* Bottom Sill (Bai) */}
                <rect x="35" y="180" width="330" height="30" fill="#C5BCB1" stroke="#938275" strokeWidth="1.5" />

                {/* Groove visualization */}
                {selectedJointTab === "double" ? (
                  <>
                    <rect x="85" y="60" width="12" height="120" fill="#938275" opacity="0.9" />
                    <rect x="97" y="60" width="10" height="120" fill="#C9BFB2" opacity="0.8" />
                    <text x="140" y="105" fill="currentColor" className="text-[var(--text-primary)]" fontSize="11" fontWeight="bold">
                      Double Paitam (2 Grooves):
                    </text>
                    <text x="140" y="125" fill="currentColor" className="text-[var(--text-secondary)]" fontSize="9.5">
                      1. Main Door Leaf Groove (35mm)
                    </text>
                    <text x="140" y="142" fill="currentColor" className="text-[var(--text-secondary)]" fontSize="9.5">
                      2. Wire-Mesh Mosquito Door Groove (20mm)
                    </text>
                  </>
                ) : (
                  <>
                    <rect x="85" y="60" width="16" height="120" fill="#938275" opacity="0.9" />
                    <text x="140" y="112" fill="currentColor" className="text-[var(--text-primary)]" fontSize="11" fontWeight="bold">
                      Single Paitam (1 Groove):
                    </text>
                    <text x="140" y="130" fill="currentColor" className="text-[var(--text-secondary)]" fontSize="9.5">
                      Single 15mm rebate for single wooden / flush door
                    </text>
                  </>
                )}

                <circle cx="85" cy="45" r="4" fill="#938275" />
                <line x1="85" y1="45" x2="130" y2="20" stroke="#938275" strokeWidth="1" />
                <text x="135" y="23" fill="currentColor" className="text-[var(--text-primary)]" fontSize="9.5" fontWeight="bold">
                  Interlocking Joint Notch
                </text>
              </svg>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)] font-medium">
              <span>● <strong>Paya</strong>: Side Pillars</span>
              <span>● <strong>Utranga</strong>: Top Beam</span>
              <span>● <strong>Bai</strong>: Floor Sill</span>
            </div>
          </motion.div>

          {/* Clear Breakdown List with Staggered Scroll Reveal */}
          <div className="lg:col-span-6 space-y-3.5">
            {[
              {
                step: "01",
                title: "Paya (Left & Right Side Pillars)",
                desc: "Solid single-piece stone pillars up to 10 feet tall. They support the full weight of your door and heavy metal hinges without bending.",
                highlight: false,
              },
              {
                step: "02",
                title: "Utranga (Top Header Beam)",
                desc: "The top horizontal stone beam that locks securely into both side pillars to support the brickwork and wall above the door.",
                highlight: false,
              },
              {
                step: "03",
                title: "Bai / Dehli (Bottom Floor Step)",
                desc: "The bottom stone sill that sits flush with your floor tiles, stopping rainwater, washing water, and insects from entering the room.",
                highlight: false,
              },
              {
                step: "04",
                title: "Paitam (The Door Grooves)",
                desc: "The machine-carved step where the door leaf closes flush. Choose Single Paitam for 1 door leaf, or Double Paitam if you want an extra mosquito wire-mesh door.",
                highlight: true,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className={`p-4 rounded-xl bg-[var(--bg-card)] border ${
                  item.highlight
                    ? "border-[var(--border-hover)] shadow-sm"
                    : "border-[var(--border-subtle)]"
                } flex items-start gap-4`}
              >
                <div
                  className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                    item.highlight
                      ? "bg-[#C9BFB2] text-[#121110]"
                      : "bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                  }`}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Edge Molding Profile Selector with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-10 shadow-md mb-16 sm:mb-20"
        >
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-[#938275] font-bold">
              Edge Finishes & Moldings
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[var(--text-primary)] mt-1 leading-snug">
              Choose the Outer Edge Style for Your Frame
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
              We shape and polish the edges using CNC diamond machines to match your home's interior design.
            </p>
          </div>

          {/* Profile Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {MOLDING_PROFILES.map((prof, idx) => (
              <button
                key={prof.id}
                onClick={() => setMoldingIndex(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  moldingIndex === idx
                    ? "bg-[var(--bg-primary)] border-[#938275] shadow-sm scale-[1.02]"
                    : "bg-[var(--bg-primary)]/50 border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-[#938275] mb-1">
                  Option 0{idx + 1}
                </div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {prof.name}
                </div>
              </button>
            ))}
          </div>

          {/* Active Profile Info */}
          <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] text-[11px] font-bold mb-2 border border-[var(--border-subtle)]">
                Selected: {MOLDING_PROFILES[moldingIndex].radius}
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                {MOLDING_PROFILES[moldingIndex].name}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                {MOLDING_PROFILES[moldingIndex].description}
              </p>
              <div className="text-xs text-[var(--text-muted)] font-medium">
                <strong>Best For: </strong> {MOLDING_PROFILES[moldingIndex].idealFor}
              </div>
            </div>

            <div className="md:col-span-4 h-28 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center p-4">
              <div className="text-center">
                <Sparkles className="w-6 h-6 text-[#938275] mx-auto mb-1" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Diamond CNC Cut
                </span>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                  Smooth & 100% Chip-Free
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Simple Comparison Table with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-10 shadow-md"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-wider text-[#938275] font-bold">
              Comparison Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[var(--text-primary)] mt-1 leading-snug">
              Why Stone Door Frames are the Best Choice
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-bold">Feature</th>
                  <th className="py-3.5 px-4 text-[#121110] font-bold bg-[#C9BFB2] rounded-t-xl">
                    Dwar India Stone Chokhat
                  </th>
                  <th className="py-3.5 px-4 font-bold">Wooden Frame (Sagwan/Teak)</th>
                  <th className="py-3.5 px-4 font-bold">Concrete (RCC) Frame</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#938275]" /> Lifespan
                  </td>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] bg-[#C9BFB2]/10">
                    100+ Years (Lifetime)
                  </td>
                  <td className="py-4 px-4">15 to 25 Years (Rots over time)</td>
                  <td className="py-4 px-4">20 to 30 Years (Cracks easily)</td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Bug className="w-4 h-4 text-[#938275]" /> Termite Protection
                  </td>
                  <td className="py-4 px-4 font-bold text-emerald-600 dark:text-emerald-400 bg-[#C9BFB2]/10">
                    100% Termite Proof (Stone cannot be eaten)
                  </td>
                  <td className="py-4 px-4 text-red-500">Gets eaten by termites</td>
                  <td className="py-4 px-4">Termite proof</td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#938275]" /> Rainy Season Behavior
                  </td>
                  <td className="py-4 px-4 font-bold text-emerald-600 dark:text-emerald-400 bg-[#C9BFB2]/10">
                    Never Swells, Doors Open Smoothly
                  </td>
                  <td className="py-4 px-4 text-red-500">Swells and doors get jammed</td>
                  <td className="py-4 px-4">Absorbs moisture</td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#938275]" /> Fire Safety
                  </td>
                  <td className="py-4 px-4 font-bold text-emerald-600 dark:text-emerald-400 bg-[#C9BFB2]/10">
                    100% Fireproof & Non-Flammable
                  </td>
                  <td className="py-4 px-4 text-red-500">Catches fire easily</td>
                  <td className="py-4 px-4">Fire resistant</td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#938275]" /> Maintenance Needed
                  </td>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)] bg-[#C9BFB2]/10">
                    Zero Painting or Polishing Needed
                  </td>
                  <td className="py-4 px-4">Requires frequent varnish / paint</td>
                  <td className="py-4 px-4">Requires plastering & painting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
