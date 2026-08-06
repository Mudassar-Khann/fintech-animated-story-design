---
Authority: Core Protocol
Purpose: Derives design goals from business and user goals.
Consumers: design-exploration-mode.md, reverse-engineer-ui.md
Dependencies: None
Extension Points: Add new reasoning chain links (e.g. Accessibility Goal).
---

# Design Decision Engine

This protocol defines the upstream reasoning chain that must be resolved before any design exploration or visual implementation begins. It ensures that every aesthetic and technical decision is rooted in business and user needs.

---

## The Reasoning Chain

Always evaluate the project through this chain in order. **Do not skip steps.** For each link, answer the core question before moving to the next.

*Note: The canonical Reasoning Chain (`Problem → Constraints → Alternatives → Tradeoffs → Decision → Evidence`) from `design-reasoning.md` operates **within** each of these links to ensure rigorous deduction.*

### 1. Business Goal
* **Question:** What outcome does this drive for the business? (e.g., increase trial signups, reduce support tickets, signal premium market positioning).
* **Output:** A clear statement of the measurable or strategic business objective.

### 2. User Goal
* **Question:** What does the user actually need to accomplish? (e.g., quickly scan complex data, feel safe entering credit card info, understand a new product category).
* **Output:** The primary user job-to-be-done (JTBD).

### 3. Design Goal
* **Question:** What visual and interaction language serves both the business and the user? (e.g., highly credible and dense; playful and frictionless; stark and authoritative).
* **Output:** The abstract creative direction. This output is consumed by **Design Exploration Mode** and `ui-decision-tree.md` to select the actual aesthetic.

### 4. Aesthetic Selection & Anti-Slop Check
* **Question:** Which specific visual aesthetic satisfies the Design Goal while avoiding AI-generated clichés?
* **Output:** The agent must explicitly state which aesthetic direction (from `ui-aesthetic-taxonomy.md`) it is selecting and confirm it against the hard constraints in `color-theory-and-psychology.md` and the anti-slop list in `taste-and-judgment-ui.md` *before* Coding Orchestration Phase 1 begins.

List all options from the rotation set in `ui-aesthetic-taxonomy.md`'s relevant
mapping as a baseline — this prevents defaulting to the first-listed or most
statistically "safe" option. For each, write one sentence on whether and why
it fits THIS SPECIFIC BRIEF, citing an actual detail from the request
(industry, stated tone, target user, named competitor, or explicit absence
of any of these).

The taxonomy listing is a floor, not a ceiling. Once the baseline options are
considered, you may:
  (a) select one as-is,
  (b) propose a justified BLEND of two or more entries (e.g. "Barely-There
      Minimal's restraint with Dashboard Dense's data-table density, because
      this brief needs both institutional calm and real operational
      density"), or
  (c) propose a direction OUTSIDE the current taxonomy entirely, if you can
      articulate why none of the existing entries — alone or blended —
      genuinely fit.

Whichever path you take, the same rigor applies: cite specific brief detail,
not generic praise ("looks clean and modern" is not a justification under
any path). Run the same hard-ban/anti-slop mechanical check regardless of
whether the direction is a taxonomy entry, a blend, or something new — going
outside the taxonomy is not an exemption from the Lila Rule or the AI
Production Tells list; if anything it deserves closer scrutiny, since it's
exactly the "I'm being creative" framing that produced the original purple
default.

If you land on (b) or (c) and it works well, note it explicitly as a
candidate for the Design Knowledge Ingestion workflow — if this pattern is
worth using again, it's worth naming and filing in `ui-aesthetic-taxonomy.md`
properly, rather than being reinvented ad hoc next time. Don't file it
yourself mid-task; just flag it back to the user as a suggestion.

If two or more options (including blends) have equally generic-sounding
justifications, that signals the brief itself is generic — only then fall
back to least-recently-used in the project's own `decisions.md`.

### 5. UX Goal
* **Question:** What are the structural and psychological requirements of the interface? (e.g., requires progressive disclosure of data, needs heavy social proof, must eliminate friction on the primary CTA).
* **Output:** A list of necessary components (e.g., pricing table, dashboard grid) and their required psychological triggers.

### 6. Engineering Goal
* **Question:** What technical architecture supports the UX requirements? (e.g., requires a heavy client-side framework for state, needs Framer Motion for complex spatial masking, or should be plain HTML for speed).
* **Output:** Tech stack and architectural decisions.

### 7. Implementation
* **Question:** How do we sequence the build?
* **Output:** Handoff to `coding-agent-orchestration.md` for execution.

---

## Integration

- **Design Exploration Mode** explicitly consumes the *Design Goal* derived here to generate visual options.
- **Reverse-Engineer Mode** uses this chain in reverse to deduce why a competitor built something a certain way.
