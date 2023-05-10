import { Workout, categoryToString } from '@fiu-fit/common';
import { mdiDumbbell } from '@mdi/js';
import { workoutListHeaders } from './displayedHeaders';
import api from '@/api/serverSideAxiosConfig';
import { ControlHeader } from '@/components';
import List from '@/components/List';

async function getWorkouts(): Promise<Workout[]> {
  const { data: workoutList } = await api.get<Workout[]>('/workouts');

  return workoutList;
}

export default async function WorkoutsPage() {
  const workoutList = await getWorkouts();
  workoutList.forEach((workout: any) => {
    workout.categoryString = categoryToString(workout.category);
    workout.exerciseNumber = workout.exercises.length;
    workout.athleteNumber = workout.athleteIds.length;
  });

  return (
    <div className='m-12'>
      <ControlHeader
        title='Rutinas'
        buttonText='Crear rutina'
        icon={mdiDumbbell}
        createHref='./workouts'
      />
      <List
        headers={workoutListHeaders}
        values={workoutList}
        detailButtonHref='./workouts'
      />
    </div>
  );
}
