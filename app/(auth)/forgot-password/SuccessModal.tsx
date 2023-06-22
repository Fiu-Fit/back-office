import Link from 'next/link';
import { RefObject } from 'react';
import { Modal } from '@/components';

export default function ReturnModal({ innerRef }: { innerRef: RefObject<HTMLInputElement>;}) {
  return (
    <Modal
      id='password-reset-success-modal'
      type='undismissable'
      innerRef={innerRef}
    >
      <h1 className='text-3xl mb-5 font-medium'>
        La contraseña fue reestablecida con exito
      </h1>
      <p className='mb-8'>
        Haga click en el boton inferior para regresar a la pagina de inicio de
        sesion
      </p>
      <Link href='/login' className='btn btn-primary'>
        Regresar a inicio de sesion
      </Link>
    </Modal>
  );
}
