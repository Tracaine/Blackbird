# Embodiment contracts and lifecycle

## Owners and topology

CMP-1000 is the existing Core integration boundary; Core is the sole durable committer. CMP-1001 is an in-process embodiment coordinator behind CapabilityPort. CMP-1002 is the replaceable browser body/motion adapter. CMP-1003 is the voice module plus endpoint audio loop. CMP-1004 is the optional perception/opportunity bridge in increment 3. No component adds a second personality prompt, memory store, or independent Raven inference loop.

Keep `companionId`, `surfaceId`, `bodyInstanceId`, `assetPackageId`, and `connectionEpoch` distinct. A body instance belongs to one companion; a companion can attach several bodies. Explicit targets choose the destination; do not broadcast gestures or audio to every body by default. The first version uses one active body and one audio endpoint.

## INT-1001: Core action to embodiment

Reuse parent AttemptAction v1 for `capability: body.applyIntent`. Its arguments are:

```ts
interface BodyIntent {
  schemaVersion: 1;
  intentId: string;
  bodyInstanceId: string;
  connectionEpoch: string;
  operation: 'gesture' | 'expression' | 'gaze' | 'posture' | 'activity' | 'locomotion';
  parameters: Record<string, unknown>;
  lifetime: { expiresAt?: string; untilCancelled?: boolean };
  interruptible: boolean;
  origin: { sourceEventId: string; authoredPolicyId?: string; utteranceId?: string };
}
```

Initial supported action is `gesture` with `name: wave`. The adapter publishes schemas for actual supported names, parameters, resources and completion semantics. Core validates the active author at request acceptance and records the attempt before dispatch. Continuing execution retains that accepted authorization after the inference finishes; it does not mint an imaginary new primary run. Standing-policy execution cites its originating authored record, version and enabled scope. Mechanical policy callbacks are not mislabeled new primary utterances.

## INT-1002: BodyPort v1

Operations: DescribeBody, Observe, ApplyIntent, SpeechCue, Cancel. Invocation: localhost surface transport; reuse HTTP/SSE where available. An adapter may translate to local renderer calls. DescribeBody returns schema version, body/asset IDs, expression and clip mappings, supported operations, audio support, resource claims and current availability.

ApplyIntent returns accepted/rejected acknowledgement with intent ID. Acceptance is not completion. Events then report started, completed, cancelled or failed with timestamps and evidence. Core's terminal ActionReceipt retains SUCCEEDED/FAILED/CANCELLED/UNKNOWN. A started continuous activity can complete the *start request* successfully while the activity remains running; a finite wave completes when the clip ends. State these success conditions in capability schemas.

Unsupported operations return UNSUPPORTED, missing assets ASSET_UNAVAILABLE, expired requests EXPIRED, epoch mismatches STALE_ATTACHMENT and occupied resources RESOURCE_CONFLICT. Never silently substitute a meaningful gesture. If a selected standing mapping explicitly defines a fallback, report that mapping and actual action.

Use the original request ID for transport retries. Within an epoch the adapter deduplicates commands and returns known status. If a dispatched request lacks evidence after 2 seconds, Core marks the connection/action uncertain and queries Observe; do not repeat the action automatically. On adapter restart, old transient deduplication state is not assumed to survive. Pending finite actions end UNKNOWN unless evidence resolves them; redispatch requires a fresh choice.

Cancel identifies intent or utterance, body and epoch. It is idempotent and uses a local priority path. It releases resources with a short defined transition. If a game adapter cannot prove cancellation, return UNKNOWN; desktop animation cancellation can report stopped playback. No model roundtrip is required to stop obsolete audio or animation.

## DAT-1001–1003: state and evidence

Core persists attachment preferences and asset bindings (DAT-1001), meaningful intent/attempt/receipt events (DAT-1002), and conversation speech delivery progress (DAT-1003). Each includes companion ID, source/correlation IDs, version, timestamps and source type. Snapshot projections are rebuildable; adapter truth must be refreshed after restart. Core exclusively writes using additive schema migrations and its existing backup/export/supersession mechanisms.

The renderer owns live pose, interpolation, current clip time, audio buffers and resource masks in memory. These are transient. It reports sparse state changes rather than storing 30 or 60 poses per second. Selected package IDs/versions persist; packages live in versioned local asset folders and can be reloaded.

