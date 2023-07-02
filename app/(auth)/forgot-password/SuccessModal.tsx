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
        La solicitud de cambio de contraseña fue enviada con exito
      </h1>
      <p className='mb-8'>
        Revise su correo electronico para continuar con el proceso.
      </p>
      <Link href='/' className='btn btn-primary'>
        Regresar a inicio de sesion
      </Link>
    </Modal>
  );
}
