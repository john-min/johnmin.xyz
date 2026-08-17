import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/lib/content/site";

const nav = [
  { label: "Writing", to: "/concepts/editorial#writing" },
  { label: "Projects", to: "/concepts/editorial/projects" },
  { label: "About", to: "/concepts/editorial#about" },
];

export const EditorialShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="concept-editorial min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-5 md:px-10"
        >
          <Link
            to="/concepts/editorial"
            className="font-display text-lg tracking-tight"
          >
            {profile.name}
          </Link>
          <ul className="flex items-baseline gap-6">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`font-meta text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 hover:text-foreground ${
                    pathname.endsWith("projects") && item.label === "Projects"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {children}

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 md:px-10">
          <span className="font-meta text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © 2026 {profile.name}
          </span>
          <Link
            to="/concepts"
            className="font-meta text-[11px] uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Concepts
          </Link>
        </div>
      </footer>
    </div>
  );
};

export const SectionLabel = ({
  refNo,
  title,
}: {
  refNo: string;
  title: string;
}) => (
  <div className="flex items-baseline gap-4 border-b border-foreground pb-3">
    <span className="font-meta text-[11px] uppercase tracking-[0.2em] text-primary">
      {refNo}
    </span>
    <h2 className="font-meta text-[11px] uppercase tracking-[0.2em] text-foreground">
      {title}
    </h2>
  </div>
);
