'use client';
import { User } from '@fiu-fit/common';
import { Card } from '@mui/material';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Card>
      <div className='shadow overflow-hidden rounded-md'>
        <div className='py-5 border-b border-gray-600 px-6'>
          <div className='rich-text'>
            <h2>Detalle del Usuario</h2>
          </div>
        </div>
        <div className='p-0'>
          <dl>
            <div className='grid grid-cols-3 gap-4 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>ID</dt>
              <dd className='text-sm leading-5 mt-0 col-span-2'>{user.id}</dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'> Email</dt>
              <dd className='text-sm leading-5 mt-0 col-span-2'>
                {user.email}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>Nombre</dt>
              <dd className='text-sm leading-5 mt-0 col-span-2'>
                {user.firstName}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'> Apellido</dt>
              <dd className='text-sm leading-5 mt-0 col-span-2'>
                {user.lastName}
              </dd>
            </div>
            <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
              <dt className='text-sm leading-5 font-medium'>Rol</dt>
              <dd className='text-sm leading-5 mt-0 col-span-2'>
                {user.role}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Card>
  );
};
