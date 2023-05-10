import { Page, User, Workout, categoryToString, unitToString } from '@fiu-fit/common';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import DetailHeader from '@/components/DetailHeader';
import List from '@/components/List';

async function getWorkout(id: string): Promise<Workout> {
  const { data: workout } = await api.get<Workout>(`/workouts/${id}`);

  return workout;
}

async function getUsers(ids: number[]): Promise<Page<User>> {
  const { data: users } = await api.get<Page<User>>(`/users?ids=${ids.join(',')}`);
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

  async function deleteWorkout(): Promise<Workout> {
    'use server';
    const { data: deletedWorkout } = await api.delete<Workout>(
      `/workouts/${workout._id}`
    );

    return deletedWorkout;
  }

  return (
    <div className='w-full'>
      <div className='p-12 w-full gap-8 '>
      <DetailHeader title={workout.name} onDelete={deleteWorkout} afterDeleteRoute='/workouts' />
        <div className='flex relative'>
          <div className='w-2/3'>
            <List
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
          <DetailCard
            title='Detalles de la rutina'
            fields={{
              ID:          workout._id,
              Nombre:      workout.name,
              Descripción: workout.description,
              Duracion:    workout.duration,
              Dificultad:  workout.difficulty,
              Categoria:   categoryToString(workout.category),
            }}
            className='w-1/3 ml-24'
          />
        </div>
        <List
          className='mt-8 h-[600px]'
          headers={{
            ID:       'id',
            UID:      'uid',
            Correo:   'email',
            Nombre:   'firstName',
            Apellido: 'lastName',
            Rol:      'role',
          }}
          values={users.rows}
          detailButtonHref='/users'
        />
      </div>
    </div>
  );
}
