"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import {
  Sparkles as SparklesIcon,
  Layers,
  ChevronDown,
  RotateCcw,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import ThreeDTextReveal from "@/components/ui/3d-text-reveal";

export type StoneMaterialType = "alabaster" | "travertine" | "warmStone" | "taupe" | "umber";

interface StoneMaterialConfig {
  id: StoneMaterialType;
  name: string;
  simpleName: string;
  hex: string;
  roughness: number;
  metalness: number;
  description: string;
  origin: string;
}

export const SOFT_STONE_PRESETS: Record<StoneMaterialType, StoneMaterialConfig> = {
  alabaster: {
    id: "alabaster",
    name: "Soft Alabaster (#E4E2DC)",
    simpleName: "Light Cream Stone",
    hex: "#E4E2DC",
    roughness: 0.35,
    metalness: 0.12,
    description: "Smooth off-white natural stone with a clean, modern finish",
    origin: "Makrana & Suket Mines",
  },
  travertine: {
    id: "travertine",
    name: "Warm Travertine (#C9BFB2)",
    simpleName: "Warm Sandstone",
    hex: "#C9BFB2",
    roughness: 0.52,
    metalness: 0.08,
    description: "Natural textured stone with warm earthy shades for luxury homes",
    origin: "Bijoliya Stone Belt",
  },
  warmStone: {
    id: "warmStone",
    name: "Muted Chokhat (#C5BCB1)",
    simpleName: "Kota Grey Stone",
    hex: "#C5BCB1",
    roughness: 0.45,
    metalness: 0.15,
    description: "Extremely hard Kota limestone that carries heavy door weights easily",
    origin: "Ramganjmandi, Kota",
  },
  taupe: {
    id: "taupe",
    name: "Mineral Taupe (#B9ADA2)",
    simpleName: "Earthy Taupe",
    hex: "#B9ADA2",
    roughness: 0.48,
    metalness: 0.18,
    description: "Rugged high-strength stone for heavy roofing slabs & verandahs",
    origin: "Bhilwara Quarry Corridor",
  },
  umber: {
    id: "umber",
    name: "Deep Umber (#938275)",
    simpleName: "Chocolate Walnut",
    hex: "#938275",
    roughness: 0.3,
    metalness: 0.22,
    description: "Rich dark brown natural stone for decorative front elevation",
    origin: "Mandana Heritage Mines",
  },
};

