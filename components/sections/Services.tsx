"use client";
import React, { useRef, useEffect } from "react";
import { 
  Zap, 
  Ruler, 
  FileText, 
  ArrowUpRight, 
  Layout, 
  Sun, 
  ClipboardCheck, 
  Calculator, 
  Activity 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollBadge from "../ui/ScrollBadge"; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Updated with exact data from the provided image
const services = [
  { 
    id: "01", 
    title: "Solar Plant Layout & System Design", 
    desc: "Optimized plant layouts and high-precision system engineering for maximum space utilization.", 
    Icon: Layout 
  },
  { 
    id: "02", 
    title: "PVsyst Simulation & Energy Analysis", 
    desc: "Advanced generation reports and energy yield analysis to ensure long-term project bankability.", 
    Icon: Activity 
  },
  { 
    id: "03", 
    title: "Electrical SLD & String Design", 
    desc: "Detailed Single Line Diagrams (SLD) and optimized stringing for technical compliance.", 
    Icon: Zap 
  },
  { 
    id: "04", 
    title: "Approval Drawings (Net Metering/CEIG)", 
    desc: "Technical documentation and drawings specifically for regulatory and government approvals.", 
    Icon: FileText 
  },
  { 
    id: "05", 
    title: "Technical Documentation & Support", 
    desc: "Comprehensive engineering support throughout the project lifecycle from planning to commissioning.", 
    Icon: ClipboardCheck 
  },
  { 
    id: "06", 
    title: "BOQ & Cost Optimization", 
    desc: "Optimized Bill of Quantities to reduce project expenditure while maintaining performance.", 
    Icon: Calculator 
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trayRef.current, {
        x: () => -(trayRef.current!.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.to(instructionRef.current, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden select-none"
    >
      {/* ARCHITECTURAL GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#003d2b 1px, transparent 1px),
            linear-gradient(90deg, #003d2b 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10">
        
        {/* SCROLL BADGE */}
        <div className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-50 scale-75 md:scale-100">
          <ScrollBadge />
        </div>

        <div className="h-screen flex flex-col justify-center relative">
          
          {/* HEADER - Centralized and Uniform Width */}
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-16 mt-24 md:mt-0">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#8dc63f]" />
                <span className="text-[10px] font-black tracking-[0.4em] text-[#8dc63f] uppercase block">
                Solar Design Experts
                </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter leading-[0.9]">
              OUR <span className="italic font-light text-[#8dc63f]">SERVICES.</span>
            </h2>
          </div>

          {/* SERVICES TRAY */}
          <div
            ref={trayRef}
            className="flex items-stretch gap-0 pl-6 md:pl-[calc((100vw-1152px)/2+40px)]"
            style={{ width: "max-content" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[450px] pr-10 md:pr-20 group flex flex-col justify-between"
              >
                {/* Top Border & ID */}
                <div className="flex items-start justify-between border-t border-[#003d2b]/10 pt-8 mb-8 md:mb-12 transition-colors group-hover:border-[#8dc63f]/30">
                  <span className="text-4xl md:text-5xl font-black text-[#003d2b]/10 group-hover:text-[#8dc63f]/20 transition-colors duration-500 italic">
                    {service.id}
                  </span>
                  <div className="text-[#003d2b]/20 group-hover:text-[#8dc63f] group-hover:-translate-y-2 transition-all duration-500">
                    <service.Icon size={40} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-[#003d2b] mb-4 md:mb-6 tracking-tight uppercase leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-[240px] md:max-w-[320px]">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-8 md:mt-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8dc63f] cursor-pointer group/link">
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    Consultation
                  </span>
                  <ArrowUpRight size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}

            <div className="w-[40vw] md:w-[30vw]" />
          </div>

          {/* INSTRUCTION */}
          <div ref={instructionRef} className="absolute bottom-12 left-0 w-full">
            <div className="max-w-6xl mx-auto px-10 flex items-center gap-6">
                <div className="w-12 h-[1px] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#8dc63f] translate-x-[-100%] animate-shimmer" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
                Swipe to explore engineering
                </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}