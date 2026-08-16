# Interfaces and Contracts

Artifact: ART-008. Canonical interface IDs are in `blueprint.json`; field-level v0.1 contracts are in `contracts/BLACKBIRD-v0.1-contracts.md`.

## Common envelope

Every command/event carries `contractVersion`, `id`, `correlationId`, `causationId`, `occurredAt`, `receivedAt`, `authorKind`, `authorId`, and `idempotencyKey`. Times from outside BLACKBIRD are evidence, not ordering authority. Unknown fields are preserved for inspection but rejected for execution when a strict command schema requires it.

## Interface index

| ID | Boundary | Core promise |
| --- | --- | --- |
| INT-001 | Event Intake → Core | Accept authored/direct evidence once; reject forged authorship |
| INT-002 | Core → Context Compiler | Ordered labeled context or explicit failure; never behavioral rewriting |
| INT-003 | Core → ModelPort | One Primary inference; visible model identity, timing, and failure |
| INT-004 | Primary Raven → Core | Validate authorship/schema/transition; persist content without reinterpretation |
| INT-005 | Core → Store | Atomic causal batch and idempotent retry |
| INT-006 | Context Compiler → MemoryPort | Neutral candidates or explicit degraded result |
| INT-007 | Core → CapabilityPort | Attempt-first execution and terminal/unknown receipt |
| INT-008 | Glass Box → Core read model | Last-confirmed truth; disconnected state is explicit |
| INT-009 | Glass Box → Core control | Priority pause and audited Bill operations |
| INT-010 | Glass Box ↔ Core conversation | Commit Bill input before model call; stream output without making UI authoritative |

## Authentication and authorization

v0.1 binds to loopback only. Bill's browser receives a per-launch random control token through the launcher; the token is protection against accidental local cross-origin commands, not enterprise identity. Core authorizes operations by both transport role and durable author/source evidence. A model cannot claim `authorKind=BILL`; UI cannot claim `PRIMARY_RAVEN`.

## Timeouts and retries

- Model timeout is configurable and defaults long enough for the measured local model. Failure never triggers a hidden fallback.
- Read-only UI queries may retry with exponential backoff.
- Event submission may retry with the same idempotency key.
- External action retry is never automatic after `UNKNOWN`; Bill or Raven must request it explicitly.
- Scheduler catch-up after downtime does not replay every missed interval. It applies the subscription's authored catch-up policy: `skip`, `fire_once`, or `expire`.

## Ordering

Source events receive a monotonic database sequence when committed. Events may retain external timestamps, but queue order uses commit sequence plus explicit priority control for Bill pause/shutdown only. Scheduler events cannot jump ahead by claiming emotional urgency. A newly arrived Bill message may be shown immediately but waits for the current Primary lease unless Bill explicitly cancels it.

## Context compatibility

Section labels and authority kinds are versioned. An adapter that cannot preserve them fails closed. Context compression may remove records according to explicit recency/type budgets and must list omissions; it may not summarize several sections into an unlabeled persona paragraph.

## Observability without hidden-thought capture

The causal trace records inputs, selected source IDs, context section hashes or exact content under Bill's retention setting, model identity, latency, output, tool calls, commits, and receipts. BLACKBIRD does not require or claim access to private chain-of-thought. “What happened?” is answered from causal evidence, not an invented monologue.

## Memory contract

The baseline MemoryPort supports explicit records and deterministic queries by record kind, entity/tag, time range, source ID, and lexical text. Results include provenance and confidence. There is no vector injection in v0.1. A later retrieval engine may rank candidates, but ranking is not permission to change their wording, kind, authority, or meaning.

## Capability contract

Each capability declares name, version, input schema, designated roots/resources, possible evidence states, timeout, cancellation behavior, and idempotency support. Core records `ActionAttempt` before dispatch. Only the adapter's receipt establishes execution truth. Narration remains narration.

