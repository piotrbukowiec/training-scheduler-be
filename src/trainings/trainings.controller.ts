import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Controller('trainings')
export class TrainingsController {
  constructor(
    @Inject(TrainingsService)
    private readonly trainingsService: TrainingsService,
  ) {}

  @Post()
  async create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingsService.create(createTrainingDto);
  }

  // @Get()
  // findAll() {
  //   return this.trainingsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.trainingsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrainingDto: UpdateTrainingDto) {
  //   return this.trainingsService.update(+id, updateTrainingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trainingsService.remove(+id);
  // }
}
