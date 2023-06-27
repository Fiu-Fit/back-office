import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function POST(request: Request) {
  const loginData = await request.json();
  try {
    const gatewayResponse = await api.post('/auth/admin/login', loginData);
    const res = NextResponse.json(gatewayResponse.data, {
      status: gatewayResponse.status,
    });
    res.cookies.set('token', gatewayResponse.data.token, {
      httpOnly: true,
      secure:   true,
      sameSite: 'strict',
      path:     '/',
      expires:  new Date(Date.now() + 1000 * 60 * 55),
    });

    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
