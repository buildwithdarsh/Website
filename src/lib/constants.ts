export const SITE = {
  name: "Darsh Gupta",
  handle: "DashGupta",
  title: "Full-Stack Developer & Mentor",
  tagline:
    "Engineer of unreal systems. 5+ years shipping production web platforms in React, Next.js, Node, Postgres.",
  email: "deepansumor@gmail.com",
  phone: "+91 74409 58955",
  location: "Gwalior, India",
  url: "https://dashgupta.dev",
  github: "https://github.com/deepansumor",
  linkedin: "https://www.linkedin.com/in/deepansumor",
  availability: "Open to hire",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 5, suffix: "+", label: "Years building" },
  { value: 24, suffix: "", label: "Projects shipped" },
  { value: 50, suffix: "+", label: "Engineers mentored" },
  { value: 4, suffix: "", label: "OSS libraries" },
] as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  stack: string[];
  category: "fullstack" | "oss" | "playground";
  image: string;
  imageOrientation?: "landscape" | "portrait";
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "playflix",
    title: "PlayFlix",
    tagline: "India's social cinema platform.",
    description:
      "Pay-per-minute movie streaming with Google Drive room hosting, sync/solo watch modes, real-time chat, wallet, and earnings dashboard. Mobile-first; 19 pages, 2 watch modes.",
    url: "https://playflix.build.withdarsh.com",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4", "Vidstack", "Ably", "Zustand"],
    category: "fullstack",
    image: "/images/portfolio/playflix/cover-page.png",
    featured: true,
  },
  {
    slug: "mediconnect",
    title: "MediConnect",
    tagline: "Digital health platform across 4 roles.",
    description:
      "Telemedicine, EMR, queue management, billing, AI symptom checker, ABDM/Health-ID, e-prescriptions, chronic disease tracking. 30+ pages, 50+ specialties.",
    url: "https://medi-connect.build.withdarsh.com",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Recharts"],
    category: "fullstack",
    image: "/images/portfolio/mediconnect/user-desktop-homepage.png",
    featured: true,
  },
  {
    slug: "burger-empire",
    title: "Burger Empire",
    tagline: "Direct-ordering for a Gwalior burger restaurant.",
    description:
      "End-to-end food ordering with dual-mode UI (Classic/Healthy), multi-tenant NestJS API, PetPooja POS, Razorpay, WhatsApp, coin-loyalty. 104 features, 130+ API routes, 70+ pages.",
    url: "https://burger-empire.build.withdarsh.com",
    stack: ["Next.js 16", "NestJS", "Prisma", "Postgres", "Razorpay"],
    category: "fullstack",
    image: "/images/portfolio/burgerempire/desktop-classic-landing.png",
    featured: true,
  },
  {
    slug: "datrift",
    title: "Datrift",
    tagline: "Cloud data migration between Google accounts.",
    description:
      "Drive, Gmail, Photos, Calendar, Contacts, YouTube subs, Tasks. 256-bit encryption, 99% success rate, 7 services. Commercial product on a custom domain.",
    url: "https://datrift.com",
    stack: ["Next.js 15", "Express", "BullMQ", "Redis", "Supabase Realtime", "Fly.io"],
    category: "fullstack",
    image: "/images/portfolio/datrift/desktop-landing-hero.png",
    featured: true,
  },
  {
    slug: "aurum",
    title: "Aurum",
    tagline: "Premium digital banking, refined.",
    description:
      "UPI / NEFT / RTGS / IMPS, AI-powered analytics, card controls, OTP + biometric login, AES-256 encryption. 99.9% uptime SLA, <300ms API, 10K+ concurrent users.",
    url: "https://aurum.build.withdarsh.com",
    stack: ["Next.js 16", "React 19", "TypeScript", "Framer Motion"],
    category: "fullstack",
    image: "/images/portfolio/aurum/desktop-hero-landing.png",
    featured: true,
  },
  {
    slug: "vicity",
    title: "ViCity",
    tagline: "Luxury hotel booking, end to end.",
    description:
      "Multi-step booking with hold timer + Razorpay; 12-screen admin dashboard; offline IndexedDB mock layer. 50+ pages, 6 room types.",
    url: "https://vicity.build.withdarsh.com",
    stack: ["Next.js 16", "Zod", "Recharts", "JWT", "Sharp", "Docker"],
    category: "fullstack",
    image: "/images/portfolio/vicity/desktop-hero-landing.png",
    featured: true,
  },
  {
    slug: "subradar",
    title: "SubRadar",
    tagline: "Subscription intelligence SaaS.",
    description:
      "Gmail OAuth read-only scan auto-detects subscriptions, tracks spend, sends 5+ alert types, AI save suggestions. Mobile-first.",
    url: "https://sub-radar.build.withdarsh.com",
    stack: ["Next.js 15", "Zustand", "NestJS", "Prisma", "Postgres", "Gmail API"],
    category: "fullstack",
    image: "/images/portfolio/subradar/mobile-dashboard-stats.png",
    imageOrientation: "portrait",
  },
  {
    slug: "bloombox",
    title: "BloomBox",
    tagline: "Florist marketplace + SaaS hybrid.",
    description:
      "Custom bouquet builder, subscription plans, event florals, occasion reminders, combo gifting. 20+ pages, 4 plans, 7 revenue streams.",
    url: "https://bloom-box.build.withdarsh.com",
    stack: ["Next.js 16", "React 19", "shadcn/ui", "Sonner"],
    category: "fullstack",
    image: "/images/portfolio/bloombox/desktop-landing-page.png",
  },
  {
    slug: "autocare-hub",
    title: "AutoCare Hub",
    tagline: "Automotive service marketplace.",
    description:
      "3 roles, 15 service categories, real-time tracking, AMC plans, SOS roadside assistance, business dashboard with bay utilization. 25+ pages.",
    url: "https://auto-care-hub.build.withdarsh.com",
    stack: ["Next.js 15", "React 19", "Framer Motion"],
    category: "fullstack",
    image: "/images/portfolio/autocarehub/desktop-homepage.png",
  },
  {
    slug: "designnest",
    title: "DesignNest",
    tagline: "Interior design marketplace.",
    description:
      "8-aesthetic style quiz, designer discovery with portfolios, transparent 4-tier pricing. Built for India's INR 80,000 Cr market.",
    url: "https://design-nest.build.withdarsh.com",
    stack: ["Next.js 16", "shadcn/ui"],
    category: "fullstack",
    image: "/images/portfolio/designnest/desktop-landing-page.png",
  },
  {
    slug: "dineease",
    title: "DineEase",
    tagline: "Restaurant tech platform.",
    description:
      "Diner app + 12-screen admin (KDS, table floor plan, reservations, inventory, CRM, analytics). 3 order modes, loyalty rewards. 30+ pages.",
    url: "https://dine-ease.build.withdarsh.com",
    stack: ["Next.js", "React 19", "TypeScript"],
    category: "fullstack",
    image: "/images/portfolio/dineease/desktop-landing-page.png",
  },
  {
    slug: "eventcraft",
    title: "EventCraft",
    tagline: "Event planning marketplace.",
    description:
      "Planner/vendor discovery, 12 vendor categories, venue VR browsing, mood boards, payments, day-of coordination. 25+ pages.",
    url: "https://event-craft.build.withdarsh.com",
    stack: ["Next.js", "React 19", "TypeScript"],
    category: "fullstack",
    image: "/images/portfolio/eventcraft/desktop-landing-page.png",
  },
  {
    slug: "fitzone",
    title: "FitZone",
    tagline: "Fitness management across 3 roles.",
    description:
      "Workout logging with progressive overload, nutrition macros, body composition, QR check-in, multi-branch business dashboard. 35+ pages.",
    url: "https://fit-zone.build.withdarsh.com",
    stack: ["Next.js", "React 19", "Recharts"],
    category: "fullstack",
    image: "/images/portfolio/fitzone/desktop-landing-page.png",
  },
  {
    slug: "furnishnow",
    title: "FurnishNow",
    tagline: "Furniture commerce across 4 roles.",
    description:
      "360° + AR visualization, custom orders, multi-warehouse inventory, production tracking, QC checklists. 40+ pages.",
    url: "https://furnish-now.build.withdarsh.com",
    stack: ["Next.js", "React 19", "TypeScript"],
    category: "fullstack",
    image: "/images/portfolio/furnishnow/desktop-landing-page.png",
  },
  {
    slug: "learnpro",
    title: "LearnPro Academy",
    tagline: "Coaching institute platform across 4 roles.",
    description:
      "JEE/NEET/UPSC/CAT/GATE/Boards. Teacher whiteboard with hand-raise queue, screen share, recording. Institute revenue tracking. 40+ pages.",
    url: "https://learn-pro-academy.build.withdarsh.com",
    stack: ["Next.js", "React 19", "TypeScript"],
    category: "fullstack",
    image: "/images/portfolio/learnproacademy/desktop-landing-page.png",
  },
  {
    slug: "velvet",
    title: "Velvet",
    tagline: "Premium salon website for Glamour Waves Salon.",
    description:
      "Dark + gold aesthetic. 7 pages with timeline, services, gallery, booking. Google Maps + WhatsApp fallback. 90+ Lighthouse.",
    url: "https://velvet.build.withdarsh.com",
    stack: ["Next.js", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/velvet/desktop-hero.png",
  },
  {
    slug: "zenmat",
    title: "ZenMat",
    tagline: "Yoga studio management.",
    description:
      "Practitioner side (8+ styles, in-person/virtual/hybrid, meditation library) + Studio Admin (KPIs, members, fill rate). 20+ pages.",
    url: "https://zen-mat.build.withdarsh.com",
    stack: ["Next.js", "React 19", "Recharts"],
    category: "fullstack",
    image: "/images/portfolio/zenmat/desktop-landing-page.png",
  },
  {
    slug: "stylevault",
    title: "StyleVault",
    tagline: "Boutique fashion platform.",
    description:
      "6+ categories (Sarees/Lehengas/Kurtis/Gowns/Bridal), occasion + fabric filters, custom tailoring, flash sales, 4 delivery tiers.",
    url: "https://style-vault.build.withdarsh.com",
    stack: ["Next.js", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/stylevault/desktop-landing-page.png",
  },
  {
    slug: "pawpalace",
    title: "PawPalace",
    tagline: "Pet commerce + care.",
    description:
      "7 species, 4 service types, My Pets profiles with vaccinations + allergies, subscription auto-reorder, 3-tier membership.",
    url: "https://paw-palace.build.withdarsh.com",
    stack: ["Next.js", "React 19"],
    category: "fullstack",
    image: "/images/portfolio/pawpalace/desktop-landing-page.png",
  },
  {
    slug: "apogee",
    title: "Apogee",
    tagline: "Commercial spaceflight booking.",
    description:
      "Suborbital, orbital and lunar missions behind a mission-control UI. 18 missions, 6-step booking with an ARIA seat map, static shell + streamed inventory (Cache Components), View Transitions.",
    url: "https://apogee.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "Cache Components", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/apogee/desktop-landing-page.png",
  },
  {
    slug: "pulsegrid",
    title: "Pulsegrid",
    tagline: "Product analytics instrument panel.",
    description:
      "Funnels, 12-week retention cohorts, nested AND/OR segments and a live event stream over a seeded event log. Static shell + 13 streamed widgets (Cache Components), URL-held date range with compare, parallel-route widget drawer, ⌘K + 25 shortcuts.",
    url: "https://pulsegrid.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "Cache Components", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/pulsegrid/desktop-landing-page.png",
  },
  {
    slug: "canopy",
    title: "Canopy",
    tagline: "Carbon footprint journal + offset marketplace.",
    description:
      "Measure, reduce, then compensate. A four-step calculator built on Server Actions that works with JavaScript off, a tree-ring chart of 24 months, optimistic check-ins, 20 removal/avoidance projects and HMAC-signed certificates with next/og share images.",
    url: "https://canopy.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "Server Actions", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/canopy/desktop-landing-page.png",
  },
  {
    slug: "crate",
    title: "Crate",
    tagline: "Vinyl marketplace for collectors.",
    description:
      "Multi-seller record shop with Goldmine grades for record and sleeve, an intercepted quick-look with sleeve-morph view transitions, faceted browse, per-seller shipping, price history by grade and Crate Dig: a seeded, swipeable shuffle. 60 generated sleeves.",
    url: "https://crate.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "Cache Components", "View Transitions"],
    category: "fullstack",
    image: "/images/portfolio/crate/desktop-landing-page.png",
  },
  {
    slug: "heartbeat",
    title: "Heartbeat",
    tagline: "Uptime monitoring + public status pages.",
    description:
      "24 simulated checks from 5 regions with live polling, incident update trails, a postmortem editor, on-call rotations and a status page builder. Public pages are classic ISR, readable without JavaScript, and refresh on every update. Vim chords and a : command bar.",
    url: "https://heartbeat.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "ISR", "Tailwind 4"],
    category: "fullstack",
    image: "/images/portfolio/heartbeat/desktop-landing-page.png",
  },
  {
    slug: "monolith",
    title: "Monolith",
    tagline: "Brutalist architecture studio site.",
    description:
      "16 case studies with sticky facts sheets, MDX narratives and 75 plans, sections and elevations you can zoom 1–8× with a true scale bar, in an intercepted lightbox. Press G for the 12-column grid, B for blueprint mode. Every render comes from an in-repo ray tracer.",
    url: "https://monolith.work.withdarsh.com",
    stack: ["Next.js 16", "React 19", "Cache Components", "MDX"],
    category: "fullstack",
    image: "/images/portfolio/monolith/desktop-landing-page.png",
  },

  // OSS
  {
    slug: "aurajs",
    title: "Aura.js",
    tagline: "20-module zero-dependency JS framework.",
    description:
      "Router, state, hooks, i18n, IndexedDB, PWA, API mocking, templating, event system. Singleton API. Rollup → UMD + ESM. Self-hosting docs site built with itself. 174 features, 11 KB gzipped.",
    url: "https://aurajs.build.withdarsh.com",
    stack: ["TypeScript", "Rollup", "ESM", "UMD", "MIT"],
    category: "oss",
    image: "/images/portfolio/aurajs/hero-landing.png",
    featured: true,
  },
  {
    slug: "keyboardjs",
    title: "keyboard.js",
    tagline: "Hotkeys, sequences, chords, layout remap.",
    description:
      "Named scopes, Dvorak/Colemak/QWERTY remap, frame-accurate recorder. Singleton API; cross-platform `mod` resolution. 3.2 KB gzipped, 0 deps.",
    url: "https://keyboardjs.build.withdarsh.com",
    stack: ["TypeScript", "Rollup", "MIT"],
    category: "oss",
    image: "/images/portfolio/keyboardjs/frame-01.jpg",
    featured: true,
  },
  {
    slug: "mousepadjs",
    title: "mousepad.js",
    tagline: "Pointer Events gestures, magnet, tilt, follow.",
    description:
      "Tap, double-tap, long-press, swipe, pan, pinch, rotate. Magnetic buttons, 3D tilt cards, cursor effects, trackpad detection, idle tracking. 2.9 KB gzipped, 7 gestures.",
    url: "https://mousepadjs.build.withdarsh.com",
    stack: ["TypeScript", "Pointer Events", "MIT"],
    category: "oss",
    image: "/images/portfolio/mousepadjs/frame-01.jpg",
    featured: true,
  },
  {
    slug: "collidejs",
    title: "collide.js",
    tagline: "Element-vs-element collision detection.",
    description:
      "IntersectionObserver-style API. Emits near/collide/separate/leave/tick with distance/overlap/direction/angle/velocity/TTC. AABB + circle. Single shared RAF. 2.1 KB gzipped.",
    url: "https://collidejs.build.withdarsh.com",
    stack: ["TypeScript", "Canvas", "RAF", "MIT"],
    category: "oss",
    image: "/images/portfolio/collidejs/frame-01.jpg",
    featured: true,
  },
  {
    slug: "orbit",
    title: "ORBIT — Playground",
    tagline: "Twin-stick shooter built on all four OSS libraries.",
    description:
      "WASD thrust (keyboard.js), mouse aim (mousepad.js), click/Space fire (chord), Shift boost. ⌘K command palette scoped to game. ~600 collide.js circle-vs-circle pair checks/frame. Aura.js for state, routing, i18n. Single static HTML, no build step, 60 FPS target.",
    url: "https://playground.build.withdarsh.com",
    stack: ["Aura.js", "keyboard.js", "mousepad.js", "collide.js"],
    category: "playground",
    image: "/images/portfolio/playground/frame-01.jpg",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OSS_PROJECTS = PROJECTS.filter((p) => p.category === "oss");
export const FULLSTACK_PROJECTS = PROJECTS.filter((p) => p.category === "fullstack");

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Director — Web Application & Gaming",
    company: "kringle.ai",
    location: "Santa Monica, CA",
    period: "Jan 2023 → Present",
    bullets: [
      "Led 20+ developers and shipped 15+ web platforms and gaming products, lifting team productivity 45% and mentoring 50+ engineers.",
      "Designed 8+ scalable e-commerce platforms — boosted user engagement 25%, cut downtime 27%.",
      "Built 6+ high-performance apps in React, Node.js, PHP, MongoDB — improved load times 30% and retention 25%.",
    ],
  },
  {
    role: "Tech Mentor & Consultant",
    company: "DeepThought GMS",
    location: "Hyderabad, India",
    period: "Oct 2021 → Present",
    bullets: [
      "Mentored 50+ full-stack developers through 30+ end-to-end Node/React projects.",
      "Architected the platform foundation used by 2,000+ users, scalable for future system layers.",
      "Led 25+ projects from inception to deployment with 40% performance gains across the platform.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "kringle.ai",
    location: "Santa Monica, CA",
    period: "Feb 2020 → Jan 2023",
    bullets: [
      "Engineered and optimised 6+ full-stack apps in React, Node.js, PHP, Laravel.",
      "Spearheaded 19+ new features aligned to user and business goals.",
      "Tuned MongoDB and MySQL — 20% gain in app responsiveness; 30% faster load times.",
    ],
  },
  {
    role: "Web Developer",
    company: "WishKarma",
    location: "Hyderabad, India",
    period: "Nov 2021 → Jun 2022",
    bullets: [
      "Built a WordPress blog showcasing product updates and user stories.",
      "Led full website end-to-end from architecture to launch — 20k+ active users.",
      "Authored two custom WordPress plugins for post management.",
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: ["Next.js 16", "React 19", "NestJS", "Express", "Laravel", "WordPress"],
  },
  {
    group: "UI & Styling",
    items: ["Tailwind CSS 4", "shadcn/ui", "Framer Motion", "Lucide", "Recharts"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis", "Prisma", "Drizzle"],
  },
  {
    group: "Realtime & Media",
    items: ["Ably", "Vidstack", "Cloudinary", "Sharp", "Service Workers / PWA"],
  },
  {
    group: "Integrations",
    items: ["Google Drive", "Gmail", "Google Maps", "OAuth", "WhatsApp API", "Razorpay", "PetPooja POS"],
  },
  {
    group: "Infra",
    items: ["Vercel", "Docker", "Fly.io", "BullMQ", "CI/CD"],
  },
];
