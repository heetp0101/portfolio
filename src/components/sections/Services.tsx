"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            What I Offer
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            Services built around{" "}
            <span className="gradient-text">your outcome</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-text-secondary text-lg">
            I don&apos;t sell technologies. I sell results. Every engagement starts with
            understanding what success looks like for your business.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${service.color} ${service.borderColor} hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />

              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              <h3 className="font-display font-semibold text-text-primary text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-xs text-text-secondary/80">
                    <svg
                      className="w-3.5 h-3.5 text-primary/70 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2">
                Have a project in mind?
              </h3>
              <p className="text-text-secondary max-w-lg">
                Let&apos;s talk through the details. I offer a free 30-minute discovery call
                to understand your needs and see if we&apos;re a good fit.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-glow-md whitespace-nowrap"
            >
              Schedule a Call →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
