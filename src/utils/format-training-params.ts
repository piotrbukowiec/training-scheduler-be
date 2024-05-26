import { TrainingParams } from 'src/types/training';

const convertToSnakeUpperCase = (text: string): string =>
  text.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();

const formatTrainingParams = (training: TrainingParams): string =>
  Object.entries(training)
    .map(
      ([key, value]) =>
        `${convertToSnakeUpperCase(key)}=${
          typeof value === 'string' ? `"${value}"` : value
        }`,
    )
    .join(', ');

export { formatTrainingParams };
