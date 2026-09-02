// Public site content exposed through the MCP server.
// Keep in sync with the site sections.

export const profile = {
  name: "John Min",
  location: "San Francisco, CA (37.7749° N, 122.4194° W)",
  tagline:
    "A collection of projects, ideas, and explorations at the intersection of design, technology, and culture.",
};

export const background = {
  education:
    "Duke undergrad (economics, math, public policy) → Columbia grad (statistics, ML).",
  experience: [
    "Data science across fintech, healthcare, advertising, politics, media, and web3.",
    "Product and strategy in consumer credit, emerging markets lending, and digital transformation.",
  ],
  dignifi:
    "Co-founded Dignifi — AI-powered reentry support for justice-impacted individuals across housing, health, and employment.",
  currentInterests: [
    "AI systems, fintech, stablecoins, agentic commerce, and the automation of everything that moves.",
    "House music, tennis, writing, and visual art performance.",
  ],
};

export const links = [
  { label: "Substack", url: "https://johnmin.substack.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/johncmin" },
  { label: "Twitter / X", url: "https://x.com/heyjohnmin" },
  { label: "GitHub", url: "https://github.com/john-min" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  url: string;
  group: "Financial systems" | "Music experiments";
  accent: "primary" | "secondary" | "accent";
  note?: string;
};

export const projects: Project[] = [
  {
    title: "StreamEngine",
    description:
      "Stablecoin payout orchestration, treasury operations, and reconciliation for businesses and autonomous agents.",
    tags: ["Fintech", "Operations", "Agents"],
    status: "Sandbox prototype",
    url: "https://stream-engine-pi.vercel.app",
    group: "Financial systems",
    accent: "secondary",
  },
  {
    title: "Wireframe",
    description:
      "A minimal consumer wallet for sending digital dollars across Base and Tempo.",
    tags: ["Stablecoins", "Wallets", "Consumer"],
    status: "Live prototype",
    url: "https://wireframe-stablecoin.vercel.app",
    group: "Financial systems",
    accent: "secondary",
    note: "Opens directly into authentication — a public walkthrough is in progress.",
  },
  {
    title: "Cardiac Beats",
    description: "An EKG-inspired drum sequencer and rhythm visualizer.",
    tags: ["Music", "Interaction"],
    status: "Live",
    url: "https://cardiac-beats.vercel.app",
    group: "Music experiments",
    accent: "primary",
  },
  {
    title: "Synth Matrix",
    description: "An AI guide that matches musical taste with iconic synthesizers.",
    tags: ["AI", "Music"],
    status: "Live",
    url: "https://synth-matrix.vercel.app",
    group: "Music experiments",
    accent: "accent",
  },
  {
    title: "Crate Dig",
    description:
      "Visual music discovery that maps a DJ's library by sound.",
    tags: ["Music", "AI", "Discovery"],
    status: "Live",
    url: "https://cratedig.forbiddenfruitsound.com",
    group: "Music experiments",
    accent: "primary",
  },
];
