// ─────────────────────────────────────────────────────────────
// The 12 products of Aletheia. Single source of truth.
// Edit here to update the landing page.
// ─────────────────────────────────────────────────────────────

export type Layer =
  | "governance"
  | "verification"
  | "optimization"
  | "infrastructure"
  | "physical";

export interface Product {
  id: string;          // stable slug
  name: string;        // canonical brand name
  domain: string;      // brand domain (display + future canonical URL)
  legacyDomain: string;// the original venture domain (for git/vercel reference)
  url: string;         // live deployment (current Vercel URL)
  city: string;        // anchor city
  country: string;     // country of the anchor city
  layer: Layer;
  /** ≤ 8 words. The problem it solves, in plain language. */
  problem: string;
  /** ≤ 12 words. What it does. */
  oneLiner: string;
  /** 1 sentence. How it works / what's distinct. */
  insight: string;
  /** Investor signal that validates this exists. */
  signal: string;
}

export const LAYERS: Record<
  Layer,
  { label: string; color: string; bg: string; description: string }
> = {
  governance: {
    label: "Governance",
    color: "#5e7cff",
    bg: "rgba(94,124,255,0.08)",
    description: "Who's in charge when fifty agents run at once",
  },
  verification: {
    label: "Verification",
    color: "#a070e0",
    bg: "rgba(160,112,224,0.08)",
    description: "Proof that what shipped is what was specified",
  },
  optimization: {
    label: "Optimization",
    color: "#f0a050",
    bg: "rgba(240,160,80,0.08)",
    description: "Cost, energy, and self-improvement as first-class signals",
  },
  infrastructure: {
    label: "Infrastructure",
    color: "#e06080",
    bg: "rgba(224,96,128,0.08)",
    description: "Backends that reshape themselves at agent speed",
  },
  physical: {
    label: "Physical & Frontier",
    color: "#40c8d0",
    bg: "rgba(64,200,208,0.08)",
    description: "Where software meets atoms and emergent systems",
  },
};

