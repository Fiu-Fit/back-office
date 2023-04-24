import { UserCard } from '@/app/(dashboard)/users/components/user-card';
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { api } from '@/app/api/api';
import { GenericHeader } from '@/app/utils/GenericHeader';

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

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className='header'>
        <GenericHeader>
          <div className='flex flex-col justify-between px-12 py-10'>
            <h1 className='text-2xl text-white '>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        </GenericHeader>
      </div>
      <UserCard user={user} />
    </div>
  );
}
