"use client";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 border-t border-slate-50 flex flex-col items-center overflow-hidden">
      
      {/* SUBTLE BACKGROUND GRID (Matches Hero/Services) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#bbade0 1px, transparent 1px), linear-gradient(90deg, #bbade0 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* UNIFORM WIDTH CONTAINER */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* TOP SECTION: BRAND & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#c79e81] rotate-45" />
              <span className="text-xl font-black text-[#0A192F] tracking-tighter uppercase">
                Prosperous
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-normal mb-8">
              Engineering high-performance, utility-scale infrastructure with 
              technical compliance and optimized ROI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0A192F] hover:bg-[#c79e81] hover:text-white transition-all">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c79e81] mb-8">
              Expertise
            </h4>
            <ul className="space-y-4">
              {["Solar Engineering", "Electrical SLDs", "Structural GA", "Performance Yield"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-[#0A192F] transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-[1px] bg-[#bbade0] group-hover:w-3 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c79e81] mb-8">
              Journal
            </h4>
            <ul className="space-y-4">
              {["Technical Archive", "Case Studies", "Compliance Standards", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-[#0A192F] transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-[1px] bg-[#bbade0] group-hover:w-3 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c79e81] mb-8">
              Reach Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#bbade0] shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-slate-500 leading-snug">
                  C1B/158, BHATPORE GIDC, Surat, India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#bbade0] shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-slate-500 font-bold">+91 79904 54355</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SCROLL */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              
                Need a website like this? 
            </span>
            <div className="h-[1px] w-12 bg-slate-100 hidden md:block" />
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
              Contact Developer:tryflysolution@gmail.com
            </span>
          </div>

          {/* Back to Top - Bronze Circle */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black text-[#0A192F] uppercase tracking-[0.2em] transition-all"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#c79e81] group-hover:border-[#c79e81] group-hover:text-white transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

      </div>

      {/* DECORATIVE TECHNICAL BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0A192F] via-[#c79e81] to-[#bbade0]/20 opacity-50" />
    </footer>
  );
}