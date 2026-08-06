---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: typography-and-spacing.md, psychology/navigation.md
Extension Points: Add framework-specific implementation patterns.
---

# Navbar

* **Layout:** Flex container (`justify-content: space-between`, `align-items: center`), height `64px` – `72px` (desktop, max `80px`) / `56px` (mobile). Sticky or fixed positioning with backdrop blur (`backdrop-filter: blur(12px)`).
* **Elements:**
  * **Brand Mark / Logo:** Left aligned, max-height `28px` – `32px`.
  * **Nav Links:** Centered or left-adjacent flex row (`gap: 24px` – `32px`), font `14px` (`font-weight: 500`), subtle hover color shift.
  * **Action Group:** Right aligned (`gap: 12px` – `16px`), includes theme toggle, secondary button ("Sign In"), primary CTA button ("Get Started").
* **Mobile State:** Hamburger icon button trigger expanding a full-screen or slide-over menu drawer.

### Hard Anti-Slop Constraints
- **Desktop Single-Line Mandate:** Navigation MUST render on a single line on desktop viewports (`lg:` / 1024px+). If items do not fit, condense labels, drop secondary links, or collapse to hamburger. A two-line navbar at desktop is a layout failure.
- **Height Cap:** Maximum `80px` desktop height (default `64px – 72px`). Oversized agency navbar headers eating >15% of viewport height are banned.

---
