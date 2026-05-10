"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CURSOR_EASE } from "@/lib/animations";

type CursorVariant = "default" | "hover" | "view";

export default function Cursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  const rafId = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    function handleMouseMove(e: MouseEvent) {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
      if (!visible) setVisible(true);
    }

    function handleMouseLeave() {
      setVisible(false);
    }

    function handleMouseEnter() {
      setVisible(true);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]",
      );
      if (!interactive) {
        setVariant("default");
        return;
      }
      const cursorAttr = interactive.getAttribute("data-cursor");
      if (cursorAttr === "view") {
        setVariant("view");
      } else {
        setVariant("hover");
      }
    }

    function handleMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]",
      );
      if (interactive) {
        setVariant("default");
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile, visible, cursorX, cursorY]);

  if (isMobile) return null;

  const dotSize = 8;
  const followerSize = variant === "hover" || variant === "view" ? 56 : 40;
  const followerBorderColor =
    variant === "hover" || variant === "view"
      ? "rgba(94,106,210,0.6)"
      : "rgba(255,255,255,0.3)";

  const easeCss = `cubic-bezier(${CURSOR_EASE.join(",")})`;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          width: dotSize,
          height: dotSize,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full"
        style={{
          width: followerSize,
          height: followerSize,
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          border: `1.5px solid ${followerBorderColor}`,
          opacity: visible ? 1 : 0,
          transition: `width 0.3s ${easeCss}, height 0.3s ${easeCss}, border-color 0.3s ${easeCss}, opacity 0.2s ease`,
        }}
      >
        {variant === "view" && (
          <span className="text-[10px] font-medium tracking-wider text-accent select-none">
            View&nbsp;&rarr;
          </span>
        )}
      </motion.div>
    </>
  );
}
