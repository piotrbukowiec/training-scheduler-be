import Openai from 'openai';
import { ChatMessageParam } from 'src/types/chat';
export const params: ChatMessageParam = {
  n: 1,
  // top_p: 1,
  temperature: 1,
  max_tokens: 1000,
  stream: false,
  model: 'gpt-4o-2024-05-13',
  response_format: { type: 'json_object' },
  messages: [],
};
