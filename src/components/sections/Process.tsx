"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { process } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/60 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

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
            How I Work
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            A process designed for{" "}
            <span className="gradient-text">zero surprises</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-text-secondary text-lg">
            Clear milestones, regular communication, and a delivery structure that keeps
            you in control at every stage.
          </motion.p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative"
              >
                {/* Step number + connector dot */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-surface border border-white/[0.08] flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="font-display font-bold text-4xl text-white/[0.07] select-none">
                    {step.step}
                  </span>
                </div>

                <div className="card p-5 group-hover:scale-[1.02] transition-all duration-300">
                  <h3 className="font-display font-semibold text-text-primary text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-white/[0.07]">
            <span className="text-2xl">💬</span>
            <p className="text-text-secondary text-sm">
              <span className="text-text-primary font-medium">Weekly check-ins</span> by default.
              Async-friendly. I adapt to your team&apos;s workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
