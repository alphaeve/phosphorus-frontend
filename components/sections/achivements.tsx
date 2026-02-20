"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (!card) return;

      // Only animate if it's NOT the last card
      if (index !== cards.length - 1) {
        gsap.to(card, {
          scale: 0.9, // Scale down slightly as next card comes up
          opacity: 0.4, // Fade out slightly
          scrollTrigger: {
            trigger: card,
            start: "top 15%", // When card top hits 15% of viewport
            endTrigger: cards[index + 1], // Animates based on the next card's position
            end: "top 15%",
            scrub: true, // Smoothly ties animation to scroll
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-24 flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">
        {/* HEADER */}
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

        {/* STACKING CARDS CONTAINER */}
        <div className="flex flex-col gap-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
             ref={(el) => {
  if (el) {
    cardsRef.current[idx] = el;
  }
}}
              className="sticky top-[100px] w-full" // This makes them stack
            >
              <div className="group flex flex-col md:flex-row bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 min-h-[400px]">
                {/* IMAGE - Takes half width on desktop */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm shadow-sm border border-slate-100">
                    <span className="text-[9px] font-bold text-[#0A192F] tracking-widest">{item.year}</span>
                  </div>
                </div>

                {/* CONTENT - Takes half width on desktop */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bbade0]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Industrial Honor
                    </span>
                  </div>

                  <h3 className="mb-6 text-2xl md:text-3xl font-bold leading-tight text-[#0A192F] group-hover:text-[#c79e81] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-base text-slate-500 leading-relaxed font-normal mb-10">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#0A192F] cursor-pointer group/link">
                    <span className="group-hover/link:text-[#c79e81] transition-colors">Case Details</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:border-[#c79e81] group-hover/link:bg-[#c79e81] group-hover/link:text-white transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </div>
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