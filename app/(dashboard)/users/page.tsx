import ControlHeader from './components/ControlHeader';
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
    <div className='m-12'>
      <ControlHeader />
      <UsersList page={page} />
    </div>
  );
}
