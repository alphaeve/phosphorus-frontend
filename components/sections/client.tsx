"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const softwareList = [
  { name: "AUTOCAD", type: "autocad" },
  { name: "PVSYST", type: "pvsyst" },
  { name: "HelioScope", type: "helioscope" },
  { name: "SketchUp", type: "sketchup" },
];

export default function SoftwareSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden flex flex-col items-center">
      
      {/* 1. ARCHITECTURAL GRID - Consistent with Theme */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* HEADER - Matches Brochure Title Style */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#8dc63f]" /> 
            <p className="text-[10px] font-black text-[#8dc63f] uppercase tracking-[0.4em]">
              Tech Infrastructure
            </p>
            <div className="w-8 h-[2px] bg-[#8dc63f]" /> 
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#003d2b] tracking-tighter uppercase leading-none">
            Software <span className="italic font-light text-[#8dc63f]">We Use.</span>
          </h2>
        </div>

        {/* 2. SOFTWARE ROW - Single Centralized Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {softwareList.map((item, i) => (
            <div 
              key={i}
              className="group relative flex items-center justify-center bg-white border border-[#003d2b]/10 rounded-2xl h-24 md:h-28 px-6 transition-all duration-500 hover:border-[#8dc63f] hover:shadow-[0_15px_30px_rgba(0,61,43,0.05)]"
            >
              <div className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-500">
                <SoftwareIcon type={item.type} />
                <span className="text-xs md:text-sm font-black tracking-widest text-[#003d2b] uppercase">
                  {item.name}
                </span>
              </div>
              
              {/* Corner Detail */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#8dc63f] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Technical Footer Label */}
        <div className="mt-12 text-center">
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] opacity-60">
             Certified precision through industry-standard computation
           </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- DYNAMIC SOFTWARE ICONS (Standard Logos) -------------------- */

function SoftwareIcon({ type }: { type: string }) {
  switch (type) {
    case "autocad":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 22h4.5l2.5-5.5h6l2.5 5.5H22L12 2zm-1.5 12L12 9.5l1.5 4.5h-3z" fill="#A71E22"/>
        </svg>
      );
    case "pvsyst":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
           <rect x="4" y="8" width="16" height="12" rx="1" fill="#2D5A9E"/>
           <circle cx="18" cy="6" r="4" fill="#FDB813"/>
           <path d="M6 10h12v8H6v-8z" fill="#fff" opacity="0.3"/>
        </svg>
      );
    case "helioscope":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#F15A24" strokeWidth="3"/>
          <path d="M12 6v6" stroke="#F15A24" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "sketchup":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5L4 7v10l8 4.5 8-4.5V7l-8-4.5zM12 5.5l5.5 3.2v6.6L12 18.5 6.5 15.3V8.7L12 5.5z" fill="#00539C"/>
          <path d="M12 8.5l3.5 2v3l-3.5 2-3.5-2v-3l3.5-2z" fill="#00539C"/>
        </svg>
      );
    default:
      return null;
  }
}