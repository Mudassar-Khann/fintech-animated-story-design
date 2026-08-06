---
Authority: Supporting Knowledge
Purpose: Motion-specific review rubric, flag-on-sight triggers, and verdict formats. Cross-referenced by design-reasoning.md.
Consumers: design-reasoning.md, SKILL.md
Dependencies: None
Extension Points: Add custom motion review criteria.
---

# Motion Review Standards & Audit Protocol

This reference provides motion-specific review criteria for auditing UI motion deliverables. It is designed to be cross-referenced by the Reflection & Revision Loop in `references/design-reasoning.md` when evaluating motion-heavy code.

---

## 1. The Ten Non-Negotiable Motion Standards

1. **Zero Layout Reflows:** Motion properties MUST be restricted to GPU-safe `transform` and `opacity`. Animating `top`, `left`, `width`, or `height` is an automatic failure.
2. **Reduced Motion Parity:** `prefers-reduced-motion: reduce` must fall back to instant/opacity transitions (`10ms`), never leaving elements broken or invisible.
3. **Interruptible Interactive Springs:** Drag, swipe, and pointer tracking MUST preserve velocity and momentum on user direction change.
4. **Maximum Duration Cap:** No single UI transition may exceed `500ms`.
5. **No Unmotivated Motion:** Every animation must serve explicit feedback, spatial origin tracking, or affordance goals. Floating/looping decorative motion is banned.
6. **Stagger Delay Cap:** Per-item list stagger must not exceed `50ms`, and total sequence stagger duration must not exceed `300ms`.
7. **Consistent System Easing:** All transitions within a component hierarchy must share harmonized cubic-bezier curves or spring physics.
8. **Rubber-Banding Friction on Drag:** Drag boundaries MUST utilize asymptotic rubber-banding formulas (\(c \approx 0.55\)) rather than hard wall stops.
9. **Touch-Target Mobile Safety:** Motion shifts MUST reset to flat single-column layouts below `768px` to prevent touch-target collision.
10. **Clean Exit Unmount:** Exit transitions MUST complete cleanly (`100ms – 150ms`) without leaving orphaned DOM nodes or broken flex layouts.

---

## 2. Flag-On-Sight Motion Triggers

If any of these anti-patterns appear during code audit, issue an immediate **BLOCK** verdict:

- ❌ `transition: all 0.5s ease;` (Indiscriminate `all` property transitions layout and color simultaneously).
- ❌ `@keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } }` (Looping unmotivated float slop).
- ❌ `animate={{ width: isExpanded ? 400 : 200 }}` (Main-thread layout width animation).
- ❌ `style={{ willChange: 'transform' }}` hardcoded on every card in a static list.
- ❌ Missing `prefers-reduced-motion` media query wrapper.

---

## 3. Before / After / Why Audit Format

When delivering a motion code audit, format feedback using this template:

```markdown
### Motion Review Audit

#### 1. Code Issues Identified
- **Location:** `components/HeroCard.tsx`
- **Before:** `transition: width 300ms ease, height 300ms ease`
- **After:** `clip-path: inset(0 0 0 0)` or `transform: scale(...)`
- **Why:** Animating `width` and `height` forces 60 layout reflows per second, causing severe frame drops on mobile viewports. `clip-path` crops the container on the GPU Compositor thread.

#### 2. Verdict
- **Verdict:** [ BLOCK (Requires Revision) / APPROVE ]
```

---

## 4. Integration with `design-reasoning.md`

`review-standards.md` does NOT replace the general Reflection Loop in `references/design-reasoning.md`. Instead, when a deliverable contains complex animations, the Reflection Loop invokes these ten standards as specialized domain criteria during self-check:

```
Reflection Loop (design-reasoning.md)
  └─ Is this a motion-heavy deliverable?
       └─ YES ──> Check against Motion Review Standards (references/motion/review-standards.md)
```
