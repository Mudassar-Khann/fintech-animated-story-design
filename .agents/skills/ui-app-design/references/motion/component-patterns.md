---
Authority: Supporting Knowledge
Purpose: Direct animation recipes and state specifications for core UI components.
Consumers: components/*.md, coding-agent-orchestration.md
Dependencies: easing-and-timing.md, spring-animations.md
Extension Points: Add component-specific motion recipes.
---

# Component Motion Patterns

This reference specifies concrete motion implementations for fundamental UI components, ensuring consistent physics and interaction feedback across the application.

---

## 1. Buttons & CTA Controls

- **Default \(\rightarrow\) Hover:** `transform: translateY(-1px)`, subtle shadow expand. `120ms` ease-out.
- **Hover \(\rightarrow\) Active (Press):** `transform: scale(0.98) translateY(0px)`, shadow collapse. `80ms` snappy spring (`stiffness: 450, damping: 25`).
- **Button-in-Button Trailing Icon:** Inner icon container scales `1.0 \(\rightarrow\) 1.1` on hover with a `30ms` stagger delay after main button hover.

```tsx
<motion.button
  whileHover={{ y: -1 }}
  whileTap={{ scale: 0.98, y: 0 }}
  transition={{ type: "spring", stiffness: 450, damping: 25 }}
  className="relative inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
>
  <span>Action</span>
  <motion.span
    className="ml-2 inline-flex p-1 bg-white/20 rounded-full"
    whileHover={{ scale: 1.1 }}
  >
    <ArrowRightIcon className="w-4 h-4" />
  </motion.span>
</motion.button>
```

---

## 2. Tooltips & Popovers

- **Tooltip Entrance:** `opacity: 0 \(\rightarrow\) 1`, `transform: translateY(-4px) scale(0.96) \(\rightarrow\) translateY(0px) scale(1.0)`. `120ms` ease-out.
- **Popover Entrance:** `opacity: 0 \(\rightarrow\) 1`, `transform: translateY(8px) scale(0.95) \(\rightarrow\) translateY(0px) scale(1.0)`. `180ms` spring (`stiffness: 300, damping: 22`).
- **Exit:** `opacity: 1 \(\rightarrow\) 0`, `transform: scale(0.96)`. `100ms` ease-in.

---

## 3. Modals & Dialog Windows

- **Backdrop:** `opacity: 0 \(\rightarrow\) 1`. `200ms` ease-out.
- **Modal Surface Container:** `opacity: 0 \(\rightarrow\) 1`, `transform: translateY(16px) scale(0.96) \(\rightarrow\) translateY(0px) scale(1.0)`.
- **Spring Profile:** Gentle spring (`stiffness: 200, damping: 24, mass: 1.0`).

---

## 4. Drawers & Bottom Sheets

- **Side Drawer (Right):** `translateX(100%) \(\rightarrow\) translateX(0%)`. `300ms` decelerate or spring (`stiffness: 220, damping: 26`).
- **Bottom Sheet (Mobile):** `translateY(100%) \(\rightarrow\) translateY(0%)`. Incorporate drag-to-dismiss threshold (`> 100px` drag down or `velocity.y > 0.5`).

---

## 5. Notification Toasts & Banner Alerts

- **Slide-In Entrance:** `translateY(-100%) opacity: 0 \(\rightarrow\) translateY(0%) opacity: 1`. `250ms` spring (`stiffness: 320, damping: 20`).
- **Auto-Dismiss:** Slide right or fade out (`150ms` ease-in).

---

## 6. Staggered Lists & Bento Grids

- **Item Stagger Delay:** `40ms` per item (`staggerChildren: 0.04`).
- **Maximum Stagger Cap:** Total sequence time must not exceed `300ms` (cap at maximum 8 staggered items).
- **Per-Item Shift:** `opacity: 0 \(\rightarrow\) 1`, `translateY(12px) \(\rightarrow\) translateY(0px)`. `200ms` ease-out.

```typescript
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.02 }
  }
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  }
};
```

---

## 7. Step Navigation & Tab Cutouts

- **Active Tab Pill Morph:** Use `layoutId` for smooth position/width sliding between active tabs (`stiffness: 400, damping: 30`).
- **Content Panel Swap:** Direct horizontal slide (`translateX(-16px \(\rightarrow\) 0px)` + `opacity: 0 \(\rightarrow\) 1`), `200ms` ease-out.

---

## 8. 3D Card Tilt & Mouse Parallax

- **Mouse Track Angle Cap:** Maximum rotation angle capped at `10deg` (`maxTilt = 10`).
- **Smooth Spring Dampening:** `stiffness: 200, damping: 20`.
- **Glow Highlight Offset:** `radial-gradient` tracking mouse coordinates (`x, y`) on card surface.
