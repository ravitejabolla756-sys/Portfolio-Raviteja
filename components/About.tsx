"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          <div className="w-12 h-[2px] bg-accent" />
          <h2 className="text-xs font-mono font-black text-accent uppercase tracking-[0.4em]">
            IDENT_SPEC_v4.0
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
            I build digital products that prioritize <span className="text-accent italic">utility over theory</span>.
          </h3>

          <div className="space-y-6 text-neutral-400 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
            <p>
              I am a B.Tech CSE student focused on building real-world digital products with direct utility. 
              My work centers on <span className="text-white border-b-2 border-accent/40">automation systems</span>, 
              AI-integrated applications, and scalable tools that reduce manual effort and solve practical problems.
            </p>
            <p>
              I operate with a product-first approach, prioritizing execution over theory. 
              Current development includes <span className="text-accent underline decoration-1 underline-offset-4 font-bold">Bavio.in</span>, 
              an automation-first platform built around virtual numbers and workflow systems, 
              along with multiple utility-driven mobile applications.
            </p>
            <p className="font-mono text-sm text-accent/80 border-l-2 border-accent/20 pl-6 mt-10">
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
