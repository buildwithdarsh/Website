import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  PROJECTS,
  FULLSTACK_PROJECTS,
  OSS_PROJECTS,
  SITE,
  type Project,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description: `${PROJECTS.length} production systems, OSS libraries, and a playground — by ${SITE.name}.`,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work · ${SITE.name}`,
    description: `${PROJECTS.length} production systems, OSS libraries, and a playground.`,
  },
};

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const isPortrait = p.imageOrientation === "portrait";
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="card group flex h-full flex-col overflow-hidden p-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-1">
        {isPortrait && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #f7f7f8 0%, #eef2ff 100%)",
            }}
          />
        )}
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={
            isPortrait
              ? "image-tint object-contain object-center p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              : "image-tint object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          }
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            {String(i + 1).padStart(2, "0")} ·{" "}
            {p.category === "fullstack"
              ? "Platform"
              : p.category === "oss"
              ? "Library · MIT"
              : "Playground"}
          </span>
          <ArrowUpRight
            size={15}
            className="text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
          {p.title}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium text-ink-soft">
          {p.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted line-clamp-3">
          {p.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-bg px-2 py-0.5 text-[11px] text-ink-soft"
            >
              {s}
            </span>
          ))}
          {p.stack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] text-ink-muted">
              +{p.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function WorkPage() {
  const playground = PROJECTS.filter((p) => p.category === "playground");

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="eyebrow">Index · {PROJECTS.length} entries</p>
          <h1
            className="mt-5 font-display font-bold leading-[0.98] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Everything I&apos;ve shipped.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {FULLSTACK_PROJECTS.length} production full-stack platforms,{" "}
            {OSS_PROJECTS.length} MIT-licensed open-source libraries, and one
            game-loop playground that proves they all compose. Every entry is
            live — click anything.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-baseline justify-between gap-3 border-b border-border pb-6">
            <div>
              <p className="eyebrow eyebrow-muted">Section A</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Platforms
              </h2>
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">
              {FULLSTACK_PROJECTS.length} entries
            </span>
          </div>
          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FULLSTACK_PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="border-t border-border surface-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-baseline justify-between gap-3 border-b border-border pb-6">
            <div>
              <p className="eyebrow eyebrow-muted">Section B</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Open source · MIT
              </h2>
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">
              {OSS_PROJECTS.length} libraries
            </span>
          </div>
          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OSS_PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Playground */}
      {playground.length > 0 && (
        <section className="border-t border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-6">
              <div>
                <p className="eyebrow eyebrow-muted">Section C</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Playground
                </h2>
              </div>
              <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">
                {playground.length} entry
              </span>
            </div>
            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
              {playground.map((p, i) => (
                <ProjectCard key={p.slug} p={p} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
