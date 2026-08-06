---
Authority: Supporting Knowledge
Purpose: Provides structural and layout specs for a specific component.
Consumers: coding-agent-orchestration.md
Dependencies: components/button.md, psychology/pricing.md
Extension Points: Add framework-specific implementation patterns.
---

# Pricing Table Component

* **Layout:** 3-column desktop grid (`gap: 24px`), stacking to 1-column on mobile.
* **Tier Architecture:**
  * **Starter / Free:** Standard surface, flat border, secondary CTA button ("Start Free").
  * **Pro (Featured):** Elevated surface, primary accent border (2px), top "Most Popular" pill badge, primary CTA button ("Upgrade to Pro").
  * **Enterprise:** Solid neutral surface, contact sales CTA button ("Contact Sales").
* **Card Internal Hierarchy:** Tier Name \(\rightarrow\) Price Display (large `$49` + `/month`) \(\rightarrow\) Description \(\rightarrow\) CTA Button \(\rightarrow\) Checklist feature items (`gap: 12px` with check icons).

---
