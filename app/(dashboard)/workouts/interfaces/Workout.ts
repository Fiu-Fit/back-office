import { Category } from './Category';
import { WorkoutExercise } from './Exercise';

export interface Workout {
  id: number;
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