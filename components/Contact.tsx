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
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-[#0b0b0b]">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#ff7a00]">Me</span>
          </h2>
          <p className="text-[#9a9a9a]/40 mb-2 font-mono text-sm tracking-tight text-center">Initialize connection sequence.</p>
          <a
            href="mailto:ravitejabolla756@gmail.com"
            className="inline-block text-sm font-bold tracking-wide hover:underline mt-1 text-[#ff7a00]"
          >
            ✉ ravitejabolla756@gmail.com
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-10 relative"
        >
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-[#555] focus:outline-none focus:border-[#ff7a00] transition"
              />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-[#555] focus:outline-none focus:border-[#ff7a00] transition"
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="> Type your message here..."
              className="w-full bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-[#555] focus:outline-none focus:border-[#ff7a00] transition resize-none"
            />

            <motion.button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full py-4 rounded-xl text-black font-extrabold font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-70 transition-all ${
                status === "success" ? "bg-emerald-500" : "bg-[#ff7a00]"
              }`}
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="idle">
                    $ send_message.sh
                  </motion.span>
                )}
                {status === "submitting" && (
                  <motion.span key="loading" className="flex items-center gap-2">
                    Transmitting...
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span key="success">
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
