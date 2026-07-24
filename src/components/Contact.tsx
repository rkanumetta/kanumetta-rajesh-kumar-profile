"use client";

import Image from "next/image";
import {
  EnvelopeSimple,
  Phone,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { TextReveal } from "@/components/TextReveal";
import { withBasePath } from "@/lib/paths";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/surface-v2.png")}
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/70" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-36">
        <Reveal direction="scale">
          <TextReveal
            text="Ready for the next hard chat platform?"
            className="max-w-[15ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl lg:text-7xl"
          />
          <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-fg-muted md:text-lg">
            Open to roles that own conversational systems end to end. Fast replies. Clear delivery.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-fg shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            <EnvelopeSimple size={18} weight="bold" />
            {profile.email}
          </MagneticButton>
          <MagneticButton
            href={profile.linkedin}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-fg backdrop-blur-sm"
          >
            <LinkedinLogo size={18} weight="fill" />
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={profile.github}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-fg backdrop-blur-sm"
          >
            <GithubLogo size={18} weight="fill" />
            GitHub
          </MagneticButton>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:border-white/30"
          >
            <Phone size={18} weight="bold" />
            {profile.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
