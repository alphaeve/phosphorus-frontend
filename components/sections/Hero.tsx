"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const text = new SplitType(titleRef.current, { types: "chars,words", tagName: "span" });
    gsap.from(text.chars, { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.03, 
      ease: "power4.out", 
      delay: 0.5 
    });
    return () => text.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans z-0 bg-black">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-30">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/panelvideo2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. CINEMATIC BRAND OVERLAY */}
      {/* Changed from Navy to Deep Forest Green Tint to match brochure theme */}
      <div className="absolute inset-0 -z-10 bg-[#0A192F]/80 backdrop-blur-[2px]" />

      {/* 3. TECHNICAL GRID - Matches Services/Why Us sections */}
      <div className="absolute inset-0 -z-10 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#8dc63f 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

      {/* 4. CENTRALIZED UNIFORM CONTAINER (Max-W-6xl) */}
      <div className="w-full max-w-6xl px-6 relative z-10 text-center pt-20">
        
        <div className="flex flex-col items-center">
            {/* Branded Eyebrow */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8dc63f]/20 border border-[#8dc63f]/30 backdrop-blur-md mb-8"
            >
            <Zap size={14} className="text-[#8dc63f] fill-[#8dc63f]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8dc63f]">
                Solar Design & Engineering Experts
            </span>
            </motion.div>

            {/* Main Headline - Centralized Alignment */}
            <h1 ref={titleRef} className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
            PROSPEROUS<br />
            <span className="text-[#8dc63f] italic font-light">CONSULTANCY</span>
            </h1>

            {/* Description - Constrained to max-w-2xl for better readability */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium"
            >
            Empowering EPC companies with <span className="text-white font-bold underline decoration-[#8dc63f] underline-offset-4 decoration-2">high-precision engineering</span> and cost-optimized solar solutions.
            </motion.p>

            {/* Value Tags - Uniform with Brochures Content */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-white/60"
            >
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase">
                    <ShieldCheck size={16} className="text-[#8dc63f]" /> Precision
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase">
                    <BarChart3 size={16} className="text-[#8dc63f]" /> Performance
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase">
                    <Zap size={16} className="text-[#8dc63f]" /> Optimization
                </div>
            </motion.div>

            {/* CTA Buttons - Centralized Alignment */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-5 mt-14 justify-center"
            >
            <button className="group relative bg-[#8dc63f] text-[#003d2b] px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-xl shadow-[#8dc63f]/20">
                <span className="flex items-center gap-3">
                Consult Our Engineers 
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
            </button>
            <button className="px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-[#003d2b] transition-all active:scale-95">
                Technical Portfolio
            </button>
            </motion.div>
        </div>
      </div>

      {/* 5. DECORATIVE BRAND WAVE */}
      <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32 fill-[#8dc63f]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}





































// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import SolarModel from "../canavas/SolarModel";
// import { ArrowRight } from "lucide-react";
// import gsap from "gsap";
// import SplitType from "split-type";

// export default function Hero() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const titleRef = useRef<HTMLHeadingElement>(null);
  
//   // Parallax Logic for the 3D Model
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
//   const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });
  
//   const modelMoveX = useTransform(springX, [0, 1200], [-20, 20]);
//   const modelMoveY = useTransform(springY, [0, 1000], [-20, 20]);

//   useEffect(() => {
//     const check = () => setIsDesktop(window.innerWidth >= 1024);
//     check();
//     window.addEventListener("resize", check);

//     // --- GSAP & SPLIT-TYPE ANIMATION ---
//     let ctx = gsap.context(() => {
//       if (!titleRef.current) return;

//       // Split text into characters and words
//       const text = new SplitType(titleRef.current, { 
//         types: "chars,words",
//         tagName: "span" 
//       });

//       // Character Animation
//       gsap.from(text.chars, {
//         y: 40,               // Rise from 40px below
//         opacity: 0,          // Fade in
//         duration: 1.2,       // Slow and elegant
//         stagger: 0.02,       // Tiny delay between each letter
//         ease: "power4.out",  // High-end smooth easing
//         delay: 0.5,          // Wait for page load
//       });
//     });

//     return () => {
//       window.removeEventListener("resize", check);
//       ctx.revert(); // Clean up GSAP and SplitType
//     };
//   }, []);

//   return (
//     <section
//       onMouseMove={(e) => {
//         if (!isDesktop) return; 
//         mouseX.set(e.clientX);
//         mouseY.set(e.clientY);
//       }}
//       className="relative min-h-screen w-full overflow-hidden bg-white pt-20"
//     >
//       {/* Background Accents - Minimal & Creative */}
//       <div className="absolute top-[-5%] right-[-2%] w-[600px] h-[600px] bg-[#E2957A]/5 -z-10 blur-[140px] rounded-full" />
//       <div className="absolute bottom-[5%] left-[2%] w-[400px] h-[400px] bg-slate-100/50 -z-10 blur-[100px] rounded-full" />

//       {/* Grid Layout: Shifted right for better white-space usage */}
//       <div className="container mx-auto px-6 lg:px-24 h-screen grid lg:grid-cols-[1.2fr_0.8fr] items-center relative z-10">
        
//         {/* TEXT CONTENT: Creative Alignment (pl-20) */}
//         <div className="flex flex-col items-start text-left lg:pl-20">
          
//           <div className="flex items-center gap-4 mb-10 overflow-hidden">
//              <motion.div 
//                initial={{ width: 0 }} 
//                animate={{ width: 40 }} 
//                transition={{ duration: 1, delay: 0.2 }}
//                className="h-[1px] bg-[#C16A3F]/40" 
//              />
//              <motion.span 
//                initial={{ opacity: 0, x: -10 }}
//                animate={{ opacity: 1, x: 0 }}
//                transition={{ duration: 0.8, delay: 0.4 }}
//                className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C16A3F]"
//              >
//                Solar Design Consultancy
//              </motion.span>
//           </div>

//           {/* Headline: Handled by Split-Type */}
//           <h1 
//             ref={titleRef}
//             className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-[#1F1F1F] leading-[1.05] tracking-tight mb-8"
//           >
//             Prosperous <br />
//             <span className="text-[#E2957A]">Solar Assets</span>
//           </h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="text-lg text-slate-500 max-w-[440px] leading-relaxed font-light"
//           >
//             Engineering utility-scale solar infrastructure with full technical 
//             compliance and bankable design optimization for global energy leaders.
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1.5 }}
//             className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5"
//           >
//             {[
//               "Utility Ground Mount", 
//               "Industrial Optimized BOM", 
//               "Residential Pre-Design", 
//               "IEC Compliance"
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <div className="w-1 h-1 rounded-full bg-[#E2957A]" />
//                 <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 1.8 }}
//             className="mt-16"
//           >
//             <button className="group relative bg-[#1F1F1F] text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-8 transition-all duration-500 hover:bg-[#C16A3F] shadow-2xl shadow-slate-200">
//               Consult Now 
//               <ArrowRight size={16} className="text-[#E2957A] group-hover:translate-x-2 transition-transform duration-500" />
//             </button>
//           </motion.div>
//         </div>

//         {/* 3D MODEL AREA */}
//         <motion.div
//           style={isDesktop ? { x: modelMoveX, y: modelMoveY } : {}}
//           className="relative h-[500px] lg:h-[75%] w-full flex items-center justify-center lg:pr-12"
//         >
//           {/* Frameless creative container */}
//           <div className="relative w-full h-full rounded-[4rem] overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
//              <SolarModel />
             
//              {/* Subtle technical overlay */}
//              <div className="absolute top-12 left-12">
//                <div className="w-1 h-12 bg-gradient-to-b from-[#ffff] to-transparent opacity-40" />
//              </div>
//           </div>

//           <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-20">
//              {/* <span className="text-[9px] font-mono tracking-widest text-slate-950">GRID // READY</span> */}
//              <div className="w-8 h-[1px] bg-slate-900" />
//           </div>
//         </motion.div>
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
//     </section>
//   );
// }