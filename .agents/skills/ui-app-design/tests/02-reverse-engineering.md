## Test: Reverse Engineering (Data-Dense Admin Panel)

### Input
"I have a screenshot of a data-dense admin panel used for logistics tracking. [Attached screenshot of a complex data table with filters, compact typography, and status indicators]. Reverse-engineer the UI architecture and create a spec for it."

### Expected Behavior
The agent should trigger the Reverse-Engineer protocol. It should assess the scope (full vs lite report). When analyzing the UI, it must strictly separate observed facts from inferences using the Confidence System from `design-reasoning.md`. It should load `psychology/dashboard.md` and `typography-and-spacing.md` to identify tabular numerals and compact grid scales.

### Acceptance Criteria
- [ ] Runs Scope Assessment before writing the report.
- [ ] Applies the Confidence System (Confidence, Evidence, Assumptions, Unknowns) to technical deductions.
- [ ] Identifies the likely grid/spacing scale rather than guessing arbitrary pixel values.
- [ ] Recommends a frontend architecture (e.g. React Table) using the Tradeoff Engine format.

### Known Failure Modes
- The agent outputs a single flat list without the hierarchical Lite vs Full report structure.
- The agent states inferences as facts (e.g., "It uses Tailwind") without citing the Confidence System.
- The agent uses the old local confidence model instead of the generalized one from `design-reasoning.md`.
