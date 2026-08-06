---
Authority: Supporting Knowledge
Purpose: Defines color harmonies and functional color psychology.
Consumers: ui-decision-tree.md, components/*.md
Dependencies: None
Extension Points: Add accessible contrast formulas or new harmony types.
---

# UI Color Theory, Harmonies, & Psychology Matrix

This reference documents color theory mechanics, traditional and non-classical color harmonies, pairwise-gap validation rules, and the UI Color Psychology Matrix for interface design systems.

---

## Table of Contents

1. [The 6 Classical Harmonies in UI Context](#1-the-6-classical-harmonies-in-ui-context)
2. [Honest Non-Classical Fallbacks](#2-honest-non-classical-fallbacks)
3. [Full Pairwise-Gap Checking Rule](#3-full-pairwise-gap-checking-rule)
4. [UI Color Psychology & Action Matrix](#4-ui-color-psychology--action-matrix)
5. [Light & Dark Mode Token Scaling](#5-light--dark-mode-token-scaling)

---

## 1. The 6 Classical Harmonies in UI Context

When constructing a UI design system palette, color harmonies establish visual hierarchy, contrast balance, and brand identity across interface surfaces.

### 1. Monochromatic
* **Structure:** Single hue angle (\(\theta\)) with systematic steps in lightness (\(L\)) and chroma (\(C\)).
* **UI Application:** Minimalist SaaS interfaces, focused workflows, dark mode IDEs.
* **Token Map:**
  * Base Background: Low lightness (\(L = 10\%\)) or ultra-light (\(L = 98\%\)).
  * Surface Card: 4–6% lightness step from background.
  * Primary Accent: Peak chroma at 50–60% lightness.
  * Text Primary: 85–95% contrast delta from surface.

### 2. Analogous
* **Structure:** 3 adjacent hues spanning 30°–60° on the color wheel (e.g., Deep Blue \(\rightarrow\) Indigo \(\rightarrow\) Violet).
* **UI Application:** Rich consumer apps, creative tools, seamless hero background gradients.
* **UI Rule:** Assign one hue as dominant background/surface, the second as secondary container fill, and the third as active interactive state.

### 3. Complementary
* **Structure:** 2 opposite hues (180° separation).
* **UI Application:** High-conversion landing pages, e-commerce checkout flows, urgent action prompts.
* **UI Rule:** Dominant hue covers 80–90% of surface area (backgrounds, text, subtle borders). Complementary hue reserved exclusively for primary CTAs and high-priority alerts.

### 4. Split-Complementary
* **Structure:** 1 base hue paired with 2 hues adjacent to its complement (\(180° \pm 30°\)).
* **UI Application:** Complex dashboards with multi-metric data displays.
* **UI Rule:** Base hue drives main app frame; the split complements differentiate primary actions vs status indicators without harsh dual-complement visual tension.

### 5. Triadic
* **Structure:** 3 hues evenly spaced at 120° intervals.
* **UI Application:** Educational platforms, multi-tier pricing grids, gamified interfaces.
* **UI Rule:** Strict 60-30-10 distribution. 60% neutral/tinted surface, 30% secondary brand structure, 10% high-chroma triadic accent.

### 6. Tetradic (Double-Complementary)
* **Structure:** 4 hues arranged into 2 complementary pairs (e.g., 60° separation between pairs).
* **UI Application:** Enterprise software with rich multi-tag navigation, complex data visualization, category-heavy portals.
* **UI Rule:** Never apply all four hues at equal lightness/chroma. De-saturate three hues into subtle background badges/labels; keep only one hue saturated for interactive focus.

---

## 2. Honest Non-Classical Fallbacks

When classical chromatic harmonies create visual noise or fail contrast requirements, default to these engineered fallbacks:

### Neutral-Dominant + Single Brand Accent
* **Structure:** 95% neutral grayscale (cool, warm, or slate neutral scale) + 5% singular high-chroma brand accent.
* **UI Application:** Modern productivity tools (e.g., Notion, Linear, GitHub).
* **Benefit:** Maximum readability, zero color fatigue, hyper-focused CTA visibility.

### Dual-Tone Tonal Gradient
* **Structure:** Two shades of the same color family transitioning smoothly across container borders or hero backdrops.
* **UI Application:** Modern cards, hero sections, glassmorphic headers.

---

## 3. Full Pairwise-Gap Checking Rule

Never declare a UI color palette valid until **every pairwise gap** across adjacent tokens is verified for both contrast ratio and perceptual separation.

### The Pairwise Checking Workflow
1. **Background \(\leftrightarrow\) Surface Gap:** Minimum 4% lightness delta (\(\Delta L \ge 4\%\)) or distinct border token.
2. **Surface \(\leftrightarrow\) Text Primary Gap:** Must meet WCAG AA minimum (\(\ge 4.5:1\)) for body text, (\(\ge 3:1\)) for bold headers (\(\ge 18\text{pt}\)).
3. **Surface \(\leftrightarrow\) Text Secondary Gap:** Must meet WCAG AA minimum (\(\ge 4.5:1\)) while remaining perceptually distinct from Text Primary (\(\Delta L \ge 15\%\)).
4. **Primary CTA Background \(\leftrightarrow\) CTA Text Gap:** Minimum \(4.5:1\) contrast ratio.
5. **Interactive Element \(\leftrightarrow\) Adjacent Interactive Element Gap:** Interactive elements (buttons, inputs, active tabs) must have a perceptual hue or lightness delta of \(\Delta E_{ab} \ge 12\) from non-interactive containers.

---

## 4. UI Color Psychology & Action Matrix

Color in UI design is functional feedback, directing attention and conveying system state.

| UI Color Role | Emotional & Functional Signal | Recommended Hue Range | Typical Interface Usage |
| :--- | :--- | :--- | :--- |
| **Primary CTA / Brand Accent** | Energy, intent, primary action, completion | Electric Blue (210°–230°), Emerald (150°–165°), Deep Violet (260°–280°) | Main conversion buttons, active navigation indicator, key hero action |
| **Secondary Action** | Auxiliary path, optional step, neutral navigation | Muted Slate, Translucent Neutral (\(10\%\) opacity fill) | "Learn More", "Cancel", secondary filter pills, ghost buttons |
| **Success / Positive State** | Completion, valid input, active service, growth | Emerald / Forest Green (\(L = 40\text{–}50\%\), \(C = \text{High}\)) | Form field valid checkmark, positive metric (+14%), active server badge |
| **Warning / Caution** | Pending action, threshold alert, non-blocking issue | Amber / Cadmium Yellow (\(L = 50\text{–}60\%\)) | Unsaved changes banner, usage at 85% limit, yellow status dot |
| **Destructive / Error** | Critical failure, dangerous action, invalid input | Crimson / Coral Red (355°–10°) | Delete confirmation modal, inline form error, failed payment banner |
| **Info / System State** | Telemetry update, background process, neutral hint | Sapphire / Cyan Blue (195°–215°) | Tooltip explanation, system maintenance notice, blue unread dot |
---
Authority: Supporting Knowledge
Purpose: Defines color harmonies and functional color psychology.
Consumers: ui-decision-tree.md, components/*.md
Dependencies: None
Extension Points: Add accessible contrast formulas or new harmony types.
---

# UI Color Theory, Harmonies, & Psychology Matrix

This reference documents color theory mechanics, traditional and non-classical color harmonies, pairwise-gap validation rules, and the UI Color Psychology Matrix for interface design systems.

---

## Table of Contents

1. [The 6 Classical Harmonies in UI Context](#1-the-6-classical-harmonies-in-ui-context)
2. [Honest Non-Classical Fallbacks](#2-honest-non-classical-fallbacks)
3. [Full Pairwise-Gap Checking Rule](#3-full-pairwise-gap-checking-rule)
4. [UI Color Psychology & Action Matrix](#4-ui-color-psychology--action-matrix)
5. [Light & Dark Mode Token Scaling](#5-light--dark-mode-token-scaling)
6. [Named Reference Palettes](#6-named-reference-palettes)
7. [AI Default Color Bias Correction](#7-ai-default-color-bias-correction)

---

## 1. The 6 Classical Harmonies in UI Context

When constructing a UI design system palette, color harmonies establish visual hierarchy, contrast balance, and brand identity across interface surfaces.

### 1. Monochromatic
* **Structure:** Single hue angle (\(\theta\)) with systematic steps in lightness (\(L\)) and chroma (\(C\)).
* **UI Application:** Minimalist SaaS interfaces, focused workflows, dark mode IDEs.
* **Token Map:**
  * Base Background: Low lightness (\(L = 10\%\)) or ultra-light (\(L = 98\%\)).
  * Surface Card: 4–6% lightness step from background.
  * Primary Accent: Peak chroma at 50–60% lightness.
  * Text Primary: 85–95% contrast delta from surface.

### 2. Analogous
* **Structure:** 3 adjacent hues spanning 30°–60° on the color wheel (e.g., Deep Blue \(\rightarrow\) Indigo \(\rightarrow\) Violet).
* **UI Application:** Rich consumer apps, creative tools, seamless hero background gradients.
* **UI Rule:** Assign one hue as dominant background/surface, the second as secondary container fill, and the third as active interactive state.

### 3. Complementary
* **Structure:** 2 opposite hues (180° separation).
* **UI Application:** High-conversion landing pages, e-commerce checkout flows, urgent action prompts.
* **UI Rule:** Dominant hue covers 80–90% of surface area (backgrounds, text, subtle borders). Complementary hue reserved exclusively for primary CTAs and high-priority alerts.

### 4. Split-Complementary
* **Structure:** 1 base hue paired with 2 hues adjacent to its complement (\(180° \pm 30°\)).
* **UI Application:** Complex dashboards with multi-metric data displays.
* **UI Rule:** Base hue drives main app frame; the split complements differentiate primary actions vs status indicators without harsh dual-complement visual tension.

### 5. Triadic
* **Structure:** 3 hues evenly spaced at 120° intervals.
* **UI Application:** Educational platforms, multi-tier pricing grids, gamified interfaces.
* **UI Rule:** Strict 60-30-10 distribution. 60% neutral/tinted surface, 30% secondary brand structure, 10% high-chroma triadic accent.

### 6. Tetradic (Double-Complementary)
* **Structure:** 4 hues arranged into 2 complementary pairs (e.g., 60° separation between pairs).
* **UI Application:** Enterprise software with rich multi-tag navigation, complex data visualization, category-heavy portals.
* **UI Rule:** Never apply all four hues at equal lightness/chroma. De-saturate three hues into subtle background badges/labels; keep only one hue saturated for interactive focus.

---

## 2. Honest Non-Classical Fallbacks

When classical chromatic harmonies create visual noise or fail contrast requirements, default to these engineered fallbacks:

### Neutral-Dominant + Single Brand Accent
* **Structure:** 95% neutral grayscale (cool, warm, or slate neutral scale) + 5% singular high-chroma brand accent.
* **UI Application:** Modern productivity tools (e.g., Notion, Linear, GitHub).
* **Benefit:** Maximum readability, zero color fatigue, hyper-focused CTA visibility.

### Dual-Tone Tonal Gradient
* **Structure:** Two shades of the same color family transitioning smoothly across container borders or hero backdrops.
* **UI Application:** Modern cards, hero sections, glassmorphic headers.

---

## 3. Full Pairwise-Gap Checking Rule

Never declare a UI color palette valid until **every pairwise gap** across adjacent tokens is verified for both contrast ratio and perceptual separation.

### The Pairwise Checking Workflow
1. **Background \(\leftrightarrow\) Surface Gap:** Minimum 4% lightness delta (\(\Delta L \ge 4\%\)) or distinct border token.
2. **Surface \(\leftrightarrow\) Text Primary Gap:** Must meet WCAG AA minimum (\(\ge 4.5:1\)) for body text, (\(\ge 3:1\)) for bold headers (\(\ge 18\text{pt}\)).
3. **Surface \(\leftrightarrow\) Text Secondary Gap:** Must meet WCAG AA minimum (\(\ge 4.5:1\)) while remaining perceptually distinct from Text Primary (\(\Delta L \ge 15\%\)).
4. **Primary CTA Background \(\leftrightarrow\) CTA Text Gap:** Minimum \(4.5:1\) contrast ratio.
5. **Interactive Element \(\leftrightarrow\) Adjacent Interactive Element Gap:** Interactive elements (buttons, inputs, active tabs) must have a perceptual hue or lightness delta of \(\Delta E_{ab} \ge 12\) from non-interactive containers.

---

## 4. UI Color Psychology & Action Matrix

Color in UI design is functional feedback, directing attention and conveying system state.

| UI Color Role | Emotional & Functional Signal | Recommended Hue Range | Typical Interface Usage |
| :--- | :--- | :--- | :--- |
| **Primary CTA / Brand Accent** | Energy, intent, primary action, completion | Electric Blue (210°–230°), Emerald (150°–165°), Deep Violet (260°–280°) | Main conversion buttons, active navigation indicator, key hero action |
| **Secondary Action** | Auxiliary path, optional step, neutral navigation | Muted Slate, Translucent Neutral (\(10\%\) opacity fill) | "Learn More", "Cancel", secondary filter pills, ghost buttons |
| **Success / Positive State** | Completion, valid input, active service, growth | Emerald / Forest Green (\(L = 40\text{–}50\%\), \(C = \text{High}\)) | Form field valid checkmark, positive metric (+14%), active server badge |
| **Warning / Caution** | Pending action, threshold alert, non-blocking issue | Amber / Cadmium Yellow (\(L = 50\text{–}60\%\)) | Unsaved changes banner, usage at 85% limit, yellow status dot |
| **Destructive / Error** | Critical failure, dangerous action, invalid input | Crimson / Coral Red (355°–10°) | Delete confirmation modal, inline form error, failed payment banner |
| **Info / System State** | Telemetry update, background process, neutral hint | Sapphire / Cyan Blue (195°–215°) | Tooltip explanation, system maintenance notice, blue unread dot |
| **Surface Elevations** | Spatial depth, layering, modal hierarchy | Neutral Gray / Tinted Slate Scale | Layer 0 (App Canvas), Layer 1 (Cards), Layer 2 (Dropdowns), Layer 3 (Modals) |

---

## 5. Light & Dark Mode Token Scaling

UI palettes must invert systematically between light and dark modes while preserving brand identity and WCAG compliance.

```
LIGHT MODE:
Canvas: #F8FAFC (L=98%)  ──> Surface: #FFFFFF (L=100%) ──> Border: #E2E8F0 (L=91%)
Text Primary: #0F172A (L=11%) ──> Text Muted: #64748B (L=45%)

DARK MODE:
Canvas: #0B0F17 (L=7%)   ──> Surface: #1E293B (L=17%)  ──> Border: #334155 (L=27%)
Text Primary: #F8FAFC (L=98%) ──> Text Muted: #94A3B8 (L=68%)
```

---

## 6. Named Reference Palettes

Concrete palette instances extracted from reference visual art and design campaigns, mapped to their nearest classical harmony and evaluated for Pairwise-Gap UI compliance.

1. **Empty / Japan Fish:** `#11284D`, `#264B6F`, `#101A2C`, `#F4EFDF`, `#D5B370`
   * **Mood:** Deep aquatic indigo paired with warm parchment and gold leaf accents. High luxury, serene editorial tone.
   * **Harmony Mapping:** Near-Complementary (Deep Indigo vs Warm Gold accent).
   * **UI Caution:** High contrast between `#11284D` background and `#F4EFDF` text; `#D5B370` gold is ideal for primary CTAs or badges.
2. **Cotton / Cherry Red / Maroon / Noir Black:** `#EDEBDD` (Cotton), `#810100` (Cherry Red), `#630000` (Maroon), `#1B1717` (Noir Black)
   * **Mood:** High-dramatic, tension-filled editorial red and dark charcoal.
   * **Harmony Mapping:** Split-Complementary / Monochromatic Warm Red with Cream Canvas.
   * **UI Caution (Pairwise-Gap Risk):** `#810100` (Cherry Red) and `#630000` (Maroon) have a very tight lightness delta (\(\Delta L < 8\%\)). Fails text-on-surface accessibility if used as adjacent container/text tokens; use `#EDEBDD` (Cotton) as the sole text color over dark red containers.
3. **Tanzania (Mount Kilimanjaro):** `#3D3D3D` (Volcanic Slag), `#EBECEE` (Alpine Ice), `#C4E326` (Lichen Green), `#8A8C8F` (Summit Stone)
   * **Mood:** Organic alpine volcanic neutral scale with a high-chroma electric lime accent.
   * **Harmony Mapping:** Neutral-Dominant + Single Brand Accent (Fallback 1).
   * **UI Application:** Excellent for modern SaaS dashboards and developer tooling; `#C4E326` provides hyper-visible CTA focal points over `#3D3D3D` cards.

---

## 7. AI Default Color Bias Correction

1. **THE LILA RULE (Anti-Purple Default):**
   * **Rule:** AI-purple/blue-glow gradients and automatic purple button glows are discouraged as a default choice. Prefer neutral bases (zinc/slate/stone) with one high-contrast singular accent (emerald, electric blue, deep rose, burnt orange).
   * **Override Condition:** The brand or project brief explicitly calls for purple/violet. In that case, execute with a fully harmonized, restrained palette built around it, rather than defaulting to generic gradient slop.

2. **Premium-Consumer Palette Bias Correction:**
   * **Rule:** For premium-consumer briefs (cookware, wellness, artisan, luxury, heritage), the LLM default of warm beige/cream + brass/clay/oxblood + espresso-dark text is over-represented to the point of erasing brand distinctiveness. Proactively rotate through these distinctive alternatives instead of defaulting to warm-beige:
     * *Cold Luxury:* Silver-grey (`#E5E7EB`) + Chrome (`#9CA3AF`) + Smoke (`#1F2937`)
     * *Forest:* Deep green (`#14532D`) + Bone (`#F5F5F4`) + Amber (`#D97706`)
     * *Black & Tan:* Deep charcoal (`#18181B`) + Warm tan (`#D97706` / `#C2410C`)
     * *Cobalt & Cream:* Rich cobalt (`#1D4ED8`) + Cream canvas (`#FEF3C7`)
     * *Terracotta & Slate:* Rust terracotta (`#C2410C`) + Cool slate (`#334155`)
     * *Olive, Brick & Paper:* Olive (`#3F6212`) + Brick red (`#991B1B`) + Muted paper (`#FAFAF9`)
     * *Pure Monochrome + Single Pop:* Stark black/white canvas + single high-chroma pop (e.g., `#EF4444` or `#10B981`)
   * **Override Condition:** The brand brief explicitly specifies warm beige/cream/oxblood, or the identity is genuinely vintage/artisan and that specific palette is explicitly justified — not defaulted to simply because of the domain category.

3. **Color Consistency Lock:**
   * **Rule:** Once a primary brand accent is selected for a project, it MUST be applied consistently across all sections of that project. Accent drift between sections (e.g., a warm-grey interface suddenly introducing an unmotivated blue CTA three sections down) is banned.
