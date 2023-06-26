import { categoryToString } from '@fiu-fit/common';
import WorkoutTable from './WorkoutTable';
import { WorkoutDisplay } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';

async function getWorkouts(): Promise<WorkoutDisplay[]> {
  const { data: workoutList } = await api.get<WorkoutDisplay[]>('/workouts');

  workoutList.forEach((workout: any) => {
    workout.categoryString = categoryToString(workout.category);
    workout.exerciseNumber = workout.exercises.length;
    workout.athleteNumber = workout.athleteIds.length;
  });

  return workoutList;
}

export default async function WorkoutsPage() {
  const workoutList = await getWorkouts();

  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Rutinas</h1>
      <WorkoutTable data={workoutList} />
    </div>
  );
}
