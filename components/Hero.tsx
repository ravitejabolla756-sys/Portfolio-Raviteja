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
        ctx.fillStyle = bright ? "#ffffff" : `rgba(0, 191, 255, ${0.2 + Math.random() * 0.3})`;
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none delay-700" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-0 md:gap-2"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-6">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white">
              BOLLA
            </h1>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-stroke-accent drop-shadow-[0_0_15px_var(--accent-glow)]">
              RAVI
            </h1>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-stroke hover:text-white transition-all duration-700 cursor-default">
            TEJA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="px-6 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,191,255,0.1)]">
            <span className="text-accent text-sm font-black tracking-[0.2em] uppercase">
              Automation Architect
            </span>
          </div>
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-white/70 text-sm font-black tracking-[0.2em] uppercase">
              Systems Developer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">
              SCROLL_INITIATE
            </span>
            <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 96] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-8 bg-white/50 blur-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
