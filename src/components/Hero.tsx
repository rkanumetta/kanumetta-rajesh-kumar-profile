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
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden mesh-hero"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-v2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
      </div>

      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent/25 blur-[90px]"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-[10%] top-1/4 h-80 w-80 rounded-full bg-accent-hot/20 blur-[110px]"
            animate={{ x: [0, -30, 0], y: [0, 50, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pb-16 pt-28 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-24">
        <motion.div
          className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7"
          style={reduce ? undefined : { y: contentY }}
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
            className="max-w-[11ch] text-[clamp(2.6rem,7.5vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-fg"
          />

          <motion.p
            className="mt-6 max-w-[40ch] text-base leading-relaxed text-fg-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
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
        </motion.div>

        <motion.div
          className="order-1 relative mx-auto w-full max-w-[420px] lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none"
          style={reduce ? undefined : { y: portraitY }}
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-bg-elevated shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/profile.png"
                alt={`${profile.name}, MERN Stack and Chatbot Associate`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-hot">
              {profile.title}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
