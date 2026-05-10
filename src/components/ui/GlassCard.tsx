"use client";

import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverLift = true,
  hoverGlow = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6",
        hoverGlow && "gradient-border-hover",
        "transition-all duration-400",
        className,
      )}
      {...(hoverLift ? { whileHover: { y: -4 } } : {})}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
