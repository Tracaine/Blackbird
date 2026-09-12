# Blackbird Avatar Module — blueprint revision 1

Date: 2026-09-12. Status: review; architecture amendment requested by Bill, implementation not started.

## Outcome and scope

Give the existing persistent Blackbird companion a replaceable visible body, speech surface, and sensory connections. The companion remains available across bodies and conversations. The desired experience is an increasingly autonomous personal presence whose choices can change, including during affective-computing experiments.

The smallest valuable slice: open a local viewer containing one humanoid model, request a wave through Blackbird, see it happen, and see the resulting receipt in the existing inspection surface. Closing/reopening the viewer reconnects to the same companion. A custom Raven model is a separate asset task and is not a prerequisite for proving the connection.

Read in order:

1. [AUTONOMY-AMENDMENT.md](AUTONOMY-AMENDMENT.md): governing user clarification and precedence.
2. [INTEGRATION.md](INTEGRATION.md): reuse map, affected parent claims, boundaries, and source evidence.
3. [CONTRACTS.md](CONTRACTS.md): body, voice, observation, and persistence contracts.
4. [DELIVERY.md](DELIVERY.md): three observable increments and targeted verification.
5. [RESUME.md](RESUME.md): what is verified, unknown, and next.
6. [avatar-blueprint.json](avatar-blueprint.json): canonical extension index, ownership, dependencies, and verification links.

## Minimum architecture

One existing Blackbird host with an embodiment module; one browser renderer with a local motion loop; voice input/output added in the second increment. Use the existing store and model route. The renderer holds transient presentation state; Core commits durable records. Keep animation frames and audio samples outside the event ledger.

Core connects through a small typed BodyPort behind CapabilityPort. The body reports capabilities, applies semantic intents, accepts speech timing, cancels obsolete work, and reports observed presentation. Core supplies snapshots plus ordered event subscriptions. Reuse localhost HTTP/SSE if available; a WebSocket is optional transport, not a second runtime.

Provisional first renderer: Three.js with @pixiv/three-vrm in a local browser page. This fits the existing web-surface direction and supports a replaceable humanoid model. Pin versions and check the actual model during the first implementation slice. Unity remains a viable alternative behind the same contract if the required assets or desktop presentation justify it. This is a proposed reversible implementation choice, not a claim that Bill approved a particular renderer.

## Provider boundaries and later work

Body rendering, motion generation, STT, TTS, and rich perception are separately replaceable. Existing ModelPort and MemoryPort remain upstream. Start with clips plus procedural blending; learned motion is a later provider. A model file supplies geometry, rig, materials and expression controls, not a complete motion performance.

Later: custom Raven assets, richer activities/props, transparent desktop packaging, game/VR bodies, additional simultaneous surfaces, and explicit affect experiments. Mobile hosting, a new memory engine, a second cognition host, subscription services, accounts, billing and multi-tenancy are outside this module.

## Practical operation

One user, one PC; existing launcher opens the viewer when requested. Initially select a model from a configured local asset folder. No inference calls for frame updates, idle interpolation, or lip motion. Aim for a usable 30 fps on Bill's machine and local cancel response within 100 ms; these are implementation targets to observe, not measured results. Do not optimize beyond a visible issue.

The transcript stays available alongside voice and avatar output. Show connection status, available actions, errors, and last-confirmed presentation in plain language. Export and deletion use Core's existing mechanisms. Avatar preferences reference asset packages; the avatar owns neither biography nor relationship history.

Technical references consulted 2026-09-12: [VRM controls](https://vrm.dev/en/vrm/vrm_features/), [three-vrm](https://github.com/pixiv/three-vrm). Compatibility with the eventual asset remains unverified.
