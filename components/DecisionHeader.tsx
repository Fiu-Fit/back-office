'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';
import { Button, ConfirmationModal } from '.';

export default function DecisionHeader({
  title,
  onAccept,
  onDecline,
  children,
}: {
  title: string;
  onAccept?: () => Promise<any>;
  onDecline?: () => Promise<any>;
  children?: ReactNode;
}) {
  const router = useRouter();
  const declineModalRef = useRef<HTMLInputElement | null>(null);
  const acceptModalRef = useRef<HTMLInputElement | null>(null);

  const openDeclineModal = () => {
    if (!declineModalRef.current?.checked) declineModalRef.current?.click();
  };

  const openAcceptModal = () => {
    if (!acceptModalRef.current?.checked) acceptModalRef.current?.click();
  };

  const handleDecline = async () => {
    if (!onDecline) return;

    await onDecline();
    router.refresh();
  };

  const handleAccept = async () => {
    if (!onAccept) return;

    await onAccept();
    router.refresh();
  };

  return (
    <>
      <div className='navbar bg-base-100 w-full'>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>
            <span>{title}</span> {children}
          </h1>
        </div>
        <div className='flex-none gap-2'>
          {onAccept && (
            <Button text='Aceptar' color='success' onClick={openAcceptModal} />
          )}
          {onDecline && (
            <Button text='Rechazar' color='error' onClick={openDeclineModal} />
          )}
        </div>
      </div>
      {onDecline && (
        <ConfirmationModal
          text='¿Estás seguro de que quieres rechazar esta solicitud?'
          innerRef={declineModalRef}
          handleConfirm={handleDecline}
          confirmationColor='error'
        />
      )}
      {onAccept && (
        <ConfirmationModal
          text='¿Estás seguro de que quieres aceptar esta solicitud?'
          innerRef={acceptModalRef}
          handleConfirm={handleAccept}
          confirmationColor='success'
        />
      )}
    </>
  );
}
