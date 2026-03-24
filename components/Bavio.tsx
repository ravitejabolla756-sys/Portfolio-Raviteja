"use client";

import { motion } from "framer-motion";

export default function Bavio() {
  return (
    <section id="bavio" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-accent text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_var(--accent-glow)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Core System
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Bavio<span className="text-accent glow-accent">.in</span>
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10">
            Automation-first business platform for managing communication, workflows, and operations using virtual numbers and AI-driven systems.
          </p>

          <dl className="space-y-5">
            {[
              { label: "Focus", value: "SaaS + Automation + Communication Infrastructure", color: "text-accent" },
              { label: "Tech", value: "Web APIs, n8n Automation, Flutter, Firebase", color: "text-neutral-200" },
              { label: "Status", value: "Under Development", color: "text-amber-400" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-black/30 border-l-2 border-accent/40 pl-5 py-3 rounded-r-xl">
                <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-500 w-16 shrink-0 pt-0.5">{item.label}</dt>
                <dd className={`text-sm font-medium ${item.color}`}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right: Architecture card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 50px var(--accent-glow)" }}
            className="rounded-3xl bg-black/60 border border-accent/30 p-8 md:p-10 shadow-[0_0_30px_rgba(0,191,255,0.1)] relative overflow-hidden group"
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-32 -top-32 w-80 h-80 bg-accent rounded-full blur-[120px] opacity-5 group-hover:opacity-15 transition-opacity duration-700" />

            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3 font-mono">
              <span className="text-accent">$</span> system_architecture.sh
            </h3>

            <ul className="space-y-7">
              {[
                {
                  icon: "↔",
                  title: "Virtual Communication Routing",
                  desc: "Configurable virtual numbers route all communication into automated processing pipelines.",
                },
                {
                  icon: "⚡",
                  title: "n8n Automation Engine",
                  desc: "Workflow-driven handling of leads, billing, and real-time notifications.",
                },
                {
                  icon: "◉",
                  title: "Centralized Operations Hub",
                  desc: "Multi-tenant operations monitored from a unified command center dashboard.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-black border border-white/10 flex items-center justify-center text-accent text-xl group-hover:border-accent/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
