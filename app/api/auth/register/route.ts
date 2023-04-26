import axiosInstance from '@/api/serverSideAxiosConfig';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const loginData = await request.json();
  try {
    const { status } = await axiosInstance.post('/auth/register', loginData);
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
