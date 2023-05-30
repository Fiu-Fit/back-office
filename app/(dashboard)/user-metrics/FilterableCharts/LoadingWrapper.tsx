import { ReactNode } from 'react';

export default function LoadingWrapper({
  loading: isLoading,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) {
  return isLoading ? (
    <div className='flex justify-center items-center h-64'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
    </div>
  ) : (
    <>{children}</>
  );
}
