---
Authority: Supporting Knowledge
Purpose: Specs for pointer capture, touch drag physics, rubber-banding, velocity calculations, and swipe gestures.
Consumers: SKILL.md, references/motion/*.md
Dependencies: spring-animations.md
Extension Points: Add gesture recognition patterns.
---

# Touch & Gesture Drag Mechanics

Gesture-driven UIs must mirror physical reality. Dragged elements must track input instantly without lag, handle boundary friction, and resolve momentum gracefully.

---

## 1. Pointer Capture & Touch Listener Setup

Always utilize Pointer Events with explicit pointer capture to prevent drag loss when the cursor moves beyond component boundaries:

```typescript
function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
  const target = e.currentTarget;
  target.setPointerCapture(e.pointerId);
  // Store initial touch coordinates
  const startX = e.clientX;
  const startY = e.clientY;
}
```

---

## 2. Real-Time Velocity Calculation

Velocity (\(v\)) must be calculated across the last 3–5 input events to determine flick vs drag intent:

\[
v_x = \frac{\Delta x}{\Delta t} = \frac{x_{\text{current}} - x_{\text{previous}}}{t_{\text{current}} - t_{\text{previous}}} \quad (\text{px/ms})
\]

- **Flick Threshold:** \(|v_x| > 0.5\text{ px/ms}\) (or \(> 500\text{ px/s}\)).
- **Slow Drag Threshold:** \(|v_x| \le 0.11\text{ px/ms}\).

---

## 3. Boundary Elasticity (Rubber-Banding Damping Formula)

When a user drags an element beyond its hard bounds (\(x > x_{\text{max}}\)), apply logarithmic or asymptotic dampening rather than locking hard against a wall:

\[
d_{\text{clamped}} = x_{\text{max}} + \frac{(x - x_{\text{max}}) \cdot c}{(x - x_{\text{max}}) + c}
\]
*Where \(c \approx 0.55 – 0.65\) is the resistance constant.*

```typescript
function applyRubberBanding(delta: number, limit: number, constant = 0.55): number {
  if (delta <= limit) return delta;
  const overscroll = delta - limit;
  return limit + (overscroll * constant) / (overscroll + constant);
}
```

---

## 4. Swipe-to-Dismiss Thresholds & Resolution

When evaluating whether a swipe gesture completes or springs back:

```
                          DISMISS EVALUATION ENGINE
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
[ Distance Threshold Met? ]                          [ Flick Velocity Met? ]
  • Drag offset > 100px (or 35% container width)        • Velocity |v| > 0.5 px/ms
           │                                                   │
           └─────────────────────────┬─────────────────────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    ▼                                 ▼
             (YES: DISMISS)                   (NO: SPRING BACK)
       Animate offscreen with velocity    Spring back to initial (x=0, y=0)
       (duration: 150ms)                  (snappy spring: k=400, c=28)
```

---

## 5. Sheet & Drawer Drag Snapping

For multi-tier bottom sheets, define discrete snap points (e.g. `25%`, `50%`, `90%` viewport height):

```typescript
const snapPoints = [0.25, 0.50, 0.90];

function calculateNearestSnapPoint(currentY: number, velocityY: number, height: number): number {
  const projectedY = currentY + velocityY * 120; // 120ms inertia projection
  const projectedRatio = projectedY / height;

  // Find snap point with minimum distance to projected position
  return snapPoints.reduce((prev, curr) =>
    Math.abs(curr - projectedRatio) < Math.abs(prev - projectedRatio) ? curr : prev
  );
}
```
