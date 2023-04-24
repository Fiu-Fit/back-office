'use client';
import { Card } from '@mui/material';
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { RoleEnumToName } from '@/app/utils/interfaces';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className='w-1/2'>
      <div className='shadow overflow-hidden rounded-md'>
        <div className='px-4 py-5 border-b border-gray-600 px-6'>
          <div className='rich-text'>
            <h2 className=''>Detalle del Usuario</h2>
          </div>
        </div>
        <div className='p-0'>
          <dl>
            <div className='grid grid-cols-3 gap-4 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>ID</dt>
              <dd className='mt-1 text-sm leading-5 mt-0 col-span-2'>
                {user.id}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'> Email</dt>
              <dd className='mt-1 text-sm leading-5 mt-0 col-span-2'>
                {user.email}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>Nombre</dt>
              <dd className='mt-1 text-sm leading-5 mt-0 col-span-2'>
                {' '}
                {user.firstName}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'> Apellido</dt>
              <dd className='mt-1 text-sm leading-5 mt-0 col-span-2'>
                {user.lastName}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>Rol</dt>
              <dd className='mt-1 text-sm leading-5 mt-0 col-span-2'>
                {RoleEnumToName[user.role]}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Card>
  );
};