function ChokhatMonolith({
  materialType,
  pointer,
}: {
  materialType: StoneMaterialType;
  pointer: { x: number; y: number };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const stoneConfig = SOFT_STONE_PRESETS[materialType];

  useFrame((_, delta) => {
    if (groupRef.current) {
      const targetRotY = pointer.x * 0.35;
      const targetRotX = -pointer.y * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        2.5,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        2.5,
        delta
      );
    }
  });

  const stoneMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(stoneConfig.hex),
      roughness: stoneConfig.roughness,
      metalness: stoneConfig.metalness,
    });
  }, [stoneConfig]);

  const warmTrim = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C9BFB2"),
      roughness: 0.2,
      metalness: 0.85,
    });
  }, []);

  const umberAccent = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#938275"),
      roughness: 0.4,
      metalness: 0.3,
    });
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Floating Stone Monolith */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.5, 2.4, 0.35]} />
            <primitive object={stoneMaterial} attach="material" />
          </mesh>

          {/* Door Groove (Paitam) */}
          <mesh position={[0.4, 0, 0.19]} castShadow>
            <boxGeometry args={[0.65, 2.38, 0.05]} />
            <primitive object={umberAccent} attach="material" />
          </mesh>

          {/* Trim Inlay */}
          <mesh position={[0.07, 0, 0.185]}>
            <boxGeometry args={[0.02, 2.38, 0.02]} />
            <primitive object={warmTrim} attach="material" />
          </mesh>

          {/* Seal Emblem */}
          <mesh position={[-0.4, 0.8, 0.185]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.02, 32]} />
            <primitive object={warmTrim} attach="material" />
          </mesh>
        </group>
      </Float>

      {/* Surrounding Chokhat Frame */}
      <group position={[0, 0, -0.4]}>
        {/* Left Side Pillar (Paya) */}
        <mesh position={[-1.4, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 3.4, 0.4]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        {/* Right Side Pillar (Paya) */}
        <mesh position={[1.4, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 3.4, 0.4]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        {/* Top Header Beam (Utranga) */}
        <mesh position={[0, 1.7, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.3, 0.45]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        {/* Bottom Threshold Sill (Bai) */}
        <mesh position={[0, -1.7, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.25, 0.45]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
      </group>

      <Sparkles count={50} scale={4.5} size={2.2} speed={0.4} opacity={0.6} color="#C9BFB2" />
      <ContactShadows position={[0, -2.1, 0]} opacity={0.65} scale={8} blur={2.2} far={3.5} color="#000000" />
    </group>
  );
}

export const Hero3D: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] =
    useState<StoneMaterialType>("travertine");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-35"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] bg-[#938275]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10 my-auto">
        {/* Left Column: Clear, Friendly, Premium Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] w-fit mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-secondary)]">
              Direct Rajasthan Stone Factory
            </span>
          </div>

          {/* Main Hero Product Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-cinzel font-bold text-[var(--text-primary)] tracking-tight leading-[1.25] mb-5">
            Natural Stone Door Frames & Slabs That{" "}
            <span className="block mt-1 soft-stone-gradient-text">
              Last For Generations.
            </span>
          </h2>

          {/* Easy-to-understand Description */}
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mb-8">
            Upgrade your home with 100% termite-proof natural stone Chokhats (door
            frames), polished Kota stone flooring, and heavy-duty Bijoliya roofing slabs.
            Cut with diamond machines in Rajasthan and delivered straight to your site.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-[0.14em] shadow-lg shadow-black/15 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              View Stone Options
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919828123281"
              className="px-6 sm:px-7 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-[0.14em] transition-all flex items-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#938275]" />
              Call Factory: +91 98281 23281
            </a>
          </div>

          {/* Metric Highlights Grid - Perfectly spaced */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--border-subtle)]">
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-cinzel">
                25+ <span className="text-[#938275] text-xs font-sans font-bold">Years</span>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                Quarry Experience
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-cinzel">
                0%
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                Termites or Rotting
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-cinzel">
                10k+
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                Door Frames Built
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-cinzel">
                100%
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                Zero Monsoon Jamming
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive WebGL Monolith Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 relative h-[440px] sm:h-[500px] lg:h-[540px] flex flex-col items-center justify-center"
        >
          <div className="w-full h-full rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] relative overflow-hidden flex flex-col p-4 shadow-xl">
            {/* 3D Canvas */}
            <div
              className="w-full flex-1 relative cursor-grab active:cursor-grabbing rounded-xl overflow-hidden bg-[var(--bg-primary)]"
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPointer({
                  x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
                  y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
                });
              }}
            >
              <Canvas shadows="basic" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={45} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 8, 4]} intensity={1.9} color="#FFF9EE" castShadow />
                <pointLight position={[-4, 2, -2]} intensity={1.2} color="#C9BFB2" />
                <pointLight position={[3, -2, 3]} intensity={0.9} color="#938275" />
                <ChokhatMonolith materialType={selectedMaterial} pointer={pointer} />
              </Canvas>

              {/* 3D Hint Badge */}
              <div className="absolute top-3 left-3 bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[10px] uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5 pointer-events-none shadow-sm">
                <RotateCcw className="w-3 h-3 text-[#938275] animate-spin" style={{ animationDuration: "8s" }} />
                <span>Drag to Rotate 3D Model</span>
              </div>

              {/* Active Stone Tag */}
              <div className="absolute top-3 right-3 bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold pointer-events-none shadow-sm">
                {SOFT_STONE_PRESETS[selectedMaterial].simpleName}
              </div>
            </div>

            {/* Material Swapper Selector */}
            <div className="mt-3 p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col gap-2">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold px-1">
                <span>Choose Stone Texture</span>
                <span className="text-[var(--text-primary)] font-medium">
                  {SOFT_STONE_PRESETS[selectedMaterial].origin}
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {(Object.keys(SOFT_STONE_PRESETS) as StoneMaterialType[]).map((key) => {
                  const item = SOFT_STONE_PRESETS[key];
                  const isSelected = selectedMaterial === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedMaterial(key)}
                      className={`p-1.5 rounded-lg text-left transition-all flex flex-col items-center gap-1 border ${
                        isSelected
                          ? "bg-[var(--bg-card)] border-[#938275] shadow-sm scale-105"
                          : "bg-transparent border-transparent hover:bg-[var(--bg-card)]"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/20 shadow-inner"
                        style={{ backgroundColor: item.hex }}
                      ></span>
                      <span className="text-[9px] font-semibold text-[var(--text-secondary)] truncate max-w-[50px]">
                        {item.simpleName.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simplified Live Factory Marquee */}
      <div className="w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-md py-2.5 mt-8 z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Factory in Suket (Kota) & Bijoliya, Rajasthan
          </span>
          <span className="text-[#938275]">•</span>
          <span>100% Termite Proof & Never Swells in Monsoon</span>
          <span className="text-[#938275]">•</span>
          <span>Fast Delivery Across India Direct to Your Construction Site</span>
          <span className="text-[#938275]">•</span>
          <span>Call or WhatsApp: +91 98281 23281 / +91 78528 73116</span>
          <span className="text-[#938275]">•</span>
          <span>Government Registered GSTIN: 08UBJPS6187Q1ZX</span>
          <span className="text-[#938275]">•</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Factory in Suket (Kota) & Bijoliya, Rajasthan
          </span>
        </div>
      </div>
    </section>
  );
};
