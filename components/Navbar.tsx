"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LayoutGrid, Users, Leaf, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#Hero" },
  { 
    name: "About Us", 
    href: "/about/company",
    dropdown: [
      { name: "About Company", sub: "SOLAR EXPERTISE", href: "/about/company", icon: LayoutGrid },
      { name: "Our Team", sub: "EXPERT ENGINEERS", href: "/about/team", icon: Users },
      { name: "Our Vision", sub: "SUSTAINABLE FUTURE", href: "/about/culture", icon: Leaf },
      { name: "Careers", sub: "JOIN OUR MISSION", href: "/about/careers", icon: Briefcase },
    ]
  },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed w-full top-4 md:top-6 z-[100] px-3 md:px-6 flex justify-center font-sans">
      <nav
        className={cn(
          "w-full max-w-6xl border relative",
          // Removed transition-all on mobile to prevent "circle to rectangle" morphing
          "md:transition-all md:duration-300", 
          isOpen 
            ? "rounded-[1.5rem] bg-[#001a12] backdrop-blur-3xl shadow-2xl border-white/20" 
            : "rounded-full bg-black/40 backdrop-blur-xl border-white/10",
          scrolled && !isOpen ? "py-2 md:py-2.5" : "py-3 md:py-4"
        )}
      >
        {/* Container: px-2 on mobile moves logo to the very start */}
        <div className="px-2 md:px-10 flex justify-between items-center relative z-[110]">
          
          {/* --- LOGO AREA --- */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-7 w-32 md:h-12 md:w-48">
              <Image
                src="/logo.png"
                alt="Prosperous Consultancy Logo"
                fill
                priority
                className="object-contain object-left" // object-left ensures logo stays far left
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2"
                onMouseEnter={() => setHoverDropdown(link.name)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-1.5",
                    hoverDropdown === link.name || pathname === link.href 
                      ? "text-[#8dc63f]" 
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={12} className={cn("transition-transform duration-300", hoverDropdown === link.name && "rotate-180")} />
                  )}
                </Link>

                <AnimatePresence>
                  {link.dropdown && hoverDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[450px] bg-[#001a12]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl p-6 z-[120]"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href} 
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
                          >
                            <div className="p-2.5 bg-[#8dc63f]/10 rounded-lg text-[#8dc63f] group-hover:bg-[#8dc63f] group-hover:text-black transition-all">
                              <item.icon size={18} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase text-white tracking-widest group-hover:text-[#8dc63f]">{item.name}</span>
                              <span className="text-[7px] text-[#8dc63f] tracking-[0.2em] font-bold uppercase mt-1 opacity-60">{item.sub}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link 
              href="/#contact" 
              className="bg-[#8dc63f] text-[#001a12] px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-[#8dc63f]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE MENU (Instant, No Height Animation) --- */}
        {isOpen && (
          <div className="md:hidden px-5 pb-8 pt-2">
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 last:border-0 text-white font-black">
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => setMobileMenuOpen(mobileMenuOpen === link.name ? null : link.name)} 
                        className="flex items-center justify-between w-full py-4 text-[11px] uppercase tracking-[0.2em] text-white/90"
                      >
                        {link.name} 
                        <ChevronDown size={14} className={cn("text-[#8dc63f] transition-transform", mobileMenuOpen === link.name && "rotate-180")} />
                      </button>
                      {mobileMenuOpen === link.name && (
                        <div className="bg-[#8dc63f]/5 rounded-xl mb-4 p-2 flex flex-col gap-1">
                          {link.dropdown.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              className="flex items-center gap-4 p-4 text-[10px] font-bold text-white/70 uppercase tracking-widest active:text-[#8dc63f]"
                            >
                              <sub.icon size={16} className="text-[#8dc63f]" /> 
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="block py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 active:text-[#8dc63f]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/#contact" 
                className="mt-6 w-full text-center bg-[#8dc63f] text-[#001a12] py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.3em]"
              >
                Consult Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}