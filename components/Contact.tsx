"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Bottom radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--accent-glow)_0,_transparent_65%)] opacity-30 pointer-events-none blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-3">
            Contact <span className="text-accent glow-accent">Me</span>
          </h2>
          <p className="text-slate-500 dark:text-neutral-400 mb-2">Initialize connection sequence.</p>
          <a
            href="mailto:ravitejabolla756@gmail.com"
            className="inline-block text-accent font-mono text-sm hover:underline drop-shadow-[0_0_8px_var(--accent-glow)] mt-1"
          >
            ✉ ravitejabolla756@gmail.com
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-slate-50/80 dark:bg-black/50 border border-slate-200 dark:border-accent/20 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-xl dark:shadow-[0_0_50px_rgba(249,115,22,0.05)] relative"
        >
          {/* Terminal dots */}
          <div className="absolute top-5 left-5 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>

          <div className="pt-5 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white dark:bg-black/70 border border-slate-200 dark:border-accent/40 rounded-lg px-4 py-3 text-[var(--text)] text-sm font-mono placeholder:text-slate-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent transition shadow-sm dark:shadow-[inset_0_0_10px_rgba(249,115,22,0.06)]"
              />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-white dark:bg-black/70 border border-slate-200 dark:border-accent/40 rounded-lg px-4 py-3 text-[var(--text)] text-sm font-mono placeholder:text-slate-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent transition shadow-sm dark:shadow-[inset_0_0_10px_rgba(249,115,22,0.06)]"
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="> Type your message here..."
              className="w-full bg-white dark:bg-black/70 border border-slate-200 dark:border-accent/40 rounded-lg px-4 py-3 text-[var(--text)] text-sm font-mono placeholder:text-slate-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent transition resize-none shadow-sm dark:shadow-[inset_0_0_10px_rgba(249,115,22,0.06)]"
            />

            <motion.button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px var(--accent-glow)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl bg-accent text-white font-bold font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_0_20px_var(--accent-glow)] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    $ send_message.sh
                  </motion.span>
                )}
                {status === "submitting" && (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Transmitting...
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    ✓ Packet Delivered [OK]
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
