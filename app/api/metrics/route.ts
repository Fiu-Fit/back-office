import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const url = params.get('url');
    const year = params.get('year');
    const res = await api.get(url as string, {
      params: {
        year,
      },
    });
    return NextResponse.json(res.data);
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
