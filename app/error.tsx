'use client';

import { Button, Modal } from '@/components';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Modal id='error-modal' type='alwaysShown'>
      <h1 className='text-lg font-bold'>¡Algo salio mal!</h1>
      <div className='mb-4 max-h-96 overflow-y-auto'>
        <code>{error.message}</code>
        {!!error.cause && <code>{!error.cause}</code>}
      </div>
      <Button text='Reintentar' onClick={() => reset()} />
    </Modal>
  );
}
