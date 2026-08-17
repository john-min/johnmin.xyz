import { groupedProjects, projectsPage } from "@/lib/content/site";
import { EditorialShell } from "./EditorialShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const EditorialProjects = () => (
  <EditorialShell>
    <main className="mx-auto max-w-5xl px-6 md:px-10">
      <header className="border-b border-border py-14 md:py-20">
        <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight">
          {projectsPage.heading}
        </h1>
        <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
          {projectsPage.subtitle}
        </p>
      </header>

      {groupedProjects.map(({ group, items }) => (
        <section key={group} className="py-14">
          <h2 className="border-b border-foreground pb-3 font-meta text-[11px] uppercase tracking-[0.2em]">
            {group}
          </h2>

          <div className="mt-10 space-y-20">
            {items.map((p, i) => (
              <article
                key={p.title}
                className={`grid items-start gap-8 md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure
                  className={`md:col-span-7 ${i % 2 === 1 ? "md:col-start-6" : ""}`}
                >
                  <div className="aspect-video overflow-hidden border border-border bg-muted">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </figure>

                <div
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
                >
                  <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-primary">
                    {p.status}
                  </span>
                  <h3 className="mt-2 font-display text-3xl leading-none md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    {p.description}
                  </p>
                  <p className="mt-3 font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.tags.join(" · ")}
                  </p>
                  <a
                    href={p.url}
                    {...ext}
                    className="group mt-5 inline-block font-meta text-[11px] uppercase tracking-[0.18em] text-foreground underline underline-offset-4 transition-colors duration-200 hover:text-primary"
                  >
                    Open project{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  </EditorialShell>
);

export default EditorialProjects;
