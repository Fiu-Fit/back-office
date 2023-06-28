import { Page, Rating, Workout, unitToString } from '@fiu-fit/common';
import Link from 'next/link';
import UserTable from '../../users/UserTable';
import { UserDisplay } from '../../users/interfaces';
import { blockColor, blockTranslation } from '../statusUtils';
import {
  exerciseListHeaders,
  ratingListHeaders,
  workoutCardFields,
} from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { BlockHeader } from '@/components';
import DetailCard from '@/components/DetailCard/DetailCard';
import List from '@/components/List';

async function getWorkout(id: string): Promise<Workout> {
  const { data: workout } = await api.get<Workout>(`/workouts/${id}`);

  workout.exercises.forEach((exercise: any) => {
    exercise.unitString = unitToString(exercise.unit);
    exercise.name = exercise.exercise?.name || 'Desconocido';
  });

  return workout;
}

async function getUsers(workoutId: string): Promise<Page<UserDisplay>> {
  try {
    const { data: users } = await api.get<Page<UserDisplay>>(
      `/users/favorited/${workoutId}`
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
  const users = await getUsers(workout._id);
  const ratings = await getRatings(workout._id);
  const blocked = workout.isBlocked;

  const toggleBlockWorkout = async (): Promise<Workout> => {
    'use server';
    const { data: modifiedWorkout } = await api.put<Workout>(
      `/workouts/${id}`,
      {
        isBlocked: !blocked,
      }
    );

    return modifiedWorkout;
  };

  return (
    <div className='w-full'>
      <div className='p-12 w-full gap-8'>
        <BlockHeader
          title={workout.name}
          blocked={workout.isBlocked}
          blockColor={blockColor(workout.isBlocked)}
          blockStatus={blockTranslation(workout.isBlocked)}
          toggleBlock={toggleBlockWorkout}
        />
        <div className='flex relative mb-8'>
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
          >
            <div className='px-6 py-5 text-sm leading-5'>
              <Link
                href={`/users/${workout.authorId}`}
                className='btn btn-primary w-full'
              >
                Ver autor
              </Link>
            </div>
          </DetailCard>
        </div>
        <UserTable data={users.rows} />
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
