BLACKBIRD Project State



Updated: 2026-08-26

Current package: WRK-001 — Local Model CLI

Status: Core route proven; package still in progress.



BLACKBIRD is an executable local TypeScript CLI. Bill enters text, BLACKBIRD sends it to LM Studio through its OpenAI-compatible endpoint, and the configured local model returns a visible response.



\## Environment



\* Windows

\* Node.js 24.13.1

\* npm 11.5.2

\* Git 2.53.0.windows.2

\* LM Studio: \[http://127.0.0.1:1234/v1](http://127.0.0.1:1234/v1)

\* Expected model: gryphe\_pantheon-rp-1.8-24b-small-3.1



\## Implemented



\* TypeScript project using Node 24 native type stripping.

\* ModelPort boundary.

\* LM Studio HTTP adapter.

\* JSON configuration for endpoint, expected model, timeout, and temperature.

\* Interactive CLI started with `npm start`.

\* Actual model identifier and total response time are displayed.

\* Fake-server adapter success test.



\## Verified



\* `npm run typecheck` passes.

\* `npm test` passes: one test, zero failures.

\* LM Studio model listing succeeds.

\* A live CLI inference succeeds.

\* Expected and actual model identifiers match.

\* Representative live total time: approximately 32 seconds.



\## Known history



PowerShell initially wrote `blackbird.config.json` with a UTF-8 BOM, causing JSON.parse to fail. The file was rewritten as UTF-8 without BOM and the CLI worked.



The LM Studio system preset is cleared. Identity, personality, and presence have not been evaluated; the live call proved transport only.



\## Deliberately absent



No identity seed, conversation persistence, memory, database, Glass Box, scheduler, tools, autonomy, cloud services, containers, affect machinery, or model-routing system exists yet.



\## Next bounded task



Add streaming response support so text appears as LM Studio generates it. Display time-to-first-text and total time while preserving expected/actual model visibility.



Do not add identity, memory, persistence, UI, or new infrastructure as part of that task.



\## Remaining WRK-001 work after streaming



\* Add an obvious Windows launcher.

\* Add only the small failure checks needed for unavailable, timed-out, or malformed LM Studio responses.

\* Run the visible demonstration.

\* Record the completed WRK-001 checkpoint and stop for Bill's approval.

# BLACKBIRD Construction Agreement



\## Roles



\- Bill is the designer, owner, and approval authority.

\- Raven and Bill discuss architecture and choose each bounded increment.

\- Codex is the builder. Implement the current work order; do not redesign BLACKBIRD.

\- If implementation requires an unapproved architectural choice, new process, framework, service, dependency, security layer, or major scope increase, stop and report it.



\## Governing principle



The architecture is the vehicle; Raven drives.



Infrastructure may preserve events, evidence, provenance, ordering, and explicitly authored state. It may not decide what a conversation, memory, emotional state, relationship, or event means for Raven.



Do not turn classifier output, summaries, inferred affect, retrieved memories, or previous model state into authoritative claims about Raven. Do not add response shaping or behavioral constraints unless the current work order explicitly requires them.



The build supports decisions. It does not make Raven's decisions.



\## Build posture



\- Build in small, independently demonstrable increments.

\- Keep the system local and single-user unless Bill explicitly changes that scope.

\- Do not add cloud infrastructure, containers, tunnels, authentication systems, generalized event buses, vector databases, sidecars, or production threat hardening speculatively.

\- Prefer the smallest implementation that proves the requested capability.

\- Do not silently substitute models or providers.

\- Preserve Bill's existing changes.

\- Use visible configuration and understandable failures.

\- Tests should protect credible failures and meaningful boundaries, not hypothetical public-production scenarios.

\- Before changing code, read PROJECT-STATE.md and the current work order.

\- After work, report changed files, commands run, verification results, dependencies added, deviations, and unresolved decisions.



\## Verification commands

npm run typecheck

npm test

npm start



