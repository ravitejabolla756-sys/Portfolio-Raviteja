"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData: Record<string, string[]> = {
  "App Development": [
    "Flutter",
    "Dart Programming",
    "UI Systems Design",
    "App Architecture",
    "Cross-platform Apps",
  ],
  "Automation": [
    "n8n Workflows",
    "API Integrations",
    "Process Automation",
    "Task Orchestration",
    "Webhook Systems",
  ],
  "Backend": [
    "Firebase",
    "Authentication Systems",
    "REST APIs",
    "Database Design",
    "Cloud Functions",
  ],
  "Tools": [
    "GitHub",
    "Vercel",
    "AI APIs",
    "Dev Environments",
    "Linux Terminal",
  ],
};

const tabs = Object.keys(skillsData);
const DOTS = Array.from({ length: 120 });

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Animated dots mesh background (top-right) */}
      <div className="absolute right-0 top-12 md:right-16 pointer-events-none z-0 opacity-20 dark:opacity-30">
        <motion.div
          className="grid grid-cols-10 gap-3"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        >
          {DOTS.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent"
              style={{ opacity: 0.4 + (i % 5) * 0.1 }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)]">
            Technical <span className="text-accent glow-accent">Stack</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                activeTab === tab
                  ? "bg-accent text-white border-accent shadow-[0_0_20px_var(--accent-glow)] font-bold"
                  : "bg-transparent text-slate-500 dark:text-neutral-400 border-slate-200 dark:border-white/15 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {skillsData[activeTab].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{
                  y: -5,
                  borderColor: "var(--accent)",
                  boxShadow: "0 0 25px var(--accent-glow)",
                }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/8 backdrop-blur-sm flex items-center gap-4 group cursor-default transition-all"
              >
                <div className="w-2 h-2 rounded-sm bg-slate-200 dark:bg-white/20 group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--accent)] transition-all" />
                <span className="text-slate-700 dark:text-neutral-200 font-medium group-hover:text-accent transition-colors text-sm sm:text-base">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
