const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-end px-6 pb-24 pt-32 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Barragán tri-color stripe */}
        <div className="barragan-stripe mb-12 h-1 w-32" />

        <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
          Your Name
        </h1>

        <p className="max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
          A collection of projects, ideas, and explorations at the intersection
          of design, technology, and culture.
        </p>

        {/* Decorative coordinates — nod to the reference */}
        <div className="mt-16 font-mono text-[10px] tracking-widest text-muted-foreground/50">
          <p>19.4326° N, 99.1332° W</p>
          <p>MEXICO CITY</p>
        </div>
      </div>

      {/* Color blocks — Barragán architectural accent */}
      <div className="absolute right-12 top-1/3 hidden flex-col gap-3 lg:flex">
        <div className="h-24 w-6 bg-primary" />
        <div className="h-16 w-6 bg-secondary" />
        <div className="h-32 w-6 bg-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
