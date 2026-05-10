import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Linkedin, Github } from "lucide-react";
import { SITE, EXPERIENCE, SKILLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} — ${SITE.title}. ${SITE.tagline}`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${SITE.name}`,
    description: SITE.tagline,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-24">
          <p className="eyebrow">About</p>
          <h1
            className="mt-5 max-w-5xl font-display font-bold leading-[0.98] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Self-taught engineer
            <br />
            from{" "}
            <span className="text-ink-muted">Gwalior, India.</span>
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                I grew up in Gwalior, taught myself to code from a tin-roofed
                bedroom, and shipped my first real website at seventeen. It was
                — for the record — terrible, and I have been trying to do better
                ever since.
              </p>
              <p>
                Today I&apos;m a full-stack developer with{" "}
                <span className="text-ink font-medium">5+ years</span> shipping
                production web platforms in React, Next.js, Node, and Postgres.
                I&apos;ve led teams of 30+ engineers, mentored 50+ juniors, and
                personally shipped{" "}
                <span className="text-ink font-medium">24 production systems</span>{" "}
                across health-tech, fin-tech, hospitality, and consumer
                streaming.
              </p>
              <p>
                I work end-to-end. Design, frontend, backend, infra. No
                hand-offs, no decks, just shipped software. When I&apos;m not
                building client platforms, I&apos;m maintaining four
                MIT-licensed JS libraries that compose into a single 60-FPS
                playground.
              </p>
              <p>
                I keep my work small and senior. The fewer people a feature
                passes through, the more its details survive — and I care
                deeply about details.
              </p>
            </div>

            {/* Side facts */}
            <aside className="space-y-6 rounded-2xl border border-border surface-soft p-7 lg:sticky lg:top-32 lg:self-start">
              <div>
                <p className="eyebrow eyebrow-muted">Currently</p>
                <p className="mt-2 text-base text-ink">
                  Director of Web App &amp; Gaming at{" "}
                  <span className="font-medium">kringle.ai</span>
                </p>
              </div>
              <div>
                <p className="eyebrow eyebrow-muted">Based in</p>
                <p className="mt-2 inline-flex items-center gap-2 text-base text-ink">
                  <MapPin size={14} className="text-accent" />
                  {SITE.location}
                </p>
              </div>
              <div>
                <p className="eyebrow eyebrow-muted">Reach me</p>
                <ul className="mt-3 space-y-2.5 text-[15px]">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                    >
                      <Mail size={14} className="text-accent" />
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                    >
                      <Linkedin size={14} className="text-accent" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                    >
                      <Github size={14} className="text-accent" />
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle animate-pulse" />
                  {SITE.availability}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border surface-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">Experience</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
                Where I&apos;ve built.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                Five years across leadership, mentorship, and hands-on
                engineering — in two countries.
              </p>
            </div>

            <ol className="space-y-14">
              {EXPERIENCE.map((e, i) => (
                <li
                  key={`${e.company}-${e.period}`}
                  className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
                >
                  <span className="big-number self-start text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                      {e.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                      {e.role}
                    </h3>
                    <p className="mt-1.5 text-base text-ink-soft">
                      {e.company} · {e.location}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {e.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                        >
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">Stack</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
                Tools of
                <br />
                the trade.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                What I reach for first — chosen for fit, not novelty. I&apos;m
                stack-flexible and pick up new tools when the work needs them.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {SKILLS.map((g) => (
                <div key={g.group} className="border-t border-border pt-5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {g.group}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-bg px-3 py-1 text-sm text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border surface-soft py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            Want to work together?
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Drop a line — I read everything personally.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-bg transition-all hover:bg-accent"
            >
              {SITE.email}
              <ArrowUpRight size={14} />
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-[14px] font-medium text-ink transition-all hover:border-ink"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
