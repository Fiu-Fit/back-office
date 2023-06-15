import { Workout, categoryToString } from '@fiu-fit/common';
import { workoutListHeaders } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import List from '@/components/List';

async function getWorkouts(): Promise<Workout[]> {
  const { data: workoutList } = await api.get<Workout[]>('/workouts');

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
      <List
        headers={workoutListHeaders}
        values={workoutList}
        detailButtonHref='./workouts'
      />
    </div>
  );
}
