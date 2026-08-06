---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: components/button.md, psychology/landing-page.md
Extension Points: Add framework-specific implementation patterns.
---

# Hero Section

* **Layout:** 1-column centered layout or 2-column asymmetric layout (60/40 split). Padding `80px` – `128px` vertical (desktop), `48px` – `64px` (mobile).
* **Structure:**
  1. **Eyebrow Badge (Optional):** Pill container (`padding: 4px 12px`, `border-radius: 9999px`), includes icon + announcement text.
  2. **Headline (H1 / Display):** Font size `48px` – `64px`, tight tracking (`-0.02em`), max-width `800px`.
  3. **Body Subtitle:** Font size `18px` – `20px`, line-height `1.5`, muted text color, max-width `640px` (max 20 words).
  4. **CTA Button Group:** Primary CTA + Secondary ghost/outline button (`gap: 16px`).
  5. **Friction Reduction Microcopy:** `12px` – `13px` text under CTA buttons ("No credit card required").
  6. **Hero Media / App Preview:** Interactive webapp screenshot, 3D interactive preview, or video canvas wrapped in a crisp browser frame with `border-radius: 12px` and subtle box shadow (`0 20px 50px rgba(0,0,0,0.15)`).
  7. **Trust Bar:** Client logo array with `opacity: 0.6` placed DIRECTLY BELOW hero container.

### Hard Anti-Slop Constraints
- **Viewport Fit:** Hero MUST fit in initial desktop viewport without forcing scroll to reveal CTAs. Use `min-h-[100dvh]` (never `h-screen`).
- **Top Padding Cap:** Maximum `pt-24` (≈6rem) at desktop viewport.
- **Hero Stack Cap (Max 4 Text Elements):** 1. Eyebrow OR brand strip, 2. Headline, 3. Subtext (≤20 words), 4. CTAs. Taglines below CTAs, pricing teasers, and trust micro-strips are BANNED inside the hero stack.
- **Logo Wall Placement:** "Used by / Trusted by" logo walls belong in a dedicated section directly UNDER the hero, never inside the hero flex container. Use SVG logos (Simple Icons / devicon) without category text labels underneath.

---
