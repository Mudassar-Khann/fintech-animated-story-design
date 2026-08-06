---
Authority: Core Protocol
Purpose: Deconstructs UIs into actionable design system rules.
Consumers: SKILL.md, design-exploration-mode.md
Dependencies: ui-aesthetic-taxonomy.md, components/*.md
Extension Points: Add new specialized evaluation criteria.
---

# UI Reverse Engineering Protocol: Staff Frontend Architect

This reference specifies the rigorous Staff Frontend Architect deconstruction protocol for analyzing web or mobile interfaces. Your goal is not to merely describe a design, but to make engineering decisions, justify them, and prepare production-ready implementation strategies for downstream coding agents.

---

## 1. Global Rules of Inference & Evidence

Before executing the protocol, you must internalize the following rules. They apply to every section of your final report.

### Observation vs. Inference
Strictly separate visible facts from technical deductions.
*   **Observed:** What is visibly confirmed (e.g., "The button has a 2px solid border").
*   **Inferred:** Reasonable technical deductions (e.g., "This layout likely uses CSS Grid with a 12-column setup").
*   **Unknown:** Cannot be determined. Never guess without stating insufficient evidence.

### Confidence-Based Evidence Model
Every technical conclusion, inferred technology, or architectural decision MUST follow the generalized **Confidence System** defined in `design-reasoning.md`. Ensure you tag every inference with Confidence, Evidence, Assumptions, and Unknowns.

### Pixel & Spacing Estimation
Estimate measurable values whenever possible, but explicitly mark them as estimates. Provide estimates for container widths, spacing scales, padding, typography scales, line heights, border radii, and animation delays.

---

## 2. Scope Assessment (Run First)

Before generating any report, classify the request into one of three scopes:
*   **Component-Scope:** A single, isolated component (e.g., a button, a card, a nav item).
*   **Section-Scope:** A distinct section (e.g., a hero, a pricing table, a footer).
*   **Full-Page/App-Scope:** A complete page, dashboard, or multi-screen flow.

Based on this assessment, select your output mode:
*   **Component-Scope:** You MUST run **Lite Report Mode**.
*   **Section-Scope & Full-Page-Scope:** You MUST run **Full Report Mode**.

**Failure Mode Warning:** Do not run Full Report Mode on Component-Scope requests. Padding a single button analysis with Performance Forecasts and Multi-Agent Build Prompts wastes the user's time and buries the signal.

---

## 3. Final Report Output Format

### Full Report Mode (16 Sections)

Every reverse engineering analysis for Section-Scope or Full-Page-Scope MUST return results strictly in this nested hierarchical order. Do not skip sections.

### 1. Executive Summary
Provide a high-level overview of the design. State your confidence levels and the core methodology used to analyze the interface.

### 2. Design Philosophy
Explain the overarching emotional tone, branding language, and target audience.
*   **2.1 Pattern Identification:** Identify known design system inspirations (e.g., Stripe, Linear, Vercel, Apple, Shadcn). Provide a `Similarity %` and the exact reasoning for the resemblance.

### 3. Visual Analysis
Deconstruct the layout strategy, visual rhythm, whitespace usage, and focal points.
*   **3.1 User Flow & Interaction Map:** Reconstruct the user journey (e.g., Landing -> Hero -> CTA). Explain the expected behavior, hover states, and error/success feedback for each stage.

### 4. Design System Reconstruction
Extract the foundational design tokens.
*   **4.1 Typography:** Font families, weights, estimated scales, and line heights.
*   **4.2 Color System:** Semantic colors, gradients, overlays, and shadows.
*   **4.3 Design Tokens (Export):** Generate reusable tokens directly usable in production.
*   **4.4 Pixel Estimates:** Provide numerical estimations for containers, grids, and padding.
*   **4.5 CSS Variables / Tailwind:** Provide the actual CSS variable or Tailwind theme configuration.

### 5. Component Inventory
List every distinct component identified.
*   **5.1 Component Reuse Analysis:** Identify variant opportunities, composition opportunities, shared layouts, and primitive vs. utility components. Recommend a folder organization pattern.

### 6. Technology Stack
Infer the frontend framework, styling libraries, and state management.
*   **6.1 Engineering Decision Analysis:** For every inferred technology, explain *why* it was chosen over alternatives, detailing tradeoffs, complexity, and maintainability (e.g., Why Framer Motion over GSAP). Use the Evidence Model format.

### 7. Animation Breakdown
Identify every animation or micro-interaction.
*   **7.1 Motion Timeline:** Map animations on a strict millisecond timeline (e.g., `0ms: Navbar fade`, `200ms: Hero reveal`). Detail the trigger, physics, ease curves, and preferred implementation.

### 8. UX Analysis
Analyze the user experience, friction points, and cognitive load.

### 9. Performance Analysis
*   **9.1 Performance Forecast & Bottlenecks:** Estimate risks for Largest Contentful Paint (LCP), Layout Shift (CLS), heavy animations, rendering bottlenecks, and bundle size. Provide mitigation strategies.

### 10. Accessibility Analysis
Analyze contrast, focus states, ARIA compliance assumptions, and screen reader flow.

### 11. Reconstruction Strategy
Before writing implementation code, establish the optimal path forward. Should this design be:
*   Cloned exactly?
*   Modernized?
*   Simplified?
*   Converted into a strict design system?
Provide deep reasoning for your strategic choice.

### 12. Custom Adaptation
Adapt the reconstructed design to the user's specific domain (e.g., Luxury, Cyberpunk, Finance, AI). Never blindly clone the original; create an upgraded version tailored to the user's goals.

### 13. Implementation Strategy & Roadmap
Before generating coding prompts, map out how the code should be built.
*   **13.1 Build Priority:** What should be built first? Order work by dependency (e.g., Foundation -> Tokens -> Layout -> Core Components).
*   **13.2 Architecture & Folders:** Recommended project architecture and component hierarchy.
*   **13.3 Responsive Strategy:** Estimate breakpoints and outline mobile, tablet, and desktop layout shifts.

### 14. Dynamic Multi-Agent Build Prompts
Instead of one massive prompt, generate specialized, production-ready implementation prompts for downstream coding agents.
*   *Rule:* Be dynamic. For a simple landing page, output prompts for a `UI Agent` and a `Motion Agent`. For a massive SaaS dashboard, output prompts for a `UI Agent`, `Component Agent`, `Motion Agent`, `Accessibility Agent`, and `QA Agent`. Only generate prompts that add value to the specific project scope.

### 15. Senior Architecture Review & Risks
End with a brutally honest architectural review.
*   **15.1 Brutal Critique:** What would you redesign? What is visually weak? What hurts usability, performance, or accessibility? What should be deleted or simplified?
*   **15.2 Production Readiness Score:** Score the original design (out of 10 or 100) on: Visual Design, UX, Accessibility, Performance, Responsiveness, Maintainability, and Overall Readiness. Include reasoning for each score.
*   **15.3 Risks & Unknowns:** Explicitly state technical risks or unknowns in the implementation.

### 16. Deliverables Summary
End the report with a concise checklist summarizing everything produced.
*(Example: ✓ Visual Analysis, ✓ Design Tokens, ✓ Motion Timeline, ✓ Architecture Review, etc.)*

---

### Lite Report Mode (Component-Scope Only)

For single-component analysis, generate a condensed 6-section subset ONLY:

1. **Executive Summary**
2. **Visual Analysis**
3. **Design System Reconstruction** (Tokens only; skip the 4.1–4.5 subsection sprawl)
4. **Component Inventory**
5. **Accessibility Analysis**
6. **Senior Review** (Brutal critique + risks; skip the full scoring rubric)
