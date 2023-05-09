'use client';
import Icon from '@mdi/react';
import { Button } from '@mui/material';
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
      <Button LinkComponent={Link} href={createHref}>
        {icon && <Icon path={icon} className='mr-2' size={1} />}
        {buttonText}
      </Button>
    </div>
  );
}
