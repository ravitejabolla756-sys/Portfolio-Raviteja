"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2025–Present",
    title: "B.Tech CSE",
    subtitle: "Active",
    institution: "SRM Trichy",
    badge: "Active",
  },
  {
    year: "2023–2025",
    title: "+2 (Intermediate)",
    subtitle: "MPC Stream",
    institution: "MPC Stream",
    badge: "Completed",
  },
];

const achievements = [
  {
    year: "2024",
    title: "NIT Trichy – Pragyan Startup Event",
    subtitle: "4th Place – National Level",
    institution: "Recognized for startup idea and execution",
    badge: "ACHIEVEMENT",
  },
];

function TimelineCard({ item, index, type = "edu" }: { item: (typeof education)[0]; index: number; type?: "edu" | "achieve" }) {
  const isAchievement = type === "achieve";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isAchievement ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -4, borderColor: "var(--accent)" }}
      className="relative rounded-[16px] bg-[#141414] border border-[#2a2a2a] p-7 transition-all"
    >
      <div className={`absolute ${isAchievement ? "right-[-35px]" : "left-[-35px]"} top-8 w-3 h-3 rounded-full bg-black border-2 border-accent ring-4 ring-black`} />
      
      <div className="flex items-start justify-between gap-4 mb-3">
        <p className="text-accent font-mono text-xs font-bold tracking-tighter">{item.year}</p>
        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
          {item.badge}
        </span>
      </div>
      
      <h4 className="text-white font-black text-xl leading-tight mb-2 tracking-tight">{item.title}</h4>
      <p className="text-neutral-400 text-sm font-medium leading-relaxed">{item.subtitle}</p>
      {item.institution && (
        <p className="text-neutral-500 text-xs mt-3 font-mono">{item.institution}</p>
      )}
    </motion.div>
  );
}

export default function EducationCerts() {
  return (
    <section id="education" className="bg-[#0b0b0b] py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            My <span className="text-accent glow-accent">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Education Rail */}
          <div>
            <h3 className="text-xs font-mono font-black text-accent uppercase tracking-[2px] mb-10 flex items-center gap-3">
              <span className="inline-block w-8 h-[2px] bg-[#2a2a2a]" /> Education
            </h3>
            <div className="relative pl-10">
              <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-[#2a2a2a]" />
              <div className="space-y-6">
                {education.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Rail */}
          <div>
            <h3 className="text-xs font-mono font-black text-accent uppercase tracking-[2px] mb-10 flex items-center gap-3 md:justify-end">
              Achievements <span className="inline-block w-8 h-[2px] bg-[#2a2a2a]" />
            </h3>
            <div className="relative md:pr-10 md:pl-0 pl-10 text-right">
              <div className="absolute md:right-[5px] md:left-auto left-[5px] top-0 bottom-0 w-[2px] bg-[#2a2a2a]" />
              <div className="space-y-6">
                {achievements.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} type="achieve" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
