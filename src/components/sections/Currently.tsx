"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PRINCIPLES = [
  {
    n: "01",
    title: "I ship the whole thing.",
    body:
      "Design, frontend, backend, infra. The fewer hands a feature passes through, the faster it gets to users — and the more its details survive.",
  },
  {
    n: "02",
    title: "Demos before decks.",
    body:
      "If it doesn't run on a real device, it isn't real. Every project I list is clickable. No screenshots dressed up as products.",
  },
  {
    n: "03",
    title: "Mentor often.",
    body:
      "I had no mentor for the first three years of my career. So I make time every week for engineers who do — at DeepThought, in DMs, in PR reviews.",
  },
];

const NOW = [
  {
    label: "Day job",
    body: "Director of Web Application & Gaming at kringle.ai. Leading a small senior team shipping platforms and games.",
  },
  {
    label: "Mentoring",
    body: "Tech mentor at DeepThought GMS — guiding 50+ developers through end-to-end Node and React projects.",
  },
  {
    label: "Weekends",
    body: "Maintaining four MIT-licensed JS libraries and a 60-FPS twin-stick shooter that demos them all.",
  },
  {
    label: "Open to",
    body: "Senior or staff full-stack roles, design-engineering positions, and short consulting engagements.",
  },
];

export default function Currently() {
  return (
    <section className="relative border-t border-border surface-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          {/* Left header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              Three things
              <br />
              I won&apos;t compromise on.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Five years of shipping has narrowed my opinions, not broadened
              them. These are the three I&apos;d defend at a whiteboard.
            </p>
          </div>

          {/* Right principles */}
          <ol className="space-y-14 lg:space-y-20">
            {PRINCIPLES.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
              >
                <span
                  aria-hidden
                  className="big-number self-start text-ink-faint"
                >
                  {p.n}
                </span>
                <div className="border-t border-border pt-4">
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                    {p.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* /now strip */}
        <div className="mt-28 border-t border-border pt-16 lg:mt-40">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <span className="text-accent">/</span>now
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Filed May 2026
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {NOW.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col gap-3 bg-bg p-6 sm:p-8"
              >
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  {item.label}
                </dt>
                <dd className="text-[15px] leading-relaxed text-ink">
                  {item.body}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
