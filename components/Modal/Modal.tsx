import { ReactNode } from 'react';
import ModalContentWrapper from './ModalContentWrapper';
import { ModalType } from './modalType';

export default function Modal({
  children,
  id,
  innerRef,
  type = 'dismissable',
}: {
  children: ReactNode;
  id: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  alwaysShown?: boolean;
  type?: ModalType;
}) {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' ref={innerRef} />
      <ModalContentWrapper
        id={id}
        type={type}
      >
        {children}
      </ModalContentWrapper>
    </>
  );
}
