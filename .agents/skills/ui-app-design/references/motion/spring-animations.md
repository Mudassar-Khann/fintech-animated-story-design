---
Authority: Supporting Knowledge
Purpose: Defines spring physics parameters, canonical presets, interruptibility, and usage rules.
Consumers: SKILL.md, references/motion/*.md
Dependencies: None
Extension Points: Add custom spring physics configurations.
---

# Physics-Based Spring Animations

Spring animations replace fixed duration curves with mass-spring-damper physics, enabling natural, interruptible UI state transitions.

---

## 1. Physics Parameters & Mathematics

Spring behavior is controlled by three fundamental values:

- **Stiffness (\(k\)):** Higher stiffness increases spring acceleration and frequency (makes spring feel faster and tighter). Range: `100 – 500`.
- **Damping (\(c\)):** Resistance force opposing spring motion. Lower damping increases oscillation/bounce; higher damping eliminates bounce. Range: `10 – 40`.
- **Mass (\(m\)):** Weight of the animated element. Higher mass causes inertia, slower acceleration, and longer overshoot tails. Range: `0.5 – 2.0`.
- **Damping Ratio (\(\zeta\)):** \(\zeta = \frac{c}{2 \sqrt{k \cdot m}}\).
  - \(\zeta < 1\): Underdamped (Oscillates / Bouncy).
  - \(\zeta = 1\): Critically Damped (Fastest arrival without overshoot).
  - \(\zeta > 1\): Overdamped (Slow, heavy, smooth settling).

---

## 2. Canonical Spring Presets

| Preset Name | Stiffness (\(k\)) | Damping (\(c\)) | Mass (\(m\)) | Feel & Character | Primary Target Components |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Snappy** | `400` | `30` | `0.8` | Ultra-fast, crisp, zero overshoot | Buttons, switches, micro-checkboxes, active rings |
| **Gentle** | `180` | `24` | `1.0` | Natural, smooth, elegant arrival | Modals, drawers, card expansions, page views |
| **Bouncy** | `300` | `15` | `0.5` | Energetic, playful, single bounce | Celebration badges, toast pop, like counter, floating actions |
| **Slow / Heavy** | `120` | `35` | `1.5` | Heavy, deliberate, high inertia | Sheet pulls, drag release, large panel reveals |

---

## 3. Framer Motion Implementation Examples

```typescript
// 1. Snappy (Micro-interactions)
export const snappySpring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
} as const;

// 2. Gentle (Cards & Modals)
export const gentleSpring = {
  type: "spring",
  stiffness: 180,
  damping: 24,
  mass: 1.0,
} as const;

// 3. Bouncy (Popovers & Badges)
export const bouncySpring = {
  type: "spring",
  stiffness: 300,
  damping: 15,
  mass: 0.5,
} as const;
```

---

## 4. Interruptibility Mechanics

Unlike CSS transitions (which reset or reverse along artificial time curves), physics springs preserve initial velocity (\(v_0\)) when interrupted mid-flight:

```
User clicks button mid-hover animation:
  CSS Transition: Abrupt direction flip, jarring jump in acceleration.
  Physics Spring: Inherits current position (x) and velocity (v), smoothly blending into target.
```

*Rule:* All interactive drag, swipe, and pointer-following components MUST use interruptible springs.

---

## 5. When to Use vs. When to AVOID Springs

### MUST USE Springs
- Pointer drag & touch gestures (swipe-to-dismiss, drawer drag, slider thumb).
- Physical state toggles (switch flip, button active press).
- Morphing layout elements (`layoutId` shared element morphs).

### AVOID Springs (Use Easing Duration Curves Instead)
- **Opacity Fades:** Opacity has no physical mass. Oscillating opacity looks like flickering.
- **SVG Path Stroke Drawing:** Path length animation requires deterministic progress (\(0\% \rightarrow 100\%\)).
- **Progress Bars & Loading Indicators:** Require precise time-based telemetry synchronization.
- **Large Content Reflows:** Oscillating container size causes severe browser repaints.
