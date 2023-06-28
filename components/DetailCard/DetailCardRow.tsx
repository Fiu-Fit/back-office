import { ReactNode } from 'react';

export default function DetailCardRow({
  header,
  value,
}: {
  header: string;
  value: string | ReactNode;
}) {
  return (
    <div
      className='grid grid-cols-3 gap-4 px-6 py-5 text-sm leading-5'
    >
      <dt className='font-medium'>{header}</dt>
      <dd className='col-span-2'>{value}</dd>
    </div>
  );
}
