"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Technical Optimization",
    title: "AI-Driven Yield Optimization in Utility-Scale Solar",
    excerpt: "Exploring how machine learning algorithms are revolutionizing real-time performance tracking and predictive maintenance.",
    content: `<h3>Predictive Maintenance</h3><p>By leveraging SCADA data and AI, engineers can now predict inverter failures before they happen, reducing downtime by up to 30%.</p>`,
    author: "Arjun Mehta",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Grid Compliance",
    title: "Navigating Technical Compliance for Grid Integration",
    excerpt: "A deep dive into the engineering requirements for integrating large-scale solar infrastructure into national power grids.",
    content: `<p>Grid stability is the greatest challenge facing the renewable transition. Solar engineers must design systems that provide frequency regulation.</p>`,
    author: "Siddharth Rao",
    date: "Feb 05, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Innovation",
    title: "The Rise of Bifacial Modules and Single-Axis Trackers",
    excerpt: "Why the combination of bifacial technology and tracking systems has become the baseline for ROI in modern solar design.",
    content: `<p>Single-axis trackers combined with bifacial modules are delivering up to 25% higher LCOE efficiency.</p>`,
    author: "Elena Rodriguez",
    date: "Feb 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="relative py-24 bg-white min-h-screen flex flex-col items-center overflow-hidden">
      
      {/* ARCHITECTURAL GRID BACKGROUND (Matches Services Theme) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#003d2b 1px, transparent 1px),
            linear-gradient(90deg, #003d2b 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="w-full max-w-6xl px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {/* SECTION HEADER */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-[2px] bg-[#8dc63f]" />
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#8dc63f] uppercase">
                        Technical Journal
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter leading-[0.9]">
                  SOLAR <span className="italic font-light text-[#8dc63f]">INSIGHTS.</span>
                </h2>
              </div>

              {/* BLOG LISTING GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className="group cursor-pointer flex flex-col h-full bg-white/50"
                  >
                    {/* Image Container - Removed Grayscale effect */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-[#003d2b] text-white px-3 py-1 rounded-full">
                        <span className="text-[8px] font-bold uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-3 text-[#003d2b]/40 text-[9px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#8dc63f]" /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#8dc63f]" /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-black text-[#003d2b] mb-4 group-hover:text-[#8dc63f] transition-colors leading-tight uppercase tracking-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-3 text-[#003d2b] text-[10px] font-black uppercase tracking-[0.25em] group-hover:gap-5 transition-all">
                        Analyze Post <ArrowRight size={16} className="text-[#8dc63f]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* --- BLOG DETAIL VIEW --- */
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-[#003d2b]/60 hover:text-[#003d2b] transition-colors mb-12 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Back to Archive</span>
              </button>

              <div className="mb-12">
                <span className="text-[#8dc63f] text-[10px] font-black uppercase tracking-[0.4em]">
                  {selectedBlog.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-[#003d2b] mt-4 mb-8 leading-[1.1] tracking-tighter uppercase">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex items-center gap-8 py-8 border-y border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Lead Analyst</span>
                        <span className="text-sm font-black text-[#003d2b]">{selectedBlog.author}</span>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Publication</span>
                        <span className="text-sm font-black text-[#003d2b]">{selectedBlog.date}</span>
                    </div>
                </div>
              </div>

              <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
                <img src={selectedBlog.image} className="w-full h-full object-cover" alt="Solar Tech" />
              </div>

              <article className="prose prose-slate max-w-none">
                <div 
                  className="text-[#003d2b]/80 leading-[1.8] space-y-8 text-lg font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                />
              </article>

              {/* Technical Newsletter CTA */}
              <div className="mt-20 p-12 bg-[#003d2b] rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                    {/* Subtle Logo Branding in CTA */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#8dc63f]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                    
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">Technical Deep-Dives</h3>
                    <p className="text-white/60 mb-10 text-sm font-medium">Join 500+ solar EPC engineers receiving monthly technical reports.</p>
                    
                    <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input 
                            type="email" 
                            placeholder="Engineering Email" 
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8dc63f] w-full max-w-sm backdrop-blur-md" 
                        />
                        <button className="bg-[#8dc63f] text-[#003d2b] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white transition-all w-full sm:w-auto">
                            Subscribe
                        </button>
                    </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}