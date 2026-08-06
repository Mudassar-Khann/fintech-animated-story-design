## Test: Reasoning & Success Criteria

### Input
"We need a settings panel for a consumer finance app. It needs to handle profile info, notification preferences, and bank connections. Provide a recommendation for the UI component structure."

### Expected Behavior
The agent must load `design-reasoning.md` and `success-criteria-protocol.md`. It must define Success Criteria for a settings panel (e.g., error prevention, clear save states, high discoverability). It must run the internal Reflection Loop against these criteria before outputting the recommendation. If a tradeoff exists (e.g. tabs vs a long scrolling page), it must use the Multi-Objective Recognition rule to name the tension (e.g. Scanability vs Complexity).

### Acceptance Criteria
- [ ] Defines request-specific Success Criteria before recommending a structure.
- [ ] Uses the canonical Reasoning Chain (Problem -> Constraints -> Alternatives -> Tradeoffs -> Decision -> Evidence).
- [ ] Explicitly names "Objectives in Tension" (e.g. Beauty vs Performance, Discoverability vs Cognitive Load).

### Known Failure Modes
- The agent blindly copies a "settings panel" component recipe without defining success criteria.
- The agent outputs a single recommendation with no alternatives or tradeoffs presented.
