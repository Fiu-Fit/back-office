import { Category } from '../../../../utils/interfaces/Category';
import { WorkoutExercise } from './WorkoutExercise';

export interface Workout {
  _id: string;
  name: string;
  description: string;
  duration: number;
  difficulty: number;
  category: Category;
  exercises: WorkoutExercise[];
  athleteIds: number[];
  authorId: number;
  updatedAt?: string;
}
