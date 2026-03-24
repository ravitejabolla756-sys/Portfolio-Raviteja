"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#0b0b0b]">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-12 h-[1px] bg-[#ff7a00]" />
          <h2 className="text-xs font-mono font-bold text-[#ff7a00] uppercase tracking-[4px]">
            IDENT_SPEC_v4.0
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            I build digital products that prioritize <span className="text-[#ff7a00]">utility over theory</span>.
          </h3>

          <div className="space-y-6 text-[#9a9a9a] text-base md:text-lg font-medium leading-relaxed max-w-3xl">
            <p>
              I am a B.Tech CSE student focused on building real-world digital products with direct utility. 
              My work centers on <span className="text-white border-b border-[#ff7a00]/40">automation systems</span>, 
              AI-integrated applications, and scalable tools that reduce manual effort and solve practical problems.
            </p>
            <p className="about-box border-l-2 border-[#ff7a00] pl-6 mt-10 font-medium italic text-white/90">
              I operate with a product-first approach, prioritizing execution over theory. 
              Current development includes <span className="text-[#ff7a00] font-bold">Bavio.in</span>, 
              an automation-first platform built around virtual numbers and workflow systems.
            </p>
            <p className="font-mono text-sm text-[#ff7a00] pt-4">
              Core direction: system design, automation architecture, and rapid deployment of functional products.
              <br/>
              <span className="text-white font-bold opacity-100 mt-2 block tracking-tight">
                • Execution-driven. Systems-focused. Output-oriented.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
