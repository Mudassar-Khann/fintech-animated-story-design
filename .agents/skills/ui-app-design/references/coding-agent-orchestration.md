---
Authority: Core Protocol
Purpose: Guides the phased coding pipeline for complex UI generation.
Consumers: SKILL.md, design-exploration-mode.md
Dependencies: project-memory-system.md, components/*.md
Extension Points: Add new execution phases or validation steps.
---

# Coding Agent Orchestration Pipeline

This reference defines the strategic execution pipeline for orchestrating coding agents (e.g., Claude Code, v0, Tailwind developers) to build elite UI systems. It provides structured, technical delivery phases to prevent context collapse and ensure pixel-perfect execution.

---

## Table of Contents

1. [The Orchestration Decision Engine](#1-the-orchestration-decision-engine)
2. [All-At-Once Delivery (Simple Scope)](#2-all-at-once-delivery-simple-scope)
3. [Phased Delivery Pipeline (Complex Scope)](#3-phased-delivery-pipeline-complex-scope)

---

## 1. The Orchestration Decision Engine

Before handing specifications to a coding agent, you must evaluate the complexity of the request to determine the delivery strategy. 

* **Simple Scope:** A single component (e.g., a Button state machine, an isolated card, a basic form).
  * **Strategy:** **All-At-Once Delivery**. Pass the design tokens and component specs in a single unified prompt to the coding agent.
* **Complex Scope:** A full landing page, a multi-panel dashboard, a massive pricing grid, or an entire responsive navigation system.
  * **Strategy:** **Step-by-Step Phased Delivery**. Delivering a full dashboard spec in one prompt overwhelms the coding agent, leading to broken grids, skipped interaction states, and contrast failures. Break the execution into 4 sequential phases.

---

## 2. All-At-Once Delivery (Simple Scope)

For isolated components, deliver the spec using this structured format:

1. **Design Tokens:** Provide the exact hex codes, border radii, typography scale, and font families needed for the component.
2. **Component Architecture:** Detail the HTML/JSX semantic structure (e.g., `form > label + input + button`).
3. **State Machine:** Explicitly list CSS hover, active, focus, disabled, and loading states.
4. **Execution Command:** "Build this component using Tailwind CSS and React. Implement all state transitions."

---

## 3. Phased Delivery Pipeline (Complex Scope)

For full pages or complex UIs, act as a strict technical lead orchestrating a junior developer. Guide the coding agent through these 4 sequential phases, verifying each step before proceeding to the next.

---

**MANDATORY EXECUTION RULE (applies to the executing agent, not a human orchestrator):**

If you are an autonomous agent executing a Complex Scope request, the following are hard constraints on your tool use, not stylistic guidance:

1. **You MUST NOT call any file-creation, file-write, or code-execution tool for Phase 3 or Phase 4 content until the user has sent a message approving Phase 1 and, separately, Phase 2.** This is a tool-call constraint, not a narrative one — the check is whether you invoked a write tool, not whether you described yourself as following the phases.

2. **Phase 1 and Phase 2 each end your turn.** After producing Phase 1 (architecture/tokens) output, stop. Do not proceed to Phase 2 in the same turn. After Phase 2 (structural wireframe/grid) output, stop again. Ask explicitly: "Ready to proceed to Phase 3?" and wait for a reply.

3. **Do not narrate phases retrospectively.** If Phase 3 and Phase 4 content was not separately approved by the user before you produced it, you may not describe your output as having gone through "Phase 1 → Phase 2 → Phase 3 → Phase 4." A monolithic build described after the fact with phase headers is a protocol violation, not a compliant summary. If you catch yourself about to write a phase-by-phase retrospective of work that was actually done in one pass, that is itself the signal that the protocol was violated — stop and flag it rather than presenting it as normal.

4. **If you are uncertain whether a request is Complex Scope**, default to treating it as Complex Scope. Producing an unnecessary pause on a Simple Scope request costs the user one extra confirmation; skipping a required pause on a Complex Scope request produces an unreviewed, unapproved multi-file deliverable — the asymmetry favors defaulting to the phased path.

---

### Phase 1: Global Architecture & Setup
* **Goal:** Lock the foundation before any layout code is written. Architecture setup assumes the Decision Engine's aesthetic-selection and anti-slop check already ran. If it did not (e.g. a direct implementation request skipped Design Exploration), run it now before establishing tokens.
* **Deliverable to Agent:** Send the relevant project-memory files: `design-system.md`, `architecture.md`, and `constraints.md` (via `project-memory-system.md`).
* **Decision Process:** If determining the architecture during this phase, use the **Tradeoff Engine Template** and **Reflection Loop** from `design-reasoning.md` to justify the stack (e.g. Framer Motion vs CSS transitions) before locking it in.
* **Instruction:** "Initialize the global CSS variables and Tailwind config according to these design tokens. Do not build any components yet. Acknowledge when the foundational setup is complete."

### Phase 2: Structural Layout & Grid (Wireframing)
* **Goal:** Establish responsive containers and grid systems.
* **Deliverable to Agent:** Layout grid specifications (e.g., 12-column bento grid, 1440px max-width, sticky header height).
* **Instruction:** "Build the semantic HTML/React shell using semantic tags (`<header>`, `<main>`, `<section>`). Apply the CSS grids and flexbox containers with correct padding and gap tokens. Use placeholder background colors for distinct regions. Ensure mobile responsive stacking. Do not implement detailed text or styling yet."

### Phase 3: Component Implementation & Styling
* **Goal:** Flesh out the wireframes with real styling, typography, and content.
* **Deliverable to Agent:** Component taxonomy specs (Cards, Typography hierarchy, Hero section layout).
* **Instruction:** "Replace the layout placeholders with the actual components. Apply the correct surface colors, border radii, font sizes, and WCAG-compliant text contrast. Ensure the visual hierarchy matches the spec."

### Phase 4: Interaction Polish & Micro-Mechanics
* **Goal:** Breathe life into the static UI with state machines and physics.
* **Deliverable to Agent:** Hover states, focus rings, transitions, and loading states.
* **Instruction:** "Implement the interaction state machines. Add `transition-all 150ms ease` to interactive elements. Ensure buttons have `translateY(-1px)` on hover and `scale(0.98)` on active. Ensure all inputs have a `3px` focus ring. Verify all disabled states."

---

## 4. Architecture & State Engineering Directives

1. **RSC Safety & Interactivity Isolation:**
   * React Server Components (RSC) render static layouts by default. In Next.js, global state providers MUST be wrapped in a separate `"use client"` component.
   * **Leaf Component Isolation:** Any component containing Motion hooks, scroll listeners, or pointer physics MUST be isolated as a small leaf component with `'use client'` at the top. Never add `'use client'` to root layout or page containers unnecessarily.

2. **State Management Rule:**
   * Use local `useState` / `useReducer` for isolated component state.
   * **State Ban on Continuous Input:** NEVER track continuous user-driven input (mouse position, scroll progress, pointer physics) using React `useState`. Using `useState` triggers full component re-renders on every pixel move and causes severe mobile frame drops. Use Motion's `useMotionValue`, `useTransform`, or `useScroll` instead.

3. **Viewport & Grid Mechanics:**
   * **Viewport Stability:** Never use `h-screen` for hero sections. Always use `min-h-[100dvh]` to prevent viewport layout jumps when mobile browser address bars collapse/expand.
   * **CSS Grid over Flex Math:** Never use complex flexbox percentage math (`w-[calc(33%-1rem)]`). Use explicit CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`).

4. **Dependency Verification:**
   * Before importing any third-party library (`motion/react`, `@phosphor-icons/react`, `gsap`), verify its presence in `package.json`. Output the explicit `npm install` command if the package is missing.

---

## 5. Redesign Protocol & Modernization Levers

When tasked with a redesign or refactoring existing UI:

### Mode Detection & Audit First
1. **Greenfield:** No existing code or complete visual overhaul explicitly requested.
2. **Redesign (Preserve):** Modernize UI without altering core brand identity or information architecture.
3. **Redesign (Overhaul):** Replace visual language while strictly preserving content and routing.

*Mandatory Audit Before Edits:* Extract existing brand tokens (colors, typography, logo), document information architecture (page tree, nav slugs, anchor IDs), and identify patterns to preserve vs. patterns to retire.

### Modernization Levers (Priority Execution Order)
1. **Typography Refresh:** Upgrade display font and body font stack.
2. **Spacing & Rhythm:** Increase section padding and lock component spacing to 4pt/8pt grid.
3. **Color Recalibration:** Unify neutral scale and lock a single accent color across the page.
4. **Motion Layer:** Add GPU-safe micro-interactions to interactive components.
5. **Hero & Key Section Recomposition:** Re-architect hero and section layouts using anti-slop rules.
6. **Full Block Replacement:** Replace unsalvageable component structures as a final step.

### Immutable Items (Never Change Silently)
- URL structure and route slugs.
- Primary navigation link labels.
- Form field names, input IDs, and submit handlers (prevents breaking analytics and autofill).
- Brand logos and legal / cookie consent text.
