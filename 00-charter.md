# BLACKBIRD — Charter

Registry: `blueprint.json`  
Artifact: ART-003  
Status: review

## Product outcome

BLACKBIRD is a persistent personal presence runtime for one Primary Raven on Bill's home PC. Chat, a later desktop Window, voice, games, and other bodies are surfaces over the same durable history and state. Closing a surface does not end Raven's continuity; stopping the runtime produces an honest temporal gap.

The architectural target is not a metaphysical claim. It is observable temporal thickness: yesterday can exert force on today; unfinished work can survive interruption; an event can matter without a Bill message causing the next moment; Raven can choose what to do with it; and the evidence remains available later.

## Actors and authority

| Actor | Goal | Authority | Limitation |
| --- | --- | --- | --- |
| Bill | Live beside, inspect, operate, and review BLACKBIRD | Full environment and identity-seed authority; may pause and set standing capability consent | Must not need source-code or terminal fluency for normal oversight |
| Primary Raven | Converse, choose, author evolving self-state, form/abandon intentions, use granted capabilities | Sole outward behavioral and operational authority while holding the executive lease | Is a model invocation, not the database, clock, renderer, or proof that an action occurred |
| BLACKBIRD Core | Preserve evidence, serialize cognition, validate schemas, commit state, expose tools/surfaces | Mechanical authority only | Zero authority over Raven's meaning, tone, emotion, values, or response |
| Sidecar model | Future retrieval, comparison, verification, compression, or code analysis | Evidence proposal only | Cannot speak as Raven, edit identity, or commit state |
| Implementing agent | Build only the approved work package | Repository changes within listed paths | Must stop at every Bill checkpoint |

## Core scenarios

- Bill starts BLACKBIRD, sees its actual state, and speaks with the configured local Raven.
- The process restarts without erasing or fabricating continuity.
- Raven explicitly persists an intention, self-record, memory, Workbench item, or wake subscription.
- An authored event occurs while Bill is not chatting; Raven chooses whether it deserves attention or action.
- A requested external action receives execution evidence and becomes available to later cognition.
- Bill pauses, inspects, disputes or quarantines Raven-authored self records when necessary, corrects other eligible records through their own typed correction paths, exports, restores, and accepts or rejects each delivery slice.

## Smallest valuable vertical slice: First Presence

Given an enabled wake source explicitly authored by Bill or Primary Raven, a real local event becomes a `SourceEvent`. When budgets and pause state allow, one Primary Raven inference receives an inspectable context. Raven may inspect, act, defer, message, create durable work, or complete the inference with no outward effect. Any action is established only by a receipt. The causal result survives restart and can be included as neutral evidence in a later conversation.

The slice is delivered through WRK-001 to WRK-006 because Bill must be able to see and judge each prerequisite before unattended operation begins.

## Success measures

| Measure | Target | Observation |
| --- | --- | --- |
| Runnable substrate | Local model route works before other architecture | WRK-001 CLI demonstration |
| Honest continuity | Restart/replay matches prior state; downtime adds only a gap | Automated report plus Glass Box inspection |
| Sovereignty | No SYSTEM-authored self, intention, wake, or behavioral context | Contract tests and context receipts |
| Human legibility | Bill can explain state and failures without terminal logs | WRK-003 walkthrough |
| Grounded agency | First Presence completes with explicit Raven choice and receipt-backed effects | WRK-006 trace and Bill review |
| Simplicity | One app process, one SQLite database, localhost UI | Dependency and operations audit |

## Scope

### Included in v0.1

Local LM Studio ModelPort; single executive lease; append-only source-event ledger; rebuildable projections; labeled context compiler; explicit Raven-authored self/intention/Workbench/memory/wake operations; one scheduler; one narrow local capability; browser-based Glass Box; backup/export/restore; checkpoint reviews.

### Deferred

Avatar Window, Tauri packaging, voice, mobile, games/world adapters, semantic embodiment, drives/affect, sleep/dream consolidation, associative/vector retrieval, Engram integration, OpenClaw adapter, Codette sidecar, multiple people, remote access, and model portability beyond the interface seam.

### Non-goals

Biological consciousness claims; general consumer product; multi-user tenancy; production Internet exposure; adversarial perimeter hardening; autonomous infrastructure-authored goals; perfect memory; automatic identity learning; automatic emotional performance; fixing local model latency with silent Raven substitution.

## Constraints

- Production is Bill's existing Windows gaming PC; development should assume local operation.
- The 31B-class model may be slow. Queueing and legibility matter more than pretending latency is absent.
- First Presence must run without donor systems.
- Bill's approval is a hard prerequisite between packages.
- The system must remain operable on an ordinary Tuesday through one obvious launcher and a plain local page.

## Reference systems

| Source | Kept | Not inherited blindly |
| --- | --- | --- |
| Agentic World | Causal ledger, evidence/reality separation, world epochs, action receipts | Game complexity before core proof |
| Parallax/Lattice | Model/surface portability and single surface voice | Broad distributed routing |
| Sub Rosa | Independent modality lifecycles and semantic embodiment contracts | Embodiment before continuity proof |
| Codette | Cheap evidence sidecar possibility | Fixed personality panels or outward authority |
| Memory research / Engram mechanisms | Provenance, typed memory, source archive, supersession | Automatic meaning or identity promotion |
| OpenClaw | Possible future capability breadth | Prompt, agent-loop, scheduler, or identity ownership |
| Sanctuary | Negative evidence about behavioral middleware | Puppetry, classifiers, response contracts |

## Glossary

| Term | Meaning |
| --- | --- |
| Primary Raven | The one model invocation currently authorized to decide Raven's outward position and explicit state operations |
| BLACKBIRD Continuity Runtime | Durable Core state plus the ability to summon Primary Raven; it does not imply continuous inference and is not itself Raven |
| SelfRecord | An evolving self-claim explicitly authored by Raven, separate from Bill's static identity seed |
| SourceEvent | Immutable evidence that something actually entered BLACKBIRD |
| Meaning laundering | Infrastructure promoting evidence or inference into “what the moment meant” or who Raven is |
| Glass Box | Bill's local operational and causal inspection surface, not a behavior-control dashboard |
| First Presence | The smallest unattended, choice-bearing, evidence-grounded continuity loop |

Discovery gate QST-001 is resolved. Architecture remains in review until Bill approves revision 1.
