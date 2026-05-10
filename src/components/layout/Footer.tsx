import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Mark } from "@/components/ui/Logo";

const socials = [
  { icon: Github, href: SITE.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Big CTA line */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Let&apos;s work together</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              Have something
              <br />
              you want built?
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="group mt-7 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              <span className="border-b-2 border-ink/30 transition-colors group-hover:border-accent">
                {SITE.email}
              </span>
              <ArrowUpRight
                size={22}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <p className="eyebrow eyebrow-muted">Sitemap</p>
              <ul className="mt-4 space-y-2.5">
                {sitemap.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[15px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow eyebrow-muted">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] text-ink-soft transition-colors hover:text-ink"
                    >
                      <s.icon size={14} />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Mark size={24} />
            <p className="text-sm text-ink-muted">
              © {new Date().getFullYear()} {SITE.name}. {SITE.location}.
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 align-middle animate-pulse" />
            {SITE.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
