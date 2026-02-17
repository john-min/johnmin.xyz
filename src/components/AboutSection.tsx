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
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Duke undergrad (economics, math, public policy) → Columbia grad
              (statistics, ML). Data science across in fintech, healthcare,
              location intelligence, mobile advertising, politics, media, and
              web3.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Product and strategy in consumer credit, emerging markets lending,
              and digital transformation. Co-founded Dignifi — AI-powered
              reentry support for justice-impacted individuals across housing,
              health, and employment.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Current interests include: AI systems, fintech and stablecoins,
              and the automation of everything that moves.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
