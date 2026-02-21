"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Target, 
  Zap, 
  Settings2, 
  FileCheck2, 
  Headphones 
} from "lucide-react";

const pillars = [
  {
    title: "Smart Cost Optimization",
    desc: "Efficient design strategies specifically engineered to reduce overall project expenditure.",
    icon: BarChart3,
  },
  {
    title: "High Precision Engineering",
    desc: "Accurate and reliable solar system designs ensuring zero margin for error.",
    icon: Target,
  },
  {
    title: "Enhanced System Performance",
    desc: "Optimized layouts designed to maximize energy generation and ROI.",
    icon: Zap,
  },
  {
    title: "Customized Design Solutions",
    desc: "Tailored engineering designs based on specific site conditions and client needs.",
    icon: Settings2,
  },
  {
    title: "Seamless Project Execution",
    desc: "Clear, compliant documentation for smooth regulatory approvals and commissioning.",
    icon: FileCheck2,
  },
  {
    title: "Dedicated Technical Support",
    desc: "Continuous expert guidance provided throughout every phase of the project lifecycle.",
    icon: Headphones,
  },
];

export default function WhyProsperous() {
  return (
    <section id="why-us" className="relative py-24 bg-white overflow-hidden flex flex-col items-center">
      
      {/* 1. ARCHITECTURAL GRID - Consistent with other sections */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* HEADER - Centralized and Uniform */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#8dc63f]" /> 
            <p className="text-[10px] font-black text-[#8dc63f] uppercase tracking-[0.4em]">
              The Strategic Choice
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter uppercase mb-6 leading-[0.9]">
              Why <span className="italic font-light text-[#8dc63f]">Prosperous?</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              We focus on delivering optimized, reliable, and performance-driven solar design solutions 
              that help EPC companies reduce project cost and ensure smooth execution.
          </p>
        </div>

        {/* 2. THE GRID - 3 columns for readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-[#8dc63f]/30 hover:shadow-[0_20px_40px_rgba(0,61,43,0.05)] transition-all duration-500"
            >
              {/* Icon - Circular Brand Style from Brochure */}
              <div className="w-14 h-14 rounded-full bg-[#003d2b] flex items-center justify-center mb-8 group-hover:bg-[#8dc63f] transition-colors duration-500">
                <item.icon size={24} className="text-white group-hover:text-[#003d2b] transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-[#003d2b] mb-4 uppercase tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>

              {/* Decorative Corner (Modern Engineering Detail) */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-4 h-4 border-r-2 border-b-2 border-[#8dc63f]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. FOOTER TAG - Minimalist Bottom Detail */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-[#003d2b] uppercase tracking-widest opacity-30">Planning</span>
              <div className="w-8 h-px bg-slate-200" />
              <span className="text-[10px] font-black text-[#8dc63f] uppercase tracking-widest">Commissioning</span>
           </div>
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
             Trusted by global <span className="text-[#003d2b]">EPC partners</span>
           </p>
        </div>
      </div>
    </section>
  );
}