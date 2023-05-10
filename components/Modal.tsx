import { ReactNode } from 'react';

export default function Modal({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' />
      <label htmlFor={id} className='modal cursor-pointer'>
        <label className='modal-box relative text-center' htmlFor=''>
          {children}
        </label>
      </label>
    </>
  );
}