export const PRODUCTS: Product[] = [
  // ── Governance ─────────────────────────────────────────────
  {
    id: "atlas",
    name: "Atlas",
    domain: "atlas.sg",
    legacyDomain: "neurl.sg",
    url: "https://neurl-alignmentai.vercel.app",
    city: "Singapore",
    country: "Singapore",
    layer: "governance",
    problem: "Fifty agents touching one repo. Who arbitrates?",
    oneLiner: "OS-level process manager for autonomous agents.",
    insight:
      "Agents are processes, not chat sessions. Atlas gives them PIDs, context budgets, file-level locks, and typed inter-agent communication.",
    signal: "a16z: Agent-Native Infrastructure",
  },
  {
    id: "axiom",
    name: "Axiom",
    domain: "axiom.at",
    legacyDomain: "flow.at",
    url: "https://flow-at-alignmentai.vercel.app",
    city: "Vienna",
    country: "Austria",
    layer: "governance",
    problem: "Agents break rules nobody told them existed.",
    oneLiner: "Safety as physics, not policy.",
    insight:
      "Constraints compile to predicates evaluated before the agent acts. The audit trail shows what was prevented, not just what happened.",
    signal: "Ventura: Human-in-the-Loop Infrastructure",
  },
  {
    id: "cairn",
    name: "Cairn",
    domain: "cairn.co.uk",
    legacyDomain: "aivi.co.uk",
    url: "https://aivi-alignmentai.vercel.app",
    city: "London",
    country: "United Kingdom",
    layer: "governance",
    problem: "Why did the AI change that file? Nobody knows.",
    oneLiner: "Causal provenance graph for every agent decision.",
    insight:
      "Every architectural decision is recorded: what changed, which model decided, what constraints were active, what alternatives were considered. Queryable after the fact.",
    signal: "YC: Company Brain · Linux kernel Assisted-by",
  },

  // ── Verification ───────────────────────────────────────────
  {
    id: "lodestar",
    name: "Lodestar",
    domain: "lodestar.ca",
    legacyDomain: "finiteinfinite.ca",
    url: "https://finiteinfinite-alignmentai.vercel.app",
    city: "Toronto",
    country: "Canada",
    layer: "verification",
    problem: "Agent code ships without proof it works.",
    oneLiner: "Formal proofs of correctness for agent outputs.",
    insight:
      "Symbolic logic and type checking verify that agent-generated changes meet declared specifications. When it can't prove, it says 'Unverifiable' — never hallucinates approval.",
    signal: "Aletheia (DeepMind) self-filtering",
  },

  // ── Optimization ───────────────────────────────────────────
  {
    id: "aicapital",
    name: "AI Capital",
    domain: "aicapital.ee",
    legacyDomain: "aicapital.ee",
    url: "https://aicapital-alignmentai.vercel.app",
    city: "Tallinn",
    country: "Estonia",
    layer: "optimization",
    problem: "Your agents burned $4,200 overnight. No one noticed.",
    oneLiner: "Linter for agentic logic that predicts hidden costs.",
    insight:
      "Analyzes task trees before execution to reach goals with minimum expensive calls. Prevents runaway loops at the orchestration layer, not after the bill arrives.",
    signal: "Ventura: Cost Attribution for AI Spend",
  },
  {
    id: "teslon",
    name: "Tesl.on",
    domain: "tesl.on",
    legacyDomain: "tesl.on",
    url: "https://tesl-on-alignmentai.vercel.app",
    city: "Reykjavik",
    country: "Iceland",
    layer: "optimization",
    problem: "AI workloads burn energy blind to where it comes from.",
    oneLiner: "Route agent workloads by energy cost, not just latency.",
    insight:
      "Real-time energy profiling makes energy-per-query a first-class routing signal. Shift fleets to renewable-powered regions during peak solar hours.",
    signal: "MIT EnergAIzer · Benchmark grid optimization",
  },
  {
    id: "quill",
    name: "Quill",
    domain: "quill.ie",
    legacyDomain: "playbookfilms.ie",
    url: "https://playbookfilms-alignmentai.vercel.app",
    city: "Dublin",
    country: "Ireland",
    layer: "optimization",
    problem: "Your IDE shows the same toolbar regardless of task.",
    oneLiner: "Development environment that builds itself for your current task.",
    insight:
      "Synthesizes and renders components in real-time based on immediate intent and compressed project context. Static menus replaced by generated interfaces.",
    signal: "YC Summer 2026: Dynamic Software Interfaces",
  },
  {
    id: "mend",
    name: "Mend",
    domain: "mend.us",
    legacyDomain: "lessventures.us",
    url: "https://lessventures-alignmentai.vercel.app",
    city: "San Francisco",
    country: "United States",
    layer: "optimization",
    problem: "A user complains. A human fixes it. Repeat forever.",
    oneLiner: "A persistent agent that rewrites its own application logic.",
    insight:
      "No fixed codebase. The agent observes the manual workflow, writes its own endpoints, and updates the frontend — all gated by Aletheia's constraint and verification stack.",
    signal: "MIT SEAL · OpenAI Symphony",
  },

  // ── Infrastructure ─────────────────────────────────────────
  {
    id: "aalto",
    name: "Aalto",
    domain: "aalto.fi",
    legacyDomain: "dynamic.fi",
    url: "https://dynamic-fi-alignmentai.vercel.app",
    city: "Helsinki",
    country: "Finland",
    layer: "infrastructure",
    problem: "Traffic shifts. Architecture doesn't.",
    oneLiner: "AI SRE that autonomously refactors its own service topology.",
    insight:
      "Monitors traffic and latency. Splits hot services, merges cold ones, re-shards databases. Every refactor passes the same constraint and verification gates as code.",
    signal: "Cloudflare Agent Cloud",
  },
  {
    id: "salve",
    name: "Salve",
    domain: "salve.dk",
    legacyDomain: "smile.dk",
    url: "https://smile-dk-alignmentai.vercel.app",
    city: "Copenhagen",
    country: "Denmark",
    layer: "infrastructure",
    problem: "A bad commit broke prod. Which commit? Nobody knows.",
    oneLiner: "Self-healing infrastructure via commit-level regression tracing.",
    insight:
      "Traces performance dips to specific commits, initiates rollback and refactor, deploys the fix. Detection, identification, response, memory — biology as an infra pattern.",
    signal: "Fermilab Osprey · Siemens Eigen",
  },

  // ── Physical & Frontier ────────────────────────────────────
  {
    id: "bellwether",
    name: "Bellwether",
    domain: "bellwether.ch",
    legacyDomain: "planetpi.ch",
    url: "https://planetpi-alignmentai.vercel.app",
    city: "Zurich",
    country: "Switzerland",
    layer: "physical",
    problem: "You can't unit-test a market or a city.",
    oneLiner: "Digital twin of complex systems using agent swarms.",
    insight:
      "Thousands of heterogeneous agents with distinct profiles stress-test decisions, pricing models, and policies. Detects phase transitions before they happen.",
    signal: "Anthropic AAR · a16z Physical Observability",
  },
  {
    id: "antipode",
    name: "Antipode",
    domain: "antipode.co.nz",
    legacyDomain: "robocars.co.nz",
    url: "https://robocars-alignmentai.vercel.app",
    city: "Auckland",
    country: "New Zealand",
    layer: "physical",
    problem: "Hardware iteration is weeks. Software is seconds.",
    oneLiner: "Hot-reloading for physical engineering.",
    insight:
      "Real-time AI digital twin for hardware prototypes. Simulates and predicts electrical or thermal failures from live sensor data before changes hit the bench.",
    signal: "Gemini Robotics-ER 1.6",
  },
];

export const PRODUCTS_BY_LAYER: Record<Layer, Product[]> = {
  governance: PRODUCTS.filter((p) => p.layer === "governance"),
  verification: PRODUCTS.filter((p) => p.layer === "verification"),
  optimization: PRODUCTS.filter((p) => p.layer === "optimization"),
  infrastructure: PRODUCTS.filter((p) => p.layer === "infrastructure"),
  physical: PRODUCTS.filter((p) => p.layer === "physical"),
};
