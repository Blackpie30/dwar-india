"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  Calculator,
  Ruler,
  Plus,
  Trash2,
  Share2,
  CheckCircle2,
  FileText,
  Maximize2,
  Box,
  Sliders,
  Sparkles,
  Info,
} from "lucide-react";

export type CalculatorMode = "sqft" | "rft";
export type ChokhatCategory = "BAI CHOKHAT" | "PAYA CHOKHAT" | "UTRANGA CHOKHAT";

export const CHOKHAT_SIZES = [
  '3.5"',
  '4"',
  '5"',
  '6"',
  '9"',
  '10"',
  '10.5"',
  '11"',
  '12"',
] as const;

export interface ChokhatModifiers {
  singlePaitam: boolean;
  doublePaitam: boolean;
  oneSideMolding: boolean;
  doubleSideMolding: boolean;
}

export interface EstimateItem {
  id: string;
  type: CalculatorMode;
  particulars: string;
  category?: ChokhatCategory;
  size?: string;
  modifiers?: ChokhatModifiers;
  pieces: number;
  length: number;
  width?: number;
  rate: number;
  unitMeasurement: number;
  unitLabel: "SQFT" | "RFT";
  totalAmount: number;
}

const SQFT_PARTICULAR_OPTIONS = [
  { name: "Soft Alabaster Kota Stone (22mm Honed)", defaultRate: 42, hex: "#E4E2DC" },
  { name: "Warm Travertine Kota Slabs (25mm Polish)", defaultRate: 55, hex: "#C9BFB2" },
  { name: "Muted Kota Stone Rough / River Wash", defaultRate: 34, hex: "#C5BCB1" },
  { name: "Mineral Taupe Bijoliya Natural Cheed", defaultRate: 48, hex: "#B9ADA2" },
  { name: "Bijoliya Heavy Pati Roofing Slabs (35mm)", defaultRate: 68, hex: "#938275" },
  { name: "Deep Umber Heritage Chocolate Slabs", defaultRate: 62, hex: "#938275" },
];

const CHOKHAT_RATES: Record<string, number> = {
  '3.5"': 110,
  '4"': 125,
  '5"': 155,
  '6"': 185,
  '9"': 260,
  '10"': 295,
  '10.5"': 310,
  '11"': 335,
  '12"': 370,
};

