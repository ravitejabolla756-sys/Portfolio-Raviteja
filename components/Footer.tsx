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
    <footer className="relative py-16 px-6 mt-10 border-t border-white/5 bg-[#0b0b0b]">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Global Access Log badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-7 py-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#141414] font-mono"
        >
          <span className="text-sm text-[#9a9a9a]">
            Global Access Log:{" "}
            <span className="font-bold text-base tracking-widest text-[#ff7a00]">
              {String(count).padStart(3, "0")}
            </span>
          </span>
        </motion.div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-mono text-[#9a9a9a]/40">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-white transition-all underline decoration-transparent hover:decoration-[#ff7a00] underline-offset-4"
            >
              {`{ ${l.label} }`}
            </a>
          ))}
        </nav>

        {/* Attribution */}
        <div className="text-center text-xs text-[#9a9a9a]/20 font-mono space-y-1.5">
          <p>Thanks for visiting. Hope you liked it.</p>
          <p>
            Built by{" "}
            <span className="text-[#9a9a9a]/40 font-semibold">Bolla Ravi Teja</span> ·{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
