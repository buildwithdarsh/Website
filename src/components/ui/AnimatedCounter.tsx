"use client";

import { useEffect, useRef } from "react";
import { useSpring, useMotionValue, useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.5,
  });

  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <motion.span
        ref={displayRef}
        className="block font-display text-4xl font-bold tracking-tight text-text md:text-5xl"
      >
        {`0${suffix}`}
      </motion.span>
      <span className="mt-2 block text-sm text-text-muted">{label}</span>
    </div>
  );
}
