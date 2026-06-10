import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080f",
        surface: "#0f0f1a",
        "surface-2": "#16162a",
        border: "rgba(255,255,255,0.07)",
        primary: "#6366f1",
        "primary-light": "#818cf8",
        accent: "#06b6d4",
        "accent-light": "#22d3ee",
        muted: "#64748b",
        "text-primary": "#f0f0ff",
        "text-secondary": "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        "glow-primary": "radial-gradient(circle at center, rgba(99,102,241,0.4) 0%, transparent 70%)",
        "glow-accent": "radial-gradient(circle at center, rgba(6,182,212,0.4) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(99,102,241,0.2)",
        "glow-md": "0 0 40px rgba(99,102,241,0.25)",
        "glow-lg": "0 0 80px rgba(99,102,241,0.2)",
        "glow-accent": "0 0 40px rgba(6,182,212,0.25)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(99,102,241,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
