---
Authority: Core Protocol
Purpose: Defines the canonical reasoning chain and tradeoff evaluation for all design decisions.
Consumers: All workflow protocols (Orchestration, Reverse-Engineer, Design Decision Engine).
Dependencies: None
Extension Points: Add new multi-objective tension variables.
---

# Design Reasoning Framework

This reference governs *how* the agent thinks through a decision, ensuring judgment quality across all UI application design protocols. 

---

## 1. The Canonical Reasoning Chain

Every non-trivial recommendation (library choices, architecture calls, aesthetic direction picks) must pass through this reasoning chain:

1. **Problem:** State what is actually being solved, in one sentence, before reaching for any reference file.
2. **Constraints:** What is fixed? (e.g., brand rules, accessibility targets, tech stack already chosen, budget/timeline).
3. **Alternatives:** At least 2, ideally 3, genuinely different options. Do not present straw-man alternatives.
4. **Tradeoffs:** What each alternative costs, not just what it buys.
5. **Decision:** The actual pick, stated plainly.
6. **Evidence:** What specifically supports the pick (precedent, constraint fit).

*Stakes Calibration:* Apply the full chain for consequential decisions. For small, low-stakes calls (e.g., "use 16px padding here"), a one-line Decision + Evidence is enough.

---

## 2. Confidence System

Every recommendation made with incomplete information MUST carry these four tags to separate fact from inference:

* **Confidence:** [High / Medium / Low]
* **Evidence:** [Observed facts or precedents supporting this]
* **Assumptions:** [What is being taken as given without direct confirmation]
* **Unknowns:** [What genuinely cannot be determined from available info]

---

## 3. Tradeoff Engine Template

When outputting a major decision (such as Phase 1 Architecture in Coding Agent Orchestration or logging to `decisions.md`), use this exact canonical shape:

```markdown
## Recommendation: [X]

### Benefits
- ...

### Tradeoffs
- ...

### Alternatives Considered
- [Alternative A] — why not chosen
- [Alternative B] — why not chosen

### Engineering Cost
[Brief summary of implementation complexity]

### Maintenance Cost
[Brief summary of long-term debt or upkeep]

### Date
[YYYY-MM-DD]
```

---

## 4. Multi-Objective Recognition

Design decisions optimize across competing objectives. Acknowledge these tensions explicitly rather than silently picking a winner:

`Beauty ↔ Performance ↔ Accessibility ↔ Maintainability ↔ Business Goals`

*Example:* "This heavier animation improves perceived polish (Beauty) but costs ~15kb and a frame-rate risk on low-end devices (Performance). Recommending the lighter version given no stated brand requirement for heavy motion."

Include an "Objectives in Tension" note in the Tradeoff Engine when relevant.

---

## 5. Reflection & Revision Loop

After producing a non-trivial deliverable (a design direction, architecture decision, or reverse-engineer report), run this internal self-check **before** presenting it as final:

* What assumptions did I make?
* What evidence supports them?
* What could be improved?
* What did I optimize for?
* What tradeoffs did I accept?
* Would another solution better satisfy the Success Criteria?

**Revision Gate:** This is not a postscript. If the self-check surfaces a material flaw (a missed alternative, an unaccounted tradeoff, or a better fit for the stated goal), you MUST revise the output before presenting it to the user. 
*Note:* Only surface the reflection narrative to the user when it changed something or the user asked for critique.

**Mandatory Mechanical Anti-Slop Check (Runs Unconditionally):**
Before presenting any deliverable with visual/aesthetic output (colors, typography, layout, copy), run a mandatory mechanical check against every knowledge file's hard-ban/default-correction section (not a fixed file list). At minimum, this must iterate through the constraint sections in:
- `color-theory-and-psychology.md` (e.g., Lila Rule, premium-palette rotation)
- `taste-and-judgment-ui.md` (e.g., AI Production Tells: em-dash, version badges, decorative dots)
- `typography-and-spacing.md` (e.g., serif-default reflex, mixed-family emphasis ban)
- `component-taxonomy.md` (e.g., CTA no-wrap, no-duplicate-intent-CTAs)

This step is NOT calibrated to stakes like the rest of Reflection; it runs every time, even for small requests. If a banned pattern is present, this is the Revision Gate triggering: fix it before output, don't just note it.
