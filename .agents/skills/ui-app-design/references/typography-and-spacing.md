---
Authority: Supporting Knowledge
Purpose: Provides grid, spacing, and typographic scales.
Consumers: components/*.md
Dependencies: None
Extension Points: Add custom 8pt grid edge cases.
---

# UI Typography, Type-Scales, Spacing & Responsive Grids

This reference specifies the typography scale, headline anchor font pairings, 4pt/8pt spacing tokens, responsive breakpoint grid system, and WCAG contrast requirements for UI applications.

---

## Table of Contents

1. [UI Type-Scale Mechanics](#1-ui-type-scale-mechanics)
2. [Headline Anchor Pairing Matrix](#2-headline-anchor-pairing-matrix)
3. [The 4pt / 8pt Spacing Token System](#3-the-4pt--8pt-spacing-token-system)
4. [Responsive Grid & Breakpoint Conventions](#4-responsive-grid--breakpoint-conventions)
5. [WCAG Contrast Minimums Matrix](#5-wcag-contrast-minimums-matrix)

---

## 1. UI Type-Scale Mechanics

UI typography requires strict mathematical hierarchy, line-height proportions, and font-weight distribution for maximum legibility across screen sizes.

| Role | Font Size (px / rem) | Line Height | Font Weight | Letter Spacing | Target Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 48–64px / 3–4rem | 1.1–1.15 | 700 / 800 | -0.02em | Hero headline on desktop landing pages |
| **Heading 1 (H1)** | 32–40px / 2–2.5rem | 1.2–1.25 | 700 | -0.015em | Page title, primary section header |
| **Heading 2 (H2)** | 24–28px / 1.5–1.75rem | 1.3 | 600 / 700 | -0.01em | Card section header, modal title |
| **Heading 3 (H3)** | 18–20px / 1.125–1.25rem | 1.4 | 600 | 0.0em | Sub-card header, form section title |
| **Body Primary** | 15–16px / 0.9375–1rem | 1.5–1.6 | 400 / 500 | 0.0em | Paragraph text, article copy, input text |
| **Body Small** | 13–14px / 0.8125–0.875rem| 1.4–1.5 | 400 / 500 | +0.01em | Table data cells, secondary descriptions |
| **Caption / Badge**| 11–12px / 0.6875–0.75rem| 1.3–1.4 | 500 / 600 | +0.02em | Metadata, timestamp, status badge, pill |

---

## 2. Headline Anchor Pairing Matrix

| Brand Archetype | Display / Heading Font | Body & UI Font | Monospace / Code Font | Visual Identity Signal |
| :--- | :--- | :--- | :--- | :--- |
| **Modern SaaS / Tech** | Space Grotesk / Inter | Inter / Host Grotesk | JetBrains Mono | Precision, clarity, modern developer tool |
| **Editorial Luxury** | Instrument Serif / Newsreader | Inter / Plus Jakarta Sans | Fira Code | Refined, high-end, editorial authority |
| **High Energy / Punchy**| Bricolage Grotesque | Plus Jakarta Sans | Space Mono | Expressive, startup energy, bold marketing |
| **Enterprise Utility** | IBM Plex Sans | IBM Plex Sans | IBM Plex Mono | Institutional, ultra-reliable, dense data |
| **Friendly Consumer** | Outfit / Lexend | Plus Jakarta Sans | Roboto Mono | Accessible, warm, consumer fintech / wellness |

---

## 3. The 4pt / 8pt Spacing Token System

All UI margins, paddings, gaps, and component heights must align to the 4pt/8pt grid system.

| Token Name | Value (px) | Value (rem) | Typical Component Usage |
| :--- | :--- | :--- | :--- |
| `space-0.5` | 2px | 0.125rem | Micro border offsets, badge padding adjustments |
| `space-1` | 4px | 0.25rem | Inline tag padding, icon-to-text gap |
| `space-2` | 8px | 0.5rem | Small button padding, list item vertical gap, compact input padding |
| `space-3` | 12px | 0.75rem | Standard button vertical padding, form field gap |
| `space-4` | 16px | 1.0rem | Card internal padding, standard container gutter, button horizontal padding |
| `space-6` | 24px | 1.5rem | Large card padding, modal content padding, desktop grid gap |
| `space-8` | 32px | 2.0rem | Section vertical margin, hero component padding |
| `space-12` | 48px | 3.0rem | Desktop section gap, landing page block spacing |
| `space-16` | 64px | 4.0rem | Major landing section separation |
| `space-24` | 96px | 6.0rem | Hero vertical padding (desktop) |
| `space-32` | 128px | 8.0rem | Maximum layout spacer |

---

## 4. Responsive Grid & Breakpoint Conventions

```
Mobile (320px - 480px)   ──> 1 Column Grid | 16px Outer Margin | Touch target >= 44x44px
Tablet (768px - 1023px)  ──> 6 Column Grid | 24px Outer Margin | 16px Gutter
Desktop (1024px - 1279px)──> 12 Column Grid| 32px Outer Margin | 24px Gutter (Max Container 1140px)
Widescreen (1280px - 1439px)──> 12 Column Grid| 40px Outer Margin | 24px Gutter (Max Container 1280px)
Ultra-Wide (1440px+)     ──> 12 Column Grid| Centered Auto Margin (Max Container 1440px)
```

---

## 5. WCAG Contrast Minimums Matrix

All UI components must meet or exceed WCAG 2.1 contrast ratios:

| Target Element | WCAG AA Requirement | WCAG AAA Requirement | Verification Method |
| :--- | :--- | :--- | :--- |
| **Normal Body Text (<18pt)** | \(\ge 4.5:1\) | \(\ge 7:1\) | Contrast Ratio formula against immediate parent background hex |
| **Large Text (\(\ge 18\text{pt}\) or \(\ge 14\text{pt}\) bold)** | \(\ge 3:1\) | \(\ge 4.5:1\) | Contrast Ratio check |
| **UI Components & Icons** | \(\ge 3:1\) | \(\ge 4.5:1\) | Active border, focus ring, button background contrast against canvas |
| **Disabled Elements** | Exempt (No minimum) | Exempt | Set to 2.5:1 – 3.0:1 for visual clarity without competing with active elements |

---

## 6. AI Default Typography Bias Correction

1. **Serif Discipline & The "Creative Brief = Serif" Reflex Anti-Pattern:**
   * **Rule:** Serif fonts are discouraged as a default display choice. The justification "feels creative/premium" is an LLM reflex anti-pattern and is NOT sufficient justification on its own.
   * **Justified Override Conditions:** Serif is justified ONLY when:
     1. The brand brief explicitly names a serif typeface, OR
     2. The aesthetic is genuinely editorial, luxury, publication, or heritage, AND the specific typeface choice can be explicitly articulated for that specific brand identity.
   * **Font Rotation Constraint:** Common serifs (e.g. *Playfair Display*, *Instrument Serif*) must not be treated as universal safe defaults. When a serif is legitimately justified, rotate through appropriate alternatives rather than reusing the same font project after project.

2. **Inter-as-Default Bias Correction:**
   * **Rule:** Defaulting to *Inter* for every interface without considering brand voice is discouraged.
   * **Override Condition:** Using *Inter* is acceptable when the brief explicitly calls for a neutral, standard feel, or is a public-sector / accessibility-first application.

3. **Mixed-Family Emphasis Hard Ban:**
   * **Rule:** Injecting a different font family into a single word of a headline (e.g., sans header with a single serif word) for "visual interest" reads as amateur rather than intentional and is banned.
   * **Execution Rule:** To emphasize a specific word in a headline, use italic or bold variants of the *same* font family.

4. **Italic Descender Clearance (Technical Rendering Rule):**
   * **Rule:** When italic display type includes a descender letter (g, j, p, q, y), tight line-height clips the tail of the character.
   * **Execution Rule:** Always apply slightly looser leading (`line-height: 1.15–1.2`) and reserved bottom padding to containers holding italic display text to prevent descender clipping.

---

## 7. Motion, GPU & Responsive Performance Rules

1. **GPU-Safe Animation Rule:**
   * **Spec:** Animate exclusively GPU-accelerated `transform` and `opacity` properties; never animate layout properties (`top`, `left`, `width`, `height`). For comprehensive GPU compositing rules, WAAPI specs, and animation performance benchmarks, see `references/motion/performance.md` and `references/motion/easing-and-timing.md`.

2. **Backdrop-Blur Hardware Constraint:**
   * **Spec:** Apply `backdrop-filter: blur(...)` ONLY to fixed or sticky elevated containers (e.g., top navigation bars, floating modal overlays, dropdown menus).
   * **Hard Ban:** NEVER apply `backdrop-filter: blur(...)` to scrolling content containers or large body sections (causes severe repaint lag and frame drops on mobile devices).

3. **Noise & Grain Overlay Constraint:**
   * **Spec:** When noise or film grain textures are utilized, implement them strictly using `pointer-events-none` fixed pseudo-elements (`::before` / `::after`) covering the viewport.
   * **Hard Ban:** Never attach noise textures or grain filters to scrolling containers.

4. **Systemic Z-Index Layering Discipline:**
   * **Spec:** Arbitrary z-index assignments (`z-50`, `z-[9999]`, `z-[99999]`) are banned. Reserve `z-index` values exclusively for named systemic layers:
     * `z-10`: Sticky headers / floating action buttons
     * `z-20`: Dropdowns / popovers
     * `z-30`: Fixed navigation bars / drawers
     * `z-40`: Modal overlays / backdrops
     * `z-50`: Tooltips / toast notifications

5. **Scroll-Driven Entry Animation Mechanics:**
   * **Spec:** Implement scroll-triggered reveal animations exclusively using `IntersectionObserver` or Framer Motion / Motion `whileInView` primitives.
   * **Hard Ban:** Never use raw `window.addEventListener('scroll', ...)` scroll event listeners for animation triggering, which forces continuous main-thread reflows.

6. **Mobile Responsive Reset for Overlapping & Rotated Layouts:**
   * **Spec:** Any layout utilizing negative-margin overlaps, 90° text rotations, or asymmetric multi-column grid spans MUST explicitly reset to a clean, single-column vertical stack with standard 8pt spacing below `768px` viewports (`md:` breakpoint).
   * **Execution Rule:** Rotations and negative-margin overlaps MUST be completely removed on mobile (not merely scaled down) to eliminate touch-target conflicts and horizontal overflow bugs.
