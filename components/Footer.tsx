"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 62;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 px-6 mt-10 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Dim grid background overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black/30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Global Access Log badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-7 py-3 rounded-2xl border border-accent/60 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg dark:shadow-[0_0_35px_rgba(249,115,22,0.5)] font-mono"
        >
          <span className="text-sm text-slate-500 dark:text-neutral-400">
            Global Access Log:{" "}
            <span className="text-accent font-bold text-base tracking-widest drop-shadow-[0_0_8px_var(--accent-glow)]">
              {String(count).padStart(3, "0")}
            </span>
          </span>
        </motion.div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-mono text-slate-500 dark:text-neutral-400">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)] transition-all"
            >
              {`{ ${l.label} }`}
            </a>
          ))}
        </nav>

        {/* Attribution */}
        <div className="text-center text-xs text-slate-400 dark:text-neutral-500 font-mono space-y-1.5">
          <p>Thanks for visiting. Hope you liked it.</p>
          <p>
            Built by{" "}
            <span className="text-accent font-semibold">Bolla Ravi Teja</span> ·{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
