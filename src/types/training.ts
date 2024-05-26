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

export { Level, TrainingParams };
