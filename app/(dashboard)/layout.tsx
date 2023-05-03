import { ReactNode } from 'react';
import ProtectedRoute from '@/app/(dashboard)/ProtectedRoute';
import { Header } from '@/app/utils/Header';
import { Sidebar } from '@/app/utils/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row w-full'>
      <Sidebar />
      <div className='flex flex-col w-full h-full'>
        <Header />
        {/* @ts-expect-error Server Component */}
        <ProtectedRoute redirectTo='/login'>
          <div className='w-full h-full'>{children}</div>
        </ProtectedRoute>
      </div>
    </div>
  );
}
