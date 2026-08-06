---
Authority: Supporting Knowledge
Purpose: Defines decision criteria, intent taxonomy, duration scales, and easing selection strategy for UI motion.
Consumers: SKILL.md, coding-agent-orchestration.md, references/motion/*.md
Dependencies: None
Extension Points: Add custom motion intent roles.
---

# UI Motion Decision Framework

This reference specifies when, why, and how to introduce motion into user interfaces. Motion in elite UI systems is functional communication—conveying spatial continuity, affordance, and system feedback—never unmotivated visual noise.

---

## 1. The Motion Necessity Decision Tree

Before applying any animation, run the **Motion Purpose Filter**:

```
                              MOTION NECESSITY FILTER
                                        │
           ┌────────────────────────────┴────────────────────────────┐
           ▼                                                         ▼
[ Functional & Intentional ]                               [ Decorative Slop ]
  • Does it clarify spatial origin?                          • Does it float/rotate endlessly?
  • Does it confirm user input instant feedback?             • Does it distract from content reading?
  • Does it soften state transitions?                        • Does it animate automatically on mount?
           │                                                         │
           ▼                                                         ▼
    (ALLOW & SPECCY)                                         (HARD BAN / OMIT)
```

---

## 2. Motion Intent Taxonomy

Every motion element must be assigned exactly one primary intent role:

| Intent Role | Functional Objective | Key Properties | Recommended Duration |
| :--- | :--- | :--- | :--- |
| **Direct Manipulation** | Real-time response to touch, drag, or cursor position | Springs with zero delay, high stiffness (`350–500`) | `0ms` delay, instant tracking |
| **Feedback / Affordance** | Confirms user action (click, press, toggle, submit) | Micro-scale (`scale(0.98)` to `1.0`), quick ease-out | `100ms – 150ms` |
| **Spatial Continuity** | Guides eye from origin container to expanded view | Position & scale morph (`layoutId`, `clip-path`) | `200ms – 300ms` |
| **State Transition** | Signals view swap (tabs, page routing, modal reveal) | Fade + subtle transform offset (`Y: 8px -> 0px`) | `250ms – 350ms` |
| **Attention Focus** | Directs eye to critical system state (toast alert, error) | Accent bounce or pulse (single cycle, non-looping) | `300ms – 400ms` |

---

## 3. Scale-to-Duration Selection Matrix

Animation duration is proportional to physical screen distance and spatial area:

| Spatial Scale | Distance Shift | Recommended Duration Range | Easing Profile |
| :--- | :--- | :--- | :--- |
| **Micro** | `< 8px` (Icon swap, button press, checkbox tick) | `100ms – 150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Compact** | `8px – 32px` (Dropdown, tooltip, toast, badge roll) | `150ms – 225ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Medium** | `32px – 200px` (Drawer slide, card expand, tab switch) | `225ms – 350ms` | `cubic-bezier(0.16, 1, 0.3, 1)` or `Spring(stiffness: 220)` |
| **Macro** | `> 200px` (Full page route, modal hero morph) | `350ms – 500ms` | `cubic-bezier(0.05, 0.7, 0.1, 1.0)` |

*Hard Cap:* No UI animation should ever exceed `500ms`. Transitions over `500ms` create sluggishness and user frustration.

---

## 4. Easing Strategy Selection

```
Is element entering or exiting the viewport?
  ├── ENTERING  ──> Decelerate (Ease-Out): Starts fast, settles smoothly into place.
  ├── EXITING   ──> Accelerate (Ease-In): Starts slow, exits rapidly.
  └── BOTH (In-Place State Shift) ──> Standard In-Out or Physics Spring.
```

---

## 5. Reduced Motion Decision Protocol

All motion implementations MUST respect `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
*Rule:* Reduced motion MUST NOT make elements invisible. Fall back to instant `opacity` transitions (`10ms` duration) rather than total deletion.
