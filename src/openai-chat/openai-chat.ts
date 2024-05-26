import OpenAI from 'openai';
import { params } from './params';
import { ChatCompletion } from 'openai/resources';
import { ChatResponse, ChatMessage, ChatMessageParam } from 'src/types/chat';

const extractFirstChoiceText = (msg: ChatCompletion): ChatResponse => {
  return msg?.choices?.[0]?.message?.content ?? null;
};

export class OpenAIChat {
  private readonly openai = new OpenAI({
    apiKey: 'sk-proj-EWcmro5ez3P4q9JfyCQ7T3BlbkFJhOqbVpC8KMD5Fa0buYdJ',
  });
  private readonly messages: ChatMessage[];
  private readonly customParams: ChatMessageParam;

  constructor(system: string, customParams?: ChatMessageParam) {
    this.messages = [
      {
        role: 'system',
        content: system,
      },
    ];

    this.customParams = customParams;
  }

  async say(prompt: string): Promise<ChatResponse> {
    this.messages.push({
      role: 'user',
      content: prompt,
    } as ChatMessage);

    const messageParams = {
      ...params,
      ...this.customParams,
    };
    const chatResponse = await this.openai.chat.completions.create({
      ...messageParams,
      messages: this.messages,
    });

    const msg = extractFirstChoiceText(chatResponse as ChatCompletion);

    if (!msg) return null;

    this.messages.push({
      role: 'assistant',
      content: msg,
    });

    return msg;
  }

  clear() {
    this.messages.splice(1);
  }

  get history() {
    return this.messages;
  }
}
