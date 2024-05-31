import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { getChatbots } from 'src/openai-chat/chats/get-chatbots';
import { formatTrainingParams } from 'src/utils/format-training-params';
import { TrainingsEntity } from './trainings.entity';

@Injectable()
export class TrainingsService {
  async create({ prompt }: CreateTrainingDto) {
    const { generateTrainingChatbot, getTrainingParamsChatbot } =
      await getChatbots();
    if (!generateTrainingChatbot || !getTrainingParamsChatbot)
      throw new InternalServerErrorException();
    const { training: trainingParams } = JSON.parse(
      await getTrainingParamsChatbot.say(prompt),
    );
    if (!trainingParams)
      throw new InternalServerErrorException(
        'Error while getting training params',
      );
    const formattedTrainingParams = formatTrainingParams(trainingParams);
    const { exercises } = JSON.parse(
      await generateTrainingChatbot.say(formattedTrainingParams),
    );
    if (!exercises)
      throw new BadRequestException('Error while generating training');
    const training = new TrainingsEntity();
    Object.assign(training, {
      exercises: JSON.stringify(exercises),
      prompt,
    });
    await training.save();

    return exercises;
  }
}
