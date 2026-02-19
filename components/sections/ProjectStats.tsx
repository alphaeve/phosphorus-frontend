"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

// --- Minimal Count-Up Logic ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  // ✅ ALWAYS return a NUMBER
  const displayValue = useTransform(springValue, (latest) => {
    const hasDecimal = value % 1 !== 0;
    return hasDecimal
      ? Number(latest.toFixed(1))
      : Math.floor(latest);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { label: "Utility Scale", value: 500, suffix: "MW+" },
  { label: "Rooftop Solar", value: 2000, suffix: "kW+" },
  { label: "Global Clients", value: 50, suffix: "+" },
  { label: "Design Accuracy", value: 99.9, suffix: "%" },
];

export default function ProjectStats() {
  return (
    <section className="py-16 bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl mx-6 md:mx-12 bg-slate-50/50 rounded-[2rem] px-8 py-12 md:px-16 border border-slate-100/50">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#E2957A] rounded-full" />
            <span className="text-[10px] font-black tracking-[0.3em] text-[#1F1F1F] uppercase">
              Project Impact
            </span>
          </div>
          <span className="text-[9px] font-mono text-slate-400 uppercase">
            Data_Ref: 2024.V1
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-slate-200/60" />
              )}

              <div className="flex flex-col items-center lg:items-start lg:pl-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-5xl font-bold text-[#1F1F1F] tracking-tighter">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-sm md:text-lg font-bold text-[#E2957A]">
                    {stat.suffix}
                  </span>
                </div>

                <p className="mt-2 text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                  />
                </div>
              ))}
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
              Trusted by 50+ Global Enterprises
            </p>
          </div>

          <button className="group flex items-center gap-2 text-[9px] font-black text-[#1F1F1F] uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:border-[#E2957A] transition-all">
            Full Report
            <div className="w-1.5 h-1.5 rounded-full bg-[#E2957A] group-hover:scale-150 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
