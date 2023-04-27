'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const innerTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <ThemeProvider theme={innerTheme}>{children}</ThemeProvider>;
}
