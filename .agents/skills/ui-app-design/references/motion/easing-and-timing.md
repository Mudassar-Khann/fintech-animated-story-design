---
Authority: Supporting Knowledge
Purpose: Defines standard bezier curves, duration ranges, and cross-framework implementation equivalents.
Consumers: SKILL.md, references/motion/*.md, components/*.md
Dependencies: None
Extension Points: Add framework-specific curve syntax.
---

# Motion Easing & Timing Specification

This reference defines canonical cubic-bezier curves, duration tiers, and exact code implementations across CSS, Tailwind CSS, Framer Motion, and Web Animations API (WAAPI).

---

## 1. Canonical Easing Curves

| Easing Profile | Cubic Bezier Definition | Character & Feel | Primary Usage |
| :--- | :--- | :--- | :--- |
| **Standard Ease-Out** | `cubic-bezier(0.16, 1, 0.3, 1)` | Swift start, ultra-smooth natural deceleration | Enter animations, popovers, dropdowns, card reveals |
| **Standard Ease-In** | `cubic-bezier(0.7, 0, 0.84, 0)` | Slow departure, rapid exit velocity | Exit animations, modal dismissals, toast slide-outs |
| **Standard Ease-In-Out** | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric acceleration and deceleration | In-place element moves, layout reordering |
| **Expressive Decelerate** | `cubic-bezier(0.05, 0.7, 0.1, 1.0)` | Hyper-responsive snap with long elegant tail | Hero transitions, full-screen drawer slides |
| **Overshoot / Anticipatory** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight bounce beyond target boundary (`1.56`) | Playful micro-interactions, badge pop, like button |

---

## 2. Duration Tiers & Thresholds

```
100ms ─────── 150ms ─────── 225ms ─────── 350ms ─────── 500ms
  │             │             │             │             │
  ├── MICRO ────┴── COMPACT ──┴── MEDIUM ───┴── LARGE ────┤
  │ Micro-press    Dropdowns     Drawers       Modals     │
  │ Checkbox tick  Tooltips      Tab morph     Page route │
```

- **Micro (100ms – 150ms):** Button active state, icon toggle, selection ring, checkbox tick.
- **Compact (150ms – 225ms):** Dropdown menu expand, tooltip fade, notification toast, status pill transition.
- **Medium (225ms – 350ms):** Drawer slide, accordion expand, tab indicator morph, bento card hover.
- **Large (350ms – 500ms):** Modal dialog open, full-page view transition, hero image expansion.

---

## 3. Cross-Framework Code Mapping

### CSS Variables & Utilities
```css
:root {
  --ease-out-standard: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-standard: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out-standard: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-expressive: cubic-bezier(0.05, 0.7, 0.1, 1.0);
  --ease-overshoot: cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-micro: 120ms;
  --duration-compact: 200ms;
  --duration-medium: 300ms;
  --duration-large: 450ms;
}
```

### Framer Motion
```typescript
export const easings = {
  easeOutStandard: [0.16, 1, 0.3, 1],
  easeInStandard: [0.7, 0, 0.84, 0],
  easeInOutStandard: [0.65, 0, 0.35, 1],
  expressive: [0.05, 0.7, 0.1, 1.0],
  overshoot: [0.34, 1.56, 0.64, 1],
} as const;
```

### Web Animations API (WAAPI)
```javascript
element.animate([
  { opacity: 0, transform: 'translateY(12px) scale(0.96)' },
  { opacity: 1, transform: 'translateY(0px) scale(1.0)' }
], {
  duration: 225,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  fill: 'forwards'
});
```

### Tailwind CSS Arbitrary Utilities
```html
<div class="transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5">
  Interactive Card
</div>
```
