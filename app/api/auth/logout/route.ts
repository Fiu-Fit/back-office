import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function GET() {
  try {
    const gatewayResponse = await api.post('/auth/logout');
    const res = new NextResponse(null, {
      status: gatewayResponse.status,
    });
    res.cookies.delete('token');

    return res;
  } catch (err: unknown) {
    if (!(err instanceof AxiosError)) {
      return NextResponse.json(err, {
        status: 500,
      });
    }
    
    const error = err as AxiosError;
    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
