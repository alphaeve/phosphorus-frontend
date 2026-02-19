"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="relative py-24 bg-white overflow-hidden flex flex-col items-center">
      {/* 1. UNIFORM ARCHITECTURAL GRID (Lavender Tint) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#bbade0 1px, transparent 1px), linear-gradient(90deg, #bbade0 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* CENTRALIZED UNIFORM CONTAINER */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#c79e81]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c79e81]">Get In Touch</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A192F] tracking-tighter leading-none mb-8">
              Let's <span className="italic font-light text-[#bbade0]">Connect.</span>
            </h2>

            <p className="text-slate-500 text-lg font-normal leading-relaxed mb-12">
              Designing high-performance solar infrastructure requires precision. 
              Let's discuss your technical requirements and project ROI.
            </p>

            {/* Info Cards */}
            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  label: "Headquarters", 
                  content: "C1B/158, BHATPORE GIDC, Surat, India",
                },
                { 
                  icon: Phone, 
                  label: "Consultation", 
                  content: "+91 990xx xxxx4", 
                },
                { 
                  icon: Mail, 
                  label: "Engineering Support", 
                  content: "info@prosperous.in", 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#bbade0] group-hover:bg-[#0A192F] group-hover:text-white transition-all duration-500">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#c79e81] mb-1 block">
                      {item.label}
                    </span>
                    <h4 className="text-[16px] font-bold text-[#0A192F]">{item.content}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM CARD */}
          <div className="relative">
            {/* Subtle Lavender glow behind card */}
            <div className="absolute -inset-4 bg-[#bbade0]/5 rounded-[3rem] blur-3xl -z-10" />
            
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-xl font-bold text-[#0A192F] mb-8 tracking-tight">Technical Inquiry</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                          <input required type="text" className="w-full px-5 py-3.5 rounded-lg bg-slate-50 border border-transparent focus:bg-white focus:border-[#c79e81]/30 outline-none transition-all text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                          <input required type="email" className="w-full px-5 py-3.5 rounded-lg bg-slate-50 border border-transparent focus:bg-white focus:border-[#c79e81]/30 outline-none transition-all text-sm font-medium" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Service Type</label>
                        <select className="w-full px-5 py-3.5 rounded-lg bg-slate-50 border border-transparent focus:bg-white focus:border-[#c79e81]/30 outline-none transition-all text-sm font-medium appearance-none">
                          <option>Solar Design Engineering</option>
                          <option>Electrical/Structural SLDs</option>
                          <option>Performance Analytics</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                        <textarea rows={4} className="w-full px-5 py-3.5 rounded-lg bg-slate-50 border border-transparent focus:bg-white focus:border-[#c79e81]/30 outline-none transition-all text-sm font-medium resize-none" />
                      </div>

                      <button 
                        disabled={loading}
                        className="w-full bg-[#0A192F] hover:bg-[#c79e81] text-white py-4 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {loading ? "Processing..." : <>Send Proposal Request <Send size={14} /></>}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-slate-50 text-[#c79e81] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">Inquiry Received</h3>
                    <p className="text-slate-500 text-sm">Our engineering team will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[9px] font-bold uppercase tracking-widest text-[#bbade0] hover:text-[#0A192F] transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}