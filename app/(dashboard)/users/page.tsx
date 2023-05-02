import api from '@/api/serverSideAxiosConfig';
import { UsersList } from '@/app/(dashboard)/users/components/UserList';
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { Page } from '@/app/utils/interfaces';

async function getUsers(): Promise<Page<User>> {
  const { data: page } = await api.get<Page<User>>('/users');

  return page;
}
export default async function UsersPage() {
  const page = await getUsers();

  return (
    <div className='mx-12 mt-12'>
      <h1 className='text-4xl mb-4'>Usuarios</h1>
      <UsersList page={page} />
    </div>
  );
}
