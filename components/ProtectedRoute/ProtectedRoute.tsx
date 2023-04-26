import { redirect } from 'next/navigation';
import axiosInstance from '@/api/serverSideAxiosConfig';
import { HttpStatusCode } from 'axios';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export default (async function ProtectedRoute({
  children,
  redirectTo,
}: ProtectedRouteProps) {
  const redirectUrl = redirectTo || '/';
  try {
    const token = cookies().get('token')?.value;
    const response = await axiosInstance.post('/auth/validate', { token });
    if (response.status !== HttpStatusCode.Ok) redirect(redirectUrl);
  } catch (error) {
    redirect(redirectUrl);
  }

  return children;
} as unknown as ({ children }: ProtectedRouteProps) => JSX.Element);
