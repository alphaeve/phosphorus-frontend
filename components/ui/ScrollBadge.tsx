"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";

export default function ScrollBadge() {
  const { scrollYProgress } = useScroll();

  // Smooth spring for high-end feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // Rotation logic
  const textRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  // Progress Ring logic (for the SVG circle stroke)
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative w-44 h-44 flex items-center justify-center pointer-events-none select-none">
      
      {/* 1. OUTER ROTATING TEXT RING */}
      <motion.div
        style={{ rotate: textRotation }}
        className="absolute w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="badgePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[7.5px] font-black tracking-[0.28em] fill-[#003d2b] uppercase opacity-80">
            <textPath xlinkHref="#badgePath">
              SOLAR DESIGN EXPERTS • PRECISION • PERFORMANCE • 
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* 2. PROGRESS RADIAL BORDER (Modern Engineering Look) */}
      <svg className="absolute w-24 h-24 -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="42"
          stroke="currentColor"
          strokeWidth="1"
          fill="transparent"
          className="text-[#003d2b]/5"
        />
        <motion.circle
          cx="48"
          cy="48"
          r="42"
          stroke="#8dc63f"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="0 1"
          style={{ pathLength }}
          className="drop-shadow-[0_0_8px_rgba(141,198,63,0.4)]"
        />
      </svg>

      {/* 3. CENTER BUTTON - Brand Lime Green */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 bg-[#8dc63f] rounded-full flex items-center justify-center shadow-2xl shadow-[#8dc63f]/30 border-2 border-white z-10"
      >
        {/* We use an ArrowDown because the badge tells the user to scroll down */}
        <ArrowDown size={22} className="text-[#003d2b] stroke-[3px]" />
        
        {/* Subtle Icon on top */}
        <div className="absolute -top-1 -right-1 bg-[#003d2b] p-1 rounded-full border border-white">
            <Zap size={8} className="text-[#8dc63f] fill-[#8dc63f]" />
        </div>
      </motion.div>

      {/* 4. PULSE EFFECT - Subtle and User-Friendly */}
      <div className="absolute w-14 h-14 rounded-full bg-[#8dc63f]/40 animate-ping -z-10" />
      
      {/* 5. STATIC COMPASS TICKS (For that Engineering feel) */}
      <div className="absolute w-full h-full flex items-center justify-center opacity-10">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-[1px] h-full bg-[#003d2b]" 
            style={{ transform: `rotate(${i * 45}deg)` }}
          />
        ))}
        <div className="absolute w-36 h-36 bg-white rounded-full" />
      </div>

    </div>
  );
}