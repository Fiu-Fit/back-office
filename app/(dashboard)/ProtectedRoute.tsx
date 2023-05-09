import { HttpStatusCode } from 'axios';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import api from '@/api/serverSideAxiosConfig';

const ADMIN_ROLE = 'Admin';

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
    const {
      status,
      data: { role },
    } = await api.post('/users/me');
    if (status !== HttpStatusCode.Ok || role != ADMIN_ROLE)
      redirect(redirectUrl);
  } catch (error) {
    redirect(redirectUrl);
  }

  return children;
}
