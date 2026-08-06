---
Authority: Supporting Knowledge
Purpose: Maps client goals to aesthetic directions.
Consumers: design-exploration-mode.md
Dependencies: ui-aesthetic-taxonomy.md
Extension Points: Add new goal mappings for different domains.
---

# UI Design Decision Tree Reference

This reference maps abstract client briefs and project goals directly to their optimal UI aesthetic directions, typography pairings, color harmonies, and component layouts.

---

## Decision Matrix

```
Creative Goal / Product Brief
├── 1. Premium Prestige & Wealth ─────────────► Path A: Barely-There Minimal + Editorial Typography
├── 2. High Energy, Startup & Disruption ─────► Path B: Swiss Punk + Brutalist High-Contrast
├── 3. Data-Rich Technical & Infrastructure ──► Path C: Dashboard Dense + Monospaced Tech
└── 4. Modern Consumer SaaS & Accessible ─────► Rotate among: Neutral-Dominant + Single Accent, Bento Grid Modular (non-glass variant), Swiss Punk Lite, Barely-There Minimal.
```

---

## 1. Goal: Premium Prestige & Wealth

* **Primary Visual Goal:** Evoke status, quiet elegance, institutional trust, and high monetary value (e.g., private banking, luxury commerce, boutique agencies).
* **Optimal Aesthetic:** [Barely-There Minimal](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#barely-there-minimal)
* *Note: See the aesthetic taxonomy for exact border tokens, color palettes, and shadow settings.*

---

## 2. Goal: High Energy, Startup & Disruption

* **Primary Visual Goal:** Project momentum, bold confidence, disruption, and fast growth (e.g., AI startups, creative tools, expressive marketing sites).
* **Optimal Aesthetic:** [Swiss Punk](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#swiss-punk)
* *Note: See the aesthetic taxonomy for exact bold typography, border widths, and hard drop shadow settings.*

---

## 3. Goal: Data-Rich Technical & Infrastructure

* **Primary Visual Goal:** Signal advanced intelligence, clinical telemetry, information density, and absolute reliability (e.g., DevOps dashboards, trading terminals, cloud infrastructure).
* **Optimal Aesthetic:** [Dashboard Dense](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#dashboard-dense)
* *Note: See the aesthetic taxonomy for exact tabular spacing, typography, and density metrics.*

---

## 4. Goal: Modern Consumer SaaS & Accessible

* **Primary Visual Goal:** Feel warm, intuitive, highly polished, and effortlessly capable (e.g., consumer fintech, productivity apps, wellness platforms).
* **Optimal Aesthetic:** Rotate among: [Neutral-Dominant + Single Accent](file:///d:/agent-skills/skills/ui-app-design/references/color-theory-and-psychology.md#neutral-dominant--single-brand-accent), [Bento Grid Modular](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#bento-grid-modular) (non-glass variant), [Swiss Punk](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#swiss-punk) Lite, [Barely-There Minimal](file:///d:/agent-skills/skills/ui-app-design/references/ui-aesthetic-taxonomy.md#barely-there-minimal). Glassmorphism remains available but must be a deliberate choice justified against the brief, not the default landed on by elimination. Do not select the same option for consecutive unrelated requests without a brief-specific reason. The goal is variance, not a new monoculture.
* *Note: See the aesthetic taxonomy for bento grid layouts, border radii, and safe blur applications.*

---

## 5. Brief-to-Design-System Map & System Honesty Rules

When a brief calls for a recognized enterprise platform or regulatory interface, reach for the official npm package. Do NOT hand-roll CSS for official design systems.

| Brief Profile / Target Domain | Official Package | Primary Packages |
| :--- | :--- | :--- |
| **Microsoft / Enterprise SaaS** | Fluent UI | `npm i @fluentui/react-components` |
| **Google-ish UI / Material Product** | Material 3 Web | `npm i @material/web` |
| **IBM-Style Enterprise Analytics** | Carbon Design System | `npm i @carbon/react @carbon/styles` |
| **Shopify Application Surfaces** | Polaris Web Components | `polaris.js` / `@shopify/polaris` |
| **Atlassian / Developer Tooling** | Atlassian Atlaskit | `@atlaskit/tokens @atlaskit/button` |
| **GitHub Community / Marketing** | Primer CSS / Brand | `@primer/css` or `@primer/react-brand` |
| **UK Public-Sector Service** | GOV.UK Frontend | `npm i govuk-frontend` |
| **US Public-Sector / Trust-First** | USWDS | `npm i uswds` |
| **Accessible React Foundation** | Radix Themes / Primitives | `npm i @radix-ui/themes` |
| **Customized Modern SaaS** | shadcn/ui | `npx shadcn@latest init` |
| **Tailwind v4 Default Build** | Tailwind v4 Utilities | `@tailwindcss/postcss` |

### System Honesty & Mixing Constraint
- **One System Per Project:** Never mix Fluent React with Carbon or shadcn/ui with Material 3 in the same component tree.
- **Aesthetic vs. System Distinction:** Glassmorphism, Bento, Brutalism, Editorial, and Dark Tech are aesthetic directions without a single official package. Build them using native CSS + Tailwind v4.

---

## 6. Apple Liquid Glass Web Approximation Skeleton

Official Apple Liquid Glass is documented exclusively for native Apple platforms (HIG, SwiftUI Material). There is no official `liquid-glass.css` for web platforms. The safer web approximation below utilizes `backdrop-filter`, layered borders, highlight overlays, and a mandatory `prefers-reduced-transparency` fallback.

```css
.liquid-glass-web-approx {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  -webkit-backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.48),
    inset 0 -1px 0 rgba(255, 255, 255, 0.12),
    0 18px 60px rgba(0, 0, 0, 0.18);
}

.liquid-glass-web-approx::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.55), transparent 34%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 42%, rgba(255, 255, 255, 0.14));
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .liquid-glass-web-approx {
    border-color: rgba(255, 255, 255, 0.18);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)),
      rgba(15, 23, 42, 0.42);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 18px 60px rgba(0, 0, 0, 0.42);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .liquid-glass-web-approx {
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```
