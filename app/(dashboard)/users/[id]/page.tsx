import { User } from '@fiu-fit/common';
import { userCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import DetailHeader from '@/components/DetailHeader';

async function getUser(id: number): Promise<User> {
  const { data: user } = await api.get<User>(`/users/${id}`);

  return user;
}

export default async function UserDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const user = await getUser(id);

  const deleteUser = async (): Promise<User> => {
    'use server';
    const { data: deletedUser } = await api.delete<User>(`/users/${id}`);

    return deletedUser;
  };

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full'>
        <DetailHeader
          title={`${user.firstName} ${user.lastName}`}
          onDelete={deleteUser}
          afterDeleteRoute='/users'
        />
        <DetailCard
          title='Detalle de usuario'
          fields={userCardFields(user)}
        />
      </div>
    </div>
  );
}
