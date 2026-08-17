import { projects, type Project } from "@/lib/mcp/content";

const accentBorder: Record<Project["accent"], string> = {
  primary: "group-hover:border-l-primary",
  secondary: "group-hover:border-l-secondary",
  accent: "group-hover:border-l-accent",
};

const accentText: Record<Project["accent"], string> = {
  primary: "group-hover:text-primary",
  secondary: "group-hover:text-secondary",
  accent: "group-hover:text-accent",
};

const groups: Project["group"][] = ["Financial systems", "Music experiments"];

const ProjectRow = ({ project }: { project: Project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block border-b border-border border-l-4 border-l-transparent py-6 pl-0 transition-all duration-300 hover:bg-[hsl(var(--card-block))] hover:pl-6 ${accentBorder[project.accent]}`}
  >
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h4
        className={`font-mono text-xl font-bold text-foreground transition-colors ${accentText[project.accent]}`}
      >
        {project.title}
        <span className="ml-2 inline-block translate-x-0 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          ↗
        </span>
      </h4>
      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
        {project.status}
      </span>
    </div>

    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </p>

    <div className="mt-3 grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pb-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.note && (
          <p className="pt-1 font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
            {project.note}
          </p>
        )}
      </div>
    </div>
  </a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-32 md:px-12 lg:pr-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="blinking-cursor font-mono text-[10px] tracking-widest text-muted-foreground">
            REF.02
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
            Projects &amp; experiments
          </h2>
          <div className="mt-4 h-1 w-16 bg-secondary" />
          <p className="mt-6 max-w-xl font-sans text-base text-muted-foreground">
            Products built around programmable money, AI, music, and interaction.
          </p>
        </div>

        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group}>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                {group}
              </span>
              <div className="mt-4 border-t border-border">
                {projects
                  .filter((p) => p.group === group)
                  .map((project) => (
                    <ProjectRow key={project.title} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
