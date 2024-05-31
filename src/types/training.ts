enum Level {
  Novice = 'novice',
  Amateur = 'amateur',
  Intermediate = 'intermediate',
  Professional = 'professional',
}

type TrainingParams = {
  trainingType: string;
  level: Level;
  duration: number;
};
interface Exercise {
  name: string;
  repetitionsPerRound: number;
  rounds: number;
  singleRoundDuration: number;
}

interface TrainingInterface {
  excercises: Exercise[];
}

export { Level, TrainingParams, Exercise, TrainingInterface };
