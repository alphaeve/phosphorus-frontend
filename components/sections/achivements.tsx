"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const achievements = [
  {
    title: "Gujarat State Annual Solar Award",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    description: "Awarded by EQ Magazine for outstanding contributions to Gujarat's renewable energy sector and engineering precision.",
  },
  {
    title: "Global Clean-Tech Leadership",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    description: "Recognized internationally for engineering excellence in utility-scale solar asset optimization and performance.",
  },
  {
    title: "Technical Excellence Milestone",
    year: "2022",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop",
    description: "Successfully delivered over 500MW of bankable solar designs with 100% technical and regulatory compliance.",
  },
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (!card) return;

      // Only animate cards that are being stacked upon
      if (index !== cards.length - 1) {
        gsap.to(card, {
          scale: 0.95, // Very subtle scale to keep it looking "clear"
          // REMOVED OPACITY: 0.5 -> Now it stays at 1 (100% visible)
          scrollTrigger: {
            trigger: card,
            start: "top 12%", 
            endTrigger: cards[index + 1],
            end: "top 12%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white py-24 flex flex-col items-center overflow-hidden">
      
      {/* ARCHITECTURAL GRID */}
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

      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#8dc63f]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#8dc63f] uppercase">
              Recognition
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter leading-[0.9]">
            ENGINEERING <span className="italic font-light text-[#8dc63f]">MILESTONES.</span>
          </h2>
        </div>

        {/* STACKING CARDS CONTAINER */}
        <div className="flex flex-col gap-10 md:gap-20">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="sticky top-[120px] w-full"
              style={{ zIndex: idx + 1 }} // Ensures proper layering
            >
              <div className="group flex flex-col md:flex-row bg-white border border-[#003d2b]/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,61,43,0.2)] min-h-[450px]">
                
                {/* IMAGE - 100% Original Colors */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8 bg-[#8dc63f] text-[#003d2b] px-4 py-1.5 rounded-full shadow-lg z-20">
                    <span className="text-[10px] font-black tracking-widest uppercase">{item.year}</span>
                  </div>
                </div>

                {/* CONTENT - High Contrast Green & Black/Dark Green */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-2 mb-6">
                    <Award size={18} className="text-[#8dc63f]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003d2b]/40">
                      Industrial Honor
                    </span>
                  </div>

                  <h3 className="mb-6 text-2xl md:text-4xl font-black leading-tight text-[#003d2b] group-hover:text-[#8dc63f] transition-colors duration-500 uppercase tracking-tighter">
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-12">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#003d2b] cursor-pointer group/link">
                    <span className="group-hover/link:text-[#8dc63f] transition-colors">Case Details</span>
                    <div className="w-12 h-12 rounded-full border border-[#003d2b]/10 flex items-center justify-center group-hover/link:border-[#8dc63f] group-hover/link:bg-[#8dc63f] group-hover/link:text-[#003d2b] transition-all duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[20vh]" />
      </div>
    </section>
  );
}