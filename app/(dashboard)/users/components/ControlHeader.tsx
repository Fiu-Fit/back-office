'use client';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function ControlHeader() {
  return (
    <div className='mb-4 flex flex-row justify-between'>
      <h1 className='text-4xl'>Usuarios</h1>
      <Button LinkComponent={Link} href='/register'>
        <SupervisorAccountIcon className='mr-2' />
        Registrar usuario
      </Button>
    </div>
  );
}
