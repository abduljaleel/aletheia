import { LAYERS, PRODUCTS, PRODUCTS_BY_LAYER, type Layer, type Product } from "@/data/products";

const LAYER_ORDER: Layer[] = [
  "governance",
  "verification",
  "optimization",
  "infrastructure",
  "physical",
];

// Equirectangular projection: world coords → SVG 1000×500
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#06070a] text-[#e0e0ec]">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-200px] left-[20%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,124,255,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[400px] right-[5%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(160,112,224,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[1400px] left-[5%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(64,200,208,0.05) 0%, transparent 70%)",
        }}
      />

      <Nav />
      <Hero />
      <Atlas />
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
        <a href="#atlas" className="transition-colors hover:text-[#e0e0ec]">
          Atlas
        </a>
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
        <span className="text-[#252535]">·</span>
        <span>{PRODUCTS.length} cities · {PRODUCTS.length} products</span>
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
        Aletheia is twelve products on one stack &mdash; governance,
        verification, optimization, infrastructure, and the physical frontier.
        The unconcealment layer for autonomous agents: nothing the agent does
        can be hidden.
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
          href="#atlas"
          className="inline-flex items-center gap-2 px-3 py-3 uppercase tracking-[0.15em] text-[#5a5a70] transition-colors hover:text-[#e0e0ec]"
        >
          View the atlas
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// THE ATLAS — world map with city pins + city register
function Atlas() {
  return (
    <section
      id="atlas"
      className="relative z-10 border-y border-[#141420] bg-[#080910]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c5a572]">
          The Atlas
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-light leading-[1.15]">
          Twelve cities. One coordinated stack.
        </h2>
        <p className="mt-6 max-w-[560px] text-[14px] leading-[1.7] text-[#9a9ab0]">
          Each product is anchored to a city &mdash; chosen for cultural fit,
          time-zone coverage, and the philosophical lineage that gives the
          product its soul.
        </p>

        {/* World map with pins */}
        <div className="relative mt-12 overflow-hidden rounded border border-[#141420] bg-[#0a0b10] p-4">
          <WorldMap />
        </div>

        {/* Cities register — sortable, scannable */}
        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <CityCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldMap() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Subtle lat/lng grid */}
        <g opacity="0.15">
          {/* Equator */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#3a3a50" strokeWidth="0.5" />
          {/* Tropics */}
          <line x1="0" y1="186" x2="1000" y2="186" stroke="#252535" strokeWidth="0.3" strokeDasharray="2 4" />
          <line x1="0" y1="314" x2="1000" y2="314" stroke="#252535" strokeWidth="0.3" strokeDasharray="2 4" />
          {/* Prime meridian */}
          <line x1="500" y1="0" x2="500" y2="500" stroke="#3a3a50" strokeWidth="0.5" />
          {/* Other meridians */}
          {[125, 250, 375, 625, 750, 875].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#252535" strokeWidth="0.3" strokeDasharray="2 4" />
          ))}
          {/* Other parallels */}
          {[63, 125, 375, 438].map((y) => (
            <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#252535" strokeWidth="0.3" strokeDasharray="2 4" />
          ))}
        </g>

        {/* Continent silhouettes — minimal hint, just shaded regions */}
        <g opacity="0.04" fill="#5e7cff">
          {/* North America hint */}
          <ellipse cx="240" cy="160" rx="120" ry="80" />
          {/* South America hint */}
          <ellipse cx="320" cy="340" rx="55" ry="90" />
          {/* Europe + Africa hint */}
          <ellipse cx="510" cy="200" rx="60" ry="60" />
          <ellipse cx="540" cy="320" rx="80" ry="100" />
          {/* Asia hint */}
          <ellipse cx="700" cy="190" rx="160" ry="90" />
          {/* Australia hint */}
          <ellipse cx="830" cy="370" rx="60" ry="40" />
        </g>

        {/* Connection lines between cities (faint, suggesting the stack) */}
        <g opacity="0.12" stroke="#5e7cff" strokeWidth="0.5" fill="none">
          {PRODUCTS.map((p, i) => {
            if (i === 0) return null;
            const prev = PRODUCTS[i - 1];
            const from = project(prev.lat, prev.lng);
            const to = project(p.lat, p.lng);
            return (
              <line
                key={p.id}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </g>

        {/* City pins */}
        {PRODUCTS.map((p, i) => {
          const { x, y } = project(p.lat, p.lng);
          const color = LAYERS[p.layer].color;
          const delay = `${(i * 0.15) % 2.5}s`;
          return (
            <g key={p.id}>
              {/* Outer halo */}
              <circle
                cx={x}
                cy={y}
                r="14"
                fill={color}
                opacity="0.08"
                style={{ animation: `pulse 2.8s ease-in-out ${delay} infinite` }}
              />
              {/* Inner dot */}
              <circle cx={x} cy={y} r="3.5" fill={color} />
              {/* Hairline center */}
              <circle cx={x} cy={y} r="1" fill="#ffffff" opacity="0.9" />
              {/* Label */}
              <text
                x={x + 10}
                y={y - 6}
                fill="#e0e0ec"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                opacity="0.7"
              >
                {p.name}
              </text>
              <text
                x={x + 10}
                y={y + 5}
                fill="#5a5a70"
                fontSize="8"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.5"
              >
                {p.city.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function CityCard({ product: p }: { product: Product }) {
  const layer = LAYERS[p.layer];
  const latLng = `${p.lat >= 0 ? "+" : ""}${p.lat.toFixed(2)}° ${
    p.lng >= 0 ? "+" : ""
  }${p.lng.toFixed(2)}°`;

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded border border-[#141420] bg-[#0a0b10] p-4 transition-colors hover:border-[#2a2a45] hover:bg-[#0d0e15]"
    >
      {/* Flag */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded">
        {/* CSS fallback stripes (visible only if emoji fails) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              p.flagColors.length === 2
                ? `linear-gradient(180deg, ${p.flagColors[0]} 50%, ${p.flagColors[1]} 50%)`
                : `linear-gradient(180deg, ${p.flagColors[0]} 33%, ${p.flagColors[1]} 33% 66%, ${p.flagColors[2]} 66%)`,
            opacity: 0.25,
          }}
        />
        <span className="relative text-2xl" style={{ lineHeight: 1 }}>
          {p.flag}
        </span>
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[9px] uppercase tracking-[0.15em]"
            style={{ color: layer.color }}
          >
            {p.city}
          </span>
          <span className="font-mono text-[9px] text-[#3a3a50]">·</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#4a4a60]">
            {p.country}
          </span>
        </div>
        <div className="font-serif text-xl font-normal leading-tight text-[#e0e0ec]">
          {p.name}
        </div>
        <div className="mt-0.5 font-mono text-[9px] tracking-wider text-[#3a3a50]">
          {latLng} · {p.domain}
        </div>
      </div>

      {/* Layer dot */}
      <div className="flex shrink-0 flex-col items-end gap-1">
        <span
          className="block h-1.5 w-1.5 rounded-full"
          style={{ background: layer.color }}
        />
        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#3a3a50]">
          {layer.label.split(" ")[0]}
        </span>
      </div>
    </a>
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

      <div className="mt-14 space-y-3">
        {LAYER_ORDER.map((layerKey, idx) => {
          const layer = LAYERS[layerKey];
          const products = PRODUCTS_BY_LAYER[layerKey];
          return (
            <div key={layerKey} className="relative">
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
                      <span key={p.id} className="inline-flex items-center gap-1.5">
                        <span className="text-base leading-none">{p.flag}</span>
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

function ProductCard({ product: p }: { product: Product }) {
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

      {/* Flag + Domain row */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{p.flag}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5a5a70]">
            {p.city}
          </span>
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
        <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#3a3a50]">
          {PRODUCTS.map((p) => (
            <span key={p.id} title={`${p.name} · ${p.city}`}>
              {p.flag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
