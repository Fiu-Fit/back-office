'use client';
import { mdiDotsHorizontal, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

export default function Header({ sidebarId }: { sidebarId: string }) {
  const router = useRouter();
  const [error, setError] = useState('');
  const handleLogout = async () => {
    try {
      const response = await axios.post('api/auth/logout');
      console.log(response);
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
      const axiosErr = err as AxiosError;
      setError(`${axiosErr.response?.status} - ${axiosErr.response?.statusText}`);
      document.getElementById('error-modal')?.click();
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
              <button
                className='btn btn-ghost btn-sm align-middle normal-case'
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </ul>
          </div>
        </div>
      </div>
      <Modal id='error-modal'>
        <h2 className='text-lg font-bold'>Oops... Hubo un error</h2>
        <h3>Detalles adicionales:</h3>
        <pre>{error}</pre>
      </Modal>
    </>
  );
}
