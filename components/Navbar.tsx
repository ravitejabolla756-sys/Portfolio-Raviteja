"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

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

  const [isDark, setIsDark] = useState(true);

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

    // Theme initialization
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
        <a href="#" onClick={(e) => scrollTo(e, "hero")} className="text-xl font-bold tracking-tighter text-[var(--text)] hover:text-accent transition-colors" data-hover>
          Bolla <span className="text-accent">Ravi Teja</span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollTo(e, link.href)}
                className="relative text-sm font-medium transition-colors p-1"
                data-hover
              >
                <span className={activeSection === link.href ? "text-accent" : "text-slate-500 dark:text-slate-400 hover:text-[var(--text)]"}>
                  {link.name}
                </span>
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ y: 20, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} className="text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ y: 20, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} className="text-accent" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
