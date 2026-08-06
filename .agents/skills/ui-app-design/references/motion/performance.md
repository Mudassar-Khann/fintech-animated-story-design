---
Authority: Supporting Knowledge
Purpose: Hard specifications for GPU compositing, WAAPI, will-change, and CSS variable animation pitfalls.
Consumers: SKILL.md, references/motion/*.md
Dependencies: None
Extension Points: Add engine-specific profiling techniques.
---

# Motion Performance & GPU Optimization

High-frame-rate UI motion (60fps / 120fps) requires keeping animation off the main thread. This reference details browser rendering mechanics and compositor optimization rules.

---

## 1. Compositor-Only Thread Properties

The browser pipeline consists of **Recalculate Style \(\rightarrow\) Layout \(\rightarrow\) Paint \(\rightarrow\) Composite**.

Only TWO CSS properties skip Layout and Paint entirely, executing on the GPU Compositor thread:

1. **`transform`** (`translate3d`, `scale`, `rotate`)
2. **`opacity`** (`opacity: 0 \(\rightarrow\) 1`)

*Filter Exception:* `filter: drop-shadow(...)` or `backdrop-filter: blur(...)` execute on compositor in modern engines, but trigger heavy GPU texture allocations.

### Hard Reflow Properties (BANNED FROM ANIMATION)
Never animate these properties during transitions:
`top`, `left`, `right`, `bottom`, `width`, `height`, `margin`, `padding`, `border-width`, `font-size`, `flex-basis`.

---

## 2. WAAPI vs. CSS Transitions vs. JavaScript Frameworks

| Animation Engine | Performance Profile | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **WAAPI (Web Animations API)** | GPU-Offloaded Compositor | Native JS API, zero bundle overhead, direct access to web animation timing | Requires boilerplate for spring physics |
| **CSS Transitions / Keyframes** | GPU-Offloaded Compositor | Lightest footprint, hardware accelerated by default | Non-interruptible, awkward spring curve mapping |
| **Framer Motion / Motion** | Hybrid JS-Driven + WAAPI | Interruptible springs, `layoutId`, gesture tracking | ~30kb JS bundle, main thread JS calculation on complex trees |

---

## 3. The `will-change` Discipline

`will-change` instructs the browser to promote an element to its own GPU graphics layer before animation begins.

### Correct Usage Protocol
```typescript
// 1. Promote to GPU layer ONLY when active
function onAnimationStart(element: HTMLElement) {
  element.style.willChange = 'transform, opacity';
}

// 2. MUST REMOVE GPU layer immediately upon completion
function onAnimationEnd(element: HTMLElement) {
  element.style.willChange = 'auto';
}
```

*Hard Ban:* `will-change: transform` MUST NOT be applied globally or left attached to non-animating static elements (`* { will-change: transform; }`). Excess GPU layer promotion exhausts VRAM and degrades system performance.

---

## 4. The CSS Variable Animation Performance Trap

Animating custom CSS variables (`var(--x)`) directly causes continuous main-thread Style Recalculation and Layout Reflows unless explicitly registered with `@property`:

### BROKEN (Triggers Layout Reflow Every Frame)
```css
.card {
  --my-pos: 0px;
  transform: translateY(var(--my-pos));
  transition: --my-pos 300ms; /* BAD: Browser treats as un-optimized string */
}
```

### PROPER WAAPI / `@property` FIX
```css
@property --my-pos {
  syntax: '<length>';
  inherits: false;
  initial-value: 0px;
}

.card {
  transition: --my-pos 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
```
*Best Practice:* Prefer direct `transform: translateY(...)` over custom variable transitions whenever possible.
