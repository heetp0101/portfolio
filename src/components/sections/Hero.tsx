"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/lib/data";

function FloatingOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-slow pointer-events-none ${className}`}
    />
  );
}

function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <GridBackground />
      <FloatingOrb className="w-[600px] h-[600px] bg-primary -top-40 -left-40" />
      <FloatingOrb className="w-[500px] h-[500px] bg-accent top-1/2 -right-60 animation-delay-2000" />
      <FloatingOrb className="w-[400px] h-[400px] bg-violet-600 bottom-0 left-1/3 animation-delay-4000" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-text-secondary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for freelance projects
          <span className="text-text-secondary/50">·</span>
          <span className="text-emerald-400 font-medium">Open to work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-display font-bold leading-[1.08] tracking-tight mb-6"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block text-text-primary">
            I build products
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block gradient-text mt-1">
            that scale.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Full-stack developer specializing in{" "}
          <span className="text-text-primary font-medium">React</span>,{" "}
          <span className="text-text-primary font-medium">Next.js</span>, and{" "}
          <span className="text-text-primary font-medium">FastAPI</span>. I turn complex
          ideas into production-grade web applications that solve real business problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-base text-text-secondary/70 max-w-xl mx-auto mb-10"
        >
          From MVP to scale — I own the full product lifecycle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-md overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Start a Project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 rounded-xl glass border border-white/10 hover:border-primary/40 text-text-primary font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.04]"
          >
            <span className="flex items-center gap-2 justify-center">
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              className="glass rounded-xl p-4 border border-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="font-display font-bold text-2xl gradient-text">{stat.value}</div>
              <div className="text-text-primary text-sm font-medium mt-0.5">{stat.label}</div>
              <div className="text-text-secondary/60 text-xs mt-0.5">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-secondary/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Tech stack ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-0 inset-x-0 border-t border-white/[0.04] bg-gradient-to-r from-transparent via-surface/50 to-transparent py-3 overflow-hidden"
      >
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap px-8">
          {[
            "React.js", "Next.js", "TypeScript", "FastAPI", "Node.js",
            "PostgreSQL", "Tailwind CSS", "OpenAI", "Prisma", "Docker",
            "React.js", "Next.js", "TypeScript", "FastAPI", "Node.js",
            "PostgreSQL", "Tailwind CSS", "OpenAI", "Prisma", "Docker",
          ].map((tech, i) => (
            <span key={i} className="text-text-secondary/30 text-sm font-medium flex-shrink-0">
              {tech}
              {i % 10 !== 9 && <span className="ml-8 text-primary/30">·</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
