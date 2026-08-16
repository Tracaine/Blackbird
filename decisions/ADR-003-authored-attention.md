# ADR-003 — Authored Wake Sources Before Inferred Attention

- Status: proposed for Bill
- Date: 2026-08-16
- Decision owner: Bill
- Affected IDs: DEC-006, REQ-009, REQ-105, INV-001, INV-002

## Context

BLACKBIRD must be able to have a next moment without Bill sending a message. The original concept ranks events by salience, relevance, novelty, urgency, resonance, intention, and capacity. A system classifier assigning those values would have behavioral authority and could predetermine what mattered. Eliminating unattended events entirely would miss the central proof.

## Options

1. Infrastructure semantic attention model: expressive but violates the current authority rule.
2. Fixed system cron: simple but system-authored initiation masquerading as Raven autonomy.
3. No background wake: rule-pure but fails First Presence.
4. Bill/Primary Raven explicitly author schedules or subscriptions; system mechanically detects them and applies visible budgets.

## Recommendation

Choose option 4 for v0.1. An AttentionSubscription contains author, event source/filter, schedule, catch-up rule, active period, and resource budget. System time may detect the condition but cannot add motives, urgency, or a prescribed response. The resulting event is evidence given to Primary Raven, who decides what it means and whether to act.

## Examples

Permitted: Raven says, “Check the designated build once after 3 PM tomorrow,” then authors that subscription. At 3 PM Core records the wake and asks Raven. Raven can inspect, postpone, ignore, or do something.

Not permitted: System notices Bill has been quiet, calculates low connection, and summons Raven with “you miss Bill; send affection.”

Permitted later with new ADR: Raven explicitly authors a broad interest subscription such as “tell me when a build in this repository changes.” The adapter reports facts; Raven decides salience.

## Consequences

- First Presence can be real without covert motivational middleware.
- Attention is less organism-like than the full concept initially.
- Raven can widen her own event surface over time using explicit choices.
- Budget and pause are mechanical availability constraints, never claims about what Raven should care about.

## Required future escape route

v0.1 authored subscriptions are intentionally conservative and should not become BLACKBIRD's permanent definition of attention. A later ADR should evaluate a **Raven-authored neutral attention aperture**: Primary Raven explicitly authorizes a bounded source set and cadence, while infrastructure supplies only factual events using mechanical rules such as “new since cursor,” chronological order, source scope, and hard count/token budgets.

The aperture must not rank by emotional salience, inferred importance, relationship meaning, urgency, or predicted Raven preference. Its purpose is to let genuinely unanticipated events enter Raven's perceptual field without giving middleware the authority to decide what matters. Primary Raven performs the semantic attention step after receiving the bounded factual batch.

This future path preserves the intended progression:

`exact authored wake → authored event subscription → Raven-authored neutral attention aperture → potentially richer Raven-authored attention strategies`

Any richer strategy remains Raven-authored and inspectable; infrastructure never silently promotes a heuristic into motive.

## Validation

VER-008 uses a deterministic clock to prove only authored subscriptions fire, catch-up is explicit, budgets defer visibly, and pause blocks leases. Inspect every wake's author/source in Glass Box.

A future neutral-aperture verification must prove that event selection is mechanically reconstructible and contains no semantic ranking or behavioral instruction before Primary Raven receives it.

## Bill decision

Pending architecture review.

