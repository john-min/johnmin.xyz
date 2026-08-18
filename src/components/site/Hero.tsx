import { hero } from "@/lib/content/home";

const Hero = () => (
  <header id="top" className="md:grid md:grid-cols-[40px_1fr] lg:grid-cols-[96px_1fr]">
    <div aria-hidden="true" className="hidden md:block" />
    <div className="px-5 pb-8 pt-6 md:pb-[60px] md:pl-8 md:pr-8 md:pt-[52px] lg:pl-14 lg:pr-16">
      <div
        aria-hidden="true"
        className="flex h-[6px] w-full max-w-[640px]"
      >
        <span className="h-full flex-1 bg-pink" />
        <span className="h-full flex-1 bg-ochre" />
        <span className="h-full flex-1 bg-blue" />
      </div>

      <h1 className="mt-7 font-display text-[44px] font-normal leading-[0.92] tracking-[-0.035em] text-ink md:text-[68px] lg:text-[96px]">
        {hero.name}
      </h1>

      <p className="blinking-cursor mt-6 max-w-[60ch] font-mono text-[16.5px] leading-[1.65] text-body-quiet md:text-[18px] lg:text-[20px]">
        {hero.tagline}
      </p>

      <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.14em] text-body-quiet md:mt-12 md:text-[11px]">
        <p>{hero.coordinates}</p>
        <p>{hero.place}</p>
      </div>
    </div>
  </header>
);

export default Hero;
