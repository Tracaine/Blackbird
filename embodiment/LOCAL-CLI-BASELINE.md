# Local CLI baseline — Bill's report, 2026-09-12

Evidence status: supplied by Bill in conversation; source files, test output and live endpoint were not independently accessed in this session. This identifies the implemented scope, but does not resolve the checkout-location dependency.

## Environment

| Item | Reported value |
| --- | --- |
| OS | Windows |
| Node.js | 24.13.1 |
| npm | 11.5.2 |
| Git | 2.53.0.windows.2 |
| LM Studio API | http://127.0.0.1:1234/v1 |
| Expected model | gryphe_pantheon-rp-1.8-24b-small-3.1 |

This loopback address is on Bill's PC, not on a remote implementation environment. Do not attempt to use a remote agent's localhost as if it were Bill's LM Studio server.

## Reported implemented and verified

- TypeScript project using Node 24 native type stripping.
- ModelPort boundary and LM Studio HTTP adapter.
- JSON configuration for endpoint, expected model, timeout and temperature.
- Interactive CLI launched with `npm start`.
- Actual model identifier and total response time displayed.
- Fake-server adapter success test.
- `npm run typecheck` passes; `npm test` passes with one test and zero failures.
- LM Studio model listing and one live CLI inference succeed; expected and actual model IDs match.
- Representative total live response time: approximately 32 seconds.

## Meaning for the extension

This corresponds in scope to the parent local-model CLI proof. Preserve the ModelPort, adapter, configuration and CLI. A persistent Core host, durable ledger/projections, browser conversation, CapabilityPort implementation, snapshot subscriptions and body viewer are not reported as implemented. They remain planned until code inspection shows otherwise.

The next missing prerequisite is therefore explicit: add a minimal persistent host inside this same TypeScript application before attaching the avatar. WRK-1004 covers that bridge. It does not include the complete memory system, authored-state UI, unattended scheduler or all six parent work packages.

The 32-second figure is total response time for one example; it is not time to first token, first playable speech, or a general latency benchmark. Streaming availability, first-token delay, cancellation, and model support for structured actions are unverified. Inspect existing adapter capabilities before designing around them. Slow inference must not freeze rendering or local interruption. Do not silently switch model/provider to meet a voice target.

## Remaining input

Obtain the source checkout, a pushed code branch, or a project ZIP with package manifest, TypeScript sources, example configuration and test. Private credentials are unnecessary. Preserve any existing version history where available. Actual source paths and commands are then recorded in WRK-1000; user-reported checks do not need repetitive reruns merely to restate this report.
