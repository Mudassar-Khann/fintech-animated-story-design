---
Authority: Supporting Knowledge
Purpose: Fixes common execution errors and context collapses.
Consumers: coding-agent-orchestration.md
Dependencies: None
Extension Points: Add new known coding agent failure modes.
---

# UI Troubleshooting & Execution Anti-Patterns

This reference documents common failure modes when coding agents execute UI specifications, providing direct fixes to ensure elite-tier results.

---

## 1. Contrast & Readability Failures

* **The Problem:** Text is illegible due to low contrast, typically caused by applying glassmorphism directly over dark text or using light-gray text on a white background.
* **The Diagnosis:** The agent prioritized aesthetic trends over the WCAG minimums established in the `typography-and-spacing.md` spec.
* **The Fix (Prompt Intervention):** *"Your contrast ratio is failing. Enforce WCAG AA minimums (4.5:1). Remove the backdrop-filter on the text container, or darken the text hex to `#171717`. Ensure all body text is legible."*

## 2. State Machine Incompleteness

* **The Problem:** A button or interactive component feels "dead." It changes color on hover, but lacks focus rings for accessibility, active (pressed) states, or disabled styling.
* **The Diagnosis:** The agent rushed the implementation and only built the `default` and `hover` states, ignoring the full State Machine defined in `component-taxonomy.md`.
* **The Fix (Prompt Intervention):** *"You missed the full state machine. Add the `:active` state with `scale-95`, the `:focus-visible` state with a `3px` outline ring, and a distinct `:disabled` state with `opacity-50` and `cursor-not-allowed`."*

## 3. Spacing Rhythm Breakdown

* **The Problem:** The layout feels sloppy. Padding looks randomly assigned (e.g., `padding: 17px`, `margin-top: 25px`). Elements don't align vertically.
* **The Diagnosis:** The agent abandoned the strict 4pt/8pt mathematical spacing scale defined in `typography-and-spacing.md`.
* **The Fix (Prompt Intervention):** *"Your spacing is mathematically inconsistent. Lock all padding, margin, and gap values to the 4pt/8pt grid (e.g., 4, 8, 12, 16, 24, 32, 48px). Convert arbitrary margins like 25px to 24px (`space-6`)."*

## 4. Responsive Collapse (Mobile-Hostile Design)

* **The Problem:** A bento grid or multi-column pricing table squishes horizontally on mobile devices, rendering text unreadable, instead of stacking vertically.
* **The Diagnosis:** The agent built desktop-first CSS and forgot to implement responsive breakpoint overrides.
* **The Fix (Prompt Intervention):** *"The grid fails on mobile. Implement mobile-first CSS: default to a 1-column flex/grid stack, and use Tailwind `md:` or `lg:` prefixes to re-enable the multi-column layout at 768px and 1024px."*

## 5. Unmotivated UI Slop

* **The Problem:** The agent added decorative elements that serve no purpose—e.g., arbitrary neon drop shadows around standard text blocks, or floating particle animations behind a data dashboard.
* **The Diagnosis:** The agent violated the Restraint vs. Excess principle from `taste-and-judgment-ui.md`. It confused visual noise with "premium design."
* **The Fix (Prompt Intervention):** *"Remove the excessive drop shadows and animated background elements. Apply the 'Restraint vs. Excess' principle. Let the typography and grid establish authority. Flatten the containers and use 1px borders instead of glows."*
