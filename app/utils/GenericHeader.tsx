'use client';
import { AppBar } from '@mui/material';
import { ReactNode } from 'react';
import { drawerWidth } from '@/app/utils/constants';

export const GenericHeader = ({ children }: { children: ReactNode }) => {
  return (
    <AppBar
      className='border-b border-gray-600'
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml:    `${drawerWidth}px`,
        top:   '65px',
      }}
    >
      <div>{children}</div>
    </AppBar>
  );
};
