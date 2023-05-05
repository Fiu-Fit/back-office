'use client';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function ControlHeader() {
  return (
    <div className='mb-4 flex flex-row justify-between'>
      <h1 className='text-4xl'>Workout</h1>
      <Button LinkComponent={Link} href='/workout'>
        <FitnessCenterIcon className='mr-2' />
        Registrar workout
      </Button>
    </div>
  );
}
