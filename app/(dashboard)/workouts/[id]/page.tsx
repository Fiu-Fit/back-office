import { Category } from '../interfaces/Category';
import { Workout } from '../interfaces/Workout';
import ExerciseList from './components/ExerciseList';
import WorkoutCard from './components/WorkoutCard';
import WorkoutDetailHeader from './components/WorkoutDetailHeader';
import api from '@/api/serverSideAxiosConfig';

async function getWorkout(id: number): Promise<Workout> {
  // const { data: user } = await api.get<User>(`/users/${id}`);
  const workout: Workout = await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id:   id,
        name: 'Nombre',
        description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        authorId:   1,
        duration:   1,
        category:   Category.CARDIO,
        difficulty: 1,
        updatedAt:  new Date().toDateString(),
        athleteIds: [1, 2, 3],
        exercises:  [],
      });
    }, 1000);
  });

  return workout;
}

async function deleteWorkout(id: number): Promise<Workout> {
  'use server';
  const { data: user } = await api.delete<Workout>(`/users/${id}`);

  return user;
}

export default async function WorkoutDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const workout = await getWorkout(id);

  return (
    <div className='w-full h-full'>
      <WorkoutDetailHeader workout={workout} deleteWorkout={deleteWorkout} />
      <div className='p-12 w-full gap-8 '>
        <div className='flex relative'>
          <div className='w-2/3'>
            <ExerciseList
              className='w-2/3 absolute'
              headers={[
                'ID',
                'Nombre',
                'Sets',
                'Repeticiones',
                'Peso',
                'Unidad',
                '',
              ]}
            />
          </div>
          <WorkoutCard workout={workout} className='w-1/3 ml-24' />
        </div>
        <ExerciseList
          className='mt-8 h-[600px]'
          headers={['ID', 'Nombre', 'Apellido', 'Email', 'Rol', '']}
        />
      </div>
    </div>
  );
}
