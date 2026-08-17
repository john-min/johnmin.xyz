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
import { EditorialShell, SectionLabel } from "./EditorialShell";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const ProjectRow = ({
  project,
  onActivate,
}: {
  project: ProjectItem;
  onActivate: (p: ProjectItem | null) => void;
}) => (
  <a
    href={project.url}
    {...ext}
    onMouseEnter={() => onActivate(project)}
    onMouseLeave={() => onActivate(null)}
    onFocus={() => onActivate(project)}
    onBlur={() => onActivate(null)}
    className="group block border-b border-border py-6 transition-opacity duration-200 hover:opacity-80"
  >
    <div className="flex items-baseline justify-between gap-6">
      <h3 className="font-display text-2xl leading-none md:text-3xl">
        {project.title}
      </h3>
      <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {project.status}
      </span>
    </div>
    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </p>
    <div className="mt-2 flex items-center justify-between gap-4">
      <span className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {project.tags.join(" · ")}
      </span>
      <span className="font-meta text-sm text-primary transition-transform duration-200 group-hover:translate-x-1">
        ↗
      </span>
    </div>
    {/* Mobile preview */}
    <div className="mt-4 aspect-video w-full overflow-hidden border border-border lg:hidden">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </a>
);

const EditorialHome = () => {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <EditorialShell>
      <main className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Identity + introduction */}
        <section className="grid gap-8 border-b border-border py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
          <h1 className="font-display text-[clamp(3rem,11vw,7rem)] leading-[0.86] tracking-tight">
            John
            <br />
            Min
          </h1>
          <p className="max-w-md self-end text-[0.95rem] leading-relaxed text-foreground/80">
            {profile.intro}
          </p>
        </section>

        {/* REF.01 Writing */}
        <section id="writing" className="scroll-mt-20 py-14">
          <SectionLabel refNo="REF.01" title="Writing" />
          <ul>
            {essays.map((essay) => (
              <li key={essay.url}>
                <a
                  href={essay.url}
                  {...ext}
                  className="group grid gap-1 border-b border-border py-6 transition-opacity duration-200 hover:opacity-70 md:grid-cols-[8rem_1fr_2rem] md:items-baseline md:gap-6"
                >
                  <time
                    dateTime={essay.dateISO}
                    className="font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {essay.date}
                  </time>
                  <div>
                    <h3 className="font-display text-2xl leading-tight md:text-[1.75rem]">
                      {essay.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm italic leading-relaxed text-muted-foreground">
                      {essay.subtitle}
                    </p>
                  </div>
                  <span className="font-meta text-sm text-primary transition-transform duration-200 group-hover:translate-x-1 md:justify-self-end">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={substackUrl}
            {...ext}
            className="mt-6 inline-block font-meta text-[11px] uppercase tracking-[0.18em] text-primary underline underline-offset-4"
          >
            All writing on Substack ↗
          </a>
        </section>

        {/* REF.02 Projects */}
        <section id="projects" className="scroll-mt-20 py-14">
          <SectionLabel refNo="REF.02" title="Projects" />
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div>
              {projectItems.map((p) => (
                <ProjectRow key={p.title} project={p} onActivate={setActive} />
              ))}
              <Link
                to="/concepts/editorial/projects"
                className="mt-6 inline-block font-meta text-[11px] uppercase tracking-[0.18em] text-primary underline underline-offset-4"
              >
                View all projects →
              </Link>
            </div>

            {/* Desktop preview rail — space is always reserved */}
            <div className="hidden lg:block" aria-hidden="true">
              <div className="sticky top-10">
                <div
                  className={`aspect-[4/3] w-full overflow-hidden border border-border bg-muted transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {active && (
                    <img
                      src={active.image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  )}
                </div>
                <p className="mt-2 h-4 font-meta text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {active ? active.title : ""}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REF.03 About + Contact */}
        <section id="about" className="scroll-mt-20 py-14">
          <SectionLabel refNo="REF.03" title="About + Contact" />
          <div className="grid gap-10 py-8 md:grid-cols-2">
            <div className="space-y-4">
              {about.lines.map((line) => (
                <p
                  key={line}
                  className="max-w-md text-[0.95rem] leading-relaxed text-foreground/80"
                >
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[0.95rem] leading-relaxed text-foreground/80">
                {about.contactNote}
              </p>
              <ul className="mt-5 space-y-2">
                {links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      {...ext}
                      className="font-meta text-[11px] uppercase tracking-[0.18em] underline underline-offset-4 transition-colors duration-200 hover:text-primary"
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
    </EditorialShell>
  );
};

export default EditorialHome;
