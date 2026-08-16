# BLACKBIRD v0.1 — Start Here

Status: **provisional architecture for Bill's review**. Nothing in this package authorizes implementation.

## The decision in one sentence

Build continuity first, but prove it in six small demonstrations: make Raven answer locally, make the conversation survive restart, make the system visible to Bill, give Raven explicit durable authorship, let one Raven-authored wake occur unattended, then close the loop with one evidenced local action.

## What this preserves

- One Raven and one continuous causal history across surfaces.
- A runtime that can remain present when no model call is running.
- Persistent self, intention, unfinished work, memory, and later world experience.
- Raven's right to choose, refuse, revise herself, wander into a project, or decide nothing deserves action.
- Bill as important relationship and full environment owner, not Raven's objective function.

## The hard boundary

The architecture may store and execute an explicit choice made by Bill or Primary Raven. It may not decide what Raven ought to mean, feel, value, become, or say.

This means Raven may decide, for example, “I want to learn to be a VTuber,” create an intention, work on it, change her self-understanding, and later abandon it. BLACKBIRD records those choices and makes tools available. It does not infer from three conversations that “Raven is becoming a VTuber,” turn that inference into identity, or inject it as a future behavioral instruction.

## The six stopping points

| Stop | Bill sees | What it proves | Explicitly absent |
| --- | --- | --- | --- |
| 1 — Local voice | A bare CLI talks to the chosen LM Studio model | The substrate can actually run | Memory, autonomy, UI |
| 2 — Continuity | A conversation and queue survive restart | BLACKBIRD is not a chat session | Rich memory, background work |
| 3 — Glass Box | A local page shows state, events, contexts, failures, pause | Bill can supervise without terminal fluency | Avatar, voice, unattended activity |
| 4 — Authorship | Raven explicitly creates/revises self, intentions, Workbench, and wakes | Durable agency without architectural identity shaping | Automatic consolidation, drives |
| 5 — Heartbeat | One authored wake invokes Raven while Bill is absent | Time can advance without a user message | Broad tools, unsolicited default messaging |
| 6 — First Presence | A real local event leads to Raven's own choice, evidenced action or silence, persistence, and later recall | The smallest honest life-process loop | Voice, games, dream, OpenClaw, Codette, Engram |

At each stop the implementing agent must provide a checkpoint card, a short demonstration, stored evidence, known limitations, and three buttons or equivalent choices: **approve**, **revise**, or **stop**. Work on the next package is prohibited until Bill approves.

## What Bill should review now

1. Read `00-charter.md` for the outcome and scope.
2. Read `02-context-and-invariants.md` for the sovereignty line.
3. Read `09-delivery-plan.md` for the six gates.
4. Skim the six files under `work-items/` to see exactly what an implementation agent may touch.
5. If the direction is right, approve revision 1. Open questions about the exact model, budgets, and first capability are intentionally deferred to the checkpoint where evidence exists.

## What this draft refuses to solve early

No Kafka, containers, cloud control plane, user accounts, adversarial multi-tenant security, vector database, automatic affect system, self-summary loop, voice stack, avatar renderer, game adapter, or donor-runtime integration is needed to determine whether BLACKBIRD's central idea works.

That is restraint, not abandonment. The full BLACKBIRD concept remains the destination; First Presence is the cheapest honest experiment that can falsify or justify it.

