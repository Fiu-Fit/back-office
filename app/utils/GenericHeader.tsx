'use client';
import { AppBar } from '@mui/material';
import { ReactNode } from 'react';

export const GenericHeader = ({ children }: { children: ReactNode }) => {
  return (
    <AppBar className='bg-neutral shadow-none' position='relative'>
      <div>{children}</div>
    </AppBar>
  );
};
