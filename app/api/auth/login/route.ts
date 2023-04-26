import axiosInstance from '@/api/serverSideAxiosConfig';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const loginData = await request.json();
  try {
    const gatewayResponse = await axiosInstance.post('/auth/login', loginData);
    const res = NextResponse.json(gatewayResponse.data, {
      status: gatewayResponse.status,
    });
    res.cookies.set('token', gatewayResponse.data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
