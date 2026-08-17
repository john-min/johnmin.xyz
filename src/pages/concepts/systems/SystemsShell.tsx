import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { profile } from "@/lib/content/site";

const nav = [
  { label: "Writing", to: "/concepts/systems#writing" },
  { label: "Projects", to: "/concepts/systems/projects" },
  { label: "About", to: "/concepts/systems#about" },
];

export const SystemsShell = ({ children }: { children: ReactNode }) => (
  <div className="concept-systems min-h-screen bg-background text-foreground">
    <header className="border-b border-border">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center gap-6 px-6 py-4 md:px-10"
      >
        <Link
          to="/concepts/systems"
          className="font-meta text-[12px] uppercase tracking-[0.22em]"
        >
          {profile.name}
        </Link>
        <ul className="flex items-center gap-5">
          {nav.map((n) => (
            <li key={n.label}>
              <Link
                to={n.to}
                className="font-meta text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    {children}

    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-6 md:px-10">
        <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {profile.name} — index rev. 2026.08
        </span>
        <Link
          to="/concepts"
          className="justify-self-end font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
        >
          Concepts
        </Link>
      </div>
    </footer>
  </div>
);

export const LedgerHeading = ({
  refNo,
  title,
  count,
}: {
  refNo: string;
  title: string;
  count?: string;
}) => (
  <div className="grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-4 border-b border-foreground/70 pb-2">
    <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-primary">
      {refNo}
    </span>
    <h2 className="font-meta text-[10px] uppercase tracking-[0.2em]">{title}</h2>
    {count && (
      <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {count}
      </span>
    )}
  </div>
);
