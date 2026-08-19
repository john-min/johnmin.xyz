// Shared content for the site and all design concepts.
// Single source of truth — concepts differ only in presentation.

import streamengine from "@/assets/projects/streamengine.jpg";
import wireframe from "@/assets/projects/wireframe.jpg";
import cardiac from "@/assets/projects/cardiac.jpg";
import synth from "@/assets/projects/synth.jpg";

export const profile = {
  name: "John Min",
  location: "San Francisco",
  intro:
    "product builder, GTM operator, and data scientist focused on fintech, AI, and emerging technology. my work has also spanned healthcare, media, politics, and consumer credit. based in San Francisco.",
};

export type Essay = {
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  url: string;
};

export const essays: Essay[] = [
  {
    title: "Notes from Nairobi",
    subtitle: "How Nairobi moves money and builds the show",
    date: "July 23, 2026",
    dateISO: "2026-07-23",
    url: "https://johnmin.substack.com/p/notes-from-nairobi",
  },
  {
    title: "Humans browse. Agents execute.",
    subtitle:
      "Stripe Sessions 2026: the intention economy turns on. 8 learnings, 1 string quartet",
    date: "May 8, 2026",
    dateISO: "2026-05-08",
    url: "https://johnmin.substack.com/p/my-stripe-sessions-2026-debrief",
  },
  {
    title: "From coup to co-op",
    subtitle: "The humble beginnings of Amul and India's dairy cooperative model",
    date: "November 13, 2024",
    dateISO: "2024-11-13",
    url: "https://johnmin.substack.com/p/from-coup-to-co-op",
  },
  {
    title: "Milking the future",
    subtitle: "Is Nepal ready for a dairy Renaissance?",
    date: "September 12, 2024",
    dateISO: "2024-09-12",
    url: "https://johnmin.substack.com/p/nepal-milking-the-future",
  },
];

export const substackUrl = "https://johnmin.substack.com";

export type ProjectGroup = "Financial systems" | "Music experiments";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  url: string;
  group: ProjectGroup;
  image: string;
  imageAlt: string;
};

export const projectGroups: ProjectGroup[] = [
  "Financial systems",
  "Music experiments",
];

export const projectItems: ProjectItem[] = [
  {
    title: "StreamEngine",
    description:
      "Stablecoin payout orchestration, treasury operations, and reconciliation for businesses and autonomous agents.",
    tags: ["FINTECH", "OPERATIONS", "AGENTS"],
    status: "SANDBOX PROTOTYPE",
    url: "https://stream-engine-pi.vercel.app/",
    group: "Financial systems",
    image: streamengine,
    imageAlt: "StreamEngine stablecoin payout dashboard interface",
  },
  {
    title: "Wireframe",
    description:
      "A minimal consumer wallet for sending digital dollars across Base and Tempo.",
    tags: ["STABLECOINS", "WALLETS", "CONSUMER"],
    status: "LIVE PROTOTYPE",
    url: "https://wireframe-stablecoin.vercel.app/sign-in",
    group: "Financial systems",
    image: wireframe,
    imageAlt: "Wireframe consumer stablecoin wallet sign-in screen",
  },
  {
    title: "Cardiac Beats",
    description: "An EKG-inspired drum sequencer and rhythm visualizer.",
    tags: ["MUSIC", "INTERACTION"],
    status: "LIVE",
    url: "https://cardiac-beats.vercel.app/",
    group: "Music experiments",
    image: cardiac,
    imageAlt: "Cardiac Beats EKG-inspired drum sequencer interface",
  },
  {
    title: "Synth Matrix",
    description:
      "An AI guide that matches musical taste with iconic synthesizers.",
    tags: ["AI", "MUSIC"],
    status: "LIVE",
    url: "https://synth-matrix.vercel.app/",
    group: "Music experiments",
    image: synth,
    imageAlt: "Synth Matrix AI synthesizer recommendation interface",
  },
];

export const projectsPage = {
  heading: "Projects & experiments",
  subtitle:
    "Products built around programmable money, AI, music, and interaction.",
};

export const about = {
  lines: [
    "Duke undergrad in economics, math, and public policy; Columbia grad in statistics and machine learning.",
    "Co-founded Dignifi — AI-powered reentry support for justice-impacted individuals across housing, health, and employment.",
    "During the day, I'm exploring emerging technologies that are automating our economy such as stablecoins and agentic / AI commerce. On nights and weekends, I'm jamming out to house music, playing tennis, and writing about my musings.",
  ],
  contactNote: "Open to conversations — ideas, collaborations, or both.",
};

export const links = [
  { label: "Substack", url: "https://johnmin.substack.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/johncmin" },
  { label: "X", url: "https://x.com/heyjohnmin" },
  { label: "GitHub", url: "https://github.com/john-min" },
];

export const groupedProjects = projectGroups.map((group) => ({
  group,
  items: projectItems.filter((p) => p.group === group),
}));
