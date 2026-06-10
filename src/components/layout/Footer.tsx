"use client";

import { navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-sm">
                H
              </div>
              <span className="font-display font-semibold text-text-primary">
                Heet<span className="gradient-text">.</span>
              </span>
            </button>
            <p className="text-text-secondary/60 text-sm leading-relaxed max-w-xs">
              Full-stack developer building production-grade web apps and SaaS
              products that solve real business problems.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs text-text-secondary/40 uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-text-secondary/60 hover:text-text-primary text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <div className="text-xs text-text-secondary/40 uppercase tracking-wider mb-4">
              Contact
            </div>
            <div className="space-y-2">
              <a
                href="mailto:heetp0101@gmail.com"
                className="block text-text-secondary/60 hover:text-text-primary text-sm transition-colors"
              >
                heetp0101@gmail.com
              </a>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400/80 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-text-secondary/40 text-xs">
            © {year} Heet Patel. All rights reserved.
          </p>
          <p className="text-text-secondary/30 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
