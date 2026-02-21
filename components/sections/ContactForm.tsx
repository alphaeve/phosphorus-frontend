"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, Zap } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-32 bg-white overflow-hidden flex flex-col items-center">
      
      {/* 1. BRANDED ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{      
          backgroundImage: `linear-gradient(#003d2b 1.5px, transparent 1.5px), linear-gradient(90deg, #003d2b 1.5px, transparent 1.5px)`,
          backgroundSize: '45px 45px'
        }}
      />

      {/* CENTRALIZED UNIFORM CONTAINER */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: CONTACT INFO (Data from Brochure) */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#8dc63f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8dc63f]">Connect with Experts</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-[#003d2b] tracking-tighter leading-[0.85] uppercase mb-8">
              LET'S <span className="italic font-light text-[#8dc63f]">CONNECT.</span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-12">
              Our engineering team is ready to optimize your solar assets. 
              Contact us for high-precision design, documentation, and technical support.
            </p>

            {/* Info Cards */}
            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  label: "Headquarters", 
                  content: "301, Western Arena, Green City Road, Adajan, Surat, India",
                },
                { 
                  icon: Phone, 
                  label: "Consultation Line", 
                  content: "+91 90336 89323", 
                },
                { 
                  icon: Mail, 
                  label: "Engineering Email", 
                  content: "prosperousconsultancy1@gmail.com", 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group items-start">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#003d2b]/5 border border-[#003d2b]/10 flex items-center justify-center text-[#003d2b] group-hover:bg-[#8dc63f] group-hover:text-white group-hover:border-[#8dc63f] transition-all duration-500 shadow-sm">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8dc63f] mb-1.5 block">
                      {item.label}
                    </span>
                    <h4 className="text-sm md:text-base font-black text-[#003d2b] break-words uppercase tracking-tight">{item.content}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM CARD */}
          <div className="relative mt-8 lg:mt-0">
            {/* Subtle Lime Green glow behind card */}
            <div className="absolute -inset-4 bg-[#8dc63f]/5 rounded-[3rem] blur-3xl -z-10" />
            
            <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-[#003d2b]/5 shadow-[0_40px_100px_-20px_rgba(0,61,43,0.1)]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="flex items-center gap-3 mb-10">
                        <Zap size={18} className="text-[#8dc63f] fill-[#8dc63f]" />
                        <h3 className="text-xl font-black text-[#003d2b] tracking-tight uppercase">Technical Inquiry</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-[#003d2b]/40 ml-1">Client Name</label>
                          <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#8dc63f]/40 outline-none transition-all text-sm font-bold text-[#003d2b]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-[#003d2b]/40 ml-1">Corporate Email</label>
                          <input required type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#8dc63f]/40 outline-none transition-all text-sm font-bold text-[#003d2b]" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#003d2b]/40 ml-1">Required Expertise</label>
                        <div className="relative">
                          <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#8dc63f]/40 outline-none transition-all text-sm font-bold text-[#003d2b] appearance-none cursor-pointer">
                            <option>Solar Layout & Design</option>
                            <option>PVsyst Simulation</option>
                            <option>Electrical SLD Engineering</option>
                            <option>BOQ & Cost Optimization</option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8dc63f]">
                             <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#003d2b]/40 ml-1">Project Details</label>
                        <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#8dc63f]/40 outline-none transition-all text-sm font-bold text-[#003d2b] resize-none" />
                      </div>

                      <button 
                        disabled={loading}
                        className="w-full bg-[#003d2b] hover:bg-[#8dc63f] active:scale-[0.97] text-white hover:text-[#003d2b] py-5 rounded-full font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 mt-4 shadow-xl shadow-[#003d2b]/10"
                      >
                        {loading ? "Processing..." : <>Initiate Technical Consultation <Send size={14} /></>}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-[#8dc63f]/10 text-[#8dc63f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-[#003d2b] mb-4 uppercase tracking-tight">Transmission Successful</h3>
                    <p className="text-slate-500 text-sm font-medium px-6 leading-relaxed">Our lead design engineer will contact you shortly to discuss your requirements.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#8dc63f] hover:text-[#003d2b] transition-colors border-b-2 border-[#8dc63f]/20 hover:border-[#003d2b]"
                    >
                      New Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Circle (Matching Hero) */}
        <div className="mt-32 flex flex-col items-center gap-4 opacity-20">
             <div className="w-[2px] h-20 bg-gradient-to-b from-[#8dc63f] to-transparent" />
             <div className="w-2 h-2 rounded-full bg-[#8dc63f]" />
        </div>
      </div>
    </section>
  );
}