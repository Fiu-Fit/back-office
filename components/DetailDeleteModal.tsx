import Modal from './Modal';

export default function DetailDeleteModal({
  innerRef,
  toggleModal,
  handleDelete,
}: {
  innerRef: React.RefObject<HTMLInputElement>;
  toggleModal?: () => void;
  handleDelete: () => void;
}) {
  const innerToggleModal = toggleModal || (() => innerRef.current?.click());
  const innerHandleDelete = () => {
    handleDelete();
    innerToggleModal();
  };
  
  return (
    <Modal id='confirm-delete-modal' innerRef={innerRef}>
      <h1 className='text-2xl font-medium'>
        Estas seguro de que quieres eliminar esta rutina?
      </h1>
      <p>Esta accion no se puede deshacer!</p>
      <div className='w-full flex justify-center gap-2 mt-4'>
        <button className='btn btn-primary' onClick={innerToggleModal}>
          Cancelar
        </button>
        <button className='btn btn-error' onClick={innerHandleDelete}>
          Eliminar
        </button>
      </div>
    </Modal>
  );
}
