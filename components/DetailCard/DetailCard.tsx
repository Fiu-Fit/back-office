import { ReactNode } from 'react';
import DetailCardRow from './DetailCardRow';

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
    <div className={`bg-base-300 text-base-content card overflow-hidden rounded-md ${className}`}>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <dl className='divide-y divide-base-100'>
          {Object.entries(fields).map(([key, value]) => (
            <DetailCardRow key={key} header={key} value={value}/>
          ))}
          {children}
        </dl>
      </div>
    </div>
  );
}
