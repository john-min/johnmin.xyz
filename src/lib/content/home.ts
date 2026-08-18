// Single source of truth for the homepage copy.
// TODO: replace any placeholder URLs below when resolved.

export const TODO_URL = "#";

export const hero = {
  name: "John Min",
  tagline:
    "A collection of projects, ideas, and explorations at the intersection of design, technology, and culture.",
  coordinates: "37.7749° N, 122.4194° W",
  place: "SAN FRANCISCO",
};

export type WritingRow = {
  date: string;
  dateISO: string;
  title: string;
  dek: string;
  href: string;
};

export const writing: WritingRow[] = [
  {
    date: "JUL 23, 2026",
    dateISO: "2026-07-23",
    title: "Notes from Nairobi",
    dek: "How Nairobi moves money and builds the show",
    href: "https://johnmin.substack.com/p/notes-from-nairobi",
  },
  {
    date: "MAY 08, 2026",
    dateISO: "2026-05-08",
    title: "Humans browse. Agents execute.",
    dek: "Stripe Sessions 2026: the intention economy turns on. 8 learnings, 1 string quartet",
    href: "https://johnmin.substack.com/p/my-stripe-sessions-2026-debrief",
  },
  {
    date: "NOV 13, 2024",
    dateISO: "2024-11-13",
    title: "From coup to co-op",
    dek: "The humble beginnings of Amul and India's dairy cooperative model",
    href: "https://johnmin.substack.com/p/from-coup-to-co-op",
  },
  {
    date: "SEP 12, 2024",
    dateISO: "2024-09-12",
    title: "Milking the future",
    dek: "Is Nepal ready for a dairy Renaissance?",
    href: "https://johnmin.substack.com/p/nepal-milking-the-future",
  },
];

export const substackUrl = "https://johnmin.substack.com";

export type ProjectRow = {
  title: string;
  description: string;
  href: string;
  srSuffix?: string;
};

export const projects: ProjectRow[] = [
  {
    title: "Wireframe",
    description:
      "Minimal consumer wallet for sending USDC across Base and Tempo.",
    href: "https://wireframe-stablecoin.vercel.app/sign-in",
    srSuffix: "opens the live prototype; sign-in required",
  },
  {
    title: "StreamEngine",
    description:
      "Stablecoin payout orchestration, treasury operations, and reconciliation for businesses and autonomous agents.",
    href: "https://stream-engine-pi.vercel.app/",
  },
  {
    title: "Synth Matrix",
    description:
      "Synth recommendations based on your favorite electronic artists.",
    href: "https://synth-matrix.vercel.app/",
  },
  {
    title: "Cardiac Beats",
    description: "EKG-inspired drum sequencer and rhythm visualizer.",
    href: "https://cardiac-beats.vercel.app/",
  },
];

export const aboutContent = {
  invitation: "Open to conversations to exchange ideas and collaborate.",
  paragraphs: [
    "I build products and go-to-market systems across fintech, AI, and emerging technology. My work has spanned consumer credit in the U.S., Asia, and Africa, as well as healthcare, media, politics, web3, and social impact.",
    "I studied economics, math, and public policy at Duke, then statistics and machine learning at Columbia. I co-founded Dignifi, an AI-powered platform helping justice-impacted people navigate housing, healthcare, and employment.",
    "These days, I'm thinking about stablecoins, agentic commerce, and automating everything that moves. Outside work, it's house music, tennis, writing, and visual and performance art.",
    "If any of that sounds interesting, say hello.",
  ],
  photoCaption: "I'm a serious person.",
  photoAlt:
    "John Min in a tuxedo shirt and bow tie at a party, holding a drink.",
};

export const contactLinks = [
  { label: "Substack", href: "https://johnmin.substack.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johncmin" },
  { label: "Twitter / X", href: "https://x.com/heyjohnmin" },
  { label: "GitHub", href: "https://github.com/john-min" },
];

export const navLinks = [
  { label: "WRITING", href: "#writing", id: "writing" as const },
  { label: "PROJECTS", href: "#projects", id: "projects" as const },
  { label: "ABOUT", href: "#about", id: "about" as const },
];

export const footerText = "© 2026 — John Min";
