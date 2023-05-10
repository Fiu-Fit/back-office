import { ReactNode } from 'react';

export default function Modal({
  children,
  id,
  innerRef,
}: {
  children: ReactNode;
  id: string;
  innerRef: React.RefObject<HTMLInputElement>;
}) {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' ref={innerRef}/>
      <label htmlFor={id} className='modal cursor-pointer'>
        <label className='modal-box relative text-center' htmlFor=''>
          {children}
        </label>
      </label>
    </>
  );
}
