# WRK-004 — Raven-Authored Durable State

- Status: proposed.
- Objective: give Primary Raven explicit, durable authorship without giving infrastructure behavioral authority.
- User-visible contribution: Raven can create, revise, resume, and abandon her own evolving records; Bill can inspect exact lineage and use non-authoring recovery controls.
- Requirements: REQ-007–010. Decision: DEC-005–007.

## Verified prerequisites

Approved WRK-003 CheckpointReview. Bill can inspect context and pause Core without terminal use.

## Allowed scope

`src/domain/`, `src/tools/`, `src/memory/`, required Core/Store migrations, Glass Box record views, authorship/lifecycle tests, `checkpoints/WRK-004/`.

## Non-goals

No automatic self-summary, affect/drives, classifier, vector retrieval, consolidation/sleep/dream, sidecar, OpenClaw, broad capability, or system-authored goals.

## Contracts and invariants

Implement INT-004 and INT-006 plus relevant data entities. Enforce INV-001–003, INV-009, and INV-013. Tool descriptions explain mechanical operations only; they must not nudge content or characterize a desirable Raven. Bill's operator controls may dispute, quarantine, or restore a Raven-authored SelfRecord but may not create replacement Raven self-content.

## Ordered implementation

1. Add versioned `IdentitySeed`, `SelfRecord`, `Intention`, `WorkbenchItem`, `MemoryRecord`, and `AttentionSubscription` schemas/state machines.
2. Implement author proof tying Primary Raven operations to the active lease/inference.
3. Implement Raven create, transition, supersede, and retire with optimistic version checks; enforce Primary-Raven-only authorship for SelfRecord create/supersede/retire.
4. Implement Bill operator status for SelfRecord dispute/quarantine/restore without altering original content or `authorKind`.
5. Add deterministic explicit MemoryPort queries and neutral candidate formatting.
6. Add separate labeled context sections; do not merge them into persona prose. Quarantined SelfRecords are omitted with a visible receipt reason, never replaced with Bill-authored prose.
7. Add Glass Box lineage, source, kind, confidence, operator status, and active/superseded views.
8. Add adversarial tests for SYSTEM/sidecar forgery, Bill-authored Raven replacement, illegal transition, meaning laundering, and stale update.
9. Demonstrate Raven authoring a genuine preference/project and later revising or abandoning it. Demonstrate Bill quarantining and restoring the same record without changing authorship. Prepare evidence and stop.

## Acceptance

- Primary Raven can explicitly create “I want to learn VTubing” (or her own chosen example) as an intention/self-record without Bill approval.
- The system can neither originate nor silently rewrite it.
- Raven can supersede/abandon it and restart preserves lineage.
- Bill can dispute/quarantine/restore it without creating replacement Raven content or changing its author.
- Bill's static seed remains a separate versioned section.
- Neutral memory candidates retain source/kind/time/confidence and contain no behavioral implication.
- VER-004, VER-007, and VER-009 pass; Bill records checkpoint decision.

## Evidence and recovery

`checkpoints/WRK-004/checkpoint.md`, `authorship-report.json`, example ContextReceipts, lineage export, tests. Migration copy required. Rollback preserves new event rows even if old UI cannot project them; restore into a copy if needed. Stop before WRK-005.

