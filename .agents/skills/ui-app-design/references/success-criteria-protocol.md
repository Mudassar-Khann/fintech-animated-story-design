---
Authority: Core Protocol
Purpose: Derives request-specific success criteria for measuring design quality.
Consumers: SKILL.md, design-reasoning.md (Reflection Loop)
Dependencies: design-decision-engine.md
Extension Points: Add new domain-specific criteria archetypes.
---

# Success Criteria Protocol

*Note: This is a deliberate structural exception to the "no new protocols" rule of v3, providing a concrete measurement baseline for the Reflection Loop in `design-reasoning.md`.*

---

## 1. Protocol Workflow

Before beginning Design Exploration or Implementation, you must define what a "successful" outcome looks like for the specific request. 

This step bridges the **Design Decision Engine** and the **Design Exploration Mode**.

**Sequence:**
`Requirements → Decision Engine → **Success Criteria** → Design Exploration → Architecture → Implementation → Reflection (measured against Success Criteria) → Done`

---

## 2. Deriving Criteria

Do NOT use a hardcoded checklist. You must generate success criteria specific to the actual request by answering: *How will we objectively know if this design solved the Business/User goals?*

### Archetype Examples (For Inspiration, Not Copy-Pasting)

**Landing Page Archetype:**
- Trust communicated above the fold (within 3 seconds).
- Primary CTA is the most visually prominent element.
- High conversion optimization via social proof placement.
- LCP performance is extremely fast to prevent bounce.

**Data-Dense Dashboard Archetype:**
- High information density without cognitive overload.
- Scannability: Users can identify errors/status instantly via tetradic color cues.
- Maintainability of tabular components.

**Component Archetype (e.g., Button):**
- Accessible contrast ratio passes WCAG AAA.
- Clear state changes (hover, active, focus, disabled).
- Alignment with global UI tokens.

---

## 3. Usage in Reflection

When the agent reaches the **Reflection & Revision Loop** in `design-reasoning.md`, it must evaluate the output against these generated Success Criteria. If the design fails to meet them, it must be revised before presentation.
