# Resume state — 2026-09-12

Parent architecture: main `188fc592318a8223c94afb439d5e22dbfab770f5`, root blueprint revision 1. Extension: avatar-blueprint revision 3. This package is documentation; no avatar or core code was built or run during this change.

Design confirmed (not a claim of implemented services): existing core design provides ModelPort, MemoryPort, CapabilityPort, InspectState, source ledger, authored state and wake/event intake. Supplied reference application maps show command/presentation feedback and resync. Bill explicitly clarified autonomy, memory as reminders, revisability and disclosed affect experiments, and authorized publishing the amended avatar blueprint on a separate branch.

User-reported implementation: Windows CLI using Node 24.13.1 native TypeScript stripping, ModelPort, LM Studio adapter, JSON configuration and one passing adapter test. Bill reports passing typecheck/test, matching expected/actual model, and a live inference taking approximately 32 seconds total. Full details are in LOCAL-CLI-BASELINE.md; these checks were not rerun here.

Verified source location: the CLI project is now present at this branch root. The inspected implementation matches the reported inventory: one-shot non-streaming ModelPort completion, CLI, JSON configuration, and fake HTTP adapter test. No persistence, Core host, capability dispatch, browser surface, identity seed or avatar exists yet.

Unverified: model asset and supported motions, renderer/speech package versions, speech providers, streaming/structured-action model support, and Windows-only live behavior beyond Bill's supplied evidence. These are recorded in QST-1001–1003 and WRK-1000/1001/1002. The first is a code-execution dependency, not a reason to recreate the project or block publishing the plan.

Next: WRK-1004 extends this exact TypeScript project into the minimal persistent Core host and browser conversation surface, retaining `npm start` and the existing ModelPort. After its snapshot and capability seams work, WRK-1001 attaches the first visible body.

The root blueprint remains the core baseline. For avatar work, begin at BLACKBIRD-AVATAR-MODULE.md and apply AUTONOMY-AMENDMENT.md with the qualified parent mapping in INTEGRATION.md. The earlier standalone Blackbird-Blueprint package must not be used unchanged as a build instruction.

No implementation work item is completed. Do not interpret document validation or a successful GitHub push as runtime proof. Publication evidence can be found in this branch's commit history; targeted document checks are recorded in REVIEW.md.
