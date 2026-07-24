"use client";

import { experience } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <TextReveal
          text="Built inside the pressure"
          className="max-w-[14ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl lg:text-7xl"
        />
        <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
          Contact centers, secure insurance data, and chat systems that stay up when traffic spikes.
        </p>
      </Reveal>

      <div className="mt-16 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <SpotlightCard className="border border-line bg-bg-elevated">
              <article className="relative grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:gap-8 md:p-10">
                <div className="md:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-hot">
                    {job.period}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
                    {job.company}
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">{job.role}</p>
                </div>
                <p className="text-base leading-relaxed text-fg-muted md:col-span-6 md:text-lg">
                  {job.focus}
                </p>
              </article>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
