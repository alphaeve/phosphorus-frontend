"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const achievements = [
  {
    title: "Gujarat State Annual Solar Award",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    description: "Awarded by EQ Magazine for outstanding contributions to Gujarat's renewable energy sector.",
  },
  {
    title: "Global Clean-Tech Leadership",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    description: "Recognized for engineering excellence in utility-scale solar asset optimization.",
  },
  {
    title: "Technical Excellence Milestone",
    year: "2022",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop",
    description: "Achieved 500MW of bankable solar designs with 100% technical compliance.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* UNIFORM WIDTH CONTAINER */}
      <div className="w-full max-w-6xl px-6">
        
        {/* HEADER - Consistent with Blog/Services Header Style */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#c79e81]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#c79e81] uppercase">
              Recognition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tighter">
            Engineering <span className="italic font-light text-[#bbade0]">Milestones.</span>
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white"
            >
              {/* IMAGE CONTAINER - Minimalist & Technical */}
              <div className="relative h-60 w-full overflow-hidden rounded-2xl mb-6 bg-slate-50 border border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm shadow-sm border border-slate-100">
                   <span className="text-[9px] font-bold text-[#0A192F] tracking-widest">{item.year}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 px-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#bbade0]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                    Industrial Honor
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold leading-tight text-[#0A192F] group-hover:text-[#c79e81] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">
                  {item.description}
                </p>

                {/* CTA - Minimal Bronze Link */}
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] cursor-pointer group/link border-t border-slate-50 pt-6">
                  <span className="group-hover/link:text-[#c79e81] transition-colors">Case Details</span>
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:border-[#c79e81] group-hover/link:bg-[#c79e81] group-hover/link:text-white transition-all">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}