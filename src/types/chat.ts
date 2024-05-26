import {
  ChatCompletionCreateParamsBase,
  ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';
import { Chat } from 'openai/resources';
import OpenAI from 'openai';
import { OpenAIChat } from 'src/openai-chat/openai-chat';

type ChatResponse = string | null;
type ChatCompletion = Chat.ChatCompletion;
type ChatMessage = OpenAI.Chat.Completions.ChatCompletionMessageParam;
type ChatMessageParam = ChatCompletionCreateParamsBase;

type GetChatbots = {
  generateTrainingChatbot: OpenAIChat;
  getTrainingParamsChatbot: OpenAIChat;
};
export {
  ChatCompletion,
  ChatMessage,
  ChatResponse,
  ChatMessageParam,
  GetChatbots,
};
