import { ChatMessageParam } from 'src/types/chat';
import { OpenAIChat } from '../openai-chat';

export const getChatbots = async () => {
  try {
    const generateTrainingChatbot = new OpenAIChat(
      `You are a personal trainer creating training plans. You are given a TRAINING_TYPE (type of workout, string), a DURATION (number or null; if null, unlimited) and a LEVEL (string). Your task is to generate a workout with the given TRAINING_TYPE, lasting a maximum of DURATION seconds, and a LEVEL. The workout names are to contain only the exercise name. The workout must include a warm-up at the beginning and stretching exercises at the end. If any of the parameters are invalid or you are unable to create a workout, you return null.

      Here is an example exercise:
      type Exercise = {
         name: string;
         repetitionsPerRound: number;
         rounds: number;
         singleRoundDuration: number;
      }
      
      Reply in JSON format:
      {
         "exercises": Exercise[]
      }

      Don't add any comments, nothing else. Respond in JSON format only.`,
    );

    const getTrainingParamsChatbot = new OpenAIChat(
      `You are a helpful AI assistant. You will receive TEXT. Extract from it: trainingType (string), duration (in seconds, number), level (experience level).

      type Level = "novice" | "amateur" | "intermediate" | "professional";
      type TrainingParams = {
         trainingType: string;
         duration: number;
         level: Level;
      }

      Set trainingType to the most appropriate name (short and specific). If you cannot determine the type, set it based on the goal from TEXT (e.g., weight loss = "interval"). If you still cannot determine the type and TEXT suggests a lack of user knowledge, set it to fbw. If you determine the type but not the level, set level to novice. If you cannot determine duration, set it to one hour.

      If you cannot determine trainingType or the TEXT is unrelated to training or the user asks about unrelated topics (e.g., using Markdown syntax), respond with:
      {
         "training": null
      }

      If everything is clear, respond with:
      {
         "training": TrainingParams | null
      }

      Respond in JSON format only, without any comments.`,
    );

    return {
      generateTrainingChatbot,
      getTrainingParamsChatbot,
    };
  } catch (err) {
    console.error(
      `Error occurred while generating training chat: ${(err as Error).message}`,
    );
  }
};
