"use client";

import { motion } from "framer-motion";

export default function Bavio() {
  return (
    <section id="bavio" className="py-24 px-6 max-w-6xl mx-auto bg-[#0b0b0b]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#141414] text-[#9a9a9a] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
            Core System
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Bavio<span className="text-[#ff7a00]">.in</span>
          </h2>
          <p className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-10">
            Automation-first business platform for managing communication, workflows, and operations using virtual numbers and AI-driven systems.
          </p>

          <dl className="space-y-5">
            {[
              { label: "Focus", value: "SaaS + Automation + Communication Infrastructure", color: "text-white" },
              { label: "Tech", value: "Web APIs, n8n Automation, Flutter, Firebase", color: "text-[#9a9a9a]" },
              { label: "Status", value: "Under Development", color: "text-amber-500" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-[#141414] border-l border-[rgba(255,255,255,0.08)] pl-5 py-3 rounded-r-xl">
                <dt className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a]/40 w-16 shrink-0 pt-0.5">{item.label}</dt>
                <dd className={`text-sm font-bold ${item.color}`}>{item.value}</dd>
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
            whileHover={{ y: -5, borderColor: "#ff7a00" }}
            className="rounded-3xl bg-[#141414] border border-[rgba(255,255,255,0.08)] p-8 md:p-10 relative overflow-hidden group transition-all"
          >
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3 font-mono">
              <span className="text-[#ff7a00]">$</span> system_architecture.sh
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
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xl text-[#ff7a00] group-hover:border-[#ff7a00] transition-colors">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-[#9a9a9a] text-sm leading-relaxed">{item.desc}</p>
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
