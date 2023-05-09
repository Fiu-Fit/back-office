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
    console.log(response);
    if (response.status !== HttpStatusCode.Created) redirect(redirectUrl);
  } catch (error) {
    console.log(error);
    redirect(redirectUrl);
  }

  return children;
}
