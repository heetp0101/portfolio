"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-text-secondary hover:border-primary/30 hover:text-primary transition-all duration-200">
      {name}
    </span>
  );
}

/* ── Pinlo Mockup — Product & Marketing Platform Dashboard ── */
function PinloMockup() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0d1a]">
      {/* Browser chrome */}
      <div className="absolute top-0 inset-x-0 h-8 bg-[#111122] flex items-center px-4 gap-2 z-10 border-b border-white/[0.07]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <div className="flex-1 mx-3 h-5 bg-white/[0.06] rounded-md flex items-center px-2 gap-1.5 max-w-[200px]">
          <div className="w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0" />
          <span className="text-[9px] text-white/30">pinlo.in/dashboard</span>
        </div>
      </div>

      {/* App shell */}
      <div className="absolute inset-0 top-8 flex">
        {/* Sidebar */}
        <div className="w-[22%] bg-[#0a0a18] border-r border-white/[0.05] p-2.5 flex flex-col gap-1.5">
          {/* Logo */}
          <div className="flex items-center gap-1.5 px-1.5 py-2 mb-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="text-[10px] font-bold text-white/80">Pinlo</span>
          </div>
          {[
            { icon: "▦", label: "Dashboard", active: true },
            { icon: "◉", label: "Push Notify", active: false },
            { icon: "◈", label: "Mobile", active: false },
            { icon: "⬡", label: "Edge Cache", active: false },
            { icon: "◎", label: "Analytics", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[9px] transition-colors ${
                item.active
                  ? "bg-violet-500/20 text-violet-300"
                  : "text-white/30"
              }`}
            >
              <span className="text-[8px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] font-semibold text-white/70">Overview</div>
              <div className="text-[8px] text-white/30">Real-time platform metrics</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="px-2 py-1 rounded-md bg-violet-500/20 border border-violet-500/30 text-[8px] text-violet-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Notifs Delivered", value: "2.4M", delta: "+12%", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
              { label: "Avg CTR", value: "94.2%", delta: "+3.1%", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
              { label: "Egress Saved", value: "80%+", delta: "↓ cost", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
            ].map((kpi) => (
              <div key={kpi.label} className={`rounded-lg border p-2 ${kpi.bg}`}>
                <div className="text-[8px] text-white/40 mb-0.5">{kpi.label}</div>
                <div className={`text-[13px] font-bold ${kpi.color}`}>{kpi.value}</div>
                <div className="text-[7px] text-white/30">{kpi.delta} vs last mo.</div>
              </div>
            ))}
          </div>

          {/* Notification flow + mobile preview */}
          <div className="grid grid-cols-5 gap-2">
            {/* Flow chart */}
            <div className="col-span-3 rounded-lg bg-white/[0.03] border border-white/[0.05] p-2">
              <div className="text-[8px] text-white/40 mb-2">Notification Delivery Pipeline</div>
              <div className="flex items-center gap-1">
                {[
                  { label: "Trigger", color: "bg-violet-500/40" },
                  { label: "Edge Fn", color: "bg-fuchsia-500/40" },
                  { label: "OneSignal", color: "bg-blue-500/40" },
                  { label: "Device", color: "bg-emerald-500/40" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center gap-1 flex-1">
                    <div className={`rounded-md px-1.5 py-1 ${step.color} text-[7px] text-white/70 text-center w-full`}>
                      {step.label}
                    </div>
                    {i < arr.length - 1 && <div className="text-[8px] text-white/20 flex-shrink-0">→</div>}
                  </div>
                ))}
              </div>
              {/* Mini chart bars */}
              <div className="mt-2 flex items-end gap-0.5 h-8">
                {[60, 75, 55, 80, 90, 70, 85, 95, 78, 88, 92, 94].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-violet-500/50"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Mobile preview */}
            <div className="col-span-2 rounded-lg bg-white/[0.03] border border-white/[0.05] p-2 flex flex-col items-center justify-center">
              <div className="text-[8px] text-white/40 mb-2">Mobile Overlay</div>
              <div className="w-14 h-20 rounded-lg bg-[#1a1a2e] border border-white/10 overflow-hidden relative">
                {/* Phone status bar */}
                <div className="h-3 bg-[#0d0d1f] flex items-center justify-between px-1.5">
                  <div className="text-[5px] text-white/40">9:41</div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((i) => <div key={i} className="w-1 h-1 rounded-sm bg-white/30" />)}
                  </div>
                </div>
                {/* App content */}
                <div className="p-1 space-y-1">
                  <div className="h-2 w-full rounded-sm bg-white/[0.08] shimmer" />
                  <div className="h-2 w-3/4 rounded-sm bg-white/[0.06] shimmer" />
                </div>
                {/* Push notification overlay */}
                <div className="absolute bottom-1 inset-x-1 rounded-md bg-violet-600/90 p-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-white/20 flex-shrink-0" />
                    <div>
                      <div className="text-[5px] text-white font-semibold">Pinlo</div>
                      <div className="text-[4.5px] text-white/70">New update!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloudflare edge status */}
          <div className="mt-2 rounded-lg bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-orange-500/30 border border-orange-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              </div>
              <span className="text-[8px] text-white/50">Cloudflare Workers — Edge Cache Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-emerald-400">80%+ egress reduction</span>
              <span className="text-[7px] text-white/30">· Global latency ↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Apex Software House Mockup — IT Consulting Website ── */
function ApexMockup() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-[#08111a]">
      {/* Browser chrome */}
      <div className="absolute top-0 inset-x-0 h-8 bg-[#0a1420] flex items-center px-4 gap-2 z-10 border-b border-white/[0.07]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <div className="flex-1 mx-3 h-5 bg-white/[0.06] rounded-md flex items-center px-2 gap-1.5 max-w-[220px]">
          <div className="w-2.5 h-2.5 rounded-full border border-emerald-500/40 flex-shrink-0" />
          <span className="text-[9px] text-white/30">apexsoftwarehouse.com</span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[8px] text-white/30">
          <span>⚡ Optimized</span>
          <span className="text-emerald-400">99/100</span>
        </div>
      </div>

      {/* Website body */}
      <div className="absolute inset-0 top-8 overflow-hidden">
        {/* Navigation bar */}
        <div className="flex items-center justify-between px-6 py-2.5 border-b border-white/[0.05] bg-[#0a1420]">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-cyan-500/30 border border-cyan-500/40" />
            <span className="text-[10px] font-bold text-white/80 tracking-wide">APEX</span>
            <span className="text-[8px] text-white/30">SOFTWARE HOUSE</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            {["Services", "Projects", "About", "Contact"].map((item, i) => (
              <span key={item} className={`text-[8px] ${i === 1 ? "text-cyan-400" : "text-white/40"}`}>{item}</span>
            ))}
          </div>
          <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/30 text-[8px] text-cyan-300">
            Get Quote
          </div>
        </div>

        {/* Hero strip */}
        <div className="relative px-6 py-4 border-b border-white/[0.04] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent" />
          <div className="relative">
            <div className="text-[8px] text-cyan-400 mb-1 tracking-widest uppercase">IT Consulting & Services</div>
            <div className="text-[13px] font-bold text-white/80 leading-tight">
              We Build Software That<br />
              <span className="text-cyan-400">Drives Business Growth</span>
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="px-4 py-3 border-b border-white/[0.04]">
          <div className="text-[8px] text-white/40 mb-2 uppercase tracking-wider">Our Services</div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: "◻", label: "Web Dev", sub: "React · Next.js" },
              { icon: "◈", label: "Mobile Apps", sub: "iOS · Android" },
              { icon: "◎", label: "Payments", sub: "Razorpay · 2FA" },
              { icon: "◉", label: "SEO", sub: "Core Web Vitals" },
            ].map((svc) => (
              <div key={svc.label} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2 text-center hover:border-cyan-500/30 transition-colors">
                <div className="text-[11px] text-cyan-400/60 mb-1">{svc.icon}</div>
                <div className="text-[8px] font-semibold text-white/70">{svc.label}</div>
                <div className="text-[7px] text-white/30">{svc.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client projects grid */}
        <div className="px-4 py-2.5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[8px] text-white/40 uppercase tracking-wider">Client Projects</div>
            <div className="text-[7px] text-cyan-400">View all →</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "E-commerce Store", tag: "React + PHP", status: "Live", color: "border-emerald-500/20 bg-emerald-500/5" },
              { name: "Corporate Portal", tag: "Payment Gateway", status: "Live", color: "border-cyan-500/20 bg-cyan-500/5" },
              { name: "Service Platform", tag: "SEO Optimized", status: "Live", color: "border-blue-500/20 bg-blue-500/5" },
            ].map((proj) => (
              <div key={proj.name} className={`rounded-lg border p-2 ${proj.color}`}>
                <div className="text-[8px] font-semibold text-white/70 mb-0.5">{proj.name}</div>
                <div className="text-[7px] text-white/30 mb-1">{proj.tag}</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[7px] text-emerald-400">{proj.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance badge row */}
        <div className="absolute bottom-0 inset-x-0 px-4 py-2 bg-[#081018] border-t border-white/[0.04] flex items-center justify-between">
          {[
            { label: "Page Speed", value: "99/100", color: "text-emerald-400" },
            { label: "Payment Uptime", value: "99.9%", color: "text-cyan-400" },
            { label: "Issues Resolved", value: "100%", color: "text-violet-400" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className={`text-[9px] font-bold ${item.color}`}>{item.value}</span>
              <span className="text-[7px] text-white/30">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Selector — renders the right mockup per project ── */
function ProjectMockup({ mockupType }: { mockupType: "pinlo" | "apex" }) {
  if (mockupType === "pinlo") return <PinloMockup />;
  if (mockupType === "apex") return <ApexMockup />;
  return null;
}

function FeaturedProjectCard({
  project,
  isInView,
  index,
}: {
  project: (typeof projects)[0];
  isInView: boolean;
  index: number;
}) {
  const [expandFeatures, setExpandFeatures] = useState(false);
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isReversed ? "lg:[&>*:first-child]:order-last" : ""
        }`}
      >
        {/* Mockup */}
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: `radial-gradient(ellipse at center, ${project.accentColor}20, transparent 70%)` }}
          />
          <div className="relative">
            <ProjectMockup mockupType={project.mockupType} />

            {/* Role + period badge */}
            <div className="absolute -bottom-3 left-4 flex items-center gap-2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs backdrop-blur-sm">
                <span className="text-text-secondary">{project.role}</span>
                <span className="text-white/20">·</span>
                <span className="text-text-secondary/60">{project.period}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 pt-4 lg:pt-0">
          {/* Number tag */}
          <span className="font-display font-bold text-5xl gradient-text opacity-20 select-none">
            0{project.id}
          </span>

          <div className="-mt-4">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary">
                {project.title}
              </h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 rounded-full border transition-colors"
                  style={{
                    borderColor: `${project.accentColor}40`,
                    color: project.accentColor,
                    background: `${project.accentColor}10`,
                  }}
                >
                  ↗ {project.liveUrl.replace("https://", "")}
                </a>
              )}
            </div>
            <p className="text-text-secondary/70 text-sm italic">{project.tagline}</p>
          </div>

          <p className="text-text-secondary leading-relaxed">{project.description}</p>

          {/* Problem / Solution */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl glass border border-white/[0.05] hover:border-red-500/20 transition-colors">
              <div className="text-sm font-medium text-red-400 mb-1.5">The Challenge</div>
              <p className="text-text-secondary text-sm">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl glass border border-white/[0.05] hover:border-emerald-500/20 transition-colors">
              <div className="text-sm font-medium text-emerald-400 mb-1.5">The Solution</div>
              <p className="text-text-secondary text-sm">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <button
              onClick={() => setExpandFeatures((v) => !v)}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-3"
            >
              <span>{expandFeatures ? "Hide" : "View"} key contributions</span>
              <motion.svg
                animate={{ rotate: expandFeatures ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {expandFeatures && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 overflow-hidden"
                >
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>

          {/* Impact */}
          <div
            className="p-3 rounded-xl border text-sm font-medium"
            style={{
              borderColor: `${project.accentColor}30`,
              background: `${project.accentColor}08`,
              color: `${project.accentColor}`,
            }}
          >
            📈 {project.impact}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-glow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Live
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/[0.08] hover:border-white/[0.2] text-text-secondary hover:text-text-primary text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4 tracking-wider uppercase"
          >
            <span className="w-8 h-px bg-primary/60" />
            Real Work
            <span className="w-8 h-px bg-primary/60" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4"
          >
            Projects that{" "}
            <span className="gradient-text">shipped and scaled</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            Real companies. Real production challenges. Full case studies showing
            what was broken, how I fixed it, and what the results looked like.
          </motion.p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-28">
          {featured.map((project, i) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              isInView={isInView}
              index={i}
            />
          ))}
        </div>

        {/* "More coming" placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-5"
        >
          <div className="w-full max-w-md p-6 rounded-2xl border border-dashed border-white/[0.12] glass flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xl">
              🔧
            </div>
            <div>
              <div className="text-text-primary font-semibold mb-1">Third project coming soon</div>
              <div className="text-text-secondary/60 text-sm">More case studies being added to this section.</div>
            </div>
          </div>

          <a
            href="https://github.com/heetp0101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/[0.08] hover:border-white/[0.2] text-text-secondary hover:text-text-primary text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
