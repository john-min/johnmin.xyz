const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <span className="blinking-cursor font-mono text-[10px] tracking-widest text-muted-foreground">
              REF.03
            </span>
            <h2 className="mt-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
              Get in touch
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent" />
          </div>

          <div className="space-y-6">
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Open to conversations about design, collaboration, or just
              exchanging ideas. Reach out anytime.
            </p>

            <div className="space-y-3 pt-4">
              <a
                href="mailto:hello@example.com"
                className="block font-mono text-sm text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
              >
                hello@example.com
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-foreground underline decoration-secondary underline-offset-4 transition-colors hover:text-secondary"
              >
                Twitter / X
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 flex items-center justify-between border-t border-border pt-8">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            © 2025
          </span>
          <div className="barragan-stripe h-0.5 w-12" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
