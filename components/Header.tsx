"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOME_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const USER_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const BOOK_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);
const CODE_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const MAIL_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MENU_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CLOSE_SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const links = [
  { name: "Home", href: "#home", Icon: HOME_SVG },
  { name: "About", href: "#about", Icon: USER_SVG },
  { name: "Education", href: "#education", Icon: BOOK_SVG },
  { name: "Skills", href: "#skills", Icon: CODE_SVG },
  { name: "Projects", href: "#projects", Icon: CODE_SVG },
  { name: "Contact", href: "#contact", Icon: MAIL_SVG },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 160;
      let current = "#home";
      links.forEach(({ href }) => {
        const el = document.getElementById(href.substring(1));
        if (el && el.offsetTop <= scrollPos) current = href;
      });
      setActiveHash(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 4.0 }}
        className={`fixed top-0 inset-x-0 z-[50] transition-all duration-300 ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl border-b border-[#00bfff]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          {/* Brand */}
          <a
            href="#home"
            className="text-lg font-black tracking-widest text-white hover:text-[#00bfff] transition-colors font-mono"
          >
            RAVI<span className="text-[#00bfff]">.</span>TEJA
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeHash === href
                    ? "text-[#00bfff] bg-[#00bfff]/8"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={activeHash === href ? "text-[#00bfff]" : "text-neutral-600"}>
                  <Icon />
                </span>
                {name}
                {activeHash === href && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#00bfff] shadow-[0_0_8px_#00bfff]"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CLOSE_SVG /> : <MENU_SVG />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-[49] w-72 bg-black/95 backdrop-blur-2xl border-l border-[#00bfff]/15 flex flex-col pt-24 px-6 gap-2"
          >
            {links.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                  activeHash === href
                    ? "bg-[#00bfff]/12 text-[#00bfff] border border-[#00bfff]/30"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon />
                {name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
