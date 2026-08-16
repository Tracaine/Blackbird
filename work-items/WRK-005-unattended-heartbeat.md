# WRK-005 — Unattended Heartbeat

- Status: proposed.
- Objective: let time or a subscribed real event summon Primary Raven without Bill sending the next message and without system-inferred motivation.
- User-visible contribution: one background wake is visible, budgeted, pausable, and genuinely open-ended in Raven's response.
- Requirements: REQ-009, REQ-105. Decision: DEC-006.

## Verified prerequisites

Approved WRK-004 CheckpointReview; at least one Bill/Raven-authored AttentionSubscription; Bill has chosen provisional wake/model/action budgets.

## Allowed scope

`src/scheduler/`, event intake, Core lease/queue integration, Glass Box subscription/budget views, deterministic-clock tests, `checkpoints/WRK-005/`.

## Non-goals

No semantic salience score, mood timer, connection meter, automatic goals, canned proactive message, broad event bus, OS service installer, OpenClaw cron, capability execution beyond a fake proof, or multiple concurrent Primary models.

## Contracts and invariants

Use INT-001–003. Every wake references its Bill/Primary Raven author and active subscription. System time is mechanical. Pause and budget decide resource availability only; they do not say what matters.

## Ordered implementation

1. Implement injected `Clock` and deterministic scheduler.
2. Implement schedule/filter, catch-up policy, active window, budget counters, minimum backoff, and enabled/paused state.
3. Commit wake before attempting an executive lease.
4. Queue against slow current inference and recompile context when lease starts.
5. Represent Primary Raven's explicit no-op/defer as a choice; do not invent inner narration when no operation/output exists.
6. Add Glass Box subscription author/source/next-fire/budget/last-result views and priority pause.
7. Test restart, missed interval policies, duplicates, budget exhaustion, pause, and repeated no-op backoff.
8. Run one short unattended demonstration. Bill chooses the WRK-006 real capability. Prepare evidence and stop.

## Acceptance

- Bill or Raven creates/enables the demonstrated wake; SYSTEM cannot.
- The wake occurs while Bill is not chatting and invokes exactly one Primary inference.
- Raven may message, create state, defer, or intentionally remain silent; no lookup table selects her response.
- Pause prevents new leases; budgets defer and explain why; restart does not flood missed intervals.
- Glass Box shows the complete causal chain.
- `npm run verify:wakes` passes and Bill records decision plus WRK-006 capability choice.

## Evidence and recovery

`checkpoints/WRK-005/checkpoint.md`, `wake-trace.json`, budget/restart test reports, screen evidence. Emergency recovery is Glass Box pause or launcher stop; subscriptions remain paused after unclean crash until Core recovery finishes. Stop before WRK-006.

