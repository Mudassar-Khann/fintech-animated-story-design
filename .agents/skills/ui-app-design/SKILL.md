---
name: ui-app-design
description: "Master skill for coding agents to orchestrate and build web/mobile application user interfaces (UIs), design systems, component state machines, app vibes, design exploration, and reverse-engineering. Use when creating coded UI design specifications, layout grids, spacing scales, responsive architectures, button state mechanics, and conversion triggers in HTML/React/Tailwind."
---

# UI App Design (Coding Agent Orchestration & Staff Frontend Architecture)

This skill provides comprehensive procedural knowledge, design tokens, responsive grid systems, conversion triggers, and strategic orchestration pipelines for coding agents to build elite-tier web and mobile application user interfaces.

*For rules governing how this skill itself should evolve, see `architecture-principles.md`.*

---

## Core Orchestration Workflows

```
                                UI APP DESIGN ORCHESTRATION
                                              │
      ┌───────────────────────────────────────┼───────────────────────────────────────┐
      ▼                                       ▼                                       ▼
[ 1. DESIGN DECISION ]                [ 5. REVERSE-ENGINEER ]               [ 6. PROJECT MEMORY ]
  • Business/User Goals                 • Scope Assessment                    • External State
  • UX/Engineering Goals                • Lite vs Full Report                 • Identity & Decisions
      │                                 • Dynamic Multi-Agent Prompts         • Architecture
      ▼
[ 2. SUCCESS CRITERIA ]
  • Request-Specific Measurement
      │
      ▼
[ 3. DESIGN EXPLORATION ]
  • Moodboards & Options
  • Mockups & User Feedback
      │
      ▼
[ 4. PHASED CODING PIPELINE ]
  • Phase 1: Architecture
  • Phase 2: Structural Layout
  • Phase 3: Components
  • Phase 4: State Machines
      │
      ▼
[ REFLECTION & REVISION LOOP ]
  • Self-Check & Output Revision
```

---

## Protocol Hierarchy

This skill separates execution protocols from the knowledge they consume. 

**CRITICAL ROUTER RULE:** Before consulting any component, section, or aesthetic knowledge file for a decision (not a simple lookup), first load `references/design-reasoning.md`. Knowledge files answer "what are the options" — the reasoning framework governs "how to choose among them."

GLOBAL HARD CONSTRAINT: Purple/violet is not a default accent for tech/SaaS briefs (see THE LILA RULE, color-theory-and-psychology.md). This applies regardless of where in the dependency chain color is loaded — check this constraint before finalizing any color decision, not only when the color file happens to load last.

### Core Protocols (Workflow)
* **Design Decision Engine:** [`references/design-decision-engine.md`](references/design-decision-engine.md) (Runs first to anchor decisions in business goals).
* **Success Criteria:** [`references/success-criteria-protocol.md`](references/success-criteria-protocol.md) (Derives concrete baseline for reflection).
* **Design Exploration Mode:** [`references/design-exploration-mode.md`](references/design-exploration-mode.md) (Explores visual directions with user feedback).
* **Orchestration Pipeline:** [`references/coding-agent-orchestration.md`](references/coding-agent-orchestration.md) (Step-by-step phased coding pipeline).
* **Reverse-Engineer Mode:** [`references/reverse-engineer-ui.md`](references/reverse-engineer-ui.md) (Deconstruction and analysis).
* **Project Memory System:** [`references/project-memory-system.md`](references/project-memory-system.md) (External state management).

### Reasoning & Behavior
* **Design Reasoning Framework:** [`references/design-reasoning.md`](references/design-reasoning.md) (Canonical reasoning chain, tradeoff engine, and reflection loops for all protocols).
* **Troubleshooting:** [`references/ui-troubleshooting.md`](references/ui-troubleshooting.md) (Fixes common execution errors and context collapses).

