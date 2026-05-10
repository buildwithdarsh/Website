import Link from "next/link";
import { cn } from "@/lib/utils";

export function Mark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-ink text-bg font-display font-bold",
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.55),
        letterSpacing: "-0.04em",
      }}
    >
      D
    </span>
  );
}

export function Logo({
  showText = true,
  className = "",
}: {
  showText?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <Mark size={26} />
      {showText && (
        <span className="font-display text-[15px] font-semibold tracking-tight leading-none text-ink">
          Darsh Gupta
        </span>
      )}
    </Link>
  );
}
