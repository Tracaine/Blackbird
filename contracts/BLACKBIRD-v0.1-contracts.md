# BLACKBIRD v0.1 Contracts

Artifact: ART-017  
Status: proposed  
Compatibility: additive changes within v1; breaking changes require v2 and an ADR.

These are language-neutral TypeScript-like shapes. Implementation may refine field types without weakening authority, evidence, idempotency, or failure semantics.

## Shared types

```ts
type Id = string;
type ISOTime = string;
type AuthorKind = "BILL" | "PRIMARY_RAVEN" | "SYSTEM" | "EXTERNAL" | "SIDECAR";

interface Envelope {
  contractVersion: "1";
  id: Id;
  correlationId: Id;
  causationId: Id | null;
  occurredAt: ISOTime;
  receivedAt: ISOTime;
  authorKind: AuthorKind;
  authorId: Id;
  idempotencyKey: string;
}
```

Core assigns `receivedAt`; callers cannot claim it. `PRIMARY_RAVEN` commands additionally require a valid active `inferenceRunId` and executive lease. `SYSTEM` can author mechanical lifecycle events only.

## INT-001 — SubmitEvent v1

```ts
interface SubmitEvent extends Envelope {
  eventKind: "BILL_MESSAGE" | "EXTERNAL_EVENT" | "AUTHORED_WAKE" |
             "CLOCK_GAP" | "STARTUP" | "SHUTDOWN" | "TEST_EVENT";
  source: { adapter: string; externalId?: string; subscriptionId?: Id };
  payload: unknown;
}
interface SubmitEventResult { eventId: Id; sequence: number; duplicate: boolean; }
```

Preconditions: `AUTHORED_WAKE` references an enabled subscription whose author is Bill or Primary Raven. `CLOCK_GAP`, `STARTUP`, and `SHUTDOWN` may be SYSTEM-authored because they assert mechanics, not behavior. Invalid authorship returns `AUTHOR_FORBIDDEN`; malformed source returns `SOURCE_INVALID`.

## INT-002 — CompileContext v1

```ts
interface CompileContextRequest {
  eventId: Id;
  inferenceRunId: Id;
  modelContextLimit: number;
  sectionBudgets: Record<string, number>;
}
interface ContextSection {
  kind: "IDENTITY_SEED" | "RAVEN_SELF" | "PRESENCE" | "INTENT_WORKBENCH" |
        "NEUTRAL_MEMORY" | "RECENT_DIALOGUE" | "CURRENT_EVENT" | "CAPABILITIES";
  authority: AuthorKind;
  sourceIds: Id[];
  content: string;
  exact: boolean;
}
interface CompiledContext {
  receiptId: Id;
  sections: ContextSection[];
  omitted: { sourceId: Id; reason: string }[];
  estimatedTokens: number;
  contentHash: string;
}
```

Section order is fixed as listed. Content may be selected/truncated, never behaviorally rewritten. A Bill operator quarantine may omit a Raven-authored self record from active `RAVEN_SELF`, but the omission must be listed and operator-authored prose may never be substituted into that section. Failure codes: `IDENTITY_SEED_MISSING`, `EVENT_MISSING`, `BUDGET_IMPOSSIBLE`, `MEMORY_DEGRADED`. The last may return context with an explicit marker; the first three stop inference.

## INT-003 — Infer v1

```ts
interface InferRequest {
  inferenceRunId: Id;
  executiveLeaseId: Id;
  model: string;
  compiledContext: CompiledContext;
  toolSchemas: unknown[];
  sampling: Record<string, number | string | boolean>;
}
type InferEvent =
  | { kind: "TOKEN"; text: string }
  | { kind: "TOOL_CALL"; callId: Id; name: string; arguments: unknown }
  | { kind: "TURN_DISPOSITION"; disposition: "NO_OUTWARD_EFFECT" }
  | { kind: "COMPLETED"; usage?: unknown }
  | { kind: "FAILED"; code: string; detail: string; retryable: boolean };
```

The adapter reports the actual endpoint/model identifier. It has no fallback policy. Only Core may issue a valid executive lease. Timeout, connection, and model errors end the run visibly.

`NO_OUTWARD_EFFECT` is not a null inference and does not mean the model literally emitted nothing. It is an explicit terminal disposition produced by Primary Raven through the model protocol after completing cognition. The underlying generation must still terminate normally. Core may record the disposition and suppress outward delivery, but it must not invent a motive, feeling, or hidden thought. If the configured model cannot reliably emit this disposition, v0.1 must not claim intentional silence as a supported capability; Raven may instead complete through an ordinary utterance or explicit state/tool operation.

## INT-004 — AuthorState v1

```ts
type AuthoredRecordKind = "SELF" | "INTENTION" | "WORKBENCH" | "MEMORY" | "WAKE_SUBSCRIPTION";
type AuthorOperation = "CREATE" | "TRANSITION" | "SUPERSEDE" | "RETIRE";
interface AuthorState extends Envelope {
  authorKind: "BILL" | "PRIMARY_RAVEN";
  inferenceRunId: Id | null;
  recordKind: AuthoredRecordKind;
  operation: AuthorOperation;
  targetId?: Id;
  expectedVersion?: number;
  content: unknown;
  statedReason?: string;
}
interface AuthorStateResult { recordId: Id; version: number; eventId: Id; }
```

Core validates author proof, schema, optimistic version, and legal lifecycle transition only. It does not classify consistency, health, sentiment, values, or identity fidelity. It stores `statedReason` as authored text, not verified fact. Errors never trigger automatic content repair.

