import { Category } from './Category';
import { Unit } from './Unit';

export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight?: number;
  unit: Unit; // for reps
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  category: Category;
}
