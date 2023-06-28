import { Page, User } from '@fiu-fit/common';
import { mdiAccountSupervisor } from '@mdi/js';
import UserTable from './UserTable';
import api from '@/api/serverSideAxiosConfig';
import ControlHeader from '@/components/ControlHeader';

async function getUsers(): Promise<Page<User>> {
  const { data: page } = await api.get<Page<User>>('/users');

  return page;
}
export default async function UsersPage() {
  const page = await getUsers();

  return (
    <div className='m-12'>
      <ControlHeader
        title='Usuarios'
        buttonText='Registrar administrador'
        icon={mdiAccountSupervisor}
        createHref='./register'
      />
      <UserTable data={page.rows} />
    </div>
  );
}
