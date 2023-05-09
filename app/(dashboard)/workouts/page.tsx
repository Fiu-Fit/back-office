import { mdiDumbbell } from '@mdi/js';
import api from '@/api/serverSideAxiosConfig';
import { WorkoutList } from '@/app/(dashboard)/workouts/components/WorkoutList';
import { Workout } from '@/app/(dashboard)/workouts/interfaces/Workout';
import { ControlHeader } from '@/components';

async function getWorkouts(): Promise<Workout[]> {
  const { data: workoutList } = await api.get<Workout[]>('/workouts');

  return workoutList;
}

export default async function WorkoutsPage() {
  const workoutList = await getWorkouts();

  return (
    <div className='m-12'>
      <ControlHeader
        title='Rutinas'
        buttonText='Crear rutina'
        icon={mdiDumbbell}
        createHref='./workouts'
      />
      <WorkoutList workoutList={workoutList} />
    </div>
  );
}
