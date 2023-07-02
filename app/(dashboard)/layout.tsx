import { ReactNode } from 'react';
import ProtectedRoute from '@/app/(dashboard)/ProtectedRoute';
import { Header, Sidebar } from '@/components';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row w-full'>
      <Sidebar id='drawer'>
        <Header sidebarId='drawer'/>
        <div className='flex flex-col w-full'>
          {/* @ts-expect-error Server Component */}
          <ProtectedRoute>
            <div className='w-full h-full'>{children}</div>
          </ProtectedRoute>
        </div>
      </Sidebar>
    </div>
  );
}
