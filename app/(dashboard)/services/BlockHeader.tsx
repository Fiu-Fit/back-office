'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Button, ConfirmationModal } from '@/components';

export default function BlockHeader({
  title,
  blockStatus,
  blockVariant,
  blocked,
  onBlock,
  onUnblock,
}: {
  title: string;
  blockStatus: string;
  blockVariant: string;
  blocked: boolean;
  onBlock: () => Promise<any>;
  onUnblock: () => Promise<any>;
}) {
  const router = useRouter();
  const blockModalRef = useRef<HTMLInputElement | null>(null);
  const unblockModalRef = useRef<HTMLInputElement | null>(null);
  const openBlockModal = () => {
    if (!blockModalRef.current?.checked) blockModalRef.current?.click();
  };
  const openUnblockModal = () => {
    if (!unblockModalRef.current?.checked) unblockModalRef.current?.click();
  };

  const handleBlock = async () => {
    await onBlock();
    router.refresh();
  };

  const handleUnblock = async () => {
    await onUnblock();
    router.refresh();
  };

  return (
    <>
      <div className='navbar bg-base-100 w-full'>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>
            <span>{title}</span>
            <span> - </span>
            <span className={`badge badge-${blockVariant} align-middle`}>
              {blockStatus}
            </span>
          </h1>
        </div>
        <div className='flex-none gap-2'>
          {blocked ? (
            <Button
              text='Desbloquear'
              color='primary'
              onClick={openUnblockModal}
            />
          ) : (
            <Button text='Bloquear' color='error' onClick={openBlockModal} />
          )}
        </div>
      </div>
      <ConfirmationModal
        text='¿Estas seguro que quieres desbloquear este servicio?'
        innerRef={unblockModalRef}
        handleConfirm={handleUnblock}
      />
      <ConfirmationModal
        text='¿Estas seguro que quieres bloquear este servicio?'
        innerRef={blockModalRef}
        handleConfirm={handleBlock}
      />
    </>
  );
}
