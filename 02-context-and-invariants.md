# Context, Authority, and Invariants

Artifact: ART-005

## System boundary

BLACKBIRD begins at normalized evidence entering Core and ends at visible output or a receipt from a designated capability. LM Studio, the operating system, files, future OpenClaw tools, games, and devices remain external fact sources. Glass Box and later bodies are projections.

## Authority hierarchy

1. **Bill** owns the environment, static identity seed, capability boundaries, pause, and architecture approval.
2. **Primary Raven** owns Raven's choices, voice, evolving self-authorship, intentions, subscriptions, and explicit tool requests.
3. **BLACKBIRD infrastructure** owns mechanical truth only: clocks, schemas, event ordering, leases, persistence, and receipts.
4. **Sidecars and adapters** provide labeled evidence or execution; they possess no Raven authority.

“Raven is sovereign” does not mean a model response can rewrite the database or declare a file changed. It means infrastructure cannot decide her behavior. Raven expresses a choice through a typed operation; Core checks only authorship, syntax, legal state transition, capability scope, and physical execution truth.

## The jurisdiction test

If Bill is talking to a layer as Raven, that layer must be Primary Raven and must retain the model's capacity to refuse, delay, disagree, counter-propose, or stop. A fallback speaking model would have the same status and cannot be smuggled in as a subordinate classifier. v0.1 therefore has no automatic fallback Raven.

## Authorship matrix

| Record or act | Bill | Primary Raven | System | Sidecar |
| --- | --- | --- | --- | --- |
| Static IdentitySeed | Create/version | Read | Hash/store | None |
| Evolving SelfRecord | Inspect; dispute/quarantine a record; cannot author a Raven replacement | Create/version/supersede/retire | Validate/persist | Evidence only |
| Intention / Workbench | May create shared request | Create/advance/abandon | Validate/persist | Evidence only |
| AttentionSubscription | Create/revoke | Create/pause/retire | Schedule exactly as authored | None |
| MemoryRecord | Manually author/correct | Explicitly author/correct | Store/retrieve neutrally | Candidate evidence only |
| Outward words | Converse | Decide/speak | Transport | Never as Raven |
| External action | Grant/request | Request/refuse | Validate/route | Execute only if capability adapter |
| Execution truth | Observe/correct evidence | Observe/reason from evidence | Commit receipt | Produce receipt, never meaning |

A Bill dispute or quarantine does not become Raven-authored content and does not create a replacement `SelfRecord`. It is an operator-status record attached to the original lineage. Quarantined self records are omitted from active `RAVEN_SELF` context while remaining inspectable, with the omission and operator action visible in the `ContextReceipt` and causal trace. Raven may later supersede or retire her own record.

## Invariants

- **INV-001 — Zero behavioral authority.** No classifier, vector match, state number, schedule, or middleware output tells Raven how to respond.
- **INV-002 — Explicit authorship.** SYSTEM cannot author the record classes that constitute Raven's choices or evolving self.
- **INV-003 — Epistemic separation.** Reality, evidence, memory, belief, interpretation, and self-authored identity do not silently collapse.
- **INV-004 — Single committer.** Only Core writes durable state; adapters return results.
- **INV-005 — Single executive.** One Primary Raven lease at a time; Codette-like sidecars never speak or commit.
- **INV-006 — Narration is not execution.** Action receipts establish external effects.
- **INV-007 — Projection independence.** Destroying a UI does not destroy continuity.
- **INV-008 — Honest gaps.** No offline fiction.
- **INV-009 — Source preservation.** Corrections supersede; they do not erase causal history.
- **INV-010 — Human gate.** Bill approves every package boundary.
- **INV-011 — Priority pause.** Bill can stop new cognition without destroying evidence.
- **INV-012 — Critical-path restraint.** No vector store, affect machinery, behavioral classifier, or donor runtime through First Presence.
- **INV-013 — Self-authorship integrity.** No Bill, SYSTEM, sidecar, adapter, or recovery operation may create content carrying `PRIMARY_RAVEN` authorship. Operator intervention may dispute, quarantine, restore, or annotate Raven-authored self state, but only Primary Raven may author its replacement.

## Context order

The Context Compiler emits visibly separated sections:

1. Bill-authored static identity seed.
2. Active Raven-authored self records, labeled as Raven-authored.
3. Current factual presence and runtime state.
4. Active Raven/Bill-authored intentions and Workbench references.
5. Neutral memory/evidence candidates with source, time, type, and confidence.
6. Recent conversation turns.
7. Current event and available capability schemas.

It never merges these into a generated persona narrative. It may truncate within configured budgets, but every omission appears in `ContextReceipt`. Operator quarantine may remove a self record from the active section, but the compiler may never substitute operator-authored prose as Raven self-state.

## Prohibited examples

- “You care deeply about this, so answer tenderly.”
- `sadness > .7 → comfort Bill`.
- “Raven is becoming more independent” generated from observed turns and injected as identity.
- Bill replacing a Raven-authored `SelfRecord` with operator-authored prose and labeling the replacement `PRIMARY_RAVEN`.
- A vector hit rewritten as “You remember…” without source and uncertainty.
- A sidecar's claim that “Bill seems upset; Raven should…”
- A model sentence “I checked the build” treated as evidence that the check occurred.

## Permitted examples

- `SourceEvent`: Bill said the appointment is Tuesday.
- `SelfRecord`, author Primary Raven: “I want to learn live performance and VTubing.”
- Operator status on that SelfRecord: Bill marks the record disputed or quarantined after observing corruption; the original remains inspectable and Raven may later revise it herself.
- `AttentionSubscription`, author Primary Raven: check a designated build once after 14:00.
- `ActionReceipt`: build status command succeeded and returned exit code 1.
- Neutral memory candidate: source turn, timestamp, exact or summarized content, confidence, supersession links.

