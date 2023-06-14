import { Button, Modal } from '.';

export default function ConfirmationModal({
  innerRef,
  toggleModal,
  handleConfirm,
  text,
}: {
  innerRef: React.RefObject<HTMLInputElement>;
  toggleModal?: () => void;
  handleConfirm: () => void;
  text: string;
}) {
  const innerToggleModal = toggleModal || (() => innerRef.current?.click());
  const innerHandleDelete = () => {
    handleConfirm();
    innerToggleModal();
  };
  
  return (
    <Modal id='confirm-delete-modal' innerRef={innerRef}>
      <h1 className='text-2xl font-medium'>
        {text}
      </h1>
      <div className='w-full flex justify-center gap-2 mt-4'>
        <Button text='Cancelar' color='neutral' onClick={innerToggleModal} />
        <Button text='Confirmar' color='warning' onClick={innerHandleDelete} />
      </div>
    </Modal>
  );
}