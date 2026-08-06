# ui-app-design Regression Test Suite

**CRITICAL NOTE:** These are test *scenarios*, not completed validations. Do not fabricate results. A test only counts as passed once it has actually been run against a real request (by an actual agent doing actual work) and the output has been checked against its documented acceptance criteria.

## Purpose
The skill has no automated way to detect whether a future change to one protocol silently breaks another. This directory provides validation infrastructure to ensure the skill's structural integrity remains intact as it evolves.

## How to Run
1. Start a fresh conversation with a coding agent equipped with this skill.
2. Provide the `Input` from the test file as the prompt.
3. Observe the agent's behavior and cross-reference its output against the `Expected Behavior` and `Acceptance Criteria`.
