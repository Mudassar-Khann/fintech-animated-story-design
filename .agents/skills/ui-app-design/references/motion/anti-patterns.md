---
Authority: Supporting Knowledge
Purpose: Exhaustive catalog of UI motion anti-patterns, failure modes, and code-level fixes.
Consumers: SKILL.md, ui-troubleshooting.md, references/motion/*.md
Dependencies: None
Extension Points: Add newly discovered motion failure modes.
---

# UI Motion Anti-Patterns & Execution Pitfalls

This reference catalogs high-frequency motion mistakes made by automated coding agents and frontend developers, providing explicit code fixes for each.

---

## 1. Animating on Mount Without User Trigger

- **Anti-Pattern:** Components fading in or bouncing automatically when the page loads without explicit user interaction or scroll trigger.
- **Why It Fails:** Creates visual distraction and gives the app a generic template feel.
- **Fix:** Reserve mount animations strictly for hero entry or user-initiated view swaps.

---

## 2. Hard Stops / Rigid Walls on Drag Boundaries

- **Anti-Pattern:** Clamping a drag gesture strictly at `x = 0` or `x = 300` without boundary damping.
- **Why It Fails:** Feels like hitting a brick wall in real physical space; breaks spatial immersion.
- **Fix:** Apply asymptotic rubber-banding formulas (\(c \approx 0.55\)) beyond bounds.

---

## 3. Mixing Transform Owners

- **Anti-Pattern:** Applying CSS hover `transform: translateY(-2px)` on an element whose `transform` is simultaneously controlled by Framer Motion `style={{ x, y }}` or JS drag.
- **Why It Fails:** CSS and JS race to overwrite the DOM `transform` style property, causing flickering or transform freezing.
- **Fix:** Consolidate transform ownership into a single engine (e.g. Framer Motion `whileHover={{ y: -2 }}`).

---

## 4. Animating Layout Properties (`width`, `height`, `left`, `top`)

- **Anti-Pattern:** `transition: width 300ms, height 300ms` during card expansion or sidebar toggle.
- **Why It Fails:** Triggers browser layout reflow on every single frame (60–120 reflows/sec), causing jank and battery drain on mobile.
- **Fix:** Animate GPU `transform: scale(...)` or crop viewports using `clip-path: inset(...)`.

---

## 5. Unbuffered `prefers-reduced-motion` Invisibility

- **Anti-Pattern:** Wrapping animations in `@media (prefers-reduced-motion)` and setting `display: none` or `opacity: 0`.
- **Why It Fails:** Hides interactive content completely from users who have reduced motion enabled.
- **Fix:** Fall back to instant `opacity` transitions (`10ms`), preserving full accessibility and content visibility.

---

## 6. Excessive Stagger Delays

- **Anti-Pattern:** Setting list stagger delay to `150ms` per item across a 10-item list (total animation time = `1.5s`).
- **Why It Fails:** Forces users to wait over a second just to view list data.
- **Fix:** Cap item stagger delay at `40ms` and total sequence duration at `300ms`.

---

## 7. Linear Easing on Spatial Trajectories

- **Anti-Pattern:** `transition: transform 300ms linear` for elements moving across the screen.
- **Why It Fails:** Linear motion does not exist in physical reality. Elements appear robotic and harsh.
- **Fix:** Always use decelerating ease-out curves (`cubic-bezier(0.16, 1, 0.3, 1)`) or springs.

---

## 8. Non-Interruptible Springs Blocking User Input

- **Anti-Pattern:** Disabling pointer events during spring transitions or failing to inherit momentum on direction change.
- **Why It Fails:** Makes the interface feel sluggish and unresponsive to rapid user commands.
- **Fix:** Ensure springs inherit current velocity (\(v_0\)) when interrupted mid-flight.

---

## 9. Oversized Backdrop Blur on Scrolling Content

- **Anti-Pattern:** Applying `backdrop-filter: blur(16px)` to every card in a long scrolling list.
- **Why It Fails:** Creates massive GPU fill-rate bottlenecks and frame drops during scrolling.
- **Fix:** Restrict `backdrop-filter` strictly to fixed/sticky elevated headers and modals.

---

## 10. Floating Particles & Decorative Motion Noise

- **Anti-Pattern:** Adding floating background ambient particles, rotating glowing circles, or continuous pulsing borders behind text.
- **Why It Fails:** Violates the Restraint vs. Excess principle (`taste-and-judgment-ui.md`). Distracts from readability.
- **Fix:** Remove decorative motion noise. Let typography and layout grid drive authority.
