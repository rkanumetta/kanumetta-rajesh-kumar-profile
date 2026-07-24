import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.png"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                {profile.name}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-fg-muted">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-fg"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-fg"
                >
                  GitHub
                </a>
                <a
                  href={profile.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-fg"
                >
                  Medium
                </a>
                <span>{profile.education}</span>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
