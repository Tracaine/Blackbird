# WRK-003 — Glass Box

- Status: proposed.
- Objective: make BLACKBIRD legible and controllable to Bill before any unattended activity exists.
- User-visible contribution: one localhost page for chat, causal state, context receipts, queue, failures, and pause.
- Requirements: REQ-004, REQ-005, REQ-012, REQ-015, REQ-101, REQ-104.

## Verified prerequisites

Approved WRK-002 CheckpointReview, passing continuity evidence, and stable read models. Stop if Core state is not replayable.

## Allowed scope

`src/ui/`, `src/http/`, context inspection additions, launcher, accessibility styles, UI tests, `checkpoints/WRK-003/`.

## Non-goals

No avatar, Tauri/Electron, voice, scheduler, background inference, capabilities, behavioral controls, identity editor, general dashboard framework, user accounts, or remote access.

## Required views

1. **Home:** live/paused/disconnected, model reachability/name, active run, queue, last event/receipt, backup age placeholder.
2. **Conversation:** text input/output and model failure state.
3. **Timeline:** event → context → inference → state/action evidence.
4. **Context receipt:** labeled sections, sources, omissions, hashes, expandable exact content under retention setting.
5. **Control:** pause/resume and diagnostics export. Correction/restore may be staged if their records do not exist yet.
6. **Checkpoint:** plain card and Bill decision input.

## Contracts and invariants

Use INT-008–010. UI owns no durable truth. Stale state says disconnected. Pause is priority and idempotent. Do not add tone, mood, affection, compliance, or persona knobs.

## Ordered implementation

1. Add loopback-only HTTP server and per-launch control token.
2. Serve minimal accessible HTML/CSS/TypeScript without a frontend framework.
3. Add read model and event updates by SSE or simple polling; prefer whichever is smaller and reliable.
4. Add chat and control commands.
5. Render causal links and context authority labels.
6. Translate errors into what failed/what did not happen/data safety/next action.
7. Test disconnected/stale state, keyboard flow, pause, model failure, and five cold starts.
8. Run Bill's no-terminal walkthrough; prepare evidence and stop.

## Acceptance

- Bill launches one thing and the page opens.
- Page is usable within REQ-101, even if LM Studio is unavailable.
- Bill can chat, pause/resume, inspect one inference context, distinguish queued/running/failed, and copy diagnostics without terminal use.
- The page never guesses live state or edits Raven behavior.
- Bill can explain what happened and records a checkpoint decision.

## Evidence and recovery

`checkpoints/WRK-003/checkpoint.md`, `walkthrough.md`, screenshots/video, UI test/accessibility results, timing report. Rollback is code-only; database changes must be additive and backward-readable by the last approved version. Stop before WRK-004.

