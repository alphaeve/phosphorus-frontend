"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const text = new SplitType(titleRef.current, {
      types: "chars,words",
      tagName: "span",
    });

    gsap.from(text.chars, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.03,
      ease: "power4.out",
      delay: 0.4,
    });

    return () => {
      text.revert();
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/panelvideo2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. OVERLAY - Deep Navy (Engineering Luxe) */}
      <div className="absolute inset-0 -z-10 bg-[#0A192F]/80 backdrop-blur-[2px]" />

      {/* 3. CENTRALIZED UNIFORM CONTAINER (Max-W-6xl) */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        <div className="max-w-4xl"> {/* Inner constraint for typography readability */}
          
          {/* Eyebrow / Tagline - Bronze Accent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#c79e81]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c79e81]">
              Precision Solar Engineering
            </span>
          </motion.div>

          {/* Headline - High Contrast White & Bronze */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter"
          >
            PROSPEROUS<br />
            <span className="text-[#bbade0] italic font-light">SOLAR ASSETS</span>
          </h1>

          {/* Description - Constrained for focus */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 text-lg md:text-xl text-blue-50/60 max-w-xl leading-relaxed font-normal"
          >
            Designing utility-scale infrastructure with 
            <span className="text-white font-medium"> technical compliance </span> 
             and optimized long-term ROI.
          </motion.p>

          {/* CTA Buttons - Themed and Centralized alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-5 mt-12"
          >
            <button
              onClick={() => {
                const contactForm = document.getElementById("contact");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group bg-[#c79e81] text-[#0A192F] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500 hover:bg-white"
            >
              Consult Engineers
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-md transition-all duration-500 hover:bg-white/10">
              Technical Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blueprint Line (Bottom) */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[1px] bg-[#bbade0]/30" 
      />
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