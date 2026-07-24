"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();

  const hidden =
    direction === "left"
      ? { opacity: 0.01, x: -36 }
      : direction === "right"
        ? { opacity: 0.01, x: 36 }
        : direction === "scale"
          ? { opacity: 0.01, scale: 0.94 }
          : { opacity: 0.01, y: 36 };

  const visible =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0 }
      : direction === "scale"
        ? { opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
