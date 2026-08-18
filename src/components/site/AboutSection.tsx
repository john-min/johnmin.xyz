import Section, { SectionHeader } from "./Section";
import { aboutContent, contactLinks } from "@/lib/content/home";
import portraitAsset from "@/assets/about-portrait.jpg.asset.json";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const portraitSrc: string | null = portraitAsset.url;

const Portrait = () => (
  <figure className="mx-auto w-full max-w-[420px] lg:max-w-[380px]">
    <div className="aspect-[4/5] w-full overflow-hidden border border-line-border bg-matte">
      {portraitSrc && (
        <img
          src={portraitSrc}
          alt={aboutContent.photoAlt}
          loading="lazy"
          decoding="async"
          width={760}
          height={950}
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
      )}
    </div>
    <figcaption className="mt-3 text-center font-mono text-[11px] tracking-[0.04em] text-meta md:text-[11.5px]">
      {aboutContent.photoCaption}
    </figcaption>
  </figure>
);

const AboutSection = () => (
  <Section id="about" color="blue">
    <SectionHeader refNo="03" label="About" color="blue" />

    <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-14">
      <div>
        <p className="max-w-[24ch] font-display text-[21px] leading-[1.25] tracking-[-0.035em] text-ink md:text-[26px]">
          {aboutContent.invitation}
        </p>

        <div className="mt-7 space-y-5">
          {aboutContent.paragraphs.map((p, i) => (
            <div key={p}>
              <p className="max-w-[60ch] text-[15px] leading-[1.55] text-body-ink md:text-[16px] md:leading-[1.6]">
                {p}
              </p>
              {i === 0 && (
                <div className="mt-7 lg:hidden">
                  <Portrait />
                </div>
              )}
            </div>
          ))}
        </div>

        <ul className="mt-9 md:grid md:grid-cols-2 md:gap-x-10 lg:block">
          {contactLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...ext}
                className="flex min-h-[44px] items-center justify-between border-b border-hairline text-[17px] text-body-ink transition-colors duration-200 hover:text-ink md:text-[15px]"
              >
                {l.label}
                <span aria-hidden="true" className="text-meta">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <Portrait />
      </div>
    </div>
  </Section>
);

export default AboutSection;
