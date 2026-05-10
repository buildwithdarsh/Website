"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Package } from "lucide-react";
import { OSS_PROJECTS } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export default function OpenSource() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow">Open source · {OSS_PROJECTS.length} libraries</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            Side projects
            <br />
            with <span className="text-ink-muted">zero dependencies.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Four MIT-licensed JavaScript libraries shipped on the open web.
            Each ships ESM + UMD via Rollup. Together they compose into a single
            twin-stick shooter that runs at 60 FPS from one HTML file.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OSS_PROJECTS.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
              className="card group flex flex-col overflow-hidden p-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-1">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="image-tint object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                    <Package size={12} />
                    MIT
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted line-clamp-3">
                  {p.tagline}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
