"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });

  const displayValue = useTransform(springValue, (latest) => {
    const hasDecimal = value % 1 !== 0;
    return hasDecimal ? Number(latest.toFixed(1)) : Math.floor(latest);
  });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { label: "Utility Scale", value: 500, suffix: "MW+" },
  { label: "Rooftop Solar", value: 2000, suffix: "kW+" },
  { label: "Global Clients", value: 50, suffix: "+" },
  { label: "Accuracy", value: 99.9, suffix: "%" },
];

export default function ProjectStats() {
  return (
    <section className="py-16 bg-white flex items-center justify-center">
      {/* CENTRALIZED BOX - Narrow Width for Uniformity */}
      <div className="w-full max-w-4xl mx-6 bg-[#0A192F] rounded-[2rem] px-8 py-12 md:px-12 relative overflow-hidden shadow-xl">
        
        {/* SUBTLE BLUEPRINT GRID ACCENT */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(#bbade0 1px, transparent 1px), linear-gradient(90deg, #bbade0 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#c79e81] rounded-full" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#c79e81] uppercase">
              Project Impact
            </span>
          </div>
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
            V.2024_Global
          </span>
        </div>

        {/* Stats Grid - Centralized and Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">
                  <Counter value={stat.value} />
                </span>
                <span className="text-xs font-bold text-[#bbade0]">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-1 text-[9px] font-medium text-white/40 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0A192F] bg-slate-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="u" className="opacity-70 grayscale" />
                </div>
              ))}
            </div>
            <p className="text-[9px] font-medium text-white/30 uppercase tracking-tight">
              Trusted by <span className="text-white font-bold">50+ Global Enterprises</span>
            </p>
          </div>

          <button className="group flex items-center gap-2 text-[9px] font-bold text-white uppercase tracking-[0.2em] bg-white/5 px-5 py-2.5 rounded-full border border-white/10 hover:bg-[#c79e81] hover:text-[#0A192F] transition-all duration-300">
            Full Audit
            <div className="w-1 h-1 rounded-full bg-[#c79e81] group-hover:bg-[#0A192F]" />
          </button>
        </div>
      </div>
    </section>
  );
}