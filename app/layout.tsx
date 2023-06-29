import './globals.css';
import './preflight.css';

import { ReactNode } from 'react';

export const metadata = {
  title:       'FiuFit - Administración',
  description: 'Sistema back-office de FiuFit',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex justify-center w-full h-screen'>{children}</body>
    </html>
  );
}
