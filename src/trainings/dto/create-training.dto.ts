import { IsString, Length } from 'class-validator';
import { CreateTrainingDtoInterface } from 'src/types/trainings';

export class CreateTrainingDto implements CreateTrainingDtoInterface {
  @IsString()
  @Length(1, 10000)
  prompt: string;
}
