"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-white font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40",
  secondary:
    "glass-card text-text hover:border-white/20",
  ghost:
    "bg-transparent text-text-muted hover:text-text hover:bg-white/5",
};

export default function Button({
  variant = "primary",
  children,
  className,
  magnetic = true,
  ...props
}: ButtonProps) {
  const button = (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm tracking-wide transition-all duration-300 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );

  if (magnetic) {
    return <MagneticButton>{button}</MagneticButton>;
  }

  return button;
}
