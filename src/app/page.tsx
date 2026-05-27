import Link from "next/link";
import { LAYERS, PRODUCTS, PRODUCTS_BY_LAYER, type Layer } from "@/data/products";

const LAYER_ORDER: Layer[] = [
  "governance",
  "verification",
  "optimization",
  "infrastructure",
  "physical",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#06070a] text-[#e0e0ec]">
      {/* Ambient gradient orbs */}
      <div
        className="pointer-events-none absolute top-[-200px] left-[20%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,124,255,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[200px] right-[5%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(160,112,224,0.04) 0%, transparent 70%)",
        }}
      />

      <Nav />

      <Hero />

      <Manifesto />

      <Convergence />

      <Stack />

      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="flex items-center gap-3">
        <span
          className="block h-2 w-2 rounded-full bg-[#5e7cff]"
          style={{ animation: "pulse 2.5s ease-in-out infinite" }}
        />
        <span className="font-serif text-2xl font-light tracking-tight">
          Aletheia
        </span>
      </Link>
      <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a70] md:flex">
        <a href="#manifesto" className="hover:text-[#e0e0ec]">
          Manifesto
        </a>
        <a href="#stack" className="hover:text-[#e0e0ec]">
          The Stack
        </a>
        <a href="#products" className="hover:text-[#e0e0ec]">
          Products
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-24 md:pt-24 md:pb-40">
      <div
        className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3a3a50]"
        style={{ animation: "slideUp 0.6s ease both" }}
      >
        <span
          className="block h-1.5 w-1.5 rounded-full bg-[#5e7cff]"
          style={{ animation: "pulse 2.5s ease-in-out infinite" }}
        />
        <span>Volume 01 · April 2026 · Field Notes</span>
      </div>

      <h1
        className="max-w-[920px] font-serif text-[clamp(44px,7vw,96px)] font-light leading-[1.02] tracking-tight"
        style={{ animation: "slideUp 0.7s 0.1s ease both" }}
      >
        Agents need new infrastructure.
        <br />
        <em className="not-italic text-[#5e7cff]">We&rsquo;re building it.</em>
      </h1>

      <p
        className="mt-10 max-w-[560px] text-[15px] leading-[1.7] text-[#7a7a94]"
        style={{ animation: "slideUp 0.7s 0.2s ease both" }}
      >
        Aletheia is twelve products on one stack — governance, verification,
        optimization, infrastructure, and the physical frontier. The
        unconcealment layer for autonomous agents: nothing the agent does can
        be hidden.
      </p>

      <div
        className="mt-12 flex flex-wrap items-center gap-4 font-mono text-[11px]"
        style={{ animation: "slideUp 0.7s 0.3s ease both" }}
      >
        <a
          href="#stack"
          className="inline-flex items-center gap-2 border border-[#c5a572] bg-transparent px-6 py-3 uppercase tracking-[0.15em] text-[#c5a572] transition-colors hover:bg-[#c5a572] hover:text-[#06070a]"
        >
          See the stack
          <span aria-hidden>→</span>
        </a>
        <a
          href="#manifesto"
          className="inline-flex items-center gap-2 px-3 py-3 uppercase tracking-[0.15em] text-[#5a5a70] hover:text-[#e0e0ec]"
        >
          Read the thesis
        </a>
      </div>

      {/* Stats strip */}
      <div className="mt-24 grid max-w-[640px] grid-cols-3 border border-[#1a1a28] bg-[#0a0b10]">
        {[
          { n: "12", l: "Products" },
          { n: "5", l: "Layers" },
          { n: "1", l: "Stack" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`px-6 py-5 ${i < 2 ? "border-r border-[#1a1a28]" : ""}`}
          >
            <div className="font-serif text-3xl font-light leading-none">
              {s.n}
            </div>
            <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#4a4a60]">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative z-10 border-y border-[#141420] bg-[#070810]"
    >
      <div className="mx-auto max-w-4xl px-6 py-28">
        <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c5a572]">
          The Thesis
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.2]">
          The age of autonomous agents is here. The infrastructure isn&rsquo;t.
        </h2>

        <div className="mt-12 space-y-6 text-[15px] leading-[1.85] text-[#9a9ab0]">
          <p>
            Agents already write code, route money, and act on physical
            infrastructure. But the systems they run on were designed for chat
            sessions. There is no process model, no constraint enforcement, no
            causal audit trail, no formal proof of correctness, no cost
            attribution, no energy budget, no immune system.
          </p>
          <p>
            <span className="text-[#e0e0ec]">Aletheia</span>{" "}
            (<em className="font-serif italic">unconcealment</em>) is what
            comes next. Twelve products that compose into one stack. Every
            agent decision is governed before it acts, recorded as it acts,
            verified after it acts, and optimized across every dimension that
            matters — cost, latency, energy, correctness, drift.
          </p>
          <p className="font-serif text-xl italic text-[#c5a572]">
            &ldquo;An honest &lsquo;I can&rsquo;t verify this&rsquo; is infinitely more
            valuable than a confident but wrong &lsquo;verified.&rsquo;&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Convergence() {
  return (
    <section
      id="stack"
      className="relative z-10 mx-auto max-w-6xl px-6 py-28"
    >
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c5a572]">
        The Stack
      </div>
      <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15]">
        Twelve products. Five layers. One system.
      </h2>
      <p className="mt-6 max-w-[520px] text-[14px] leading-[1.7] text-[#7a7a94]">
        Each layer constrains the layer below it. Optimization can&rsquo;t
        bypass verification. Verification can&rsquo;t bypass governance.
        The constraint space is the system&rsquo;s physics — not a policy
        document.
      </p>

      <div className="mt-12 overflow-x-auto">
        <pre
          className="inline-block min-w-full whitespace-pre rounded-lg border border-[#141420] bg-[#0a0b10] p-8 font-mono text-[12px] leading-[2.1] text-[#4a4a60]"
        >
{`  Human intent
        │
        ▼
  ┌─ `}
          <span className="text-[#5e7cff]">GOVERNANCE</span>
{`     Kernel · Constraints · Architecture Ledger
  │
  ▼
  ┌─ `}
          <span className="text-[#a070e0]">VERIFICATION</span>
{`   Determinist Gateway
  │
  ▼
  ┌─ `}
          <span className="text-[#f0a050]">OPTIMIZATION</span>
{`   Agent Debt · Energy Routing · Intent UI · Self-Opt SaaS
  │
  ▼
  ┌─ `}
          <span className="text-[#e06080]">INFRASTRUCTURE</span>
{` Self-Architecting · Immune System
  │
  ▼
  ┌─ `}
          <span className="text-[#40c8d0]">PHYSICAL</span>
{`       Agentic Simulation · Digital Twin Debugger
        │
        ▼
  `}
          <span className="text-[#7a7a94]">
            Human reviews: intent graph + constraint report + verification
            cert
          </span>
        </pre>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Stack() {
  return (
    <section
      id="products"
      className="relative z-10 mx-auto max-w-6xl px-6 pb-32"
    >
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c5a572]">
        The Products
      </div>
      <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15]">
        Every product solves one precise problem.
      </h2>
      <p className="mt-6 max-w-[520px] text-[14px] leading-[1.7] text-[#7a7a94]">
        Twelve domains. Twelve focused products. Each ships independently —
        each composes with the others.
      </p>

      <div className="mt-16 space-y-20">
        {LAYER_ORDER.map((layerKey) => {
          const layer = LAYERS[layerKey];
          const products = PRODUCTS_BY_LAYER[layerKey];
          return (
            <div key={layerKey}>
              {/* Layer header */}
              <div className="mb-6 flex items-baseline gap-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: layer.color }}
                >
                  Layer · {layer.label}
                </span>
                <span className="font-mono text-[10px] text-[#3a3a50]">
                  {products.length} {products.length === 1 ? "product" : "products"}
                </span>
              </div>
              <p className="mb-8 max-w-[480px] font-serif text-xl font-light italic leading-snug text-[#9a9ab0]">
                {layer.description}.
              </p>

              {/* Product cards */}
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-md border border-[#141420] bg-[#0a0b10] p-6 transition-all hover:border-[#2a2a45] hover:bg-[#0d0e15]"
                  >
                    {/* Color accent strip */}
                    <div
                      className="absolute top-0 left-0 h-full w-[3px] opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ background: layer.color }}
                    />

                    {/* Domain label */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4a4a60]">
                        {p.domain}
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-[0.12em]"
                        style={{ color: layer.color }}
                      >
                        Live →
                      </span>
                    </div>

                    {/* Product name */}
                    <h3 className="mb-1 font-serif text-2xl font-normal leading-tight text-[#e0e0ec]">
                      {p.name}
                    </h3>

                    {/* Problem (the precise thing) */}
                    <p className="mb-4 font-mono text-[11px] leading-[1.6] text-[#5a5a70]">
                      &ldquo;{p.problem}&rdquo;
                    </p>

                    {/* One-liner */}
                    <p className="mb-4 text-[13px] leading-[1.6] text-[#9a9ab0]">
                      {p.oneLiner}
                    </p>

                    {/* Insight (smaller, italic) */}
                    <p className="border-t border-[#141420] pt-3 font-serif text-[13px] italic leading-[1.55] text-[#7a7a94]">
                      {p.insight}
                    </p>

                    {/* Signal */}
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#3a3a50]">
                      Signal · {p.signal}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#141420]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="block h-2 w-2 rounded-full bg-[#5e7cff]" />
            <span className="font-serif text-xl font-light">Aletheia</span>
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#3a3a50]">
            Infrastructure for autonomous agents · Melbourne, Australia
          </p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#3a3a50]">
          {PRODUCTS.length} products · Field Notes Volume 01
        </div>
      </div>
    </footer>
  );
}
