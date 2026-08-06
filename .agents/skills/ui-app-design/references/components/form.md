---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: typography-and-spacing.md, psychology/form.md
Extension Points: Add framework-specific implementation patterns.
---

# Form Component System

* **Label:** `14px` (`font-weight: 500`), `margin-bottom: 6px`. Label MUST sit above input—placeholder-as-label is banned.
* **Input Container:** Height `40px` – `44px`, `padding: 0 14px`, `border-radius: 6px` – `8px`, `border: 1px solid var(--input-border)`, `font-size: 14px`.
* **Input Block Spacing:** Standard `gap-2` between label, input, and helper/error text.
* **Input States:**
  * **Default:** Muted border (`#CBD5E1` light / `#334155` dark), subtle placeholder text.
  * **Focus:** Accent border color (`#2563EB`) + 3px soft focus ring (`box-shadow: 0 0 0 3px rgba(37,99,235,0.15)`).
  * **Error:** Crimson border (`#EF4444`) + error message text below (`12px`, red).
  * **Valid:** Green checkmark icon appended inside input right slot.

### Hard Anti-Slop & Contrast Constraints
- **Form Contrast Minimum (WCAG AA Requirement):** Labels, input borders, placeholder text, focus rings, helper text, and error text MUST pass WCAG AA contrast (\(\ge 4.5:1\)) against the section background. Light placeholders on near-white inputs or white forms on white page sections are banned.
- **Label Structure:** Always place labels ABOVE inputs. Placeholder-as-label is strictly banned. Place helper text option below label/input, and error text BELOW input.

---
