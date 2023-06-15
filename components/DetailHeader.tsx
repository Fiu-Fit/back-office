'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import DetailDeleteModal from './DetailDeleteModal';
import { Button } from '.';

export default function DetailHeader({
  title,
  onDelete,
  afterDeleteRoute,
  returnOnDelete,
}: {
  title: string;
  onDelete: () => Promise<any>;
  afterDeleteRoute?: string;
  returnOnDelete?: boolean;
}) {
  const router = useRouter();
  const modalRef = useRef<HTMLInputElement | null>(null);
  const openModal = () => {
    if (!modalRef.current?.checked) modalRef.current?.click();
  };
  const handleDelete = async () => {
    await onDelete();
    if (returnOnDelete) {
      router.back();
      router.refresh();
    } else if (afterDeleteRoute) {
      router.push(afterDeleteRoute);
    }
  };

  return (
    <>
      <div className='navbar bg-base-100 w-full'>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>{title}</h1>
        </div>
        <div className='flex-none gap-2'>
          <Button text='Eliminar' color='error' onClick={openModal} />
        </div>
      </div>
      <DetailDeleteModal innerRef={modalRef} handleDelete={handleDelete} />
    </>
  );
}
