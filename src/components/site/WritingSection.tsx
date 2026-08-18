import Section, { SectionHeader } from "./Section";
import { substackUrl, writing } from "@/lib/content/home";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const WritingSection = () => (
  <Section id="writing" color="pink">
    <SectionHeader refNo="01" label="Writing" color="pink" />

    <ul>
      {writing.map((row) => (
        <li key={row.title}>
          <a
            href={row.href}
            {...ext}
            className="jm-row group relative block border-b border-hairline py-[14px] pl-[14px] transition-colors duration-200 hover:bg-surface-alt md:grid md:grid-cols-[148px_1fr_26px] md:items-baseline md:gap-7 md:py-[17px] md:pl-0"
          >
            <span
              aria-hidden="true"
              className="jm-bar absolute bottom-[14px] left-0 top-[14px] w-[6px] bg-pink md:bottom-[18px] md:left-[-20px] md:top-[18px]"
            />
            <time
              dateTime={row.dateISO}
              className="font-mono text-[10px] uppercase tracking-[0.10em] text-meta md:text-[10.5px]"
            >
              {row.date}
            </time>
            <div className="mt-1 md:mt-0">
              <h3 className="font-display text-[22px] font-medium leading-[1.15] tracking-[-0.035em] text-title-rest transition-colors duration-200 group-hover:text-ink md:text-[23px]">
                {row.title}
                <span aria-hidden="true" className="ml-2 text-meta md:hidden">
                  ↗
                </span>
              </h3>
              <p className="mt-1.5 max-w-[60ch] text-[14px] leading-[1.55] text-body-quiet md:text-[15px]">
                {row.dek}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden text-meta md:block md:justify-self-end"
            >
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>

    <a
      href={substackUrl}
      {...ext}
      className="mt-6 inline-block border-b border-hairline pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-body-quiet transition-colors duration-200 hover:text-ink"
    >
      All writing on Substack ↗
    </a>
  </Section>
);

export default WritingSection;
