"use client";

import { ArrowUpRight, GithubLogo, Star } from "@phosphor-icons/react";
import { profile, repos } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function OpenSource() {
  const featured = repos.find((repo) => repo.featured)!;
  const others = repos.filter((repo) => !repo.featured);

  return (
    <section id="github" className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-hot">
            Open source
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[14ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl">
              Code on GitHub
            </h2>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-white/30"
            >
              <GithubLogo size={18} weight="fill" />
              github.com/rkanumetta
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 overflow-hidden border border-line bg-bg transition-colors hover:border-accent/50 lg:grid-cols-12"
          >
            <div className="relative flex flex-col justify-between gap-8 bg-gradient-to-br from-accent-soft via-bg to-bg p-6 md:p-10 lg:col-span-7">
              <div>
                <div className="flex items-center gap-3">
                  <GithubLogo size={22} weight="fill" className="text-accent-hot" />
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                    Featured package
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-fg-muted">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-fg-muted">
                  {featured.language}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted">
                  <Star size={14} weight="fill" className="text-accent-hot" />
                  {featured.stars}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-line p-6 md:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
              <p className="max-w-[28ch] text-sm leading-relaxed text-fg-muted">
                npm package for production LLM token tracking with memory, file, and MongoDB storage.
              </p>
              <ArrowUpRight
                size={28}
                weight="bold"
                className="shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </a>
        </Reveal>

        <div className="mt-4 divide-y divide-line border border-line">
          {others.map((repo, i) => (
            <Reveal key={repo.name} delay={0.05 * i}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-3 p-5 transition-colors hover:bg-bg md:grid-cols-12 md:items-center md:gap-6 md:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-fg md:col-span-3">
                  {repo.name}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted md:col-span-7">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between gap-3 md:col-span-2 md:justify-end">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-fg-muted">
                    {repo.language}
                  </span>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
