# BLACKBIRD Build Checkpoint — WRK-001

## Current outcome

BLACKBIRD is an executable local TypeScript CLI. Bill can enter text, BLACKBIRD sends it to LM Studio through the configured OpenAI-compatible endpoint, and the selected local model returns a visible response.

## Environment confirmed

- Windows
- Node.js 24.13.1
- npm 11.5.2
- Git 2.53.0.windows.2
- LM Studio endpoint: http://127.0.0.1:1234/v1
- Expected model: gryphe_pantheon-rp-1.8-24b-small-3.1

## Verification completed

- TypeScript typecheck passes.
- Adapter success test passes against a fake local HTTP server.
- Live LM Studio model listing succeeds.
- Live CLI inference succeeds.
- BLACKBIRD displays the expected model, actual model, total time, and response.
- Expected and actual model identifiers matched.
- Representative live total time was approximately 32 seconds.

## Current implementation

- TypeScript project using Node 24 native type stripping.
- ModelPort boundary.
- LM Studio HTTP adapter.
- JSON configuration for endpoint, expected model, timeout, and temperature.
- Interactive CLI started with `npm start`.
- Test and typecheck commands available through npm.

## Known history

The JSON configuration was initially written with a UTF-8 BOM by PowerShell, causing JSON.parse to fail. The file was rewritten as UTF-8 without BOM and the CLI then worked.

## Deliberately absent

No identity seed, memory, persistence, conversation history, Glass Box, scheduler, tools, cloud services, containers, affect machinery, or autonomous behavior has been added. Model personality and presence have not been evaluated. The LM Studio system preset is currently cleared.

## Resume point

The core local model route is proven. Next candidate: stream model output as it arrives and display time-to-first-text plus total time. After that, add the simple Windows launcher and close the remaining WRK-001 checks.