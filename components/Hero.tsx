"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden bg-[#0b0b0b] text-center"
    >
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "20px" }}
            animate={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[120px] font-extrabold text-white leading-tight mb-8 tracking-[2px]"
          >
            RAVI <span className="text-[#ff7a00]">TEJA</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-[#9a9a9a] font-medium tracking-[2px] uppercase max-w-3xl"
          >
            Automation Systems • Systems Developer • Workflow Automation
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle background atmosphere - no blue */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,0,0.03)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  );
}
