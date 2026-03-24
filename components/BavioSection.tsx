"use client";

import { motion } from "framer-motion";
import { Server, Zap, Activity } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function BavioSection() {
  return (
    <section id="bavio" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionWrapper delay={0}>
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Core Project Spotlight
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Bavio.in
            </h3>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Details */}
          <SectionWrapper delay={0.1}>
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Automation-first business platform for managing communication, workflows, and operations using virtual numbers and AI-driven systems.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
                  <div className="w-24 text-sm font-semibold text-slate-500 uppercase tracking-wide">Focus</div>
                  <div className="flex-1 text-slate-300 font-medium">SaaS + Automation + Communication Infrastructure</div>
                </div>
                <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
                  <div className="w-24 text-sm font-semibold text-slate-500 uppercase tracking-wide">Tech</div>
                  <div className="flex-1 text-slate-300 font-medium">Web + APIs (Twilio/Exotel type), Automation (n8n), Backend systems</div>
                </div>
                <div className="flex items-start gap-3 pb-2">
                  <div className="w-24 text-sm font-semibold text-slate-500 uppercase tracking-wide">Status</div>
                  <div className="flex-1 inline-flex items-center">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold uppercase rounded-full tracking-wider">
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
              data-hover
              whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
              className="rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 md:p-10 shadow-2xl relative group overflow-hidden transition-colors duration-300"
            >
              {/* Accent lines/decorations */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/30 transition-all duration-700"></div>

              <h4 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                <Activity className="text-accent" size={24} />
                System View
              </h4>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    <Server size={20} />
                  </div>
                  <div>
                    <h5 className="text-slate-200 font-medium text-lg group-hover:text-white transition-colors">Virtual Communication Routing</h5>
                    <p className="text-slate-400 text-sm mt-1">Virtual numbers routing communication into automation pipelines.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h5 className="text-slate-200 font-medium text-lg group-hover:text-white transition-colors">n8n Automation Workflows</h5>
                    <p className="text-slate-400 text-sm mt-1">n8n-based workflows for leads, billing, notifications.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h5 className="text-slate-200 font-medium text-lg group-hover:text-white transition-colors">Centralized Operations Hub</h5>
                    <p className="text-slate-400 text-sm mt-1">Monitoring operations from a central dashboard.</p>
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
