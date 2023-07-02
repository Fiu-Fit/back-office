import { Button, ButtonColor, Modal } from '.';

export default function ConfirmationModal({
  innerRef,
  toggleModal,
  handleConfirm,
  text,
  confirmationColor,
  id,
}: {
  innerRef: React.RefObject<HTMLInputElement>;
  toggleModal?: () => void;
  handleConfirm: () => void;
  text: string;
  confirmationColor?: ButtonColor;
  id: string;
}) {
  const innerToggleModal = toggleModal || (() => innerRef.current?.click());
  const innerHandleDelete = () => {
    handleConfirm();
    innerToggleModal();
  };

  return (
    <Modal id={id} innerRef={innerRef}>
      <h1 className='text-2xl font-medium'>{text}</h1>
      <div className='w-full flex justify-center gap-2 mt-4'>
        <Button text='Cancelar' color='neutral' onClick={innerToggleModal} />
        <Button
          text='Confirmar'
          color={confirmationColor || 'warning'}
          onClick={innerHandleDelete}
        />
      </div>
    </Modal>
  );
}
