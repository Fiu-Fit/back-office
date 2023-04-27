import '../globals.css';

import { ReactNode } from 'react';
import { Header } from '@/app/utils/Header';
import { MuiSetup } from '@/app/utils/MuiSetup';
import { Sidebar } from '@/app/utils/Sidebar';

export const metadata = {
  title:       'Create Next App',
  description: 'Generated by create next app',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex justify-center w-full'>
        <MuiSetup>
          <div className='flex flex-row w-full'>
            <Sidebar />
            <div className='flex flex-col w-full h-full'>
              <Header />

              <div className='container w-full h-full'>{children}</div>
            </div>
          </div>
        </MuiSetup>
      </body>
    </html>
  );
}