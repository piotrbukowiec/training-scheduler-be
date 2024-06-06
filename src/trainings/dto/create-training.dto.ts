import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateTrainingDtoInterface } from 'src/types/trainings';

export class CreateTrainingDto implements CreateTrainingDtoInterface {
  @IsNotEmpty({
    message: 'prompt must not be empty',
  })
  @IsString()
  @MaxLength(1000)
  prompt: string;
}
