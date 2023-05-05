import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export const ADMIN_ROLE = 'Admin';

export async function POST(request: Request) {
  const { user, token, metadata } = await request.json();
  try {
    const { lastSignInTime, creationTime } = metadata;

    if (lastSignInTime === creationTime) {
      const [firstName, lastName] = user?.displayName?.split(' ') || ['', ''];
      await api.post('/users', {
        email: user?.email || '',
        firstName,
        lastName,
        uid:   user.uid,
        role:  ADMIN_ROLE
      });
    }

    const res = NextResponse.json(token, {
      status: 200,
    });
    res.cookies.set('token', token, {
      httpOnly: true,
      secure:   true,
      sameSite: 'strict',
      path:     '/',
    });

    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
