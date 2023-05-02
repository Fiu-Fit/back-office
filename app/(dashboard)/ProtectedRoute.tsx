import { HttpStatusCode } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import api from '@/api/serverSideAxiosConfig';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export default async function ProtectedRoute({
  children,
  redirectTo,
}: ProtectedRouteProps) {
  const redirectUrl = redirectTo || '/';
  try {
    const token = cookies().get('token')?.value;
    const response = await api.post('/auth/validate', { token });
    if (response.status !== HttpStatusCode.Ok) redirect(redirectUrl);
  } catch (error) {
    console.error(error);
    redirect(redirectUrl);
  }

  return children;
}