export const StoneCalculator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<CalculatorMode>("rft");

  // Mode 1: SQFT State
  const [sqftParticular, setSqftParticular] = useState(
    SQFT_PARTICULAR_OPTIONS[0].name
  );
  const [sqftPieces, setSqftPieces] = useState<number>(10);
  const [sqftLength, setSqftLength] = useState<number>(4);
  const [sqftWidth, setSqftWidth] = useState<number>(2);
  const [sqftRate, setSqftRate] = useState<number>(
    SQFT_PARTICULAR_OPTIONS[0].defaultRate
  );

  // Mode 2: RFT State
  const [chokhatCategory, setChokhatCategory] =
    useState<ChokhatCategory>("PAYA CHOKHAT");
  const [chokhatSize, setChokhatSize] = useState<string>('5"');
  const [modifiers, setModifiers] = useState<ChokhatModifiers>({
    singlePaitam: true,
    doublePaitam: false,
    oneSideMolding: true,
    doubleSideMolding: false,
  });
  const [rftPieces, setRftPieces] = useState<number>(4);
  const [rftLength, setRftLength] = useState<number>(7);
  const [rftRate, setRftRate] = useState<number>(155);

  const [estimateList, setEstimateList] = useState<EstimateItem[]>([]);

  const calculateDefaultRftRate = (
    size: string,
    mods: ChokhatModifiers
  ): number => {
    const base = CHOKHAT_RATES[size] || 150;
    let add = 0;
    if (mods.doublePaitam) add += 30;
    else if (mods.singlePaitam) add += 15;
    if (mods.doubleSideMolding) add += 25;
    else if (mods.oneSideMolding) add += 12;
    return base + add;
  };

  const handleSizeChange = (size: string) => {
    setChokhatSize(size);
    setRftRate(calculateDefaultRftRate(size, modifiers));
  };

  const handleModifierToggle = (key: keyof ChokhatModifiers) => {
    const next = { ...modifiers };
    if (key === "singlePaitam") {
      next.singlePaitam = !next.singlePaitam;
      if (next.singlePaitam) next.doublePaitam = false;
    } else if (key === "doublePaitam") {
      next.doublePaitam = !next.doublePaitam;
      if (next.doublePaitam) next.singlePaitam = false;
    } else if (key === "oneSideMolding") {
      next.oneSideMolding = !next.oneSideMolding;
      if (next.oneSideMolding) next.doubleSideMolding = false;
    } else if (key === "doubleSideMolding") {
      next.doubleSideMolding = !next.doubleSideMolding;
      if (next.doubleSideMolding) next.oneSideMolding = false;
    }
    setModifiers(next);
    setRftRate(calculateDefaultRftRate(chokhatSize, next));
  };

  const currentSqft = sqftPieces * sqftLength * sqftWidth;
  const currentSqftAmount = currentSqft * sqftRate;

  const currentRft = rftPieces * rftLength;
  const currentRftAmount = currentRft * rftRate;

  const grandTotal = useMemo(() => {
    return estimateList.reduce((acc, item) => acc + item.totalAmount, 0);
  }, [estimateList]);

  const totalSqftInCart = useMemo(() => {
    return estimateList
      .filter((i) => i.type === "sqft")
      .reduce((acc, item) => acc + item.unitMeasurement, 0);
  }, [estimateList]);

  const totalRftInCart = useMemo(() => {
    return estimateList
      .filter((i) => i.type === "rft")
      .reduce((acc, item) => acc + item.unitMeasurement, 0);
  }, [estimateList]);

  const handleAddItem = () => {
    const newItem: EstimateItem =
      activeMode === "sqft"
        ? {
            id: Math.random().toString(36).substring(2, 9),
            type: "sqft",
            particulars: sqftParticular,
            pieces: sqftPieces,
            length: sqftLength,
            width: sqftWidth,
            rate: sqftRate,
            unitMeasurement: currentSqft,
            unitLabel: "SQFT",
            totalAmount: currentSqftAmount,
          }
        : {
            id: Math.random().toString(36).substring(2, 9),
            type: "rft",
            particulars: `${chokhatCategory} (${chokhatSize})`,
            category: chokhatCategory,
            size: chokhatSize,
            modifiers: { ...modifiers },
            pieces: rftPieces,
            length: rftLength,
            rate: rftRate,
            unitMeasurement: currentRft,
            unitLabel: "RFT",
            totalAmount: currentRftAmount,
          };

    setEstimateList([...estimateList, newItem]);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#E4E2DC", "#C9BFB2", "#938275"],
      });
    } catch (e) {}
  };

  const handleExportWhatsApp = () => {
    const header = `*🏛️ DWAR INDIA - OFFICIAL ESTIMATE BREAKDOWN*
_Architectural Natural Stone & Chokhat Fabrication_
*Proprietor:* Mahendra Kumar Saini
*GSTIN:* 08UBJPS6187Q1ZX
*Hotlines:* +91 9828123281 | +91 7852837116
━━━━━━━━━━━━━━━━━━━━━━\n`;

    const itemsText =
      estimateList.length > 0
        ? estimateList
            .map((item, index) => {
              if (item.type === "sqft") {
                return `*${index + 1}. ${item.particulars}*
• Sizing: ${item.pieces} Pcs × ${item.length}'L × ${item.width}'W
• Total Area: *${item.unitMeasurement.toFixed(2)} SQFT* @ ₹${item.rate}/sqft
• Amount: *₹ ${item.totalAmount.toLocaleString("en-IN")}/=*`;
              } else {
                const mods: string[] = [];
                if (item.modifiers?.doublePaitam) mods.push("Double Paitam");
                else if (item.modifiers?.singlePaitam) mods.push("Single Paitam");
                if (item.modifiers?.doubleSideMolding) mods.push("Double Molding");
                else if (item.modifiers?.oneSideMolding) mods.push("Single Molding");

                return `*${index + 1}. ${item.category} [${item.size}]*
• Specs: ${mods.join(", ") || "Standard"}
• Sizing: ${item.pieces} Pcs × ${item.length}'L
• Running Length: *${item.unitMeasurement.toFixed(2)} RFT* @ ₹${item.rate}/rft
• Amount: *₹ ${item.totalAmount.toLocaleString("en-IN")}/=*`;
              }
            })
            .join("\n\n")
        : `*Live Single Item Estimate:*
• Item: ${activeMode === "sqft" ? sqftParticular : `${chokhatCategory} (${chokhatSize})`}
• Quantity: ${activeMode === "sqft" ? `${sqftPieces} Pcs (${sqftLength}' × ${sqftWidth}') = ${currentSqft} SQFT` : `${rftPieces} Pcs (${rftLength}') = ${currentRft} RFT`}
• Amount: *₹ ${(activeMode === "sqft" ? currentSqftAmount : currentRftAmount).toLocaleString("en-IN")}/=*`;

    const summaryText = `\n━━━━━━━━━━━━━━━━━━━━━━
*GRAND TOTAL:* *₹ ${(estimateList.length > 0 ? grandTotal : activeMode === "sqft" ? currentSqftAmount : currentRftAmount).toLocaleString("en-IN")}/=*
━━━━━━━━━━━━━━━━━━━━━━
_Please confirm dispatch timeline and transport logistics to our site._`;

    const fullMessage = encodeURIComponent(header + itemsText + summaryText);
    window.open(`https://wa.me/919828123281?text=${fullMessage}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#121110] overflow-hidden">
      {/* Background Soft Stone Accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#938275]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C9BFB2]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1917] border border-[#C9BFB2]/30 backdrop-blur-md mb-4 shadow-lg">
            <Calculator className="w-3.5 h-3.5 text-[#C9BFB2]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E4E2DC]">
              Operational Stone Estimator
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[#E4E2DC] mb-4">
            Real-Time Stone & <span className="soft-stone-gradient-text">Chokhat Calculator</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C5BCB1] font-light leading-relaxed">
            Execute authentic Dwar India factory measurement formulas with live
            cross-section blueprints and instant WhatsApp pricing dispatches.
          </p>
        </div>

        {/* SaaS Mode Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-[#1B1917] border border-[#C9BFB2]/20 flex flex-wrap gap-2 shadow-2xl justify-center">
            <button
              onClick={() => setActiveMode("rft")}
              className={`px-6 py-3 rounded-xl text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center gap-2.5 ${
                activeMode === "rft"
                  ? "bg-[#C9BFB2] text-[#121110] shadow-lg shadow-black/40 font-bold scale-[1.02]"
                  : "text-[#B9ADA2] hover:text-[#E4E2DC]"
              }`}
            >
              <Box className="w-4 h-4" />
              Mode 2: Running Feet (Chokhat Framework)
            </button>

            <button
              onClick={() => setActiveMode("sqft")}
              className={`px-6 py-3 rounded-xl text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center gap-2.5 ${
                activeMode === "sqft"
                  ? "bg-[#C9BFB2] text-[#121110] shadow-lg shadow-black/40 font-bold scale-[1.02]"
                  : "text-[#B9ADA2] hover:text-[#E4E2DC]"
              }`}
            >
              <Ruler className="w-4 h-4" />
              Mode 1: Square Feet (SQFT Slabs)
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-7 bg-[#1B1917] rounded-2xl border border-[#C9BFB2]/25 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#C9BFB2]/15 mb-6">
              <div>
                <h3 className="font-cinzel font-bold text-lg text-[#E4E2DC]">
                  {activeMode === "rft"
                    ? "Chokhat Specification Matrix"
                    : "Natural Stone Slab Configuration"}
                </h3>
                <p className="text-xs text-[#B9ADA2] mt-0.5">
                  {activeMode === "rft"
                    ? "Configure category, width, paitam grooves & molding edges"
                    : "Calculate flooring, roofing pati & facade square footage"}
                </p>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#121110] text-[#C9BFB2] border border-[#C9BFB2]/30 uppercase font-semibold">
                {activeMode === "rft" ? "Formula: P × L" : "Formula: P × L × W"}
              </span>
            </div>

            {/* RFT FORM */}
            {activeMode === "rft" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E4E2DC] font-semibold mb-2">
                    1. Chokhat Section Category
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(
                      [
                        "PAYA CHOKHAT",
                        "BAI CHOKHAT",
                        "UTRANGA CHOKHAT",
                      ] as ChokhatCategory[]
                    ).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setChokhatCategory(cat)}
                        className={`py-3 px-2 rounded-xl text-center text-xs font-semibold uppercase tracking-wider transition-all border ${
                          chokhatCategory === cat
                            ? "bg-[#C9BFB2]/20 border-[#E4E2DC] text-white shadow-md shadow-black/30"
                            : "bg-[#121110] border-[#C9BFB2]/15 text-[#B9ADA2] hover:text-[#E4E2DC]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E4E2DC] font-semibold mb-2">
                    2. Section Width / Thickness (Inches)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {CHOKHAT_SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeChange(size)}
                        className={`py-2.5 rounded-xl text-center text-xs font-semibold transition-all border ${
                          chokhatSize === size
                            ? "bg-[#C9BFB2] text-[#121110] font-bold border-[#E4E2DC] shadow-lg shadow-black/30 scale-105"
                            : "bg-[#121110] border-[#C9BFB2]/15 text-[#C5BCB1] hover:border-[#C9BFB2]/30"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E4E2DC] font-semibold mb-2">
                    3. Architectural Modifiers & Machining
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleModifierToggle("singlePaitam")}
                      className={`p-3 rounded-xl text-left border flex items-start justify-between transition-all ${
                        modifiers.singlePaitam
                          ? "bg-[#C9BFB2]/20 border-[#E4E2DC] text-white"
                          : "bg-[#121110] border-[#C9BFB2]/15 text-[#B9ADA2]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E4E2DC]">
                          Single Paitam
                        </div>
                        <div className="text-[10px] text-[#B9ADA2] mt-0.5">
                          Single rebate step (12-15mm)
                        </div>
                      </div>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          modifiers.singlePaitam ? "text-[#C9BFB2]" : "text-neutral-600"
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => handleModifierToggle("doublePaitam")}
                      className={`p-3 rounded-xl text-left border flex items-start justify-between transition-all ${
                        modifiers.doublePaitam
                          ? "bg-[#C9BFB2]/20 border-[#E4E2DC] text-white"
                          : "bg-[#121110] border-[#C9BFB2]/15 text-[#B9ADA2]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E4E2DC]">
                          Double Paitam
                        </div>
                        <div className="text-[10px] text-[#B9ADA2] mt-0.5">
                          Dual rebate (Door + Wire mesh)
                        </div>
                      </div>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          modifiers.doublePaitam ? "text-[#C9BFB2]" : "text-neutral-600"
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => handleModifierToggle("oneSideMolding")}
                      className={`p-3 rounded-xl text-left border flex items-start justify-between transition-all ${
                        modifiers.oneSideMolding
                          ? "bg-[#C9BFB2]/20 border-[#E4E2DC] text-white"
                          : "bg-[#121110] border-[#C9BFB2]/15 text-[#B9ADA2]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E4E2DC]">
                          One-Side Molding
                        </div>
                        <div className="text-[10px] text-[#B9ADA2] mt-0.5">
                          Half-round bullnose edge
                        </div>
                      </div>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          modifiers.oneSideMolding ? "text-[#C9BFB2]" : "text-neutral-600"
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => handleModifierToggle("doubleSideMolding")}
                      className={`p-3 rounded-xl text-left border flex items-start justify-between transition-all ${
                        modifiers.doubleSideMolding
                          ? "bg-[#C9BFB2]/20 border-[#E4E2DC] text-white"
                          : "bg-[#121110] border-[#C9BFB2]/15 text-[#B9ADA2]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E4E2DC]">
                          Double-Side Molding
                        </div>
                        <div className="text-[10px] text-[#B9ADA2] mt-0.5">
                          Dual chamfered flute curves
                        </div>
                      </div>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          modifiers.doubleSideMolding ? "text-[#C9BFB2]" : "text-neutral-600"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Pieces (P)
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={rftPieces}
                      onChange={(e) => setRftPieces(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-white font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Length (L in Ft)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min={1}
                      value={rftLength}
                      onChange={(e) => setRftLength(Math.max(0.5, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-white font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Rate / RFT (₹)
                    </label>
                    <input
                      type="number"
                      min={10}
                      value={rftRate}
                      onChange={(e) => setRftRate(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-[#E4E2DC] font-bold font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SQFT FORM */}
            {activeMode === "sqft" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E4E2DC] font-semibold mb-2">
                    Select Stone Variety / Soft Specimen
                  </label>
                  <select
                    value={sqftParticular}
                    onChange={(e) => {
                      setSqftParticular(e.target.value);
                      const found = SQFT_PARTICULAR_OPTIONS.find(
                        (o) => o.name === e.target.value
                      );
                      if (found) setSqftRate(found.defaultRate);
                    }}
                    className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-4 py-3 text-sm text-[#E4E2DC] focus:border-[#E4E2DC] focus:outline-none"
                  >
                    {SQFT_PARTICULAR_OPTIONS.map((opt) => (
                      <option key={opt.name} value={opt.name}>
                        {opt.name} (Avg ₹{opt.defaultRate}/sqft)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Pieces (P)
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={sqftPieces}
                      onChange={(e) => setSqftPieces(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-white font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Length (L Ft)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min={0.5}
                      value={sqftLength}
                      onChange={(e) => setSqftLength(Math.max(0.1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-white font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Width (W Ft)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min={0.5}
                      value={sqftWidth}
                      onChange={(e) => setSqftWidth(Math.max(0.1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-white font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-[#B9ADA2] font-semibold mb-1">
                      Rate / Sqft (₹)
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={sqftRate}
                      onChange={(e) => setSqftRate(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#121110] border border-[#C9BFB2]/20 rounded-xl px-3 py-2.5 text-sm text-[#E4E2DC] font-bold font-mono focus:border-[#E4E2DC] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Total Bar */}
            <div className="mt-8 pt-6 border-t border-[#C9BFB2]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#B9ADA2]">
                  Item Total Value
                </span>
                <span className="text-xl sm:text-2xl font-cinzel font-bold text-[#E4E2DC]">
                  ₹{" "}
                  {(activeMode === "sqft"
                    ? currentSqftAmount
                    : currentRftAmount
                  ).toLocaleString("en-IN")}
                  /=
                </span>
              </div>

              <button
                onClick={handleAddItem}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-[0.16em] hover:shadow-lg hover:shadow-black/40 transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Item to Estimate
              </button>
            </div>
          </div>

          {/* Right Column: Blueprint & Quotation Cart */}
          <div className="lg:col-span-5 space-y-6">
            {activeMode === "rft" && (
              <div className="bg-[#1B1917] rounded-2xl border border-[#C9BFB2]/25 p-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#C9BFB2]/15 mb-4">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#C9BFB2]" />
                    <span className="text-xs uppercase tracking-wider text-[#E4E2DC] font-semibold">
                      Chokhat Cross-Section Blueprint
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C9BFB2]">
                    Width: {chokhatSize}
                  </span>
                </div>

                <div className="w-full h-44 bg-[#121110] rounded-xl border border-[#C9BFB2]/15 flex items-center justify-center p-3 relative overflow-hidden">
                  <svg viewBox="0 0 320 160" className="w-full h-full text-neutral-200">
                    <line x1="10" y1="140" x2="310" y2="140" stroke="#443D36" strokeDasharray="3 3" />
                    <path
                      d={
                        modifiers.doublePaitam
                          ? "M 50 130 L 270 130 L 270 50 L 220 50 L 220 80 L 170 80 L 170 100 L 50 100 Z"
                          : modifiers.singlePaitam
                          ? "M 50 130 L 270 130 L 270 50 L 200 50 L 200 90 L 50 90 Z"
                          : "M 50 130 L 270 130 L 270 50 L 50 50 Z"
                      }
                      fill="#2E2A25"
                      stroke="#C9BFB2"
                      strokeWidth="2"
                    />
                    {modifiers.oneSideMolding && (
                      <path d="M 50 90 Q 40 110 50 130" fill="none" stroke="#E4E2DC" strokeWidth="3" />
                    )}
                    {modifiers.doubleSideMolding && (
                      <path d="M 270 50 Q 285 90 270 130" fill="none" stroke="#E4E2DC" strokeWidth="3" />
                    )}
                    <text x="140" y="148" fill="#B9ADA2" fontSize="10" textAnchor="middle">
                      Selected Width: {chokhatSize}
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {/* Quotation Summary Cart */}
            <div className="bg-[#1B1917] rounded-2xl border border-[#C9BFB2]/30 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#C9BFB2]/15">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#C9BFB2]" />
                  <h3 className="font-cinzel font-bold text-sm uppercase tracking-wider text-[#E4E2DC]">
                    Quotation Summary ({estimateList.length})
                  </h3>
                </div>
                {estimateList.length > 0 && (
                  <button
                    onClick={() => setEstimateList([])}
                    className="text-[10px] uppercase text-red-400 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear
                  </button>
                )}
              </div>

              <div className="my-4 max-h-[200px] overflow-y-auto space-y-2 pr-1">
                {estimateList.length === 0 ? (
                  <p className="text-center py-6 text-[#B9ADA2] text-xs">
                    No items added yet. Configure above & click "Add Item to Estimate".
                  </p>
                ) : (
                  estimateList.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#121110] border border-[#C9BFB2]/15 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-semibold text-[#E4E2DC]">
                          {idx + 1}. {item.particulars}
                        </div>
                        <div className="text-[10px] text-[#B9ADA2] font-mono">
                          {item.pieces} Pcs • {item.unitMeasurement.toFixed(1)} {item.unitLabel} @ ₹{item.rate}
                        </div>
                      </div>
                      <div className="font-bold text-[#E4E2DC]">
                        ₹ {item.totalAmount.toLocaleString("en-IN")}/=
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="pt-4 border-t border-[#C9BFB2]/15 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#B9ADA2] font-semibold">
                  Grand Total Syntax:
                </span>
                <span className="text-2xl sm:text-3xl font-cinzel font-black soft-stone-gradient-text">
                  ₹{" "}
                  {(estimateList.length > 0
                    ? grandTotal
                    : activeMode === "sqft"
                    ? currentSqftAmount
                    : currentRftAmount
                  ).toLocaleString("en-IN")}
                  /=
                </span>
              </div>

              <button
                onClick={handleExportWhatsApp}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 shadow-lg shadow-black/40"
              >
                <Share2 className="w-4 h-4" />
                Get WhatsApp Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
