import { Level, TrainingParams } from 'src/types/training';
import { formatTrainingParams } from './format-training-params';

describe('testing formatting TrainingParams into text', () => {
  it('Should not start with word "TRAINING="', () => {
    const trainingParams: TrainingParams = {
      trainingType: 'mobility',
      duration: 3600,
      level: 'novice' as Level,
    };

    const formattedTrainingParams = formatTrainingParams(trainingParams);
    console.log('Formatted TrainingParams: ', formattedTrainingParams);
    expect(formattedTrainingParams.startsWith('TRAINING=')).toBe(false);
  });

  it('Should format TrainingParams correctly', () => {
    const trainingParams: TrainingParams = {
      trainingType: 'mobility',
      duration: 3600,
      level: 'novice' as Level,
    };

    const formattedTrainingParams = formatTrainingParams(trainingParams);
    expect(formattedTrainingParams).toEqual(
      `TRAINING_TYPE="mobility", DURATION=3600, LEVEL="novice"`,
    );
  });
});
