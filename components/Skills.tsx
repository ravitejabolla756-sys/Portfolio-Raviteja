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

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#ff7a00]">Stack</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 rounded-md text-sm font-bold transition-all border ${
                activeTab === tab
                  ? "bg-[#ff7a00] text-black border-[#ff7a00]"
                  : "bg-transparent text-[#9a9a9a] border-[rgba(255,255,255,0.08)] hover:border-[#ff7a00]/50"
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skillsData[activeTab].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{
                  y: -2,
                  borderColor: "#ff7a00",
                }}
                className="p-6 rounded-xl bg-[#141414] border border-[rgba(255,255,255,0.08)] flex items-center gap-4 group transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] group-hover:bg-[#ff7a00] transition-colors" />
                <span className="text-[#9a9a9a] font-bold group-hover:text-white transition-colors">
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
