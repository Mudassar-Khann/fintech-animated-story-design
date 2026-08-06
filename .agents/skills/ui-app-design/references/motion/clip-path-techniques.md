---
Authority: Supporting Knowledge
Purpose: Specs for hardware-accelerated clip-path reveals, shape morphs, hold-to-delete fills, and comparison sliders.
Consumers: SKILL.md, references/motion/*.md
Dependencies: None
Extension Points: Add custom clip-path SVG paths.
---

# Clip-Path Motion & Reveal Techniques

CSS `clip-path` enables high-performance shape reveals, image comparisons, and morphing transitions without affecting layout flow or triggering GPU paint bottlenecks.

---

## 1. Circular Expanding Reveal

Reveals content outward from cursor click coordinates:

```css
.reveal-container {
  clip-path: circle(0% at var(--click-x, 50%) var(--click-y, 50%));
  transition: clip-path 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-container.active {
  clip-path: circle(150% at var(--click-x, 50%) var(--click-y, 50%));
}
```

*Use Case:* Dark/Light mode theme toggle origin reveal, expand card modal from click point.

---

## 2. Sliding Inset Rectangle Reveal (Tab Cutouts & Page Wipes)

Reveals container from left-to-right or top-to-bottom without squishing child elements:

```css
/* 0% reveal (fully hidden from right) */
.tab-content {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* 100% reveal (fully visible) */
.tab-content.visible {
  clip-path: inset(0 0 0 0);
}
```

*Advantage:* Unlike `width: 0% -> 100%` (which forces text to reflow and wrap continuously during transition), `clip-path: inset` crops the viewport smoothly while children remain statically laid out.

---

## 3. Hold-to-Delete Radial Progress Ring

For destructive actions requiring confirmation (Hold 1.5s to delete):

```tsx
export const HoldToDeleteButton = ({ onDelete }: { onDelete: () => void }) => {
  const [holding, setHolding] = useState(false);

  return (
    <button
      onMouseDown={() => setHolding(true)}
      onMouseUp={() => setHolding(false)}
      onMouseLeave={() => setHolding(false)}
      className="relative px-4 py-2 bg-red-950 text-red-400 rounded-lg overflow-hidden border border-red-800"
    >
      <span className="relative z-10">Hold to Delete</span>
      <motion.div
        className="absolute inset-0 bg-red-600"
        initial={{ clip-path: "inset(0 100% 0 0)" }}
        animate={{ clipPath: holding ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        transition={{ duration: holding ? 1.5 : 0.2, ease: "linear" }}
        onAnimationComplete={() => { if (holding) onDelete(); }}
      />
    </button>
  );
};
```

---

## 4. Interactive Image Comparison Slider

Split-screen image comparison slider using dynamic inset clipping:

```tsx
export const ComparisonSlider = ({ beforeImg, afterImg }: Props) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      <img src={afterImg} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={beforeImg} className="w-full h-full object-cover" />
      </div>
      {/* Slider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPos}%` }}
      />
    </div>
  );
};
```
