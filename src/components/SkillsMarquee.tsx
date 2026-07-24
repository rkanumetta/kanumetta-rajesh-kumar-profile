"use client";

import { useState } from "react";
import { motion } from "motion/react";

const items = [
  "React",
  "Node.js",
  "AWS Lex",
  "Dialogflow CX",
  "TypeScript",
  "AWS Connect",
  "MongoDB",
  "GCP",
  "Angular",
  "LLM Agents",
  "Express",
  "Datadog",
];

export function SkillsMarquee() {
  const loop = [...items, ...items];
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden border-y border-line bg-bg-elevated py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-elevated to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-elevated to-transparent md:w-28" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap pl-10"
        animate={paused ? { x: undefined } : { x: ["0%", "-50%"] }}
        transition={
          paused
            ? { duration: 0 }
            : { duration: 28, ease: "linear", repeat: Infinity }
        }
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm font-medium tracking-tight text-fg-muted transition-colors hover:text-accent-hot md:text-base"
          >
            <span className="mr-10 text-accent">/</span>
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
