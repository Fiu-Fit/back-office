import { ReactNode } from 'react';

export default function Modal({
  children,
  id,
  innerRef,
  alwaysShown,
}: {
  children: ReactNode;
  id: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  alwaysShown?: boolean;
}) {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' ref={innerRef}/>
      <label htmlFor={id} className={`modal ${!alwaysShown && 'cursor-pointer'} ${alwaysShown && 'modal-open'}`}>
        <label className='modal-box relative text-center' htmlFor=''>
          {children}
        </label>
      </label>
    </>
  );
}
