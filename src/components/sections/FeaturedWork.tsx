"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FEATURED_PROJECTS, FULLSTACK_PROJECTS, type Project } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectRow({ p, index, reverse }: { p: Project; index: number; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        className="group relative block overflow-hidden rounded-2xl border border-border bg-surface-1"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="image-tint object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            priority={index === 0}
          />
        </div>
        <div className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg/90 text-ink opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </a>

      {/* Text */}
      <div>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {String(index + 1).padStart(2, "0")} · {p.category === "fullstack" ? "Platform" : "Open source"}
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl">
          {p.title}
        </h3>
        <p className="mt-3 text-lg font-medium text-ink-soft sm:text-xl">
          {p.tagline}
        </p>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
          {p.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 6).map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ink"
        >
          <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent">
            Open the live project
          </span>
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  // Top 4 featured fullstack as full-width alternating rows
  const lead = FEATURED_PROJECTS.filter((p) => p.category === "fullstack").slice(0, 4);

  return (
    <section className="relative border-t border-border py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work · {FULLSTACK_PROJECTS.length} platforms shipped</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              Things I&apos;ve shipped.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Four featured platforms below — across health-tech, fin-tech, hospitality,
              and consumer streaming. Each one is live and clickable.
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-2.5 text-[14px] font-medium text-ink transition-all hover:border-ink"
          >
            View all 24
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Alternating rows */}
        <div className="mt-20 space-y-24 sm:space-y-32 lg:space-y-40">
          {lead.map((p, i) => (
            <ProjectRow key={p.slug} p={p} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
