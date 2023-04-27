import { UserCard } from '@/app/(dashboard)/users/components/user-card';
import UserDetailHeader from '@/app/(dashboard)/users/components/user-detail-header';
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { api } from '@/app/api/api';

async function getUser(id: number): Promise<User> {
  const { data: user } = await api.get<User>(`/users/${id}`);

  return user;
}

async function deleteUser(id: number): Promise<User> {
  'use server';
  const { data: user } = await api.delete<User>(`/users/${id}`);

  return user;
}

export default async function UserDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const user = await getUser(id);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <UserDetailHeader user={user} deleteUser={deleteUser} />
      <div className='mx-12 mt-12 w-1/2'>
        <UserCard user={user} />
      </div>
    </div>
  );
}