import { groupedProjects, projectsPage } from "@/lib/content/site";
import { ArchLabel, ArchShell } from "./ArchShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const planeFor = (i: number) =>
  i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-accent" : "bg-secondary";

const ArchProjects = () => (
  <ArchShell>
    <main className="mx-auto max-w-5xl px-6 md:px-10">
      <header className="grid gap-6 py-10 md:grid-cols-12 md:py-16">
        <h1 className="text-[clamp(2.25rem,7vw,4rem)] font-bold leading-[0.95] tracking-tight md:col-span-7">
          {projectsPage.heading}
        </h1>
        <p className="max-w-sm self-end text-sm leading-relaxed text-muted-foreground md:col-span-5">
          {projectsPage.subtitle}
        </p>
      </header>

      {groupedProjects.map(({ group, items }, gi) => (
        <section key={group} className="py-10">
          <ArchLabel
            refNo={`GRP.0${gi + 1}`}
            title={group}
            color={gi === 0 ? "secondary" : "primary"}
          />

          <div className="mt-10 space-y-16">
            {items.map((p, i) => {
              const flipped = (gi + i) % 2 === 1;
              return (
                <article key={p.title} className="grid gap-8 md:grid-cols-12">
                  <figure
                    className={`relative md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : ""}`}
                  >
                    <span
                      className={`absolute -left-3 -top-3 h-20 w-20 ${planeFor(gi * 2 + i)}`}
                      aria-hidden="true"
                    />
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </figure>

                  <div
                    className={`self-center md:col-span-5 ${flipped ? "md:order-1 md:col-start-1" : ""}`}
                  >
                    <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.status}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                      {p.description}
                    </p>
                    <p className="mt-3 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {p.tags.join(" · ")}
                    </p>
                    <a
                      href={p.url}
                      {...ext}
                      className="group mt-5 inline-block border-b-2 border-primary pb-0.5 font-meta text-[11px] uppercase tracking-[0.16em]"
                    >
                      Open project{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  </ArchShell>
);

export default ArchProjects;