### Supporting Knowledge (Data)
* **Aesthetic Decisions:** [`references/ui-decision-tree.md`](references/ui-decision-tree.md) -> [`references/ui-aesthetic-taxonomy.md`](references/ui-aesthetic-taxonomy.md)
* **Identity Lock:** [`references/app-vibe-lock.md`](references/app-vibe-lock.md) (Consumed by Project Memory System).
* **Components:** [`references/components/*.md`](references/components/) (Recipes for Navbar, Hero, Button, etc.).
* **Psychology:** [`references/psychology/*.md`](references/psychology/) (Domain-specific conversion/cognitive load mechanics).
* **Fundamentals:** [`references/color-theory-and-psychology.md`](references/color-theory-and-psychology.md), [`references/typography-and-spacing.md`](references/typography-and-spacing.md), [`references/taste-and-judgment-ui.md`](references/taste-and-judgment-ui.md).
* **Motion & Animation Domain:** [`references/motion/*.md`](references/motion/) (Physics, bezier curves, component patterns, WAAPI, drag gestures, clip-path reveals, review standards).
  * `decision-framework.md`: Load when deciding IF an element should animate and selecting duration scale.
  * `easing-and-timing.md`: Load for standard cubic-bezier curves, duration tiers, and cross-framework syntax.
  * `spring-animations.md`: Load for mass-spring-damper physics parameters (`k`, `c`, `m`) and interruptibility.
  * `component-patterns.md`: Load for concrete motion recipes (Buttons, Modals, Drawers, Staggered Grids, Tabs).
  * `contextual-animations.md`: Load for icon morphing, word-level text reveals, and DOM exits.
  * `gesture-drag.md`: Load for pointer capture, touch drag physics, rubber-banding, and swipe-to-dismiss.
  * `clip-path-techniques.md`: Load for circular reveals, inset tab cutouts, and comparison sliders.
  * `performance.md`: Load for GPU compositing rules, WAAPI, `will-change` discipline, and CSS variable traps.
  * `review-standards.md`: Motion audit rubric (ten non-negotiable standards, flag-on-sight triggers, verdicts).
  * `reverse-engineer-motion.md`: Motion extraction process (extract -> track -> fit -> emit -> validate).
  * `anti-patterns.md`: Exhaustive catalog of motion failure modes and code fixes.

---

## Knowledge Dependency Graph

Do not load files blindly. Navigate the knowledge graph based on the questions the upstream node creates. The router maps these concepts to files internally.

**Example Path 1: Component-Level Request (e.g., "Build a Button")**
```
Component Taxonomy (Structural layout)
  └─ Component Psychology (Friction elimination, shape-to-tone)
       └─ Interaction Physics (Hover/Active states)
            └─ Typography & Spacing (Text scale, padding)
                 └─ Color Theory (Hex resolution)
```
*Files loaded:* `components/button.md` -> `psychology/button.md` -> `typography-and-spacing.md` -> `color-theory-and-psychology.md`.

**Example Path 2: Funnel/Landing Page Request (e.g., "Build a Hero Section")**
```
Orchestration Protocol (Execution steps)
  └─ Component Taxonomy (Hero structural grid)
       └─ Landing Page Psychology (Social proof, trust bar, scarcity)
            └─ Component Taxonomy (CTA Button structure)
                 └─ Component Psychology (CTA friction)
```
*Files loaded:* `coding-agent-orchestration.md` -> `components/hero.md` -> `psychology/landing-page.md` -> `components/button.md` -> `psychology/button.md`.

**Example Path 3: Dashboard/Data-Dense Request**
```
Component Taxonomy (Data table / layout)
  └─ Dashboard Psychology (Cognitive load reduction, progressive disclosure)
       └─ Typography & Spacing (Tabular numerals, compact 4pt grid)
            └─ Color Theory (Tetradic/Analogous status colors)
```
*Files loaded:* `components/card.md` -> `psychology/dashboard.md` -> `typography-and-spacing.md` -> `color-theory-and-psychology.md`.

Always follow the logical chain of dependencies when determining which references to read.
