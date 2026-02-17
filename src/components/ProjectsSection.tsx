interface Project {
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  year: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A study in light and materiality through computational design.",
    color: "primary",
    year: "2025",
  },
  {
    title: "Project Beta",
    description: "Exploring the boundaries of generative systems and human expression.",
    color: "secondary",
    year: "2024",
  },
  {
    title: "Project Gamma",
    description: "An architectural framework for digital spaces and quiet interfaces.",
    color: "accent",
    year: "2024",
  },
];

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="blinking-cursor font-mono text-[10px] tracking-widest text-muted-foreground">
              REF.02
            </span>
            <h2 className="mt-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
              Projects
            </h2>
          </div>
          <div className="mt-4 h-1 w-16 bg-secondary" />
        </div>

        <div className="space-y-0 border-t border-border">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group flex cursor-pointer items-start justify-between border-b border-border py-8 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start gap-6">
                <div className={`mt-2 h-3 w-3 ${colorMap[project.color]}`} />
                <div>
                  <h3 className="font-mono text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
