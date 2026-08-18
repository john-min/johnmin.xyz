import { useEffect, useRef, useState } from "react";
import { navLinks, contactLinks } from "@/lib/content/home";

const refFor: Record<string, string> = {
  writing: "REF.01",
  projects: "REF.02",
  about: "REF.03",
};

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;
      const items = sheetRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => {
      sheetRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }, 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-8 md:py-[26px] lg:px-[72px]">
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
        >
          <span
            aria-hidden="true"
            className="inline-block h-[10px] w-[10px] rounded-full bg-ink"
          />
          John Min
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-body-quiet transition-colors duration-200 hover:text-ink"
            >
              <span className="relative z-10">{l.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[6px] scale-y-0 bg-ochre/70 transition-transform duration-200 hover:scale-y-100"
              />
            </a>
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          className="flex h-11 min-w-11 items-center justify-end font-mono text-[11px] uppercase tracking-[0.18em] text-body-quiet md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex bg-surface md:hidden"
        >
          <div aria-hidden="true" className="w-[14px] shrink-0 bg-ochre" />
          <div className="flex-1 overflow-y-auto px-5 pb-10">
            <div className="flex items-center justify-between py-3">
              <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                <span
                  aria-hidden="true"
                  className="inline-block h-[10px] w-[10px] rounded-full bg-ink"
                />
                John Min
              </span>
              <button
                type="button"
                onClick={close}
                className="flex h-11 items-center font-mono text-[11px] uppercase tracking-[0.18em] text-body-quiet"
              >
                Close
              </button>
            </div>

            <ul className="mt-6">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="flex min-h-[56px] items-center justify-between border-b border-hairline"
                  >
                    <span className="font-display text-[26px] leading-tight tracking-[-0.035em] text-ink">
                      {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-meta">
                      {refFor[l.id]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-meta">
              Elsewhere
            </p>
            <ul className="mt-3">
              {contactLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-between border-b border-hairline text-[15px] text-body-ink"
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
        </div>
      )}
    </nav>
  );
};

export default SiteNav;
