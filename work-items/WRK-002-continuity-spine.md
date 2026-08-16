# WRK-002 — Continuity Spine

- Status: proposed.
- Objective: turn the working model call into restartable, causally inspectable continuity with a single Primary Raven queue.
- User-visible contribution: a bare conversation survives process restart and can explain its honest downtime.
- Requirements: REQ-001, REQ-002, REQ-006, REQ-013, REQ-102.

## Verified prerequisites

An approved WRK-001 CheckpointReview and its real ModelPort evidence. If absent, stop.

## Allowed scope

`src/core/`, `src/store/`, `src/context/`, migrations, small CLI adjustments, `tests/continuity/`, `checkpoints/WRK-002/`, and only necessary package configuration.

## Non-goals

No browser UI, background scheduler, self/intention domain, rich memory, capability execution, vector search, donor system, or production hardening.

## Contracts and invariants

Implement the minimal portions of INT-001, INT-002, INT-003, INT-005, and INT-010. Preserve INV-001, INV-004, INV-005, INV-007–009. Core is sole writer. Model output cannot claim action truth.

## Ordered implementation

1. Define IDs, envelope, `SourceEvent`, `ConversationTurn`, `InferenceRun`, `ContextReceipt`, and minimal `PresenceSnapshot`.
2. Add numbered SQLite migrations, transactions, idempotency table, source ledger, and projections.
3. Record user input before inference and model output after completion.
4. Implement the executive lease and durable queue using a delayed fake model first.
5. Compile labeled static seed, recent dialogue, and current event; persist receipt metadata.
6. On startup, detect prior shutdown and record an honest temporal gap only.
7. Add replay/checksum, overlap, duplicate, crash, and restart tests.
8. Add CLI inspection sufficient for this checkpoint; do not build WRK-003 UI early.
9. Prepare demo/evidence and stop.

## Acceptance

- Conversation turns and queued events survive restart.
- Projection replay matches stored current state.
- Two overlapping inputs never create two active Primary inferences.
- Duplicate event/commit keys do not duplicate state.
- Downtime creates timestamps but no fictional events or thoughts.
- `npm run verify:continuity` and `npm run verify:concurrency` pass.
- Bill sees a short before/restart/after demo and records a decision.

## Evidence

`checkpoints/WRK-002/checkpoint.md`, `replay-report.json`, causal trace export, migration/test output.

## Recovery and handoff

Create a pre-migration database copy. Failed migration leaves it untouched. Roll back code and open the copy rather than downgrading in place. On approval, hand WRK-003 exact read models and control commands; do not start it.

