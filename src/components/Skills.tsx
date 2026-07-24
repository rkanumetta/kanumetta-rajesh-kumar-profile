"use client";

import { skillGroups } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <TextReveal
            text="Tools I trust in production"
            className="max-w-[12ch] text-4xl font-semibold tracking-[-0.04em] text-fg md:text-6xl lg:text-7xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.08}
              direction={i % 2 === 0 ? "up" : "scale"}
            >
              <SpotlightCard
                className={`h-full border border-line ${
                  i === 0 || i === 3 ? "bg-bg-soft" : "bg-bg-elevated"
                } ${i === 1 ? "bg-gradient-to-br from-accent-soft to-bg-elevated" : ""}`}
              >
                <div className="p-6 md:p-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-hot">
                    {group.label}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line/70 pb-3 text-lg tracking-tight text-fg last:border-0 last:pb-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
