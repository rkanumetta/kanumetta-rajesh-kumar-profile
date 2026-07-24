"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { withBasePath } from "@/lib/paths";

export function Work() {
  const [featured, second, ...rest] = projects;

  return (
    <section id="work" className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-hot">
            Selected work
          </p>
          <TextReveal
            text="Systems that take the hit"
            className="max-w-[12ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl lg:text-7xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-8" delay={0.05} direction="scale">
            <SpotlightCard className="h-full border border-line bg-bg">
              <article className="group relative flex h-full min-h-[420px] flex-col overflow-hidden">
                <div className="relative min-h-[240px] flex-1">
                  <Image
                    src={withBasePath("/images/hero-v2.png")}
                    alt="Architectural light study for featured project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                </div>
                <div className="relative -mt-24 p-6 md:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-hot">
                    {featured.org}
                  </p>
                  <h3 className="mt-3 flex items-start gap-3 text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
                    {featured.name}
                    <ArrowUpRight
                      size={28}
                      className="mt-1 shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      weight="bold"
                    />
                  </h3>
                  <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-fg-muted">
                    {featured.result}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {featured.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-fg-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SpotlightCard>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.12} direction="right">
            <SpotlightCard className="h-full border border-line bg-bg">
              <article className="group relative flex h-full min-h-[420px] flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={withBasePath("/images/surface-v2.png")}
                    alt="Dark metal surface with cobalt light streak"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                      {second.org}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-fg">
                      {second.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{second.result}</p>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {second.stack.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-[11px] uppercase tracking-wide text-accent-hot"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SpotlightCard>
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={0.06 * i} direction="up">
              <SpotlightCard className="border border-line bg-bg">
                <article className="group p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                      {project.org}
                    </p>
                    <ArrowUpRight
                      size={18}
                      className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      weight="bold"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg md:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{project.result}</p>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
