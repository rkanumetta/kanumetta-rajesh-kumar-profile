"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDownRight, LinkedinLogo } from "@phosphor-icons/react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/MagneticButton";
import { TextReveal } from "@/components/TextReveal";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden mesh-hero"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
      >
        <Image
          src="/images/hero-v2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/45" />
      </motion.div>

      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent/25 blur-[90px]"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-hot/20 blur-[110px]"
            animate={{ x: [0, -30, 0], y: [0, 50, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <motion.div
        className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-4 pb-20 pt-28 md:px-8 md:pb-24 lg:justify-center lg:pb-28 lg:pt-24"
        style={reduce ? undefined : { y: contentY, opacity: fade }}
      >
        <motion.p
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-hot"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.years} years shipping production systems
        </motion.p>

        <TextReveal
          as="h1"
          text={profile.name}
          className="max-w-[11ch] text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-fg"
        />

        <div className="mt-8 grid max-w-5xl grid-cols-1 items-end gap-8 lg:mt-10 lg:grid-cols-12">
          <motion.p
            className="max-w-[40ch] text-base leading-relaxed text-fg-muted md:text-lg lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 lg:col-span-6 lg:justify-end"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-fg shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            >
              Hire me
              <ArrowDownRight size={18} weight="bold" />
            </MagneticButton>
            <MagneticButton
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-fg backdrop-blur-sm"
            >
              <LinkedinLogo size={18} weight="fill" />
              LinkedIn
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
