---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: typography-and-spacing.md, psychology/button.md
Extension Points: Add framework-specific implementation patterns.
---

# Button System & State Machine

Buttons are core interactive controls with explicit state transitions.

```
+-----------------------------------------------------------------------+
|                              BUTTON STATES                            |
+-----------------------------------------------------------------------+
|  [ DEFAULT ]  ──(Hover)──>  [ HOVER ]  ──(Press)──>  [ ACTIVE ]       |
|      │                         │                         │            |
|  (Focus Key)               (Disabled)                (Submitting)     |
|      ▼                         ▼                         ▼            |
|  [ FOCUS RING ]             [ DISABLED ]             [ LOADING ]      |
+-----------------------------------------------------------------------+
```

### State Specifications (Primary Solid Button)
* **Default State:** Primary brand background (e.g. `#2563EB`), text color (`#FFFFFF`), `padding: 12px 24px`, `border-radius: 8px`, `font-weight: 600`, `font-size: 14px`, transition `all 150ms ease`.
* **Hover State:** Background darkens/brightens by 8–10% (`#1D4ED8`), subtle Y-translation (`transform: translateY(-1px)`), subtle outer shadow.
* **Active (Pressed) State:** Background darkens by 15% (`#1E40AF`), scale down (`transform: scale(0.98)`), shadow collapses.
* **Focus State:** Primary accent ring offset by 2px (`outline: 2px solid #60A5FA`, `outline-offset: 2px`).
* **Disabled State:** Opacity reduced to `50%` (`cursor: not-allowed`, `pointer-events: none`), shadow removed.
* **Loading State:** Text hidden or shifted; spinning SVG indicator shown (`cursor: wait`).

*For full motion, easing, and spring detail on interactive states, see `references/motion/component-patterns.md` and `references/motion/easing-and-timing.md`.*

### Hard Layout & Usability Constraints
1. **CTA Text Wrapping Hard Ban (Desktop):** CTA button text MUST NOT wrap across multiple lines at desktop viewports. A wrapped button label is a broken layout state, not a stylistic variant. Resolve wrapping by shortening copy (~1–3 words for primary CTAs) or expanding container width/padding—NEVER constrain button `max-width` to force wrapping.
2. **CTA Intent Unification:** Duplicate CTA intent on a single page is banned. Multiple buttons with differing wording that trigger the exact same user action ("Get in touch", "Contact us", "Let's talk") MUST collapse to a single, consistent label used across all page sections (navbar, hero, footer).
3. **Button Contrast Minimum (WCAG AA Hard Requirement):** Primary, secondary, and ghost CTA button contrast is a strict accessibility requirement (\(\ge 4.5:1\)), never an aesthetic choice. White-on-white, low-contrast ghost text, or transparent buttons over complex backdrops without explicit border contrast are failures and banned.

---