Three distinct records:

| Record | Meaning | Evidence boundary |
| --- | --- | --- |
| Intended | Accepted semantic request | Authored request, not completed action |
| Presented | Adapter-reported expression or activity | Renderer telemetry with source and timestamp |
| Observed | Available external/body observation | Game-world evidence where available, otherwise explicitly adapter self-report |

Do not fabricate an independent observation by duplicating a presentation receipt. Unknown stays unknown. A desktop sitting clip proves clip playback; a game seated flag can prove game posture. Authored imagined experiences can be stored as such without being converted into world receipts.

## INT-1003: snapshot and subscription

Extend parent InspectState with attachment availability, lastConfirmedAt, asset version, current presentation, outstanding intents, last receipt and active speech delivery. Snapshot includes `(runtimeEpoch, sequence)` obtained atomically with the subscription boundary. Subscribe before snapshot capture and buffer changes, then deliver only events later than the captured sequence; or use an equivalent cursor implementation already in Core. A new runtime epoch or a gap requires a fresh snapshot.

On reconnect: create a new connection epoch, read the current Core snapshot, ask the adapter to Observe, reconcile real loaded assets/activities, then enable new dispatch. Do not replay old finite gestures or completed speech. Ongoing activities resume only under an enabled standing policy whose resume behavior explicitly permits it. A lost connection cancels turn-bound speech locally and shows last-confirmed state as stale; Core and the companion continue.

## INT-1004: voice and actual delivery

STT publishes attributed partial/final transcript events through existing conversation intake. Only finalized or explicitly accepted interrupted input starts the ordinary primary conversation path. No parallel voice persona/model loop. Core's output feeds TTS with utterance ID, generation, source text span and any explicitly selected delivery parameters. Initial version may buffer a sentence or the completed response; do not build streaming complexity before needed.

States: listening, transcribing, awaiting cognition, synthesizing, playing, interrupted, completed, failed. They describe process activity, not feelings. Separate input/output state can represent interruption while playback is active.

Audio playback owns the clock for mouth/viseme cues and speech-linked gesture timing. Cue fields include utteranceId, generation, audioOffsetMs and the supported mouth/gesture data. Token arrival is not evidence of speech. Playback events report started, played-through offset, ended/interrupted/failed. Preserve generated text separately from delivered text/spans in the existing transcript.

Interrupt immediately increments playback generation, stops local audio and speech-linked motion, discards stale TTS buffers/callbacks, and informs Core through existing cancellation/control machinery. If inference is still active, use its cancellation path; do not invent a second answer. TTS failure leaves text available and delivered speech incomplete. Reconnect never resumes an obsolete utterance.

## Motion and assets

Body adapters map semantic expression, gaze, posture and activity to clips, blendshapes, bones or game controls. Base pose/idle, locomotion, activities, gestures, gaze and mouth motion are composable layers. Resource masks resolve overlapping limbs and facial channels using published technical rules; explicit cancel wins, speech may own mouth channels, and a meaningful conflicting activity reports a conflict unless an authored policy already chooses precedence.

A local package manifest contains ID/version, model path, supported adapter/format versions, coordinate convention, expression aliases, clip mappings, resource masks, optional props and author/license metadata. Activate only after loading succeeds, keep the previous version for rollback, and report unavailable capabilities. Package swaps never modify companion identity. Asset manifests contain presentation mappings, not personality instructions. Check one representative supplied model in the first slice; do not promise universal retargeting.

## INT-1005 and DAT-1004: perception, initiative and experiments

In increment 3, one cheap ambient source reports `(source, observedAt, receivedAt, freshness, payload)` to Core intake. Configured opportunities for cognition cite schedule/subscription and current changes; they do not prescribe speaking or an emotional stance. Respect configured budgets; deferred/missed wakes use explicit catch-up behavior and do not manufacture unobserved experiences. Rich capture remains on demand.

For future affect experiments, Core stores an ExperimentConfig version and receipts (DAT-1004): enabled mechanism, input sources, parameters, output signals, injection/render destinations, origin and activation time. This optional configuration is absent/disabled in baseline. A classifier output is an estimate; a simulated drive is an experimental signal; a self-report is authored evidence. Preserve those distinctions in context receipts. Logging alone does not grant behavioral authority. Disabling an experiment leaves the baseline companion able to converse and use the body.
