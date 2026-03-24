"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "[0.000000] Booting Portfolio System v2.0...",
  "[0.021543] Initializing Core Modules... [OK]",
  "[0.045312] Loading Profile: Bolla Ravi Teja... [OK]",
  "[0.067123] Verifying Identity... [VERIFIED]",
  "[0.089456] Checking System Integrity... [SECURE]",
  "",
  "[1.102345] Mounting File System...",
  "  - /skills ............ [Mounted]",
  "  - /projects .......... [Mounted]",
  "  - /experience ........ [Mounted]",
  "",
  "[1.345678] Loading Development Tools:",
  "  > Flutter ............ [Ready]",
  "  > Firebase ........... [Ready]",
  "  > n8n ................ [Ready]",
  "  > API Systems ........ [Ready]",
  "",
  "[2.101234] Initializing Interface... [OK]",
  "[2.212345] Starting Services... [OK]",
  "[2.434567] Secure Session... [Established]",
  "",
  "System check complete. No errors detected.",
  "Launching interface...",
  "",
  "guest@raviteja:~$ ./launch_portfolio.sh",
];

export default function TerminalIntro() {
  const [visible, setVisible] = useState(true);
  const [shownLines, setShownLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const currentLine = LINES[i];
      setShownLines((prev) => currentLine !== undefined ? [...prev, currentLine] : prev);
      i++;
      if (i >= LINES.length) {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 1000);
      }
    }, 130);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black text-[#00bfff] font-mono overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0a1628_0,_#000_60%)]" />
          <div className="relative h-full w-full px-6 md:px-16 py-10 md:py-16 flex flex-col justify-start overflow-hidden">
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
              <span className="ml-3 text-[#00bfff]/40 text-xs">terminal — portfolio_system v2.0</span>
            </div>

            <div className="max-w-3xl text-xs md:text-sm space-y-1">
              {shownLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className={`leading-relaxed ${
                    line?.startsWith("guest@") ? "text-white font-bold mt-3 text-sm md:text-base" :
                    line?.includes("[OK]") || line?.includes("[Mounted]") || line?.includes("[Ready]") || line?.includes("[Established]") ? "text-[#00bfff]" :
                    line?.includes("[VERIFIED]") || line?.includes("[SECURE]") ? "text-emerald-400" :
                    line === "" ? "h-2" :
                    "text-[#00bfff]/70"
                  }`}
                >
                  {line}
                </motion.p>
              ))}
              <motion.span
                className="inline-block mt-2 w-2.5 h-4 bg-[#00bfff]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
