import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { profile } from "@/lib/content/site";

const nav = [
  { label: "Writing", to: "/concepts/architectural#writing" },
  { label: "Projects", to: "/concepts/architectural/projects" },
  { label: "About", to: "/concepts/architectural#about" },
];

export const ArchShell = ({ children }: { children: ReactNode }) => (
  <div className="concept-architectural min-h-screen bg-background text-foreground">
    <header>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-6 md:px-10"
      >
        <Link
          to="/concepts/architectural"
          className="font-meta text-[12px] uppercase tracking-[0.22em]"
        >
          {profile.name}
        </Link>
        <ul className="flex items-center gap-6">
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

    <footer className="mt-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-8 md:px-10">
        <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          © 2026 {profile.name}
        </span>
        <div className="flex h-1.5 w-24" aria-hidden="true">
          <span className="flex-1 bg-primary" />
          <span className="flex-1 bg-accent" />
          <span className="flex-1 bg-secondary" />
        </div>
        <Link
          to="/concepts"
          className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
        >
          Concepts
        </Link>
      </div>
    </footer>
  </div>
);

export const ArchLabel = ({
  refNo,
  title,
  color,
}: {
  refNo: string;
  title: string;
  color: "primary" | "accent" | "secondary";
}) => {
  const bar =
    color === "primary"
      ? "bg-primary"
      : color === "accent"
        ? "bg-accent"
        : "bg-secondary";
  return (
    <div className="flex items-center gap-4">
      <span className={`h-6 w-1.5 ${bar}`} aria-hidden="true" />
      <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {refNo}
      </span>
      <h2 className="font-meta text-[10px] uppercase tracking-[0.2em]">
        {title}
      </h2>
    </div>
  );
};
