import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function POST(request: Request) {
  const registerData = await request.json();
  try {
    const { status } = await api.post('/auth/register', registerData);
    const res = new NextResponse(null, {
      status: status,
    });

    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
