'use client';
import { AppBar } from '@mui/material';
import { ReactNode } from 'react';

export const GenericHeader = ({ children }: { children: ReactNode }) => {
  return (
    <AppBar className='border-b border-gray-600' position='relative'>
      <div>{children}</div>
    </AppBar>
  );
};
