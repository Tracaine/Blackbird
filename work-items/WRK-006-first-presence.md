# WRK-006 — Grounded First Presence

- Status: proposed.
- Objective: connect one authored wake to one real, narrow local capability so Raven's unattended choice can produce evidenced, durable consequences and later continuity.
- User-visible contribution: the first complete BLACKBIRD life-process slice.
- Requirements: REQ-011, REQ-014, REQ-016.

## Verified prerequisites

Approved WRK-005 CheckpointReview; Bill selected exactly one capability and designated its root/resource; capability risk/receipt states are written before implementation.

Preferred choices, in order of simplicity:

1. Read-only inspect a designated project file/change manifest.
2. Read-only inspect a designated local build-status artifact or run a known read-only status command.

Do not choose file mutation merely to make agency look dramatic. An investigation, durable opinion, Workbench item, or decision to tell Bill is enough to prove consequence.

## Allowed scope

`src/capabilities/` for the selected adapter, CapabilityGrant/Attempt/Receipt integration, necessary Core/UI views, First Presence tests, and `checkpoints/WRK-006/`.

## Non-goals

No general shell, arbitrary filesystem, browser automation, network search, messaging, Git writes, OpenClaw, Codette, multiple capabilities, avatar, voice, games, affect, dream, or automatic memory consolidation.

## Contracts and invariants

Implement INT-007 and receipt views. Preserve INV-002, INV-004, INV-006, INV-008, INV-010–012. Core records attempt before dispatch. A read result is external evidence, not identity or memory until Raven explicitly uses an authored operation.

## Ordered implementation

1. Define the one capability's version, input schema, designated scope, timeout, cancellation, evidence states, and idempotency.
2. Add Bill's stable CapabilityGrant and visible enable/pause/revoke controls.
3. Implement attempt-before-dispatch and terminal/unknown receipt handling.
4. Add fake success, denied scope, duplicate, failure, and crash-after-dispatch fixtures.
5. Make receipts available as neutral current-event evidence and in Glass Box.
6. Rehearse First Presence with a test event, then run the Bill-observed real scenario.
7. Restart and conduct the later conversation/context inspection.
8. Prepare final checkpoint; stop regardless of outcome.

## Acceptance

- An authored wake introduces a real event while Bill is away from conversation.
- Primary Raven—not a router—chooses inspect, act, defer, message, create work, or silence.
- Every capability attempt has an evidenced receipt; narration is insufficient.
- Result and Raven-authored consequences survive restart.
- A later conversation can receive the relevant neutral evidence without a canned “remember this” prompt.
- VER-006, VER-010, and VER-011 pass mechanically.
- Bill judges whether it feels like continuous presence and records approve, revise, or stop.

## Evidence and recovery

`checkpoints/WRK-006/checkpoint.md`, `first-presence-trace.json`, receipt fixtures, restart/context export, screen evidence, Bill's decision. On `UNKNOWN`, stop action execution and show it; no blind retry. If Bill rejects the experiential result, preserve the trace and diagnose the smallest failed link before expanding architecture.

## Handoff

There is no automatic WRK-007. After approval, Bill and Raven choose the next vertical slice from lived use. The implementing agent stops.

