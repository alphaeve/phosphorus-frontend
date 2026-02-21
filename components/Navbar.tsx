"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Added for optimized logo loading
import { usePathname } from "next/navigation";
import { Menu, X, LayoutGrid, Users, Leaf, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
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
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
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

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed w-full top-4 md:top-6 z-[100] px-4 md:px-6 flex justify-center">
      <nav
        className={cn(
          "w-full max-w-6xl transition-all duration-500 border relative",
          isOpen ? "rounded-[2rem] bg-[#001a12]/95 backdrop-blur-3xl" : "rounded-full",
          scrolled 
            ? "bg-[#001a12]/80 backdrop-blur-2xl border-white/10 py-2.5 shadow-2xl" 
            : "bg-black/20 backdrop-blur-xl border-white/10 py-4"
        )}
      >
        <div className="px-6 md:px-10 flex justify-between items-center relative z-[110]">
          
          {/* --- LOGO AREA --- */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-10 w-40 md:h-12 md:w-48 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Prosperous Consultancy Logo"
                fill
                priority
                className="object-contain"
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
                    <ChevronDown 
                      size={12} 
                      className={cn("transition-transform duration-300", hoverDropdown === link.name && "rotate-180")} 
                    />
                  )}
                </Link>

                {/* MEGA DROPDOWN */}
                <AnimatePresence>
                  {link.dropdown && hoverDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[450px] bg-[#001a12]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl p-6 z-[120]"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href} 
                            className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                          >
                            <div className="p-2.5 bg-[#8dc63f]/10 rounded-xl text-[#8dc63f] group-hover:bg-[#8dc63f] group-hover:text-black transition-all duration-300">
                              <item.icon size={18} />
                            </div>
                            <div>
                              <div className="text-[10px] font-black uppercase text-white tracking-widest group-hover:text-[#8dc63f] transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[7px] text-[#8dc63f] tracking-[0.2em] font-bold uppercase mt-1 opacity-60">
                                {item.sub}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* CTA BUTTON */}
            <Link 
              href="/#contact" 
              className="bg-[#8dc63f] text-[#001a12] px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#8dc63f]/20 active:scale-95"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-[#8dc63f] hover:text-white transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu (Glass Style) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }} 
              className="md:hidden px-6 pb-10 pt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 last:border-0 text-white font-black">
                    {link.dropdown ? (
                      <div>
                        <button 
                          onClick={() => setMobileMenuOpen(mobileMenuOpen === link.name ? null : link.name)} 
                          className="flex items-center justify-between w-full py-4 text-[11px] uppercase tracking-widest text-white/90"
                        >
                          {link.name} 
                          <ChevronDown size={16} className={cn("text-[#8dc63f] transition-transform", mobileMenuOpen === link.name && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {mobileMenuOpen === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: "auto", opacity: 1 }} 
                              className="bg-[#8dc63f]/5 rounded-2xl mb-4 overflow-hidden"
                            >
                              <div className="p-3 flex flex-col gap-1">
                                {link.dropdown.map((sub) => (
                                  <Link 
                                    key={sub.name} 
                                    href={sub.href} 
                                    className="flex items-center gap-4 p-4 text-[10px] font-bold text-white/70 uppercase tracking-widest hover:text-[#8dc63f]"
                                  >
                                    <sub.icon size={16} className="text-[#8dc63f]" /> 
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="block py-4 text-[11px] uppercase tracking-widest text-white/90 hover:text-[#8dc63f]"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link 
                  href="/#contact" 
                  className="mt-4 w-full text-center bg-[#8dc63f] text-[#001a12] py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg"
                >
                  Consult Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}