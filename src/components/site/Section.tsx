import type { ReactNode } from "react";

export type SectionColor = "pink" | "ochre" | "blue";

const plane: Record<SectionColor, string> = {
  pink: "bg-pink",
  ochre: "bg-ochre",
  blue: "bg-blue",
};

const rule: Record<SectionColor, string> = {
  pink: "bg-pink",
  ochre: "bg-ochre",
  blue: "bg-blue",
};

const labelColor: Record<SectionColor, string> = {
  pink: "text-pink-text",
  ochre: "text-ochre-text",
  blue: "text-blue-text",
};

export const SectionHeader = ({
  refNo,
  label,
  color,
}: {
  refNo: string;
  label: string;
  color: SectionColor;
}) => (
  <div className="mb-6">
    <p
      className={`font-display text-[13px] font-light uppercase tracking-[0.14em] md:text-[15px] md:tracking-[0.16em] ${labelColor[color]}`}
    >
      {`REF.${refNo} — ${label}`}
    </p>
    <div className={`mt-2 h-[2px] w-full ${rule[color]}`} />
  </div>
);

/**
 * Page shell for a REF section: fixed left color gutter (desktop/tablet),
 * content inset, generous right margin.
 */
const Section = ({
  id,
  color,
  children,
  className = "",
}: {
  id: string;
  color: SectionColor;
  children: ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`scroll-mt-20 px-5 py-[26px] md:grid md:grid-cols-[80px_1fr] md:gap-x-10 md:px-8 md:py-[52px] lg:grid-cols-[96px_1fr] lg:gap-x-12 lg:px-[72px] ${className}`}
  >
    <div aria-hidden="true" className="hidden md:block">
      <div className={`my-[6px] mb-6 h-[calc(100%-30px)] w-full ${plane[color]}`} />
    </div>
    <div>{children}</div>

  </section>
);

export default Section;
