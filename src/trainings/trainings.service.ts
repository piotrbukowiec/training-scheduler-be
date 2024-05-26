import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { getChatbots } from 'src/openai-chat/chats/get-chatbots';
import { TrainingParams } from 'src/types/training';
import { formatTrainingParams } from 'src/utils/format-training-params';
import { InternalServerError } from 'openai';

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
    const training = JSON.parse(
      await generateTrainingChatbot.say(formattedTrainingParams),
    );
    if (!training)
      throw new InternalServerErrorException('Error while generating training');
    return training;
  }

  // findAll() {
  //   return `This action returns all trainings`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} training`;
  // }

  // update(id: number, updateTrainingDto: UpdateTrainingDto) {
  //   return `This action updates a #${id} training`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} training`;
  // }
}
