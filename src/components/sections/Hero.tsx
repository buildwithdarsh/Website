"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(10,10,10,0.06) 0.8px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/80 px-3 py-1 backdrop-blur"
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[12px] font-medium text-ink-soft">
            Open to senior &amp; staff full-stack roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-5xl font-display font-bold leading-[0.96] tracking-[-0.045em] text-ink"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
        >
          I build production
          <br />
          web platforms,{" "}
          <span className="text-ink-muted">end&#8209;to&#8209;end.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          I&apos;m{" "}
          <span className="text-ink font-medium">{SITE.name}</span> — a
          full-stack developer from Gwalior, India. Five years, twenty-four
          shipped systems, four open-source libraries, fifty engineers
          mentored. Design, frontend, backend, infra — without the hand-offs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-bg transition-all hover:bg-accent"
          >
            See selected work
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-[14px] font-medium text-ink transition-all hover:border-ink"
          >
            Get in touch
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-24 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
        >
          {[
            { v: "5+", l: "Years building" },
            { v: "24", l: "Production systems" },
            { v: "50+", l: "Engineers mentored" },
            { v: "4", l: "OSS libraries" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {s.v}
              </dt>
              <dd className="mt-1.5 text-sm text-ink-muted">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
