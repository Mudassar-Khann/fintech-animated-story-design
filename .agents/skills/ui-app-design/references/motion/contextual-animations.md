---
Authority: Supporting Knowledge
Purpose: Directs subtle contextual animations, icon state morphs, word-level text reveals, and DOM exits.
Consumers: SKILL.md, references/motion/*.md
Dependencies: easing-and-timing.md
Extension Points: Add custom contextual micro-reveals.
---

# Contextual Animations & Micro-Interactions

Contextual animations communicate subtle state shifts without interrupting the user's primary visual focus.

---

## 1. Icon Swaps & Toggle Morphing

When an action toggles state (e.g. Play/Pause, Hamburger/Close, Bookmark Save), animate the icon transition explicitly:

- **Rotation + Scale:** Rotate `180deg` while scaling down to `0.8` at midpoint (`100ms`), then scaling back to `1.0` (`100ms`). Total duration: `200ms`.
- **SVG Morphing:** Use `AnimatePresence` with `mode="wait"` to swap icon paths cleanly.

```tsx
<button onClick={toggleBookmark} className="p-2 rounded-lg text-slate-400 hover:text-amber-500">
  <AnimatePresence mode="wait" initial={false}>
    {isBookmarked ? (
      <motion.div
        key="filled"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 45 }}
        transition={{ duration: 0.15 }}
      >
        <BookmarkFilledIcon className="w-5 h-5 text-amber-500" />
      </motion.div>
    ) : (
      <motion.div
        key="outline"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.15 }}
      >
        <BookmarkOutlineIcon className="w-5 h-5" />
      </motion.div>
    )}
  </AnimatePresence>
</button>
```

---

## 2. Word-Level & Character-Level Text Reveals

For hero headlines or high-impact editorial statements, reveal text in word or character chunks:

- **Masked Line Wrapper:** Wrap each word in an `overflow-hidden inline-block` container.
- **Y-Translation Reveal:** Translate words from `translateY(100%)` to `translateY(0%)`.
- **Stagger:** `20ms` (`0.02s`) stagger per word.

```tsx
const headlineText = "Engineering Speed & Precision";
const words = headlineText.split(" ");

export const EditorialHeadline = () => (
  <h1 className="text-4xl font-bold tracking-tight">
    {words.map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-2 align-bottom">
        <motion.span
          className="inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.035
          }}
        >
          {word}
        </motion.span>
      </span>
    ))}
  </h1>
);
```

---

## 3. Subtle Exit & Unmount Animations

Elements exiting the DOM must fade out swiftly to prevent UI drag:

- **Exit Speed Rule:** Exits MUST be 30–50% faster than entry animations (`100ms – 150ms`).
- **Scale Out:** `scale(1.0) \(\rightarrow\) scale(0.96)`, `opacity: 1 \(\rightarrow\) 0`.
- **Layout Shift Prevention:** Use absolute positioning or layout animation (`layout`) during removal so surrounding elements collapse smoothly.

---

## 4. Numeric Counter Micro-Rolls

When displaying dynamic metrics (e.g. price change, user count, analytics score), roll the number cleanly:

- **Tabular Numerals Mandatory:** Set `font-variant-numeric: tabular-nums` to prevent width wobble.
- **Vertical Digit Roll:** Animate numbers along vertical track using `translateY`.
