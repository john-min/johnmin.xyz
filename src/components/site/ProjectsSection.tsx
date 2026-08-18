import Section, { SectionHeader } from "./Section";
import { projects } from "@/lib/content/home";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const ProjectsSection = () => (
  <Section id="projects" color="ochre" className="bg-surface-alt md:bg-transparent">
    <SectionHeader refNo="02" label="Projects" color="ochre" />

    <ul>
      {projects.map((p) => (
        <li key={p.title}>
          <a
            href={p.href}
            {...ext}
            className="jm-row group relative block border-b border-hairline py-[14px] pl-[14px] transition-colors duration-200 md:grid md:grid-cols-[148px_1fr_26px] md:items-baseline md:gap-7 md:py-[17px] md:pl-0 md:hover:bg-surface-alt"
          >
            <span
              aria-hidden="true"
              className="jm-bar absolute bottom-[18px] left-[-20px] top-[18px] hidden w-[6px] bg-ochre md:block"
            />
            <time
              dateTime={p.dateISO}
              className="font-mono text-[10px] uppercase tracking-[0.10em] text-meta md:text-[10.5px]"
            >
              {p.date}
            </time>
            <div className="mt-1 md:mt-0">
              <h3 className="font-display text-[21px] font-light leading-[1.2] tracking-[-0.035em] text-ink">
                {p.title}
                {p.srSuffix && <span className="sr-only"> — {p.srSuffix}</span>}
                <span aria-hidden="true" className="ml-2 font-mono text-[10px] text-ochre md:hidden">
                  ↗
                </span>
              </h3>
              <p className="mt-1.5 max-w-[60ch] text-[14.5px] leading-[1.5] text-body-quiet md:text-[15px] md:leading-[1.55]">
                {p.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden font-mono text-[10px] text-ochre md:block md:justify-self-end"
            >
              ↗
            </span>
          </a>

        </li>
      ))}
    </ul>
  </Section>
);

export default ProjectsSection;
