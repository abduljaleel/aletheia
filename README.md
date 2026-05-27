# Aletheia

> Agents need new infrastructure. We're building it.

Twelve products. One stack. The unconcealment layer for autonomous agents.

Live at **[abduljaleel.xyz/aletheia](https://abduljaleel.xyz/aletheia)**.

---

## The Stack

| Layer | Products |
|-------|----------|
| **Governance** | Agentic Kernel (neurl.sg) · Constraint Engine (flow.at) · Architecture Ledger (aivi.co.uk) |
| **Verification** | Determinist Gateway (finiteinfinite.ca) |
| **Optimization** | Agent Debt Optimizer (aicapital.ee) · Energy-Aware Routing (tesl.on) · Intent-Driven UI (playbookfilms.ie) · Self-Optimizing Micro-SaaS (lessventures.us) |
| **Infrastructure** | Self-Architecting Microservices (dynamic.fi) · Infrastructure Immune System (smile.dk) |
| **Physical & Frontier** | Agentic Simulation (planetpi.ch) · Digital Twin Debugger (robocars.co.nz) |

## Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS v4
- Static export → GitHub Pages
- Deployed at base path `/aletheia`

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # builds /out for static hosting
```

## Deploy

Pushes to `main` build & publish to GitHub Pages via `.github/workflows/deploy.yml`.

## Editing the product list

All product copy lives in [`src/data/products.ts`](src/data/products.ts) — single source of truth.
