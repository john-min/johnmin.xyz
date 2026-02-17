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

          <div className="space-y-8">
            {/* Education */}
            <div className="border-l-4 border-primary bg-[hsl(var(--card-block))] p-6">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                EDUCATION
              </span>
              <p className="mt-3 font-mono text-base leading-relaxed text-[hsl(var(--block-foreground))]">
                Duke undergrad (economics, math, public policy) → Columbia grad (statistics, ML).
              </p>
            </div>

            {/* Experience */}
            <div className="border-l-4 border-secondary bg-[hsl(var(--card-block))] p-6">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                EXPERIENCE
              </span>
              <p className="mt-3 font-mono text-base leading-relaxed text-[hsl(var(--block-foreground))]">
                Data science across fintech, healthcare, location intelligence, mobile advertising, politics, media, and web3. Product and strategy in consumer credit, emerging markets lending, and digital transformation.
              </p>
            </div>

            {/* Dignifi */}
            <div className="border-l-4 border-accent bg-[hsl(var(--card-block))] p-6">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                DIGNIFI
              </span>
              <p className="mt-3 font-mono text-base leading-relaxed text-[hsl(var(--block-foreground))]">
                Co-founded Dignifi — AI-powered reentry support for justice-impacted individuals across housing, health, and employment.
              </p>
            </div>

            {/* Current Interests */}
            <div className="border-l-4 border-[hsl(var(--barragan-neutral))] bg-[hsl(var(--card-block))] p-6">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                CURRENT INTERESTS
              </span>
              <p className="mt-3 font-mono text-base leading-relaxed text-[hsl(var(--block-foreground))]">
                AI systems, fintech and stablecoins, and the automation of everything that moves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
