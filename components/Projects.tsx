"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const projects = [
  {
    name: "Bavio.in",
    desc: "Automation-first business platform. Virtual numbers + AI-driven workflow automation.",
    tech: "Web APIs · n8n · Firebase",
    status: "Under Development",
    statusColor: "amber",
    url: "https://bavio.in",
  },
  {
    name: "student99.me",
    desc: "Student-focused digital ecosystem for tools, productivity, and automation systems.",
    tech: "Web · AI · Automation",
    status: "Active",
    statusColor: "green",
    url: "https://student99.me",
  },
];

const statusClass: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

function ProjectCard({ p, i }: { p: (typeof projects)[0]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative min-w-[300px] md:min-w-[420px] h-[340px] snap-center rounded-3xl border border-[#00bfff]/20 bg-gradient-to-br from-[#020617] to-[#0a1628] p-8 flex flex-col justify-between group transition-all duration-300 hover:border-[#00bfff] hover:shadow-[0_0_50px_rgba(0,191,255,0.4)]"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-start mb-6">
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${statusClass[p.statusColor]}`}>
            {p.status}
          </span>
          <button
            onClick={() => window.open(p.url, "_blank")}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#00bfff] hover:bg-[#00bfff]/10 hover:border-[#00bfff] hover:shadow-[0_0_20px_rgba(0,191,255,0.6)] transition-all duration-300"
            aria-label={`Open ${p.name}`}
          >
            <ArrowUpRight />
          </button>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00bfff] transition-colors tracking-tight">
          {p.name}
        </h3>
        <p className="text-base text-neutral-400 leading-relaxed font-medium">{p.desc}</p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="pt-6 border-t border-white/5">
        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold block mb-1.5 opacity-60">Engineered With</span>
        <span className="text-base font-bold text-[#00bfff] group-hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.5)] transition-all">{p.tech}</span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          <span className="text-[#00bfff] drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">My</span> Projects
        </h2>
        <p className="text-neutral-500 text-sm mt-4 font-mono flex items-center gap-2">
          <span className="w-8 h-[1px] bg-neutral-800" />
          SYSTEM_LOG: ACTIVE_CORE_BUILDS [02]
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
