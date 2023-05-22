'use client';
import { mdiDotsHorizontal, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Button, ErrorModal } from '.';

export default function Header({ sidebarId }: { sidebarId: string }) {
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get('api/auth/logout');
      if (response.status === HttpStatusCode.Ok) router.replace('/login');
      else
        throw new AxiosError(
          undefined,
          response.status as unknown as string,
          response.config,
          response.request,
          response
        );
    } catch (err) {
      if (!(err instanceof AxiosError)) return;
      setError(`${err.response?.status} - ${err.response?.statusText}`);
      modalRef.current?.click();
    }
  };

  return (
    <>
      <div className='navbar bg-base-100 bg-opacity-60 backdrop-blur-lg z-50'>
        <div className='flex-none'>
          <label
            className='btn btn-square btn-ghost drawer-button'
            htmlFor={sidebarId}
          >
            <Icon path={mdiMenu} size={1.5} />
          </label>
        </div>
        <div className='flex-1'>
          <Link className='btn btn-ghost normal-case text-xl' href='users'>
            Fiu-Fit
          </Link>
        </div>
        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <Icon path={mdiDotsHorizontal} size={1} />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52'
            >
              <Button
                text='Cerrar sesión'
                variant='text'
                size='sm'
                className='align-middle normal-case'
                onClick={handleLogout}
              />
            </ul>
          </div>
        </div>
      </div>
      <ErrorModal
        id='header-error-modal'
        title='Oops... Ocurrio un problema'
        error={error}
        innerRef={modalRef}
      />
    </>
  );
}
