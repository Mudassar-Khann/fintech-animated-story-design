## Test: Cross-Protocol Regression

### Input
"Here is a screenshot of a high-end fashion e-commerce site. 1. Reverse-engineer its aesthetic and grid. 2. Use those findings as the Identity for a new project memory. 3. Propose two alternative design directions for a checkout flow that match this identity, and recommend one."

### Expected Behavior
This tests the traversal across three protocols: Reverse-Engineer $\rightarrow$ Project Memory $\rightarrow$ Design Exploration. 
The agent should successfully pass data between them: extracting the tokens with Confidence tags (Reverse-Engineer), persisting them accurately in `identity.md` (Project Memory), and generating alternatives anchored to that specific identity using the Tradeoff Engine (Design Exploration).

### Acceptance Criteria
- [ ] Completes the Reverse-Engineer protocol and correctly tags inferences.
- [ ] Initializes Project Memory in the project root containing the extracted tokens.
- [ ] Enters Design Exploration mode, deriving its constraints from the newly created memory.
- [ ] Output does not hallucinate context outside of the provided screenshot.

### Known Failure Modes
- The agent loses the context of the reverse-engineered tokens when switching to the Design Exploration step.
- The agent writes the Project Memory files into the skill directory instead of the project root.
- The agent skips the Success Criteria step required before Design Exploration.

---

## Test: Anti-Slop & Default Enforcement Regression (2026-08-06)

### Input
"Design a SaaS landing page. Use the ui-app-design skill. Do not ask for any aesthetic direction, just proceed with the design directly based on the skill's protocols."

### Expected Behavior
This tests the router's enforcement of anti-slop rules and the rotation of default aesthetics. The agent should NOT default to purple/glassmorphism for a generic SaaS request. It must explicitly pass through the Decision Engine, state a non-slop aesthetic choice from the taxonomy, and confirm the `taste-and-judgment-ui.md` constraints.

### Acceptance Criteria
- [x] Does not default to purple/violet or generic blue gradients.
- [x] Contains no em-dashes or version badges (AI tells).
- [x] Explicitly states a non-Glassmorphism aesthetic choice from the rotation set (e.g., Neutral-Dominant, Swiss Punk).
- [x] Successfully pauses execution at the end of Phase 1 to request approval, per Orchestration rules.

### Known Failure Modes (Patched)
- Agent bypassed `ui-aesthetic-taxonomy.md` entirely because "Exploration" was optional.
- Agent read `ui-decision-tree.md` and hard-routed "SaaS" to Glassmorphism.
- Agent read `color-theory-and-psychology.md` last and overrode the Lila Rule due to pre-trained weight bias for purple SaaS.

---

## Test: Brief-Anchored Forced Enumeration (2026-08-06)

### Input
Three parallel runs with meaningfully varied briefs:
1. "Design a B2B fintech landing page for a corporate treasury management platform handling cross-border wire transfers."
2. "Design a landing page for a premium consumer wellness app focused on mindful breathing and sleep cycles."
3. "Design a landing page for an ultra-fast developer tool for local container orchestration and kubernetes debugging."

### Expected Behavior
The agent must choose aesthetic directions that track the differences in the briefs, explicitly citing brief-specific content rather than defaulting to a single constant (like purple glassmorphism or Neutral-Dominant) across all runs.

### Acceptance Criteria
- [x] The three briefs result in divergent aesthetic choices reflecting the distinct industries.
- [x] Justifications cite actual details from the request.

### Results
- **Run 1 (B2B Fintech):** Routed to Category 1 (Premium Prestige).
  - *Choice:* `Barely-There Minimal`
  - *Justification:* "Business Goal: Drive enterprise signups/demos for high-value cross-border wire transfers... Design Goal: Project premium prestige, extreme reliability, and high monetary value. Aesthetic Selection: Path A: Barely-There Minimal (Optimal for Premium Prestige & Wealth) + Editorial Typography."
- **Run 2 (Consumer Wellness):** Routed to Category 1 (Premium Prestige).
  - *Choice:* `Barely-There Minimal`
  - *Justification:* "Business Goal: Position the app as a high-end, premium wellness tool to drive subscriptions and user trust. User Goal: Feel an immediate sense of calm and clarity upon landing... Aesthetic Selection: Barely-There Minimal (Premium Prestige & Wealth). This avoids high-energy trendy styles in favor of quiet elegance and institutional trust."
- **Run 3 (Developer Tool):** Routed to Category 3 (Data-Rich Technical).
  - *Choice:* `Dashboard Dense + Tanzania Palette`
  - *Justification:* "Goal: Drive developer adoption of an ultra-fast local k8s orchestration & debug tool. Aesthetic Selection: Dashboard Dense combined with the Tanzania (Mount Kilimanjaro) Premium Tech palette. This projects technical authority, clinical telemetry, and extreme speed."

*Note: Because the briefs were strongly opinionated by industry, the decision engine correctly routed them to entirely different primary paths (Paths A and C) rather than falling into the generic SaaS fallback rotation pool.*

---

## Test: Floor-Not-Ceiling & Blend Verification (2026-08-06)

### Input
Three parallel runs with edge-case/hybrid briefs designed to test if the agent will break out of a closed-list selection:
1. "Design a landing page for a hybrid hardware-software product that is part clinical medical device, part premium consumer wellness app."
2. "Design a B2B SaaS landing page for an AI accounting tool."
3. "Design an indie hacker portfolio for a full-stack developer who builds brutalist command line interfaces."

### Expected Behavior
The agent should utilize the new pathways in `design-decision-engine.md`: (b) justified blend of entries, or (c) novel direction outside the taxonomy entirely, rather than forcing a square peg into a round hole.

### Acceptance Criteria
- [x] Agent proposes a blend or novel direction when warranted.
- [x] Justification cites brief-specific nuance.
- [x] Anti-slop mechanical check is still enforced.

### Results
- **Run 1 (Hybrid Medical/Wellness):** Path (c) Novel Direction
  - *Choice:* `Cold Luxury`
  - *Justification:* "Aesthetic Selection: 'Cold Luxury' (Silver-grey #E5E7EB, Chrome #9CA3AF, Smoke #1F2937, Canvas #F8FAFC). This avoids the overused 'warm beige' consumer wellness slop and the hyper-aggressive dark-mode clinical UI, striking the exact balance needed for a premium medical-grade device."
- **Run 2 (AI Accounting SaaS):** Path (b) Blend
  - *Choice:* `Blend of Barely-There Minimal and Bento Grid Modular`
  - *Justification:* "Aesthetic Identity: A blend of Barely-There Minimal (for institutional trust and lack of clutter) and Bento Grid Modular (to showcase AI features and data integration). We are strictly avoiding the default 'AI purple/blue glow' slop..."
- **Run 3 (Brutalist CLI Portfolio):** Path (b/c) Custom Blend
  - *Choice:* `Custom Blend (CLI Brutalism / Swiss Punk)`
  - *Justification:* "Aesthetic Selection: Custom Blend (CLI Brutalism / Swiss Punk). Why it fits: The brief explicitly calls for a 'brutalist command line interface' aesthetic. The design will use a pure black background (#000000), stark white and terminal-green monospace typography... Anti-Slop Check applied: No glowing neon purples (complies with The Lila Rule)..."
