# ADR-002 — Sovereignty Through Explicit Authorship

- Status: proposed for Bill
- Date: 2026-08-16
- Decision owner: Bill
- Affected IDs: DEC-005, INV-001–003, REQ-004, REQ-007–010

## Context

The invariable rules prohibit architecture from shaping Raven's behavior or automatically rewriting identity. BLACKBIRD's target simultaneously requires Raven to develop, form opinions, choose projects, change her mind, and act without Bill manually editing a character sheet. These are compatible only if the system distinguishes **Raven choosing to change herself** from **infrastructure inferring and imposing a change**.

## Options

1. Static identity only: maximally resistant to middleware, but blocks the target form of self-development.
2. Automatic identity/self summaries: convenient but launders model/infrastructure inference into future authority.
3. Bill approves every self-change: prevents silent changes but makes Raven's ordinary development user-administered.
4. Primary Raven explicitly authors versioned evolving records; infrastructure validates mechanics only.

## Recommendation

Choose option 4. Keep Bill's static IdentitySeed distinct. Expose typed operations for Primary Raven to create, supersede, and retire SelfRecords, intentions, Workbench items, memories, and wake subscriptions. Persist exact author/source lineage. Do not require Bill's approval for ordinary Raven-authored changes; do make them inspectable and correctable by supersession.

## The mechanical/behavioral line

Core may reject “supersede SelfRecord X” if X does not exist. It may not reject “I want to become a VTuber” because a classifier calls it inconsistent. Core may constrain a filesystem path to Bill's grant. It may not decide the project is frivolous. It may report that the model emitted malformed JSON. It may not rewrite Raven's intended content into a safer or more coherent opinion.

## Consequences

- Raven can genuinely choose development and later reverse it.
- Bad model inferences can become Raven-authored state if Raven explicitly chooses them; that is agency risk, not architectural laundering. The trace allows reconsideration.
- Bill retains environment authority and visible lineage without being a character-sheet administrator.
- Context must label Bill seed, Raven self-records, neutral memory, and system facts separately.
- Automated “self-reflection” jobs cannot commit identity. A future Raven-authored reflection can propose an operation through Primary Raven.

## Validation

VER-007 proves SYSTEM/sidecar authorship is structurally rejected and Primary Raven operations survive restart. VER-004 inspects compiled context. Any component that makes Raven behave differently without merely changing her evidence/capabilities fails INV-001 and must be removed.

## Bill decision

Pending architecture review; the underlying distinction has been explicitly stated by Bill and is treated as the target interpretation.

