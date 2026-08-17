import { useState } from "react";
import { groupedProjects, projectItems, projectsPage } from "@/lib/content/site";
import { LedgerHeading, SystemsShell } from "./SystemsShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const SystemsProjects = () => {
  const [selected, setSelected] = useState(projectItems[0]);

  return (
    <SystemsShell>
      <main className="mx-auto max-w-5xl px-6 md:px-10">
        <header className="grid gap-4 border-b border-border py-12 md:grid-cols-[1fr_1fr] md:py-16">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {projectsPage.heading}
          </h1>
          <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground">
            {projectsPage.subtitle}
          </p>
        </header>

        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-12">
            {groupedProjects.map(({ group, items }) => (
              <section key={group}>
                <LedgerHeading
                  refNo={group === "Financial systems" ? "GRP.01" : "GRP.02"}
                  title={group}
                  count={`${items.length} records`}
                />
                <ul>
                  {items.map((p) => (
                    <li key={p.title}>
                      <div
                        onMouseEnter={() => setSelected(p)}
                        onFocus={() => setSelected(p)}
                        className="border-b border-border py-6"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <h3 className="text-xl font-medium">{p.title}</h3>
                          <span className="flex items-center gap-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            <span
                              className="inline-block h-1.5 w-1.5 bg-primary"
                              aria-hidden="true"
                            />
                            {p.status}
                          </span>
                        </div>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                        <p className="mt-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {p.tags.join(" · ")}
                        </p>
                        <div className="mt-4 aspect-video w-full overflow-hidden border border-border lg:hidden">
                          <img
                            src={p.image}
                            alt={p.imageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <a
                          href={p.url}
                          {...ext}
                          className="group mt-4 inline-block font-meta text-[11px] uppercase tracking-[0.16em] text-primary underline underline-offset-4"
                        >
                          Open project{" "}
                          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                            ↗
                          </span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="hidden lg:block" aria-hidden="true">
            <div className="sticky top-8 border border-border bg-muted/40 p-2">
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  key={selected.title}
                  src={selected.image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p className="mt-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {selected.title} — {selected.status}
              </p>
            </div>
          </aside>
        </div>
      </main>
    </SystemsShell>
  );
};

export default SystemsProjects;
