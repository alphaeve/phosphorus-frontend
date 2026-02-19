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
    <section id="blog" className="py-24 bg-white min-h-screen flex flex-col items-center">
      {/* UNIFORM WIDTH CONTAINER (Centralized) */}
      <div className="w-full max-w-6xl px-6">
        
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {/* SECTION HEADER - Centralized Consistency */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-[1px] bg-[#c79e81]" />
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#c79e81] uppercase">
                        Technical Journal
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tighter">
                  Solar <span className="italic font-light text-[#bbade0]">Insights.</span>
                </h2>
              </div>

              {/* GRID - Uniform width cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    {/* Image Container - Minimal Design */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm border border-slate-100">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-[#0A192F]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow px-1">
                      <div className="flex items-center gap-4 mb-3 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Calendar size={12} className="text-[#c79e81]" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} className="text-[#c79e81]" /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#0A192F] mb-3 group-hover:text-[#c79e81] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-[#0A192F] text-[10px] font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                        Read Analysis <ArrowRight size={14} className="text-[#c79e81]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* --- BLOG DETAIL VIEW (Narrowed for readability) --- */
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto" // Closer width for article reading
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-[#0A192F] transition-colors mb-12 group"
              >
                <ArrowLeft size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Archive</span>
              </button>

              <div className="mb-12">
                <span className="text-[#c79e81] text-[10px] font-black uppercase tracking-[0.3em]">
                  {selectedBlog.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mt-4 mb-8 leading-[1.1] tracking-tighter">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex items-center gap-6 py-6 border-y border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Author</span>
                        <span className="text-xs font-bold text-[#0A192F]">{selectedBlog.author}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-100" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Date</span>
                        <span className="text-xs font-bold text-[#0A192F]">{selectedBlog.date}</span>
                    </div>
                </div>
              </div>

              <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-slate-50">
                <img src={selectedBlog.image} className="w-full h-full object-cover grayscale-[0.5]" alt="hero" />
              </div>

              <article className="prose prose-slate max-w-none">
                <div 
                  className="text-slate-600 leading-[1.8] space-y-6 text-lg font-normal"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                />
              </article>

              {/* Minimal Newsletter CTA - Unified Design */}
              <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2 tracking-tight">Technical Deep-Dives</h3>
                    <p className="text-slate-500 mb-8 text-sm font-normal">Join engineers receiving monthly solar infrastructure insights.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input type="email" placeholder="Email Address" className="px-6 py-3 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-[#c79e81] w-full max-w-xs" />
                        <button className="bg-[#0A192F] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#c79e81] transition-all">
                            Subscribe
                        </button>
                    </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}