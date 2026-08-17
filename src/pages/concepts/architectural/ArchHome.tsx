import { useState } from "react";
import { Link } from "react-router-dom";
import {
  about,
  essays,
  links,
  profile,
  projectItems,
  substackUrl,
  type ProjectItem,
} from "@/lib/content/site";
import { ArchLabel, ArchShell } from "./ArchShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const planes = ["bg-primary", "bg-accent", "bg-secondary", "bg-primary"];

const ArchHome = () => {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <ArchShell>
      <main className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Identity — asymmetric plaster composition */}
        <section className="grid gap-8 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <h1 className="text-[clamp(2.75rem,9vw,5.5rem)] font-bold leading-[0.9] tracking-tight">
              John Min
            </h1>
            <div className="mt-6 flex h-2 w-40" aria-hidden="true">
              <span className="flex-1 bg-primary" />
              <span className="flex-1 bg-accent" />
              <span className="flex-1 bg-secondary" />
            </div>
          </div>
          <p className="max-w-md self-end text-[0.95rem] leading-relaxed text-foreground/85 md:col-span-5">
            {profile.intro}
          </p>
        </section>

        {/* REF.01 Writing */}
        <section id="writing" className="scroll-mt-20 py-12">
          <ArchLabel refNo="REF.01" title="Writing" color="primary" />
          <ul className="mt-8">
            {essays.map((essay) => (
              <li key={essay.url}>
                <a
                  href={essay.url}
                  {...ext}
                  className="group grid gap-1 border-t border-border py-6 transition-transform duration-200 md:grid-cols-12 md:items-baseline md:gap-6 md:hover:translate-x-1"
                >
                  <time
                    dateTime={essay.dateISO}
                    className="font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-3"
                  >
                    {essay.date}
                  </time>
                  <div className="md:col-span-8">
                    <h3 className="text-xl font-semibold leading-snug transition-colors duration-200 group-hover:text-primary md:text-2xl">
                      {essay.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {essay.subtitle}
                    </p>
                  </div>
                  <span className="font-meta text-sm text-primary md:col-span-1 md:justify-self-end">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={substackUrl}
            {...ext}
            className="mt-6 inline-block border-b-2 border-accent pb-0.5 font-meta text-[11px] uppercase tracking-[0.16em]"
          >
            All writing on Substack ↗
          </a>
        </section>

        {/* REF.02 Projects */}
        <section id="projects" className="scroll-mt-20 py-12">
          <ArchLabel refNo="REF.02" title="Projects" color="accent" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_19rem]">
            <div>
              {projectItems.map((p, i) => (
                <a
                  key={p.title}
                  href={p.url}
                  {...ext}
                  onMouseEnter={() => setActive(p)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(p)}
                  onBlur={() => setActive(null)}
                  className="group block border-t border-border py-6 transition-transform duration-200 md:hover:translate-x-1"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span
                      className={`h-3 w-3 ${planes[i % planes.length]}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {p.title}
                    </h3>
                    <span className="ml-auto font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl pl-7 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <p className="mt-2 pl-7 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.tags.join(" · ")}
                  </p>
                  <div className="mt-4 aspect-video w-full overflow-hidden border-l-4 border-accent lg:hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </a>
              ))}
              <Link
                to="/concepts/architectural/projects"
                className="mt-6 inline-block border-b-2 border-primary pb-0.5 font-meta text-[11px] uppercase tracking-[0.16em]"
              >
                View all projects →
              </Link>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              <div className="sticky top-8">
                <div
                  className={`relative transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="absolute -left-3 -top-3 h-16 w-16 bg-secondary" />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={active ? active.image : projectItems[0].image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-3 -right-3 h-10 w-24 bg-accent" />
                </div>
                <p className="mt-6 h-4 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {active ? active.title : ""}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REF.03 About + Contact */}
        <section id="about" className="scroll-mt-20 py-12">
          <ArchLabel refNo="REF.03" title="About + Contact" color="secondary" />
          <div className="mt-8 grid gap-10 md:grid-cols-12">
            <div className="space-y-4 border-l-4 border-secondary pl-6 md:col-span-7">
              {about.lines.map((line) => (
                <p
                  key={line}
                  className="text-[0.95rem] leading-relaxed text-foreground/85"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="md:col-span-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {about.contactNote}
              </p>
              <ul className="mt-5 space-y-3">
                {links.map((l, i) => (
                  <li key={l.url} className="flex items-center gap-3">
                    <span
                      className={`h-2 w-6 ${planes[i % planes.length]}`}
                      aria-hidden="true"
                    />
                    <a
                      href={l.url}
                      {...ext}
                      className="font-meta text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 hover:text-primary"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </ArchShell>
  );
};

export default ArchHome;
