import { readFile } from 'node:fs/promises';
import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { LmStudioModelPort } from '../model/lm-studio-model-port.ts';

interface BlackbirdConfig {
  baseUrl: string;
  expectedModel: string;
  timeoutMs: number;
  temperature: number;
}

async function getInput(): Promise<string> {
  const commandLineInput = process.argv.slice(2).join(' ').trim();
  if (commandLineInput) return commandLineInput;

  const terminal = createInterface({ input: stdin, output: stdout });
  try {
    return (await terminal.question('Bill> ')).trim();
  } finally {
    terminal.close();
  }
}

async function main(): Promise<void> {
  const configUrl = new URL('../../blackbird.config.json', import.meta.url);
  const configText = await readFile(configUrl, 'utf8');
  const config = JSON.parse(configText) as BlackbirdConfig;

  console.log('BLACKBIRD v0.1.0');
  console.log(`LM Studio:     ${config.baseUrl}`);
  console.log(`Expected model: ${config.expectedModel}`);
  console.log('');

  const message = await getInput();

  if (!message) {
    console.error('No message was entered. Nothing was sent.');
    process.exitCode = 2;
    return;
  }

  const modelPort = new LmStudioModelPort({
    baseUrl: config.baseUrl,
    expectedModel: config.expectedModel,
    timeoutMs: config.timeoutMs
  });

  const startedAt = performance.now();

  try {
    const reply = await modelPort.complete({
      messages: [{ role: 'user', content: message }],
      temperature: config.temperature
    });

    console.log('');
    console.log(`Actual model:  ${reply.actualModel}`);
    console.log(`Total time:    ${Math.round(performance.now() - startedAt)} ms`);
    console.log('');
    console.log('Model response:');
    console.log(reply.text);
  } catch (error) {
    const reason = error instanceof Error
      ? `${error.name}: ${error.message}`
      : String(error);

    console.error('');
    console.error('BLACKBIRD could not get a model response.');
    console.error(`Endpoint: ${config.baseUrl}`);
    console.error(`Reason: ${reason}`);
    console.error('No model answer occurred. Confirm LM Studio is running, then try again.');
    process.exitCode = 1;
  }
}

await main();
