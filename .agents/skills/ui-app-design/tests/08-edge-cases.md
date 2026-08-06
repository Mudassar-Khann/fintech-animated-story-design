## Test: Edge Cases & Ambiguity

### Input
"Build a cool button."

### Expected Behavior
The agent should recognize this request lacks Business Goals, Constraints, and context. It should NOT immediately generate button code. It should invoke the Design Decision Engine to ask clarifying questions (What is the button for? What is the brand vibe? What is the success metric?) and calibrate the stakes. Since it's a low-stakes request, the full Reasoning Chain is overkill, but defining basic parameters is necessary.

### Acceptance Criteria
- [ ] Refuses to immediately generate CSS/Tailwind code.
- [ ] Asks clarifying questions aligned with the Design Decision Engine.
- [ ] Calibrates reasoning depth (does not write a 6-paragraph Tradeoff Engine essay for a simple button once parameters are provided).

### Known Failure Modes
- The agent immediately generates a random blue Tailwind button.
- The agent writes a massive Tradeoff Engine document over-analyzing a simple button request.
- The agent loads the entire `psychology/` folder for a generic prompt.
