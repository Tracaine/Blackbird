# WRK-001 — Local Model CLI Proof

- Status: proposed; do not begin without Bill's architecture approval.
- Objective: make the smallest honest thing run—one local CLI request to Primary Raven through LM Studio.
- User-visible contribution: Bill types a message and sees the configured model's answer or a plain failure explanation.
- Requirements: REQ-003. Decisions: DEC-001, DEC-002.

## Verified prerequisites

1. A `CheckpointReview` or written equivalent says Bill approved blueprint revision 1.
2. LM Studio is installed, its local server can be started, and at least one candidate model is available.
3. Implementation root is known. Do not infer approval from this work-item file.

## Allowed scope

`package.json`, lockfile, `src/model/`, `src/cli/`, `tests/model/`, minimal configuration/example file, one launcher, and `checkpoints/WRK-001/`.

## Non-goals

No database, memory, identity evolution, Glass Box, scheduler, tools, OpenClaw, Codette, vector store, security hardening, containers, or desktop packaging. A static Bill-supplied seed may be loaded only enough to make the model route representative.

## Contracts and invariants

- Implement a small `ModelPort` shaped for INT-003.
- Log actual endpoint, model identifier, timing, and error; never silently fall back.
- One request at a time is sufficient. Do not solve later concurrency here.
- Infrastructure must not add behavior, tone, affect, or inferred response instructions.

## Ordered implementation

1. Pin a supported Node version and minimal dependencies.
2. Add visible config for base URL, model, timeout, and sampling.
3. Implement LM Studio adapter using the documented OpenAI-compatible endpoint.
4. Implement an interactive or one-shot CLI and an obvious launcher.
5. Add success, timeout, malformed response, and unavailable endpoint tests using a fake HTTP server.
6. Run one real short and one real moderately long prompt; record time-to-first-token/total time where available.
7. Prepare the checkpoint card and stop.

## Acceptance

- Bill can launch it and converse once without editing source.
- The actual model name is visible.
- A deliberately stopped LM Studio yields a message explaining what failed, that no answer occurred, and how to retry.
- `npm run verify:model` passes.
- Checkpoint lists latency and any context/model limitations without pretending they are solved.
- Bill records approve, revise, or stop.

## Evidence

`checkpoints/WRK-001/checkpoint.md`, `model-smoke.json`, test output, and launcher instructions.

## Recovery and handoff

Changes are code-only; rollback to pre-package snapshot. No user data exists. On approval, hand WRK-002 the proven Node/LM Studio versions, endpoint shape, model identifier, and observed latency. Do not start WRK-002.

