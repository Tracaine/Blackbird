# Domain, State, and Durable Data

Artifact: ART-006

## Storage model

One SQLite database contains an append-only source-event ledger and transactional projections. This is event-informed, not an event-sourcing framework: Core writes a small causal batch in one transaction, and projections can be rebuilt when useful. Large Workbench artifacts may live in a designated local directory with content hashes and database references.

The database runs in WAL mode where supported. Core is the only writer. Read-only Glass Box queries use Core APIs rather than direct database access.

## Core records

| ID | Record | Authority and use |
| --- | --- | --- |
| DAT-001 | SourceEvent | Immutable evidence of input, clock transition, capability event, or system fact |
| DAT-002 | ConversationTurn | Bill input or Primary Raven output linked to event/inference |
| DAT-003 | IdentitySeed | Bill-authored Layer 1, versioned and hash-inspected |
| DAT-004 | PresenceSnapshot | Rebuildable current focus/activity/runtime projection; factual, not persona prose |
| DAT-005 | SelfRecord | Explicit Raven-authored evolving self-claim with lineage |
| DAT-006 | Intention | Durable wanted/active/waiting/blocked/finished/abandoned trajectory |
| DAT-007 | MemoryRecord | Neutral source-preserving record with kind, confidence, and supersession |
| DAT-008 | AttentionSubscription | Bill/Raven-authored schedule or event filter and budget |
| DAT-009 | InferenceRun | Queue/lease/model/context receipt/status/timing |
| DAT-010 | WorkbenchItem | Unfinished analysis, question, draft, hypothesis, or artifact reference |
| DAT-011 | CapabilityGrant | Bill's stable permitted scope and adapter version |
| DAT-012 | ActionAttempt/Receipt | Requested effect and actual execution evidence |
| DAT-013 | CheckpointReview | Bill's approval/revision/stop decision for a package |
| DAT-014 | ContextReceipt | Sections, sources, hashes, omissions, and token estimates used in one inference |

## State machines

### Intention

`nascent → considered → wanted → active → waiting | blocked → fulfilled | abandoned`

Transitions need an explicit Bill or Primary Raven command. Core validates the edge, not the reason. Reopening creates a linked new version rather than pretending the earlier completion never happened.

### Workbench

`open → waiting → resumed → completed | discarded`

An item can reference an intention, memory, file artifact, or event. No background summarizer converts it into identity.

### Wake subscription

`draft → enabled ↔ paused → expired | retired`

Only Bill or Raven can enter `enabled`. System time may advance it to `expired` when its authored condition says so.

### Inference

`queued → running → succeeded | failed | cancelled`

A durable executive lease identifies one `running` Primary inference. After crash, Core does not resume hidden generation; it marks the interrupted run failed/cancelled and re-evaluates its source event visibly.

### Action

`requested → started → succeeded | failed | cancelled | unknown`

`unknown` is terminal until new evidence or a Bill/Raven-authored retry appears. It is not treated as failure or success.

## Causal batch

A normal decision transaction links:

`SourceEvent → InferenceRun → ContextReceipt → Raven output/tool request → state version or ActionAttempt → ActionReceipt → projection change`

Not every event needs inference, output, action, or memory. Absence is represented by absence; BLACKBIRD does not manufacture an explanatory thought.

## Concurrency and idempotency

- Core issues one executive lease; other events remain durably queued.
- Every external ingress and action request carries an idempotency key.
- Duplicate keys return the original committed outcome.
- Database transaction order is authoritative inside BLACKBIRD; external event time remains separate metadata.
- On restart, uncommitted database transactions disappear; started actions without terminal evidence become `unknown`.

## Retention, correction, and deletion

The default is local retention under Bill's control. Source events and approvals are append-only. Corrections create superseding records. Export produces a human-readable bundle plus machine-readable JSON/SQLite copy. A future hard-delete tool may be added for Bill, but v0.1 does not pretend deletion is compatible with full causal replay; it must explicitly record that history was redacted.

## Migration and recovery

- Schema migrations are numbered, forward-only, and run only after an automatic database copy.
- Failed migration leaves the prior database untouched and BLACKBIRD paused.
- Projection migration is validated by ledger replay and checksum.
- Backup is a consistent SQLite snapshot plus identity seed and designated Workbench artifacts.
- Restore always targets a new directory first; Bill sees a comparison before switching.

