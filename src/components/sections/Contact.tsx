"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/heetp0101",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/heetp0101",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/heetp0101",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({ name: "", email: "", budget: "", message: "" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");
    // Replace with your preferred contact form service (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitState("success");
    setForm({ name: "", email: "", budget: "", message: "" });
    setTimeout(() => setSubmitState("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass border border-white/[0.08] focus:border-primary/50 text-text-primary placeholder:text-text-secondary/40 text-sm outline-none transition-all duration-200 focus:bg-white/[0.02] bg-transparent";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Hero-like glow */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4 tracking-wider uppercase"
          >
            <span className="w-8 h-px bg-primary/60" />
            Get In Touch
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">exceptional together</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-text-secondary text-lg">
            Have a project, idea, or question? I read every message personally
            and respond within 12 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 font-medium">Available for projects</span>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div>
                <div className="text-xs text-text-secondary/50 uppercase tracking-wider mb-2">
                  Email
                </div>
                <a
                  href="mailto:heetp0101@gmail.com"
                  className="text-text-primary font-medium hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  heetp0101@gmail.com
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div>
                <div className="text-xs text-text-secondary/50 uppercase tracking-wider mb-2">
                  Response Time
                </div>
                <div className="text-text-primary font-medium">Within 12 hours</div>
              </div>

              <div>
                <div className="text-xs text-text-secondary/50 uppercase tracking-wider mb-2">
                  Timezone
                </div>
                <div className="text-text-primary font-medium">IST — UTC +5:30</div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="text-xs text-text-secondary/50 uppercase tracking-wider mb-4">
                Find Me Online
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-11 h-11 rounded-xl glass border border-white/[0.07] hover:border-primary/30 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-200 hover:scale-110 hover:shadow-glow-sm"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick options */}
            <div className="space-y-3">
              <div className="text-xs text-text-secondary/50 uppercase tracking-wider mb-3">
                Common Requests
              </div>
              {[
                "💼 New project inquiry",
                "🤝 Technical consultation",
                "🚀 SaaS MVP development",
                "🔧 Existing project help",
              ].map((item) => (
                <div
                  key={item}
                  className="text-sm text-text-secondary/70 flex items-center gap-2 hover:text-text-secondary transition-colors cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card p-6 md:p-8">
              {submitState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                      Message sent!
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Thanks for reaching out. I&apos;ll be in touch within 12 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-text-secondary/60 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Alex Johnson"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-text-secondary/60 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-text-secondary/60 uppercase tracking-wider mb-2">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" className="bg-surface">Select a range...</option>
                      <option value="<2k" className="bg-surface">Under $2,000</option>
                      <option value="2k-5k" className="bg-surface">$2,000 – $5,000</option>
                      <option value="5k-10k" className="bg-surface">$5,000 – $10,000</option>
                      <option value="10k+" className="bg-surface">$10,000+</option>
                      <option value="discuss" className="bg-surface">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-text-secondary/60 uppercase tracking-wider mb-2">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What are you building? What problem does it solve? What's your timeline?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-base transition-all duration-200 hover:scale-[1.01] hover:shadow-glow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {submitState === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-text-secondary/40 text-xs text-center">
                    No spam. No sales pitches. Just real conversation about your project.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
