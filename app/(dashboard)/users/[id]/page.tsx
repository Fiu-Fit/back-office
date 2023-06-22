import { User, Workout, categoryToString } from '@fiu-fit/common';
import { blockColor, blockTranslation } from '../statusUtils';
import { userCardFields, workoutListHeaders } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { BlockHeader, DetailCard, List } from '@/components';

async function getUser(id: number): Promise<User> {
  const { data: user } = await api.get<User>(`/users/${id}`);

  return user;
}

async function getWorkouts(ids: string[]): Promise<Workout[]> {
  if (ids.length === 0) return [];
  const { data: workoutList } = await api.get<Workout[]>(
    `/workouts?filters={"_id": ["${ids.join('","')}"]}`
  );

  workoutList.forEach((workout: any) => {
    workout.categoryString = categoryToString(workout.category);
    workout.exerciseNumber = workout.exercises.length;
    workout.athleteNumber = workout.athleteIds.length;
  });

  return workoutList;
}

export default async function UserDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const user = await getUser(id);
  const favoriteWorkouts = await getWorkouts(user.favoriteWorkouts);
  const blocked = user.blocked;

  const toggleBlockUser = async (): Promise<User> => {
    'use server';
    const { data: blockedUser } = await api.put<User>(`/users/${id}`, {
      blocked: !blocked,
    });

    return blockedUser;
  };

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full'>
      <BlockHeader
          title={`${user.firstName} ${user.lastName}`}
          blocked={user.blocked}
          toggleBlock={toggleBlockUser}
          blockStatus={blockTranslation(blocked)}
          blockColor={blockColor(blocked)}
        />
        <div className='grid grid-cols-3 gap-4'>
          <List
            className='col-span-2'
            headers={workoutListHeaders}
            values={favoriteWorkouts}
            detailButtonHref='/workouts'
          />
          <DetailCard
            className='col-span-1'
            title='Detalle de usuario'
            fields={userCardFields(user)}
          />
        </div>
      </div>
    </div>
  );
}
