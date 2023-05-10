import { Page, User } from '@fiu-fit/common';
import { mdiAccountSupervisor } from '@mdi/js';
import api from '@/api/serverSideAxiosConfig';
import ControlHeader from '@/components/ControlHeader';
import List from '@/components/List';

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
        buttonText='Registrar usuario'
        icon={mdiAccountSupervisor}
        createHref='./register'
      />
      <List
        headers={{
          ID:       'id',
          Nombre:   'firstName',
          Apellido: 'lastName',
          Email:    'email',
          Rol:      'role',
        }}
        values={page.rows}
        detailButtonHref='/users'
      />
    </div>
  );
}
