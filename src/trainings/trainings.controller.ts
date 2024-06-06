import {
  Controller,
  Post,
  Body,
  Inject,
  HttpCode,
  HttpStatus,
  Req,
  forwardRef,
} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
@SkipThrottle()
@Controller('trainings')
export class TrainingsController {
  constructor(
    @Inject(forwardRef(() => TrainingsService))
    private readonly trainingsService: TrainingsService,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ long: { ttl: 60000, limit: 2 } })
  async create(
    @Body() createTrainingDto: CreateTrainingDto,
    @Req() req: Request,
  ) {
    console.log('BODY: ', req.body);
    return this.trainingsService.create(createTrainingDto);
  }
}
