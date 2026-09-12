export type ModelRole = 'system' | 'user' | 'assistant';

export interface ModelMessage {
  role: ModelRole;
  content: string;
}

export interface ModelCompletionRequest {
  messages: readonly ModelMessage[];
  temperature?: number;
}

export interface ModelReply {
  text: string;
  actualModel: string;
}

export interface ModelPort {
  complete(request: ModelCompletionRequest): Promise<ModelReply>;
}

export interface LmStudioModelPortOptions {
  baseUrl: string;
  expectedModel: string;
  timeoutMs: number;
}

interface LmStudioChatCompletion {
  model: string;
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class LmStudioModelPort implements ModelPort {
  readonly #baseUrl: string;
  readonly #expectedModel: string;
  readonly #timeoutMs: number;

  constructor(options: LmStudioModelPortOptions) {
    this.#baseUrl = options.baseUrl.replace(/\/+$/, '');
    this.#expectedModel = options.expectedModel;
    this.#timeoutMs = options.timeoutMs;
  }

  async complete(request: ModelCompletionRequest): Promise<ModelReply> {
    const response = await fetch(`${this.#baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: this.#expectedModel,
        messages: request.messages,
        temperature: request.temperature,
        stream: false
      }),
      signal: AbortSignal.timeout(this.#timeoutMs)
    });

    const completion = await response.json() as LmStudioChatCompletion;

    return {
      text: completion.choices[0]!.message.content,
      actualModel: completion.model
    };
  }
}
