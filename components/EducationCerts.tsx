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
      whileHover={{ y: -5, boxShadow: isAchievement ? "0 0 30px rgba(0,191,255,0.3)" : "0 0 25px rgba(0,191,255,0.2)" }}
      className={`relative rounded-2xl bg-black/60 border border-[#00bfff]/25 p-7 transition-all ${isAchievement ? "shadow-[0_0_20px_rgba(0,191,255,0.1)]" : ""}`}
    >
      <div className={`absolute ${isAchievement ? "right-[-35px]" : "left-[-35px]"} top-8 w-3 h-3 rounded-full bg-[#00bfff] shadow-[0_0_12px_#00bfff] ring-4 ring-black`} />
      
      <div className="flex items-start justify-between gap-4 mb-3">
        <p className="text-[#00bfff] font-mono text-xs font-bold tracking-tighter">{item.year}</p>
        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${isAchievement ? "bg-[#00bfff] text-black" : "bg-[#00bfff]/10 text-[#00bfff]"} border border-[#00bfff]/20`}>
          {item.badge}
        </span>
      </div>
      
      <h4 className="text-white font-black text-xl leading-tight mb-2 tracking-tight">{item.title}</h4>
      <p className="text-neutral-400 text-sm font-medium leading-relaxed">{item.subtitle}</p>
      {item.institution && (
        <p className="text-neutral-500 text-xs mt-3 font-mono opacity-80">{item.institution}</p>
      )}
    </motion.div>
  );
}

export default function EducationCerts() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          My <span className="text-[#00bfff] drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">Background</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Education Rail */}
        <div>
          <h3 className="text-xs font-mono font-black text-[#00bfff] uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
            <span className="inline-block w-8 h-[2px] bg-[#00bfff]" /> Education
          </h3>
          <div className="relative pl-10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00bfff] via-[#00bfff]/50 to-transparent"
            />
            <div className="space-y-6">
              {education.map((item, i) => (
                <TimelineCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Rail */}
        <div>
          <h3 className="text-xs font-mono font-black text-[#00bfff] uppercase tracking-[0.3em] mb-10 flex items-center gap-3 md:justify-end">
            Achievements <span className="inline-block w-8 h-[2px] bg-[#00bfff]" />
          </h3>
          <div className="relative md:pr-10 md:pl-0 pl-10 text-right">
             {/* Mobile rail still on left, desktop rail on right if preferred? Let's keep it simple for now, but following the "dual rails" logic */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
              className="absolute md:right-[5px] md:left-auto left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00bfff] via-[#00bfff]/50 to-transparent"
            />
            <div className="space-y-6">
              {achievements.map((item, i) => (
                <TimelineCard key={i} item={item} index={i} type="achieve" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
