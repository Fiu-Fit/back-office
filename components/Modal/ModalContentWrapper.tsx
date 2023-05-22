import { ReactNode } from 'react';
import { ModalType } from './modalType';

export default function ModalContentWrapper({
  children,
  id,
  type,
}: {
  children: ReactNode;
  id: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  type?: ModalType;
}) {
  const classes = `modal ${type == 'dismissable' && 'cursor-pointer'} ${
    type == 'alwaysShown' && 'modal-open'
  }`;

  if (type == 'dismissable') {
    return (
      <label className={classes} htmlFor={id}>
        <label className='modal-box relative text-center' htmlFor=''>
          {children}
        </label>
      </label>
    );
  }

  return (
    <div className={classes}>
      <div className='modal-box relative text-center'>{children}</div>
    </div>
  );
}
