---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: typography-and-spacing.md
Extension Points: Add framework-specific implementation patterns.
---

# Card Component

* **Layout:** Container box with structured padding (`24px`), flex/grid child alignment, `border-radius: 12px` – `16px`.
* **Visual Styling:** Solid background surface color, 1px border (`border: 1px solid var(--border-color)`), optional elevation shadow (`0 4px 12px rgba(0,0,0,0.05)`). On hover: border brightens, card translates `translateY(-2px)`.

### Bento Grid & Card Anti-Slop Rules
- **Bento Cell Count Rule:** A bento grid MUST have EXACTLY as many cells as there is content for (\(N\) items \(\rightarrow N\) cells). 3 items \(\rightarrow\) 3 cells (1+2 split or asymmetric trio); 5 items \(\rightarrow\) 5 cells. Empty grid tiles or placeholder padding cards are strictly banned.
- **Bento Background Diversity:** Bento grids cannot be a uniform grid of white-on-white text cards. At least 2–3 cells in any multi-cell grid MUST feature real visual variation (e.g. an authentic photography asset, a subtle gradient backdrop, an inline code/widget preview, or a distinct background tint).

---
