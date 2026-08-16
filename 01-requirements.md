# Requirements and Uncertainty

Artifact: ART-004. Canonical fields and acceptance text live in `blueprint.json`; this document groups them for review.

## Functional requirements

| IDs | Concern |
| --- | --- |
| REQ-001–003 | Persistent core, one Primary Raven, local LM Studio route |
| REQ-004–006 | Inspectable context, Glass Box, causal ledger |
| REQ-007–010 | Raven-authored self/intention/Workbench/wakes and neutral memory |
| REQ-011–013 | Receipt-grounded effects, Bill controls, honest gaps |
| REQ-014–016 | Human checkpoints and First Presence acceptance |

## Quality and restraint requirements

| ID | Requirement | Why it is architectural |
| --- | --- | --- |
| REQ-101 | Glass Box usable within five seconds, excluding model load | Oversight must not depend on inference readiness |
| REQ-102 | Idempotent events, commits, and effects | Restart cannot duplicate Raven's history or actions |
| REQ-103 | One app process and one SQLite database | Prevents infrastructure becoming the project |
| REQ-104 | Plain-language evidence | Bill must actually be in the loop |
| REQ-105 | Visible background budgets | Autonomy cannot become invisible resource churn |
| REQ-201 | Future adapters preserve v0.1 contracts | Keeps the destination open without building it now |

## Accepted assumptions

- ASM-001: Bill's PC can support Node, LM Studio, and one local model for the slice; WRK-001 measures reality.
- ASM-002: visible slowness is preferable to hidden model substitution.
- ASM-003: localhost plus designated local capability roots is proportionate until remote exposure is requested.
- ASM-004: Bill supplies the static Layer 1 identity seed; BLACKBIRD never generates or rewrites it.

## Non-blocking decisions deliberately postponed

| Question | Decide when | Why not now |
| --- | --- | --- |
| QST-002 exact model/context limit | WRK-001 | Real latency and fidelity are better evidence than architectural guessing |
| QST-003 project-file versus build-status capability | End of WRK-005 | Bill can select the more useful proof after seeing the heartbeat |
| QST-004 wake/inference budgets | WRK-005 | Hardware measurements and lived preference are required |

None prevents Bill from judging this architecture or an agent from starting WRK-001 after approval.

## Primary risks

| Risk | Early warning | Response |
| --- | --- | --- |
| RSK-001 slow primary model | WRK-001 latency feels unusable | Tune context/quantization visibly; do not silently replace Raven |
| RSK-002 covert behavior shaping | A context section says what Raven should feel/do | Stop package; remove source; add regression fixture |
| RSK-003 noisy background loop | Repeated wakes/no-ops or budget overruns | Pause; inspect authored rule; lower budget/backoff |
| RSK-004 OpenClaw authority capture | Needs prompt or loop ownership | Reject integration or reduce to narrow adapter |
| RSK-005 memory meaning laundering | Derived content lacks source or changes record kind | Quarantine adapter; return to explicit MemoryPort |
| RSK-006 needless growth | Deferred component appears without failed check | Remove it and finish current package |
| RSK-007 uncertain side effect | Attempt lacks terminal receipt after crash | Mark UNKNOWN; require inspection; do not retry blindly |

## Source trace

This draft was derived from `INVARIABLE_RULES.txt`, `Master Mechanism Inventory.txt`, `Agentic World.txt`, `Memory Research Summary.txt`, `Affective Computing Summary.txt`, `Parallax_Lattice Summary.txt`, `Sub Rosa Summary.txt`, `Codette Summary.txt`, `Useful Shards.txt`, `Angel's Sanctuary.txt`, and `Research on plugs, mems, games.txt`. Source material supplies mechanisms and failure lessons; this blueprint's registry supplies current intent.

