import './globals.css';
import './preflight.css';

import { ReactNode } from 'react';

export const metadata = {
  title:       'Fiu-Fit - Administración',
  description: 'Sistema back-office de Fiu-Fit',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex justify-center w-full h-screen'>{children}</body>
    </html>
  );
}
