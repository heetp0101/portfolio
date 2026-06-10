"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  "AI & GenAI": "🤖",
  "Tools & Deployment": "🚀",
};

const categoryColors: Record<string, { bar: string; glow: string; badge: string }> = {
  Frontend: {
    bar: "bg-gradient-to-r from-indigo-500 to-blue-400",
    glow: "shadow-[0_0_12px_rgba(99,102,241,0.5)]",
    badge: "border-indigo-500/20 bg-indigo-500/5 text-indigo-300",
  },
  Backend: {
    bar: "bg-gradient-to-r from-cyan-500 to-teal-400",
    glow: "shadow-[0_0_12px_rgba(6,182,212,0.5)]",
    badge: "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
  },
  Database: {
    bar: "bg-gradient-to-r from-violet-500 to-purple-400",
    glow: "shadow-[0_0_12px_rgba(139,92,246,0.5)]",
    badge: "border-violet-500/20 bg-violet-500/5 text-violet-300",
  },
  "AI & GenAI": {
    bar: "bg-gradient-to-r from-amber-500 to-orange-400",
    glow: "shadow-[0_0_12px_rgba(245,158,11,0.5)]",
    badge: "border-amber-500/20 bg-amber-500/5 text-amber-300",
  },
  "Tools & Deployment": {
    bar: "bg-gradient-to-r from-emerald-500 to-green-400",
    glow: "shadow-[0_0_12px_rgba(16,185,129,0.5)]",
    badge: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
  },
};

function SkillBar({
  name,
  level,
  category,
  index,
  isVisible,
}: {
  name: string;
  level: number;
  category: string;
  index: number;
  isVisible: boolean;
}) {
  const colors = categoryColors[category];
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="text-text-secondary/50 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : "0%" }}
          transition={{
            duration: 0.9,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${colors.bar} ${colors.glow}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
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
            Skills & Expertise
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            The complete stack,{" "}
            <span className="gradient-text">start to finish</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-text-secondary text-lg">
            No specialization silos. I work fluently across every layer of the stack —
            from database design to polished UI.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const colors = categoryColors[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(isActive ? null : cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? `${colors.badge} scale-105`
                    : "border-white/[0.07] text-text-secondary hover:text-text-primary hover:border-white/[0.15] bg-transparent"
                }`}
              >
                <span>{categoryIcons[cat]}</span>
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((cat) => !activeCategory || activeCategory === cat)
            .map((category, catIndex) => {
              const colors = categoryColors[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.08 }}
                  layout
                  className="card p-6 hover:scale-[1.01] transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{categoryIcons[category]}</span>
                    <div>
                      <h3 className="font-display font-semibold text-text-primary">
                        {category}
                      </h3>
                      <p className="text-text-secondary/50 text-xs">
                        {skills[category as keyof typeof skills].length} skills
                      </p>
                    </div>
                    <span
                      className={`ml-auto text-xs px-2.5 py-1 rounded-full border ${colors.badge}`}
                    >
                      Expert
                    </span>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-4">
                    {skills[category as keyof typeof skills].map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        category={category}
                        index={i}
                        isVisible={isInView}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-text-secondary/50 text-sm mt-10"
        >
          And constantly learning — the stack is always evolving.
        </motion.p>
      </div>
    </section>
  );
}
