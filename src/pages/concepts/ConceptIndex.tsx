import { Link } from "react-router-dom";

const concepts = [
  {
    id: "editorial",
    n: "01",
    name: "Editorial Studio Index",
    note: "Warm paper, oversized identity, disciplined article index. Serif display with monospaced metadata.",
    swatches: ["#f2ece1", "#1f1c19", "#7d4630"],
  },
  {
    id: "systems",
    n: "02",
    name: "Systems Ledger",
    note: "Cool mineral neutrals, one cobalt accent, strict modular grid with timestamps and reference numbers.",
    swatches: ["#f5f7f9", "#1a212b", "#1848c8"],
  },
  {
    id: "architectural",
    n: "03",
    name: "Barragán Field Notes",
    note: "Plaster tones with controlled Mexican pink, ochre, and deep blue planes. Asymmetric composition.",
    swatches: ["#eae2d8", "#cf2a68", "#c98c1a"],
  },
];

const ConceptIndex = () => (
  <main className="min-h-screen bg-[#f4f2ee] px-6 py-16 text-[#171614] md:px-12">
    <div className="mx-auto max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#171614]/55">
        johnmin.xyz — design concepts
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
        Three directions
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#171614]/70">
        Each concept is a complete homepage and projects page. The production
        homepage stays untouched at{" "}
        <Link to="/" className="underline underline-offset-4">
          /
        </Link>
        .
      </p>

      <ul className="mt-12 border-t border-[#171614]/15">
        {concepts.map((c) => (
          <li key={c.id} className="border-b border-[#171614]/15">
            <Link
              to={`/concepts/${c.id}`}
              className="group block py-7 outline-offset-4 transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#171614]"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#171614]/50">
                  {c.n}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-medium">{c.name}</h2>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-[#171614]/65">
                    {c.note}
                  </p>
                </div>
                <div className="hidden gap-1 sm:flex" aria-hidden="true">
                  {c.swatches.map((s) => (
                    <span
                      key={s}
                      className="h-6 w-6"
                      style={{ backgroundColor: s }}
                    />
                  ))}
                </div>
              </div>
            </Link>
            <div className="pb-6">
              <Link
                to={`/concepts/${c.id}/projects`}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#171614]/60 underline underline-offset-4 hover:text-[#171614]"
              >
                Projects page →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default ConceptIndex;
