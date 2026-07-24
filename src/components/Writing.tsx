"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { writing } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Writing() {
  const [featured, ...rest] = writing;

  return (
    <section id="writing" className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-[12ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl lg:text-7xl">
            Writing on AI and Node
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
            Essays on agent loops, LLM cost tracking, and practical Node.js patterns.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden border border-line bg-bg-elevated p-6 transition-colors hover:border-accent/50 md:p-10"
          >
            <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-accent/15 blur-[80px] transition-opacity group-hover:opacity-100" />
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-hot">
                  {featured.date} · {featured.readTime}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-fg-muted">
                  {featured.summary}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6 lg:col-span-4 lg:items-end lg:text-right">
                <ArrowUpRight
                  size={28}
                  weight="bold"
                  className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {featured.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-fg-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </Reveal>

        <div className="mt-4 divide-y divide-line border border-line">
          {rest.map((post, i) => (
            <Reveal key={post.url} delay={0.05 * i}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-4 p-6 transition-colors hover:bg-bg-elevated md:grid-cols-12 md:gap-6 md:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted md:col-span-3">
                  {post.date} · {post.readTime}
                </p>
                <div className="md:col-span-7">
                  <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{post.summary}</p>
                </div>
                <div className="flex items-start justify-end md:col-span-2">
                  <ArrowUpRight
                    size={20}
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
