"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";

const tools = [
  "PVsyst", "AutoCAD", "Helioscope", "ETAP", "SketchUp", "StaadPro", 
  "PVsyst", "AutoCAD", "Helioscope", "ETAP", "SketchUp", "StaadPro"
];

export default function SoftwareGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal movement on scroll
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x = useSpring(xTranslation, { stiffness: 50, damping: 25 });

  useEffect(() => {
    if (!motionRef.current) return;

    const tween = gsap.to(motionRef.current, {
      x: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 6,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-14 bg-white overflow-hidden border-y border-[#0A192F]/5"
    >
      {/* 1. ARCHITECTURAL GRID - Matching the Lavender Blueprint Style */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#bbade0 1.5px, transparent 1.5px), linear-gradient(90deg, #bbade0 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP HEADER - Professional Navy & Bronze */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            {/* Bronze Accent Diamond */}
            <div className="w-2 h-2 bg-[#c79e81] rotate-45" /> 
            <p className="text-[10px] font-black text-[#0A192F] uppercase mb-0 tracking-[0.4em]">
              Tech Stack
            </p>
          </div>
          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
            Engineering Compliance: IEC / MNRE / 2024
          </div>
        </div>

        {/* HORIZONTAL SCRUBBER */}
        <div className="relative flex items-center py-6 border-y border-[#0A192F]/10 whitespace-nowrap overflow-hidden">
          
          {/* FIXED DRAFTING NEEDLE - Bronze Highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#c79e81] z-20 shadow-[0_0_10px_rgba(199,158,129,0.3)]">
            <div className="absolute top-0 -left-1 w-2 h-2 bg-[#c79e81] rotate-45" />
            <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#c79e81] rotate-45" />
          </div>

          <motion.div 
            ref={motionRef}
            style={{ x }}
            className="flex gap-16 md:gap-32 items-center pl-12"
          >
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-16 md:gap-32">
                {/* TOOL NAME - Navy with Bronze Hover */}
                <span className="text-xl md:text-3xl font-black text-[#0A192F] tracking-tighter hover:text-[#c79e81] transition-all duration-300 cursor-crosshair uppercase">
                  {tool}
                </span>
                
                {/* TECHNICAL SEPARATOR - Lavender Tint */}
                <div className="flex flex-col gap-1.5 opacity-30">
                  <div className="w-6 h-[1px] bg-[#bbade0]" />
                  <div className="w-3 h-[1px] bg-[#c79e81]" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM TECHNICAL LABEL */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-[9px] font-bold text-slate-400 max-w-[280px] leading-relaxed uppercase tracking-[0.2em]">
            Precision engineering through <span className="text-[#0A192F]">industry standard</span> computation.
          </p>
          <div className="h-[1px] w-32 bg-[#bbade0]/30" />
        </div>
      </div>
    </section>
  );
}