"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Matrix rain canvas ─────────────────────────────────────── */
function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 18);
    const drops: number[] = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px monospace";

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random() > 0.93;
        ctx.fillStyle = bright ? "#ffffff" : `rgba(249, 115, 22, ${0.2 + Math.random() * 0.3})`;
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 55);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
    />
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden"
    >
      {/* Matrix rain */}
      <MatrixCanvas />

      {/* Radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--accent-glow)_0,_var(--bg)_70%)] transition-colors duration-500" />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen blur-[170px] opacity-[0.05] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-accent rounded-full mix-blend-screen blur-[150px] opacity-[0.05] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 4.2, ease: "easeOut" }}
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ delay: 4.4, duration: 0.8 }}
          className="text-xs md:text-sm uppercase text-accent font-mono mb-6 glow-accent"
        >
          System Builder · Automation Focus
        </motion.p>

        {/* Big name */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 leading-none select-none mb-6">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.3, duration: 0.7 }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] font-black text-accent tracking-tighter drop-shadow-[0_0_50px_rgba(249,115,22,0.4)] whitespace-nowrap"
          >
            RAVI TEJA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.3, duration: 0.7 }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] font-black text-stroke tracking-tighter"
          >
            BOLLA
          </motion.h1>
        </div>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.6, duration: 0.6 }}
          className="text-sm md:text-base font-mono tracking-[0.22em] uppercase text-slate-500 dark:text-neutral-400 mb-3"
        >
          BTech CSE · App Builder · Automation Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.6 }}
          className="text-sm md:text-base text-slate-500 dark:text-neutral-500 max-w-lg mx-auto leading-relaxed mb-10"
        >
          Building automation-first products and scalable digital systems for real-world impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.7)" }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 border border-accent bg-accent/10 text-accent dark:text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-accent/20 transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Ravi-Teja-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:border-white/50 transition-colors"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
      >
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="1.5" />
          <motion.circle
            cx="9" cy="9" r="3" fill="currentColor"
            animate={{ cy: [9, 18, 9] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <span className="text-[9px] font-mono tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
