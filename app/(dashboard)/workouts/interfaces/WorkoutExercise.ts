import { Unit } from '@/utils/interfaces/Unit';

export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight?: number;
  unit: Unit; // for reps
}
