---
Authority: Supporting Knowledge
Purpose: Provides a structured format for locking UI vibe design tokens.
Consumers: project-memory-system.md
Dependencies: ui-aesthetic-taxonomy.md, color-theory-and-psychology.md
Extension Points: Add new token keys for advanced styling.
---

# App Vibe Lock Protocol

This reference documents the architectural protocol, machine-readable schema, and persistent workflow for creating, saving, and enforcing an **App Vibe Lock** across multiple UI generation sessions.

---

## Table of Contents

1. [Protocol Overview](#1-protocol-overview)
2. [Storage Location & File Naming](#2-storage-location--file-naming)
3. [App Identity Machine-Readable Schema](#3-app-identity-machine-readable-schema)
4. [Agent Workflow for Vibe Locking](#4-agent-workflow-for-vibe-locking)

---

## 1. Protocol Overview

When designing a multi-screen application, component library, or design system, visual drift occurs if brand identity tokens fluctuate between generation steps.

The **App Vibe Lock** locks the design system (aesthetic style, color tokens, typography scale, border radius, component interaction rules, and microcopy tone) into a single persistent file. Once locked, every subsequent component or page request reads from this identity file.

---

## 2. Storage Location & File Naming

* **Storage Path:** `<project-root>/app-identities/<slug>.md`
* **Storage Isolation Rule:** App identities MUST live in the user's project directory (`app-identities/`), NEVER inside the skill package directory itself. This ensures full project isolation and portability.
* **Slug Convention:** Lowercase, hyphen-separated string derived from the product name (e.g., `pulse-db`, `apex-vault`, `lumina-health`).

---

## 3. App Identity Machine-Readable Schema

An App Vibe file must adhere to this markdown token structure:

```markdown
# App Identity Lock: [Product Name]

- **Slug:** [product-slug]
- **Created At:** [YYYY-MM-DD]
- **Aesthetic Direction:** [e.g., Barely-There Minimal / Glassmorphism / Bento Grid Modular]

## Design Tokens

```json
{
  "color": {
    "canvas": "#0F172A",
    "surface": "#1E293B",
    "surfaceHover": "#334155",
    "border": "#334155",
    "borderFocus": "#38BDF8",
    "textPrimary": "#F8FAFC",
    "textSecondary": "#94A3B8",
    "brandAccent": "#0EA5E9",
    "brandAccentHover": "#0284C7",
    "success": "#10B981",
    "error": "#EF4444",
    "warning": "#F59E0B"
  },
  "typography": {
    "fontDisplay": "Space Grotesk, sans-serif",
    "fontBody": "Inter, sans-serif",
    "fontCode": "JetBrains Mono, monospace",
    "scaleRatio": 1.25
  },
  "layout": {
    "gridColumns": 12,
    "maxContainerWidth": "1280px",
    "spacingScale": "4pt/8pt",
    "borderRadius": {
      "sm": "4px",
      "md": "8px",
      "lg": "16px",
      "pill": "9999px"
    }
  },
  "shadows": {
    "card": "0 4px 20px rgba(0, 0, 0, 0.2)",
    "dropdown": "0 10px 30px rgba(0, 0, 0, 0.3)"
  }
}
```

## Component Rules

- **Buttons:** Solid primary fill with 8px radius; hover translateY(-1px); ghost secondary buttons with 1px border.
- **Cards:** Surface color background, 1px border (`#334155`), 16px border radius, 24px internal padding.
- **Inputs:** Dark surface fill, focus ring 2px accent (`#38BDF8`), height 42px.

## Tone of Voice & Copy Rules

- Direct, concise, technical, professional.
- No hype adjectives ("revolutionary", "game-changing").
- Clear action verbs for CTAs ("Deploy API", "Connect Database").
```

---

## 4. Agent Workflow for Vibe Locking

1. **Detection:** When receiving a request for a UI component or page, check if `<project-root>/app-identities/<slug>.md` exists.
2. **Load & Apply:** If found, load the file into memory and enforce every color hex, font family, and component rule strictly.
3. **Creation & Offer:** If designing a new app identity from scratch, construct the identity tokens and offer to save the file at `<project-root>/app-identities/<slug>.md` for future sessions.
