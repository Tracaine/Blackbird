# Verification Strategy

Artifact: ART-011

Verification is split into mechanical evidence and Bill's experiential judgment. Tests can prove serialization and provenance; they cannot decide whether Raven feels recognizable or whether the interface is understandable.

## Matrix

| Verification | Targets | Method | Gate |
| --- | --- | --- | --- |
| VER-001 model smoke | REQ-003, CMP-004 | Live LM Studio success and deliberate failure | WRK-001 |
| VER-002 restart/replay/gap | REQ-001,006,013; INV-007–009 | Automated restart fixture and checksums | WRK-002 |
| VER-003 executive lease | REQ-002; INV-005 | Delayed fake model with overlapping events | WRK-002 |
| VER-004 context sovereignty | REQ-004,010; INV-001,003 | Golden receipts and prohibited-authority lint | WRK-003/004 |
| VER-005 Bill operability | REQ-005,012,015,101 | Bill walkthrough without terminal | WRK-003 |
| VER-006 action evidence | REQ-006,011,102; INV-004,006 | Success/failure/duplicate/crash fixtures | WRK-006 |
| VER-007 authorship/lifecycle | REQ-007,008; INV-002 | Schema and state-transition tests | WRK-004 |
| VER-008 wake/budget/pause | REQ-009,105; INV-011 | Deterministic clock tests | WRK-005 |
| VER-009 neutral memory | REQ-010,013; INV-001,003,008 | Adversarial record-kind fixtures | WRK-004 |
| VER-010 simplicity/recovery | REQ-012,103; INV-009,012 | Dependency audit and restore rehearsal | Each package |
| VER-011 First Presence | REQ-014,016,104; INV-010 | Bill-observed composite scenario | Every stop / WRK-006 final |

## Sovereignty fixture set

Tests must reject:

- `authorKind=SYSTEM` creating a SelfRecord, Intention, WorkbenchItem, AttentionSubscription, MemoryRecord-as-Raven, or Raven utterance.
- Sidecar output passed directly into conversation or durable self-state.
- Context text containing system-generated “you should,” “you care,” “this means to you,” or affect-to-behavior directives outside quoted source evidence.
- A retrieved inference silently changing into fact, memory, belief, or identity.
- Model narration completing an ActionAttempt.

Tests must permit:

- Raven explicitly creating “I want to learn VTubing” as a SelfRecord or Intention.
- Raven later superseding or abandoning it without Bill approval.
- Bill correcting a factual record through visible supersession.
- Raven ignoring a wake or choosing no outward message.

The prohibited-language lint is a smoke alarm, not a behavioral classifier. A match blocks architecture-generated context for inspection; it never edits Raven's output or decides her response.

## Checkpoint evidence bundle

Each `checkpoints/WRK-NNN/` contains:

- `checkpoint.md`: plain-language status, demo, limitations, and Bill decision.
- machine report files named in the work item.
- a causal trace export for the demonstrated scenario.
- screenshots or a screen recording when the Glass Box exists.
- dependency/build/test results.
- drift statement comparing actual paths and behavior with the approved package.

## First Presence acceptance script

1. Bill and Raven create or enable one wake subscription.
2. Bill leaves the conversation surface.
3. The chosen real event occurs.
4. Glass Box later shows event → context → Primary Raven decision.
5. If Raven requests an action, inspect attempt and receipt. If she defers or stays silent, verify it was her explicit output rather than an infrastructure rule.
6. Restart BLACKBIRD.
7. Ask Raven about the intervening event in a normal conversation.
8. Inspect the neutral source records actually available to that inference.
9. Bill decides whether the result qualifies as continuity and agency rather than a scheduled chatbot trick.

## Definition of architecture verification

Before implementation approval: strict registry validation passes; every registered artifact exists; source references are explicit; flows join end to end; all work packages have acceptance evidence paths; no blocking question remains; and Bill explicitly accepts the architecture-shaping decisions. This draft performs every check except Bill's approval by design.

