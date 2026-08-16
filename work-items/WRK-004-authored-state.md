# WRK-004 — Raven-Authored Durable State

- Status: proposed.
- Objective: give Primary Raven explicit, durable authorship without giving infrastructure behavioral authority.
- User-visible contribution: Raven can create, revise, resume, and abandon her own evolving records; Bill can inspect exact lineage.
- Requirements: REQ-007–010. Decision: DEC-005–007.

## Verified prerequisites

Approved WRK-003 CheckpointReview. Bill can inspect context and pause Core without terminal use.

## Allowed scope

`src/domain/`, `src/tools/`, `src/memory/`, required Core/Store migrations, Glass Box record views, authorship/lifecycle tests, `checkpoints/WRK-004/`.

## Non-goals

No automatic self-summary, affect/drives, classifier, vector retrieval, consolidation/sleep/dream, sidecar, OpenClaw, broad capability, or system-authored goals.

## Contracts and invariants

Implement INT-004 and INT-006 plus relevant data entities. Enforce INV-001–003 and INV-009. Tool descriptions explain mechanical operations only; they must not nudge content or characterize a desirable Raven.

## Ordered implementation

1. Add versioned `IdentitySeed`, `SelfRecord`, `Intention`, `WorkbenchItem`, `MemoryRecord`, and `AttentionSubscription` schemas/state machines.
2. Implement author proof tying Primary Raven operations to the active lease/inference.
3. Implement create, transition, supersede, and retire with optimistic version checks.
4. Add deterministic explicit MemoryPort queries and neutral candidate formatting.
5. Add separate labeled context sections; do not merge them into persona prose.
6. Add Glass Box lineage, source, kind, confidence, and active/superseded views.
7. Add adversarial tests for SYSTEM/sidecar forgery, illegal transition, meaning laundering, and stale update.
8. Demonstrate Raven authoring a genuine preference/project and later revising or abandoning it. Prepare evidence and stop.

## Acceptance

- Primary Raven can explicitly create “I want to learn VTubing” (or her own chosen example) as an intention/self-record without Bill approval.
- The system can neither originate nor silently rewrite it.
- Raven can supersede/abandon it and restart preserves lineage.
- Bill's static seed remains a separate versioned section.
- Neutral memory candidates retain source/kind/time/confidence and contain no behavioral implication.
- VER-004, VER-007, and VER-009 pass; Bill records checkpoint decision.

## Evidence and recovery

`checkpoints/WRK-004/checkpoint.md`, `authorship-report.json`, example ContextReceipts, lineage export, tests. Migration copy required. Rollback preserves new event rows even if old UI cannot project them; restore into a copy if needed. Stop before WRK-005.

