import { useState } from "react";
import { Link } from "react-router-dom";
import {
  about,
  essays,
  links,
  profile,
  projectItems,
  substackUrl,
} from "@/lib/content/site";
import { LedgerHeading, SystemsShell } from "./SystemsShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const SystemsHome = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : projectItems[activeIndex];

  return (
    <SystemsShell>
      <main className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Identity */}
        <section className="grid gap-6 border-b border-border py-12 md:grid-cols-[1fr_1.2fr] md:py-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-meta text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              San Francisco · 37.7749 N / 122.4194 W
            </p>
          </div>
          <p className="max-w-lg text-[0.95rem] leading-relaxed text-foreground/85">
            {profile.intro}
          </p>
        </section>

        {/* REF.01 Writing */}
        <section id="writing" className="scroll-mt-20 py-12">
          <LedgerHeading
            refNo="REF.01"
            title="Writing"
            count={`${essays.length} entries`}
          />
          <ul>
            {essays.map((essay, i) => (
              <li key={essay.url}>
                <a
                  href={essay.url}
                  {...ext}
                  className="group grid grid-cols-[3rem_1fr_1.5rem] items-baseline gap-x-4 gap-y-1 border-b border-border py-5 transition-colors duration-200 hover:bg-muted md:grid-cols-[3rem_7rem_1fr_1.5rem]"
                >
                  <span className="font-meta text-[10px] tracking-[0.16em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <time
                    dateTime={essay.dateISO}
                    className="font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {essay.dateISO}
                  </time>
                  <div className="col-span-2 md:col-span-1">
                    <h3 className="text-lg font-medium leading-snug transition-colors duration-200 group-hover:text-primary">
                      {essay.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {essay.subtitle}
                    </p>
                  </div>
                  <span className="hidden font-meta text-sm text-primary transition-transform duration-200 group-hover:translate-x-1 md:block md:justify-self-end">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={substackUrl}
            {...ext}
            className="mt-5 inline-block font-meta text-[10px] uppercase tracking-[0.18em] text-primary underline underline-offset-4"
          >
            All writing on Substack ↗
          </a>
        </section>

        {/* REF.02 Projects */}
        <section id="projects" className="scroll-mt-20 py-12">
          <LedgerHeading
            refNo="REF.02"
            title="Projects"
            count={`${projectItems.length} records`}
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
            <div>
              {projectItems.map((p, i) => (
                <a
                  key={p.title}
                  href={p.url}
                  {...ext}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  className="group block border-b border-border py-5 transition-colors duration-200 hover:bg-muted"
                >
                  <div className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4">
                    <span className="font-meta text-[10px] tracking-[0.16em] text-muted-foreground">
                      P-{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium transition-colors duration-200 group-hover:text-primary">
                      {p.title}
                    </h3>
                    <span className="flex items-center gap-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span
                        className="inline-block h-1.5 w-1.5 bg-primary"
                        aria-hidden="true"
                      />
                      {p.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-0 md:grid-cols-[3rem_1fr] md:gap-4">
                    <span aria-hidden="true" className="hidden md:block" />
                    <div>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <p className="mt-2 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {p.tags.join(" · ")} · {p.group}
                      </p>
                      <div className="mt-3 aspect-video w-full overflow-hidden border border-border lg:hidden">
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              <Link
                to="/concepts/systems/projects"
                className="mt-5 inline-block font-meta text-[10px] uppercase tracking-[0.18em] text-primary underline underline-offset-4"
              >
                View all projects →
              </Link>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              <div className="sticky top-8 border border-border bg-muted/40 p-2">
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={active ? active.image : projectItems[0].image}
                    alt=""
                    className={`h-full w-full object-cover object-top transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <p className="mt-2 h-4 font-meta text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {active ? `PREVIEW — ${active.title}` : "PREVIEW — IDLE"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REF.03 About + Contact */}
        <section id="about" className="scroll-mt-20 py-12">
          <LedgerHeading refNo="REF.03" title="About + Contact" />
          <div className="grid gap-8 py-6 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3">
              {about.lines.map((line) => (
                <p
                  key={line}
                  className="max-w-xl text-[0.95rem] leading-relaxed text-foreground/85"
                >
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {about.contactNote}
              </p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      {...ext}
                      className="flex items-center justify-between py-2.5 font-meta text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 hover:text-primary"
                    >
                      {l.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </SystemsShell>
  );
};

export default SystemsHome;
