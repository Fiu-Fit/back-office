import { User, Workout, categoryToString } from '@fiu-fit/common';
import Link from 'next/link';
import { UserDisplay } from '../interfaces';
import {
  blockColor,
  blockTranslation,
  verificationColor,
  verificationTranslation,
} from '../statusUtils';
import { userCardFields, workoutListHeaders } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import {
  Badge,
  BlockHeader,
  DetailCard,
  DetailCardRow,
  List,
} from '@/components';
import { Role } from '@/interfaces';

async function getUser(id: number): Promise<UserDisplay> {
  const { data: user } = await api.get<UserDisplay>(`/users/${id}`);

  return user;
}

async function getFavoriteWorkouts(id: number): Promise<Workout[]> {
  const { data: workoutList } = await api.get<Workout[]>(
    `/users/${id}/favoriteWorkouts`
  );

  workoutList.forEach((workout: any) => {
    workout.categoryString = categoryToString(workout.category);
    workout.exerciseNumber = workout.exercises.length;
    workout.athleteNumber = workout.athleteIds.length;
  });

  return workoutList;
}

async function getCreatedWorkouts(id: number): Promise<Workout[]> {
  const { data: workoutList } = await api.get<Workout[]>(
    `/workouts?filters={"authorId": "${id}"}`
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
  console.log(user);
  const favoriteWorkouts = await getFavoriteWorkouts(user.id);
  const createdWorkouts = await getCreatedWorkouts(user.id);
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
          >
            {user.role === Role.Trainer && user.verification ? (
              <DetailCardRow
                header='Verificado'
                value={
                  <Link href={`/requests/${user.verification.id}`}>
                    <Badge
                      color={verificationColor(user.verification)}
                      text={verificationTranslation(user.verification)}
                    />
                  </Link>
                }
              />
            ) : (
              <DetailCardRow
                header='Verificado'
                value={
                  <Badge
                    color={verificationColor(user.verification)}
                    text={verificationTranslation(user.verification)}
                  />
                }
              />
            )}
          </DetailCard>
        </div>
        {user.role === Role.Trainer && (
          <div>
            <h1 className='text-2xl mt-8 mb-2'>Rutinas creadas</h1>
            <List
              className='col-span-2'
              headers={workoutListHeaders}
              values={createdWorkouts}
              detailButtonHref='/workouts'
            />
          </div>
        )}
      </div>
    </div>
  );
}
