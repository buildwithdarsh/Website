import type { Metadata } from "next";
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} — email, LinkedIn, GitHub.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${SITE.name}`,
    description: `Get in touch — email, LinkedIn, GitHub.`,
  },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Best for project enquiries. Replies within 24 hours.",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/deepansumor",
    href: SITE.linkedin,
    note: "For roles, introductions, and longer correspondence.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@deepansumor",
    href: SITE.github,
    note: "Open-source issues, pull requests, and source code.",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    note: "Available IST business hours.",
  },
];

export default function ContactPage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 sm:pt-28 sm:pb-40">
        <p className="eyebrow">Contact</p>
        <h1
          className="mt-5 max-w-4xl font-display font-bold leading-[0.98] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Let&apos;s build
          <br />
          <span className="text-ink-muted">something good.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          I&apos;m open to senior or staff full-stack roles, freelance, and
          contract work worldwide. Pick whichever channel suits you — email is
          fastest.
        </p>

        <div className="mt-10 inline-flex items-center gap-3 text-sm text-ink-muted">
          <MapPin size={14} className="text-accent" />
          {SITE.location}
          <span className="text-border">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {SITE.availability}
          </span>
        </div>

        {/* Channels */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-cursor="hover"
              className={`card group flex flex-col p-7 ${
                c.primary ? "ring-1 ring-accent/30" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <c.icon size={16} />
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                {c.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-ink break-all">
                {c.value}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                {c.note}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
