---
Authority: Core Protocol
Purpose: Workflow for generating and iterating on design directions.
Consumers: SKILL.md
Dependencies: design-decision-engine.md, ui-aesthetic-taxonomy.md
Extension Points: Add new exploration mediums like wireframing.
---

# Design Exploration Mode

This protocol defines the exploratory phase of design. Real product teams do not jump straight from idea to implementation. This workflow generates, compares, and refines visual directions before committing to an architecture.

---

## 1. Trigger Conditions
* The user's request is vague or exploratory ("help me design my app", "what should this look like").
* The user explicitly asks for options or directions rather than a direct build.

## 2. Exploration Protocol

Follow these steps sequentially. **Do not skip steps.**

### Step 1: Upstream Consumption (Idea)
* Run the **Design Decision Engine** (`design-decision-engine.md`) first.
* Consume the resulting **Design Goal** to ensure exploration is anchored in business and user needs.

### Step 2: Research
* Pull relevant precedents (competitor apps, category conventions).
* Use the evidence model from the Reverse-Engineer Protocol if analyzing specific references.

### Step 3: Moodboards
* Define the emotional texture and abstract visual concepts that align with the Design Goal.

### Step 4: Design Direction Options (Generate 3–5)
Generate 3 to 5 distinct visual directions. Each direction must include:
* **Aesthetic Reference:** Explicitly reference a taxonomy from `ui-aesthetic-taxonomy.md` (e.g., Swiss Punk, Dashboard Dense).
* **Color Harmony:** The proposed palette (primary, secondary, neutral).
* **Typography Pairing:** The specific font families (e.g., Instrument Serif + Inter).
* **Rationale:** A one-paragraph justification of why this specific direction solves the Design Goal.

### Step 5: Comparison & Recommendation
* Present a comparison table evaluating each direction on: Tone, Best-Fit Use Case, and Tradeoffs (do not just list them).
* **Recommend ONE direction** explicitly, utilizing the **Confidence System** from `design-reasoning.md` to justify your recommendation, while preserving the others as viable alternatives.

After recommending a direction, proactively surface adjacent suggestions the
user didn't explicitly ask for, when they'd genuinely strengthen the result:
- Relevant motion/interaction patterns from the motion knowledge domain that
  would suit this direction (e.g. "this Barely-There Minimal direction pairs
  well with the subtle-exit and crossfade patterns in
  `references/motion/component-patterns.md`, not the bouncier spring presets").
- If the direction would benefit from real reference imagery the user could
  supply (mood photography, a specific texture, an illustration style not
  yet in the taxonomy), say so explicitly and provide a ready-to-use
  image-generation prompt the user can run, plus a note that once they have
  images, the Design Knowledge Ingestion master prompt exists for feeding
  them back in as reusable knowledge.

These are suggestions, not requirements — offer them, don't force them into
the deliverable unasked. Keep this proportional to Success Criteria scale:
a small component request doesn't need a paragraph of adjacent suggestions;
a full design-exploration request warrants a few genuinely useful ones.

* **Reflection & Revision Loop:** Before presenting the recommendation, run the internal self-check defined in `design-reasoning.md` (measured against the Success Criteria) and revise the recommendation if flaws are surfaced.

### Step 6: Temporary Mockups
* Generate rapid, throwaway prototype pages or components for the top 1–3 directions.
* Clearly label these as disposable exploration artifacts, not production code.
* *Note: The location of these mockups (e.g., inline, scratch files, or a specific folder) is determined by the project's own conventions.*

### Step 7: User Feedback & Revision
* Present the mockups to the user.
* Solicit specific feedback. Allow the user to mix elements across directions (e.g., "I like the typography from Direction 1, but the color palette from Direction 3").
* Iterate on the mockups based on feedback.

### Step 8: Approval & Handoff
* Gain explicit final approval from the user on the chosen direction.
* Handoff to the Phased Coding Pipeline (`coding-agent-orchestration.md`) for actual implementation.
