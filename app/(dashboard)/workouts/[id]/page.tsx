import { User } from '../../users/interfaces/User';
import { unitToString } from '../interfaces/Unit';
import { Workout } from '../interfaces/Workout';
import ExerciseList from './components/ExerciseList';
import WorkoutCard from './components/WorkoutCard';
import WorkoutDetailHeader from './components/WorkoutDetailHeader';
import api from '@/api/serverSideAxiosConfig';

async function getWorkout(id: string): Promise<Workout> {
  const { data: workout } = await api.get<Workout>(`/workouts/${id}`);
  // const workout: Workout = await new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       id:   id,
  //       name: 'Nombre',
  //       description:
  //         '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  //       authorId:   1,
  //       duration:   1,
  //       category:   Category.CARDIO,
  //       difficulty: 1,
  //       updatedAt:  new Date().toDateString(),
  //       athleteIds: [1, 2, 3],
  //       exercises:  [],
  //     });
  //   }, 1000);
  // });

  return workout;
}

async function deleteWorkout(id: string): Promise<Workout> {
  'use server';
  const { data: user } = await api.delete<Workout>(`/users/${id}`);

  return user;
}

async function getUsers(ids: number[]): Promise<User[]> {
  // const { data: users } = await api.get<any[]>(`/users?ids=${ids.join(',')}`);
  const users: User[] = [];
  for (const id of ids) {
    try {
      const { data: user } = await api.get<User>(`/users/${id}`);
      users.push(user);
    } catch (e) {
      console.error(e);
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