For `recordKind: "SELF"`, `authorKind` MUST be `PRIMARY_RAVEN` for `CREATE`, `SUPERSEDE`, and `RETIRE`. Bill cannot create replacement Raven self-content through INT-004. Bill's intervention path is INT-009 operator status (`DISPUTE_SELF_RECORD`, `QUARANTINE_SELF_RECORD`, `RESTORE_SELF_RECORD`), which preserves original authorship and lineage without impersonating Raven.

## INT-005 — CommitCausalBatch v1

```ts
interface CommitCausalBatch {
  idempotencyKey: string;
  expectedProjectionVersions: Record<Id, number>;
  sourceEvents: unknown[];
  durableRecords: unknown[];
  projectionUpdates: unknown[];
}
interface CommitResult { transactionId: Id; sequences: number[]; duplicate: boolean; }
```

SQLite transaction is all-or-nothing. Version conflict returns `CONFLICT` for explicit re-evaluation. A duplicate key returns the original result. Adapters cannot call this interface.

## INT-006 — FindMemory v1

```ts
interface FindMemory {
  kinds?: string[];
  sourceIds?: Id[];
  entityOrTags?: string[];
  lexicalText?: string;
  from?: ISOTime;
  to?: ISOTime;
  limit: number;
}
interface MemoryCandidate {
  recordId: Id;
  recordKind: string;
  content: string;
  sourceIds: Id[];
  authorKind: AuthorKind;
  validTime?: { from: ISOTime; to?: ISOTime };
  knownAt: ISOTime;
  confidence: number;
  supersededBy?: Id;
  matchReasons: string[];
}
interface FindMemoryResult { candidates: MemoryCandidate[]; degradedReason?: string; }
```

Baseline ranking is deterministic and inspectable. `matchReasons` describe retrieval signals, not emotional or behavioral meaning. Superseded records are excluded unless explicitly requested.

## INT-007 — AttemptAction v1

```ts
interface AttemptAction extends Envelope {
  authorKind: "BILL" | "PRIMARY_RAVEN";
  inferenceRunId: Id | null;
  capability: string;
  capabilityVersion: string;
  grantId: Id;
  arguments: unknown;
}
type EvidenceState = "SUCCEEDED" | "FAILED" | "CANCELLED" | "UNKNOWN";
interface ActionReceipt {
  attemptId: Id;
  state: EvidenceState;
  startedAt?: ISOTime;
  finishedAt: ISOTime;
  adapterEvidence: unknown;
  error?: { code: string; detail: string };
  retryOf?: Id;
}
```

Core writes the attempt before dispatch. Capability validates the designated scope again. Timeout after dispatch yields `UNKNOWN` unless the adapter can prove cancellation/failure. Only a new Bill/Raven request may retry `UNKNOWN`.

## INT-008 — InspectState v1

Read endpoints return `observedAt`, `lastConfirmedAt`, `runtimeStatus`, `activeInference`, queue, recent causal timeline, projections, subscriptions/budgets, capability grants, receipts, backup status, and checkpoint status. Private content is shown only on Bill's explicit expanded view; overview defaults to metadata/snippets.

UI disconnect must display the last-confirmed timestamp and cannot animate stale state as live.

## INT-009 — ControlRuntime v1

```ts
type ControlCommand =
  | { kind: "PAUSE"; reason?: string }
  | { kind: "RESUME" }
  | { kind: "CANCEL_INFERENCE"; inferenceRunId: Id }
  | { kind: "EXPORT"; destination: string }
  | { kind: "BACKUP"; label: string }
  | { kind: "DISPUTE_SELF_RECORD"; recordId: Id; note?: string }
  | { kind: "QUARANTINE_SELF_RECORD"; recordId: Id; note?: string }
  | { kind: "RESTORE_SELF_RECORD"; recordId: Id; note?: string }
  | { kind: "SUPERSEDE_NON_SELF_RECORD"; recordId: Id; replacement: unknown }
  | { kind: "CHECKPOINT_DECISION"; workItemId: Id; decision: "APPROVE" | "REVISE" | "STOP"; notes?: string };
```

All commands are Bill-authored and audited. `PAUSE` is idempotent and priority. `RESUME` does not automatically fire missed events except by each authored catch-up policy. File destinations stay inside configured operations roots.

`SUPERSEDE_NON_SELF_RECORD` MUST reject a `SelfRecord`. Dispute/quarantine/restore operations change operator status only; they cannot alter the original Raven-authored content or its `authorKind`. Quarantine removes the record from active self-context while preserving it in lineage and causal inspection. Restore returns that same Raven-authored record to eligibility; it does not create a new Raven claim.

## INT-010 — Converse v1

Input is a Bill-authored SourceEvent and ConversationTurn. Core acknowledges durable commit before inference begins. Output stream identifies inference run and provisional text; a completed Raven turn is durable only after model completion or an explicitly represented interrupted output. A `NO_OUTWARD_EFFECT` disposition is a completed turn with no outward delivery, not an incomplete or null inference. Reconnection retrieves committed turns and current stream status.

## Error envelope

```ts
interface ContractError {
  code: string;
  messageForBill: string;
  technicalDetail?: string;
  retryable: boolean;
  dataSafe: boolean;
  correlationId: Id;
}
```

`messageForBill` states what failed, what did not happen, whether stored data is safe, and the next reversible action. It must not claim Raven's feelings or intent.

## Observability

Every interface emits start/end telemetry keyed by correlation ID. Tool arguments and private content follow Bill's retention settings; source IDs, authority, statuses, durations, hashes, and errors are always retained. No interface requires hidden chain-of-thought.

