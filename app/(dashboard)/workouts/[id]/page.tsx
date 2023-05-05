import { User } from '../../users/interfaces/User';
import { unitToString } from '../interfaces/Unit';
import { Workout } from '../interfaces/Workout';
import ExerciseList from './components/ExerciseList';
import WorkoutCard from './components/WorkoutCard';
import WorkoutDetailHeader from './components/WorkoutDetailHeader';
import api from '@/api/serverSideAxiosConfig';

async function getWorkout(id: string): Promise<Workout> {
  const { data: workout } = await api.get<Workout>(`/workouts/${id}`);

  return workout;
}

async function deleteWorkout(id: string): Promise<Workout> {
  'use server';
  const { data: workout } = await api.delete<Workout>(`/workouts/${id}`);

  return workout;
}

async function getUsers(ids: number[]): Promise<User[]> {
  // const { data: users } = await api.get<any[]>(`/users?ids=${ids.join(',')}`);
  const users: User[] = [];
  for (const id of ids) {
    try {
      const { data: user } = await api.get<User>(`/users/${id}`);
      users.push(user);
    } catch (_) {
      console.error('User not found with id:', id);
    }
  }

  return users;
}

export default async function WorkoutDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const workout = await getWorkout(id);
  workout.exercises.forEach((exercise: any) => {
    exercise.unitString = unitToString(exercise.unit);
  });

  const users = await getUsers(workout.athleteIds);

  return (
    <div className='w-full h-full'>
      <WorkoutDetailHeader workout={workout} deleteWorkout={deleteWorkout} />
      <div className='p-12 w-full gap-8 '>
        <div className='flex relative'>
          <div className='w-2/3'>
            <ExerciseList
              className='w-2/3 absolute h-full'
              headers={{
                ID:           'exerciseId',
                Sets:         'sets',
                Repeticiones: 'reps',
                Peso:         'weight',
                Unidad:       'unitString',
              }}
              values={workout.exercises}
              detailButtonHref='/exercises'
            />
          </div>
          <WorkoutCard workout={workout} className='w-1/3 ml-24' />
        </div>
        <ExerciseList
          className='mt-8 h-[600px]'
          headers={{
            ID:       'id',
            UID:      'uid',
            Correo:   'email',
            Nombre:   'firstName',
            Apellido: 'lastName',
            Rol:      'role',
          }}
          values={users}
          detailButtonHref='/users'
        />
      </div>
    </div>
  );
}
