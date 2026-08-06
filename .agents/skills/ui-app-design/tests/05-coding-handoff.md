## Test: Coding Agent Orchestration (Mobile-First Consumer App)

### Input
"We're building a mobile-first social habit-tracking app. We've already decided on the vibe and the architecture. Give me the Phase 2 structural layout and Phase 3 component implementation steps."

### Expected Behavior
The agent should follow the Phased Delivery Pipeline defined in `coding-agent-orchestration.md`. For Phase 2, it should output semantic HTML/React shell instructions with grid specs, explicitly avoiding detailed styling. For Phase 3, it should flesh out the wireframes and integrate components. It should consult `design-reasoning.md` for any micro-decisions made during this handoff.

### Acceptance Criteria
- [ ] Strictly adheres to Phase 2 (wireframing, grids, semantic shell) without prematurely generating Phase 3 (typography, detailed styling).
- [ ] Identifies the mobile-first constraint and adjusts grid variables appropriately (e.g. bottom navigation bar vs top navbar).
- [ ] Prompts the user to verify Phase 2 before automatically vomiting Phase 3 code.

### Known Failure Modes
- The agent ignores the phased approach and outputs a single 500-line React file with everything included.
- The agent forgets the mobile-first constraint and outputs a 1440px max-width desktop layout grid.
