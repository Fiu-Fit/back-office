'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import DetailDeleteModal from './DetailDeleteModal';

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
  const modalRef = useRef<HTMLInputElement | null>(null);
  const openModal = () => {
    if (!modalRef.current?.checked) modalRef.current?.click();
  };
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
          <button className='btn btn-error' onClick={openModal}>
            Eliminar
          </button>
          <button className='btn btn-primary'>Editar</button>
        </div>
      </div>
      <DetailDeleteModal innerRef={modalRef} handleDelete={handleDelete} />
    </>
  );
}
