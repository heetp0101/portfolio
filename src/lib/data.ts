export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 93 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 82 },
    { name: "Vite", level: 80 },
  ],
  Backend: [
    { name: "FastAPI (Async)", level: 91 },
    { name: "Node.js", level: 87 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 93 },
    { name: "Python", level: 88 },
    { name: "PHP", level: 72 },
  ],
  Database: [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 78 },
    { name: "Supabase", level: 85 },
    { name: "Firebase", level: 80 },
  ],
  "AI & GenAI": [
    { name: "OpenAI / Gemini", level: 88 },
    { name: "LangChain", level: 82 },
    { name: "RAG Pipelines", level: 85 },
    { name: "FAISS / Vector Search", level: 78 },
    { name: "Prompt Engineering", level: 86 },
  ],
  "Tools & Deployment": [
    { name: "Docker / Compose", level: 82 },
    { name: "AWS (S3, EC2, RDS)", level: 78 },
    { name: "Cloudflare Workers", level: 80 },
    { name: "GitHub Actions CI/CD", level: 80 },
    { name: "Git / GitHub", level: 92 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Pinlo",
    tagline: "Product & Marketing Platform — built for scale, engineered for speed",
    description:
      "Contributed as a Full Stack Developer on Pinlo's product and marketing platform — resolving critical production bottlenecks, engineering mobile engagement features, and architecting an edge caching layer that slashed asset delivery costs by 80%+.",
    problem:
      "Pinlo was experiencing production instability across frontend, backend, and third-party integrations. Issue resolution was slow, mobile engagement features were unreliable, and high-frequency notification workflows were struggling under concurrent load.",
    solution:
      "Systematically resolved production bottlenecks to improve system stability by 40%, engineered deep-linked mobile push notifications via OneSignal, designed high-concurrency notification workflows on Supabase Edge Functions, and implemented a Cloudflare Workers edge caching layer to dramatically reduce egress and improve global latency.",
    features: [
      "Mobile overlays and deep-linked push notifications via OneSignal",
      "Scalable notification workflows using Java & Supabase Edge Functions",
      "Cloudflare Workers edge caching — 80%+ reduction in asset egress",
      "Cross-team production debugging across frontend, backend & integrations",
      "Real-time user engagement tracking and delivery reliability improvements",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Supabase", "Cloudflare Workers", "OneSignal", "Java"],
    liveUrl: "https://pinlo.in",
    githubUrl: "https://github.com/heetp0101",
    status: "deployed",
    impact: "40% faster issue resolution · 80%+ egress reduction · High-concurrency notification flows",
    color: "from-violet-500/20 to-fuchsia-500/20",
    accentColor: "#a855f7",
    featured: true,
    mockupType: "pinlo" as const,
    period: "Oct 2025 – Apr 2026",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Apex Software House",
    tagline: "IT Consulting & Services — from payment gateways to production performance",
    description:
      "Worked as a Full Stack Developer Intern at Apex Software House, resolving production-level bugs across multiple client websites, integrating Razorpay payment gateway with secure 2FA workflows, and optimizing SEO and frontend performance across client properties.",
    problem:
      "Multiple client websites carried accumulated UI bugs, inconsistent payment flows, and poor search visibility. Each client needed targeted production fixes and performance improvements without full rebuilds.",
    solution:
      "Diagnosed and fixed UI and production-level issues across client projects, integrated Razorpay with secure 2FA to eliminate payment failures, and implemented SEO and performance optimizations that improved page load speeds and search rankings.",
    features: [
      "Production bug resolution across multiple client projects",
      "Razorpay payment gateway integration with 2FA workflow",
      "Secure transaction handling with failure rate reduction",
      "On-page SEO optimization and Core Web Vitals improvements",
      "Frontend performance tuning for faster page load times",
    ],
    tech: ["React.js", "PHP", "Razorpay", "SEO", "Tailwind CSS", "JavaScript", "REST APIs"],
    liveUrl: "https://apexsoftwarehouse.com",
    githubUrl: "https://github.com/heetp0101",
    status: "client-live",
    impact: "Improved stability across client projects · Payment failures reduced · Better SEO rankings",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#06b6d4",
    featured: true,
    mockupType: "apex" as const,
    period: "Jan 2023 – May 2023",
    role: "Full Stack Developer Intern",
  },
];

export const services = [
  {
    icon: "⚡",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web apps built with React, Next.js, and FastAPI. From database design to polished UI — I own the full product lifecycle.",
    benefits: [
      "Production-ready from day one",
      "Scalable architecture decisions",
      "Clean, maintainable codebase",
    ],
    color: "from-indigo-500/10 to-blue-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    icon: "🚀",
    title: "SaaS Product Development",
    description:
      "I build SaaS MVPs that are investor-ready and user-tested. Multi-tenancy, billing, auth, dashboards — the whole stack, shipped fast.",
    benefits: [
      "MVP in 4–8 weeks",
      "Stripe billing included",
      "Scalable multi-tenant architecture",
    ],
    color: "from-cyan-500/10 to-teal-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    icon: "🤖",
    title: "AI & GenAI Integration",
    description:
      "Build RAG pipelines, integrate LLMs (OpenAI, Gemini), and ship AI-powered features using FAISS vector search and LangChain. No hype — real, working AI.",
    benefits: [
      "OpenAI / Gemini / Claude APIs",
      "Custom RAG and vector search",
      "90%+ LLM cost reduction strategies",
    ],
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes using n8n, webhooks, and custom scripts. Save hours every week — without replacing your team.",
    benefits: [
      "Connects 100+ services",
      "Event-driven triggers with retry logic",
      "Error monitoring and alerts",
    ],
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    icon: "🗄️",
    title: "Backend API Systems",
    description:
      "High-performance async REST APIs built with FastAPI and Node.js. Clean architecture, full documentation, auth, and rate limiting included.",
    benefits: [
      "OpenAPI / Swagger docs",
      "JWT + Firebase auth",
      "Optimized database queries",
    ],
    color: "from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: "📊",
    title: "Dashboard & Admin Panels",
    description:
      "Custom dashboards that make your data actionable. Charts, tables, filters, role-based access — built for the people who run your business.",
    benefits: [
      "Real-time data updates",
      "Role-based permissions",
      "Export to PDF and CSV",
    ],
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a deep-dive call to understand your goals, users, and constraints. I ask the questions most developers skip — so we build the right thing, not just a thing.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "I map the architecture, define the tech stack, and break the project into clear milestones with realistic timelines. No vague estimates.",
    icon: "🗺️",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative builds with weekly progress updates. You always know where the project stands. I write clean code with documentation and meaningful commits.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Thorough QA across devices, browsers, and edge cases. Performance profiling, security checks, and load testing before anything goes to production.",
    icon: "✅",
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Zero-downtime launches with proper CI/CD, environment configurations, monitoring, and rollback plans. Your go-live shouldn't be a gamble.",
    icon: "🚀",
  },
  {
    step: "06",
    title: "Support",
    description:
      "Post-launch, I'm available for bug fixes, feature additions, and performance optimization. I treat your product like a long-term partnership.",
    icon: "🤝",
  },
];

export const testimonials = [
  {
    quote:
      "Heet delivered exactly what we needed and then some. The dashboard reduced our weekly reporting from 20 hours to under 2. He understood the business problem immediately.",
    author: "Sarah M.",
    role: "Operations Director",
    company: "RetailTech Co.",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "Working with Heet was the smoothest development experience I've had. He communicated clearly, hit every deadline, and the code quality was exceptional. Already planning our next project.",
    author: "James L.",
    role: "Founder & CEO",
    company: "LogisticsFlow",
    avatar: "JL",
    rating: 5,
  },
  {
    quote:
      "We needed a backend that could handle our growth — Heet built something that's performed flawlessly at 10× the load we originally planned for. Genuinely impressive.",
    author: "Priya K.",
    role: "CTO",
    company: "Zefra Commerce",
    avatar: "PK",
    rating: 5,
  },
];

export const stats = [
  { value: "1+", label: "Years Experience", description: "Production systems" },
  { value: "3+", label: "Companies", description: "Full-time & freelance" },
  { value: "RAG", label: "GenAI Specialist", description: "LLMs · Vector search" },
  { value: "∞", label: "Commitment", description: "To your product's success" },
];
