"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "About", href: "about" },
    { name: "Bavio.in", href: "bavio" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy logic
      const sections = links.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 100; // offset

      let current = "";
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // header offset
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020617]/80 backdrop-blur-md shadow-sm shadow-[#0ea5e9]/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" onClick={(e) => scrollTo(e, "hero")} className="text-xl font-bold tracking-tighter text-white hover:text-[#0ea5e9] transition-colors" data-hover>
          Bolla <span className="text-[#0ea5e9]">Ravi Teja</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollTo(e, link.href)}
              className="relative text-sm font-medium transition-colors p-1"
              data-hover
            >
              <span className={activeSection === link.href ? "text-[#0ea5e9]" : "text-slate-300 hover:text-white"}>
                {link.name}
              </span>
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0ea5e9] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
