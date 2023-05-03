import './globals.css';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next';
import AppThemeProvider from '@/utils/AppThemeProvider';

export const metadata = {
  title:       'Create Next App',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.className}>
      <body className='flex justify-center w-full h-screen'>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
