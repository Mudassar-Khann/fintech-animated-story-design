---
Authority: Supporting Knowledge
Purpose: Defines qualitative UI principles and anti-patterns.
Consumers: All UI generation protocols
Dependencies: None
Extension Points: Add new UI slop anti-patterns to ban.
---

# UI Taste & Judgment Layer

This reference documents qualitative principles of visual judgment, design ethics, anti-pattern detection, and creative direction tailored explicitly for user interface (UI) and product design.

---

## Table of Contents

1. [The 6 UI Taste & Judgment Principles](#1-the-6-ui-taste--judgment-principles)
2. [Banned UI Slop & Anti-Patterns](#2-banned-ui-slop--anti-patterns)
3. [The UI 10-Year Durability Test](#3-the-ui-10-year-durability-test)

---

## 1. The 6 UI Taste & Judgment Principles

### 1. Restraint vs. Excess in UI
* **Core Principle:** Interface authority is defined by what is excluded. Competing drop shadows, multi-colored neon glows, floating decorative particles, and redundant badge overlays create visual chaos and user fatigue.
* **Evaluation Test:** *The De-Clutter Test* — Can a visual element (glowing border, background noise, decorative icon) be removed without reducing user comprehension or task completion velocity? If yes, cut it.
* **Worked Scenario:**
  * **Brief:** A high-volume SaaS analytics dashboard ("MetricPulse").
  * **Wrong Choice:** Adding animated rainbow gradients around every metric card, glowing neon charts, and 3D floating icons.
  * **Better Choice:** Neutral slate background (`#0F172A`), clean single-pixel borders (`#1E293B`), crisp high-contrast numbers, and a single emerald accent color for positive trend telemetry.

### 2. Timelessness vs. Trend-Chasing
* **Core Principle:** Distinguish between UI structures built on fundamental human usability (clear visual hierarchy, contrast, spatial consistency) versus short-lived visual trends (heavy glassmorphism fatigue, hard neumorphism, bloated 3D hero illustrations).
* **Evaluation Test:** *The 10-Year UI Test* — Will this navigation and layout structure remain intuitive and clean 10 years from now, or will it look like dated visual hype?
* **Worked Scenario:**
  * **Brief:** Primary banking app dashboard.
  * **Wrong Choice:** Wrapping every balance card in translucent frosted glass with heavy background blurs and neon glowing borders that degrade readability in bright light.
  * **Better Choice:** Crisp, solid card containers with high WCAG contrast text, clear typography scale, and subtle 1px border separation.

### 3. Naming the Gap Between Stated Request and Actual Need
* **Core Principle:** Clients frequently request UI symptoms ("Make every button bright red", "Add a pop-up modal on exit", "Make the hero section explode with animation") that actively destroy their primary strategic goals (trust, conversion, low bounce rate).
* **Evaluation Test:** *The Usability Alignment Check* — Does the requested UI treatment increase task completion and trust, or does it add friction and anxiety?
* **Worked Scenario:**
  * **Brief:** Enterprise B2B software requesting a "high-energy, flashy landing page with auto-playing video and floating particle bursts."
  * **Better Choice:** Name the tension explicitly: *"Flashy auto-playing videos and particle bursts distract prospective enterprise buyers who are seeking security, speed, and clear pricing."* Deliver an authoritative, high-density feature breakdown with real product screenshots and explicit security compliance trust badges.

### 4. Coherence Over Cleverness
* **Core Principle:** A predictable, standards-compliant navigation and mental model beats three "clever" non-standard interaction experiments crammed into the same screen (e.g., hidden radial menus, non-standard swipe gestures for web forms).
* **Evaluation Test:** *The Single-Sentence Mental Model Test* — Can a first-time user describe how to navigate the app in one sentence?
* **Worked Scenario:**
  * **Brief:** E-commerce mobile web store header.
  * **Wrong Choice:** Hiding search and cart inside a floating custom 3D floating orb menu that requires a long-press gesture to expand.
  * **Better Choice:** Standard sticky header with top-right cart badge, prominent search bar, and clean drawer trigger.

### 5. Cultural & Contextual Honesty
* **Core Principle:** Interface aesthetics must match the operational context of the user. A financial trading terminal demands high visual density and compact spatial padding; a meditation app demands generous whitespace and calming tonal palettes.
* **Evaluation Test:** *Contextual Fit Test* — Is this visual layout optimized for the user's cognitive environment?

### 6. Honest Persuasion vs. Dark Patterns (UI Ethics)
* **Core Principle:** UI triggers (social proof, urgency, scarcity) are legitimate when communicating genuine facts (e.g., "Only 3 seats remaining in this workshop", "4.9/5 rating based on 1,200 verified reviews"). They become unethical dark patterns when manufactured falsely to manipulate users.
* **Evaluation Test:** *The Veracity Test* — Is the urgency, scarcity, or social proof based on real system state data?

---

## 2. Banned UI Slop & Anti-Patterns

### Standard Dark & Copy Anti-Patterns
1. **Fake Urgency Slop:** Manufactured countdown timers that reset on page refresh.
2. **Fake Social Proof Slop:** Generated notification popups ("John from Texas just bought Product X 2 seconds ago!").
3. **Copy Slop:** Empty hype headlines ("Revolutionize Your Workflow with Next-Gen AI Synergies") that fail to state what the app actually does.
4. **Unmotivated UI Lighting:** Heavy neon outer glows applied to static non-interactive text or structural dividers.
5. **Sneaky Opt-Outs:** Pre-checked newsletters or hidden subscription renewal checkboxes during checkout.

### AI Production Tells
1. **Version/Status Labels in Hero:** Version or status badges in the hero section (`v0.6`, `BETA`, `EARLY ACCESS`) are banned by default. *Override:* The brief is explicitly about launch or preview status.
2. **Section-Number Eyebrows:** Numeric eyebrow prefixing (`00 / INDEX`, `002 · Featured`) is banned. Name the section topic in plain language instead.
3. **Middle-Dot Rationing:** The middle-dot (`·`) is rationed to a maximum of 1 per line. It must not be used as a default universal text separator.
4. **Decorative Status Dots:** Glowing/pulsing status dots on nav, list, or badge items are banned by default. *Override:* The dot conveys real, live semantic state (e.g., active server telemetry) and is used sparingly.
5. **Em-Dash & En-Dash Separator Hard Ban:** Em-dashes (`—`) and en-dashes used as separators (`–`) are banned outright with no override. Use regular hyphens (`-`) only.
6. **`<br>`-Broken & Italicized Headline Splits:** Inserting line breaks (`<br>`) paired with italicized word splits in headlines is banned by default. *Override:* The brief explicitly calls for that specific form of typographic drama.
7. **Vertical Rotated Text:** 90°-rotated vertical margin text is banned by default. *Override:* The brief is explicitly for an agency, Awwwards-style site, or experimental portfolio where it serves a genuine compositional purpose.
8. **Div-Based Fake Product UI Screenshots:** Assembling fake product UI previews or pseudo-dashboards using nested CSS `div` elements in the hero is banned outright. Use real product screenshots, generated imagery, or skip the preview altogether.
9. **Poetic Section Labels:** Poetic or pseudo-literary section headers ("Quietly trusted by," "Field notes," "On our desks") are banned. Use plain, functional, descriptive labels instead.
10. **Locale/Time/Weather Header Strips:** Metadata strips displaying local time, coordinates, or weather in headers or footers are banned by default. *Override:* The brief is genuinely about a distributed remote team, travel brand, or physical venue location.
11. **Scroll Cues:** Explicit scroll prompts (`Scroll ↓`, animated mouse-wheel icons) are banned outright. Users understand standard browser scrolling.
12. **Generic Step Labels:** Abstract phase labels ("Stage 1/2/3", "Phase 01/02/03") are banned. Use concrete verb-noun content as the step label.
13. **Photo-Overlaid Pills/Tags:** Badges, tags, or pills placed directly over photo surfaces are banned. Place captions below the image or let the photo stand cleanly alone.
14. **Fake Photo-Credit Captions:** Decorative photo credits on stock or placeholder images are banned. Credits are legitimate only when attributing a real photographer for an authentic photograph.
15. **Hero Bottom Decoration Text Strips:** Text strings placed at the hero bottom (`BRAND. MOTION. SPATIAL.`) are banned by default. *Override:* The element is a functional sticky navigation bar or real live status indicator.
16. **Floating Corner Sub-Text:** Floating top-right sub-text with no structural alignment to the main section is banned. Restructure into a formal two-column header grid or move the text beneath the primary headline.
17. **Double Border Rows:** Applying both `border-t` and `border-b` to every row of a long data list is banned. Pick a single border direction and apply it sparingly.
18. **Filled Progress Bars for Visual Comparison:** Filled-background track progress or scoring bars used purely for static visual comparison are banned. Use a plain number with a small icon, or an unfilled-track bar.

### Content & Data Tells
1. **Generic Placeholder Names:** Overused placeholder names ("John Doe," "Sarah Chan") are banned. Use realistic, locale-appropriate names.
2. **Generic Default-Icon Avatars:** Generic SVG "egg" or default user silhouette avatars are banned. Use believable placeholder imagery.
3. **Too-Perfect Round Numbers:** Flawless round data values (`99.99%`, `50%`) are banned. Use organic, realistic non-round data (`47.2%`).
4. **Startup-Slop Invented Brand Names:** Generic startup filler names ("Acme," "Nexus," "Cloudly") are banned. Invent names that sound like authentic, credible products.
5. **Filler Marketing Verbs:** Cliché marketing buzzwords ("Elevate," "Unleash," "Revolutionize") are banned. Use concrete, specific action verbs.

---

## 3. The UI 10-Year Durability Test

Prioritize enduring spatial grids, high-contrast typography, clear component state feedback, and system-level design tokens over superficial eye-candy trends.

---

## 4. Actionable Cognitive UX Laws

Usability and cognitive-science principles that directly inform UI structure, spatial budgeting, and friction reduction.

1. **Fitts's Law:** The time to acquire a target is a function of the distance to and size of the target.
   * *UI Action:* Primary touch targets must be at least `44px \times 44px` with minimum `12px` hit-target padding. High-priority CTAs are placed close to natural thumb zones on mobile.
2. **Hick's Law:** Decision time increases logarithmically with the number and complexity of choices.
   * *UI Action:* Cap primary navigation links to 5–7 items; cap pricing grid tiers to 3 choices; use multi-step progressive disclosure for complex forms.
3. **Jakob's Law:** Users spend most of their time on other sites, preferring your interface to function like all other familiar sites.
   * *UI Action:* Default to conventional mental models (top-right cart badge, standard search bar, standard hamburger/drawer triggers).
4. **Miller's Law:** The average person can hold only \(7 \pm 2\) items in working memory.
   * *UI Action:* Chunk data-dense UI into logical fieldsets or card modules containing no more than 5–7 distinct metrics or inputs.
5. **Peak-End Rule:** People judge an experience largely based on how they felt at its peak emotional moment and at its end.
   * *UI Action:* Design memorable, delightful micro-animations for success feedback (checkout confirmation, onboarding completion).
6. **Von Restorff Effect (Isolation Effect):** When multiple similar items are present, the one that differs from the rest is most likely to be remembered.
   * *UI Action:* Give the single primary CTA button distinct high-chroma contrast while keeping secondary actions in ghost/outline style.
7. **Doherty Threshold:** System responsiveness must be under 400ms to keep the user's attention engaged.
   * *UI Action:* Use optimistic UI state updates and crisp skeleton loading states to maintain perceived instant performance.
8. **Serial Position Effect:** Users best recall the first (Primacy) and last (Recency) items in a series.
   * *UI Action:* Place the most critical navigation items or feature callouts at the extreme left and extreme right of container bars.

*Note on Exclusions:* Gestalt spatial grouping laws (Proximity, Similarity, Common Region) are omitted here as they are natively handled in `typography-and-spacing.md` and `card.md`.

---

## 5. Anti-Slop Hard Layout & Structural Rules

1. **Hero Stack Discipline & Viewport Fit:**
   * Hero MUST fit within initial viewport on desktop. Headline max 2 lines, sub-paragraph max **20 words** AND max 3–4 lines, CTAs visible without scrolling.
   * Plan font scale and image size together (`text-4xl md:text-5xl lg:text-6xl` default; `text-6xl md:text-7xl` only for 3–5 word headlines).
   * **Hero Top Padding Cap:** Max `pt-24` (≈6rem) at desktop. Never float hero content halfway down viewport.
   * **Hero Stack Cap:** Max 4 text elements total (1. Eyebrow OR brand strip, 2. Headline, 3. Subtext, 4. Primary + Secondary CTA). Banned in hero: tagline below CTAs, trust micro-strip inside hero flex, feature bullets, pricing teasers.
   * **Logo Wall Placement:** "Used by / Trusted by" logo walls belong DIRECTLY UNDER hero, never inside hero flex container.

2. **Eyebrow Restraint & Mechanical Cap:**
   * Maximum **1 eyebrow per 3 sections** (`\lceil \text{sectionCount} / 3 \rceil`). Hero counts as 1. A 9-section page uses max 3 eyebrows total.
   * Eyebrows must name topics in plain language. Section-numbering eyebrows (`00 / INDEX`, `001 · Capabilities`, `06 · how it works`) are banned.

3. **Section Layout Repetition & Zigzag Cap:**
   * Once a layout family is used for a section (e.g. 3-column cards, full-width quote, split image-text), it may appear at most ONCE on the page. An 8-section page must use at least 4 distinct layout families.
   * **Zigzag Cap:** Alternating "left-image/right-text" then "right-image/left-text" is capped at max 2 consecutive sections. A 3rd consecutive zigzag split is banned; break rhythm with a full-width section, bento grid, or vertical stack.

4. **Split-Header Ban:**
   * The pattern "left big headline + right small explainer paragraph" in section headers is banned by default. Stack headline and body text vertically (max-width `65ch`). Reach for split-headers only when the right column holds a visual/interactive widget.

5. **Shape & Theme Lock System:**
   * **Shape Consistency Lock:** Pick ONE corner-radius scale for the entire page (all-sharp `0px`, all-soft `12–16px`, or all-pill). Mixed systems are allowed only under documented rules (e.g., buttons pill, cards 16px, inputs 8px).
   * **Page Theme Lock:** Page has ONE theme (light, dark, or auto). Individual sections MUST NOT invert mid-page (e.g., a warm-paper section sandwiched between dark slate sections is banned).

6. **Copy Self-Audit & Quote Rules:**
   * Re-read every visible string before shipping. Flag and rewrite grammatically broken phrases, unclear referents, AI hallucinated jargon, or fake-craftsman prose.
   * **Quote Rules:** Max 3 lines of body text. Real typographic quotes (`" "`) or none at all. Attribution must include name + role + optional company. Em-dashes (`—`) in quotes, body copy, headlines, or attributions are banned.

7. **Emoji & Icon Discipline:**
   * Emojis are discouraged by default; replace symbols with icon-library glyphs (`@phosphor-icons/react`, `hugeicons-react`, `@radix-ui/react-icons`, `@tabler/icons-react`).
   * **One Icon Family Per Project:** Never mix icon libraries within a single component tree. Standardize `strokeWidth` globally (`1.5` or `2.0`).
