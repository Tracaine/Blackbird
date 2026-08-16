# Quality, Security, and Operations

Artifact: ART-010

## Proportionate operating target

This is a single-user home application, not a public service. Reliability means Bill can start it Tuesday, understand its state, recover its file, and avoid accidental effects. Security work is limited to risks created by the actual local capability surface.

## Performance and budgets

- Glass Box is served within five seconds of Core startup, independent of model readiness.
- Only one Primary inference runs; queue length and age are visible.
- Model latency has no hard architectural target until WRK-001 measures Bill's model. The checkpoint records time-to-first-token and total time.
- Default unattended budgets are conservative placeholders and remain disabled until Bill/Raven creates a wake: maximum wakes/hour, model minutes/hour, actions/hour, and minimum backoff.
- Budget exhaustion defers with evidence; it never silently discards or routes to a cheaper speaking model.

## Local security boundary

- Bind HTTP to `127.0.0.1` only.
- Use a per-launch control token and strict origin policy for state-changing browser calls.
- Store secrets outside prompts, traces, and exports by default.
- Capabilities operate only in Bill-designated roots/resources and reject traversal outside them.
- Do not add accounts, OAuth, a reverse proxy, TLS, containers, a firewall project, or penetration-test work unless remote exposure becomes an accepted requirement.

This does not claim the PC is safe from hostile local software. BLACKBIRD is not a security boundary against an attacker who already controls Bill's account.

## Privacy and inspectability

All durable data is local. Bill can view the exact database/export paths, current retention mode, active capability grants, wake subscriptions, and whether exact contexts are retained. ContextReceipt metadata is always kept; exact compiled prompts may be optional because they can duplicate sensitive data.

No telemetry leaves the machine in v0.1. LM Studio requests remain local. A future network adapter must receive its own explicit capability grant and ADR.

## Accessibility and legibility

Glass Box uses plain labels, keyboard-accessible controls, high-contrast status, and redundant text—not color alone—for running, paused, failed, unknown, and disconnected states. Errors include what failed, what did not happen, whether data is safe, and the next reversible action.

## Logs and traces

Use structured local logs correlated by event/inference/action IDs. Default logs omit secrets and do not invent semantic summaries. Glass Box translates traces into a causal timeline. Raw logs remain downloadable for implementing agents but are not Bill's primary interface.

## Backup and restore

- Automatic daily backup may be enabled only as a mechanical operation with visible last-success time.
- A package checkpoint triggers a named snapshot.
- Backup contains a consistent SQLite copy, identity-seed versions, configuration, and designated Workbench artifacts.
- Restore occurs into a new directory, runs integrity/replay checks, and shows a comparison before activation.
- Keep at least three checkpoint snapshots during v0.1; deletion is Bill-controlled.

## Pause, shutdown, and recovery

Pause stops new executive leases and new action dispatch. It does not delete queued events. In-flight model calls may be cancelled; in-flight side effects follow their capability contract. Shutdown writes a clean marker only after store checkpoint. Startup after an unclean exit enters recovery and surfaces unknown effects before unattended wakes resume.

## Support envelope

One launcher starts Core and opens Glass Box. One visible status page reports database path, backup age, LM Studio reachability/model name, pause state, active run, queue, wake budget, last capability receipt, and build version. A “copy diagnostic bundle” button gathers non-secret evidence for a coding agent.

