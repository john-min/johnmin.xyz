const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <span className="blinking-cursor font-mono text-[10px] tracking-widest text-muted-foreground">
              REF.01
            </span>
            <h2 className="mt-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
              Context
            </h2>
            <div className="mt-4 h-1 w-16 bg-primary" />
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-foreground">
              I'm drawn to the spaces where art meets structure — where careful
              restraint reveals something deeper. My work spans design,
              engineering, and creative exploration.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Currently interested in the poetry of systems, the architecture of
              light, and the quiet power of well-considered spaces. Inspired by
              Barragán's philosophy that architecture is an act of emotion.
            </p>

            <div className="pt-8">
              <h3 className="font-mono text-xs tracking-widest text-muted-foreground">
                CURRENTLY
              </h3>
              <ul className="mt-4 space-y-2 font-sans text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                  Design & creative direction
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-secondary" />
                  Software engineering
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                  Writing & research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
