interface Project {
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  year: string;
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="blinking-cursor font-mono text-[10px] tracking-widest text-muted-foreground">
            REF.02
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
            Projects
          </h2>
          <div className="mt-4 h-1 w-16 bg-secondary" />
        </div>

        <div className="border-t border-border py-16 text-center">
          <p className="font-mono text-sm tracking-widest text-muted-foreground">
            UNDER CONSTRUCTION
          </p>
          <p className="mt-4 font-sans text-base text-muted-foreground">
            Case studies and selected work — coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
