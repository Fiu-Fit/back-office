import Modal from './Modal';

export default function ErrorModal({
  innerRef,
  title,
  error,
}: {
  innerRef: React.RefObject<HTMLInputElement>;
  title: string;
  error: string;
}) {
  return (
    <Modal id='error-modal' innerRef={innerRef}>
      <h2 className='text-lg font-bold'>{title}</h2>
      <h3>Detalles adicionales:</h3>
      <pre>{error}</pre>
    </Modal>
  );
}
