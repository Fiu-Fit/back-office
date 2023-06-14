import { ReactNode } from 'react';
import { Button } from '..';

export default function Table({
  children,
  className,
  pagination,
}: {
  children: ReactNode;
  className?: string;
  pagination?: boolean;
}) {
  return (
    <div
      className={`rounded-box overflow-hidden flex flex-col border-base-content/5 border ${className}`}
    >
      <div className='h-full flex-shrink overflow-y-scroll'>
        <table className='w-full table table-zebra'>{children}</table>
      </div>
      {pagination && (
        <div className='block px-4 py-3 border-base-content/5 border-t bg-neutral'>
          <div className='flex justify-between'>
            <Button text='Anterior' />
            <Button text='Siguiente' />
          </div>
        </div>
      )}
    </div>
  );
}
