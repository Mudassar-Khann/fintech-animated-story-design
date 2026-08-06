---
Authority: Core Protocol
Purpose: Manages external project state and technical decisions.
Consumers: coding-agent-orchestration.md, SKILL.md
Dependencies: app-vibe-lock.md
Extension Points: Define new document categories for large scale projects.
---

# Project Memory System

This protocol defines an external, per-project, markdown-based memory structure. It ensures that architectural decisions, design tokens, and research persist across sessions without cluttering the agent's core skill directory.

**Crucial Isolation Rule:** Project memory files MUST live in the user's project directory (e.g., `<project-root>/project-memory/`), never inside this skill package directory. The skill itself remains stateless.

---

## 1. Agent Workflow

1. On any design or build request, check if `<project-root>/project-memory/` exists.
2. If it exists, read `identity.md`, `design-system.md`, and `constraints.md` at minimum before generating anything to enforce consistency with prior decisions.
3. If a new architectural or design decision is made during the session, append it to `decisions.md`. Never overwrite prior decisions; append new entries (or explicitly mark an old entry as superseded).
4. If `project-memory/` does not exist and the work is substantial enough to warrant it (multi-session project, not a one-off snippet), offer to create it.

---

## 2. Memory Categories (Adaptive Scope)

Create ONLY the documents a given project actually needs. A small project may only need Identity and Design System. A large SaaS build may warrant all categories. Judge this from project scope — **do not create empty placeholder files for categories that aren't in use.**

*   **Identity (`identity.md`):** What the product is, who it's for, and its tone. This absorbs the **App Vibe Lock** protocol (`app-vibe-lock.md`) as its core mechanism for locking design tokens (Markdown + JSON + CSS/Tailwind exports).
*   **Research (`research.md`):** Competitor and precedent findings (evidence-based).
*   **Design System (`design-system.md`):** Extended token detail beyond Identity (colors, type, spacing), written as markdown.
*   **Architecture (`architecture.md`):** Frontend stack, folder structure, framework decisions.
*   **Component Library (`component-library.md`):** Inventory of built components and reuse notes.
*   **Constraints (`constraints.md`):** Hard requirements (accessibility targets, browser support, brand rules).
*   **Decisions (`decisions.md`):** A chronological decision log (see strict format below).
*   **Roadmap (`roadmap.md`):** Planned work and sequencing.
*   **Implementation Status (`implementation-status.md`):** What's built vs. pending.
*   **Lessons (`lessons.md`):** What failed, what was reverted, and why.
*   **Changelog (`changelog.md`):** Dated log of major changes.

---

## 3. Decision Log Format (`decisions.md`)

Agents MUST replicate this exact pattern (matching the **Tradeoff Engine Template** in `design-reasoning.md`) when appending new architectural or technical decisions:

```markdown
## Recommendation: Use Framer Motion for interaction animations

### Benefits
- Simple declarative API, good React integration.

### Tradeoffs
- Larger bundle size than vanilla CSS transitions.

### Alternatives Considered
- GSAP — more powerful but heavier and imperative; overkill for our motion needs.
- Vanilla CSS — too complex to orchestrate shared layout animations.

### Engineering Cost
Low initial setup, high productivity for complex layout animations.

### Maintenance Cost
Low, assuming the library remains maintained; tied to React ecosystem.

### Date
2026-08-05
```
