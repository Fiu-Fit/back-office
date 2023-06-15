import { Page, Rating, User, Workout, unitToString } from '@fiu-fit/common';
import {
  exerciseListHeaders,
  ratingListHeaders,
  userListHeaders,
  workoutCardFields,
} from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import DetailHeader from '@/components/DetailHeader';
import List from '@/components/List';

async function getWorkout(id: string): Promise<Workout> {
  const { data: workout } = await api.get<Workout>(`/workouts/${id}`);

  workout.exercises.forEach((exercise: any) => {
    exercise.unitString = unitToString(exercise.unit);
    exercise.name = exercise.exercise?.name || 'Desconocido';
  });

  return workout;
}

async function getUsers(ids: number[]): Promise<Page<User>> {
  try {
    const { data: users } = await api.get<Page<User>>(
      `/users?ids=${ids.join(',')}`
    );
    return users;
  } catch (err) {
    console.error(err);
    return { rows: [], count: 0 };
  }
}

async function getRatings(workoutId: string): Promise<Rating[]> {
  try {
    const { data: comments } = await api.get<Rating[]>(
      `/ratings?filters={"workoutId": "${workoutId}"}`
    );
    return comments;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function WorkoutDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const workout = await getWorkout(id);
  const users = await getUsers(workout.athleteIds);
  const ratings = await getRatings(workout._id);

  async function deleteWorkout(): Promise<Workout> {
    'use server';
    const { data: deletedWorkout } = await api.delete<Workout>(
      `/workouts/${id}`
    );

    return deletedWorkout;
  }

  return (
    <div className='w-full'>
      <div className='p-12 w-full gap-8'>
        <DetailHeader
          title={workout.name}
          onDelete={deleteWorkout}
          afterDeleteRoute='/workouts'
        />
        <div className='flex relative'>
          <div className='w-2/3'>
            <List
              className='w-2/3 absolute h-full'
              headers={exerciseListHeaders}
              values={workout.exercises}
              detailButtonHref='/exercises'
            />
          </div>
          <DetailCard
            title='Detalles de la rutina'
            fields={workoutCardFields(workout)}
            className='w-1/3 ml-24'
          />
        </div>
        <List
          className='mt-8 max-h-[600px]'
          headers={userListHeaders}
          values={users.rows}
          detailButtonHref='/users'
        />
        <List
          className='mt-8 max-h-[600px]'
          headers={ratingListHeaders}
          values={ratings}
          detailButtonHref='/ratings'
        />
      </div>
    </div>
  );
}
