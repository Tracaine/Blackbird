# Resume state — 2026-09-12

Parent architecture: main `188fc592318a8223c94afb439d5e22dbfab770f5`, root blueprint revision 1. Extension: avatar-blueprint revision 2. This package is documentation; no avatar or core code was built or run during this change.

Design confirmed (not a claim of implemented services): existing core design provides ModelPort, MemoryPort, CapabilityPort, InspectState, source ledger, authored state and wake/event intake. Supplied reference application maps show command/presentation feedback and resync. Bill explicitly clarified autonomy, memory as reminders, revisability and disclosed affect experiments, and authorized publishing the amended avatar blueprint on a separate branch.

User-reported implementation: Windows CLI using Node 24.13.1 native TypeScript stripping, ModelPort, LM Studio adapter, JSON configuration and one passing adapter test. Bill reports passing typecheck/test, matching expected/actual model, and a live inference taking approximately 32 seconds total. Full details are in LOCAL-CLI-BASELINE.md; these checks were not rerun here.

Unverified: source location and actual code interfaces, capabilities beyond that inventory, model asset and its supported motions, renderer/speech package versions and speech providers. These are recorded in QST-1001–1003 and WRK-1000/1001/1002. The first is a code-execution dependency, not a reason to recreate the project or block publishing the plan.

Next: locate the actual checkout/repository branch containing the first slice. Inspect its launcher, manifests, ModelPort and adapter; determine whether any Core/capability/conversation/snapshot implementation exists beyond the reported CLI. Run the existing launcher once if accessible and needed for reconciliation. Record actual paths and the smallest missing seam; then execute the minimum host prerequisite WRK-1004 and attach the body in WRK-1001 when Bill asks to implement.

The root blueprint remains the core baseline. For avatar work, begin at BLACKBIRD-AVATAR-MODULE.md and apply AUTONOMY-AMENDMENT.md with the qualified parent mapping in INTEGRATION.md. The earlier standalone Blackbird-Blueprint package must not be used unchanged as a build instruction.

No implementation work item is completed. Do not interpret document validation or a successful GitHub push as runtime proof. Publication evidence can be found in this branch's commit history; targeted document checks are recorded in REVIEW.md.
