import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const url = params.get('url');
    console.log(url);
    const res = await api.get(url as string);
    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;

    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
