import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70dvh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        404 · Not found
      </p>
      <h1
        className="mt-6 font-display font-bold leading-none tracking-[-0.04em] text-ink"
        style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
      >
        404
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-bg transition-all hover:bg-accent"
      >
        <ArrowLeft size={14} />
        Back home
      </Link>
    </section>
  );
}
