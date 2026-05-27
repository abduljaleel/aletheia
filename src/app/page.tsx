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
        aria-hidden
        className="pointer-events-none absolute top-[-200px] left-[20%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,124,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[200px] right-[5%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(160,112,224,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[900px] left-[5%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(64,200,208,0.04) 0%, transparent 70%)",
        }}
      />

      <Nav />
      <Hero />
      <CityStrip />
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
      <a href="#top" className="flex items-center gap-3">
        <span
          className="block h-2 w-2 rounded-full bg-[#5e7cff]"
          style={{ animation: "pulse 2.5s ease-in-out infinite" }}
        />
        <span className="font-serif text-2xl font-light tracking-tight">
          Aletheia
        </span>
      </a>
      <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a70] md:flex">
        <a href="#manifesto" className="transition-colors hover:text-[#e0e0ec]">
          Manifesto
        </a>
        <a href="#stack" className="transition-colors hover:text-[#e0e0ec]">
          Stack
        </a>
        <a href="#products" className="transition-colors hover:text-[#e0e0ec]">
          Products
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 mx-auto max-w-6xl px-6 pt-8 pb-20 md:pt-20 md:pb-32"
    >
      <div
        className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#3a3a50]"
        style={{ animation: "slideUp 0.6s ease both" }}
      >
        <span
          className="block h-1.5 w-1.5 rounded-full bg-[#5e7cff]"
          style={{ animation: "pulse 2.5s ease-in-out infinite" }}
        />
        <span>Volume 01 · Field Notes · April 2026</span>
      </div>

      <h1
        className="max-w-[920px] font-serif text-[clamp(44px,7vw,98px)] font-light leading-[1.02] tracking-tight"
        style={{ animation: "slideUp 0.7s 0.1s ease both" }}
      >
        Agents need new infrastructure.
        <br />
        <em className="not-italic text-[#5e7cff]">We&rsquo;re building it.</em>
      </h1>

      <p
        className="mt-10 max-w-[560px] text-[15px] leading-[1.7] text-[#9a9ab0]"
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
          className="inline-flex items-center gap-2 px-3 py-3 uppercase tracking-[0.15em] text-[#5a5a70] transition-colors hover:text-[#e0e0ec]"
        >
          Read the thesis
        </a>
      </div>

      {/* Stats strip */}
      <div className="mt-20 grid max-w-[680px] grid-cols-4 border border-[#1a1a28] bg-[#0a0b10]">
        {[
          { n: "12", l: "Products" },
          { n: "12", l: "Cities" },
          { n: "5", l: "Layers" },
          { n: "1", l: "Stack" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`px-5 py-5 ${i < 3 ? "border-r border-[#1a1a28]" : ""}`}
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
// Atlas of cities — horizontal scroll-aware strip showing all 12
function CityStrip() {
  return (
    <section className="relative z-10 border-y border-[#141420] bg-[#080910]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#4a4a60]">
          {PRODUCTS.map((p, i) => (
            <span key={p.id} className="flex items-center gap-2">
              <span
                className="block h-1 w-1 rounded-full"
                style={{ background: LAYERS[p.layer].color }}
              />
              <span>{p.city}</span>
              {i < PRODUCTS.length - 1 && (
                <span className="ml-3 text-[#252535]" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative z-10 border-b border-[#141420]"
    >
      <div className="mx-auto max-w-4xl px-6 py-28">
        <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c5a572]">
          The Thesis
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-light leading-[1.2]">
          The age of autonomous agents is here.
          <br />
          The infrastructure isn&rsquo;t.
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
            <span className="font-serif italic text-[#7a7a94]">
              (unconcealment)
            </span>{" "}
            is what comes next. Twelve products that compose into one stack.
            Every agent decision is governed before it acts, recorded as it
            acts, verified after it acts, and optimized across every dimension
            that matters &mdash; cost, latency, energy, correctness, drift.
          </p>
          <blockquote className="border-l-2 border-[#c5a572] pl-6 font-serif text-xl italic leading-relaxed text-[#c5a572]">
            &ldquo;An honest &lsquo;I can&rsquo;t verify this&rsquo; is
            infinitely more valuable than a confident but wrong
            &lsquo;verified.&rsquo;&rdquo;
          </blockquote>
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
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c5a572]">
        The Stack
      </div>
      <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-light leading-[1.15]">
        Twelve products. Five layers. One system.
      </h2>
      <p className="mt-6 max-w-[560px] text-[14px] leading-[1.7] text-[#9a9ab0]">
        Each layer constrains the layer below it. Optimization can&rsquo;t
        bypass verification. Verification can&rsquo;t bypass governance. The
        constraint space is the system&rsquo;s physics &mdash; not a policy
        document.
      </p>

      {/* Visual layer diagram */}
      <div className="mt-14 space-y-3">
        {LAYER_ORDER.map((layerKey, idx) => {
          const layer = LAYERS[layerKey];
          const products = PRODUCTS_BY_LAYER[layerKey];
          return (
            <div key={layerKey} className="relative">
              {/* Connector arrow between layers */}
              {idx < LAYER_ORDER.length - 1 && (
                <div
                  className="absolute left-6 top-full z-0 flex h-3 items-center justify-start font-mono text-[12px] text-[#252535]"
                  aria-hidden
                >
                  ↓
                </div>
              )}

              <div
                className="flex flex-col gap-3 rounded border border-[#141420] bg-[#0a0b10] p-5 md:flex-row md:items-center"
                style={{
                  borderLeftWidth: 3,
                  borderLeftColor: layer.color,
                }}
              >
                <div className="md:w-48 md:shrink-0">
                  <div
                    className="font-mono text-[9px] uppercase tracking-[0.2em]"
                    style={{ color: layer.color }}
                  >
                    Layer · {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-serif text-xl font-light text-[#e0e0ec]">
                    {layer.label}
                  </div>
                </div>
                <div className="md:flex-1">
                  <p className="font-serif text-base italic text-[#9a9ab0]">
                    {layer.description}.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#5a5a70]">
                    {products.map((p, i) => (
                      <span key={p.id}>
                        {p.name}
                        {i < products.length - 1 && (
                          <span className="ml-3 text-[#252535]">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Stack() {
  return (
    <section
      id="products"
      className="relative z-10 border-t border-[#141420] bg-[#070810]"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c5a572]">
          The Products
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-light leading-[1.15]">
          Every product solves one precise problem.
        </h2>
        <p className="mt-6 max-w-[560px] text-[14px] leading-[1.7] text-[#9a9ab0]">
          Twelve cities. Twelve focused products. Each ships independently
          &mdash; each composes with the others.
        </p>

        <div className="mt-16 space-y-20">
          {LAYER_ORDER.map((layerKey) => {
            const layer = LAYERS[layerKey];
            const products = PRODUCTS_BY_LAYER[layerKey];
            return (
              <div key={layerKey}>
                {/* Layer header */}
                <div className="mb-8 flex items-baseline gap-4 border-b border-[#141420] pb-3">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: layer.color }}
                  >
                    Layer · {layer.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#3a3a50]">
                    {products.length} {products.length === 1 ? "product" : "products"}
                  </span>
                </div>

                {/* Product cards */}
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function ProductCard({ product: p }: { product: typeof PRODUCTS[0] }) {
  const layer = LAYERS[p.layer];

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded border border-[#141420] bg-[#0a0b10] p-6 transition-all hover:border-[#2a2a45] hover:bg-[#0d0e15]"
    >
      {/* Color accent strip */}
      <div
        className="absolute top-0 left-0 h-full w-[3px] opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: layer.color }}
      />

      {/* City + Domain row */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#5a5a70]">
          <span
            className="block h-1 w-1 rounded-full"
            style={{ background: layer.color }}
          />
          <span>{p.city}</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a4a60]">
          {p.domain}
        </span>
      </div>

      {/* Product name */}
      <h3 className="mb-2 font-serif text-3xl font-normal leading-none text-[#e0e0ec]">
        {p.name}
      </h3>

      {/* Problem (the precise thing in quotes) */}
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

      {/* Signal + visit */}
      <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em]">
        <span className="text-[#3a3a50]">Signal · {p.signal}</span>
        <span
          className="opacity-0 transition-opacity group-hover:opacity-100"
          style={{ color: layer.color }}
        >
          Visit →
        </span>
      </div>
    </a>
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
            Infrastructure for autonomous agents · Field Notes Volume 01
          </p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#3a3a50]">
          {PRODUCTS.length} products · {PRODUCTS.length} cities · 1 stack
        </div>
      </div>
    </footer>
  );
}
