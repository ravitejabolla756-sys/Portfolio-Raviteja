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
    <footer className="relative py-16 px-6 mt-10 border-t border-white/5 overflow-hidden">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 bg-transparent pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 191, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Dim gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Global Access Log badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-7 py-3 rounded-2xl border border-accent/60 bg-black/80 backdrop-blur-md shadow-[0_0_35px_var(--accent-glow)] font-mono"
        >
          <span className="text-sm text-neutral-400">
            Global Access Log:{" "}
            <span className="text-accent font-bold text-base tracking-widest drop-shadow-[0_0_8px_var(--accent)]">
              {String(count).padStart(3, "0")}
            </span>
          </span>
        </motion.div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-mono text-neutral-400">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent)] transition-all"
            >
              {`{ ${l.label} }`}
            </a>
          ))}
        </nav>

        {/* Attribution */}
        <div className="text-center text-xs text-neutral-500 font-mono space-y-1.5">
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
