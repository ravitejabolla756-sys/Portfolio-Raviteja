"use client";

import { motion } from "framer-motion";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const projects = [
  {
    name: "Bavio.in",
    desc: "Bavio is an AI-powered voice automation platform that enables businesses to deploy scalable, human-like conversational agents for handling calls, workflows, and customer interactions end-to-end.",
    tech: "Web APIs • n8n • Firebase",
    status: "Under Development",
    url: "https://bavio.in",
  },
  {
    name: "student99.me",
    desc: "Productivity platform with 99 essential tools for daily student needs.\nCovers utilities, automation tools, and quick-access digital workflows.",
    tech: "Web • AI • Automation",
    status: "Active",
    url: "https://student99.me",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto bg-[#0b0b0b]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-[#ff7a00]">Projects</span>
        </h2>
        <p className="text-[#9a9a9a]/40 text-sm mt-4 font-mono">
          SYSTEM_LOG: ACTIVE_CORE_BUILDS [02]
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#141414] p-8 flex flex-col justify-between transition-all hover:border-[#ff7a00]"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border border-[#ff7a00] text-[#ff7a00] bg-transparent">
                  {p.status}
                </span>
                <button
                  onClick={() => window.open(p.url, "_blank")}
                  className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-white hover:bg-[#ff7a00] hover:text-black transition-all"
                  aria-label={`Open ${p.name}`}
                >
                  <ArrowUpRight />
                </button>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-[#ff7a00] transition-colors tracking-tight">
                {p.name}
              </h3>
              {/* Force white-space-pre-line to respect \n for Student99 */}
              <p className="text-base text-[#9a9a9a] leading-relaxed font-medium whitespace-pre-line">
                {p.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <span className="text-[10px] text-[#9a9a9a]/60 uppercase tracking-[1px] font-bold block mb-1">Engineered With</span>
              <span className="text-base font-bold text-white group-hover:text-[#ff7a00] transition-all">{p.tech}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
