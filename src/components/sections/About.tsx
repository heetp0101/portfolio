"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

const highlights = [
  {
    icon: "🏗️",
    title: "Production-Grade Architecture",
    description:
      "I don't just write code that works in development. Every system I build is designed for reliability, observability, and the growth that comes after launch.",
  },
  {
    icon: "🎯",
    title: "Problem-First Thinking",
    description:
      "Before writing a single line, I ask: what outcome does this actually need to achieve? The best code is code that solves the right problem in the simplest way.",
  },
  {
    icon: "⚡",
    title: "Full Ownership Mindset",
    description:
      "From database schema to pixel-perfect UI — I take complete ownership. No hand-offs mid-project. No gaps between frontend and backend.",
  },
  {
    icon: "🔄",
    title: "Iterative & Transparent",
    description:
      "Regular progress updates, early demos, and honest feedback loops. You're never left wondering what's happening with your project.",
  },
];

const values = [
  { label: "Clean Code", icon: "✦" },
  { label: "Clear Communication", icon: "✦" },
  { label: "Honest Timelines", icon: "✦" },
  { label: "Long-Term Thinking", icon: "✦" },
  { label: "User-Centric", icon: "✦" },
  { label: "Ownership", icon: "✦" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4 tracking-wider uppercase"
          >
            <span className="w-8 h-px bg-primary/60" />
            About Me
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-6"
          >
            I build software that{" "}
            <span className="gradient-text">moves businesses forward</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="text-text-secondary text-lg leading-relaxed"
          >
            I&apos;m Heet Patel — a full-stack developer who bridges the gap between
            ambitious ideas and polished, production-ready products. With deep expertise
            across the entire web stack, I care deeply about two things: writing excellent
            code and building experiences that users actually love.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most developers can write code. Fewer can architect systems that scale.
                Even fewer can translate a business problem into a technical solution while
                maintaining clear communication throughout. I&apos;ve spent years developing all
                three skills — because all three matter equally when you&apos;re building something real.
              </p>
              <p>
                I&apos;ve shipped 3 client projects — from AI-powered SaaS dashboards to workflow
                automation platforms to custom e-commerce backends. Each one taught me something
                new about what it takes to build software that survives contact with real users and
                real traffic.
              </p>
              <p>
                My philosophy is simple: every decision should serve the end user. Clean code
                isn&apos;t an aesthetic preference — it&apos;s how you keep shipping fast as the product grows.
                Good architecture isn&apos;t over-engineering — it&apos;s avoiding expensive rewrites six months from now.
              </p>
            </div>

            {/* Values chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {values.map((v) => (
                <span
                  key={v.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/[0.07] text-xs text-text-secondary hover:border-primary/30 hover:text-text-primary transition-all duration-200"
                >
                  <span className="text-primary text-[8px]">{v.icon}</span>
                  {v.label}
                </span>
              ))}
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Based in", value: "India 🇮🇳" },
                { label: "Experience", value: "2+ Years" },
                { label: "Timezone", value: "IST (UTC+5:30)" },
                { label: "Response time", value: "< 12 hours" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl glass border border-white/[0.05] hover:border-white/10 transition-colors"
                >
                  <div className="text-xs text-text-secondary/60 uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="text-text-primary font-medium text-sm">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — highlight cards */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpVariants}
                custom={i}
                className="card p-6 hover:scale-[1.02] transition-transform duration-300 group cursor-default"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-text-primary text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
