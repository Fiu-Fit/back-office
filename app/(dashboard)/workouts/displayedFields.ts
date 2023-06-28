import { Workout } from '@fiu-fit/common';

export type WorkoutDisplay = Workout & {
  categoryString: string;
  exerciseNumber: number;
  athleteNumber: number;
};

export const workoutListHeaders: {
  [key: string]: keyof WorkoutDisplay;
} = {
  ID:            '_id',
  Nombre:        'name',
  Duración:      'duration',
  Dificultad:    'difficulty',
  Categoría:     'categoryString',
  Ejercicios:    'exerciseNumber',
  'ID Autor':    'authorId',
  Bloqueado:     'isBlocked',
};
