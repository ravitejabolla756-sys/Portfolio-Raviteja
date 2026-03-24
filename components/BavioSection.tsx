"use client";

import { motion } from "framer-motion";
import { Server, Zap, Activity } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function BavioSection() {
  return (
    <section id="bavio-details" className="py-24 relative overflow-hidden bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionWrapper delay={0}>
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#ff7a00] uppercase tracking-wider mb-2">
              Core Project Spotlight
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Bavio.in
            </h3>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Details */}
          <SectionWrapper delay={0.1}>
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-[#9a9a9a] leading-relaxed">
                Automation-first business platform for managing communication, workflows, and operations using virtual numbers and AI-driven systems.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <div className="w-24 text-sm font-bold text-[#9a9a9a]/40 uppercase tracking-wide">Focus</div>
                  <div className="flex-1 text-[#9a9a9a] font-bold">SaaS + Automation + Communication Infrastructure</div>
                </div>
                <div className="flex items-start gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <div className="w-24 text-sm font-bold text-[#9a9a9a]/40 uppercase tracking-wide">Tech</div>
                  <div className="flex-1 text-[#9a9a9a] font-bold">Web + APIs, n8n Automation, Backend systems</div>
                </div>
                <div className="flex items-start gap-3 pb-2">
                  <div className="w-24 text-sm font-bold text-[#9a9a9a]/40 uppercase tracking-wide">Status</div>
                  <div className="flex-1 inline-flex items-center">
                    <span className="px-3 py-1 bg-[#141414] text-amber-500 border border-[rgba(255,255,255,0.08)] text-xs font-bold uppercase rounded-md tracking-wider">
                      Under Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Right Column: System View */}
          <SectionWrapper delay={0.3}>
            <motion.div
              whileHover={{ y: -5, borderColor: "#ff7a00" }}
              className="rounded-2xl bg-[#141414] border border-[rgba(255,255,255,0.08)] p-8 md:p-10 shadow-2xl relative group overflow-hidden transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Activity className="text-[#ff7a00]" size={24} />
                System View
              </h4>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-[#0b0b0b] p-2 rounded-lg text-[#ff7a00] border border-[rgba(255,255,255,0.08)] group-hover:border-[#ff7a00] transition-colors">
                    <Server size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">Virtual Communication Routing</h5>
                    <p className="text-[#9a9a9a] text-sm mt-1">Virtual numbers routing communication into automation pipelines.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-[#0b0b0b] p-2 rounded-lg text-[#ff7a00] border border-[rgba(255,255,255,0.08)] group-hover:border-[#ff7a00] transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">n8n Automation Workflows</h5>
                    <p className="text-[#9a9a9a] text-sm mt-1">n8n-based workflows for leads, billing, notifications.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-[#0b0b0b] p-2 rounded-lg text-[#ff7a00] border border-[rgba(255,255,255,0.08)] group-hover:border-[#ff7a00] transition-colors">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">Centralized Operations Hub</h5>
                    <p className="text-[#9a9a9a] text-sm mt-1">Monitoring operations from a central dashboard.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
