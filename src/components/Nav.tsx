"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/MagneticButton";
import { withBasePath } from "@/lib/paths";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#github", label: "GitHub" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          className="relative z-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-bg/70 py-1.5 pl-1.5 pr-4 backdrop-blur-md"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/images/profile.png")}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-fg">
            {profile.shortName.toUpperCase()}
          </span>
        </a>

        <div className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-bg/70 p-1.5 backdrop-blur-md lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-fg"
          >
            Hire me
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-bg/70 p-2.5 text-fg backdrop-blur-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-line bg-bg/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-fg"
              onClick={() => setOpen(false)}
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
