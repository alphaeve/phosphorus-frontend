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
      className="relative py-12 bg-white overflow-hidden border-y border-black/5"
    >
      {/* 1. Matching Hero Grid BG */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Minimal Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#E11D48] rotate-45" />
            <p className="text-[10px] font-black text-black uppercase tracking-[0.4em]">
              Tech Stack
            </p>
          </div>
          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">
            Software Compliance: IEC / MNRE / 2024
          </div>
        </div>

        {/* Horizontal Scrubber */}
        <div className="relative flex items-center py-4 border-y border-black/5 whitespace-nowrap overflow-hidden">
          {/* Fixed Drafting Needle */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E11D48] z-20 shadow-[0_0_8px_#E11D48]">
            <div className="absolute top-0 -left-1 w-2 h-2 bg-[#E11D48] rotate-45" />
          </div>

          <motion.div 
            ref={motionRef}
            style={{ x }}
            className="flex gap-16 md:gap-32 items-center pl-10"
          >
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-16 md:gap-32">
                <span className="text-xl md:text-2xl font-black text-black tracking-tighter hover:text-[#E11D48] transition-colors cursor-crosshair uppercase">
                  {tool}
                </span>
                
                {/* Minimal Technical Separator */}
                <div className="flex flex-col gap-1 opacity-20">
                  <div className="w-4 h-[1px] bg-black" />
                  <div className="w-2 h-[1px] bg-black" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Technical Label */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-[9px] font-medium text-slate-400 max-w-[200px] leading-tight uppercase tracking-widest">
            Precision engineering through industry standard computation.
          </p>
          <div className="h-[1px] w-24 bg-slate-100" />
        </div>
      </div>
    </section>
  );
}
