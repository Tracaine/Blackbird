# Blueprint review — 2026-09-12

Scope: documentation and integration design only. Reviewed parent blueprint and contracts, the earlier standalone companion proposal, supplied source-map evidence, and Bill's autonomy clarification. No application implementation or runtime testing performed.

## Semantic review

- Ownership: existing Core remains the sole durable committer and primary inference authority. Embodiment adapters own transient presentation only. No duplicate memory, cognition or identity service is introduced.
- Authorship: prior self-reports can inform a later call without requiring consistency. Meaningful presentation choices cite their origin. Optional experimental signals are explicitly attributable; no baseline classifier secretly controls affect.
- Command flow: an accepted primary action is authorized before dispatch; continuing animation retains that authorization after the model turn ends. Adapter acknowledgement does not become a false completion receipt.
- Recovery flow: epoch plus snapshot and actual observation replaces stale presentation. Unknown effects are not blindly retried; finite gestures and speech are not replayed on reconnect.
- Voice flow: playback time drives mouth cues; local cancellation invalidates old generations. Generated and delivered text remain distinguishable.
- Scope: baseline body precedes voice and ambient increments. The earlier standalone core/memory work sequence is superseded for avatar integration. Research algorithms and custom assets remain separately selectable later work.

## Outstanding readiness dependency

QST-1001 is intentionally open and blocks implementation: Bill's built first slice is not present in the inspected repository branches. WRK-1000 must locate and reconcile it. Exact runtime paths and commands cannot honestly be supplied until then. Publishing an architecture extension does not resolve this dependency.

Structural validation and local reference checks are run before publication. Strict execution-readiness validation is expected to report QST-1001; this must not be hidden by declaring the question resolved or marking it deferred. No claim of full implementation readiness is made.

## Revision 2 baseline reconciliation

Bill supplied a detailed CLI report. Record it as user-reported evidence, including exact environment and total response time. The implemented inventory includes ModelPort/adapter/CLI, not proof of the larger Core stack. WRK-1004 now explicitly bridges that CLI to the minimal persistent host before body attachment. No performance conclusion is drawn about first token or first speech from the total-time sample. Source location remains QST-1001.

## Recorded document checks

- Standard blueprint validation: 0 errors, 0 warnings.
- Strict readiness validation: exactly 1 error, the intentionally unresolved QST-1001 implementation-location dependency; 0 warnings.
- Parent/extension ID collision check: none.
- Local Markdown link check: all resolve.
- No runtime commands or application tests run.

## Revision 3 source reconciliation

The supplied CLI archive was inspected and added at the branch root without implementation edits. It confirms the ModelPort/adapter/CLI scope and absence of Core persistence, browser, capability and avatar code. Typecheck and the single fake-server adapter test pass in the available Node 24 environment. QST-1001 and WRK-1000 are resolved by source evidence; WRK-1004 is now the first implementation package. The live Windows LM Studio call was not repeated from this environment.

