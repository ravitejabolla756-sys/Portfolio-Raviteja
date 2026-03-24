"use client";

import { motion } from "framer-motion";

// Inline SVG icons to avoid lucide-react compatibility issues
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20"
    >
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Glow behind avatar */}
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,_#00bfff_0,_transparent_70%)] opacity-25 blur-2xl scale-110 animate-pulse" />
        <div className="absolute inset-0 rounded-3xl border border-[#00bfff]/30 bg-black/70 shadow-[0_0_40px_rgba(0,191,255,0.15)] overflow-hidden z-10">
          {/* Placeholder avatar using DiceBear */}
          <img
            src="https://api.dicebear.com/9.x/notionists/svg?seed=RaviTeja&backgroundColor=transparent"
            alt="Ravi Teja Avatar"
            className="h-full w-full object-contain p-4"
          />
        </div>
        {/* Cyber corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00bfff] rounded-tl-xl z-20" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00bfff] rounded-tr-xl z-20" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00bfff] rounded-bl-xl z-20" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00bfff] rounded-br-xl z-20" />
      </motion.div>

      <motion.div
        className="md:flex-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          About <span className="text-[#00bfff] drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]">Me</span>
        </h2>
        <div className="space-y-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          <p>
            I&apos;m a BTech CSE student specializing in IoT, Cyber Security, and Cloud Computing.
          </p>
          <p>
            I focus on building real-world applications and automation-driven systems. My work centers around creating scalable tools that solve practical problems using AI and workflows.
          </p>
          <p>
            Currently building <span className="text-[#00bfff] font-semibold">Bavio.in</span> alongside scalable automation systems.
          </p>
          <p className="flex items-center gap-3 mt-6 text-white font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00bfff] shadow-[0_0_10px_#00bfff] animate-pulse" />
            Execution-focused. Product-driven mindset.
          </p>
        </div>
        <div className="mt-10 flex gap-4">
          {[
            { href: "https://github.com/ravitejabolla756-sys", icon: <GithubIcon />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/raviteja-bolla-805045373/?isSelfProfile=true", icon: <LinkedinIcon />, label: "LinkedIn" },
            { href: "mailto:ravitejabolla756@gmail.com", icon: <MailIcon />, label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,191,255,0.5)", borderColor: "#00bfff" }}
              className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#00bfff] transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
