'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Badge, BadgeColor, Button, ConfirmationModal } from '@/components';

export default function BlockHeader({
  title,
  blockStatus,
  blockColor,
  blocked,
  toggleBlock,
  blockMessage,
  unblockMessage,
}: {
  title: string;
  blockStatus: string;
  blockColor: BadgeColor;
  blocked: boolean;
  toggleBlock: () => Promise<any>;
  blockMessage: string;
  unblockMessage: string;
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

  const handleToggleBlock = async () => {
    await toggleBlock();
    router.refresh();
  };

  return (
    <>
      <div className='navbar bg-base-100 w-full'>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>
            <span>{title}</span>
            <span> - </span>
            <Badge text={blockStatus} color={blockColor} />
          </h1>
        </div>
        <div className='flex-none gap-2'>
          {blocked ? (
            <Button
              text='Desbloquear'
              color='success'
              onClick={openUnblockModal}
            />
          ) : (
            <Button text='Bloquear' color='error' onClick={openBlockModal} />
          )}
        </div>
      </div>
      <ConfirmationModal
        text={unblockMessage}
        innerRef={unblockModalRef}
        handleConfirm={handleToggleBlock}
        id='block-header-unblock-modal'
      />
      <ConfirmationModal
        text={blockMessage}
        innerRef={blockModalRef}
        handleConfirm={handleToggleBlock}
        id='block-header-block-modal'
      />
    </>
  );
}
