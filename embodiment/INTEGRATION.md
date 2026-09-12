# Integration and change impact

## Verified baseline

Parent: Tracaine/Blackbird main commit `188fc592318a8223c94afb439d5e22dbfab770f5`, root registry revision 1. Inspected on 2026-09-12. Main contains architecture and research documents; no runtime implementation was visible. The available `raven/blueprint-review-fixes` branch was also inspected earlier in this session and contained documents. Bill reports that his first implementation slice exists; its location and real interfaces must be reconciled before coding. Do not treat stale root resume text as proof that his slice is unbuilt.

This extension activates the avatar/voice portion of parent REQ-201. Numeric IDs 1000–1999 are reserved for this module, avoiding the existing core IDs and allowing the standard blueprint validator. An earlier conversational suggestion used EMB-prefixed IDs; this package uses the validator-compatible numeric range instead. Parent references below are qualified as parent claims and are not duplicated as extension owners.

## Reuse map

| Parent owner | Integration use | Extension responsibility |
| --- | --- | --- |
| CMP-001 Core | Lifecycle, active primary run, authored commands, durable commits | Register body attachments and dispatch semantic intents |
| CMP-002 Store | Ledger and rebuildable projections | Persist attachment/preferences and meaningful intent/receipt events |
| CMP-003 Context Compiler | Attributed current evidence and capability inventory | Include body capabilities, freshness and outcomes without emotional prescriptions |
| CMP-004 ModelPort | Existing conversation and model selection | Receive semantic action output; keep speech transport downstream |
| CMP-005 Wake/Event Intake | Event ingestion, schedules and budgets | Accept ambient observations and configured cognition opportunities |
| CMP-006 CapabilityPort | AttemptAction, author proof, action receipts | Implement body actions as a capability adapter |
| CMP-007 MemoryPort | Source-preserving context and authored records | Store relevant experiences via Core; no avatar memory database |
| CMP-008 Glass Box | InspectState, conversation, controls | Viewer entry, capabilities, transcript, receipts and presentation status |

The extension registry's CMP-1000 is a reference boundary to these existing owners, not a new service. Dependencies point inward to existing contracts. Adapters receive no database handles.

## Direct and transitive changes

| Existing claim/artifact | Treatment in this branch | Consequence |
| --- | --- | --- |
| Parent REQ-201; DEC-004/011; delivery avatar deferral | Activate an independently scheduled avatar extension after minimal actual prerequisites | Full completion of all six core packages is not required to start avatar attachment |
| Parent INV-001/002; REQ-007; DEC-005; ADR-002 | Clarify through AUTONOMY-AMENDMENT: explicit evolving authorship, revisability, no hidden behavioral author | Update future context and authored-state integrations; preserve exact origin and supersession |
| Parent REQ-009; DEC-006; ADR-003 | Keep configured/authored wake sources; allow enabled cognition-opportunity schedules to support initiative | No per-wake approval or automatic obligation to speak; richer opportunity configuration belongs to increment 3 |
| Older Invariable Rules static identity wording | Superseded only where it forbids the explicitly clarified evolving authorship | Do not delete the historical document or treat it as the latest user decision |
| Parent DEC-007, memory consolidation deferral | Retain as a core delivery choice | The avatar extension does not build automatic identity or relationship consolidation |
| Parent INV-004–007 and action evidence contracts | Retain single committer, one primary stream, action evidence, independent surfaces | Extend records additively; renderer restarts do not restart the companion |
| Parent REQ-103 / DEC-001 | Retain one core and one database; add a browser renderer as a surface | Renderer/audio clocks are local; no new distributed host or broker |
| Parent INT-007/008/010 | Extend via body capability, snapshot subscription and speech delivery receipts | Preserve source IDs, UNKNOWN outcomes, and existing conversation identity |
| Earlier standalone blueprint WRK-001–006 | Superseded as avatar handoff by WRK-1000–1003 | Remove duplicate core/memory build prerequisites; carry forward useful motion, speech, asset and recovery design |

Transitive impact: context compilation, wake configuration, action evidence, projection schemas and UI views must use the amendment and new contracts when touched. No core migration is executed by publishing these documents. Future persistence changes use additive migrations and Core's backup/export path. No runtime acceptance evidence or approval is asserted by this publication.

## Evidence from the reference application

Inspected supplied source maps directly. `agent-bridge-BYGRNhT0.js(1).map` embeds character-controller-agent, CharacterControllerBridge, visual-state-derive and resync sources: backend phone/typing effects are forwarded to Unity; client-presented dance/popcorn state is reported back; reconnection captures current visual state. This supports a command-plus-feedback pattern.

`character-store-LWaGZRG-.js(1).map` distinguishes conversation character ID, display name and scene ID, and documents scene/conversation reconnect coupling. Blackbird instead binds independent companion, surface, body-instance and asset-package IDs.

Assembly-CSharp symbols include Pipecat conversation, speech, gaze, activity and character-animation classes. These support the existence of separate subsystems, not a verified reconstruction of proprietary motion algorithms. Snapshot reports prove only what their source can observe.

Use these observations as architectural inspiration. The implementation has no dependency on the supplied DLLs, extracted application code, account services or backend. The supplied binaries/maps are not added to this branch.
