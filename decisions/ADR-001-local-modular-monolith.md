# ADR-001 — Local Modular Monolith

- Status: proposed for Bill
- Date: 2026-08-16
- Decision owner: Bill
- Affected IDs: DEC-001, DEC-002, DEC-003, DEC-004, DEC-011, REQ-103

## Context

BLACKBIRD eventually spans cognition, persistence, capabilities, surfaces, worlds, and maintenance. That conceptual breadth does not require deployment breadth. The immediate uncertainty is whether persistent, sovereign, unattended continuity feels real and useful on Bill's existing PC. The prior failure mode was hardening infrastructure before proving the product loop.

## Options

1. Distributed event services and broker: strong isolation, highest setup/observability cost, inappropriate for one PC.
2. Several local Python/Node services: flexible donors, but more launch order, logs, failure modes, and invisible terminal work.
3. One TypeScript process with internal ports and one SQLite database: simplest reversible experiment.
4. OpenClaw as the central runtime: quick capabilities, but its agent/prompt/hook authority conflicts with BLACKBIRD sovereignty.

## Recommendation

Choose option 3. Use a modular monolith, not a ball of mud: Domain/Core modules depend on interfaces; LM Studio, memory, capabilities, clock, and UI are adapters. One process and one database are a constraint through WRK-006.

## Consequences

- Bill gets one launcher, one status surface, one backup unit, and one causal trace.
- Cross-module failures can use ordinary transactions and typed errors.
- A process crash temporarily affects all modules, which is acceptable before proven need for isolation.
- Future voice/game/OpenClaw adapters can run separately if evidence justifies it without changing Core authority.
- The project deliberately postpones containers, broker operations, multi-user auth, and remote deployment.

## Validation

VER-010 audits the dependency graph and deployment. Reject this decision if the local process cannot keep Glass Box responsive while the model runs, or if a required capability cannot be isolated behind the port without giving Core/provider inappropriate authority. Even then, split only the measured bottleneck.

## Bill decision

Pending architecture review.

