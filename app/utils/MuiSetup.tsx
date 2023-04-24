'use client';

import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { darkTheme } from '@/app/utils/theme';

type Props = {
  children: ReactNode;
};

export const MuiSetup = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </>
  );
};
