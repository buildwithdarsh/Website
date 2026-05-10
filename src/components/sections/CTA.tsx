"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 sm:py-40 lg:py-48">
      {/* Soft accent backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(79,70,229,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Let&apos;s build something
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display font-bold leading-[0.98] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Have something
          <br />
          worth building?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          Senior or staff role, freelance build, or just hello — I read every
          message personally and reply within a working day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-12"
        >
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            <span className="border-b-2 border-ink/30 transition-colors group-hover:border-accent">
              {SITE.email}
            </span>
            <ArrowUpRight
              size={22}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted"
        >
          {SITE.location} · IST · async-friendly
        </motion.p>
      </div>
    </section>
  );
}
