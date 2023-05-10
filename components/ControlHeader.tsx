'use client';
import Icon from '@mdi/react';
import Link from 'next/link';

export default function ControlHeader({
  title,
  buttonText,
  createHref,
  icon,
}: {
  title: string;
  buttonText: string;
  createHref: string;
  icon?: string;
}) {
  return (
    <div className='mb-4 flex flex-row justify-between'>
      <h1 className='text-4xl'>{title}</h1>
      <Link href={createHref} className='btn btn-primary'>
        {icon && <Icon path={icon} className='mr-2' size={1} />}
        {buttonText}
      </Link>
    </div>
  );
}
