"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

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
            Client Feedback
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            What clients say{" "}
            <span className="gradient-text">after we ship</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-text-secondary text-lg">
            The projects are done. Here&apos;s what the people who trusted me with their
            product have to say.
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="card p-6 flex flex-col gap-5 hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="text-primary/20 group-hover:text-primary/30 transition-colors">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-text-secondary leading-relaxed text-sm flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-text-primary text-sm font-semibold">{t.author}</div>
                  <div className="text-text-secondary/60 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-white/[0.05]"
        >
          {[
            { value: "100%", label: "Client satisfaction" },
            { value: "3+", label: "Projects delivered" },
            { value: "0", label: "Missed deadlines" },
            { value: "3+", label: "Repeat clients" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-display font-bold text-2xl gradient-text">{item.value}</div>
              <div className="text-text-secondary/60 text-sm mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
