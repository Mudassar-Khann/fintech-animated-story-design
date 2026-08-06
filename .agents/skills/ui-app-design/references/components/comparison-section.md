---
Authority: Supporting Knowledge
Purpose: Structural and layout specs for problem/solution (Old Way vs New Way) comparison blocks.
Consumers: coding-agent-orchestration.md
Dependencies: components/card.md, typography-and-spacing.md
Extension Points: Add custom side-by-side card variations.
---

# Comparison Section (Old Way vs. New Way)

* **Layout:** 2-column side-by-side grid (`grid-template-columns: repeat(2, 1fr)`) on desktop, collapsing to stacked 1-column on mobile.
* **Structural Intent:** Positions the prior pain-point environment ("Old Way") directly against the product's solution ("New Way") after the Hero section to validate user motivation before detailed feature breakdowns.
* **Component Specs:**
  * **"Old Way" Column (Problem):**
    * Muted, desaturated container (`background: rgba(0, 0, 0, 0.03)` or dark muted tint).
    * Subdued headline ("The Old Way", "Legacy Workflow").
    * Bullet points prefixed with red cross icons (`#EF4444` icons).
    * Focus: Friction points, wasted hours, high costs, security risks.
  * **"New Way" Column (Solution / Product):**
    * High-contrast, highlighted container (`border: 2px solid var(--primary-accent)`, subtle brand tint or elevation glow).
    * Prominent badge ("The New Way", "With [Product]").
    * Bullet points prefixed with green checkmarks (`#10B981` icons).
    * Focus: Automated speed, reduced effort, guaranteed outcome.
