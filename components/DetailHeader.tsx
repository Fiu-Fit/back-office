'use client';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

export default function DetailHeader({
  title,
  onDelete,
  afterDeleteRoute,
}: {
  title: string;
  onDelete: () => Promise<any>;
  afterDeleteRoute: string;
}) {
  const router = useRouter();
  const toggleModal = () =>
    document.getElementById('confirm-delete-modal')?.click();

  const handleDelete = () => {
    onDelete();
    router.push(afterDeleteRoute);
  };

  return (
    <>
      <div className='navbar bg-base-100 w-full'>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>{title}</h1>
        </div>
        <div className='flex-none gap-2'>
          <button className='btn btn-error' onClick={toggleModal}>
            Eliminar
          </button>
          <button className='btn btn-primary'>Editar</button>
        </div>
      </div>
      <Modal id='confirm-delete-modal'>
        <h1 className='text-2xl font-medium'>
          Estas seguro de que quieres eliminar esta rutina?
        </h1>
        <p>Esta accion no se puede deshacer!</p>
        <div className='w-full flex justify-center gap-2 mt-4'>
          <button className='btn btn-primary' onClick={toggleModal}>
            Cancelar
          </button>
          <button className='btn btn-error' onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </Modal>
    </>
  );
}
