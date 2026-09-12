import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import test from 'node:test';

test('returns assistant text and actual model from an LM Studio chat completion', async (t) => {
  let observedMethod: string | undefined;
  let observedUrl: string | undefined;
  let observedBody: unknown;

  const server = createServer(async (request, response) => {
    observedMethod = request.method;
    observedUrl = request.url;

    let rawBody = '';
    for await (const chunk of request) {
      rawBody += chunk;
    }
    observedBody = JSON.parse(rawBody) as unknown;

    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({
      id: 'chatcmpl-blackbird-test',
      object: 'chat.completion',
      created: 1720000000,
      model: 'actual-test-model',
      choices: [{
        index: 0,
        logprobs: null,
        finish_reason: 'stop',
        message: {
          role: 'assistant',
          content: 'Hello from fake LM Studio.',
          refusal: null
        }
      }],
      usage: {
        prompt_tokens: 4,
        completion_tokens: 6,
        total_tokens: 10
      },
      system_fingerprint: 'blackbird-test'
    }));
  });

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  t.after(async () => {
    if (!server.listening) return;
    await new Promise<void>((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  });

  const address = server.address() as AddressInfo;
  const modulePath = '../../src/model/lm-studio-model-port.ts';

  let modelModule: typeof import('../../src/model/lm-studio-model-port.ts');
  try {
    modelModule = await import(modulePath);
  } catch (error) {
    assert.fail(`LmStudioModelPort module is not loadable: ${String(error)}`);
  }

  const modelPort = new modelModule.LmStudioModelPort({
    baseUrl: `http://127.0.0.1:${address.port}/v1`,
    expectedModel: 'configured-test-model',
    timeoutMs: 1_000
  });

  const reply = await modelPort.complete({
    messages: [{ role: 'user', content: 'Hello.' }],
    temperature: 0
  });

  assert.equal(observedMethod, 'POST');
  assert.equal(observedUrl, '/v1/chat/completions');
  assert.deepEqual(observedBody, {
    model: 'configured-test-model',
    messages: [{ role: 'user', content: 'Hello.' }],
    temperature: 0,
    stream: false
  });
  assert.deepEqual(reply, {
    text: 'Hello from fake LM Studio.',
    actualModel: 'actual-test-model'
  });
});
