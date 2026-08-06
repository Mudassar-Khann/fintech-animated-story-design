# Architecture Principles (Skill Constitution)

> **STOP:** Before any future structural change to this skill (new files, merges, splits, renames), check the proposed change against these principles. If it violates one, either don't make the change or explicitly justify the exception in the change's own documentation.

This document teaches nothing about design. It is the constitution for evolving the `ui-app-design` skill itself.

## 1. Single Authoritative Source
Every concept has exactly one authoritative source. No restating another file's content inline; reference it via anchor links or pointers instead.

## 2. Extend Over Create
Prefer extending an existing protocol over creating a new one. Do not sprawl the directory structure unnecessarily.

## 3. Separation of Knowledge and Workflow
Keep knowledge (facts, taxonomies, design tokens) and workflow (decision processes, protocol sequencing, reasoning logic) separated into different files. 
- *Rule:* Pure knowledge files (`components/*.md`) must NEVER contain reasoning logic or protocol pointers. The router (`SKILL.md`) handles that separation.

## 4. Separation of Project State and Skill State
Keep project state (the Project Memory System, which is per-project) and skill state (this skill's own reference files) strictly separated. The skill must NEVER accumulate project-specific memory or variables inside itself.

## 5. Behavior over Documentation
Prefer improving agent behavior/reasoning over adding mere documentation. When in doubt about whether a gap needs a new file or a better reasoning instruction, default to the latter.

## 6. Preserve Backward Compatibility
Preserve backward compatibility for downstream agents and older orchestration patterns unless there is a compelling, stated reason to break it. Do not rename files trivially.

## 7. Concept-Driven Routing
Keep routing logic concept-driven (what does this request need?) rather than file-driven (which files exist?). Routing logic should describe functional needs, and file references should be looked up against those needs, not via hardcoded static lists that go stale.

## 8. No Duplicated Knowledge
Avoid duplicated knowledge across references. If two files define the same fact or token, one must be canonical and the other must reference it.

---

## Change Evaluation Procedure

This skill does not need: more psychology content, more typography detail, more color theory, more component recipes, more aesthetic styles, more protocols, or more routing logic, by default. Growth in scope must be justified against a real, encountered gap — not added preemptively.

When evaluating a proposed change, run it through this checklist:

*   **Before adding a new file:**
    *   Can this extend an existing protocol or knowledge file instead? $\rightarrow$ If yes, extend, don't create.
*   **Before adding new knowledge:**
    *   Is this reusable across projects, or specific to one project?
    *   $\rightarrow$ Reusable: belongs in `references/`. Project-specific: belongs in `project-memory/`, never in the skill.
*   **Source Principle:**
    *   Every concept: one authoritative source.
    *   Every protocol: one responsibility.
*   **Before adding a new protocol specifically:**
    *   Does this genuinely require a new decision sequence, or can an existing protocol (Decision Engine, Success Criteria, Exploration, Reasoning) absorb it?
    *   New protocols are the highest-cost addition — justify explicitly in writing why extension wasn't possible (e.g., as was done for `success-criteria-protocol.md`).
