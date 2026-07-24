import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
          {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-5 text-sm text-fg-muted">
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
    </footer>
  );
}
