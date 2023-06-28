import { ReactNode } from 'react';

export default function DetailCard({
  title,
  fields,
  className,
  children,
}: {
  title: string;
  fields: { [key: string]: any };
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`bg-neutral text-neutral-content card overflow-hidden rounded-md ${className}`}>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <dl className='divide-y divide-base-100'>
          {Object.entries(fields).map(([key, value]) => (
            <div className='grid grid-cols-3 gap-4 px-6 py-5 text-sm leading-5' key={key}>
              <dt className='font-medium'> {key}</dt>
              <dd className='col-span-2'>{value}</dd>
            </div>
          ))}
          {children}
        </dl>
      </div>
    </div>
  );
}
